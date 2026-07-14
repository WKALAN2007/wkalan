# 019 — Accessibility

## Philosophy

**Accessibility is not a checklist. It's respect.**

Designing for everyone is not a constraint. It's the baseline. A digital identity that excludes people based on ability is not an identity — it's a wall.

---

## Standards

WKALAN projects target **WCAG 2.2 Level AA** compliance at minimum.

---

## Color Contrast

All text must meet minimum contrast ratios:

| Element | Minimum Ratio | Grade |
|---------|--------------|-------|
| Body text (< 18px) | 4.5:1 | AA |
| Large text (≥ 18px or bold ≥ 14px) | 3:1 | AA |
| Icons and UI components | 3:1 | AA |

**WKALAN Default Contrast Ratios:**
| Combination | Ratio | Passes |
|-------------|-------|--------|
| Ink (#1A1A18) on Warm White (#FAFAF8) | 18.2:1 | AAA |
| Secondary (#6B6B68) on Warm White | 5.2:1 | AA |
| Accent (#4F6BFF) on Warm White | 4.6:1 | AA (large) |
| Gold (#C9A84C) on Deep Black (#0F0F0D) | 9.8:1 | AAA |

---

## Keyboard Navigation

Every interactive element must be reachable and operable via keyboard:

- **Tab order:** Logical and matches visual order
- **Focus visible:** `:focus-visible` ring on every interactive element
- **Skip link:** "Skip to content" link at the top of every page
- **No keyboard traps:** Focus can always move forward and backward
- **Enter / Space:** Activates buttons and links
- **Escape:** Closes modals, menus, overlays

---

## Focus Ring

```css
:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
  border-radius: var(--radius-sm);
}
```

- 2px width — visible but not aggressive
- Accent color — consistent with the design system
- 2px offset — doesn't touch the element, stands out
- Border-radius — soft, matches element's radius

---

## Screen Readers

- **Semantic HTML:** Use `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<h1>`–`<h6>`
- **Alt text:** Every `<img>` has descriptive `alt` text. Decorative images use `alt=""`.
- **Aria labels:** Icon-only buttons have `aria-label`. Dynamic content uses `aria-live`.
- **Heading hierarchy:** One `<h1>` per page. Headings don't skip levels (h1 → h2 → h3, never h1 → h3).
- **Link text:** Links describe their destination. "Click here" is never a link label.

---

## Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

All animations are disabled when the user has requested reduced motion. Content is still visible — just static.

---

## Touch Targets

Minimum touch target size: **44×44px** (WCAG 2.5.5)

- Buttons: minimum 44px height
- Icon buttons: minimum 44×44px interactive area (icon can be smaller, but the clickable area must be 44×44)
- Navigation links: adequate spacing between items
- Form inputs: minimum 44px height

---

## Typography & Readability

- **Font size:** Never below 12px for any text
- **Line height:** Minimum 1.5 for body text
- **Paragraph width:** Maximum 720px (65–75 characters)
- **Text spacing:** No `line-height: 1` on body text — it's unreadable
- **Zoom:** Page works at 200% zoom without horizontal scroll or content loss

---

## Accessibility Checklist

Every WKALAN project is audited against this checklist before launch:

- [ ] All images have alt text
- [ ] Heading hierarchy is logical (h1 → h2 → h3)
- [ ] Color contrast passes AA minimum
- [ ] All interactive elements are keyboard accessible
- [ ] Focus ring is visible on all interactive elements
- [ ] Skip-to-content link exists
- [ ] Forms have labels and error messages
- [ ] Touch targets are ≥ 44×44px
- [ ] Page is readable at 200% zoom
- [ ] `prefers-reduced-motion` is respected
- [ ] Semantic HTML is used throughout
- [ ] `lang` attribute is set on `<html>`

---

*Accessibility is not "extra work." It's the work. If it's not accessible, it's not finished.*
