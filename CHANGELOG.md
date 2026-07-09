# Changelog - Lassak Digital

All notable changes to this project will be documented in this file.

## [1.1.0] - 2026-07-08

### Added
- Created dropdown submenus for main navigation links (`Über mich`, `Leistungen`, `Case Studies`, `Preise`), hover-triggered on desktop and tap-to-toggle on mobile.
- Integrated a responsive glassmorphic hamburger slide-down menu for viewports below `1024px`.
- Added text branding `Lassak Digital` next to the logo icon across `index.html`, `impressum.html`, and `datenschutz.html`.
- Implemented deep-link anchors (`#case-tattoo`, `#case-car`, etc.) to scroll directly to corresponding case studies.
- Ensured interactive dropdown and toggle elements are fully compatible with custom cursor transitions.
- Loaded Google Fonts `Inter` with weights 300 to 800 to unify site typography.

### Changed
- Replaced the basic static navigation header with a premium, responsive header layout in `index.html`, `impressum.html`, and `datenschutz.html`.
- Updated navigation styling rules in `style.css` to build a robust mobile-first structure.
- Unified the site's font system to use `Inter` exclusively, replacing `Syne` and `DM Sans`.

## [1.0.0] - 2026-07-08

### Added
- Created `CNAME` for mapping domain `www.lassakdigital.de` on GitHub Pages.
- Created `.nojekyll` to disable Jekyll processing on GitHub Pages.
- Created `AGENTS.md` containing token-efficient project guidelines.
- Created technical documentation in `/docs` folder:
  - `docs/README.md`: Entry point.
  - `docs/deployment.md`: Detailed DNS records (Namecheap) and GitHub Pages deployment.
  - `docs/architecture.md`: Breakdown of HTML, custom cursors, animations, and typography.
- Created new pages for legal compliance:
  - `impressum.html`: Impressum boilerplate template.
  - `datenschutz.html`: GDPR-compliant Datenschutzerklärung template.
- Created `style.css` (custom design system and styling for index.html).

### Changed
- Modified `index.html` to integrate Impressum and Datenschutzerklärung links in a redesigned, premium sticky footer.
