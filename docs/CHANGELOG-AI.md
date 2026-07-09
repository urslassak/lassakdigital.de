# KI-Änderungshistorie (CHANGELOG-AI) — Lassak Digital

Dieses Dokument erfasst alle Änderungen, die von KI-Systemen an dieser Codebase vorgenommen werden.

## [1.8.0-assets-gitignore] — 2026-07-09

### Behebung der fehlenden Favicons/Logos & Hinzufügen von .gitignore
- **AG-01** ✅ **Hinzufügen von `.gitignore` & Bereinigung Git-Cache** (`.gitignore`): Ausschluss von `.DS_Store`, Editor-Konfigurationen (`.vscode/`, `.idea/`) und temporären Logdateien. Entfernung der bereits getrackten `.DS_Store`-Datei aus dem Git-Index (`git rm --cached`).
- **AG-02** ✅ **Relative Pfade für Favicons & Webmanifest** (`index.html`, `datenschutz.html`, `impressum.html`, `site.webmanifest`): Behebung von Ladeproblemen und 404-Fehlern durch Umstellung der absoluten Pfade (`/favicon.ico`, `/site.webmanifest`, etc.) auf relative Pfade (`favicon.ico`, `site.webmanifest`, etc.).
- **AG-03** ✅ **Staging von fehlenden Assets für Live-Gang** (`favicon.ico`, `favicon.svg`, `favicon-96x96.png`, `apple-touch-icon.png`, `web-app-manifest-192x192.png`, `web-app-manifest-512x512.png`, `logo.png`, `images/logo_lassakdigital-white.svg`, `images/logo_lassakdigital-black.svg`): Hinzufügen aller bisher unversionierten Bild- und Icon-Ressourcen in den Git-Index, damit diese beim nächsten Push auf GitHub Pages online verfügbar sind.

---

## [1.7.0-seo-optimization] — 2026-07-09

### SEO-Check und On-Page-Optimierung
- **SEO-01** ✅ **Hinzufügen von Meta-Beschreibungen, Kanonischen URLs & Robots-Steuerung** (`index.html`, `impressum.html`, `datenschutz.html`): Zuweisung eindeutiger Meta-Beschreibungen (`<meta name="description">`) zur Steigerung der Klickrate (CTR), Definition kanonischer Links (`<link rel="canonical">`) zur Vermeidung von Duplicate Content sowie explizite robots-Direktive (`index, follow`) für die Startseite.
- **SEO-02** ✅ **Social-Sharing-Optimierung** (`index.html`): Integration von Open Graph (OG) und Twitter Card Meta-Tags im `<head>` zur ansprechenden Darstellung geteilter Links in sozialen Medien (z. B. LinkedIn, Facebook).
- **SEO-03** ✅ **JSON-LD Strukturierte Daten** (`index.html`): Implementierung von strukturierten Daten im JSON-LD-Format des Typs `ProfessionalService` zur Stärkung der regionalen Relevanz (Bodensee-Region/Tettnang) und Auszeichnung der angebotenen Social Ads Dienstleistungen.
- **SEO-04** ✅ **Robots-Ausschlüsse für Pflichtseiten** (`impressum.html`, `datenschutz.html`): Vergabe des Meta-Tags `<meta name="robots" content="noindex, follow">`, um das Indexierungsbudget zu schonen und zu verhindern, dass rechtliche Musterseiten das Suchmaschinen-Ranking negativ beeinflussen.
- **SEO-05** ✅ **Suchmaschinen-Steuerungsdateien** (`robots.txt`, `sitemap.xml`): Erstellung einer `robots.txt` im Root zur Steuerung der Crawler und einer statischen `sitemap.xml` zur vollständigen Erfassung aller drei Unterseiten.
- **SEO-06** ✅ **Aktualisierung der Changelogs** (`CHANGELOG.md`, `docs/CHANGELOG-AI.md`): Dokumentation der Optimierungen.

---

## [1.6.0-timeline-fix] — 2026-07-09

