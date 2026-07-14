# 016 — Scroll Experience

## Philosophy

**Scrolling is storytelling.**

Scrolling is not a technical behavior. It's the primary narrative mechanism of the web. As someone scrolls, they're turning pages in a story. The scroll experience should feel like reading — smooth, rhythmic, paced.

---

## Smooth Scroll: Lenis

All WKALAN projects use **Lenis** for smooth scrolling.

```tsx
// 03_Product_System/site/layout/SmoothScroll.tsx
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
});
```

**Settings:**
- **Duration:** 1.2s — slightly longer than default. Feels more deliberate.
- **Easing:** Exponential out — smooth deceleration, natural feel.
- **Smooth wheel:** Enabled — mouse wheel scrolling is smoothed.
- **Touch:** Native — mobile touch scrolling uses native behavior (no interference).

---

## Scroll-Triggered Animation

WKALAN uses **framer-motion's `whileInView`** for scroll-triggered animations — not GSAP ScrollTrigger.

**Why framer-motion over GSAP?**
- Consistent with the rest of the animation system
- Declarative (React-native syntax)
- No additional library
- Sufficient for our animation vocabulary

**GSAP ScrollTrigger is reserved for:**
- Complex timelines with multiple synchronized elements
- Pin-based animations (elements that stay fixed while scrolling)
- Horizontal scroll sections (rare in WKALAN projects)

---

## Scroll Patterns

### The Narrative Scroll
```
HERO (full screen)
  ↓ scroll
PHILOSOPHY (statement)
  ↓ scroll
JOURNEY (timeline)
  ↓ scroll
CRAFT (grid)
  ↓ scroll
NUMBERS (counters)
  ↓ scroll
CONNECT (close)
```

Each section reveals as it scrolls into view. The narrative unfolds sequentially. The user doesn't navigate — they discover.

### The Anchor Scroll
Navigation links scroll smoothly to sections:
```tsx
document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
```
Used with Lenis, this creates a seamless scroll-to-section experience.

### The Parallax Scroll
Hero images move at a different rate than the scroll:
```
Image scale: 1.0 → 1.1 (slower than scroll)
Text: fades out at 40% scroll
```
Creates depth. The image anchors the space while the user moves through it.

---

## Scroll Rules

### 1. No scroll hijacking
Let the user scroll at their own pace. Never lock the scroll. Never force a scroll speed. Never "scroll-jack."

### 2. One scroll direction
Vertical scroll only. No horizontal scroll sections (unless it's a deliberate, rare design choice).

### 3. Scroll progress is optional
A scroll progress indicator (thin bar at top of page) is nice-to-have, not required. It's more useful on long narrative pages than short ones.

### 4. Anchor links always have a target
Every `#section-id` link must point to a real section with that `id`. Broken anchor links feel broken.

### 5. Scroll position is preserved
When navigating back to a page, restore scroll position. Don't make users re-scroll through content they've already seen.

---

## Implementation

```tsx
// Initialize Lenis
import Lenis from "lenis";

useEffect(() => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  return () => lenis.destroy();
}, []);
```

---

*Scroll is the page breathing in and out. Make it smooth.*
