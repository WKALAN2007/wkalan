# 010 — Iconography

## Philosophy

**Icons are signposts. Not decorations.**

An icon should help someone understand something faster than words could. If it doesn't — remove it. A label alone is better than a confusing icon.

---

## Icon Library

WKALAN uses **Lucide** as the primary icon library.

- **Style:** Outline
- **Stroke width:** 1.5px (default), 2px for small sizes
- **Corner radius:** Rounded (matches WKALAN's soft aesthetic)
- **Sizes:** 16px (inline), 20px (standard), 24px (standalone), 32px (feature)

---

## Icon Sizing

| Context | Size | Stroke |
|---------|------|--------|
| Inline with text | 16px | 1.5px |
| Button icon (leading/trailing) | 20px | 1.5px |
| Navigation, menu | 20px | 1.5px |
| Standalone (feature icon) | 24px | 1.5px |
| Hero / large feature | 32px | 1.5px |
| Social / brand icons | 20px | 1.5px |

---

## Icon Rules

### 1. One icon library
Lucide only. Don't mix Feather, Heroicons, Phosphor, or custom SVGs unless there's a specific icon Lucide doesn't have — and even then, match the stroke style exactly.

### 2. Icons inherit color
Icons should always use `currentColor`. They inherit color from their parent element's text color. Never hardcode a color on an icon.

### 3. Label or icon — not both
If there's a visible text label, you rarely need an icon next to it. The label is clearer. The icon is redundancy. Exceptions: social media links, external link indicators, navigation items with very short labels.

### 4. No icon-only buttons without aria-label
Every icon-only button must have an `aria-label` that describes its action. "Search" not "Magnifying glass icon."

### 5. Consistent sizing within a context
All navigation icons are 20px. All inline icons are 16px. All feature icons are 24px. Sizing is a system, not a suggestion.

---

## Common Icon Usage

| Context | Icon | Size |
|---------|------|------|
| External link | `ExternalLink` | 14px trailing |
| Menu toggle | `Menu` / `X` | 20px |
| Search | `Search` | 20px |
| Cart | `ShoppingBag` | 20px |
| Scroll down | `ArrowDown` | 16px |
| Arrow right | `ArrowRight` | 16px trailing |
| Close | `X` | 20px |
| Social: Instagram | `Camera` | 20px |
| Social: Music/Spotify | `Music` | 20px |

---

## What We Don't Use

- **Filled / solid icons** — too heavy. Outlines breathe.
- **Duotone icons** — too decorative. We're not a SaaS dashboard.
- **Animated icons** — icons should be still. Motion is for content.
- **Emoji as icons** — unprofessional. Inconsistent cross-platform.

---

*An icon is a promise: one glance, instant understanding. If it takes two glances, it failed.*