### Überarbeitung des 7-Schritte-Zeitstrahls mit CSS Counters
- **TF-01** ✅ **Umstellung auf CSS Counters & Semantische HTML5-Elemente** (`index.html`, `style.css`): Entfernung aller hartkodierten Schritt-Nummern aus dem HTML. Restrukturierung der Timeline als geordnete Liste (`<ol class="timeline">`) mit Listen-Elementen (`<li class="timeline-step">`).
- **TF-02** ✅ **Automatisierte Nummerierung der Kreise & Badges** (`style.css`): Nutzung der CSS-Eigenschaft `counter-reset` auf `.timeline` und `counter-increment` auf `.timeline-step`. Erzeugung der nummerierten Kreise über `.timeline-step::before` mit `content: counter(step-counter);` sowie der Badges über `.workflow-badge::before` mit `content: "Schritt " counter(step-counter);`.
- **TF-03** ✅ **Neon-Orange Farbgebung & Premium-Hover-Effekte** (`style.css`): Die nummerierten Kreise weisen nun standardmäßig neon-korall-orangene Rahmen (`--accent`) und Schatten (`--accent-dim`) auf. Bei Hover füllen sich die Kreise mit der Akzentfarbe (`background-color: var(--accent)`), wobei sich die Schriftfarbe auf `--text-primary` ändert, und erhalten einen intensiven Leuchteffekt (`box-shadow: 0 0 15px var(--accent)`).
- **TF-04** ✅ **Mobile-First Responsiveness** (`style.css`): Sicherstellung der exakten vertikalen Ausrichtung der Kreise auf dem Zeitstrahl. Auf Mobilgeräten verläuft der Strahl am linken Rand (20px), auf Desktops (>= 768px) zentriert (50%) im wechselnden Zick-Zack-Muster der Karten.
- **TF-05** ✅ **Z-Index & Hintergrund-Maskierung der Linie** (`style.css`): Behebung des Überlappungsfehlers durch Erhöhung des z-index-Stackings auf `.timeline-step` (`z-index: 2`) und `.timeline-step::before` (`z-index: 3`) über der Linie (`z-index: 1`), kombiniert mit einer soliden Hintergrundmaskierung (`background-color: var(--bg-primary)`), die den Strahl hinter den Kreisen optisch abschneidet.
- **TF-06** ✅ **Projektdokumentation aktualisiert** (`CHANGELOG.md`): Festhalten der Fehlerbehebung und Reworks im zentralen Changelog unter der Version `1.3.0`.

---

## [1.5.0-workflow] — 2026-07-09

### Ersetzung der 3 Varianten durch einen 7-Modul-Workflow
- **W-01** ✅ **Austausch der Sektion in index.html** (`index.html`): Die bisherigen 3 Varianten der Zusammenarbeit wurden durch einen strukturierten, chronologischen Workflow aus 7 Modulen basierend auf `Module.md` ersetzt. Jedes Modul ist als Karte aufbereitet.
- **W-02** ✅ **Erstellung des Responsive Timeline-Stylings** (`style.css`): Eine neue Klasse `.workflow` und dazugehörige `.workflow-timeline` wurden implementiert. Auf Mobilgeräten wird die Timeline linksbündig dargestellt, auf Desktops (>= 768px) wechseln die Module alternierend links und rechts der zentralen Timeline. Alte, nicht mehr verwendete CSS-Regeln für `.variants` wurden vollständig entfernt.
- **W-03** ✅ **Anpassung der Navigation** (`index.html`): Der Navigationslink wurde von `#variants` ("Zusammenarbeit") auf `#workflow` ("Ablauf") aktualisiert.
- **W-04** ✅ **Anbindung an den Custom Cursor** (`js/main.js`): Die Klasse `.workflow-card` wurde in die Liste der `hoverables` aufgenommen, um die Skalierung und Orangefärbung des Custom Cursors bei Hover zu aktivieren.
- **W-05** ✅ **Dokumentation aktualisiert** (`docs/architecture.md`): Die Beschreibung der statischen Anker-Links in der Architektur-Doku wurde angepasst.

---

## [1.4.0-variants] — 2026-07-09

