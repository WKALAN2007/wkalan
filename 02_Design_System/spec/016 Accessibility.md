# 016 — Accessibility

## Philosophy

**Accessibility is not a checklist. It's respect.**

Designing for everyone is the baseline. A digital identity that excludes people based on ability is not an identity — it's a wall.

---

## Principles

### Accessible by default.
Every component ships accessible. Focus states, alt text, semantic HTML, keyboard navigation. Not optional. Not "later."

### WCAG AA minimum.
All WKALAN projects meet WCAG 2.2 Level AA. AAA where possible without compromising design.

### Reduced motion is not an afterthought.
`prefers-reduced-motion` kills all animations. The content must still be fully accessible and beautiful.

---

## Specification

| Requirement | Standard |
|-------------|----------|
| Color contrast (body) | 4.5:1 minimum |
| Color contrast (large text) | 3:1 minimum |
| Focus ring | 2px accent, 2px offset, on all interactive elements |
| Touch targets | 44×44px minimum |
| Heading hierarchy | One h1. No level skips. |
| Alt text | On every `<img>`. Content: descriptive. Decorative: `alt=""`. |
| Keyboard | All interactive elements reachable and operable via keyboard |
| Skip link | "Skip to content" at top of every page |
| Zoom | Readable at 200% zoom, no horizontal scroll |
| `prefers-reduced-motion` | All animations disabled |
| `lang` attribute | Set on `<html>` |

### Testing
Every project tested with: keyboard-only navigation, VoiceOver (macOS), axe DevTools, 200% browser zoom.

---

## Examples

### ✅ Correct
> A page with: logical heading hierarchy (h1→h2→h3), visible focus rings, descriptive alt text, 44px+ touch targets, skip-to-content link, and 5.2:1 minimum contrast.

### ❌ Incorrect
> A page with: `outline: none` on all elements, missing alt text, 28px touch targets, flat heading structure (everything is h3), and 2.1:1 contrast on body text. "We'll fix accessibility later."
