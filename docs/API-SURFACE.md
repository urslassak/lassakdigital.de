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
| **Formspree Callback** (AJAX Formular) | `https://formspree.io/f/xeebyjww` | Empfang und Weiterleitung von Rückrufanfragen über das Kontaktformular. | Token in der Ziel-URL. | Keine Pflichtfelder (optionale Angabe von Name, E-Mail und Telefonnummer). |
| **WhatsApp Chat** (API Link) | `https://wa.me/4917621359713` | Weiterleitung zu einem direkten Chat mit Urs Lassak auf WhatsApp. | Keine. | Keine Eingabefelder auf der Website (wird an WhatsApp übergeben). |
| **E-Mail Link** (Protokoll) | `mailto:urs@lassakdigital.de` | Öffnet das standardmäßige E-Mail-Programm des Besuchers. | Keine. | Wird durch den E-Mail-Client des Nutzers validiert. |

---

## 3. Datenfluss & Datenschutz (DSGVO-Relevanz)

Alle externen API-Aufrufe werden direkt vom Webbrowser des Nutzers ausgeführt.

- **Formspree**: Die im Rückruf-Formular eingegebenen Kontaktdaten (Name, E-Mail, Telefon) werden beim Klick auf Absenden direkt per HTTPS-POST-Request vom Browser des Nutzers an Formspree übertragen. Es findet keine Verarbeitung auf einem eigenen Webserver statt.

> [!TIP]
> **Datenschutzfreundliche Einbindung**: Das Google Fonts CDN wird nicht mehr kontaktiert, da die Schriften lokal auf dem Server liegen.