### Aktualisierung und Neustrukturierung "Variante 1"
- **V-01** ✅ **Inhaltlicher Textaustausch ("Du"-Form)** (`index.html`): Der Inhalt der ersten Zusammenarbeit-Variante wurde komplett überarbeitet. Die Ansprache wurde von der Höflichkeitsform "Sie" auf das kaufmännische "Du" umgestellt.
- **V-02** ✅ **Strukturelle Anpassung der Schritte** (`index.html`): Die Schritte (Schritt 0 bis Schritt 4) wurden semantisch sauber überarbeitet, und der Titel sowie Untertitel der Sektion wurden wunschgemäß aktualisiert.
- **V-03** ✅ **Scroll-Reveal-Klasse hinzugefügt** (`index.html`): Allen einzelnen Schritten (`.timeline-item`) wurde die Klasse `.reveal` zugewiesen, sodass diese beim Scrollen über den `IntersectionObserver` dynamisch und elegant eingeblendet werden.

---

## [1.3.0-approach] — 2026-07-09

### Austausch "Über mich" durch interaktives 4-Kästen-Layout
- **A-01** ✅ **Über mich & 01-03 Cards entfernt** (`index.html`): Die veralteten Abschnitte wurden vollständig gelöscht, um Platz für das neue fokussierte Konzept-Layout zu schaffen.
- **A-02** ✅ **Neues 4-Kästen-Layout implementiert** (`index.html`): Erstellung der Grid-Struktur `.process-features` (`#approach`) mit vier Cards ("Der ehrliche Vorab-Check", "Anzeigen, die sofort auffallen", "Gezielte Sichtbarkeit vor Ort", "Ihre Schnittstelle für klare Zahlen") und Scroll-Reveal-Unterstützung (`.reveal`).
- **A-03** ✅ **CSS-Struktur & Design-System-Integration** (`style.css`): Styling der `.process-features` Sektion und `.process-card`s unter Einhaltung des Design-Systems (Hintergrund `--bg-secondary`, Hover-Lift um `5px`, Accent-Border und Accent-Shadow via `--accent`). Mobil standardmäßig 1-spaltig, ab `768px` wechselt das CSS-Grid in 2 Spalten.
- **A-04** ✅ **Navigations-Links & Scroll-Pfeil angepasst** (`index.html`): Der Sticky-Header-Link und der Scroll-Down-Pfeil verweisen nun auf `#approach` statt `#about`. Navigationspunkt-Text in "Mein Ansatz" geändert.
- **A-05** ✅ **Custom Cursor kompatibel gemacht** (`js/main.js`): Integration von `.process-card` in die JavaScript `hoverables` Abfrage zur automatischen Vergrößerung und neon-orangenen Einfärbung des Cursor-Rings bei Hover.
- **A-06** ✅ **Architektur-Dokumentation angepasst** (`docs/architecture.md`): Aktualisierung aller Verweise auf den `#about`-Anker zu `#approach`.

---

## [1.2.0-clean] — 2026-07-09

### Bereinigung "Above the Fold" & Scroll-Down Animation
- **C-01** ✅ **Hero-Layout bereinigt** (`index.html`): Entfernen des Keywords-Balkens (`.hero-badge`), der beiden CTA-Buttons (`.hero-ctas`) und des 4-Spalten-Grids (`.hero-stats`) zur Erhöhung des visuellen Minimalismus über der Falz.
- **C-02** ✅ **CSS-Bereinigung durchgeführt** (`style.css`): Entfernung aller nicht mehr referenzierten CSS-Regeln für `.hero-badge`, `.hero-ctas`, `.hero-stats` und `.stat-card`.
- **C-03** ✅ **Scroll-Down Animation integriert** (`index.html`, `style.css`): Hinzufügen eines SVG-Chevrons am unteren Hero-Rand mit einer flüssigen CSS-Bounce-Animation (`arrowBounce`). Klick auf den Pfeil scrollt mittels nativem CSS `scroll-behavior: smooth` sanft zur `#about`-Sektion.
- **C-04** ✅ **Custom Cursor kompatibel gemacht** (`index.html`, `js/main.js`): Der neue Scroll-Pfeil wurde als `<a>`-Tag deklariert, sodass die cursor-spezifische JavaScript-Logic ihn erfasst und bei Hover den `.cursor-ring` vergrößert sowie in neon-orange (`rgba(255, 77, 28, 0.7)`) einfärbt.

---

