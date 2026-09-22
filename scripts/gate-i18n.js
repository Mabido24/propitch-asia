const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const i18nDir = path.join(root, "i18n");
const enPath = path.join(i18nDir, "en.json");

function flatten(obj, prefix, out) {
  Object.keys(obj).forEach((k) => {
    const val = obj[k];
    const key = prefix ? `${prefix}.${k}` : k;
    if (val && typeof val === "object" && !Array.isArray(val)) {
      flatten(val, key, out);
    } else {
      out[key] = true;
    }
  });
  return out;
}

const en = JSON.parse(fs.readFileSync(enPath, "utf8"));
const enKeys = Object.keys(flatten(en, "", {})).sort();
const locales = fs
  .readdirSync(i18nDir)
  .filter((f) => f.endsWith(".json") && f !== "en.json")
  .map((f) => f.replace(/\.json$/, ""));

let failed = false;

for (const locale of locales) {
  const data = JSON.parse(fs.readFileSync(path.join(i18nDir, `${locale}.json`), "utf8"));
  const keys = Object.keys(flatten(data, "", {})).sort();
  const missing = enKeys.filter((k) => !keys.includes(k));
  const extra = keys.filter((k) => !enKeys.includes(k));
  if (missing.length || extra.length) {
    failed = true;
    console.error(`[i18n] ${locale}: missing ${missing.length}, extra ${extra.length}`);
    if (missing.length) console.error("  missing:", missing.slice(0, 20).join(", "));
    if (extra.length) console.error("  extra:", extra.slice(0, 20).join(", "));
  }
  function allowSameAsEn(key, val) {
    if (key.startsWith("lang.names.")) return true;
    if (key.startsWith("schemaJson.")) return true;
    if (key === "contact.companyEyebrow" || key === "contact.phone" || key === "contact.linkedin") return true;
    if (key === "nav.brand") return true;
    if (key.endsWith(".eyebrow") && /PROPITCH/i.test(val)) return true;
    if (/Kicker$/.test(key) && /^(TOUR|CAMP|EXHB|SCHL)$/.test(val)) return true;
    if (key.startsWith("experiences.chip") && /^[A-Z ·]+$/.test(val)) return true;
    if (key.endsWith("Src") && /Nielsen|UN \/ ASEAN/.test(val)) return true;
    return false;
  }

  if (locale !== "en") {
    const same = enKeys.filter((k) => {
      const get = (o, dotted) =>
        dotted.split(".").reduce((acc, part) => (acc != null ? acc[part] : undefined), o);
      const ev = get(en, k);
      const lv = get(data, k);
      if (allowSameAsEn(k, ev)) return false;
      return typeof ev === "string" && ev === lv;
    });
    if (same.length) {
      failed = true;
      console.error(
        `[i18n] ${locale}: ${same.length} keys still equal to English (sample: ${same.slice(0, 8).join(", ")})`
      );
    }
  }
}

if (failed) {
  console.error("GATE i18n: FAIL");
  process.exit(1);
}
console.log(`GATE i18n: PASS (${locales.length + 1} locales, ${enKeys.length} keys)`);
