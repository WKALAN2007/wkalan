# 003 — Grid System

## Philosophy

**Structure liberates. Chaos imprisons.**

A grid is not a cage. It's a skeleton — invisible, essential, holding everything upright. When the grid is right, the viewer forgets it exists. They just feel the page makes sense.

---

## Principles

### Align everything. Break intentionally.
Every element aligns to the grid. If it doesn't, there must be a reason. "It looked better" is not a reason. Breaking the grid communicates importance — it must be earned.

### Grid first. Content second.
Design the structure before placing content. Content in a bad grid looks bad. Content in a good grid looks intentional.

### The grid is invisible.
If someone notices the grid, it's too rigid. The grid should guide without being seen. Like bones. Like grammar.

---

## Specification

### 12-Column Grid
All layouts derive from 12 columns (divisible by 2, 3, 4, 6).

| Columns | Width | Usage |
|---------|-------|-------|
| 12 (1col) | 100% | Full-width, reading |
| 6+6 (2col) | 50% ea | Split, comparison |
| 4×3 (3col) | 33% ea | Cards, features |
| 3×4 (4col) | 25% ea | Gallery, lookbook |

### Grid Gap
`clamp(1rem, 3vw, 2rem)` — responsive, never too tight, never too loose.

### Breakpoints

| Name | Width | Columns |
|------|-------|---------|
| Mobile | < 640px | 1–2 |
| Tablet | 640–1024px | 2 |
| Desktop | > 1024px | 3–4 |

---

## Examples

### ✅ Correct
> 3-column card grid. Each card: 1/3 width, equal height, consistent gap. On tablet: 2 columns. On mobile: 1 column. The grid is never noticed — only the rhythm.

### ❌ Incorrect
> 3 cards. Left: 400px. Middle: 380px. Right: 420px. Gap: 20px between 1-2, 28px between 2-3. "It looked better this way."
>
> **Why:** No system. No consistency. The viewer feels something is off without knowing why.
