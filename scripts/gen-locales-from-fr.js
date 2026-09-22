const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const en = JSON.parse(fs.readFileSync(path.join(root, "i18n/en.json"), "utf8"));
const fr = JSON.parse(fs.readFileSync(path.join(root, "i18n/fr.json"), "utf8"));

function walk(enNode, frNode, pathParts, out) {
  Object.keys(enNode).forEach((k) => {
    const p = [...pathParts, k];
    const ev = enNode[k];
    const fv = frNode && frNode[k];
    if (ev && typeof ev === "object" && !Array.isArray(ev)) {
      walk(ev, fv, p, out);
    } else if (typeof ev === "string") {
      out[p.join(".")] = { en: ev, fr: typeof fv === "string" ? fv : ev };
    }
  });
}

const flat = {};
walk(en, fr, [], flat);

const packs = {
  de: require("./trans/de-map.json"),
  it: require("./trans/it-map.json"),
  es: require("./trans/es-map.json"),
  pt: require("./trans/pt-map.json"),
  th: require("./trans/th-map.json"),
  ru: require("./trans/ru-map.json"),
  zh: require("./trans/zh-map.json"),
  ar: require("./trans/ar-map.json")
};

function setNested(obj, dotted, val) {
  const parts = dotted.split(".");
  let cur = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    if (!cur[parts[i]]) cur[parts[i]] = {};
    cur = cur[parts[i]];
  }
  cur[parts[parts.length - 1]] = val;
}

function buildLocale(code, map) {
  const out = JSON.parse(JSON.stringify(en));
  for (const [key, row] of Object.entries(flat)) {
    if (key.startsWith("schemaJson")) continue;
    const translated = map[key] || map[row.fr] || map[row.en];
    if (translated) setNested(out, key, translated);
  }
  if (out.schemaJson && out.schemaJson["@graph"]) {
    out.schemaJson["@graph"].forEach((node) => {
      if (node.inLanguage) node.inLanguage = code === "zh" ? "zh-Hans" : code;
    });
  }
  return out;
}

for (const code of Object.keys(packs)) {
  const data = buildLocale(code, packs[code]);
  fs.writeFileSync(path.join(root, "i18n", `${code}.json`), JSON.stringify(data, null, 2) + "\n", "utf8");
}

fs.writeFileSync(path.join(root, "i18n", "fr.json"), JSON.stringify(buildLocale("fr", require("./trans/fr-map.json")), null, 2) + "\n", "utf8");
console.log("Generated locales from maps");
