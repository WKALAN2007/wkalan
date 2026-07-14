# 009 — Border System

## Philosophy

**Borders create structure. Not decoration.**

A border should define a boundary. It says: *"This ends here. That begins there."* It should be felt, not celebrated.

---

## Border Widths

| Token | Value | Usage |
|-------|-------|-------|
| `--border-hairline` | 0.5px | Subtle separators (when supported) |
| `--border-thin` | 1px | Default borders, dividers, card edges |
| `--border-medium` | 2px | Active states, focus rings, emphasis |
| `--border-thick` | 4px | Rare — strong emphasis only |

---

## Border Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-border` | `#E8E7E3` | Default border — warm, subtle |
| `--color-border-strong` | `#D4D3CE` | Active, focus, emphasis |
| `--color-border-accent` | `#4F6BFF` | Focus ring, selected state |
| `--color-border-dark` | `#2A2A27` | Dark theme borders |
| `--color-border-gold` | `#C9A84C` | Cinematic theme borders |

---

## Border Patterns

### The Hairline Divider
```
───────────────────────────
  1px, color-border, full width
```
Used between sections, between footer columns, between list items. Creates separation without weight.

### The Accent Underline
```
────  48px wide, color-accent, 30% opacity
```
Used below section labels. The visual equivalent of a deep breath before the content.

### The Card Border
```
┌──────────────────────┐
│                      │  1px, color-border
│                      │  On hover → color-border-strong
│                      │  Or → accent color (cinematic style)
└──────────────────────┘
```

### The Focus Ring
```
┌──────────────────────┐
│  ┌────────────────┐  │  2px, color-accent
│  │  Input field   │  │  Offset 2px from element
│  └────────────────┘  │  Visible only on :focus-visible
└──────────────────────┘
```

---

## Border Rules

### 1. No decorative borders
Borders serve structure. They are not decoration. If a border doesn't define a boundary, remove it.

### 2. One border color per theme
Don't mix warm and cold grey borders. Every border uses `--color-border` or its variants.

### 3. Borders are thinner than you think
Start at 1px. Only go to 2px when you're certain 1px isn't enough. Never go to 4px without a design review.

### 4. Border-radius and border-width are independent
A card can have a 1px border and a 16px radius. Don't let border thickness dictate corner softness.

### 5. The focus ring is non-negotiable
Every interactive element must have a visible focus state. The focus ring uses `--color-accent` at 2px with a 2px offset. It is not optional. It is accessibility.

---

## Divider Usage

| Context | Type | Width |
|---------|------|-------|
| Between sections | None (space is the divider) | — |
| Section label + content | Accent underline | 48px |
| Between list items | Hairline | Full width |
| Between footer columns | None (space is the divider) | — |
| Card edge | Card border | Full perimeter |

---

*Borders are the punctuation of layout. They say: pause. new thought. this is different from that.*
