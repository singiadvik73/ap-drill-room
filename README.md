# AP Drill Room

Free AP practice for **AP Human Geography**, **AP Biology**, and **AP World History: Modern**: a question pool for every CED unit and topic, AP-style figure questions, progress tracking, accounts, and an admin Dev mode for editing questions. Every topic has at least one figure question (152 in all).

**Website:** https://ap-drill-room.pages.dev/

## Ways to use it

| | Sign in with | AI features (explanations, +5 new questions) |
|---|---|---|
| **Guest** | nothing | No |
| **Account** | Google or email/password | After saving your own Claude API key to your account |

### Your Claude API key

- Save it once on the **Account** page. The relay checks it with Anthropic, then stores it **encrypted** with your account (`apikeys/<uid>`, which no browser can read). It's never shown again or sent back to any browser. It works on every device you sign in on.
- **Remove key from my account** deletes it immediately.
- **Every time you open the site**, you're asked to agree that AI features will use your Claude API credits before the first AI request. Nothing is sent until you agree.

### The shared question bank (Claude-written only)

When someone signed in generates questions with their saved API key, the **Claude relay** (`worker/`) asks Claude for the questions and saves Claude's answer straight to the database. Browsers can't write to the shared bank (`firestore.rules` blocks it), so every shared question comes directly from Claude. Nobody can type one in.

The relay's prompt is fixed: it asks Claude for 5 questions on one CED topic. The browser only sends a course and topic code. The relay fills in the course, unit, topic name and the existing questions to avoid from `worker/src/topics.json`, which `src/build.py` generates from the repo's question files. Nothing a user types can reach the prompt.

- New shared questions show up for everyone right away, labeled **Written by Claude**.
- Every day, a GitHub Action (`.github/workflows/sync-community.yml`) copies them into `src/data/community.js`, rebuilds the site, and commits.
- Admins can hide a bad question in Dev mode. Hidden questions are removed from the file at the next sync.

---

## Setup

### 1. Hosting on Cloudflare Pages (done for you)

The site is served by Cloudflare Pages, connected to this repository: every push to `main` (including the daily question sync) deploys automatically. No build step: the output directory is the repository root. The site works right away as a practice site with guest progress.

### 2. Firebase: accounts and the shared database (~15 min, free)

1. <https://console.firebase.google.com> → **Add project**.
2. **Add app → Web** (`</>`). Copy the `firebaseConfig` values into `config.js`.
3. **Authentication → Get started → Sign-in method**: enable **Google** and **Email/Password**. Under **Settings → Authorized domains**, add your site's domain (for example `ap-drill-room.pages.dev`).
4. **Firestore Database → Create database** (production mode). Under **Rules**, paste `firestore.rules` → **Publish**.
5. Commit and push `config.js`.
6. **Make yourself an admin:** sign in on the site, then on **Account** click **Copy** next to your Account ID. In Firestore → **Data → Start collection** `admins`, set Document ID = that ID, add any field (for example `role` = `owner`), and save. Reload the site. **Dev mode** appears.

### 3. Claude relay: API-key AI on the website (~10 min, optional)

You need a free Cloudflare account and Node.js 18+. No Anthropic key of yours is involved: each person saves their own. Use a dedicated service account with only the **Cloud Datastore User** role for step 1.

1. Firebase console → **Project settings → Service accounts → Generate new private key**. Save it in `worker/` as `service-account.json`. It's git-ignored, so never commit it.
2. In `worker/wrangler.toml`, set `FIREBASE_API_KEY` to the `apiKey` from `config.js`.
3. Deploy:

   ```bash
   cd worker
   npm install
   npx wrangler login
   npx wrangler secret put FIREBASE_SERVICE_ACCOUNT < service-account.json
   openssl rand -base64 32 | tr -d '\\n' | npx wrangler secret put KEY_ENCRYPTION_SECRET
   npx wrangler deploy
   ```

4. Put the printed `https://….workers.dev` URL in `aiEndpoint` in `config.js`, then commit and push.
5. Optional daily cap per person: run `npx wrangler kv namespace create USAGE`, paste the id into `wrangler.toml`, and redeploy.

The relay uses `claude-opus-5` by default, with Anthropic's automatic fallback turned on (if Claude declines a request, it's retried on Anthropic's recommended backup model). Change the model with `CLAUDE_MODEL` in `wrangler.toml`.

---

## Practice sets

Practice on a single topic gives 5 questions by default (change it to 3 or All with **Per topic** on any course page). Questions you missed last time come first, then ones you haven't seen.

## Dev mode (admins)

- **Browse & edit questions**: answer keys, figures, stats. Filter, search, **Edit**, **Hide**, **Revert**, **Delete** (added questions).
- **Add a question**, including a figure as JSON with live preview.
- **Testing tools**: answer key while practicing, skip, auto-answer, simulated progress, a content checker, and JSON export/import.

Edits save to Firestore (`content/edits`) and apply for every visitor immediately.

## Editing the code

The files you edit live in `src/`: `app.html` (app and styles) and `data/*.js` (question pools; `community.js` is generated). Rebuild after changes:

```bash
python3 src/build.py
```

## Security model

- The Firebase web config in `config.js` is public by design. `firestore.rules` enforces access.
- Shared question edits: anyone can read, and only accounts in `admins` can write.
- Shared question bank (`community`): anyone can read, and only the relay's service account can write.
- Progress (`data/users/<uid>/account`): only that account can read or write it.
- Saved API keys are encrypted with `KEY_ENCRYPTION_SECRET` (a Worker secret) and stored where only the relay's service account can read them. They're decrypted only inside the relay, per request, and never logged or returned to a browser.
- The relay accepts only signed-in users of this site and builds every prompt itself, so it can't be used as a general chatbot.

## Free-tier limits

Firebase's free plan allows 50,000 reads and 20,000 writes per day. A visit costs a few reads. Progress saves at most every 10 seconds while practicing. That covers hundreds of daily users.
