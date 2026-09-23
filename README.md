# AP Drill Room

Free AP practice for **AP Human Geography** and **AP Biology**: a question pool for every CED unit and topic, AP-style figure questions, progress tracking, accounts, and an admin Dev mode for editing questions.

**Website:** https://singiadvik73.github.io/ap-drill-room/

## Ways to use it

| | Sign in with | AI features (explanations, +5 new questions) | Who pays for AI |
|---|---|---|---|
| **Website, guest** | nothing | No | — |
| **Website, account** | Google or email/password | Only with your own Anthropic API key | You, per use, on your Anthropic account |
| **Claude version** | your Claude account (on claude.ai) | Yes, after you agree on a consent screen | Your Claude plan's usage (and paid credits if you've turned on extra usage) |

The Claude version runs inside claude.ai, because Anthropic doesn't let outside websites offer "Sign in with Claude" or spend a Claude plan's usage. Everyone signs in to claude.ai as usual, and the app asks clearly before any request uses their Claude usage. Claude also asks its own permission.

### Linking a Claude session and a Google account

- **Claude → website:** in the Claude version, open **Account → Link Google account**. The website opens and you sign in with Google, and your progress and generated questions are added to that account.
- **Website → Claude:** on the website, open **Account → Linked accounts → Open in Claude**. It copies a link code. In the Claude version, paste it under **Account → Bring progress from the website**.

A claude.ai app can't connect to other websites, so linking moves your data when you click, instead of syncing continuously. The data travels in the link's `#` part, which browsers never send to any server.

### The shared question bank (Claude-written only)

When someone signed in on the website generates questions with their API key, the **Claude relay** (`worker/`) asks Claude for the questions and saves Claude's answer straight to the database. Browsers can't write to the shared bank (`firestore.rules` blocks it), so every shared question comes directly from Claude. Nobody can type one in.

- New shared questions show up for everyone right away, labeled **Written by Claude**.
- Every day, a GitHub Action (`.github/workflows/sync-community.yml`) copies them into `src/data/community.js`, rebuilds the site, and commits.
- Admins can hide a bad question in Dev mode. Hidden questions are removed from the file at the next sync.
- Questions generated in the Claude version stay with that person (and their linked account). The Claude version runs on claude.ai, so the relay can't confirm they came from Claude. Only relay-generated questions join the shared bank.

---

## Setup

### 1. GitHub Pages (done for you)

The repository and Pages site are already set up. The site works right away as a practice site with guest progress.

### 2. Firebase: accounts and the shared database (~15 min, free)

1. <https://console.firebase.google.com> → **Add project**.
2. **Add app → Web** (`</>`). Copy the `firebaseConfig` values into `config.js`.
3. **Authentication → Get started → Sign-in method**: enable **Google** and **Email/Password**. Under **Settings → Authorized domains**, add `singiadvik73.github.io`.
4. **Firestore Database → Create database** (production mode). Under **Rules**, paste `firestore.rules` → **Publish**.
5. Commit and push `config.js`.
6. **Make yourself an admin:** sign in on the site, then on **Account** click **Copy** next to your Account ID. In Firestore → **Data → Start collection** `admins`, set Document ID = that ID, add any field (for example `role` = `owner`), and save. Reload the site. **Dev mode** appears.

### 3. Claude relay: API-key AI on the website (~10 min, optional)

You need a free Cloudflare account and Node.js 18+. No Anthropic key of yours is involved: each person uses their own.

1. Firebase console → **Project settings → Service accounts → Generate new private key**. Save it in `worker/` as `service-account.json`. It's git-ignored, so never commit it.
2. In `worker/wrangler.toml`, set `FIREBASE_API_KEY` to the `apiKey` from `config.js`.
3. Deploy:

   ```bash
   cd worker
   npm install
   npx wrangler login
   npx wrangler secret put FIREBASE_SERVICE_ACCOUNT < service-account.json
   npx wrangler deploy
   ```

4. Put the printed `https://….workers.dev` URL in `aiEndpoint` in `config.js`, then commit and push.
5. Optional daily cap per person: run `npx wrangler kv namespace create USAGE`, paste the id into `wrangler.toml`, and redeploy.

The relay uses `claude-opus-5` by default, with Anthropic's automatic fallback turned on (if Claude declines a request, it's retried on Anthropic's recommended backup model). Change the model with `CLAUDE_MODEL` in `wrangler.toml`.

### 4. The Claude version

It's published at the `claudeAppUrl` in `config.js`. To let anyone use it, open it on claude.ai → **Share** → turn on the public link. After changing the code, the Claude version is updated by republishing it from Claude.

---

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
- API keys stay in the person's browser and are removed when they sign out. The relay uses a key for one request and never stores or logs it.
- The relay accepts only signed-in users of this site and builds every prompt itself, so it can't be used as a general chatbot.

## Free-tier limits

Firebase's free plan allows 50,000 reads and 20,000 writes per day. A visit costs a few reads. Progress saves at most every 10 seconds while practicing. That covers hundreds of daily users.
