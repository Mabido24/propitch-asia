const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const SKIP = new Set([".git", "node_modules"]);

function walk(dir, files) {
  for (const name of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP.has(name.name)) continue;
    const p = path.join(dir, name.name);
    if (name.isDirectory()) walk(p, files);
    else files.push(p);
  }
}

const files = [];
walk(root, files);
const bom = [];
for (const f of files) {
  if (!/\.(json|js|html|md|txt|xml|css)$/i.test(f)) continue;
  const buf = fs.readFileSync(f);
  if (buf.length >= 3 && buf[0] === 0xef && buf[1] === 0xbb && buf[2] === 0xbf) {
    bom.push(path.relative(root, f));
  }
}

if (bom.length) {
  console.error("BOM detected:", bom.join(", "));
  process.exit(1);
}
console.log("check-no-bom: PASS");
