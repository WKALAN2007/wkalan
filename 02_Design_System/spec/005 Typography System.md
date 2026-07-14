# 005 — Typography System

## Philosophy

**Serif for savoring. Sans for carving.**

Typography at WKALAN is not decoration. It is the primary material of our work. Type carries the words. Words carry the story. The story carries the person.

Two typefaces. One system. Every project.

---

## Principles

### Type should feel, not be noticed.
If someone says "nice font," we failed. They noticed the type instead of the person. Good typography is invisible — it makes reading effortless and emotion unavoidable.

### Size creates hierarchy. Weight whispers emphasis.
We create structure through size differences (large vs. small), not weight differences (bold vs. light). Bold text is rare — reserved for moments that truly need emphasis.

### One serif, one sans per project.
Instrument Serif + Geist. No third typeface. No decorative fonts. No display faces "for impact." The pairing is sufficient for every context.

### Chinese and Latin are equal citizens.
WKALAN designs in Chinese and English. The type system must work for both — and for mixed-language contexts. CJK text needs more line height. Latin needs tighter leading. The system accommodates both.

---

## Specification

### Font Stack

| Role | Font | Weights | Source |
|------|------|---------|--------|
| **Display / Headline** | Instrument Serif | 400, 400 Italic | Google Fonts → next/font |
| **Body / UI** | Geist | 300, 400, 500, 600, 700 | Vercel → next/font |
| **Code / Data** | Geist Mono | 400 | Vercel → next/font |
| **CJK Serif Fallback** | Songti SC, Noto Serif CJK SC | — | System |
| **CJK Sans Fallback** | PingFang SC, Microsoft YaHei | — | System |

### Type Scale

| Level | Size | Line Height | Letter Spacing | Usage |
|-------|------|-------------|----------------|-------|
| **Hero Display** | `clamp(4rem, 10vw, 8rem)` | 1.05 | -0.02em | Hero statement |
| **Hero** | `clamp(3rem, 7vw, 6rem)` | 1.05 | -0.02em | Hero sub-line |
| **H1** | `clamp(2.5rem, 5vw, 3.5rem)` | 1.1 | -0.02em | Page title |
| **H2** | `clamp(2rem, 3.5vw, 2.5rem)` | 1.2 | -0.02em | Section heading |
| **H3** | `clamp(1.5rem, 2.5vw, 2rem)` | 1.25 | -0.01em | Card heading |
| **H4** | `1.25rem` (20px) | 1.3 | -0.01em | Subheading |
| **Body L** | `1.25rem` (20px) | 1.6 | -0.01em | Featured body |
| **Body** | `1.125rem` (18px) | 1.6 | -0.01em | Primary text |
| **Body S** | `0.9375rem` (15px) | 1.5 | -0.01em | Secondary text |
| **Caption** | `0.8125rem` (13px) | 1.4 | 0 | Metadata, footnotes |
| **Label** | `0.75rem` (12px) | 1.4 | 0.12em | Labels, badges, nav |

### Reading Width
- **Maximum:** 680px (65–75 characters per line)
- **Narrow:** 480px (for pull quotes, callouts)
- **Full:** 1280px container, but text columns never exceed 680px

### CJK Adjustments
- Chinese body text: 1.0625rem (17px) for equivalent readability
- Chinese line height: minimum 1.7 (denser characters need more vertical space)
- Chinese punctuation: full-width in Chinese context（，。！？）

---

## Examples

### ✅ Correct
```
Hero: "品味人生，雕刻身份。"
→ Instrument Serif, clamp(4rem, 10vw, 8rem), 1.05 line height, -0.02em tracking
→ Centered. Alone on the page. Nothing else.

Why: The statement IS the page. No decoration needed.
```

### ❌ Incorrect
```
Hero: "品味人生，雕刻身份。"
→ Plus: 3D text effect, gradient fill, typewriter animation, text-shadow glow

Why: Every effect distracts from the words. The statement is strong enough alone.
```

### ✅ Correct — Mixed Chinese/English
```
Headline: "品味人生" (Instrument Serif, 4rem)
Subhead: "Every creator has a story worth understanding." (Geist, 1.125rem)
→ Chinese carries the emotion. English carries the clarity.
→ Different typefaces for different roles.
```

### ❌ Incorrect — Typographic Noise
```
Page has: Instrument Serif, Geist, Geist Mono, PLUS:
- One decorative font for "emphasis"
- Different weights used arbitrarily
- Inconsistent letter-spacing between sections

Why: Type chaos undermines craftsmanship. Every inconsistency is felt.
```

---

*Typography is the voice of the page. Choose it carefully. Then let it speak.*
