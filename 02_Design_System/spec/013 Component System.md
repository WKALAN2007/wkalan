# 013 — Component System

## Philosophy

**Every component tells a story. Every component justifies its existence.**

A Button is not a button. It's an invitation. A Card is not a card. It's a story waiting to be opened. A Section Label is not a label. It's a chapter heading in someone's life.

WKALAN components are not UI elements. They are the building blocks of understanding.

---

## Principles

### One component, one story.
Every component has a Purpose, Anatomy, Variants, States, Accessibility rules, and Motion behavior. No component is just a visual element.

### Compose. Don't customize.
Build complex UI by composing simple components — not by adding 47 props to one component. Composition creates clarity. Configuration creates complexity.

### Every component ships accessible.
No `aria-label` = not done. No focus state = not done. No keyboard support = not done. Accessibility is not a variant. It's the base.

---

## Specification — Component Anatomy

Every WKALAN component is defined by six dimensions:

| Dimension | Question |
|-----------|----------|
| **Purpose** | What story does this component tell? |
| **Anatomy** | What are its parts? |
| **Variants** | How does it adapt to context? |
| **States** | Default, Hover, Focus, Active, Loading, Disabled |
| **Accessibility** | Keyboard, screen reader, contrast, touch target |
| **Motion** | How does it animate? (Using WKALAN curve.) |

### Key Components

| Component | Story |
|-----------|-------|
| **Button** | "I am an invitation. Primary = filled accent. Secondary = outline. Ghost = text only. I never bounce. I never glow." |
| **Card** | "I am a story waiting to be opened. Border + padding. On hover: slight lift, border accent. I contain a person, not information." |
| **Section Label** | "I tell you where you are. Small. Uppercase. Wide tracking. A gold or accent line below me. I don't shout." |
| **Hero** | "I am the first thing you see. Full viewport. One statement. One image or none. I fade into the next section." |
| **Quote** | "I am someone's truth. Serif. Large. Centered or left. Generous space around me. I carry weight." |

---

## Examples

### ✅ Correct — Button
> **Purpose:** Invitation to action.
> **Anatomy:** Text label + optional trailing arrow.
> **Variants:** Primary (filled accent), Secondary (outline), Ghost (text only).
> **States:** Default (accent bg) → Hover (darker accent) → Focus (2px ring) → Active (scale 0.98) → Loading (spinner) → Disabled (40% opacity).
> **Motion:** 200ms color transition on hover.

### ❌ Incorrect — Button
> **Purpose:** "A clickable element."
> **Variants:** 12 variants (primary, secondary, tertiary, outline, ghost, link, icon, floating, pill, square, circle, gradient).
> **Motion:** Bounces on hover. Glows on focus. Rotates on click.
>
> **Why:** 12 variants = no clear hierarchy. Bouncing and glowing = playful, not calm. The button draws attention to itself, not to the action.
