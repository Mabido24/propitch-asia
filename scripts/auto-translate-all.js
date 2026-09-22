const fs = require("fs");
const path = require("path");
const translate = require("google-translate-api-x");

const root = path.join(__dirname, "..");
const en = JSON.parse(fs.readFileSync(path.join(root, "i18n/en.json"), "utf8"));

const TARGETS = process.argv.slice(2).length
  ? process.argv.slice(2)
  : ["fr", "de", "it", "es", "pt", "th", "ru", "zh", "ar"];

function walk(node, parts, leaves) {
  Object.keys(node).forEach((k) => {
    const p = [...parts, k];
    const v = node[k];
    if (v && typeof v === "object" && !Array.isArray(v)) walk(v, p, leaves);
    else if (typeof v === "string" && p[0] !== "schemaJson") leaves.push({ path: p.join("."), text: v });
  });
}

function setPath(obj, dotted, val) {
  const parts = dotted.split(".");
  let cur = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    if (!cur[parts[i]]) cur[parts[i]] = {};
    cur = cur[parts[i]];
  }
  cur[parts[parts.length - 1]] = val;
}

function localizeSchema(schema, code) {
  const out = JSON.parse(JSON.stringify(schema));
  out["@graph"].forEach((node) => {
    if (node.inLanguage) node.inLanguage = code === "zh" ? "zh-Hans" : code;
  });
  return out;
}

async function main() {
  const leaves = [];
  walk(en, [], leaves);
  const texts = leaves.map((l) => l.text);
  const skip = new Set(leaves.filter((l) => l.path.startsWith("lang.names.")).map((l) => l.path));

  for (const to of TARGETS) {
    const out = JSON.parse(JSON.stringify(en));
    const toTranslate = leaves.filter((l) => !skip.has(l.path));
    const batch = toTranslate.map((l) => l.text);
    const apiTo = to === "zh" ? "zh-CN" : to;
    const res = await translate(batch, { from: "en", to: apiTo, forceTo: to === "zh" });
    const translated = Array.isArray(res) ? res.map((r) => r.text) : [res.text];
    toTranslate.forEach((leaf, i) => setPath(out, leaf.path, translated[i]));
    out.schemaJson = localizeSchema(en.schemaJson, to);
    fs.writeFileSync(path.join(root, "i18n", `${to}.json`), JSON.stringify(out, null, 2) + "\n", "utf8");
    console.log("Wrote", to);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
