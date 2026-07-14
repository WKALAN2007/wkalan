# 004 — Spacing System

## Philosophy

**Space is not empty. Space is generous.**

In a world where every pixel is monetized, where content competes for attention, where density is the default — we choose the opposite.

**We give content room to breathe.**

Because 品味 (savoring) requires space. You can't savor something in a crowd. You need quiet. You need room. You need time.

Spacing is how we communicate: *"This is worth your attention. Take your time."*

---

## The Spacing Scale

Based on 4px increments. Every component, every section, every layout uses this scale — no exceptions.

| Token | Rem | Pixels | Usage |
|-------|-----|--------|-------|
| `--space-0` | 0 | 0px | No space |
| `--space-1` | 0.25rem | 4px | Icon-to-text gap, tight inline |
| `--space-2` | 0.5rem | 8px | Element siblings, icon gaps |
| `--space-3` | 0.75rem | 12px | Tight card padding |
| `--space-4` | 1rem | 16px | Standard element gap |
| `--space-5` | 1.25rem | 20px | Comfortable gap |
| `--space-6` | 1.5rem | 24px | Card padding, section gap |
| `--space-8` | 2rem | 32px | Content block gap |
| `--space-10` | 2.5rem | 40px | Large block gap |
| `--space-12` | 3rem | 48px | Major content separation |
| `--space-16` | 4rem | 64px | Section internal padding |
| `--space-20` | 5rem | 80px | Tight section padding |
| `--space-24` | 6rem | 96px | Standard section padding |
| `--space-32` | 8rem | 128px | Generous section padding |
| `--space-section` | `clamp(5rem, 10vw, 8rem)` | — | Default section vertical |
| `--space-section-lg` | `clamp(7rem, 14vw, 10rem)` | — | Generous section vertical |

---

## Spacing Principles

### 1. More space = more importance
The more space around something, the more it matters. A hero headline with 10vw of breathing room feels like a statement. The same headline squeezed into a tight section feels like an afterthought.

### 2. Section spacing is sacred
Never compress section spacing below `--space-section`. Cramped sections communicate urgency. Urgency is the enemy of savoring.

### 3. Horizontal spacing is breathing
Side padding (`--container-padding`) should always be generous. Content that touches the edge of the screen feels like it's trying to escape.

### 4. Vertical spacing is rhythm
The space between sections should be greater than the space within sections. The hierarchy: section gap > block gap > element gap > inline gap.

### 5. Space is not decoration
Don't add space to "make things look nice." Add space to create clarity. If the layout is clear without extra space, leave it.

---

## Component Spacing Patterns

| Component | Internal Padding | External Gap |
|-----------|-----------------|--------------|
| Card | `--space-6` (24px) | `--grid-gap` |
| Button | `--space-3` vertical, `--space-6` horizontal | `--space-4` |
| Section | `--space-section` vertical | N/A |
| Nav item | N/A | `--space-6` |
| Form input | `--space-4` | `--space-4` |
| Footer column | N/A | `--space-12` |

---

## Responsive Spacing

Spacing decreases on smaller screens — but never below 75% of the desktop value.

| Breakpoint | Section Padding | Container Padding |
|-----------|-----------------|-------------------|
| Desktop (>1024px) | `--space-section` | 3rem |
| Tablet (640–1024px) | 0.85 × section | 2rem |
| Mobile (<640px) | 0.75 × section | 1.5rem |

---

## Spacing and 品味

品味 takes time. Time takes space.

A crowded layout shouts: *"Quick! Look! Consume! Move on!"*
A generous layout whispers: *"Stay. Read. Feel. There's no rush."*

**We design the second one.**

---

*Space is not a waste. Space is respect.*
