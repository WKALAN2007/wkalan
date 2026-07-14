# 020 — Responsive System

## Philosophy

**Design for the smallest screen first. Add complexity as space allows.**

The web is not a fixed canvas. It's a fluid medium viewed through infinite screen sizes. WKALAN designs from mobile → tablet → desktop — not the other way around. If it doesn't work on a phone, it doesn't work.

---

## Breakpoints

| Name | Min Width | Max Width | Columns | Behavior |
|------|-----------|-----------|---------|----------|
| Mobile | 0 | 639px | 1 | Stacked. Generous touch targets. Maximum 2 columns for small grids. |
| Tablet | 640px | 1023px | 2 | Two columns where applicable. Side padding increases. |
| Desktop | 1024px | 1439px | 3–4 | Full multi-column. Grid becomes expressive. |
| Wide | 1440px | — | 4–12 | Content stops expanding. Background continues. |

---

## Responsive Rules

### 1. Mobile first
Write mobile styles as the default. Use `sm:`, `md:`, `lg:` breakpoints to add complexity on larger screens. Never write desktop-first CSS that collapses on mobile.

### 2. Content determines breakpoints
The breakpoint where a layout breaks is the one you design for. Not 768px because it's standard. Not 1024px because it's common. The width where your content no longer looks right.

### 3. Typography scales fluidly
Headlines use `clamp()` — fluid between a minimum and maximum. No discrete jumps at breakpoints.

```css
font-size: clamp(2.5rem, 5vw, 4rem);
```

### 4. Images are responsive by default
All images use `max-width: 100%` and `height: auto`. Next.js `<Image>` component handles responsive sizes automatically.

### 5. Touch targets grow on mobile
Desktop hover states don't exist on mobile. Touch targets must be ≥ 44×44px. Spacing between interactive elements increases on mobile to prevent mis-taps.

---

## Layout Behavior by Breakpoint

| Layout Pattern | Mobile | Tablet | Desktop |
|---------------|--------|--------|---------|
| Section padding | 0.75 × `--space-section` | 0.85 × | Full |
| Container padding | 1.5rem | 2rem | 3rem |
| Card grid | 1 column | 2 columns | 3–4 columns |
| Split layout | Stacked | Stacked or split | Split |
| Timeline | Single column | Single column | Alternating L/R |
| Navigation | Hamburger menu | Hamburger or inline | Inline nav |
| Footer | 1 column | 2 columns | 4–5 columns |

---

## Testing

Every WKALAN project is tested on:
- iPhone SE (375px)
- iPhone 14 (390px)
- iPad (768px, 1024px)
- 13" Laptop (1280px–1440px)
- 27" Desktop (2560px)
- 200% browser zoom at 1280px

---

*Responsive design is not a feature. It's the definition of web design.*
