# 02_Design_System

## Overview

The WKALAN Design System is a set of CSS custom properties, utility classes, and component primitives that implement the brand's visual language. Every WKALAN project — our own site and every client's digital identity — is built on this foundation.

## Philosophy

**品味人生，雕刻身份。**

Design tokens are not arbitrary numbers. They are the visual translation of how we work:
- **Warm colors** reflect the humanity we savor
- **Generous spacing** reflects the time we take
- **Slow motion** reflects the patience of understanding
- **Serif + Sans pairing** reflects the duality: human + digital, savor + carve

## Structure

```
02_Design_System/
├── README.md           ← This file
├── tokens.css          ← All CSS custom properties (design tokens)
├── typography.css      ← Type utilities and rich text styles
├── motion.css          ← Animation keyframes, hover utilities
├── layout.css          ← Spacing, grid, container utilities
├── components/         ← Reusable UI primitives
│   ├── Button.tsx
│   ├── Container.tsx
│   ├── NoiseOverlay.tsx
│   ├── ScrollProgress.tsx
│   └── SectionHeading.tsx
└── lib/
    └── utils.ts        ← cn() utility for class merging
```

## Usage

### In CSS
```css
@import "../02_Design_System/tokens.css";

.my-element {
  color: var(--color-text-primary);
  font-family: var(--font-body);
  padding: var(--space-6);
}
```

### In Tailwind (v4 with @theme)
```css
@theme inline {
  --color-background: var(--color-background);
  --color-primary: var(--color-text-primary);
  --font-sans: var(--font-body);
  --font-heading: var(--font-display);
}
```

### In React Components
```tsx
import { Container } from "@/02_Design_System/components/Container";
import { cn } from "@/02_Design_System/lib/utils";
```

## Key Design Decisions

### Why warm white (#FAFAF8) instead of pure white (#FFFFFF)?
Pure white feels clinical. Warm white feels human. Like linen, not paper. Like a room with sunlight, not fluorescent.

### Why one easing curve?
Consistency builds trust. The WKALAN curve `cubic-bezier(0.16, 1, 0.3, 1)` feels natural — a slight anticipation, then smooth deceleration. Like setting down a book, not dropping a phone.

### Why serif for headlines?
Serifs carry history. They feel human — like handwriting, like carving, like the imperfections that prove something was made by a person, not a machine. Sans-serif is for the digital layer — clean, precise, functional. Together they tell the full story.

### Why 1.125rem (18px) body text?
Because our readers are here to savor, not to scan. Larger type invites slower reading. Slower reading leads to deeper understanding.

## Adding New Tokens

When adding a token:
1. Does it serve the philosophy (品味 → 雕刻 → 呈现)?
2. Is there already a token that covers this?
3. Does it belong in `tokens.css` (global) or a specific utility file?
4. Document it here.

## Version

v1.0 — July 2026
