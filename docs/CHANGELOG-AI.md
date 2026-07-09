# KI-Änderungshistorie (CHANGELOG-AI) — Lassak Digital

Dieses Dokument erfasst alle Änderungen, die von KI-Systemen an dieser Codebase vorgenommen werden.

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
