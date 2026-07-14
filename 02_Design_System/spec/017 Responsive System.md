# 017 — Responsive System

## Philosophy

**Design for the smallest screen first. Add complexity as space allows.**

The web is not a fixed canvas. WKALAN designs from mobile → tablet → desktop. If it doesn't work on a phone, it doesn't work.

---

## Principles

### Mobile first.
Write mobile styles as the default. Use breakpoints to add complexity. Never write desktop-first that collapses on mobile.

### Content determines breakpoints.
Not 768px because it's standard. The width where your content breaks — that's your breakpoint.

### Typography scales fluidly.
Use `clamp()`. No discrete jumps. Smooth scaling from mobile to desktop.

---

## Specification

| Breakpoint | Width | Columns | Section Padding |
|-----------|-------|---------|-----------------|
| Mobile | < 640px | 1–2 | 75% of desktop |
| Tablet | 640–1024px | 2 | 85% of desktop |
| Desktop | > 1024px | 3–4 | 100% |
| Wide | > 1440px | 4+ | 100%, content stops expanding |

### Layout Behavior
Card grids: 1col (mobile) → 2col (tablet) → 3–4col (desktop). Timeline: single column (mobile) → alternating L/R (desktop). Navigation: hamburger (mobile) → inline (desktop).

### Testing Devices
iPhone SE (375px), iPhone 14 (390px), iPad (768px, 1024px), 13" laptop (1280px), 27" desktop (2560px).

---

## Examples

### ✅ Correct
> 3-column card grid. Mobile: 1 column, full width, generous touch targets. Tablet: 2 columns. Desktop: 3 columns. Every transition is smooth.

### ❌ Incorrect
> Desktop design shrunk to mobile width. Cards are 3 columns at 375px — each card is 100px wide. Text overflows. Buttons overlap. "Just zoom out."
