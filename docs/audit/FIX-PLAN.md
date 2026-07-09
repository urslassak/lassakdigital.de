# Fix-Plan — 2026-07-09

Dieser Fix-Plan stellt den Maßnahmenkatalog zur Behebung der im Audit-Bericht (`docs/audit/AUDIT.md`) festgestellten Mängel dar. **Die Behebungen werden erst nach expliziter Freigabe dieses Plans in Phase 2 durchgeführt.**

---

## Automatisch ausführbar (nach Freigabe des Gesamtplans)
Diese Fixes betreffen strukturelles HTML/CSS, Bugfixes und Bereinigungen ohne rechtliche oder strukturelle Risiken.

| Nr | Befund | Maßnahme | Dateien | Verifikation |
| :--- | :--- | :--- | :--- | :--- |
| **F-01** | MITTEL-001 | **Footer-Markup vereinheitlichen**: Anpassung des HTML-Markups auf `impressum.html` und `datenschutz.html` (Nutzung der Klasse `.footer-inner`), um die Layout-Konsistenz zur Startseite wiederherzustellen. | [impressum.html](file:///Users/urs/Meine%20Ablage/Work/04_Marketing/Website/impressum.html), [datenschutz.html](file:///Users/urs/Meine%20Ablage/Work/04_Marketing/Website/datenschutz.html) | Manuelle Sichtprüfung des Designs im Browser |
| **F-02** | HOCH-002 | **Barrierefreie mobile Navigation**: Hinzufügen von `role="button"`, `tabindex="0"`, `aria-label="Menü öffnen"` und `aria-expanded` zum Hamburger-Button in `index.html`. Erweiterung des JS-Toggles, um `aria-expanded` umzuschalten. | [index.html](file:///Users/urs/Meine%20Ablage/Work/04_Marketing/Website/index.html) | Tastatur-Fokustest & Attributprüfung im DOM |
| **F-03** | NIEDRIG-001 | **Hintergrund-Scroll-Lock**: Korrektur der Klasse `mobile-open` (Zuweisung auf `body` statt `nav`) und Hinzufügen von `body.mobile-open { overflow: hidden; }` in `style.css`, um Scrollen bei geöffnetem mobilen Menü zu blockieren. | [index.html](file:///Users/urs/Meine%20Ablage/Work/04_Marketing/Website/index.html), [style.css](file:///Users/urs/Meine%20Ablage/Work/04_Marketing/Website/style.css) | Test des Scrollverhaltens im Mobile-Modus |
| **F-04** | NIEDRIG-002 | **JS-Duplikation beseitigen**: Auslagern des redundanten JavaScripts (Custom Cursor, Reveal, Nav-Toggle) in eine zentrale Datei `js/main.js` und Verlinkung in den HTML-Dokumenten. | Alle HTML-Dateien, `[NEW] js/main.js` | Vollständiger Funktions- & Konsolencheck aller Seiten |
| **F-05** | HOCH-001 | **Lokales Hosten von Google Fonts**: Download der benötigten "Inter" Schriftschnitte (Woff2), Speichern unter `fonts/` und Austausch des Google-CDN-Links durch `@font-face` Regeln in `style.css`. | Alle HTML-Dateien, `style.css`, `[NEW] fonts/` | Netzwerkanalyse im Browser (keine Verbindung mehr zu `fonts.googleapis.com` oder `gstatic.com`) |

---

## Nur mit Einzelfreigabe (riskant / inhaltlich sensibel)
Diese Fixes betreffen sensible persönliche Angaben oder greifen tiefer in das visuelle Interaktionskonzept ein.

| Nr | Befund | Maßnahme | Risiko / Warum Einzelfreigabe? |
| :--- | :--- | :--- | :--- |
| **F-06** | KRITISCH-001 | **Anbieter-Kontaktdaten eintragen**: Ersetzung aller Platzhalter in eckigen Klammern (z. B. `[Ihre Straße & Hausnummer]`) in Impressum und Datenschutzerklärung durch die realen Daten des Betreibers. | **Sensible Kundendaten**: Der Nutzer muss die korrekten Adress-, Steuernummer- und Haftpflichtdaten bereitstellen. Fehlerhafte Eingaben verletzen die Impressumspflicht. |
| **F-07** | PRÜFEN-001 | **Calendly-Zwei-Klick-Lösung**: Vorschaltung eines Platzhalters ("Calendly-Kalender laden") anstelle des direkten Ladens des Iframes. Verhindert das Einfrieren des Custom Cursors auf Page-Load und erhöht die DSGVO-Sicherheit. | **UX-Änderung**: Erfordert einen zusätzlichen Klick des Besuchers, um den Kalender zu sehen. Kann die Conversion-Rate geringfügig beeinflussen. |
