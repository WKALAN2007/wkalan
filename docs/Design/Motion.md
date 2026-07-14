# Motion

## Philosophy

**慢。不急。像翻书页。像呼吸。**

WKALAN motion is slow, intentional, and singular. We use one easing curve for everything. Consistency is felt, not noticed — when every animation uses the same physics, the experience feels cohesive without the user knowing why.

## The WKALAN Curve

```
cubic-bezier(0.16, 1, 0.3, 1)
```

This curve has:
- A slight anticipation at the start (0.16)
- Smooth deceleration at the end (0.3, 1)
- No bounce. No overshoot. No drama.

It feels like setting down a book. Like turning a page. Like breathing out.

## Duration Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--duration-instant` | 100ms | Micro-interactions (hover color) |
| `--duration-fast` | 200ms | Button states, icon transitions |
| `--duration-normal` | 400ms | Card hovers, menu reveals |
| `--duration-slow` | 700ms | Scroll reveals, section transitions |
| `--duration-cinematic` | 1200ms | Hero parallax, major page transitions |
| `--duration-reveal` | 900ms | Content fade-ups |

## Animation Patterns

### 1. Scroll Reveal (Most Used)
```
Element fades up 24px over 700ms as it scrolls into view.
Stagger: 80ms between items, 120ms between rows.
```
This is the bread and butter. Used on every section, every card, every piece of content that appears as the user scrolls.

### 2. Hero Parallax
```
Image scales from 1.0 to 1.1 over the scroll distance of the hero section.
Text fades out at 40% scroll.
```
Creates depth without distraction. The image moves slower than the scroll — anchoring the user in the space.

### 3. Loading Screen
```
Logo fades in (800ms delay).
Holds for 1.4s.
Full screen fades out over 800ms.
```
A brief moment of anticipation. Like a curtain rising.

### 4. Hover States
```
Images: scale(1) → scale(1.03) over 700ms. No shadow.
Cards: translateY(0) → translateY(-2px) over 400ms. Shadow appears.
Links: underline slides in from left over 400ms.
Color: instant (100ms) gold shift on hover.
```

### 5. Timeline Entry
```
Left entries: fade in from translateX(-32px)
Right entries: fade in from translateX(32px)
Center dot: scale(0) → scale(1) with 200ms delay
```
Used in Journey/Philanthropy sections. Alternating left-right creates rhythm.

### 6. Number Counter
```
Numbers count up from 0 to target over 2000ms.
Triggered once when section scrolls into view (IntersectionObserver).
Easing: linear for the counter itself (consistent pace).
```

### 7. Navigation Overlay
```
Menu overlay: opacity 0 → 1 over 400ms
Menu items: staggered fade-up, 100ms each
Close: reverse
```
Full-screen overlay feels like turning a page, not opening a drawer.

## Stagger Timing

| Context | Delay Between Items |
|---------|-------------------|
| Cards in a grid | 80ms |
| Timeline entries | 120ms |
| Nav menu items | 100ms |
| Section labels | 100ms after section visible |

## Motion Rules

### 1. One curve
Never introduce a second easing curve. The WKALAN curve is the only one.

### 2. No bounce
Bouncing is playful. We are not playful. We are calm.

### 3. No infinite animations
Nothing should loop forever. Motion ends. Like a story.

### 4. Motion serves content
If an animation draws attention to itself, it failed. Motion should guide the eye, not compete for it.

### 5. Respect prefers-reduced-motion
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Implementation

### In framer-motion (React)
```tsx
<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
  viewport={{ once: true, margin: "-80px" }}
>
```

### In CSS
```css
.my-element {
  animation: reveal-up var(--duration-slow) var(--ease-primary) forwards;
}
```
