# 005 — Grid System

## Philosophy

**Structure liberates. Chaos imprisons.**

A grid is not a cage. It's a skeleton — invisible, essential, holding everything upright. When the grid is right, the reader forgets it exists. They just feel that the page *makes sense.*

---

## The 12-Column Grid

All WKALAN layouts are built on a 12-column grid — divisible by 2, 3, 4, and 6, giving maximum flexibility without complexity.

```
| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
```

### Column Layouts Derived from 12

| Columns | Width | Usage |
|---------|-------|-------|
| 12 (1 col) | 100% | Full-width sections, heroes, reading |
| 6 + 6 (2 col) | 50% each | Split content, comparison |
| 4 × 3 (3 col) | 33% each | Cards, categories, features |
| 3 × 4 (4 col) | 25% each | Lookbook, product grid |
| 8 + 4 | 67% / 33% | Content + sidebar |
| 4 + 8 | 33% / 67% | Sidebar + content |

### Grid Gap

```
--grid-gap: clamp(1rem, 3vw, 2rem);
```

Responsive. Breathes with the viewport. Never too tight, never too loose.

---

## Breakpoints

| Name | Min Width | Behavior |
|------|-----------|----------|
| Mobile | 0 | 1 column, reduced spacing |
| Tablet | 640px | 2 columns where applicable |
| Desktop | 1024px | Full multi-column layouts |
| Wide | 1440px | Content stops expanding, background continues |

WKALAN breakpoints are deliberately fewer than industry standard. Four breakpoints are enough. Complexity doesn't equal sophistication.

---

## Container Widths

| Container | Max Width | Usage |
|-----------|-----------|-------|
| Narrow | 720px | Reading, manifestos, long-form |
| Standard | 1280px | Default page content |
| Wide | 1440px | Image galleries, full-bleed content |
| Full | 100% | Hero images, video backgrounds |

---

## Safe Area

All content stays within the container unless it intentionally breaks the grid.

**Intentional breaks:**
- Full-bleed hero images (earned by being the first thing you see)
- Pull quotes that span column boundaries (earned by being important)
- Large photography (earned by telling a story)

**Not intentional breaks:**
- "It looked better this way" (no — align it)
- "I wanted more space on this side" (no — use the grid)

---

## Grid Principles

### 1. Align everything
Every element should align to the grid. If it doesn't, there must be a reason. "It looked better" is not a reason.

### 2. Grid first, content second
Design the grid structure before placing content. Content poured into a bad grid looks bad. Content poured into a good grid looks intentional.

### 3. Less columns on mobile
Desktop uses 12 columns. Tablet uses 6. Mobile uses 1–2. Don't force complex grids onto small screens.

### 4. Gaps create rhythm
Consistent gaps create visual rhythm. Inconsistent gaps create visual noise. Every gap in a layout should be the same, or a clear multiple.

### 5. The grid is invisible
If someone notices the grid, it's too rigid. The grid should guide the eye without being seen. Like bones. Like foundations. Like grammar.

---

## Implementation

```tsx
// Standard grid layout
<div className="grid grid-cols-12 gap-[var(--grid-gap)]">
  <div className="col-span-8">Main content</div>
  <div className="col-span-4">Sidebar</div>
</div>

// Responsive card grid
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[var(--grid-gap)]">
  {cards.map(card => <Card key={card.id} />)}
</div>
```

---

*A grid is not a restriction. It's a rhythm. Learn it. Then break it — when the content earns it.*
