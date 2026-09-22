# AUDIT — ProPitch Asia (2026-09-22)

## i18n

- Menu langue: sélecteur `#langSelect` (nav fixe), persistance `localStorage` + `?lang=`.
- Clés JSON en anglais (structure `meta.title`, `nav.kickoff`, …) ; textes UI dans `i18n/<locale>.json`.
- GATE: `npm run gate` — 131 clés × 10 langues, pas de copie EN sur locales non-EN (hors marques / placeholders documentés).

## SEO / AEO / GEO

- Meta description, canonical, OG/Twitter, JSON-LD (Organization, WebSite, WebPage, FAQPage) — mis à jour côté client par locale via `schemaJson` + `inLanguage`.
- `robots.txt`, `sitemap.xml` — inchangés (URL prod `propitch-asia.pages.dev`).
- FAQ visible + FAQPage schema pour AEO.

## Sécurité

- `_headers`: CSP, X-Frame-Options DENY, nosniff, Referrer-Policy, Permissions-Policy.
- Pas de secrets dans le repo ; placeholders téléphone / LinkedIn à remplacer avant domaine final.

## Dette / risques

- HTML monolithique (~1,2 Mo base64) : perf LCP ; externaliser images avant branchement `mabido.com` / domaine custom.
- Traductions générées (batch) : relecture native recommandée pour FR/DE/TH/AR avant com corporate.
- `og:image` dédié toujours absent.

## Production

- Deploy: push `main` → Cloudflare Pages `https://propitch-asia.pages.dev/`
