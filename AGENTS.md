# Project Rules & Guidelines - Lassak Digital

## Tech Stack
- Frontend: Semantic HTML5, Vanilla JavaScript, CSS3 variables. No Tailwind.
- Fonts: `Inter` (entire site).
- Deployment: GitHub Pages (`www.lassakdigital.de` via Namecheap CNAME/A-records).

## Design System (style.css)
- Light Theme (Beige/Gold - inspired by aiscwork.com):
  - `--bg-primary: #fcfaf6;` (Body bg, Ivory)
  - `--bg-secondary: #f3f1ee;` (Section bg, Warm Muted Grey/Beige)
  - `--bg-card: #ffffff;` (Card bg, Pure White)
  - `--text-primary: #0e1217;` (Headers, Ink Black)
  - `--text-secondary: #5f6469;` (Body text, Ink Muted)
  - `--accent: #cf9a4a;` (Accent Gold)
  - `--accent-hover: #b07e38;` (Accent hover dark gold)
  - `--accent-glow: rgba(207, 154, 74, 0.35);`
  - `--border-color: #e1ddd8;` (Hairline border)
  - `--font-display: 'Inter', sans-serif;`
  - `--font-body: 'Inter', sans-serif;`

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
- `docs/` - Technical background docs:
  - [docs/README.md](docs/README.md) - Einstiegspunkt.
  - [docs/architecture.md](docs/architecture.md) - Systemarchitektur & UX-Spezifikationen.
  - [docs/deployment.md](docs/deployment.md) - Deployment & DNS-Konfiguration.
  - [docs/CONVENTIONS.md](docs/CONVENTIONS.md) - Code-Muster & Richtlinien.
  - [docs/DECISIONS.md](docs/DECISIONS.md) - Architektur-Entscheidungen (ADR).
  - [docs/DEPENDENCIES.md](docs/DEPENDENCIES.md) - Abhängigkeiten & externe Ressourcen.
  - [docs/GLOSSARY.md](docs/GLOSSARY.md) - Fachbegriffe.
  - [docs/CHANGELOG-AI.md](docs/CHANGELOG-AI.md) - Historie aller KI-Änderungen.

## AI Working Rules & Documentation
1. **Dokumentationspflicht**: Jede Code-Änderung durch eine KI *muss* unmittelbar in [docs/CHANGELOG-AI.md](docs/CHANGELOG-AI.md) dokumentiert werden.
2. **Dokumente aktuell halten**: Betroffene Dokumente unter `/docs` müssen bei Änderungen stets aktualisiert und konsistent gehalten werden.
3. **Konventions-Treue**: Keine externen Frameworks/Bibliotheken (z. B. Tailwind) ohne explizite Freigabe.
