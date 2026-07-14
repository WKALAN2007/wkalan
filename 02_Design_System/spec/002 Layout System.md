# 002 — Layout System

## Philosophy

**Layout is storytelling in space.**

Every WKALAN page is a narrative. The layout determines what the visitor feels first, what they discover next, and what they remember last. Layout is not about arranging elements — it's about guiding someone through an emotional journey.

---

## Principles

### Every page has one hero.
One first impression. One dominant element. One statement that sets the emotional tone. More than one hero = no hero at all.

### Sections alternate rhythm.
Light → Dark → Light → Dark. Or: Full-bleed → Contained → Full-bleed → Contained. Rhythm prevents monotony. Variation keeps attention.

### White space is not empty. It's generous.
The space between sections should be greater than the space within sections. The hierarchy: section gap > block gap > element gap > inline gap.

### The close matters as much as the open.
The last thing someone sees is what they remember. The final section must feel like an ending — not like the page just stopped.

---

## Specification

### Container Widths

| Container | Max Width | Usage |
|-----------|-----------|-------|
| **Reading** | 680px | Long-form text, manifestos, founder letters |
| **Standard** | 1280px | Default page content |
| **Wide** | 1440px | Image galleries, full-bleed content |
| **Full** | 100% | Hero images, video backgrounds |

### Section Spacing

| Level | Value | Usage |
|-------|-------|-------|
| **Section** | `clamp(5rem, 10vw, 8rem)` (120px) | Default section padding |
| **Section LG** | `clamp(7rem, 14vw, 10rem)` (160px) | Cinematic sections, major transitions |
| **Section SM** | `clamp(3rem, 6vw, 5rem)` (64px) | Compact sections, footers |

### The Six Sacred Layouts
1. **Hero** — Full viewport. One statement. One image or none. Fade to next.
2. **Statement** — Narrow reading width. Centered or left. Label + line + text.
3. **Grid** — 2–4 columns. Equal weight. Staggered reveal.
4. **Timeline** — Central line. Alternating entries. Scroll-triggered.
5. **Split** — 50/50 or 60/40. Text + image. Collapses on mobile.
6. **Close** — Centered. Tight. One CTA. Feels final.

### When to Break the Layout
Full-bleed images, pull quotes, and key statistics can break the grid — but only when the content earns it. The break itself must communicate importance. Never break the grid "because it looks better."

---

## Examples

### ✅ Correct
> Hero (full viewport, one statement) → Problem (split layout) → Philosophy (narrow reading) → Process (timeline) → Stories (grid) → Founder (narrow reading) → Invitation (close).
>
> **Why:** Each section has a distinct layout that matches its purpose. The rhythm alternates. The close feels like an ending.

### ❌ Incorrect
> Hero → Grid → Grid → Grid → Grid → Footer.
>
> **Why:** No rhythm. Every section feels the same. Nothing is emphasized because nothing is different.
