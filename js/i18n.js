(function () {
  "use strict";

  var SUPPORTED = [
    { code: "en", hreflang: "en", dir: "ltr", ogLocale: "en_GB" },
    { code: "fr", hreflang: "fr", dir: "ltr", ogLocale: "fr_FR" },
    { code: "de", hreflang: "de", dir: "ltr", ogLocale: "de_DE" },
    { code: "it", hreflang: "it", dir: "ltr", ogLocale: "it_IT" },
    { code: "es", hreflang: "es", dir: "ltr", ogLocale: "es_ES" },
    { code: "pt", hreflang: "pt", dir: "ltr", ogLocale: "pt_PT" },
    { code: "th", hreflang: "th", dir: "ltr", ogLocale: "th_TH" },
    { code: "ru", hreflang: "ru", dir: "ltr", ogLocale: "ru_RU" },
    { code: "zh", hreflang: "zh-Hans", dir: "ltr", ogLocale: "zh_CN" },
    { code: "ar", hreflang: "ar", dir: "rtl", ogLocale: "ar_AE" }
  ];

  var STORAGE_KEY = "propitch_locale";
  var messages = {};
  var flat = {};

  function getParamLocale() {
    try {
      var p = new URLSearchParams(window.location.search).get("lang");
      if (p && SUPPORTED.some(function (l) { return l.code === p; })) return p;
    } catch (e) {}
    return null;
  }

  function resolveLocale() {
    return getParamLocale() || localStorage.getItem(STORAGE_KEY) || "en";
  }

  function flatten(obj, prefix, out) {
    Object.keys(obj).forEach(function (k) {
      var val = obj[k];
      var key = prefix ? prefix + "." + k : k;
      if (val && typeof val === "object" && !Array.isArray(val)) {
        flatten(val, key, out);
      } else {
        out[key] = val;
      }
    });
    return out;
  }

  function t(key) {
    return flat[key] != null ? flat[key] : key;
  }

  function applyDom() {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (!key) return;
      el.textContent = t(key);
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (!key) return;
      el.innerHTML = t(key);
    });
    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      var spec = el.getAttribute("data-i18n-attr");
      if (!spec) return;
      spec.split(";").forEach(function (pair) {
        var parts = pair.split(":");
        if (parts.length === 2) {
          var attr = parts[0].trim();
          var k = parts[1].trim();
          el.setAttribute(attr, t(k));
        }
      });
    });
  }

  function applyMeta() {
    document.title = t("meta.title");
    setMeta("description", t("meta.description"));
    setMeta("og:title", t("meta.title"), "property");
    setMeta("og:description", t("meta.ogDescription"), "property");
    setMeta("twitter:title", t("meta.title"));
    setMeta("twitter:description", t("meta.ogDescription"));
    var loc = SUPPORTED.find(function (l) { return l.code === current; });
    if (loc) setMeta("og:locale", loc.ogLocale, "property");
  }

  function setMeta(name, content, kind) {
    kind = kind || "name";
    var sel = kind === "property" ? 'meta[property="' + name + '"]' : 'meta[name="' + name + '"]';
    var el = document.querySelector(sel);
    if (!el) return;
    el.setAttribute("content", content);
  }

  function applySchema() {
    if (!messages.schemaJson) return;
    var script = document.getElementById("schema-json");
    if (!script) return;
    try {
      script.textContent = JSON.stringify(messages.schemaJson, null, 2);
    } catch (e) {}
  }

  function applyHreflang() {
    var base = window.location.origin + window.location.pathname;
    document.querySelectorAll("link[data-i18n-hreflang]").forEach(function (l) { l.remove(); });
    SUPPORTED.forEach(function (l) {
      var link = document.createElement("link");
      link.rel = "alternate";
      link.hreflang = l.hreflang;
      link.href = base + (base.indexOf("?") >= 0 ? "&" : "?") + "lang=" + l.code;
      link.setAttribute("data-i18n-hreflang", "1");
      document.head.appendChild(link);
    });
    var x = document.createElement("link");
    x.rel = "alternate";
    x.hreflang = "x-default";
    x.href = base;
    x.setAttribute("data-i18n-hreflang", "1");
    document.head.appendChild(x);
  }

  function fillLangSelect() {
    var sel = document.getElementById("langSelect");
    if (!sel) return;
    sel.innerHTML = "";
    SUPPORTED.forEach(function (l) {
      var opt = document.createElement("option");
      opt.value = l.code;
      opt.textContent = t("lang.names." + l.code);
      sel.appendChild(opt);
    });
    sel.value = current;
  }

  var current = "en";

  function setLocale(code, persist) {
    if (!SUPPORTED.some(function (l) { return l.code === code; })) code = "en";
    current = code;
    if (persist) localStorage.setItem(STORAGE_KEY, code);
    var loc = SUPPORTED.find(function (l) { return l.code === code; }) || SUPPORTED[0];
    document.documentElement.lang = code === "zh" ? "zh-Hans" : code;
    document.documentElement.dir = loc.dir;
    return fetch("i18n/" + code + ".json", { cache: "no-cache" })
      .then(function (r) {
        if (!r.ok) throw new Error("locale load failed");
        return r.json();
      })
      .then(function (json) {
        messages = json;
        flat = flatten(json, "", {});
        applyDom();
        applyMeta();
        applySchema();
        fillLangSelect();
        applyHreflang();
      });
  }

  function boot() {
    current = resolveLocale();
    var sel = document.getElementById("langSelect");
    if (sel) {
      sel.addEventListener("change", function () {
        var code = sel.value;
        var url = new URL(window.location.href);
        url.searchParams.set("lang", code);
        window.history.replaceState({}, "", url);
        setLocale(code, true);
      });
    }
    setLocale(current, !!getParamLocale());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
