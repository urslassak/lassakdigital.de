# Audit-Bericht — Lassak Digital — 2026-07-09

## Zusammenfassung
Die Codebase von `lassakdigital.de` wurde einem detaillierten Audit unterzogen. Da es sich um eine statische Website handelt, gibt es keine Risiken im Bereich von Server-Schnittstellen, Datenbanken oder Backend-Injektionen. Die größten Baustellen liegen in der **rechtlichen Konformität (DSGVO & Impressumspflicht)** sowie in **Qualität und Konsistenz (Layout-Inkonsistenzen im Footer, Code-Duplikation und a11y-Mängel)**. 

Besonders kritisch ist die direkte Einbindung von Google Fonts über Googles Server (DSGVO-Verstoß) sowie das Vorhandensein von Standard-Textplatzhaltern auf den rechtlich vorgeschriebenen Seiten (Impressum, Datenschutz). Insgesamt wurden 8 Befunde identifiziert: 1 Kritisch, 2 Hoch, 3 Mittel, 2 Niedrig und 1 Prüfpunkt.

---

## Baseline
- **Build**: ✅ (Nicht zutreffend, statische HTML-Dateien)
- **Typecheck**: ✅ (Nicht zutreffend)
- **Lint**: ✅ (Keine Syntax-Fehler im HTML/CSS)
- **Tests**: ❌ (Kein automatisiertes Test-Setup vorhanden)
- **Sicherheits-Audit**: ⚠️ (Direkte Google-CDN-Einbindung & offene Platzhalter)

---

## Befunde

