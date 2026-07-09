# Datenmodell-Dokumentation — Lassak Digital

Dieses Dokument beschreibt das Datenmodell für das Projekt `lassakdigital.de`.

## 1. Relationales Datenmodell & Datenbanken

> [!NOTE]
> Das Projekt `lassakdigital.de` ist eine rein statische Website (Landingpage) und besitzt **keine Datenbank** (z. B. PostgreSQL, MySQL, SQLite) und **keinen Object-Relational Mapper (ORM)** wie Prisma.

Es gibt daher:
- Keine Prisma-Schemas (`schema.prisma`),
- Keine SQL-Datenbankmigrationen,
- Keine persistenten Benutzersitzungen oder Benutzerkonten in einer eigenen Datenbank,
- Keine dynamischen Datenbankabfragen.

---

## 2. Externe Datenhaltung (Terminbuchungen)

Obwohl die Website selbst keine Daten persistent speichert, interagiert sie mit externen Systemen, die Daten verarbeiten:

### Calendly (Terminvereinbarung)
- **Zweck**: Besucher können über das Calendly-Iframe-Widget ein Erstgespräch buchen.
- **Gespeicherte Daten**: Vom Besucher eingegebene Daten (Name, E-Mail-Adresse, Telefonnummer, Wunschtermin, ggf. Freitext-Notizen).
- **Speicherort**: Die Daten werden direkt an die Server von Calendly LLC übermittelt und dort in deren Infrastruktur gespeichert. Es findet keine Zwischenspeicherung oder Übertragung auf Server von Lassak Digital statt.

---

## 3. Clientseitiger Zustand (Memory State)

Es wird kein permanenter Anwendungszustand auf dem Client (z. B. via `localStorage` oder `sessionStorage`) gespeichert. 

Einziger temporärer Zustand im Hauptspeicher des Browsers (JavaScript):
- **Cursor-Positionen**: `mx, my` (Mauskoordinaten) und `rx, ry` (Ring-Koordinaten mit Easing).
- **Navigations-Menü-Status**: `.active` (mobil ein-/ausgeblendet).
- **Animationen**: `.visible` (Sichtbarkeitsstatus für Scroll-Reveal via `IntersectionObserver`).
