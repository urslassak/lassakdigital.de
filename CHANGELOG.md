# Changelog - Lassak Digital

All notable changes to this project will be documented in this file.

## [1.25.0] - 2026-07-12

### Fixed
- Cursor-Anzeige im "Über mich"-Modal (`#aboutModal`) behoben: Da native Dialoge im Top-Layer gerendert werden und somit über dem Custom Cursor liegen, wird der native System-Mauszeiger nun verlässlich reaktiviert (`!important`), sobald sich die Maus über dem Modal oder dessen Backdrop befindet.
- Der Custom Cursor (`.cursor` und `.cursor-ring`) wird über den `:has()`-Selektor sowie eine `.modal-open`-Hilfsklasse auf `body` ausgeblendet, sobald ein Dialog geöffnet ist.
- Fehlerhafte Handhabung des Dialog-Schließens über die Escape-Taste behoben: Durch Registrierung des `close`-Events auf dem `<dialog>`-Element wird die `.modal-open`-Hilfsklasse und der Overflow-Blockierer nun in allen Schließ-Szenarien sauber zurückgesetzt.

## [1.24.0] - 2026-07-11

### Added
- SVG-Icons (E-Mail und WhatsApp) für die Kontakt-Links in der "Direkter Draht"-Sektion hinzugefügt.

### Changed
- "Golden Badge" Styling für Kontakt-Icons implementiert: standardmäßig als runder Badge mit warm-beigem Hintergrund (`var(--bg-secondary)`) und dunklem Icon (`var(--text-primary)`). Bei Hover über die Kontaktkarte färbt sich das Badge gold (`var(--accent)`) mit hellem Icon (`var(--bg-primary)`), skaliert leicht (`1.1`) und erhält einen goldenen Glühschatten (`box-shadow: 0 4px 15px var(--accent-glow)`).
- Das WhatsApp-Symbol durch eine minimalistische Sprechblase mit drei Punkten (Chat-Symbol) ersetzt, um Darstellungsfehler des Telefonhörers zu beheben.

## [1.23.0] - 2026-07-11

### Changed
- Kontrast und Interaktionsdesign der Prozess-Zahlen (Klassenumbenennung zu `.process-number`) in der `#approach`-Sektion optimiert ("Ink-to-Gold Shift"). Die Zahlen nutzen standardmäßig das dunkle Ink-Schwarz (`var(--text-primary)`) mit vergrößerter Typografie (`3rem`, fett) für maximale Lesbarkeit im Light-Theme. Bei Hover über die gesamte Karte verfärben sich die Zahlen zu Gold (`var(--accent)`) und animieren sich weich mit einer leichten Skalierung (`1.05`) und Verschiebung nach rechts (`4px`).
- Überschrift des durchlaufenden Banners (Priority Banner) in der `index.html` angepasst (von "Welcher dieser Punkte hat für dich höchste Priorität? Lass es mich wissen." zu "Die Vorteile unserer Zusammenarbeit") und die Textfarbe der Überschrift (`.priority-headline`) in der `style.css` auf das edle Gold des Design-Systems (`var(--accent)`) geändert.

## [1.22.0] - 2026-07-10

### Changed
- Das Hauptmenü (Navigation) in ein schwebendes Element ("Floating Menu") umgewandelt und über `position: fixed` positioniert. Dadurch erstreckt sich der Hintergrund der Hero-Sektion (Farbe, Radialverlauf, Punktraster) nahtlos hinter dem Navigationsbalken über den gesamten oberen Bildschirmbereich.
- Der Navigationsbalken selbst verwendet einen universell kompatiblen, weißen Glas-Effekt (`rgba(255, 255, 255, 0.75)` mit `backdrop-filter: blur(16px)`) und eine feine Haarlinie (`border: 1px solid var(--border-color)`), um sich harmonisch auf allen Unterseiten zu integrieren.
- Die Höhe des Navigationsmenüs durch Erhöhung des Paddings leicht vergrößert.
- Das Logo (`.nav-logo`) im Menü vergrößert (von 24px auf 28px auf Mobilgeräten und von 28px auf 34px auf Desktops), um dessen Präsenz und Wahrnehmbarkeit zu stärken.
- Spezielle CSS-Regeln für den geöffneten Zustand des mobilen Menüs (`body.mobile-open nav`) hinzugefügt, die das Menü nahtlos ohne Verschiebung des Logos oder des Hamburger-Toggles auf volle Bildschirmbreite ausdehnen und Positionierungs-Eigenschaften (`left`, `transform`) zurücksetzen.
- Die Systemarchitektur-Dokumentation (`docs/architecture.md`) an das neue floating Navigations-Design angepasst.