### [KRITISCH-001] Rechtlich unvollständige Pflichtseiten: Platzhalter im Impressum & Datenschutz
- **Kategorie**: Sicherheit / Rechtliche Compliance
- **Datei(en)**: 
  - [impressum.html](file:///Users/urs/Meine%20Ablage/Work/04_Marketing/Website/impressum.html#L41-L43) (Zeilen 41-43, 56, 62-63, 68-70)
  - [datenschutz.html](file:///Users/urs/Meine%20Ablage/Work/04_Marketing/Website/datenschutz.html#L47-L49) (Zeilen 47-49)
- **Beschreibung**: 
  Sowohl das Impressum als auch die Datenschutzerklärung enthalten eckige Platzhalter-Klammern für vertrauliche Anbieterdaten, darunter:
  - `[Ihre Straße & Hausnummer]`
  - `[Ihre PLZ & Ort]`
  - `[Ihre Umsatzsteuer-Identifikationsnummer (falls vorhanden)]`
  - `[Name der Versicherung]`, `[Adresse der Versicherung]`, `[z.B. Deutschland / Europa]`
- **Risiko**: Verstoß gegen die gesetzliche Anbieterkennzeichnungspflicht (§ 5 TMG) in Deutschland. Führt unmittelbar zu einem hohen Risiko von kostenpflichtigen Abmahnungen durch Mitbewerber oder Verbände.
- **Empfohlene Maßnahme**: Die Platzhalter müssen mit den realen Kontaktdaten und rechtlichen Pflichtangaben des Inhabers (Urs Lassak) befüllt werden.
- **Auto-fixbar**: nein (Benötigt manuelle Zuleitung der Nutzerdaten).

---

### [HOCH-001] DSGVO-Verstoß durch direkte Einbindung von Google Fonts via CDN
- **Kategorie**: Sicherheit / Rechtliche Compliance (DSGVO)
- **Datei(en)**: 
  - [index.html](file:///Users/urs/Meine%20Ablage/Work/04_Marketing/Website/index.html#L8-L10) (Zeilen 8-10)
  - [impressum.html](file:///Users/urs/Meine%20Ablage/Work/04_Marketing/Website/impressum.html#L7-L8) (Zeilen 7-8)
  - [datenschutz.html](file:///Users/urs/Meine%20Ablage/Work/04_Marketing/Website/datenschutz.html#L7-L8) (Zeilen 7-8)
- **Beschreibung**: 
  Die Schriftart "Inter" wird über das öffentliche Google CDN (`fonts.googleapis.com` / `fonts.gstatic.com`) geladen.
  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  ```
- **Risiko**: Beim Laden der Seite wird die IP-Adresse des Nutzers ungefragt an Google (USA) übertragen. Nach dem Urteil des LG München (Az. 3 O 17493/20) stellt dies einen Verstoß gegen die DSGVO dar und kann abgemahnt werden.
- **Empfohlene Maßnahme**: Die Schriftart-Dateien müssen heruntergeladen, lokal im Projekt (z. B. unter `fonts/`) abgelegt und über CSS-Regeln (`@font-face`) in `style.css` lokal geladen werden.
- **Auto-fixbar**: ja (nach Download der Font-Dateien).

---

### [HOCH-002] Barrierefreiheit (a11y) & UX: Mobile Navigationstaste nicht barrierefrei
- **Kategorie**: Qualität & Konsistenz / Barrierefreiheit
- **Datei(en)**:
  - [index.html](file:///Users/urs/Meine%20Ablage/Work/04_Marketing/Website/index.html#L25-L29) (Zeilen 25-29)
- **Beschreibung**: 
  Die mobile Navigationsschaltfläche ist als einfaches `div` ohne semantische Bedeutung aufgebaut:
  ```html
  <div class="nav-toggle" id="navToggle">
    <span></span>
    <span></span>
    <span></span>
  </div>
  ```
  Es fehlen Attribute wie `role="button"`, `tabindex="0"`, `aria-label` und `aria-expanded`.
- **Risiko**: Das Element ist für Tastaturnutzer unlesbar und kann nicht fokussiert oder bedient werden. Screenreader-Nutzer erhalten keine Information über das Vorhandensein oder den Zustand des Menüs.
- **Empfohlene Maßnahme**: Entweder Umwandlung des `div` in ein `<button>`-Element oder Hinzufügen von Barrierefreiheits-Attributen:
  ```html
  <div class="nav-toggle" id="navToggle" role="button" tabindex="0" aria-label="Menü öffnen" aria-expanded="false">
  ```
  Zusätzlich muss JavaScript den Wert von `aria-expanded` beim Öffnen/Schließen dynamisch umschalten.
- **Auto-fixbar**: ja (Änderung der HTML-Attribute & JavaScript-Erweiterung).

---

### [MITTEL-001] Layout-Inkonsistenz & ungültiges Markup im Footer der Rechtsseiten
- **Kategorie**: Qualität & Konsistenz
- **Datei(en)**:
  - [impressum.html](file:///Users/urs/Meine%20Ablage/Work/04_Marketing/Website/impressum.html#L86-L93) (Zeilen 86-93)
  - [datenschutz.html](file:///Users/urs/Meine%20Ablage/Work/04_Marketing/Website/datenschutz.html#L103-L110) (Zeilen 103-110)
- **Beschreibung**: 
  In `style.css` wurde das Styling für die Klasse `.site-footer` entfernt. Die Dateien `impressum.html` und `datenschutz.html` verweisen jedoch noch immer darauf und vermissen den inneren Container `<div class="footer-inner">`, der auf `index.html` für die Ausrichtung der Spalten sorgt:
  ```html
  <footer class="site-footer">
    <div class="footer-links"> ... </div>
  </footer>
  ```
- **Risiko**: Die Footer-Elemente auf den Rechtsseiten brechen visuell aus dem Layout-Raster aus und weichen in Abständen und Zentrierung deutlich von `index.html` ab.
- **Empfohlene Maßnahme**: Footer-Markup vereinheitlichen und an die Struktur von `index.html` angleichen:
  ```html
  <footer>
    <div class="footer-inner">
      <div class="footer-links"> ... </div>
    </div>
  </footer>
  ```
- **Auto-fixbar**: ja (HTML-Strukturanpassung).

---

### [MITTEL-002] Dokumentations-Diskrepanz: Fehlende Navigations-Dropdowns im Code
- **Kategorie**: Qualität & Konsistenz / Dokumentation
- **Datei(en)**:
  - [CHANGELOG.md](file:///Users/urs/Meine%20Ablage/Work/04_Marketing/Website/CHANGELOG.md#L8-L12) (Zeilen 8-12)
  - [architecture.md](file:///Users/urs/Meine%20Ablage/Work/04_Marketing/Website/docs/architecture.md) (Kapitel 4, veraltet)
- **Beschreibung**: 
  Der Changelog (v1.1.0) sowie die Dokumentation beschreiben komplexe Dropdown-Untermenüs für Navigationselemente wie `Leistungen`, `Case Studies` und `Preise`. Weder diese Navigationspunkte noch die Dropdown-Strukturen sind jedoch im HTML oder CSS real implementiert.
- **Risiko**: Verwirrung von Entwicklungs-AIs und menschlichen Testern, da dokumentierter und realer Systemzustand drastisch voneinander abweichen.
- **Empfohlene Maßnahme**: Die Navigationspunkte müssen implementiert oder die Dokumentation muss (wie in Phase 1 für `architecture.md` geschehen) korrigiert werden.
- **Auto-fixbar**: nur durch Dokumentationsänderung (bereits korrigiert).

---

### [NIEDRIG-001] Toter JS-Code: Klasse `.mobile-open` ohne CSS-Regel
- **Kategorie**: Code-Leichen / Fehler & Bugs
- **Datei(en)**:
  - [index.html](file:///Users/urs/Meine%20Ablage/Work/04_Marketing/Website/index.html#L432) (Zeilen 432, 442, 451)
- **Beschreibung**: 
  Der JavaScript-Code schaltet beim Klick auf den Hamburger-Button die CSS-Klasse `.mobile-open` auf dem `<nav>`-Element um:
  ```javascript
  navElement.classList.toggle('mobile-open');
  ```
  Es gibt jedoch keine entsprechende Regel in `style.css`.
- **Risiko**: Keine Auswirkung auf das Layout. Der Hintergrund scrollt auf Mobilgeräten bei geöffneter Navigation unkontrolliert weiter.
- **Empfohlene Maßnahme**: Entweder Klasse `.mobile-open` in `style.css` zur Deaktivierung des Hintergrund-Scrollings nutzen (auf dem `body`-Element statt auf dem `nav`-Element) oder den JS-Code entfernen.
- **Auto-fixbar**: ja.

---

### [NIEDRIG-002] Code-Duplikation: Cursor- & Scroll-Reveal-JavaScript
- **Kategorie**: Qualität & Konsistenz
- **Datei(en)**:
  - [index.html](file:///Users/urs/Meine%20Ablage/Work/04_Marketing/Website/index.html#L381-L420) (Zeilen 381-420)
  - [impressum.html](file:///Users/urs/Meine%20Ablage/Work/04_Marketing/Website/impressum.html#L95-L125) (Zeilen 95-125)
  - [datenschutz.html](file:///Users/urs/Meine%20Ablage/Work/04_Marketing/Website/datenschutz.html#L112-L142) (Zeilen 112-142)
- **Beschreibung**: 
  Die Kernlogik für den Custom Cursor ist in allen drei HTML-Dateien redundant als Inline-JS hinterlegt.
- **Risiko**: Erhöhter Wartungsaufwand bei Design- oder Easing-Anpassungen des Mauszeigers.
- **Empfohlene Maßnahme**: Erstellung einer geteilten Javascript-Datei (z. B. `js/main.js` oder `js/cursor.js`) und Einbindung in allen Seiten.
- **Auto-fixbar**: ja.

---

### [PRÜFEN-001] Custom Cursor friert über Calendly-Iframe ein
- **Kategorie**: Fehler & Bugs / UX
- **Datei(en)**:
  - [index.html](file:///Users/urs/Meine%20Ablage/Work/04_Marketing/Website/index.html#L331-L337) (Zeilen 331-337)
- **Beschreibung**: 
  Da der Mauszeiger ausgeblendet ist (`cursor: none`) und durch ein übergeordnetes JS-Element dargestellt wird, friert dieser ein, sobald man das Calendly-Iframe betritt. Der Browser reicht Events im Iframe nicht an das Hauptfenster weiter.
- **Risiko**: Der Zeiger bleibt am Iframe-Rand hängen; innerhalb des Iframes erscheint der reguläre Systemmauszeiger, was unschön wirkt.
- **Empfohlene Maßnahme**: Entweder Akzeptanz als bekannte Einschränkung der Iframe-Technik oder Nutzung eines Vorschau-Banners ("Terminbuchung laden"), das erst bei Klick durch das tatsächliche Iframe ersetzt wird (erhöht auch die DSGVO-Konformität).
- **Auto-fixbar**: nein (Erfordert manuelle Designabwägung).
