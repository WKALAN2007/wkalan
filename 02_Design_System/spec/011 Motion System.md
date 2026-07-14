# 011 — Motion System

## Philosophy

**Motion exists to guide attention. Not to entertain.**

Most websites over-animate. Elements fly in. Buttons pulse. Sections slide. Parallax on everything. The result is visual noise — a page that competes with itself for attention.

WKALAN motion is the opposite. Animation should be so subtle, so intentional, that the viewer never consciously notices it. They only feel that the page is calm, coherent, alive.

---

## Principles

### Every animation must answer: "What does this help the user understand?"
If the answer is "it looks cool" — remove it.
If the answer is "it guides the eye to the next section" — keep it.
If the answer is "it shows that this element is interactive" — keep it.
If the answer is "I don't know, all websites have animations" — remove it.

### One easing curve. One language.
`cubic-bezier(0.16, 1, 0.3, 1)` — The WKALAN curve.

Slight anticipation. Smooth deceleration. No bounce. No overshoot. Like setting down a book. Like breathing out. Consistency across every project creates a cohesive feeling that no one can name but everyone can feel.

### Slow is confident. Fast is anxious.
Default web animations are 200–300ms. WKALAN animations are 700–900ms. The extra time communicates: *"There is no rush. This is worth your attention."*

### Motion serves content. Never competes.
If an animation draws attention to itself — if the viewer thinks "nice animation" — it failed. The animation should be invisible. The content it reveals should be visible.

---

## Specification

### The WKALAN Curve
```
cubic-bezier(0.16, 1, 0.3, 1)
```

### Duration Scale

| Level | Duration | Usage |
|-------|----------|-------|
| **Instant** | 100ms | Hover color, icon state, focus ring |
| **Micro** | 200ms | Button states, toggle, active press |
| **Standard** | 400ms | Card hover lift, menu reveal |
| **Section** | 700ms | Scroll reveals, content fade-up |
| **Page** | 900ms | Page transitions, loading exit |
| **Cinematic** | 1200ms | Hero parallax, narrative moments |

### The Eight Animations

| # | Animation | Property | Usage |
|---|-----------|----------|-------|
| 1 | **Fade Up** | opacity 0→1, y 24→0, 700ms | Section content reveal (most used) |
| 2 | **Fade In** | opacity 0→1, 700ms | Static elements, labels |
| 3 | **Scale Reveal** | scale 0.96→1, opacity 0→1, 700ms | Cards, gallery images |
| 4 | **Slide In** | x ±32→0, opacity 0→1, 700ms | Timeline alternating entries |
| 5 | **Parallax** | scale 1→1.1 over scroll distance | Hero depth |
| 6 | **Stagger** | Fade Up with 80ms/item delay | Card grids, lists |
| 7 | **Underline Reveal** | scaleX 0→1, 800ms | Section label dividers |
| 8 | **Count Up** | number 0→target, 2000ms linear | Stats sections |

### Stagger Timing
- Cards in a grid: 80ms between items
- Timeline entries: 120ms between items
- Section labels + content: 100ms after label

### Scroll Reveal Defaults
```tsx
<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
  viewport={{ once: true, margin: "-80px" }}
/>
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Examples

### ✅ Correct
> A section label fades up (700ms). After 100ms, the gold divider line draws (800ms). After 200ms, the headline fades up (700ms). After 300ms, the body text fades up (700ms).
>
> **Why:** The sequence guides the eye top-to-bottom. Each element reveals when the reader is ready. The total time (2+ seconds) communicates patience.

### ❌ Incorrect
> Every element on the page animates simultaneously: hero parallax + nav slide-in + cards scale-up + text fade + background color shift + scroll progress bar.
>
> **Why:** Visual chaos. No hierarchy. Nothing is emphasized because everything is animated.

### ✅ Correct — Stillness as a Decision
> The Origin section. Dark background. Three beats of story text. No scroll-triggered animation. The text is simply there. The reader discovers it by scrolling.
>
> **Why:** The story is heavy enough. Animation would distract from the words. Stillness here is more powerful than motion.

### ❌ Incorrect — Animation Without Purpose
> A button bounces on hover. Cards flip 180° on click. The logo spins on load. Text characters appear one by one.
>
> **Why:** Every one of these draws attention to the animation itself, not to the content. Playful motion violates WKALAN's calm, timeless character.

---

*Motion is the breathing of the page. Too fast: hyperventilating. Too much: distracting. Just right: alive.*
