# 012 — Interaction System

## Philosophy

**Every interaction is a conversation. Don't go silent.**

When a user hovers, clicks, focuses, or taps — the page must respond. Silence feels broken. Response feels alive. But response must be subtle: the page acknowledges, never performs.

---

## Principles

### Every interactive element has hover feedback.
If it's clickable, it responds to hover. Silence = "I'm broken." Response = "I'm here. Click me."

### Hover confirms. It doesn't entertain.
A button shifts color. A card lifts slightly. A link underlines. No bouncing. No spinning. No glowing. The interaction says "I acknowledge you" — not "Look at me!"

### Focus is as important as hover.
Keyboard users deserve the same feedback as mouse users. The focus ring must be visible, consistent, and equal in visual weight to the hover effect.

---

## Specification

### Interaction States

| State | Trigger | Duration | Behavior |
|-------|---------|----------|----------|
| **Default** | — | — | Resting state |
| **Hover** | Mouse enter | 100ms | Color shift, slight lift, underline |
| **Focus** | Tab / keyboard | Instant | 2px accent ring, 2px offset |
| **Active** | Mouse down / tap | 100ms | Scale 0.98, background darkens |
| **Loading** | After click | — | Spinner, element disabled |
| **Disabled** | — | — | 40% opacity, cursor: not-allowed |

### Hover by Element

| Element | Hover Response | Duration |
|---------|---------------|----------|
| Text link | Underline slides in, color shifts | 100ms color, 400ms underline |
| Button | Background fills/darkens | 200ms |
| Card | Lifts 2px, shadow appears, border accent | 400ms |
| Image (in gallery) | Scale 1.03 | 700ms |
| Icon | Opacity shift (1 → 0.7) | 100ms |

### Cursor States

| Context | Cursor |
|---------|--------|
| Text | `text` |
| Link, button, interactive | `pointer` |
| Disabled | `not-allowed` |
| Default | `auto` |

---

## Examples

### ✅ Correct
> A card. Default: flat, subtle border. Hover: lifts 2px, border shifts to accent, shadow appears. Focus: 2px accent ring. Active: scale 0.98. All within 400ms.
>
> **Why:** Every state communicates. The transitions are subtle and unified. No single state screams for attention.

### ❌ Incorrect
> A button. Hover: bounces 10px up, glows neon blue, text rotates 5°. Click: explodes into particles. No focus state.
>
> **Why:** Playful, distracting, inaccessible. The interaction is about the effect, not about guiding the user.
