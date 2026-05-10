# mosaic-totemworks-marketing

Public marketing site for [Mosaic](https://mosaic-totemworks.web.app), a Totem Works enterprise venture. Plain HTML + Tailwind (CDN), no build step. Hosted via GitHub Pages.

## Live URLs

- **Default Pages URL:** https://zoneoutreal.github.io/mosaic-totemworks-marketing/
- **Custom domain:** https://mosaic.thetotemworks.com (DNS pending — Squarespace CNAME `mosaic` → `zoneoutreal.github.io`)

## Local preview

```bash
cd ~/TotemDigital/mosaic-totemworks-marketing
python3 -m http.server 5181
# open http://localhost:5181
```

## Deployment

GitHub Pages is set to serve from `main` branch root. Push to `main` and Pages auto-deploys within ~1 minute.

```bash
git add . && git commit -m "..." && git push
```

## Boundaries (per memory rule `feedback_mosaic_overview_private.md`)

- **No architecture diagrams or solution-design imagery** on this site. Those stay in the private `mosaic-overview` repo.
- **No insurance-vertical messaging** — Erie disclosure scope.
- **No specific dated commitments** in the roadmap. Now / Next / Later only.
- **No customer logos / named references** until a design partner has cleared use of their name in writing.

## Structure

- `index.html` — single-page site with anchor sections (Hero, Solution, Product, Try Demo, Roadmap, Contact)
- `CNAME` — custom domain pointer for GitHub Pages
- `scripts/probe.mjs` — Playwright probe for desktop + mobile screenshots (requires Playwright; run from a project that has it installed)
