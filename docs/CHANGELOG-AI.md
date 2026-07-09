# KI-Änderungshistorie (CHANGELOG-AI) — Lassak Digital

Dieses Dokument erfasst alle Änderungen, die von KI-Systemen an dieser Codebase vorgenommen werden.

## [1.15.0-contrast-fix-nav-cta] — 2026-07-10

### Kontrast-Fix für den Header-Button
- **CF-01** ✅ **Kontrast-Optimierung Navigations-CTA** (`style.css`): Explizite Festlegung der Textfarbe des "Jetzt anfragen"-Buttons (`.nav-menu .nav-cta`) und dessen Hover-Zustands (`.nav-menu .nav-cta:hover`) auf die dunkle Hintergrundvariable `var(--bg-primary)` (`#040d1a`). Dies überschreibt die standardmäßige weiße Textfarbe (`var(--text-primary)`) und die cyanfarbene Hover-Textfarbe der Navigationslinks und sorgt für einen barrierefreien, optimalen Kontrast auf dem hellen Cyber-Cyan-Hintergrund des Buttons.
- **CF-02** ✅ **Changelogs aktualisiert** (`CHANGELOG.md`, `docs/CHANGELOG-AI.md`): Dokumentation der Optimierung.

---

## [1.14.0-legal-and-location-update] — 2026-07-09

### Aktualisierung von Impressum & Datenschutz und Ortswechsel
- **LL-01** ✅ **Design-Anpassung Pflichtseiten** (`style.css`): Implementierung von CSS-Regeln für `.legal-container` und dessen untergeordnete Elemente (`.legal-header`, `.legal-title`, `.legal-meta`, `.legal-content`, `.legal-back-btn` etc.) zur Angleichung der Typografie (Inter) und Farben an das bestehende Dark-Theme (Nachtblau/Cyber-Cyan).
- **LL-02** ✅ **Ortsaktualisierung in rechtlichen Dokumenten** (`impressum.html`, `datenschutz.html`): Änderung des Diensteanbieters und der verantwortlichen Stelle von "Tettnang" auf "Meckenbeuren" (PLZ 88074 bleibt gleich).
- **LL-03** ✅ **Rechtliche Aktualisierung Impressum** (`impressum.html`): Aktualisierung des Gesetzesverweises im Header von "§ 5 TMG" auf das neue, seit dem 14. Mai 2024 gültige "§ 5 DDG" (Digitale-Dienste-Gesetz). Entfernung veralteter Inline-Styles.
- **LL-04** ✅ **Bereinigung Datenschutzseite** (`datenschutz.html`): Vollständiges Entfernen der veralteten Datenschutzklausel für das Terminbuchungstool "Calendly", da dieses nicht mehr auf der Website eingebunden ist.
- **LL-05** ✅ **Google Fonts Konformität** (`datenschutz.html`): Anpassung der Erklärung für Google Fonts, um das datenschutzkonforme lokale Hosten der Schriften (ohne Verbindung zu externen Google-Servern) korrekt zu deklarieren.
- **LL-06** ✅ **Ergänzung Datenschutzbestimmungen** (`datenschutz.html`): Hinzufügen von Abschnitten zu SSL- bzw. TLS-Verschlüsselung (für sichere Formspree-Datenübertragungen) sowie Cookies (Deklaration über den Verzicht von Tracking und Cookies).
- **LL-07** ✅ **Structured Data & Koordinaten-Update** (`index.html`): Aktualisierung des Standorts in den strukturierten JSON-LD-Daten von "Tettnang" auf "Meckenbeuren" und Anpassung der GPS-Koordinaten im `GeoCoordinates`-Objekt auf die Meckenbeuren-Werte (Breitengrad: `47.7011`, Längengrad: `9.5638`).
- **LL-08** ✅ **Changelogs & Fortschrittsdokumentation** (`CHANGELOG.md`, `docs/CHANGELOG-AI.md`): Protokollierung aller getätigten Maßnahmen in den Changelogs.

---

## [1.13.0-theme-change-deep-tech] — 2026-07-09

