# 017 — Cursor Experience

## Philosophy

**The cursor is the user's finger on the page. Treat it with respect.**

Every interaction between cursor and page is a micro-moment of communication. The cursor touches something. The page responds. That response says: *"I see you. I'm here. I'm alive."*

---

## Default Cursor

WKALAN uses the **native browser cursor** for all standard interactions.

No custom cursors. No magnetic effects. No trailing animations.

Why: The native cursor is universally recognized, perfectly responsive, and never breaks. Custom cursors introduce lag, confuse users, and feel like a gimmick from 2015.

---

## Cursor States

| State | Cursor | Usage |
|-------|--------|-------|
| Default | `auto` | Text, content, normal interaction |
| Pointer | `pointer` | Links, buttons, interactive elements |
| Text | `text` | Text selection areas |
| Not allowed | `not-allowed` | Disabled buttons, inactive elements |
| Grab / Grabbing | `grab` / `grabbing` | Draggable carousels, sliders |

---

## Hover Feedback

Every interactive element should respond to hover. Silence feels broken.

| Element | Hover Response |
|---------|---------------|
| Text link | Color shift (100ms) + underline reveal (400ms) |
| Button | Background fills, text inverts (200ms) |
| Card | Slight lift (translateY -2px) + shadow (400ms) |
| Image (in gallery) | Subtle scale 1.03 (700ms) |
| Icon | Color or opacity shift (100ms) |
| Navigation item | Color shift to accent (100ms) |

---

## Hover Rules

### 1. Every interactive element has hover feedback
If an element is clickable, it must respond to hover. Silence communicates: *"I'm broken."*

### 2. Hover feedback is subtle
Scale 1.03. Color shift. Opacity change. Never dramatic. Never surprising. Hover should confirm interaction, not distract from it.

### 3. Hover is instant, motion is slow
Hover feedback starts instantly (100ms color shift) — the user feels immediate response. The animation that follows can be slower (400ms underline reveal) — satisfying to watch.

### 4. No cursor trapping
Never force the cursor into a specific area. Never create invisible walls. The cursor belongs to the user.

---

## What We Don't Do

- **Custom cursors** — gimmicky, laggy, breaks accessibility
- **Magnetic effects** — elements following the cursor feel needy
- **Cursor trails** — distracting, performance-heavy
- **Hover tooltips on everything** — if it needs explanation, the design failed

---

*The cursor is a handshake. Make it warm.*
