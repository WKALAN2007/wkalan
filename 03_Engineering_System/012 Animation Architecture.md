# 012 — Animation Architecture

## Philosophy

**One system. One curve. One way to animate.**

WKALAN uses a two-tier animation architecture:
- **framer-motion** for all UI animations (scroll reveals, hover states, parallax, loading screens)
- **Lenis** for smooth scrolling (the foundation all animations sit on)

---

## Architecture Decision: framer-motion over GSAP

| Concern | framer-motion | GSAP |
|---------|--------------|------|
| React integration | Native (declarative JSX) | Imperative (useRef + useEffect) |
| Server components | Compatible (layout animations) | Client-only |
| Scroll triggers | `whileInView` (built-in) | ScrollTrigger (plugin) |
| Bundle size | ~35KB gzipped | ~30KB + ScrollTrigger |
| Learning curve | Shallow (React patterns) | Steep (timeline syntax) |
| WKALAN needs | 95% of use cases | Pin animations, complex timelines |

**Decision:** framer-motion is the default. GSAP is reserved for:
- Pin-based animations (elements stay fixed during scroll)
- Complex synchronized timelines with multiple elements
- Horizontal scroll sections

---

## The Animation Stack

```
Lenis (Smooth Scroll)
  ↓ provides consistent scroll values
framer-motion
  ├── useScroll + useTransform → Parallax
  ├── whileInView → Scroll reveals
  ├── AnimatePresence → Mount/unmount animations
  ├── motion.div variants → Staggered animations
  └── hover / tap → Micro-interactions
```

---

## Common Patterns

### Scroll Reveal (Most Used)
```tsx
<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.7,
    ease: [0.16, 1, 0.3, 1],
  }}
  viewport={{ once: true, margin: "-80px" }}
>
  {content}
</motion.div>
```

### Hero Parallax
```tsx
const ref = useRef(null);
const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start start", "end start"],
});
const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

<motion.div style={{ scale }}>
  <img ... />
</motion.div>
<motion.div style={{ opacity }}>
  <h1>...</h1>
</motion.div>
```

### Staggered Grid
```tsx
{items.map((item, i) => (
  <motion.div
    key={item.id}
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.7,
      delay: 0.08 * i,  // 80ms stagger
      ease: [0.16, 1, 0.3, 1],
    }}
    viewport={{ once: true }}
  >
    <Card {...item} />
  </motion.div>
))}
```

### Mount/Unmount (Loading Screen, Menu Overlay)
```tsx
<AnimatePresence>
  {visible && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <LoadingScreen />
    </motion.div>
  )}
</AnimatePresence>
```

---

## Performance Rules

### 1. Animate opacity and transform only
These are GPU-accelerated properties. Avoid animating `width`, `height`, `top`, `left`, `margin`, `padding` — they trigger layout recalculations.

- ✅ `opacity`, `transform: translate/scale/rotate`
- ❌ `width`, `height`, `margin`, `padding`, `top`, `left`

### 2. `once: true` on all scroll reveals
Content should animate once. Not every time someone scrolls past.

### 3. `layout` prop sparingly
`motion.div layout` triggers layout animations — useful for reordering lists, but expensive. Don't use it on large subtrees.

### 4. Lenis RAF is the only RAF
Lenis uses `requestAnimationFrame`. Don't add additional RAF loops. Use framer-motion's built-in `useScroll` — it syncs with Lenis automatically.

---

*Animation is the punctuation of the page. Use it to guide, not to shout.*
