# Projektabhängigkeiten (Dependencies) — Lassak Digital

Dieses Dokument listet alle externen Abhängigkeiten, Bibliotheken und eingebundenen Dienste des Projekts `lassakdigital.de` auf.

## 1. Lokale NPM/Backend-Abhängigkeiten

> [!NOTE]
> Das Projekt verwendet keine Paketmanager wie `npm`, `yarn`, `pnpm` oder `go modules`. Es gibt keine `package.json`, `go.mod` oder Lock-Dateien. 
> Dementsprechend existieren keine direkten Software-Abhängigkeiten, die über Pakete geladen werden. Ein `npm audit` ist nicht anwendbar.

---

## 2. Externe Integrationen & CDN-Abhängigkeiten

Diese Dienste werden zur Laufzeit direkt über CDNs (Content Delivery Networks) oder Iframes eingebunden:

### Google Fonts (Inter) [LOKAL GEHOSTET]
- **Zweck**: Bereitstellung der Schriftart **Inter**.
- **Einbindung**: Lokal eingebunden über `@font-face` in `style.css` und geladen aus der lokalen `fonts/inter.css` Datei. Keine externe Verbindung erforderlich.
- **Anbieter**: Google Ireland Limited / Google LLC.
- **DSGVO-Bewertung**: **Sicher**. Da alle Schriftdateien direkt vom eigenen Webserver ausgeliefert werden, erfolgt keine Datenübertragung zu Google-Servern.

### Formspree (AJAX API)
- **Zweck**: Rückruf-Kontaktformular.
- **Einbindung**: direkter POST-Request (HTTPS-POST via `fetch()` an `https://formspree.io/f/xeebyjww`).
- **Anbieter**: Formspree (Formspree, Inc.).
- **DSGVO-Bewertung**: Datenübermittlung erfolgt direkt durch den Browser des Nutzers an die Formspree-Server. Die eingegebenen personenbezogenen Daten (Name, E-Mail, Telefon) werden verschlüsselt an Server von Formspree in den USA übermittelt, ohne Zwischenverarbeitung auf dem eigenen Webserver.

---

## 3. Externe Verlinkungen (API-Redirects)

- **WhatsApp API**: `https://wa.me/4917621359713` (Meta Platforms, Inc.).
- **E-Mail mailto**: Keine externe API, nutzt das Betriebssystem-Protokoll des Nutzers.
