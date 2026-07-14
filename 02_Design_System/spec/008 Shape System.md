# 008 — Shape System

## Philosophy

**Soft, not sharp. Human, not machine.**

Sharp corners (0px) are the default of the web — the absence of a decision. A radius softens. It says: *a human hand shaped this.*

---

## Principles

### Larger elements get larger radii.
A 24px card with 4px radius feels wrong. Radius scales with the element.

### One radius per group.
All cards in a grid share the same radius. Consistency is felt.

### No 0px on interactive elements.
A zero-radius button feels uninviting. It says: "I was designed by a developer who didn't change the default."

---

## Specification

| Token | Value | Usage |
|-------|-------|-------|
| `none` | 0px | Tables, data grids, code blocks |
| `sm` | 6px | Inputs, tags |
| `md` | 10px | Buttons, dropdowns |
| `lg` | 16px | Cards, modals, images |
| `xl` | 24px | Large cards, hero images |
| `full` | 9999px | Pills, badges, avatars |

### Component Radius
Button: `full`. Card: `lg` (16px). Input: `sm` (6px). Modal: `xl` (24px). Avatar: `full`.

---

## Examples

### ✅ Correct
> Button: `radius-full` (pill). Card: `radius-lg` (16px). Input: `radius-sm` (6px). Three different radii, each appropriate to the element.

### ❌ Incorrect
> Three cards, same grid: Card 1 (4px), Card 2 (16px), Card 3 (24px). "I wanted visual variety."

**Why:** Inconsistent radii feel like an error, not variety.
