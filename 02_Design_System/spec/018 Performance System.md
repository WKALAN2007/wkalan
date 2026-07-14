# 018 — Performance System

## Philosophy

**Performance is part of the design.**

A beautiful page that takes 8 seconds to load is not beautiful. It's broken. Performance is not optimization you do at the end — it's a design constraint from the beginning.

---

## Principles

### Core Web Vitals as minimum.
LCP < 2.5s. CLS < 0.1. INP < 200ms. These are floors, not ceilings.

### Every kilobyte must justify itself.
Images are optimized. Fonts are subset. JavaScript is minimized. Nothing ships that hasn't been questioned.

### Perceived performance matters as much as measured.
Skeleton states. Blur placeholders. Font swap. The page should feel fast even while loading.

---

## Specification

| Metric | Target |
|--------|--------|
| **LCP** (Largest Contentful Paint) | < 2.5s |
| **CLS** (Cumulative Layout Shift) | < 0.1 |
| **INP** (Interaction to Next Paint) | < 200ms |
| **TBT** (Total Blocking Time) | < 200ms |

### Optimization Checklist
- [ ] Images: Next.js `<Image>`, WebP/AVIF, proper `sizes`, lazy below fold
- [ ] Fonts: `display: swap`, subset to needed characters
- [ ] JS: Server components by default, minimal client JS
- [ ] CSS: Tailwind purges unused styles in production
- [ ] No render-blocking resources in `<head>`
- [ ] Hero image: `priority`, `loading="eager"`, preloaded

---

## Examples

### ✅ Correct
> Hero image: preloaded, WebP, 2560px, 80% quality. Below-fold images: lazy-loaded, WebP, 800px. Fonts: `display: swap`. Result: LCP 1.8s, CLS 0.02.

### ❌ Incorrect
> Hero: 6000px PNG, no preload, no compression. Below-fold: 4000px JPEGs, all eager-loaded. Fonts: blocking. Result: LCP 8.4s, CLS 0.4. "But it looks great on my machine."
