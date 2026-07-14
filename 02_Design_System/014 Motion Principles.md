# 014 — Motion Principles

## Philosophy

**Motion should mean something.**

WKALAN motion is not about impressing. It's not about showing off technical skill. It's not about "delighting" the user.

Motion exists to:
1. **Guide attention** — Show people where to look
2. **Create rhythm** — Give the page a sense of pace and breathing
3. **Reveal content** — Bring things into view gracefully
4. **Respond to interaction** — Confirm that something happened

---

## The Core Principle: Slow Down

The default speed of the web is instant. Clicks respond in milliseconds. Pages load in seconds. Everything is optimized for speed.

WKALAN deliberately slows down.

Not to waste time. To communicate: *"This is worth your attention. There's no rush."*

- Scroll reveals take 700ms (not 300ms)
- Hero parallax takes 1200ms (not 500ms)
- Page transitions take 900ms (not 200ms)

Slow motion feels confident. Fast motion feels anxious.

---

## The WKALAN Curve

```
cubic-bezier(0.16, 1, 0.3, 1)
```

One easing curve. Every animation. Every project. Every context.

This curve has:
- **Slight anticipation** (0.16) — the moment before movement begins
- **Smooth deceleration** (0.3, 1) — no abrupt stop, no bounce
- **Natural feel** — like setting down a book. Like breathing out.

**Why one curve?**
Consistency is invisible. When every animation uses the same physics, the experience feels cohesive without anyone knowing why. When different animations use different curves, the experience feels disjointed — even if the viewer can't articulate why.

---

## When to Animate

### Animate:
- Content entering the viewport on scroll
- Elements responding to hover or click
- Page or section transitions
- Loading states
- Number counters
- Parallax depth on hero images

### Don't animate:
- Text that someone is trying to read
- Navigation interactions (keep them instant)
- Elements that repeat (no infinite loops)
- Anything that competes with content for attention
- Error states (instant feedback, not animated)

---

## Motion Hierarchy

| Level | Duration | Usage |
|-------|----------|-------|
| Micro | 100–200ms | Hover color, icon state, focus ring |
| Standard | 400ms | Card hover, menu reveal, toggle |
| Section | 700ms | Scroll reveals, content fade-up |
| Page | 900ms | Page transitions, loading exit |
| Cinematic | 1200ms | Hero parallax, major narrative moments |

---

## Motion Rules

### 1. One curve. Always.
Never introduce a second easing curve. The WKALAN curve is sufficient for every context.

### 2. No bounce.
Bouncing is playful. We are calm. No spring animations. No overshoot. No "fun."

### 3. No infinite loops.
Nothing should animate forever. Motion ends. Like a story ends. A looping animation is visual noise.

### 4. No motion without purpose.
If you can't explain why something moves, it shouldn't move. "It looks cool" is not a reason.

### 5. Respect `prefers-reduced-motion`.
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Motion and 品味

品味 takes time. Motion reflects this.

Fast animation communicates: *"Quick, look here, now move on."*
Slow animation communicates: *"Stay. Watch. There's something here worth your time."*

We choose slow.

---

*Motion is the breathing of the page. Too fast: hyperventilating. Too slow: asleep. Just right: alive.*