## [1.21.0] - 2026-07-10

### Changed
- Den radialen Verlauf in der Hero-Sektion vergrößert, sodass der goldene Schein fast die gesamte Sektion ausfüllt. Dazu wurden Farbstopps bei 70% und das Auslaufen des Gradienten auf 140% angepasst.

## [1.20.0] - 2026-07-10

### Added
- Einen radialen Verlauf von hellem Gold (`rgba(207, 154, 74, 0.15)`) zu weiß (`#ffffff`) im Hintergrund der Hero-Sektion (`.hero`) hinzugefügt, gesteuert über neue CSS-Variablen (`--white`, `--hero-bg-gradient`).

## [1.19.0] - 2026-07-10

### Changed
- Den Media-Query-Schwellenwert für das zweispaltige Desktop-Layout des Hero-Bereichs in `style.css` von `1024px` auf `768px` herabgesetzt. Das Foto wird dadurch ab 768px (z. B. auf iPads und Tablets) ungespiegelt rechts an die Schrift angelehnt positioniert.

### Fixed
- Die Ausrichtung des gespiegelten Hero-Porträts auf Mobilgeräten (< 768px) in `style.css` korrigiert. Durch Festlegung von `justify-content: flex-start` auf `.hero-image-wrapper` und `object-position: right` auf `.hero-img` (was sich nach der horizontalen Spiegelung `transform: scaleX(-1)` in eine linksbündige Ausrichtung umwandelt) schmiegt sich das Bild auf allen schmalen Bildschirmbreiten nahtlos und lückenlos an den linken Displayrand an.

## [1.18.0] - 2026-07-10

### Changed
- Website-Farbschema komplett von Dark-Theme auf Light-Theme (Beige/Gold-Optik inspiriert von aiscwork.com) umgestellt:
  - Definition von warmem Ivory-Beige-Hintergrund (`#fcfaf6`), dunkler Ink-Schrift (`#0e1217`) und edlen Gold-Akzenten (`#cf9a4a`).
  - Anpassung der Navigation, der Mobilmenü-Überlagerung, der hero glows, des Workflow-Bereichs und des Modals in `style.css` zur Gewährleistung barrierefreier Kontraste auf hellem Untergrund.
  - Austausch des weißen Logos (`images/logo_lassakdigital-white.svg`) gegen das schwarze/dunkle Logo (`images/logo_lassakdigital-black.svg`) in `index.html`, `impressum.html` und `datenschutz.html` für maximale Sichtbarkeit.
  - Aktualisierung der Hover-Farbe des dynamischen Cursors in `js/main.js` auf ein transluzentes Gold (`rgba(207, 154, 74, 0.7)`).
  - Aktualisierung der Systemarchitektur-Dokumentation (`docs/architecture.md`) und der Design-Richtlinien (`AGENTS.md`).

## [1.17.0] - 2026-07-10

### Fixed
- Korrekturen an Rechtschreibung, Grammatik, Interpunktion und Silbentrennung im deutschen Website-Text:
  - Ersetzung von "Bodensee-Region" durch das binde- und trennungsfreie "Bodenseeregion" (SEO-Tags, strukturierte Daten und Fließtexte).
  - Korrektur von fehlerhaften Trennungen bzw. Zusammenfügungen wie "Social-Media-Beitrag" (statt "Social Media Beitrag") und "Content-Planung" (statt "Content Planung").
  - Ergänzung des grammatikalisch notwendigen Koppelungsstrichs in "Instagram- oder TikTok-Kanal".
  - Berichtigung der Präpositionalkonstruktion "in eine Sprache übersetzen" (statt zuvor "in einer Sprache").
  - Korrektur von "E-Mail-Adresse" (zuvor "E-Mail Adresse").
  - Behebung von Fehlern bei Groß- und Kleinschreibung im Fließtext (z. B. "dir" statt "Dir") sowie Anpassung von Adjektiven in Workflow-Titeln auf Kleinschreibung ("transparente Berichte", "sicheres Wachstum").
  - Entfernung von unnötigen Kommas in Einschüben bei Schritt 4 der Timeline.
  - Fehlerkorrektur eines unvollständigen Satzfragments unter Abschnitt 1 ("Datenschutz auf einen Blick") in `datenschutz.html`.
  - Aktualisierung der gesetzlichen Anbieterkennzeichnung in der Meta-Description von `impressum.html` auf das aktuelle DDG (Digitale-Dienste-Gesetz).

