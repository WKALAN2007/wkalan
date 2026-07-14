# 004 — Spacing (Rhythm) System

## Philosophy

**Space is not a waste. Space is respect.**

In a world where every pixel is monetized and density is the default, WKALAN chooses the opposite. We give content room to breathe. Because 品味 (savoring) requires space. You can't savor something in a crowd.

Space is not defined by numbers. It's defined by rhythm. Every distance has a name and a purpose.

---

## Principles

### Space creates importance.
The more space around something, the more it matters. A statement with 200px of breathing room carries weight. The same statement in a tight section feels like an afterthought.

### Consistent spacing is invisible craftsmanship.
If padding changes from 120px to 96px between sections, the viewer won't know why — but they'll feel something is off. Consistent spacing creates trust.

### Space is the first thing you notice, the last thing you name.
Nobody says "this site has great spacing." They say "this site feels calm." Space creates the feeling. It just doesn't take credit for it.

---

## Specification

### The Rhythm Scale

| Token | Value | Usage |
|-------|-------|-------|
| **Micro** | 4px | Icon-to-text gap |
| **Tiny** | 8px | Tight inline spacing |
| **Small** | 16px | Standard element gap |
| **Medium** | 24px | Card internal padding |
| **Large** | 40px | Content block gap |
| **XL** | 64px | Major content separation |
| **Section** | 120px | Default section vertical padding |
| **Page** | 200px | Hero top/bottom, major chapter transitions |

### Component Spacing

| Component | Internal Padding | External Gap |
|-----------|-----------------|--------------|
| Card | Medium (24px) | Grid gap |
| Button | Small (16px) horizontal, Tiny (8px) vertical | Small (16px) |
| Section | Section (120px) | — |
| Nav item | — | Medium (24px) |
| Form input | Small (16px) | Small (16px) |

### Responsive Reduction
- Desktop (>1024px): 100% of specified values
- Tablet (640–1024px): 85%
- Mobile (<640px): 75%

---

## Examples

### ✅ Correct
> Hero: Page (200px) top and bottom. Statement section: Section (120px). Card grid: each card Medium (24px) padding, grid gap Small (16px). The rhythm is consistent throughout.

### ❌ Incorrect
> Section A: 140px padding. Section B: 96px padding. Section C: 112px padding. No pattern. No reason.
>
> **Why:** Inconsistent spacing feels unintentional. The viewer may not know why, but they feel the lack of care.
