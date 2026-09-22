# GATE — ProPitch Asia

| Check | Command | Last status |
|-------|---------|-------------|
| No UTF-8 BOM | `npm run ops:check-no-bom` | PASS |
| i18n (10 locales, EN keys, no EN leak) | `npm run gate:i18n` | PASS |
| Combined | `npm run gate` | PASS |

Locales: `en`, `fr`, `de`, `it`, `es`, `pt`, `th`, `ru`, `zh`, `ar` — source `i18n/en.json`, UI via `js/i18n.js` + `data-i18n` / `data-i18n-html`.

Regenerate translations: `node scripts/auto-translate-all.js` (optional locales as CLI args).
