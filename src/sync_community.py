"""Copies Claude-written questions from Firestore (collection "community") into src/data/community.js.

Run by the GitHub Action every day. Reads with the public web API key, which works because
firestore.rules lets anyone read the shared question bank (only the Claude relay can write to it).
Questions an admin hid in Dev mode are dropped from the file (kept as null so question IDs stay stable).
"""
import json, pathlib, re, sys, urllib.error, urllib.parse, urllib.request

ROOT = pathlib.Path(__file__).resolve().parent.parent
cfg = (ROOT / "config.js").read_text()
project = re.search(r'projectId:\s*"([^"]*)"', cfg).group(1)
key = re.search(r'apiKey:\s*"([^"]*)"', cfg).group(1)
if not project or not key or "YOUR_" in project or "YOUR_" in key:
    print("config.js has no Firebase project yet; nothing to sync.")
    sys.exit(0)

base = f"https://firestore.googleapis.com/v1/projects/{project}/databases/(default)/documents"

def get(url):
    with urllib.request.urlopen(url, timeout=30) as r:
        return json.load(r)

docs, token = [], None
while True:
    url = f"{base}/community?pageSize=300&key={key}" + (f"&pageToken={urllib.parse.quote(token)}" if token else "")
    page = get(url)
    docs += page.get("documents", [])
    token = page.get("nextPageToken")
    if not token:
        break

hidden = set()
try:
    edits = json.loads(get(f"{base}/content/edits?key={key}")["fields"]["json"]["stringValue"])
    hidden = {qid for qid, e in edits.items() if isinstance(e, dict) and e.get("hidden")}
except (urllib.error.HTTPError, KeyError, ValueError):
    pass

records = []
for doc in docs:
    f = doc.get("fields", {})
    doc_id = doc["name"].rsplit("/", 1)[-1]
    try:
        questions = json.loads(f["json"]["stringValue"])
        rec = {"id": doc_id, "course": f["course"]["stringValue"], "topic": f["topic"]["stringValue"],
               "at": f["createdAt"]["timestampValue"], "model": f.get("model", {}).get("stringValue", "")}
    except (KeyError, ValueError):
        continue
    rec["questions"] = [None if f"c-{doc_id}-{i}" in hidden else q for i, q in enumerate(questions)]
    records.append(rec)

records.sort(key=lambda r: r["at"])
until = records[-1]["at"] if records else None
out = ("// Questions written by Claude through the website's relay, folded in daily by .github/workflows/sync-community.yml.\n"
       "// Generated file: don't edit by hand (hide bad questions in Dev mode instead).\n"
       f"window.AP_COMMUNITY = {json.dumps(records, ensure_ascii=False, indent=1)};\n"
       f"window.AP_COMMUNITY_UNTIL = {json.dumps(until)};\n")
path = ROOT / "src" / "data" / "community.js"
if path.read_text() != out:
    path.write_text(out)
print(f"{len(records)} question sets ({sum(len(r['questions']) for r in records)} questions), latest {until}")
