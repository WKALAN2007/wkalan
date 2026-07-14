# 002 — Color System

## Philosophy

**Color comes from the person. The palette stays in the background.**

The WKALAN color system is intentionally restrained. We provide the canvas and the ink. The emotional color in any project comes from the client — their photography, their work, their world.

---

## The WKALAN Palette

### Canvas (Backgrounds)

| Token | Hex | Name | Usage |
|-------|-----|------|-------|
| `background` | `#FAFAF8` | Warm White | Page background |
| `surface` | `#F3F2EF` | Linen | Cards, elevated surfaces |
| `surface-hover` | `#EDECE8` | Stone | Interactive surface states |

**Why warm white?**

Pure white (#FFFFFF) is the color of printer paper. It's sterile. Cold. Medical.

Warm white (#FAFAF8) is the color of linen. Of sunlight through a curtain. Of a page in a book that's been read many times.

**It feels human.**

### Ink (Text)

| Token | Hex | Name | Usage |
|-------|-----|------|-------|
| `text-primary` | `#1A1A18` | Ink Black | Headlines, body |
| `text-secondary` | `#6B6B68` | Warm Grey | Supporting text |
| `text-tertiary` | `#A0A09C` | Light Grey | Metadata, captions |
| `text-inverse` | `#FAFAF8` | Warm White | On dark backgrounds |

**Why not pure black?**

Pure black (#000000) doesn't exist in nature. It's the color of a screen that's turned off.

Ink black (#1A1A18) has a barely perceptible warmth. It's the color of good typography in a well-printed book. Easier on the eyes. Softer. More human.

### Accent

| Token | Hex | Name | Usage |
|-------|-----|------|-------|
| `accent` | `#4F6BFF` | Warm Blue | Links, CTAs, focus states |
| `accent-hover` | `#3D55E0` | Deep Blue | Interactive states |
| `accent-subtle` | `rgba(79,107,255,0.08)` | Blue Tint | Subtle background accents |

A blue that's warm, not cold. Trust without sterility. Clarity without harshness.

### Borders

| Token | Hex | Name | Usage |
|-------|-----|------|-------|
| `border` | `#E8E7E3` | Hairline | Default borders, dividers |
| `border-strong` | `#D4D3CE` | Visible | Active states, emphasis |

Borders create structure without announcing themselves. Felt, not noticed.

### Semantic (Status)

| Token | Hex | Usage |
|-------|-----|-------|
| `success` | `#2D8A56` | Confirmation, completion |
| `warning` | `#D4A02C` | Caution, attention needed |
| `error` | `#D43D3D` | Error, critical |

### Dark Theme (Cinematic)

| Token | Hex | Name | Usage |
|-------|-----|------|-------|
| `background-dark` | `#0F0F0D` | Deep Black | Dark page background |
| `surface-dark` | `#1A1A18` | Dark Card | Dark elevated surfaces |
| `border-dark` | `#2A2A27` | Dark Hairline | Dark borders |
| `accent-dark` | `#C9A84C` | Gold | Cinematic accent |

Gold on black. Used for the Cinematic identity — high-impact personal brands, entertainment, sports.

---

## Color Usage Rules

### 1. One accent per project
Never introduce a second accent color. The accent is the only element competing for attention. Two accents create confusion. One creates clarity.

### 2. Grey has character
Every grey in the WKALAN palette has warmth. `#6B6B68` is not neutral `#6B6B6B`. The difference is barely visible — but it's felt. Cold greys feel corporate. Warm greys feel human.

### 3. Color depth comes from layers
Don't use more colors. Use the same colors at different depths: Surface on background. Surface-hover on surface. The hierarchy is in the layering, not the hue.

### 4. Never use pure black
`#000000` is forbidden. Always use `#1A1A18` (warm canvas) or `#0F0F0D` (dark canvas).

### 5. Never use pure white
`#FFFFFF` is forbidden. Always use `#FAFAF8`. Even on dark backgrounds, the lightest element should carry warmth.

---

## Contrast Requirements

All text-background combinations pass WCAG accessibility standards:

| Combination | Ratio | Grade |
|-------------|-------|-------|
| Ink on Warm White | 18.2:1 | AAA |
| Secondary on Warm White | 5.2:1 | AA |
| Accent on Warm White | 4.6:1 | AA (large) |
| Gold on Deep Black | 9.8:1 | AAA |

---

## Implementation

```css
/* Light theme (default) */
body {
  background: var(--color-background);      /* #FAFAF8 */
  color: var(--color-text-primary);          /* #1A1A18 */
}

a {
  color: var(--color-accent);                /* #4F6BFF */
}

/* Dark theme */
[data-theme="dark"] {
  --color-background: var(--color-background-dark);
  --color-text-primary: var(--color-text-inverse);
  --color-accent: var(--color-accent-dark);
}
```

---

*Color doesn't decorate. Color directs attention. Every hue earns its place — or it doesn't belong.*
