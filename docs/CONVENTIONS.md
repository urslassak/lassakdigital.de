# Entwicklerkonventionen & Styleguide — Lassak Digital

Dieses Dokument fasst die Konventionen und Best Practices für Code, Styling und Struktur der Website `lassakdigital.de` zusammen.

## 1. Technologische Leitplanken

- **Keine Frameworks**: Die Website wird in reinem HTML5, CSS3 und modernem JavaScript (ES6) gepflegt.
- **Keine CSS-Build-Tools**: Kein TailwindCSS, SASS, PostCSS oder ähnliche Tools. Jegliches Styling findet direkt in der `style.css` statt.
- **Einheitliche Schriftart**: Der Typografie-Standard für das gesamte Projekt ist die Schriftart **Inter**.

---

## 2. HTML-Konventionen

- **Semantische Struktur**: Verwende stets semantische HTML5-Elemente (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **Barrierefreiheit (a11y)**: 
  - Jedes interaktive Element (z. B. mobile Menü-Buttons, Accordions) muss über Tastatur bedienbar sein.
  - Verwende `tabindex="0"`, `aria-expanded` und `role="button"`, wenn Nicht-Standard-Elemente (wie `div`) für Klick-Events genutzt werden.
  - Alle Bilder benötigen aussagekräftige `alt`-Attribute (z. B. `alt="Lassak Digital Logo"`).
- **Responsive Layouts**: Elemente, die auf Mobilgeräten ausgeblendet werden (z. B. Desktop-Cursor), müssen per CSS oder JS sauber deaktiviert sein, um unnötige Performance-Kosten zu vermeiden.

---

## 3. CSS- & Styling-Konventionen

- **Mobile-First-Prinzip**: Basis-Styles werden ohne Media Queries definiert (für Smartphones). Größere Viewports (Tablets ab `768px`, Desktops ab `1024px`) werden mittels Media Queries erweitert.
- **CSS-Variablen verwenden**: Alle Farben, Abstände, Schriftarten und Übergangszeiten sind als Variablen in `:root` zu definieren. Verwende keine hartkodierten Farbwerte in CSS-Regeln.
- **Smooth Transitions**: Alle Zustandswechsel von Buttons, Links und interaktiven Cards müssen flüssige Übergänge haben (Standard: `0.3s cubic-bezier(0.16, 1, 0.3, 1)`).
- **Namenskonventionen**: Verwende das BEM-ähnliche oder strukturierte Kebab-Case-Muster für Klassen:
  - `.contact-inner`
  - `.contact-method`
  - `.contact-method-icon`

---

## 4. JavaScript-Konventionen

- **Performance-Schonung**: Verwende für Scroll-basierte Animationen immer den `IntersectionObserver` anstelle von rechenintensiven `window.addEventListener('scroll')`.
- **Ereignisbehandlung**:
  - Event-Listener sauber registrieren und ggf. Klick-Propagation unterdrücken (`e.stopPropagation()`), um unerwünschte Nebeneffekte zu vermeiden (z. B. beim Schließen des mobilen Menüs).
  - Custom Cursor Events nur bei Mausbedienung (`@media (pointer: fine)`) aktivieren.
- **Inline-JS vs. Externe Skripte**: Aktuelle Skripte sind direkt inline in den HTML-Dateien platziert. Bei steigender Komplexität wird das Script in eine separate JS-Datei (z. B. `js/main.js`) ausgelagert.

---

## 5. Versionsverwaltung & Commits

- **Commit-Sprache**: Alle Commit-Messages werden auf **Deutsch** verfasst.
- **Branch-Konvention**:
  - Audits auf Branches des Typs `audit/YYYY-MM-DD`.
  - Fehlerbehebungen auf Branches des Typs `fix/YYYY-MM-DD`.
- **Dokumentationspflicht**: Jede funktionale Änderung muss parallel in der `/docs`-Struktur (speziell im `CHANGELOG-AI.md`) nachgetragen werden.
