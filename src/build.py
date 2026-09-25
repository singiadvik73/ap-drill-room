"""Builds the site from src/app.html + src/data/*.js.

  python3 src/build.py                      -> index.html (Cloudflare Pages / any static host, uses config.js + Firebase)
  python3 src/build.py --artifact out.html  -> also a single-file claude.ai artifact build
                                                (links back to the siteUrl set in config.js)
"""
import pathlib, sys

SRC = pathlib.Path(__file__).parent
ROOT = SRC.parent
ORDER = ["hug-a.js", "hug-b.js", "bio-a.js", "bio-b.js", "wh-a.js", "wh-b.js", "chem-a.js", "chem-b.js", "pc-a.js", "pc-b.js", "visuals.js", "visuals2.js", "community.js"]
FIREBASE = "10.12.2"

def app_with_data(prelude=""):
    data = "\n".join((SRC / "data" / f).read_text() for f in ORDER)
    return (SRC / "app.html").read_text().replace("<!--DATA-->", prelude + "<script>\n" + data + "\n</script>")

def site_html(app):
    head, body = app.split('<div class="wrap" id="root">', 1)
    sdk = "\n".join(f'<script src="https://www.gstatic.com/firebasejs/{FIREBASE}/firebase-{m}-compat.js"></script>' for m in ("app", "auth", "firestore"))
    return f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="description" content="Free AP Human Geography, AP Biology, and AP World History practice: questions for every CED unit and topic, with graphs, diagrams, and progress tracking.">
<style>:root{{color-scheme:light;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}}body{{margin:0}}img{{max-width:100%}}[hidden]{{display:none!important}}</style>
{head.strip()}
<script src="config.js"></script>
{sdk}
</head>
<body>
<div class="wrap" id="root">{body}
</body>
</html>
"""

def worker_topics():
    """Trusted course outline for the Claude relay: the relay builds its prompt ONLY from this file,
    never from text the browser sends, so nobody can smuggle their own questions into the shared pool."""
    import json, shutil, subprocess
    node = shutil.which("node")
    if not node:
        print("note: node not found; worker/src/topics.json not regenerated")
        return
    data = "\n".join((SRC / "data" / f).read_text() for f in ORDER if f != "community.js")
    script = "globalThis.window = globalThis;\n" + data + r"""
const out = {};
for (const c of Object.values(AP_DATA)) for (const u of c.units) for (const [code, name, qs] of u.topics)
  out[c.id + "|" + code] = { course: c.name, unitN: u.n, unitName: u.name, topicName: name, stems: qs.slice(0, 12).map(q => q[0]) };
process.stdout.write(JSON.stringify(out));
"""
    res = subprocess.run([node, "-"], input=script, capture_output=True, text=True, check=True)
    topics = json.loads(res.stdout)
    (ROOT / "worker" / "src" / "topics.json").write_text(json.dumps(topics, ensure_ascii=False, indent=0, sort_keys=True) + "\n")
    print("wrote worker/src/topics.json", len(topics), "topics")

if __name__ == "__main__":
    worker_topics()
    app = app_with_data()
    (ROOT / "index.html").write_text(site_html(app))
    print("wrote index.html", len(app) // 1024, "KB")
    if "--artifact" in sys.argv:
        import re, json
        site = re.search(r'siteUrl:\s*"([^"]*)"', (ROOT / "config.js").read_text())
        prelude = "<script>window.APDR_CONFIG = " + json.dumps({"siteUrl": site.group(1) if site else ""}) + ";</script>\n"
        out = pathlib.Path(sys.argv[sys.argv.index("--artifact") + 1])
        out.write_text(app_with_data(prelude))
        print("wrote", out)
