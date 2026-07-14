# 015 — Animation Library

## Philosophy

**A small set of animations, used consistently, across every project.**

This is the WKALAN animation library. Eight animations. No more. No less.

Every animation in a WKALAN project should be one of these eight — or a deliberate, documented exception.

---

## The Eight Animations

### 1. Fade Up (Reveal)
```
Element fades in from below over 700ms.
TranslateY: 24px → 0
Opacity: 0 → 1
```
**Used for:** Section content, cards, paragraphs, almost everything.
**Framer Motion:**
```tsx
<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
  viewport={{ once: true, margin: "-80px" }}
/>
```

### 2. Fade In
```
Element fades in place over 700ms.
Opacity: 0 → 1
No movement.
```
**Used for:** Elements that shouldn't shift position — overlay text, static labels, background elements.

### 3. Scale Reveal
```
Element scales up slightly over 700ms.
Scale: 0.96 → 1
Opacity: 0 → 1
```
**Used for:** Cards in a grid, gallery images. The slight scale gives a satisfying "settling" feel.

### 4. Slide Left / Right
```
Element slides in from the side over 700ms.
TranslateX: ±32px → 0
Opacity: 0 → 1
```
**Used for:** Timeline alternating entries. Left entries slide from left. Right entries slide from right.

### 5. Parallax
```
Image scales slowly over the scroll distance of the hero.
Scale: 1.0 → 1.1 (over the hero section's scroll distance)
Text fades out at 40% scroll.
```
**Used for:** Hero sections. Creates depth without distraction.
**Framer Motion:**
```tsx
const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
```

### 6. Stagger
```
Same as Fade Up, but children enter sequentially.
Delay: 80ms between items, 120ms between rows.
```
**Used for:** Card grids, feature lists, any group of similar items.

### 7. Underline Reveal
```
A thin line draws itself from left to right.
ScaleX: 0 → 1
Duration: 800ms
Transform origin: left (or center, depending on context)
```
**Used for:** Below section labels. A visual breath before the content.

### 8. Count Up
```
Number counts from 0 to target over 2000ms.
Triggered by IntersectionObserver.
Linear increment (not eased — numbers should feel steady).
```
**Used for:** Stats sections. "500+," "30万+," "9000万+."

---

## Hover States

| Element | Effect | Duration |
|---------|--------|----------|
| Image | Scale: 1 → 1.03 | 700ms |
| Card | TranslateY: 0 → -2px + shadow appear | 400ms |
| Link | Underline slides in from left | 400ms |
| Color shift | White → Gold (or similar) | 100ms |
| Button | Background fills, text inverts | 200ms |

---

## Animation Rules

### 1. Never combine animations
Don't fade up AND scale AND slide simultaneously. Pick one. Let it do its job.

### 2. Stagger is the only variation
The eight animations above are the vocabulary. Stagger timing is the only variation allowed.

### 3. `once: true` on all scroll reveals
Content should not animate every time someone scrolls past. It reveals once. Then it stays.

### 4. Margin: `-80px` on viewport triggers
Content starts animating slightly before it enters the viewport. By the time it's visible, the animation is in its final stage.

---

*Eight animations. Every project. Every context. Consistency is the craft.*
