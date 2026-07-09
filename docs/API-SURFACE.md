# Schnittstellen-Dokumentation (API-Surface) — Lassak Digital

Dieses Dokument beschreibt die externen Kommunikationsschnittstellen und Integrationen der Website `lassakdigital.de`.

## 1. Übersicht der Schnittstellen

Da `lassakdigital.de` eine rein statische Website ist, besitzt sie **keine eigenen Server-Endpunkte** (z. B. REST-APIs, GraphQL oder Next.js Server Actions). Alle Interaktionen und Datentransfers laufen direkt über den Client des Besuchers (Webbrowser) zu externen Systemen.

Die Schnittstellen gliedern sich in drei Kategorien:
1. **Einbettungen (Iframes)** für interaktive Widgets (mit Zwei-Klick-Lösung).
2. **Direkt-Links (Protokoll-Handler)** zur Kontaktaufnahme.
3. **Externe API-Weiterleitungen** zur Chat-Kommunikation.

---

## 2. Externe Integrationen & Endpunkte

| Schnittstelle / Typ | Ziel-URL / Protokoll | Zweck | Authentifizierung | Eingabe-Validierung |
| :--- | :--- | :--- | :--- | :--- |
| **Formspree Callback** (AJAX Formular) | `formspree.io` | Empfang und Weiterleitung von Rückrufanfragen über das Kontaktformular. | Token im POST-URL | Keine required-Felder |
| **WhatsApp Chat** (API Link) | `https://wa.me/4917621359713` | Weiterleitung zu einem direkten Chat mit Urs Lassak auf WhatsApp. | Keine. | Keine Eingabefelder auf der Website (wird an WhatsApp übergeben). |
| **E-Mail Link** (Protokoll) | `mailto:urs@lassakdigital.de` | Öffnet das standardmäßige E-Mail-Programm des Besuchers. | Keine. | Wird durch den E-Mail-Client des Nutzers validiert. |

---

## 3. Datenfluss & Datenschutz (DSGVO-Relevanz)

Alle externen API-Aufrufe werden direkt vom Webbrowser des Nutzers ausgeführt.

- **Formspree-Datenfluss**: Der Datenfluss bei der Formularnutzung erfolgt direkt durch den Browser des Nutzers. Sobald der Nutzer das Formular absendet, initiiert sein Browser einen direkten HTTPS-POST-Request an die Server von Formspree (formspree.io). Die eingegebenen Daten (Name, E-Mail, Telefon) gelangen so verschlüsselt direkt an Formspree (Formspree, Inc., USA) und werden von dort an uns weitergeleitet. Es findet zu keinem Zeitpunkt eine Speicherung oder Verarbeitung dieser Daten auf dem eigenen Webserver von `lassakdigital.de` statt.

> [!TIP]
> **Datenschutzfreundliche Einbindung**: Das Google Fonts CDN wird nicht mehr kontaktiert, da die Schriften lokal auf dem Server liegen.