### Theme-Wechsel zu "Deep Tech & Trust" (Nachtblau/Cyber-Cyan)
- **TC-08** ✅ **CSS-Variablen & Farbanpassungen** (`style.css`): Übergang zum "Deep Tech & Trust" Dark-Theme. Definition der Variablen `--bg-primary` (`#040d1a`), `--bg-secondary` (`#0b172a`), `--text-primary` (`#ffffff`), `--text-secondary` (`#94a3b8`), `--accent` (`#00e5ff`), `--accent-hover` (`#00b8cc`) und `--accent-glow` (`rgba(0, 229, 255, 0.4)`). Anpassung weiterer themenspezifischer Variablen wie `--accent-dim`, `--border-color`, `--border-hover`, `--border-glow`, `--shadow-main` und `--shadow-accent`.
- **TC-09** ✅ **Kontrast-Optimierungen für helle Akzentfarben** (`style.css`): Anpassung der Textfarbe bei Elementen, die sich bei Hover mit der hellen Akzentfarbe füllen. Die Textfarbe auf primary buttons (`.btn-primary`) und Timeline-Schritten bei Hover (`.timeline-step:hover::before`) wurde auf `var(--bg-primary)` gesetzt, um eine optimale Lesbarkeit des Texts auf hellem Cyber-Cyan-Grund zu gewähren.
- **TC-10** ✅ **Ersetzung verbleibender Gold-Farbwerte** (`style.css`): Aktualisierung der `.cursor-ring`-Grenzlinie und des Glühschattens, der Glow-Elemente im Hero-Bereich (`.hero-glow2`) und des Farbverlauf-Zeitstrahls (`.timeline::before`) auf die neuen, cyber-cyan-basierten Transluzenz-Werte.
- **TC-11** ✅ **SVG-Logo Rückbau in HTML** (`index.html`, `impressum.html`, `datenschutz.html`): Rückgängigmachen des vorherigen Logo-Wechsels. Alle Image-Tags verwenden nun wieder das weiße Logo (`images/logo_lassakdigital-white.svg`) zur Gewährleistung der Lesbarkeit auf dem tiefdunklen nachtblauen Hintergrund.
- **TC-12** ✅ **Mauszeiger-Hover Anpassung im Skript** (`js/main.js`): Aktualisierung der interaktiven Hover-Logik im Javascript. Der custom cursor-ring wechselt bei Mouseenter nun zu Cyber-Cyan (`rgba(0, 229, 255, 0.7)`) und weicht bei Mouseleave wieder zu `var(--accent-glow)`.
- **TC-13** ✅ **Entwickler-Richtlinien aktualisiert** (`AGENTS.md`): Anpassung der Design-System-Variablen an das neue "Deep Tech & Trust" Theme im Regelwerk der KI-Agents.
- **TC-14** ✅ **Architektur- und Interaktions-Dokumentation angepasst** (`docs/architecture.md`): Überarbeitung von Abschnitt 2 ("Design-System & Typografie") zur Erfassung der Nachtblau/Cyber-Cyan Palette und Aktualisierung der Custom-Cursor-Beschreibung in Abschnitt 3.
- **TC-15** ✅ **Changelogs fortgeschrieben** (`CHANGELOG.md`, `docs/CHANGELOG-AI.md`): Protokollierung aller vorgenommenen Design- und Code-Änderungen.

---

## [1.12.0-theme-change-white-gold] — 2026-07-09

