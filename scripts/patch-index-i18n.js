const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "..", "index.html");
let html = fs.readFileSync(file, "utf8");

const pairs = [
  ['<button class="tick" data-target="#kickoff">', ' data-i18n="nav.kickoff"'],
  ['<button class="tick" data-target="#advisory">', ' data-i18n="nav.advisory"'],
  ['<button class="tick" data-target="#international">', ' data-i18n="nav.international"'],
  ['<button class="tick" data-target="#ventures">', ' data-i18n="nav.ventures"'],
  ['<button class="tick" data-target="#experiences">', ' data-i18n="nav.experiences"'],
  ['<button class="tick" data-target="#fulltime">', ' data-i18n="nav.fulltime"'],
  ['<div class="hero-eyebrow eyebrow">', ' data-i18n="hero.eyebrow"'],
  ['<h1 class="hero-title">', ' data-i18n-html="hero.titleHtml"'],
  ['<span class="badge">', ' data-i18n="hero.badge"'],
  ['class="scroll-cue"', 'class="scroll-cue" data-i18n-sibling="hero.scroll"'],
];

if (!html.includes("lang-switcher")) {
  html = html.replace(
    "</style>",
    `  .lang-switcher{display:flex; align-items:center; gap:8px; flex-shrink:0;}
  .lang-label{font-family:'IBM Plex Mono',monospace; font-size:10px; letter-spacing:0.08em; color:#9FB6AD; text-transform:uppercase;}
  .lang-select{font-family:'IBM Plex Mono',monospace; font-size:11px; background:rgba(0,0,0,0.35); color:#E8F0EB; border:1px solid rgba(255,255,255,0.2); border-radius:6px; padding:6px 8px; max-width:140px;}
  html[dir="rtl"] .lang-switcher{flex-direction:row-reverse;}
</style>`
  );
  html = html.replace(
    `    </div>\n  </div>\n</nav>`,
    `    </div>\n    <div class="lang-switcher">\n      <label for="langSelect" class="lang-label" data-i18n="lang.label">Language</label>\n      <select id="langSelect" class="lang-select"></select>\n    </div>\n  </div>\n</nav>`
  );
}

for (const [find, attr] of pairs) {
  if (find.includes("<button")) {
    html = html.replace(find, find.replace("<button", `<button${attr}`));
  } else if (find.includes("<h1")) {
    html = html.replace(find, find.replace("<h1", `<h1${attr}`));
  } else if (find.includes("<span")) {
    html = html.replace(find, find.replace("<span", `<span${attr}`));
  } else if (find.includes("<div class=\"hero-eyebrow")) {
    html = html.replace(find, find.replace("<div", `<div${attr}`));
  }
}

if (!html.includes('id="schema-json"')) {
  html = html.replace(
    '<script type="application/ld+json">',
    '<script type="application/ld+json" id="schema-json">'
  );
}

if (!html.includes("js/i18n.js")) {
  html = html.replace("</body>", '  <script src="js/i18n.js" defer></script>\n</body>');
}

fs.writeFileSync(file, html, "utf8");
console.log("Patched index.html (partial — extend map as needed)");
