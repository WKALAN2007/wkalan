# 008 — Shadow System

## Philosophy

**Shadows create depth. Not drama.**

WKALAN does not rely on heavy shadows. We don't do drop shadows. We don't do glow effects. We don't do neumorphism.

We use shadows the way a photographer uses light — to create subtle layers of depth that are felt, not noticed.

---

## The Shadow Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-none` | `none` | Flat elements, text, icons |
| `--shadow-xs` | `0 1px 2px rgba(0,0,0,0.03)` | Subtle lift |
| `--shadow-sm` | `0 2px 8px rgba(0,0,0,0.04)` | Cards resting on surface |
| `--shadow-md` | `0 4px 16px rgba(0,0,0,0.06)` | Elevated cards, dropdowns |
| `--shadow-lg` | `0 8px 32px rgba(0,0,0,0.08)` | Modals, highest elevation |
| `--shadow-xl` | `0 16px 48px rgba(0,0,0,0.10)` | Reserved — rarely used |

---

## Shadow by Component

| Component | Shadow | Notes |
|-----------|--------|-------|
| Page background | none | Canvas doesn't cast shadows |
| Card (resting) | `--shadow-xs` or none | Flat is preferred |
| Card (hover) | `--shadow-sm` | Slight lift on interaction |
| Sticky header (scrolled) | `0 1px 0 rgba(0,0,0,0.05)` | A line, not a shadow. More elegant. |
| Dropdown menu | `--shadow-md` | Needs to float above content |
| Modal overlay | `--shadow-lg` | Highest elevation |

---

## Shadow Rules

### 1. Prefer flat
When in doubt, don't add a shadow. Most elements don't need elevation. The card's background color (`surface` on `background`) already creates enough depth.

### 2. Shadow on interaction, not by default
A card at rest should be flat or nearly flat. On hover, a subtle shadow appears. This creates a responsive, tactile feel — the element responds to attention.

### 3. One shadow direction
All shadows in a project should feel like they come from the same light source. Don't mix top shadows and bottom shadows.

### 4. No colored shadows
Shadows are always black with reduced opacity. Colored shadows (blue glow, etc.) feel like 2018.

### 5. No box-shadow on text
Use `text-shadow` only for accessibility (text on images). Never for decoration.

---

## Why WKALAN Shadows Are So Subtle

Heavy shadows create drama. They shout: *"Look at this element! It's floating!"*

WKALAN is not dramatic. We are calm. Our shadows whisper: *"This card is slightly above the surface. You might not even notice. That's fine."*

---

*Shadow is the gentlest way to say: this matters a little more.*
