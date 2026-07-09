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

## ADR 2: Verwendung von Google Fonts via CDN (Revisionsbedarf)

- **Status**: Überprüfungsbedürftig (Befund im Audit 2026-07-09)
- **Kontext**: Für ein einheitliches Design wurde die Schriftart "Inter" ausgewählt. Sie wird über das Google Fonts CDN eingebunden.
- **Entscheidung**: Direkte Einbindung der Stylesheet-Links von `fonts.googleapis.com` im HTML-Header.
- **Konsequenz**:
  - **Vorteile**: Sehr einfache Integration, schneller Ladevorgang durch Googles CDN.
  - **Nachteile**: **DSGVO-Verstoß** in Deutschland. Durch den direkten Aufruf der Google-Server wird die IP-Adresse des Nutzers ohne vorherige Zustimmung übertragen (Urteil des LG München 2022). Die Schriftart muss im Rahmen von Phase 2 lokal gehostet werden.

---

## ADR 3: Custom Cursor Logik auf Desktop-Geräten

- **Status**: Akzeptiert
- **Kontext**: Die Landingpage soll eine hochwertige, interaktive und moderne Anmutung haben ("Wow-Effekt").
- **Entscheidung**: Es wird ein custom Mauszeiger (`.cursor` und `.cursor-ring`) über JavaScript und CSS implementiert. Auf Systemen mit präzisen Zeigegeräten (`pointer: fine`) wird der System-Mauszeiger ausgeblendet.
- **Konsequenz**:
  - **Vorteile**: Premium-Gefühl, visuell ansprechendes Feedback beim Hovern von Links und Buttons.
  - **Nachteile**: Höhere CPU-Last durch das ständige Rendern über `requestAnimationFrame`. Auf Mobilgeräten wird der Cursor deaktiviert, um Performance-Einbußen und Darstellungsfehler zu vermeiden.

---

## ADR 4: Terminbuchung über Calendly Iframe

- **Status**: Akzeptiert
- **Kontext**: Die wichtigste Konvertierungsaktion der Landingpage ist das Buchen einer kostenfreien Potenzialanalyse. Ein eigenes Buchungssystem zu entwickeln, ist wirtschaftlich nicht sinnvoll.
- **Entscheidung**: Einbettung des Calendly-Widgets über ein standardmäßiges `<iframe>` direkt auf der Seite.
- **Konsequenz**:
  - **Vorteile**: Sofortige Buchungsfunktionalität ohne Backend-Aufwand, professionelle Terminverwaltung.
  - **Nachteile**: Beeinträchtigung des Custom-Cursors (Mauszeiger friert beim Überfahren des Iframes ein, da das Iframe die Mausereignisse abfängt). DSGVO-Relevanz, da Calendly-Server beim Laden direkt kontaktiert werden.
