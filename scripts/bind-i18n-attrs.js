const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const en = JSON.parse(fs.readFileSync(path.join(root, "i18n/en.json"), "utf8"));
let html = fs.readFileSync(path.join(root, "index.html"), "utf8");

function leaves(node, prefix, out) {
  Object.keys(node).forEach((k) => {
    const key = prefix ? `${prefix}.${k}` : k;
    const v = node[k];
    if (v && typeof v === "object" && !Array.isArray(v)) leaves(v, key, out);
    else if (typeof v === "string" && !key.startsWith("schemaJson") && !key.startsWith("lang.names")) {
      out.push({ key, text: v });
    }
  });
}

const list = [];
leaves(en, "", list);
list.sort((a, b) => b.text.length - a.text.length);

for (const { key, text } of list) {
  if (!text || text.length < 3 || text.includes("data:image")) continue;
  const plain = text.replace(/<[^>]+>/g, "").trim();
  if (plain.length < 3) continue;
  const attr = text.includes("<") ? "data-i18n-html" : "data-i18n";
  if (html.includes(`${attr}="${key}"`)) continue;

  const needle = text.includes("<") ? text : plain;
  const esc = needle.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`(<([a-zA-Z0-9]+)([^>]*))>\\s*${esc}\\s*</\\2>`, "i");
  if (re.test(html)) {
    html = html.replace(re, `<$2$3 ${attr}="${key}">${needle}</$2>`);
    continue;
  }
  if (!text.includes("<")) {
    const re2 = new RegExp(`(<p)([^>]*)>\\s*${esc}\\s*</p>`, "i");
    if (re2.test(html)) html = html.replace(re2, `<p$2 ${attr}="${key}">${plain}</p>`);
  }
}

fs.writeFileSync(path.join(root, "index.html"), html, "utf8");
console.log("Bound i18n attributes from en.json");
