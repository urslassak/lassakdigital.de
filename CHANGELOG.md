# Changelog - Lassak Digital

All notable changes to this project will be documented in this file.

## [1.3.0] - 2026-07-09

### Added
- Created a modern, responsive 7-module workflow timeline section (`#workflow`, `.workflow`) replacing the outdated 3 variants.
- Implemented left-aligned timeline tracking on mobile devices and a centered, alternating left/right layout on desktop viewports.
- Integrated hover states for timeline steps, turning their numbered badges neon-orange with a glow shadow when hovered.
- Configured the custom cursor to expand and change border color to neon-orange when hovering over `.workflow-card`s.

### Changed
- Replaced the navigation anchor `#variants` ("Zusammenarbeit") with `#workflow` ("Ablauf").
- Updated system architecture documentation (`docs/architecture.md`) to reflect the new navigation anchor.

### Fixed
- Rebuilt the 7-step workflow timeline to use CSS Counters (`step-counter`), resolving numbering display bugs and removing hardcoded numbers from HTML.
- Positioned the auto-numbered circles using pseudo-elements (`::before`) on the central connecting line, including premium neon orange formatting and hover glow transitions.
- Fixed vertical connecting line overlap issue on the timeline by raising the z-index stack of `.timeline-step` and `.timeline-step::before` above the line, using a solid background color (`var(--bg-primary)`) to mask it behind the circles.
- Updated hover text color of timeline circles to use `--text-primary` when filled with the accent color.

## [1.2.0] - 2026-07-09

### Added
- Added a modern scroll-down arrow button (`.hero-scroll-btn`) containing an SVG chevron pointing down at the bottom of the hero section. It features a CSS keyframe bouncing animation (`arrowBounce`) and transitions to neon-orange color and scales up on hover.
- Ensured full compatibility of the new scroll-down button with the custom cursor system, which scales the ring-cursor up and shifts color to neon-orange on hover.
- Added an interactive 4-card grid layout (`.process-features` / `#approach`) describing the service approach (Vorab-Check, Ads, regional visibility, clear numbers).
- Integrated the new process cards into the custom cursor logic, so that hover increases ring size and sets color to neon-orange.

### Changed
- Replaced the navigation anchor `#about` ("Über mich") with `#approach` ("Mein Ansatz") in the navigation menu, hero scroll-down arrow, and architecture docs.
- Inhaltliche Aktualisierung und Neustrukturierung der Zusammenarbeit-Sektion "Variante 1" unter `#variants`: Umstellung auf informelle Formulierung ("Du"), vollständige Überarbeitung der Schritte 0–4 und Zuweisung der `.reveal`-Klasse für die einzelnen Schritte zur Scroll-Animation.

### Removed
- Cleaned up above-the-fold hero section layout by removing:
  - The keywords bar (`.hero-badge`) at the top of the hero content.
  - The call-to-action buttons (`.hero-ctas`) "Kostenfreie Potenzialanalyse" and "Wege der Zusammenarbeit".
  - The stats cards grid (`.hero-stats`) containing Fokus, Plattformen, Region, and Transparenz blocks.
- Removed the outdated "Über mich" text section and the "01 Kaufmännisch gedacht" to "03" visual card elements.

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
