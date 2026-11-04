# Yutoku Tech (cuisinecometwot.github.io)

Personal portfolio of Huu Duc Nguyen (Field Engineer, iOS dev), served on GitHub Pages at yutokutech.id.vn. Also hosts self-written learning guides in `learning_guides/`.

## Stack
- Static HTML + one stylesheet (`res/site.css`) + small vanilla JS (`res/site.js`). No build step, no frameworks, no jQuery.
- Images: WebP served via `<picture>`, original PNG/JPEG kept as fallback.
- `learning_guides/*.html` are standalone pages with their own inline styles; they don't use `res/site.css`.

## Design system (homepage)
- Dark, tactical/game-inspired theme. Tokens live in `:root` in `res/site.css`; components use tokens only.
- Colors: bg `#0b0d10`, surfaces `#14171c`/`#1c2027`, text `#e6e8eb`, muted `#9aa3ae`, accent red `#f34334` (`#ff6b5e` for small red text to keep 4.5:1).
- Fonts: Russo One (headings) + Chakra Petch (body) from Google Fonts.
- Motifs: notched corners (`clip-path`), `NN // LABEL` section tags, thin borders. SVG icons from an inline sprite in `index.html`; no emoji icons.
- Motion: 160ms hovers, fade-up reveal on scroll; all off under `prefers-reduced-motion`.

## Progress
- Done: homepage rebuilt (dark theme, working mobile menu, accessibility fixes, WebP images, all guides linked).
- Next: real project thumbnails/descriptions; optionally a shared header/back link for guide pages.
