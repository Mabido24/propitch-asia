const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "..", "index.html");
let html = fs.readFileSync(file, "utf8");

function tag(attr, key, htmlMode) {
  const a = htmlMode ? ` data-i18n-html="${key}"` : ` data-i18n="${key}"`;
  return a;
}

const edits = [
  ["<button class=\"tick\" data-target=\"#kickoff\"", `<button class="tick" data-target="#kickoff"${tag("", "nav.kickoff")}`],
  ["<button class=\"tick\" data-target=\"#advisory\"", `<button class="tick" data-target="#advisory"${tag("", "nav.advisory")}`],
  ["<button class=\"tick\" data-target=\"#international\"", `<button class="tick" data-target="#international"${tag("", "nav.international")}`],
  ["<button class=\"tick\" data-target=\"#ventures\"", `<button class="tick" data-target="#ventures"${tag("", "nav.ventures")}`],
  ["<button class=\"tick\" data-target=\"#experiences\"", `<button class="tick" data-target="#experiences"${tag("", "nav.experiences")}`],
  ["<button class=\"tick\" data-target=\"#fulltime\"", `<button class="tick" data-target="#fulltime"${tag("", "nav.fulltime")}`],
  ["<div class=\"hero-eyebrow eyebrow\">", `<div class="hero-eyebrow eyebrow"${tag("", "hero.eyebrow")}>`],
  ["<h1 class=\"hero-title\">", `<h1 class="hero-title"${tag("", "hero.titleHtml", true)}>`],
  ["<span class=\"badge\">", `<span class="badge"${tag("", "hero.badge")}>`],
  ["SCROLL FOR KICKOFF", `<span data-i18n="hero.scroll">SCROLL FOR KICKOFF</span>`],
  ['<div class="eyebrow" style="color:var(--turf); margin-bottom:14px;">WHY SOUTHEAST ASIA</div>',
    '<div class="eyebrow" style="color:var(--turf); margin-bottom:14px;" data-i18n="whyAsia.eyebrow">WHY SOUTHEAST ASIA</div>'],
  ['<h2 style="font-size:clamp(26px,3.6vw,38px); font-weight:800; margin-bottom:18px;">Building the future of football in Asia.</h2>',
    '<h2 style="font-size:clamp(26px,3.6vw,38px); font-weight:800; margin-bottom:18px;" data-i18n="whyAsia.title">Building the future of football in Asia.</h2>'],
];

if (!html.includes("lang-switcher")) {
  html = html.replace(
    "</style>",
    `  .lang-switcher{display:flex; align-items:center; gap:8px; flex-shrink:0;}
  .lang-label{font-family:'IBM Plex Mono',monospace; font-size:10px; letter-spacing:0.08em; color:#9FB6AD; text-transform:uppercase;}
  .lang-select{font-family:'IBM Plex Mono',monospace; font-size:11px; background:rgba(0,0,0,0.35); color:#E8F0EB; border:1px solid rgba(255,255,255,0.2); border-radius:6px; padding:6px 8px; max-width:140px;}
</style>`
  );
  html = html.replace(
    "    </div>\n  </div>\n</nav>",
    "    </div>\n    <div class=\"lang-switcher\">\n      <label for=\"langSelect\" class=\"lang-label\" data-i18n=\"lang.label\">Language</label>\n      <select id=\"langSelect\" class=\"lang-select\"></select>\n    </div>\n  </div>\n</nav>"
  );
}

for (const [from, to] of edits) {
  if (html.includes(from) && !html.includes(to.slice(0, 40))) html = html.replace(from, to);
}

const pTags = [
  ["whyAsia.p1", "Southeast Asia already over-indexes"],
  ["whyAsia.p2", "We work across four divisions"],
  ["advisory.intro", "From world-class pitches"],
  ["international.intro", "Where world football meets Asia"],
  ["ventures.intro", "Football development without borders"],
  ["experiences.intro", "Where the audience meets the game"],
  ["contact.intro", "Whether it's a facility masterplan"],
];

for (const [key, start] of pTags) {
  const re = new RegExp(`(<p>)([^<]*${start.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}[^<]*)(</p>)`);
  html = html.replace(re, `<p data-i18n="${key}">$2</p>`);
}

if (!html.includes('id="schema-json"')) {
  html = html.replace('<script type="application/ld+json">', '<script type="application/ld+json" id="schema-json">');
}
if (!html.includes("js/i18n.js")) {
  html = html.replace("</body>", '  <script src="js/i18n.js" defer></script>\n</body>');
}

fs.writeFileSync(file, html, "utf8");
console.log("index.html i18n hooks applied");
