# Yutoku Tech (cuisinecometwot.github.io)

Personal portfolio of Huu Duc Nguyen (Field Engineer, iOS dev), served on GitHub Pages at cuisinecometwot.github.io (custom domain yutokutech.id.vn dropped). Also hosts self-written learning guides in `learning_guides/` and blog posts in `blog/`.

## Stack
- Static HTML + one stylesheet (`res/site.css`) + small vanilla JS (`res/site.js`). No build step, no frameworks, no jQuery.
- Images: WebP served via `<picture>`, original PNG/JPEG kept as fallback.
- `blog/*.html` posts reuse `res/site.css` + `res/site.js` (relative `../` paths); list each new post as a card in the homepage `#blog` section.
- `learning_guides/*.html` are standalone pages with their own inline styles; they don't use `res/site.css`.

## Design system (homepage)
- Dark, tactical/game-inspired theme. Tokens live in `:root` in `res/site.css`; components use tokens only.
- Colors: bg `#0b0d10`, surfaces `#14171c`/`#1c2027`, text `#e6e8eb`, muted `#9aa3ae`, accent red `#f34334` (`#ff6b5e` for small red text to keep 4.5:1).
- Fonts: Russo One (headings) + Chakra Petch (body) from Google Fonts.
- Motifs: notched corners (`clip-path`), `NN // LABEL` section tags, thin borders. SVG icons from an inline sprite in `index.html`; no emoji icons.
- Motion: 160ms hovers, fade-up reveal on scroll; all off under `prefers-reduced-motion`.

## Progress
- Done: homepage rebuilt (dark theme, working mobile menu, accessibility fixes, WebP images, all guides linked).
- Done: Projects section shows 6 picked repos (ziwei-chart, twodollars, image-upscaler, battle-map-visualizer, riichi-c, freenet) with demo + source links.
- Done: Blog section + first post ("Still My Hands, Still My Mind").
- Done: SEO pass — root `robots.txt` (also lists the ziwei-chart and image-upscaler sitemaps, since Google only reads robots.txt at the domain root), `sitemap.xml`, canonical/OG/JSON-LD Person on home, descriptions on all guides. Add new pages to `sitemap.xml`.
- Next: project screenshots/thumbnails; optionally a shared header/back link for guide pages.