### Theme-Wechsel zu White & Gold (Light-Theme)
- **TC-01** ✅ **CSS-Variablen & Farbanpassungen** (`style.css`): Ablösung des bisherigen Dark-Themes und der neon-orangen Akzente durch das neue White-Gold-Black Light-Theme. Definition der Variablen `--bg-primary` (`#ffffff`), `--bg-secondary` (`#f7f7f9`), `--text-primary` (`#111111`), `--text-secondary` (`#5a5a60`), `--accent` (`#d4af37`), `--accent-hover` (`#b5952f`) und `--accent-glow` (`rgba(212, 175, 55, 0.4)`). Anpassung weiterer themenspezifischer Variablen wie `--accent-dim`, `--border-color`, `--border-hover`, `--border-glow`, `--shadow-main` und `--shadow-accent`.
- **TC-02** ✅ **Ersetzung verbleibender Orange-Farbwerte** (`style.css`): Korrektur aller im Stylesheet hardcodierten Orange-Werte. Aktualisierung der `.cursor-ring`-Grenzlinie und des Glühschattens, des Primary-Button-Hover-Schattens, der Glow-Elemente im Hero-Bereich (`.hero-glow2`) und des Farbverlauf-Zeitstrahls (`.timeline::before`) auf die neuen, goldbasierten Transluzenz-Werte.
- **TC-03** ✅ **SVG-Logo Austausch in HTML** (`index.html`, `impressum.html`, `datenschutz.html`): Aktualisierung aller Image-Tags vom bisherigen weißen Logo (`images/logo_lassakdigital-white.svg`) auf die schwarze Logo-Variante (`images/logo_lassakdigital-black.svg`) zur Sicherstellung einer perfekten Lesbarkeit auf dem weißen Hintergrund.
- **TC-04** ✅ **Mauszeiger-Hover Anpassung im Skript** (`js/main.js`): Aktualisierung der interaktiven Hover-Logik im Javascript. Der custom cursor-ring wechselt bei Mouseenter nun zu transluzentem Gold (`rgba(212, 175, 55, 0.7)`) und weicht bei Mouseleave wieder zu `var(--accent-glow)`.
- **TC-05** ✅ **Entwickler-Richtlinien aktualisiert** (`AGENTS.md`): Anpassung der Design-System-Variablen an das neue Light-Theme im Regelwerk der KI-Agents zur Einhaltung konsistenter Gestaltungsrichtlinien.
- **TC-06** ✅ **Architektur- und Interaktions-Dokumentation angepasst** (`docs/architecture.md`): Überarbeitung von Abschnitt 2 ("Design-System & Typografie") zur Erfassung der White-Gold-Black Palette und Aktualisierung der Custom-Cursor-Beschreibung in Abschnitt 3.
- **TC-07** ✅ **Changelogs fortgeschrieben** (`CHANGELOG.md`, `docs/CHANGELOG-AI.md`): Protokollierung aller vorgenommenen Design- und Code-Änderungen.

---

## [1.11.0-timeline-alignment-formspree] — 2026-07-09

### Angleichung Schritt 7 & Formspree-Datenschutz-Doku
- **WAF-01** ✅ **Angleichung Workflow-Schritt 7** (`index.html`): Vollständige Überarbeitung des 7. Schritts (Modul 7) in der geordneten Liste `.timeline`. Der Schritt entspricht nun semantisch exakt den vorherigen Modulen (Verwendung der Klasse `.workflow-card`, `.workflow-badge` und `.workflow-desc`). Hinzufügen der richtigen Textinhalte aus `Module.md`. Korrektur des fehlerhaften HTML-Tag-Verschachtelungsfehlers und korrekter Abschluss der Liste mit `</ol>`.
- **WAF-02** ✅ **CSS-Bereinigung** (`style.css`): Entfernung der spezifischen `.timeline-step:last-child` Ausnahmeregel, damit sich Schritt 7 automatisch und nahtlos in das Standard-Timeline-Layout integriert.
- **WAF-03** ✅ **Erweiterung der DSGVO-Dokumentation** (`docs/DEPENDENCIES.md`): Integration von Formspree unter den externen Integrationen mit Details zum Zweck (Rückruf-Kontaktformular), der Einbindung (direkter POST-Request) und der DSGVO-Bewertung (Direktübertragung an Formspree-Server).
- **WAF-04** ✅ **Aktualisierung der Schnittstellen-Dokumentation** (`docs/API-SURFACE.md`): Ergänzung von Formspree in der Schnittstellen-Tabelle mit Ziel-URL `formspree.io`, Authentifizierung `Token im POST-URL` und Validierung `Keine required-Felder`. Hinzufügen eines Absatzes in Bereich 3 zur detaillierten Erklärung des direkten Client-zu-Server-Datenflusses bei Formspree.
- **WAF-05** ✅ **Ergänzung der Datenschutzerklärung** (`datenschutz.html`): Einfügen eines neuen, DSGVO-konformen Abschnitts "Kontaktformular (Formspree)" unter der Rubrik 3 "Datenerfassung auf dieser Website" mit ausführlichen Hinweisen zur Datenübertragung in die USA, Rechtsgrundlagen und Link zur Formspree-Datenschutzerklärung.
- **WAF-06** ✅ **Aktualisierung des Projekt-Changelogs** (`CHANGELOG.md`): Aufzeichnung aller vorgenommenen Änderungen unter Version `1.8.0`.

---

## [1.10.0-remove-calendly] — 2026-07-09

