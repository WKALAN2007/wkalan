# 003 — Typography System

## Philosophy

**Serif for savoring. Sans for carving.**

The WKALAN type system is built on one idea: typography should reflect how we work.

- **品味 (Savor)** → Serif. Human. Warm. Historic. The voice that tells the story.
- **雕刻 (Carve)** → Sans. Clean. Precise. Digital. The hand that shapes the form.

Two typefaces. One voice. Every project uses this pairing — but the balance shifts depending on who we're designing for.

---

## The Typefaces

### Instrument Serif — The Human Voice
*Role:* Display, headlines, quotes, manifesto text, editorial moments
*Weights:* 400 (Regular), 400 Italic
*Character:* Editorial, warm, literary, timeless

Instrument Serif is not a decorative font. It's a working serif — designed for reading, refined by history, warm without being nostalgic. It says: *"This was made by a person."*

**When to use:**
- Hero headlines
- Section titles
- Block quotes and pull quotes
- Manifesto and editorial pages
- Client story pages

### Geist — The Digital Voice
*Role:* Body, navigation, UI, labels, captions, forms
*Weights:* 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
*Character:* Clean, precise, modern, neutral

Geist is Vercel's typeface — designed for screens, optimized for readability, neutral enough to disappear. It says: *"I'm here to help you read, not to be looked at."*

**When to use:**
- Body text
- Navigation and menus
- Labels, badges, metadata
- Forms and inputs
- UI components

### Geist Mono — The Technical Voice
*Role:* Code, data, technical labels, numbers in tables
*Weights:* 400 (Regular)
*Character:* Precise, monospaced, technical

**When to use:**
- Code blocks
- Data tables
- Technical documentation
- Timestamps and numerical data

---

## Type Scale

A 1.25 modular scale. Slightly larger than typical — because we design for savoring, not scanning.

| Level | Size | Line Height | Letter Spacing | Usage |
|-------|------|-------------|----------------|-------|
| **Hero** | `clamp(4rem, 8vw, 7rem)` | 1.05 | -0.02em | Hero headlines |
| **H1** | `clamp(2.5rem, 5vw, 4rem)` | 1.1 | -0.02em | Page titles |
| **H2** | `clamp(2rem, 3.5vw, 3rem)` | 1.2 | -0.02em | Section headings |
| **H3** | `clamp(1.5rem, 2.5vw, 2rem)` | 1.25 | -0.01em | Card headings |
| **H4** | `1.25rem` | 1.3 | -0.01em | Subheadings |
| **Body** | `1.125rem` (18px) | 1.5–1.7 | -0.01em | Primary text |
| **Body Sm** | `0.9375rem` (15px) | 1.5 | -0.01em | Secondary text |
| **Caption** | `0.8125rem` (13px) | 1.4 | 0 | Metadata |
| **Label** | `0.75rem` (12px) | 1.4 | 0.12em | Labels, badges |

### Why 18px body text?
Because we design for savoring. 16px is the browser default — optimized for scanning. 18px invites slower reading. And slower reading leads to deeper understanding.

---

## Font Stack

```css
/* Display — Serif, Human, Savor */
--font-display: "Instrument Serif", "Songti SC", "Noto Serif CJK SC",
                Georgia, "Times New Roman", serif;

/* Body — Sans, Digital, Carve */
--font-body: "Geist", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
              -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;

/* Mono — Technical */
--font-mono: "Geist Mono", "SF Mono", "Cascadia Code", "Fira Code", monospace;
```

### CJK (Chinese/Japanese/Korean) Fallback
- **Serif fallback:** 宋体 (Songti SC on macOS, Noto Serif CJK SC on other platforms)
- **Sans fallback:** 苹方 (PingFang SC on macOS, Microsoft YaHei on Windows)

Chinese text is denser than Latin text. Body text in Chinese should be 1.0625rem for equivalent readability to 18px Latin.

---

## Usage Patterns

### Pattern 1: Statement → Detail
```
SERIF: Large, emotional, poetic headline
↓
SANS: Clear, precise, explanatory body text
```
*Used for: Hero sections, manifesto pages, case study headers.*

### Pattern 2: Label → Content
```
SANS: Small, uppercase, functional label
↓
SERIF: Warm, human, medium content
```
*Used for: Section headers, card metadata.*

### Pattern 3: Sans Only
```
SANS HEADLINE → SANS BODY → SANS CAPTION
```
*Used for: Navigation, UI components, forms, technical documentation.*

---

## Typography Rules

### 1. One serif, one sans per project
Never introduce additional typefaces. The Instrument Serif + Geist pairing is sufficient for every context.

### 2. Size contrast over weight contrast
Create hierarchy through size differences (large vs. small), not weight differences (bold vs. light). Bold text should be rare — reserved for emphasis, not structure.

### 3. No all-caps body text
All-caps is for labels, badges, and navigation only. Never for sentences. It's harder to read and feels aggressive.

### 4. Respect the reading width
Never stretch body text beyond 720px. 65–75 characters per line is optimal. Wider lines are harder to track.

### 5. Chinese text needs more line height
Chinese characters are denser. Always use `line-height: 1.7` minimum for Chinese body text. `1.5` is acceptable for Latin.

---

## Implementation

```css
/* In CSS */
h1 { font-family: var(--font-display); }

/* In Tailwind */
<h1 className="font-heading">

/* In React inline (for non-Tailwind contexts) */
<h1 style={{ fontFamily: "var(--font-display)" }}>
```

---

*Typography is the voice of the page. Choose it like you'd choose your words — carefully, and for a reason.*