### Changed
- Herstellung einer konsistenten Anrede auf der Landingpage: Alle verbliebenen formalen "Sie"- und "Ihr"-Formen (u. a. im Abschnitt "Direkter Draht" und in der Modal-Beschreibung) wurden an das einheitliche, informelle "du" angepasst.

## [1.16.0] - 2026-07-10

### Added
- Integration eines Ganzkörper-Porträtfotos (`images/urs_lassak.png`) in der Hero-Sektion mit responsivem Aufbau: Auf Desktop lehnt sich das Foto links (ohne Spiegelung) bündig an die rechtsbündig und links ausgerichtete H1-Überschrift an (`margin-right: -70px`). Auf Mobilgeräten und Tablets wird das Foto links absolut im oberen Bereich (`top: 20px; bottom: auto`) positioniert, über `transform: scaleX(-1)` gespiegelt (sodass sich der Gründer an den linken Bildschirmrand lehnt) und vom Text (Breite 65% auf der rechten Seite) teilweise überlagert. Vertikale Zentrierung stabilisiert die Schrift beim Skalieren.
- Schwebendes, glassmorphisches Namensschild (`.hero-name-tag`) in Cyber-Optik: Stellt Name und Button auf Mobilgeräten untereinander gestapelt und auf Desktop nebeneinander dar.
- Native, barrierefreie `<dialog id="aboutModal" class="about-modal">` Komponente für eine ausführliche persönliche Gründerbeschreibung (textbasiert ohne wiederholtes Foto), gestaltet im dunkelblauen Deep-Tech-Design mit schlanker Breite und Fading-Animation.

### Changed
- Ergänzung der Event-Listener in `js/main.js` zum Steuern des Modals (Öffnen/Schließen, Hintergrund-Scroll-Lock und Schließen des Modals bei Klick außerhalb auf das Backdrop).

## [1.15.0] - 2026-07-10

### Fixed
- Behebung von CORS-Fehlern in der Webkonsole bei lokaler Ausführung (über das `file://`-Protokoll), indem der Link zum Web-App-Manifest (`site.webmanifest`) dynamisch über JavaScript geladen wird, sobald die Seite über eine Webserver-Umgebung (`http://` oder `https://`) aufgerufen wird. Die statischen `<link rel="manifest">`-Verweise wurden aus `index.html`, `datenschutz.html` und `impressum.html` entfernt.

## [1.14.0] - 2026-07-10

### Fixed
- Behebung des fehlerhaften Darstellungsfehlers beim Frosted-Glass-Effekt des Navigations-Headers (`nav`) in `style.css` durch explizites Einbinden der `backdrop-filter`- und `border-bottom`-Regeln in die Desktop-Medienabfrage (`(min-width: 1024px)`).
- Bereinigung der HTML-Struktur der 7-Schritte-Workflow-Karten in `#workflow` (`index.html`), inklusive Bereinigung von Trennungsabständen und Satzzeichen sowie Korrektur eines Rechtschreibfehlers ("als nächstes") und Vervollständigung des ersten Schritts.
- Korrekte Implementierung des durchlaufenden Banners (Infinite Marquee) direkt über dem Rückruf-Formular (`index.html`) gemäß der exakten HTML-Strukturvorgabe unter Beibehaltung der CSS-Keyframe-Animation (`marquee-scroll`).

### Changed
- Anpassung des Footer-Stylings in `style.css` an das nachtblaue "Deep Tech & Trust" Dark-Theme (Hintergrundfarbe auf `var(--bg-secondary)` gesetzt, dezente obere Rahmenlinie `1px solid rgba(255, 255, 255, 0.05)` hinzugefügt, Textfarben auf `var(--text-secondary)` aktualisiert) und Implementierung eines Cyber-Cyan Leucht-Hovereffekts für Footer-Links mit Textschatten.

### Removed
- Entfernung des "Mein Workflow..."-Untertitels in der Sektion `#workflow` (`index.html`) zur Erhöhung des visuellen Minimalismus.

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
