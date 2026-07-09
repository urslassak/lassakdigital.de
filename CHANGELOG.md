# Changelog - Lassak Digital

All notable changes to this project will be documented in this file.

## [1.13.0] - 2026-07-10

### Added
- CSS-basiertes durchlaufendes Text-Banner (Infinite Marquee) als visuelle, freischwebende Abtrennung direkt über dem Rückruf-Kontaktformular (`#callback-form`) in `index.html`.
- Styling-Klassen `.priority-banner`, `.priority-headline`, `.marquee`, `.marquee-content` und `.marquee-separator` in `style.css` sowie die Keyframe-Animation `marquee-scroll` für einen nahtlosen, endlosen Loop.

## [1.12.0] - 2026-07-10

### Added
- Einführung der Klasse `.workflow-target-label` in `index.html` und `style.css` für ein dezenteres, minimalistisches Styling der Zielgruppen-Definitionen ("Ideal wenn..." / "Ideal als...") direkt unter der Überschrift der 7 Modul-Karten im Workflow-Bereich (über dem Fließtext).

### Changed
- Implementierung eines modernen "Frosted Glass" (Glassmorphismus) Effekts für den Desktop-Header (`nav`) in `style.css` unter Verwendung einer leicht transparenten nachtblauen Hintergrundfarbe (`rgba(4, 13, 26, 0.85)` basierend auf `#040d1a`), eines Weichzeichner-Hintergrundeffekts (`backdrop-filter: blur(12px)`) und eines extrem subtilen unteren Rahmens (`border-bottom: 1px solid rgba(255, 255, 255, 0.05)`), um einen fließenden Übergang zum scrollenden Inhalt zu gewährleisten.
- Verbessertes Kontrastverhältnis des "Jetzt anfragen" Call-to-Action Buttons im Navigations-Header (Wechsel der Textfarbe von Weiß zu Nachtblau `var(--bg-primary)` in normalem und Hover-Zustand), um optimale Lesbarkeit auf hellem Cyber-Cyan-Hintergrund zu gewährleisten.

## [1.11.0] - 2026-07-09

### Added
- Added custom CSS styles in `style.css` for `.legal-container` and its children (headers, typography, paragraphs, lists, links, back buttons) to style the legal pages consistently under the website's dark theme design system.
- Added new sections to `datenschutz.html` for "SSL- bzw. TLS-Verschlüsselung" and "Cookies" to clearly declare SSL usage for secure form data transmission and the complete absence of tracking cookies or pixels.

### Changed
- Updated the location/residence of Urs Lassak from "Tettnang" to "Meckenbeuren" in `impressum.html`, `datenschutz.html`, and `index.html`.
- Updated the GPS coordinates on the landing page (`index.html`) JSON-LD structured data block to Meckenbeuren coordinates (Latitude: `47.7011`, Longitude: `9.5638`).
- Updated the legal basis in `impressum.html` from "§ 5 TMG" to the current "§ 5 DDG" (Digitale-Dienste-Gesetz).
- Corrected the Google Fonts declaration in `datenschutz.html` to state that fonts are hosted locally and no user data (e.g., IP address) is transmitted to Google.
- Cleaned up obsolete inline color styles on links in `impressum.html`.

### Removed
- Removed the outdated "Terminbuchung über Calendly" section in `datenschutz.html`, since the Calendly integration was deleted in a previous version.

## [1.10.0] - 2026-07-09

### Changed
- Switched the website design system theme from Light-Theme back to a modern Dark-Theme ("Deep Tech & Trust"), updating `:root` variables in `style.css` (Nachtblau background `#040d1a`, Marineblau backgrounds `#0b172a`, pure white headers `#ffffff`, and light-blaugrau text `#94a3b8`).
- Set Cyber-Cyan (`#00e5ff`) as the primary accent color, with dark cyan (`#00b8cc`) for button hovers and `--accent-glow` (`rgba(0, 229, 255, 0.4)`).
- Restored the white SVG logo `logo_lassakdigital-white.svg` in `index.html`, `impressum.html`, and `datenschutz.html` to be fully readable against the night-blue background.
- Fixed readability and contrast by forcing dark-theme background colors (`var(--bg-primary)`) on text elements filled with cyan on hover (primary button text and timeline step circles).
- Updated the custom cursor (`.cursor-ring`) hover state transition behavior to shift from cyber-cyan (`rgba(0, 229, 255, 0.7)`) to standard translucency (`var(--accent-glow)`).
- Aligned documentation files (`docs/architecture.md` and `AGENTS.md`) with the new Nachtblau/Cyber-Cyan theme properties.

## [1.9.0] - 2026-07-09

