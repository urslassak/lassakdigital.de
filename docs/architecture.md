# Codebase Architecture & UX System

This guide outlines the UX features and code structure used to build the Lassak Digital website.

## 1. Design & Typography

The page uses a bold, premium dark theme design with neon coral-orange highlights.

- **Colors**:
  - Backgrounds: Solid ultra-dark grey `#0a0a0c` for text readability, with card accents in `#121216` styled with translucent borders.
  - Text: Clean white `#ffffff` headings and medium-grey `#a0a0a5` body copy.
  - Accents: Neon coral-orange `#ff4d1c` for indicators, cursor highlights, custom borders, and hover states.
- **Fonts**:
  - Headings: `Syne` (a display typeface with high character and geometric forms, giving the page an agency feel).
  - Body: `DM Sans` (clean, geometric sans-serif prioritizing legibility across device resolutions).

## 2. Interaction Details

### Custom Cursors
A dynamic custom cursor is managed via JavaScript inside `index.html` and styled in `style.css`:
- **Dot Cursor (`.cursor`)**: Tracks the exact mouse coordinates instantly.
- **Ring Cursor (`.cursor-ring`)**: Follows the mouse position with a lag or easing effect (`rx += (mx - rx) * 0.15`) to create a smooth tracking motion.
- On hover of buttons or links, the cursor scale increases and the ring color shifts to highly visible neon orange (`rgba(255, 77, 28, 0.7)`).
- Custom cursors are only active on desktop computers (`@media (pointer: fine)`). Default system cursors are hidden in this state.

### Scroll Reveal Animation
Sections or cards have a `.reveal` class.
- A JavaScript `IntersectionObserver` detects when an element scrolls into the viewport (10% threshold) and adds the `.visible` class.
- The transitions are configured with a custom cubic-bezier timing function (`cubic-bezier(0.16, 1, 0.3, 1)`) to create a smooth elastic entry effect.
- Style transition definition:
  ```css
  .reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), 
                transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }
  ```

## 3. Responsive Principles
The design uses a **Mobile-First** CSS pattern:
- Base styles are defined for smartphone displays (single-column flex layouts, smaller root font sizes, appropriate target paddings).
- Media queries `@media (min-width: 768px)` (tablet) and `@media (min-width: 1024px)` (desktop) expand layout columns via CSS Grid, adjust margins, and introduce custom cursor elements.
- Interactive elements (like cards in Services, KPI Grid, and Pricing) utilize grid configurations that wrap columns automatically:
  ```css
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  ```
