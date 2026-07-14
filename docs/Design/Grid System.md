# Grid System

## Philosophy

**Predictable, not rigid.**

The grid provides structure. But it should never feel like a cage. Content breaks the grid when content demands it.

## Base Grid

- **12 columns**
- **Gap**: `clamp(1rem, 3vw, 2rem)` — responsive, breathing
- **Max width**: 1280px (standard), 720px (reading), 1440px (full-bleed content)

## Container System

| Container | Max Width | Usage |
|-----------|-----------|-------|
| Standard | 1280px | Default page content |
| Narrow | 720px | Long-form reading, manifestos |
| Wide | 1440px | Full-bleed image sections, galleries |
| Full | 100% | Hero images, video backgrounds |

## Column Layouts

### 4 Column
Desktop: 4 equal columns
Tablet: 2 columns
Mobile: 1 column

**Used for:** Lookbook, product grids, team photos

### 3 Column
Desktop: 3 equal columns
Tablet: 2 columns
Mobile: 1 column

**Used for:** Category cards, feature cards, case study grid

### 2 Column
Desktop: 2 equal columns
Mobile: 1 column

**Used for:** Testimonials, split content, comparison

### 1 Column (Reading)
Always 1 column, max 720px, centered.

**Used for:** Manifesto, about pages, long-form articles

## Spacing Scale

Based on 4px increments. Generous by default — space is respect.

| Token | Value | Usage |
|-------|-------|-------|
| `--space-4` | 16px | Standard element gap |
| `--space-6` | 24px | Card padding |
| `--space-8` | 32px | Section internal gap |
| `--space-12` | 48px | Content block gap |
| `--space-16` | 64px | Major content separation |
| `--space-section` | `clamp(5rem, 10vw, 8rem)` | Default section padding |
| `--space-section-lg` | `clamp(7rem, 14vw, 10rem)` | Generous section padding |

## Responsive Breakpoints

| Breakpoint | Width | Behavior |
|-----------|-------|----------|
| Mobile | < 640px | 1 column, reduced spacing |
| Tablet | 640–1024px | 2 columns where applicable |
| Desktop | > 1024px | Full multi-column layouts |
| Wide | > 1440px | Content stays at max-width, background expands |

## Grid Rules

### 1. Section spacing is non-negotiable
Never reduce section padding below `--space-section`. Crowding sections together communicates rush. Space communicates patience.

### 2. Reading width is sacred
Never stretch long-form text beyond 720px. Lines that are too long are hard to read. Lines that are too short feel fragmented. 65-75 characters per line is the sweet spot.

### 3. Break the grid intentionally
Full-bleed images, pull quotes, and hero sections can (and should) break the grid. The break creates visual interest. But only break the grid when the content earns it.

### 4. Mobile first
Design for the smallest screen first. Add complexity as space allows. Not the other way around.

## Implementation

```tsx
import { Container } from "@/02_Design_System/components/Container";

// Standard content
<Container>
  ...
</Container>

// Narrow reading
<Container className="max-w-[720px]">
  ...
</Container>
```