### Entfernung von Calendly und Platzierung von "Direkter Draht" am Seitenende
- **RC-01** ✅ **Entfernung Calendly & Vorab-Check-Header** (`index.html`): Löschung des gesamten `contact-header` und des Containers für das Calendly-Zwei-Klick-Widget (`.calendly-container`) am Ende der Webseite.
- **RC-02** ✅ **Neupositionierung und Zentrierung "Direkter Draht"** (`index.html`, `style.css`): Verschiebung der Box `.contact-sidebar` ("Direkter Draht") direkt unter das Callback-Formular als neuen finalen Seitenabschnitt. Anpassung von `.contact-inner` in `style.css` auf `max-width: 600px` und zentrierte Ausrichtung (`margin: 0 auto; width: 100%`), um bündig mit der Rückrufbitte abzuschließen. Hinzufügen der Scroll-Reveal-Klasse (`reveal`) zur Box.
- **RC-03** ✅ **Bereinigung ungenutzter CSS-Regeln** (`style.css`): Entfernung aller Styles für `.contact-header`, `.contact-content`, `.calendly-container` und `.calendly-placeholder`.
- **RC-04** ✅ **Navigationslinks aktualisiert** (`index.html`): Aktualisierung der Navigationslinks von `#contact` auf das Rückruf-Formular (`#callback-form`). Umbenennung des Menüpunkts "Vorab-Check" in "Kontakt".
- **RC-05** ✅ **JavaScript-Säuberung** (`js/main.js`): Löschung des nicht mehr benötigten Event-Listeners für den Lade-Button des Calendly-Widgets.
- **RC-06** ✅ **Bereinigung der Dokumente** (`docs/architecture.md`, `docs/DECISIONS.md`, `docs/DATA-MODEL.md`, `docs/DEPENDENCIES.md`, `docs/API-SURFACE.md`, `docs/GLOSSARY.md`): Vollständige Entfernung aller Calendly-Abhängigkeiten und -Schnittstellen. Markierung von ADR 4 als abgelöst und obsolet.
- **RC-07** ✅ **Changelog-Aktualisierung** (`CHANGELOG.md`): Festhalten der Änderungen im manuellen Changelog unter Version `1.7.0`.

---

## [1.9.0-callback-form] — 2026-07-09

### Integration des Formspree Rückruf-Formulars & AJAX-Submit
- **CF-01** ✅ **HTML-Struktur Rückruf-Sektion** (`index.html`): Hinzufügen einer neuen Sektion (`#callback-form`, `.callback-section`) mit Einleitungstext, dem Formular (`#formspree-callback`) mit Feldern für `name`, `email` und `telefon` (alle optional, ohne required-Attribut), dem Submit-Button und dem standardmäßig ausgeblendeten Erfolgs-Text (`#form-success`).
- **CF-02** ✅ **Einfügung AJAX-Submit Logik** (`js/main.js`): Abfangen des Formular-Submissions via `e.preventDefault()`, Durchführung eines asynchronen HTTPS-POST `fetch` an die Formspree API (`https://formspree.io/f/xeebyjww`), Ausführung einer weichen Ausblendungs-Animation für das Formular und Einblenden der Erfolgsmeldung.
- **CF-03** ✅ **Einbindung in Cursor-Interaktionen** (`js/main.js`): Aufnahme von `input` in den Selektor der `hoverables`, damit auch Eingabefelder den Custom-Cursor auf Desktop-Geräten vergrößern und orange einfärben.
- **CF-04** ✅ **Layout und Design-System-Integration** (`style.css`): Implementierung von CSS-Regeln für `.callback-section`, Eingabefelder mit `--bg-secondary` als Hintergrund und `--text-primary` für Text. Hervorhebung aktiver Felder (`:focus`) mit der Akzentfarbe `--accent` und einem leichten Leuchteffekt (`--accent-dim`). Animation der Erfolgsmeldung.
- **CF-05** ✅ **Schnittstellen- und Abhängigkeitsdokumentation** (`docs/API-SURFACE.md`, `docs/DEPENDENCIES.md`): Erfassung von Formspree als neue externe API-Schnittstelle und Dependency unter Angabe des Verwendungszwecks, Datenschutzrelevanz (direkter Client-zu-Server-POST) und Datenfluss-Eigenschaften.
- **CF-06** ✅ **Aktualisierung des manuellen Changelogs** (`CHANGELOG.md`): Festhalten der Änderungen unter Version `1.6.0`.

---

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
