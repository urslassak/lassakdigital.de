# Project Rules & Guidelines - Lassak Digital

## Tech Stack
- Frontend: Semantic HTML5, Vanilla JavaScript, CSS3 variables. No Tailwind.
- Fonts: `Inter` (entire site).
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
