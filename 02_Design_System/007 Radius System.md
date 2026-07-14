# 007 — Radius System

## Philosophy

**Soft, not sharp. Human, not machine.**

Sharp corners (0px radius) are the default of the web. They're the absence of a decision. A rectangle with no radius feels digital — cold, precise, indifferent.

A radius softens. It says: *a human hand shaped this.*

---

## The Radius Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-none` | 0px | Tables, data grids, code blocks |
| `--radius-sm` | 6px | Inputs, tags, small interactive elements |
| `--radius-md` | 10px | Buttons, dropdowns, tooltips |
| `--radius-lg` | 16px | Cards, modals, image containers |
| `--radius-xl` | 24px | Large cards, hero images |
| `--radius-full` | 9999px | Pills, badges, avatar circles |

---

## Radius by Component

| Component | Radius | Reason |
|-----------|--------|--------|
| Button | `--radius-full` | Invites touch. Softest possible. |
| Card | `--radius-lg` (16px) | Substantial but not pillowy |
| Input | `--radius-sm` (6px) | Functional, subtle |
| Image container | `--radius-lg` (16px) | Frames without distracting |
| Modal | `--radius-xl` (24px) | Elevated, distinct from page |
| Tag / Badge | `--radius-full` | Compact, scannable |
| Avatar | `--radius-full` | Circle — the most human shape |
| Table | `--radius-none` (0px) | Data needs precision |
| Code block | `--radius-md` (10px) | Technical but approachable |

---

## Radius Rules

### 1. Never mix radii in a group
If three cards are in a grid, they all have the same radius. Consistency is felt.

### 2. Larger elements get larger radii
A 24px card with a 4px radius feels wrong. A button with 24px radius is a pill. Radius should scale with the element.

### 3. Never 0px on interactive elements
Zero radius on a button feels uninviting. It says: "I was designed by a developer who didn't change the default." Interactive elements should always have at least `--radius-sm`.

### 4. Never more than 24px on data
Data tables, code, and information-dense elements should stay at `--radius-none` or `--radius-sm`. Rounded data feels unserious.

---

## Why Pill Buttons?

WKALAN uses `border-radius: 9999px` (fully rounded / pill) for buttons.

This is a deliberate choice:
- Pills feel more tactile — they invite touch
- They're universally accessible — no culture associates them with a specific era
- They're soft without being trendy — pill buttons have existed since physical buttons
- They stand out against rectangular cards and images

---

*Radius is not decoration. It's the handshake between the digital and the human.*
