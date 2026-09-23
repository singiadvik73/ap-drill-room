// Cloudflare Worker: Claude relay for the website's "Explain more" and "+5 new" buttons.
//
// - Callers must be signed in to your site (Firebase ID token) AND supply their OWN Anthropic API key
//   (header x-anthropic-key). The key is used for this one request and never stored or logged.
// - Every prompt is built here, so this can't be used as a general-purpose chatbot.
// - Generated questions are written to Firestore by THIS Worker with a service account. Browsers can't
//   write to the shared pool (see firestore.rules), so every shared question is guaranteed to come
//   straight from a Claude response.
import Anthropic from "@anthropic-ai/sdk";

const DEFAULT_MODEL = "claude-opus-5";

const QUESTIONS_SCHEMA = {
  type: "object",
  properties: {
    questions: {
      type: "array",
      items: {
        type: "object",
        properties: {
          stem: { type: "string" },
          correct: { type: "string" },
          wrong: { type: "array", items: { type: "string" } },
          explanation: { type: "string" }
        },
        required: ["stem", "correct", "wrong", "explanation"],
        additionalProperties: false
      }
    }
  },
  required: ["questions"],
  additionalProperties: false
};

export default {
  async fetch(request, env) {
    const origin = request.headers.get("origin") || "";
    const allowed = (env.ALLOWED_ORIGINS || "").split(",").map(s => s.trim()).filter(Boolean);
    const cors = {
      "access-control-allow-origin": allowed.includes(origin) ? origin : (allowed[0] || ""),
      "access-control-allow-methods": "POST, OPTIONS",
      "access-control-allow-headers": "content-type, authorization, x-anthropic-key",
      "access-control-max-age": "86400",
      vary: "origin"
    };
    const json = (obj, status = 200) => new Response(JSON.stringify(obj), { status, headers: { ...cors, "content-type": "application/json" } });

    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });
    if (request.method !== "POST") return json({ error: "Use POST" }, 405);
    if (!allowed.includes(origin)) return json({ error: "Origin not allowed" }, 403);

    const kind = new URL(request.url).pathname.replace(/^\/+|\/+$/g, "");
    if (kind !== "explain" && kind !== "generate") return json({ error: "Unknown endpoint" }, 404);

    // 1. Signed-in users of your site only.
    const token = (request.headers.get("authorization") || "").replace(/^Bearer\s+/i, "");
    const uid = await verifyFirebaseUser(token, env);
    if (!uid) return json({ error: "sign_in", message: "Sign in required" }, 401);

    // 2. The caller's own Anthropic API key (billed to them).
    const apiKey = request.headers.get("x-anthropic-key") || "";
    if (!/^sk-ant-[A-Za-z0-9_-]{20,}$/.test(apiKey)) return json({ error: "bad_key", message: "Missing or malformed API key" }, 400);

    // 3. Optional per-user daily cap (protects the shared database from floods).
    if (env.USAGE) {
      const key = `${uid}:${new Date().toISOString().slice(0, 10)}`;
      const used = parseInt((await env.USAGE.get(key)) || "0", 10);
      if (used >= parseInt(env.DAILY_LIMIT || "60", 10)) return json({ error: "limit", message: "Daily limit reached" }, 429);
      await env.USAGE.put(key, String(used + 1), { expirationTtl: 172800 });
    }

    let input;
    try { input = await request.json(); } catch { return json({ error: "bad_input", message: "Invalid JSON" }, 400); }

    const client = new Anthropic({ apiKey, maxRetries: 1 });
    const model = env.CLAUDE_MODEL || DEFAULT_MODEL;

    try {
      if (kind === "explain") {
        const c = readExplain(input);
        const response = await client.beta.messages.create({
          model,
          max_tokens: 4096,
          betas: ["server-side-fallback-2026-07-01"],
          fallbacks: "default",               // if Claude declines, Anthropic retries on its recommended fallback model
          output_config: { effort: "low" },   // short explanations don't need deep reasoning
          messages: [{ role: "user", content: explainPrompt(c) }]
        });
        if (response.stop_reason === "refusal") return json({ error: "declined", message: "Claude declined this request" }, 422);
        const text = response.content.filter(b => b.type === "text").map(b => b.text).join("").trim();
        return json({ text });
      }

      const c = readGenerate(input);
      const response = await client.beta.messages.create({
        model,
        max_tokens: 8192,
        betas: ["server-side-fallback-2026-07-01"],
        fallbacks: "default",
        output_config: { format: { type: "json_schema", schema: QUESTIONS_SCHEMA } },
        messages: [{ role: "user", content: generatePrompt(c) }]
      });
      if (response.stop_reason === "refusal") return json({ error: "declined", message: "Claude declined this request" }, 422);
      const text = response.content.filter(b => b.type === "text").map(b => b.text).join("");
      const questions = (JSON.parse(text).questions || [])
        .filter(q => q && q.stem && q.correct && Array.isArray(q.wrong) && q.wrong.length >= 3)
        .slice(0, 5)
        .map(q => ({ stem: q.stem, correct: q.correct, wrong: q.wrong.slice(0, 3), explanation: q.explanation || "" }));
      if (!questions.length) return json({ error: "empty", message: "Claude returned no usable questions" }, 502);

      // Save to the shared pool directly from Claude's response.
      const id = await saveCommunity(env, { course: c.courseId, topic: c.topicCode, questions, uid, model: response.model || model });
      return json({ id, questions });
    } catch (e) {
      if (e instanceof BadInput) return json({ error: "bad_input", message: e.message }, 400);
      if (e instanceof Anthropic.AuthenticationError || e instanceof Anthropic.PermissionDeniedError) return json({ error: "bad_key", message: "Your API key was rejected" }, 400);
      if (e instanceof Anthropic.RateLimitError) return json({ error: "busy", message: "Your API key hit a rate limit" }, 429);
      if (e instanceof Anthropic.BadRequestError && /credit/i.test(e.message || "")) return json({ error: "no_credits", message: "Your Anthropic account has no credits" }, 402);
      if (e instanceof Anthropic.APIError) return json({ error: "claude", message: "Claude API error" }, 502);
      if (e instanceof StoreError) return json({ error: "store", message: "Couldn't save questions" }, 502);
      return json({ error: "server", message: "Server error" }, 500);
    }
  }
};

