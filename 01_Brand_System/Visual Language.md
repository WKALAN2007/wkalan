# Visual Language

## Overview

The WKALAN visual language is built on **reduction, rhythm, and restraint.** Every visual element should serve clarity and presence — never decoration.

## Typography

### Primary Fonts

| Font | Role | Character |
|------|------|-----------|
| **Geist Sans** | Body, navigation, UI | Clean, neutral, modern |
| **Geist Mono** | Code, data, technical labels | Precise, technical, trustworthy |
| **Instrument Serif** | Headlines, quotes, accent text | Editorial, warm, human |

### Type Scale

| Level | Size | Usage |
|-------|------|-------|
| Display | `clamp(3rem, 8vw, 8rem)` | Hero headlines |
| H1 | `clamp(2rem, 5vw, 4rem)` | Page titles |
| H2 | `clamp(1.5rem, 3vw, 2.5rem)` | Section headings |
| H3 | `1.25rem`–`1.5rem` | Card titles |
| Body | `1rem` (16px) | Paragraph text |
| Small | `0.875rem` (14px) | Secondary text, captions |
| XS | `0.75rem` (12px) | Labels, metadata |

### Letter Spacing
- Headlines: `-0.02em` to `-0.04em` (tight)
- Navigation: `0.1em` to `0.2em` (wide, editorial)
- Body: `0` (normal)
- Labels: `0.15em` to `0.25em` (wide, structured)

### Line Height
- Headlines: `1.05`–`1.15`
- Body: `1.5`–`1.6`
- Small text: `1.4`

## Color System

### Core Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Background | `#FFFFFF` | Primary background |
| Surface | `#F8F9FA` | Card backgrounds, alternating sections |
| Text Primary | `#0D0D0D` | Headlines, body text |
| Text Secondary | `#6B7280` | Supporting text, captions |
| Text Tertiary | `#9CA3AF` | Metadata, disabled text |
| Border | `#E5E7EB` | Dividers, card borders |
| Accent | `#4F7CFF` | Links, CTAs, focus states |

### Dark Variants (for cinematic/product sites)

| Token | Hex | Usage |
|-------|-----|-------|
| Background Dark | `#0A0A0A` | Dark theme background |
| Surface Dark | `#111111` | Dark card backgrounds |
| Gold Accent | `#C9A84C` | Dark theme highlights |

### Color Philosophy
- Backgrounds are neutral — let content provide the color
- Text is near-black, never pure black (softer on eyes)
- Accent color is used sparingly — only where attention is needed
- Photography carries the emotional color

## Spacing

### Spatial Scale (4px base)

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` | Tight internal spacing |
| `--space-sm` | `8px` | Icon gaps, inline spacing |
| `--space-md` | `16px` | Standard element gap |
| `--space-lg` | `24px` | Card padding |
| `--space-xl` | `32px` | Section internal gap |
| `--space-2xl` | `48px` | Content block gap |
| `--space-3xl` | `64px` | Major content separation |
| `--space-section` | `96px`–`160px` | Section vertical padding |
| `--space-container` | `24px` | Horizontal page padding |

## Grid

### Container Widths
- **Max content width:** `1400px`
- **Reading width:** `680px` (for long-form text)
- **Narrow content:** `480px` (for forms, CTAs)

### Column System
- **12-column grid** for complex layouts
- **4-column** for product/lookbook grids
- **3-column** for category/card grids
- **2-column** for testimonials, comparisons
- **1-column** for reading, mobile

## Imagery

### Photography Direction
- Natural light preferred over studio
- Candid over posed
- Documentary over advertising
- Warm tones, slight desaturation
- Deep depth of field (context matters)

### Image Ratios
- **Hero:** 16:9 or full-bleed
- **Portrait:** 3:4
- **Square:** 1:1 (team, avatars)
- **Landscape:** 16:9 (case study headers)

### Image Treatment
- No borders, no shadows, no frames
- Full-bleed where possible
- Dark gradient overlays for text readability
- CDN-optimized, lazy-loaded

## Iconography

- **Library:** Lucide React (primary)
- **Style:** Outline, 1.5px stroke
- **Size:** 16px–24px
- **Color:** Inherits from text color

## Motion Language

See `02_Design_System/` for detailed animation tokens and rules.

### Core Principles
- One easing curve: `cubic-bezier(0.16, 1, 0.3, 1)`
- Duration: 0.5s–0.8s for reveals, 0.2s–0.3s for micro-interactions
- Scroll-triggered: opacity + translateY (20px–40px)
- Parallax: scale 1.0 → 1.1 on hero images
- Stagger: 0.08s–0.12s between items

---

*Visual language is not decoration. It is the grammar of presence.*