## [1.1.0-fix] — 2026-07-09

### Korrekturlauf (Phase 2)
- **F-01** ✅ **Footer-Markup vereinheitlicht** (`impressum.html`, `datenschutz.html`): Verwendung von `.footer-inner` und Entfernung veralteter `.site-footer` CSS-Klassen zur Herstellung der Layout-Konsistenz mit `index.html`. [AUDIT: MITTEL-001]
- **F-02** ✅ **Mobile Navigation barrierefrei gemacht** (`index.html`): Umwandlung des Hamburger-Elements von `div` zu `button`, Hinzufügen von `aria-label`, `role="button"`, `tabindex="0"` und dynamischem `aria-expanded` Attribut in JavaScript. [AUDIT: HOCH-002]
- **F-03** ✅ **Hintergrund-Scroll-Lock implementiert** (`index.html`, `style.css`): Die CSS-Klasse `.mobile-open` wird nun auf das `body`-Element statt `nav` geschaltet und blockiert das Scrollen im Hintergrund bei geöffnetem mobilen Menü via `overflow: hidden`. [AUDIT: NIEDRIG-001]
- **F-04** ✅ **JavaScript zentralisiert** (`js/main.js` und HTML-Dateien): Auslagern der cursor- und reveal-spezifischen JavaScript-Logiken aus allen drei HTML-Dateien in eine geteilte Datei zur Vermeidung von Code-Duplikation. [AUDIT: NIEDRIG-002]
- **F-05** ✅ **Google Fonts lokal gehostet** (`fonts/`, `style.css` und HTML-Dateien): Download der benötigten "Inter" Schriftschnitte und Einbindung über eine lokale `fonts/inter.css` Datei zur Wiederherstellung der DSGVO-Konformität (Unterbindung von Reroutings zu Google CDN). [AUDIT: HOCH-001]
- **F-06** ✅ **Anbieter-Kontaktdaten eingepflegt** (`impressum.html`, `datenschutz.html`): Ausfüllen aller eckigen Platzhalter (z. B. `[Ihre Straße & Hausnummer]`) mit den realen Adressdaten von Urs Lassak in Tettnang. Bereinigung ungenutzter Platzhalter für USt-ID und Berufshaftpflichtversicherung. [AUDIT: KRITISCH-001]
- **F-07** ✅ **Calendly-Zwei-Klick-Lösung integriert** (`index.html`, `style.css`, `js/main.js`): Einpflegen eines statischen Platzhalters für das Calendly-Iframe mit Datenschutzhinweis und Lade-Button. Verhindert das Einfrieren des Custom-Cursors auf Desktop-Geräten und erhöht die DSGVO-Konformität. [AUDIT: PRÜFEN-001]

---

## [1.0.0-audit] — 2026-07-09

### Dokumentation (Phase 1)
- **Erstellt**:
  - `CLAUDE.md` — Entwickler-Einstiegspunkt.
  - `docs/DATA-MODEL.md` — Erläuterung der statischen Architektur.
  - `docs/API-SURFACE.md` — Schnittstellenbeschreibung (WhatsApp, Calendly, E-Mail).
  - `docs/CONVENTIONS.md` — Entwicklerkonventionen und Best Practices.
  - `docs/DECISIONS.md` — Architektur-Entscheidungsprotokolle (ADR).
  - `docs/DEPENDENCIES.md` — Externe Dienste und Ressourcen.
  - `docs/GLOSSARY.md` — Glossar der Fachbegriffe.
  - `docs/CHANGELOG-AI.md` — Dieses Dokument.
  - `docs/audit/AUDIT.md` — Umfassender Audit-Bericht der Landingpage.
  - `docs/audit/FIX-PLAN.md` — Maßnahmenplan zur Vorbereitung von Phase 2.
  - `docs/audit/AUDIT-IGNORE.md` — Leere Ignore-Liste für Phase-2-Einführung.
- **Aktualisiert**:
  - `AGENTS.md` — Optimiert auf token-effiziente Instruktionen und Einführung der Dokumentationspflicht für KIs.
  - `docs/architecture.md` — Anpassung der Navigationsbeschreibung auf den realen Zustand und Übersetzung ins Deutsche.