/* ---------- auth ---------- */

// A Firebase ID token is valid if Google's Identity Toolkit can look it up for your project.
async function verifyFirebaseUser(idToken, env) {
  if (!idToken || idToken.length > 4096 || !env.FIREBASE_API_KEY) return null;
  const r = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${encodeURIComponent(env.FIREBASE_API_KEY)}`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ idToken })
  });
  if (!r.ok) return null;
  const data = await r.json();
  return (data.users && data.users[0] && data.users[0].localId) || null;
}

/* ---------- Firestore write with a service account (bypasses client rules by design) ---------- */

class StoreError extends Error {}
let cachedToken = null;

async function googleAccessToken(env) {
  if (cachedToken && cachedToken.exp > Date.now() + 60000) return cachedToken.token;
  let sa;
  try { sa = JSON.parse(env.FIREBASE_SERVICE_ACCOUNT); } catch { throw new StoreError("FIREBASE_SERVICE_ACCOUNT secret is missing or not JSON"); }
  const now = Math.floor(Date.now() / 1000);
  const b64url = s => btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  const header = b64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claims = b64url(JSON.stringify({ iss: sa.client_email, scope: "https://www.googleapis.com/auth/datastore", aud: "https://oauth2.googleapis.com/token", iat: now, exp: now + 3600 }));
  const pem = sa.private_key.replace(/-----[^-]+-----/g, "").replace(/\s+/g, "");
  const der = Uint8Array.from(atob(pem), ch => ch.charCodeAt(0));
  const key = await crypto.subtle.importKey("pkcs8", der, { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, false, ["sign"]);
  const sig = new Uint8Array(await crypto.subtle.sign("RSASSA-PKCS1-v1_5", key, new TextEncoder().encode(`${header}.${claims}`)));
  const jwt = `${header}.${claims}.${b64url(String.fromCharCode(...sig))}`;
  const r = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: `grant_type=${encodeURIComponent("urn:ietf:params:oauth:grant-type:jwt-bearer")}&assertion=${jwt}`
  });
  if (!r.ok) throw new StoreError("Google token exchange failed");
  const t = await r.json();
  cachedToken = { token: t.access_token, exp: Date.now() + (t.expires_in || 3600) * 1000 };
  return cachedToken.token;
}

async function saveCommunity(env, rec) {
  let project;
  try { project = JSON.parse(env.FIREBASE_SERVICE_ACCOUNT).project_id; } catch { throw new StoreError("bad service account"); }
  const token = await googleAccessToken(env);
  const r = await fetch(`https://firestore.googleapis.com/v1/projects/${project}/databases/(default)/documents/community`, {
    method: "POST",
    headers: { authorization: `Bearer ${token}`, "content-type": "application/json" },
    body: JSON.stringify({
      fields: {
        course: { stringValue: rec.course },
        topic: { stringValue: rec.topic },
        json: { stringValue: JSON.stringify(rec.questions) },
        uid: { stringValue: rec.uid },
        model: { stringValue: String(rec.model) },
        createdAt: { timestampValue: new Date().toISOString() }
      }
    })
  });
  if (!r.ok) throw new StoreError("Firestore write failed: " + r.status);
  const doc = await r.json();
  return doc.name.split("/").pop();
}

