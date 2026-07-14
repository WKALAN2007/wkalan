# Color System

## Philosophy

**Color comes from the person, not from the palette.**

The WKALAN color system is intentionally restrained. Warm canvas. Ink black. One accent to guide the eye. The emotional color in any WKALAN project should come from the client's photography, their story, their personality — not from our design system.

## Core Palette

### Canvas
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-background` | `#FAFAF8` | Page background |
| `--color-surface` | `#F3F2EF` | Card, section backgrounds |
| `--color-surface-hover` | `#EDECE8` | Interactive surface states |

**Why warm white instead of pure white?**
Pure white (#FFFFFF) is the color of paper in a printer. Warm white (#FAFAF8) is the color of linen, of sunlight through a window, of a page in an old book. It's human.

### Ink
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-text-primary` | `#1A1A18` | Headlines, body |
| `--color-text-secondary` | `#6B6B68` | Supporting text |
| `--color-text-tertiary` | `#A0A09C` | Metadata, captions |
| `--color-text-inverse` | `#FAFAF8` | On dark backgrounds |

**Why not pure black?**
Pure black (#000000) doesn't exist in nature. Ink black (#1A1A18) has a barely perceptible warmth — it's the color of good typography in a well-printed book.

### Accent
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-accent` | `#4F6BFF` | Links, CTAs, focus |
| `--color-accent-hover` | `#3D55E0` | Interactive states |
| `--color-accent-subtle` | `rgba(79,107,255,0.08)` | Tinted backgrounds |

A warm blue — not electric, not corporate. Trust without coldness. Clarity without sterility.

### Borders
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-border` | `#E8E7E3` | Default borders, dividers |
| `--color-border-strong` | `#D4D3CE` | Active, focus borders |

Borders should be felt, not seen. They create structure without announcing themselves.

## Dark Mode (Cinematic Variant)

For projects that call for drama and immersion:

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-background-dark` | `#0F0F0D` | Dark page background |
| `--color-surface-dark` | `#1A1A18` | Dark card background |
| `--color-border-dark` | `#2A2A27` | Dark borders |
| `--color-accent-dark` | `#C9A84C` | Gold accent for dark |

Gold on black is for cinematic identities. Blue on warm white is for everything else.

## Color Rules

### 1. One accent per project
Never introduce a second accent color. The accent is the only color that competes for attention. Two accents = confusion.

### 2. Grey is never neutral
Every grey in the system has warmth. `#6B6B68` is slightly warmer than neutral `#6B6B6B`. It matters.

### 3. Color comes from photography
Client photography provides the emotional color. Our palette stays in the background, supporting without competing.

### 4. No gradients
Gradients belong to the 2010s. Solid colors with generous whitespace create more presence.

### 5. Accessibility
All text-background combinations pass WCAG AA:
- `#1A1A18` on `#FAFAF8` → contrast ratio 18.2:1 (AAA)
- `#6B6B68` on `#FAFAF8` → contrast ratio 5.2:1 (AA)
- `#4F6BFF` on `#FAFAF8` → contrast ratio 4.6:1 (AA — large text only)

## Implementation

```css
/* Use the tokens */
.my-section {
  background: var(--color-background);
  color: var(--color-text-primary);
  border-bottom: 1px solid var(--color-border);
}
```
