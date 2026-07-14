# 006 — Color System

## Philosophy

**Color comes from the person. The palette stays in the background.**

WKALAN's color system is intentionally restrained. We provide the canvas and the ink. The emotional color comes from the client — their photography, their work, their world.

---

## Principles

### One accent per project.
The accent color is the only element competing for attention. Two accents create confusion. One creates clarity. More colors ≠ more impact.

### Grey has warmth.
Every grey in WKALAN carries warmth. Cold greys feel corporate. Warm greys feel human. The difference is 1–2% saturation — invisible, but felt.

### Color directs attention. Never decorates.
If color isn't guiding the eye to something important, it shouldn't exist. Color is a pointer, not a paintbrush.

### Never pure black. Never pure white.
Pure black (#000000) doesn't exist in nature. Pure white (#FFFFFF) is a printer default. Our canvas is warm white (#FAFAF8). Our ink is near-black (#1A1A18). Both carry warmth.

---

## Specification

### Light Theme

| Token | Hex | Usage |
|-------|-----|-------|
| `background` | `#FAFAF8` | Page background |
| `surface` | `#F3F2EF` | Cards, elevated surfaces |
| `text-primary` | `#1A1A18` | Headlines, body text |
| `text-secondary` | `#6B6B68` | Supporting text |
| `text-tertiary` | `#A0A09C` | Metadata, captions |
| `border` | `#E8E7E3` | Default borders |
| `accent` | `#4F6BFF` | Links, CTAs, focus |

### Dark Theme (Cinematic)

| Token | Hex | Usage |
|-------|-----|-------|
| `background-dark` | `#0F0F0D` | Dark page background |
| `surface-dark` | `#1A1A18` | Dark cards |
| `accent-dark` | `#C9A84C` | Gold — for cinematic identity |

### Contrast Compliance

| Combination | Ratio | Grade |
|-------------|-------|-------|
| Ink on Warm White | 18.2:1 | AAA |
| Secondary on Warm White | 5.2:1 | AA |
| Gold on Deep Black | 9.8:1 | AAA |

---

## Examples

### ✅ Correct
> A creator's digital identity. The accent color (#4F6BFF, warm blue) appears only on: links, the CTA button, section dividers, and the focus ring. Everywhere else: warm white, ink black, warm grey. The photography provides all other color.

### ❌ Incorrect
> A page with blue links, green buttons, red badges, yellow highlights, and a purple footer.
>
> **Why:** Color chaos. Nothing is emphasized because everything is colored. The photography's emotional color is drowned out.
