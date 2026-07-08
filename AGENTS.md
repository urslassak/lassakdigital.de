# Project Rules & Guidelines - Lassak Digital

## Tech Stack
- Frontend: Semantic HTML5, Vanilla JavaScript, CSS3 variables. No Tailwind.
- Fonts: `Syne` (headings), `DM Sans` (body).
- Deployment: GitHub Pages (`www.lassakdigital.de` via Namecheap CNAME/A-records).

## Design System (style.css)
- Dark Theme:
  - `--bg-primary: #0a0a0c;` (Body bg)
  - `--bg-secondary: #121216;` (Card bg)
  - `--text-primary: #ffffff;` (Headers)
  - `--text-secondary: #a0a0a5;` (Muted copy)
  - `--accent: #ff4d1c;` (Neon orange accents)
  - `--accent-dim: rgba(255, 77, 28, 0.15);`
  - `--border-color: rgba(255, 255, 255, 0.08);`
  - `--font-display: 'Syne', sans-serif;`
  - `--font-body: 'DM Sans', sans-serif;`

## Interaction Standards
- Custom Cursor: `.cursor` & `.cursor-ring`. Hid default cursor: `body { cursor: none; }` inside `@media (pointer: fine)`.
- Scroll Reveal: Obs updates class `.reveal` to `.reveal.visible`. Starts at `opacity: 0; transform: translateY(30px)`.
- Buttons: Transitions must be smooth (`0.3s cubic-bezier(0.16, 1, 0.3, 1)`).

## File Architecture
- `index.html` - Landing page.
- `style.css` - Custom design styles.
- `impressum.html` - Legal notice (Impressum).
- `datenschutz.html` - GDPR Privacy Policy (Datenschutz).
- `CNAME` - GitHub pages domain.
- `docs/` - Technical background docs.
