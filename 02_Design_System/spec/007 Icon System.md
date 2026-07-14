# 007 — Icon System

## Philosophy

**Icons are signposts. Not decorations.**

An icon should help someone understand something faster than words could. If it doesn't — remove it. A label alone is better than a confusing icon.

---

## Principles

### One library. One style.
Lucide only. Outline. 1.5px stroke. Never mix libraries.

### Icons inherit color.
Always `currentColor`. Never hardcode. The icon belongs to its context.

### Label or icon — not both.
If there's a visible label, you rarely need an icon. Icons are for recognition, not redundancy.

### No icon-only buttons without aria-label.
Every icon-only button must announce its action to screen readers: "Search," "Menu," "Close."

---

## Specification

| Context | Size | Stroke |
|---------|------|--------|
| Inline with text | 16px | 1.5px |
| Button (leading/trailing) | 20px | 1.5px |
| Navigation, menu | 20px | 1.5px |
| Standalone feature | 24px | 1.5px |
| Social / brand | 20px | 1.5px |

### Common Icons
`ExternalLink` (14px trailing), `Menu`/`X` (20px), `Search` (20px), `ShoppingBag` (20px), `ArrowDown` (16px), `ArrowRight` (16px trailing)

---

## Examples

### ✅ Correct
> A "View Project →" link. The arrow is 16px, trailing, inherits the link's accent color. It communicates direction without calling attention to itself.

### ❌ Incorrect
> A button with a 32px animated icon, a text label, and a different icon library for each button on the page.

**Why:** Chaos. Icons compete with labels. Multiple libraries = visual inconsistency.
