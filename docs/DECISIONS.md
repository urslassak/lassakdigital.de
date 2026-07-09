# Architektur-Entscheidungen (ADR) — Lassak Digital

Dieses Dokument listet wesentliche Architekturentscheidungen (Architecture Decision Records) des Projekts `lassakdigital.de` auf.

---

## ADR 1: Statische Landingpage ohne Build-System

- **Status**: Akzeptiert
- **Kontext**: Die Website dient als Marketing-Landingpage für Dienstleistungen im Bereich Paid Ads. Sie erfordert extrem kurze Ladezeiten, hohe Zuverlässigkeit und soll einfach über GitHub Pages gehostet werden.
- **Entscheidung**: Die Anwendung wird als rein statisches Projekt (reines HTML, Vanilla CSS und Vanilla JS) implementiert. Es wird auf moderne JavaScript-Frameworks (React, Next.js, Vue) und CSS-Build-Schritte (TailwindCSS, SASS) verzichtet.
- **Konsequenz**:
  - **Vorteile**: Minimale Ladezeiten, exzellente Core Web Vitals (LCP, INP), 100 % Hosting-Verfügbarkeit auf GitHub Pages ohne Serverkosten.
  - **Nachteile**: Größere Code-Duplikation bei wiederkehrenden Strukturen (z. B. Footer und Navigation müssen in allen drei HTML-Dateien separat gepflegt werden).

---

## ADR 2: Lokales Hosten der Google Fonts

- **Status**: Akzeptiert (Revision vom 2026-07-09 abgeschlossen)
- **Kontext**: Für ein einheitliches Design wurde die Schriftart "Inter" ausgewählt. Die vorherige Einbindung über das Google Fonts CDN verstieß gegen die DSGVO.
- **Entscheidung**: Die Schriftarten wurden heruntergeladen, in `/fonts/` abgelegt und werden über `@font-face` in `style.css` geladen.
- **Konsequenz**:
  - **Vorteile**: Volle DSGVO-Konformität, keine Abhängigkeit von externen Servern bei Schriftarten-Ladevorgängen.
  - **Nachteile**: Lokales Hosting erhöht das Projekt-Volume minimal (ca. 200 KB an Schriftdateien).

---

## ADR 3: Custom Cursor Logik auf Desktop-Geräten

- **Status**: Akzeptiert
- **Kontext**: Die Landingpage soll eine hochwertige, interaktive und moderne Anmutung haben ("Wow-Effekt").
- **Entscheidung**: Es wird ein custom Mauszeiger (`.cursor` und `.cursor-ring`) über JavaScript und CSS implementiert. Auf Systemen mit präzisen Zeigegeräten (`pointer: fine`) wird der System-Mauszeiger ausgeblendet.
- **Konsequenz**:
  - **Vorteile**: Premium-Gefühl, visuell ansprechendes Feedback beim Hovern von Links und Buttons.
  - **Nachteile**: Höhere CPU-Last durch das ständige Rendern über `requestAnimationFrame`. Auf Mobilgeräten wird der Cursor deaktiviert, um Performance-Einbußen und Darstellungsfehler zu vermeiden.

---

## ADR 4: Terminbuchung über Calendly Iframe mit Zwei-Klick-Konsent

- **Status**: Abgelöst / Obsolet (Revision vom 2026-07-09)
- **Kontext**: Die wichtigste Konvertierungsaktion der Landingpage war ursprünglich das Buchen einer kostenfreien Potenzialanalyse über Calendly. Zur Einhaltung der DSGVO und Verhinderung von Custom-Cursor-Freezes durfte das Iframe nicht ungefragt geladen werden.
- **Entscheidung**: Einbettung eines statischen Platzhalters für das Calendly-Iframe. Erst nach Klick des Nutzers auf "Kalender laden" wurde das Iframe über JavaScript dynamisch erzeugt und gerendert.
- **Konsequenz / Aufhebung**: 
  - **Abgelöst durch Version 1.10.0-remove-calendly (manuell v1.7.0)**: Das Calendly-Widget und die Potenzialanalyse-Sektion wurden vollständig von der Webseite entfernt. 
  - **Neue primäre Konvertierung**: Als primäre Konvertierungsaktion dient nun die datenschutzfreundliche Rückrufbitte (Formspree AJAX Formular) kombiniert mit einer übersichtlichen, zentrierten Box für den direkten Kontakt ("Direkter Draht") per WhatsApp und E-Mail am Ende der Seite.
