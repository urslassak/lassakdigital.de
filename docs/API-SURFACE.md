# Schnittstellen-Dokumentation (API-Surface) — Lassak Digital

Dieses Dokument beschreibt die externen Kommunikationsschnittstellen und Integrationen der Website `lassakdigital.de`.

## 1. Übersicht der Schnittstellen

Da `lassakdigital.de` eine rein statische Website ist, besitzt sie **keine eigenen Server-Endpunkte** (z. B. REST-APIs, GraphQL oder Next.js Server Actions). Alle Interaktionen und Datentransfers laufen direkt über den Client des Besuchers (Webbrowser) zu externen Systemen.

Die Schnittstellen gliedern sich in drei Kategorien:
1. **Einbettungen (Iframes)** für interaktive Widgets.
2. **Direkt-Links (Protokoll-Handler)** zur Kontaktaufnahme.
3. **Externe API-Weiterleitungen** zur Chat-Kommunikation.

---

## 2. Externe Integrationen & Endpunkte

| Schnittstelle / Typ | Ziel-URL / Protokoll | Zweck | Authentifizierung | Eingabe-Validierung |
| :--- | :--- | :--- | :--- | :--- |
| **Calendly Widget** (Iframe) | `https://calendly.com/urs-lassakdigital/new-meeting` | Einbettung des interaktiven Kalenders zur Terminbuchung. | Keine auf Website-Ebene (wird von Calendly verwaltet). | Clientseitig durch das Calendly-Widget (Name, E-Mail, Telefonnummer). |
| **WhatsApp Chat** (API Link) | `https://wa.me/4917621359713` | Weiterleitung zu einem direkten Chat mit Urs Lassak auf WhatsApp. | Keine. | Keine Eingabefelder auf der Website (wird an WhatsApp übergeben). |
| **E-Mail Link** (Protokoll) | `mailto:urs@lassakdigital.de` | Öffnet das standardmäßige E-Mail-Programm des Besuchers. | Keine. | Wird durch den E-Mail-Client des Nutzers validiert. |

---

## 3. Datenfluss & Datenschutz (DSGVO-Relevanz)

Alle externen API-Aufrufe werden direkt vom Webbrowser des Nutzers ausgeführt.

> [!WARNING]
> Durch das Laden externer Ressourcen (wie des Calendly-Iframes oder des Google Fonts CDNs) werden die IP-Adresse des Nutzers sowie Metadaten (User-Agent etc.) an Drittanbieter übertragen. Dies muss in der Datenschutzerklärung transparent angegeben werden.