/* ---------- input validation and prompts ---------- */

class BadInput extends Error {}
const str = (v, max) => { if (typeof v !== "string" || !v.trim()) throw new BadInput("Missing field"); return v.slice(0, max); };
const idx = v => { const n = Number(v); if (!Number.isInteger(n) || n < 0 || n > 3) throw new BadInput("Bad index"); return n; };

function readExplain(b) {
  if (!Array.isArray(b.options) || b.options.length !== 4) throw new BadInput("Need four options");
  return {
    course: str(b.course, 80), topicCode: str(b.topicCode, 10), topicName: str(b.topicName, 120),
    stem: str(b.stem, 1500), options: b.options.map(o => str(o, 500)),
    correct: idx(b.correct), picked: idx(b.picked),
    fig: typeof b.fig === "string" ? b.fig.slice(0, 3000) : ""
  };
}
function readGenerate(b) {
  const courseId = str(b.courseId, 20);
  if (!/^[a-z0-9-]+$/.test(courseId)) throw new BadInput("Bad course id");
  const topicCode = str(b.topicCode, 10);
  if (!/^\d{1,2}\.\d{1,2}$/.test(topicCode)) throw new BadInput("Bad topic code");
  return {
    courseId, course: str(b.course, 80), unitN: String(b.unitN).slice(0, 3), unitName: str(b.unitName, 160),
    topicCode, topicName: str(b.topicName, 120),
    existing: (Array.isArray(b.existing) ? b.existing : []).slice(0, 12).map(s => String(s).slice(0, 400))
  };
}

function explainPrompt(c) {
  const L = "ABCD";
  return `A student is studying ${c.course}, CED Topic ${c.topicCode} "${c.topicName}".
${c.fig ? "The question has a figure described by this data: " + c.fig + "\n" : ""}Question: ${c.stem}
Options:
${c.options.map((o, i) => L[i] + ". " + o).join("\n")}
Correct answer: ${L[c.correct]}. The student chose: ${L[c.picked]}.

In 120 words or fewer of plain text with no markdown, explain why the correct answer is right${c.picked !== c.correct ? " and why the student's choice is wrong" : ""}. Then give one quick tip for remembering the concept on the AP exam.`;
}

function generatePrompt(c) {
  return `You write practice questions for ${c.course}, Unit ${c.unitN} (${c.unitName}), CED Topic ${c.topicCode}: "${c.topicName}".
Write 5 NEW, original, accurate AP-style multiple-choice questions for this topic only. Mix recall with application or data/scenario reasoning, at real AP exam difficulty. Each has exactly one correct answer and exactly 3 plausible wrong answers that reflect common misconceptions. Do not use "all of the above" or "none of the above". Give a 1-2 sentence explanation of why the correct answer is right. Do not repeat these existing questions:
${c.existing.map(x => "- " + x).join("\n")}`;
}
