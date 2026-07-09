# Projektabhängigkeiten (Dependencies) — Lassak Digital

Dieses Dokument listet alle externen Abhängigkeiten, Bibliotheken und eingebundenen Dienste des Projekts `lassakdigital.de` auf.

## 1. Lokale NPM/Backend-Abhängigkeiten

> [!NOTE]
> Das Projekt verwendet keine Paketmanager wie `npm`, `yarn`, `pnpm` oder `go modules`. Es gibt keine `package.json`, `go.mod` oder Lock-Dateien. 
> Dementsprechend existieren keine direkten Software-Abhängigkeiten, die über Pakete geladen werden. Ein `npm audit` ist nicht anwendbar.

---

## 2. Externe Integrationen & CDN-Abhängigkeiten

Diese Dienste werden zur Laufzeit direkt über CDNs (Content Delivery Networks) oder Iframes eingebunden:

### Google Fonts (Inter)
- **Zweck**: Bereitstellung der Schriftart **Inter**.
- **Einbindung**: `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">`
- **Anbieter**: Google Ireland Limited / Google LLC.
- **DSGVO-Bewertung**: **Kritisch**. Sollte zur Einhaltung der Datenschutzrichtlinien durch lokales Hosting der Schriftarten ersetzt werden.

### Calendly Widget (Iframe)
- **Zweck**: Interaktiver Buchungskalender für Erstgespräche.
- **Einbindung**: `<iframe>` in `index.html` (und verlinkt in `datenschutz.html`).
- **Anbieter**: Calendly LLC.
- **DSGVO-Bewertung**: **Mittel**. Es werden beim Laden Daten an Server in den USA übertragen. Die IP-Adresse wird erfasst. Eine Einwilligung oder ein Click-to-Load-Mechanismus erhöht die Rechtssicherheit.

---

## 3. Externe Verlinkungen (API-Redirects)

- **WhatsApp API**: `https://wa.me/4917621359713` (Meta Platforms, Inc.).
- **E-Mail mailto**: Keine externe API, nutzt das Betriebssystem-Protokoll des Nutzers.
