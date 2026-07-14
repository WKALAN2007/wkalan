# Typography

## Philosophy

**Serif for savoring. Sans for carving.**

The WKALAN type system is built on a duality:
- **Instrument Serif** carries the human — warm, historic, imperfect. It speaks the language of 品味 (savoring).
- **Geist Sans** carries the digital — clean, precise, functional. It speaks the language of 雕刻 (carving).

Together they create a rhythm: human warmth followed by digital clarity, poetry followed by precision.

## Font Stack

| Role | Font | Weight | Source |
|------|------|--------|--------|
| Display / Headlines | Instrument Serif | 400 | Google Fonts → next/font |
| Body / UI | Geist Sans | 300–700 | Vercel → next/font |
| Code / Data | Geist Mono | 400 | Vercel → next/font |
| CJK Fallback | Songti SC, PingFang SC | — | System fonts |

## Type Scale

A 1.25 modular scale, biased slightly larger for readability (we design for savoring, not scanning):

```
Hero     → clamp(4rem, 8vw, 7rem)      "品味人生"
H1       → clamp(2.5rem, 5vw, 4rem)    Page titles
H2       → clamp(2rem, 3.5vw, 3rem)    Section headings
H3       → clamp(1.5rem, 2.5vw, 2rem)  Card headings
H4       → 1.25rem                       Subheadings
Body     → 1.125rem (18px)              Primary text
Body Sm  → 0.9375rem (15px)             Secondary text
Caption  → 0.8125rem (13px)             Metadata
Label    → 0.75rem (12px)               Badges, labels
```

## The Serif-Sans Rhythm

### Pattern A: Statement → Detail
```
Serif headline (emotional, big, poetic)
  ↓
Sans body (clear, precise, explanatory)
```
Used for: Hero sections, manifesto pages, case study headers

### Pattern B: Label → Content
```
Sans label (functional, uppercase, small)
  ↓
Serif content (warm, human, medium)
```
Used for: Section labels, card metadata

### Pattern C: Sans Only
```
Sans headline → Sans body → Sans caption
```
Used for: Navigation, UI components, forms, technical docs

## Chinese Typography

Chinese text requires special attention:

- **Font size**: CJK characters are denser. Body text is bumped to 1.0625rem (from the Latin 1.125rem equivalent) for equivalent readability.
- **Line height**: Always use `--leading-relaxed` (1.7) for Chinese body text. Characters need more vertical space.
- **Font fallback**: Songti SC (serif) for display, PingFang SC (sans) for body. These ship with macOS/iOS. For other platforms, fall back to Noto Serif CJK SC and Microsoft YaHei.
- **Punctuation**: Use full-width Chinese punctuation in Chinese text（。，！？）. Never mix with half-width Latin punctuation unless the sentence is primarily English.

## The "No All-Caps" Rule

We don't use uppercase for body text. Uppercase is reserved for:
- Section labels (THE PHILOSOPHY — in the cinematic style only)
- Navigation items (optional)
- Badges and metadata

Even then, we prefer normal case with wide letter-spacing over all-caps. It's warmer.

## Implementation

```css
/* In CSS */
h1 { font-family: var(--font-display); }

/* In Tailwind */
<h1 className="font-heading text-hero">

/* In React */
<h1 style={{ fontFamily: "var(--font-display)" }}>
```