### Changed
- Switched the entire website design system theme from Dark-Theme to Light-Theme, changing `:root` variables in `style.css` (White background `#ffffff`, Light-Grey backgrounds `#f7f7f9`, Deep Black headings `#111111`, and Medium-Grey body text `#5a5a60`).
- Replaced the primary accent color from Neon-Orange (`#ff4d1c`) to Metallic Gold (`#d4af37`), adding `--accent-hover` (`#b5952f`) and `--accent-glow` (`rgba(212, 175, 55, 0.4)`).
- Replaced the SVG logo source path from `logo_lassakdigital-white.svg` to the black variant `logo_lassakdigital-black.svg` in `index.html`, `impressum.html`, and `datenschutz.html` to ensure visibility against the new white background.
- Updated the custom cursor (`.cursor-ring`) hover state transition behavior to shift from translucent gold (`rgba(212, 175, 55, 0.7)`) to standard translucency (`var(--accent-glow)`) instead of neon orange.
- Updated button hover styles to utilize `var(--accent-hover)` and gold accent glow shadows.
- Aligned documentation files (`docs/architecture.md` and `AGENTS.md`) with the new light/gold theme values.

## [1.8.0] - 2026-07-09

### Added
- Formspree privacy section added to `datenschutz.html` explaining the data processing flow and USA data transfer compliance.

### Changed
- Aligned step 7 ("Das persönliche Gespräch & Sicheres Wachstum") in the workflow timeline (`index.html`) to follow the exact same HTML structure as steps 1-6 using the full copy from `Module.md`. Fixed HTML closing tags for the timeline (`</ol>`).
- Removed specific CSS exception rule `.timeline-step:last-child` from `style.css` so step 7 adapts standard timeline styles automatically.
- Updated `docs/DEPENDENCIES.md` and `docs/API-SURFACE.md` with explicit DSGVO assessments and direct-browser data flow details for Formspree.

## [1.7.0] - 2026-07-09

### Changed
- Relocated the "Direkter Draht" direct contact card (WhatsApp & E-Mail) to be centered directly below the callback form ("Rückrufbitte") as the final element of the page.
- Updated styling rules for the contact section in `style.css` to center the contact card and remove all unused Calendly CSS rules.
- Cleaned up the navigation bar links in `index.html` to point to the callback form (`#callback-form`) and renamed the "Vorab-Check" link to "Kontakt".
- Removed the unused Calendly click listener from `js/main.js`.
- Updated all related technical documents (`docs/architecture.md`, `docs/DECISIONS.md`, `docs/DATA-MODEL.md`, `docs/DEPENDENCIES.md`, `docs/API-SURFACE.md`, `docs/GLOSSARY.md`) to mark the Calendly decision as obsolete and remove its references.

### Removed
- Removed the bottom section "Starten Sie jetzt - Machen wir den Vorab-Check für Ihr Geschäft" and the two-click Calendly widget placeholder.

## [1.6.0] - 2026-07-09

### Added
- Integrated a new callback form (`#callback-form`, `.callback-section`) in `index.html` linked to Formspree (`https://formspree.io/f/xeebyjww`) allowing visitors to leave contact information (name, email, phone) without required field restrictions.
- Added input fields hover logic to custom cursor to support scaling and orange-accent transitions.
- Added CSS styles in `style.css` matching the dark theme for the callback section, inputs (focus highlight with `--accent` and `--accent-dim`), and success layout.

### Changed
- Implemented AJAX fetch submission logic in `js/main.js` to catch form submissions, submit securely to Formspree, and transition smoothly (fade out form, fade in success message).

## [1.5.0] - 2026-07-09

### Added
- Added `.gitignore` to exclude system files (`.DS_Store`), IDE settings, and log files.
- Staged all favicon and logo SVG files in Git so they are correctly deployed to GitHub Pages and visible on the live site.

### Changed
- Configured favicon references (`favicon.ico`, `favicon.svg`, `favicon-96x96.png`, `apple-touch-icon.png`) and the webmanifest (`site.webmanifest`) in all HTML files to use relative paths instead of absolute paths, ensuring consistent loading across environments.
- Adjusted paths inside `site.webmanifest` to be relative as well.

## [1.4.0] - 2026-07-09

### Added
- Created `robots.txt` in the root directory to guide search engine crawlers.
- Created `sitemap.xml` in the root directory to index the primary pages (`/`, `/impressum.html`, `/datenschutz.html`).
- Added JSON-LD Structured Data to `index.html` (LocalBusiness/ProfessionalService) to improve regional and local search discovery.
- Added Open Graph (OG) and Twitter Card metadata to `index.html` for optimized link previews on social platforms.

### Changed
- Added descriptive metadata (`<meta name="description">`) and canonical links (`<link rel="canonical">`) to `index.html`, `impressum.html`, and `datenschutz.html`.
- Implemented `<meta name="robots" content="noindex, follow">` in `impressum.html` and `datenschutz.html` to prevent boilerplate legal notices from diluting primary search results.

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
