# 021 — Components

## Philosophy

**Every component justifies its existence — or it doesn't exist.**

WKALAN components are the building blocks of digital identity. They are designed once, used everywhere, and never duplicated. A component is not a shortcut. It's a commitment to consistency.

---

## Component Principles

### 1. One component, one responsibility
A Button navigates or submits. It doesn't also load data, track analytics, or animate itself. Every component does exactly one thing.

### 2. Compose, don't customize
Build complex UI by composing simple components — not by adding props to make one component do everything.

```tsx
// Good: composition
<Card>
  <CardImage />
  <CardBody>
    <CardTitle />
    <CardDescription />
    <Button />
  </CardBody>
</Card>

// Bad: one component with 47 props
<Card variant="horizontal" imagePosition="left" showButton buttonLabel="Click" buttonVariant="secondary" ... />
```

### 3. Server by default
Components are server components unless they need interactivity. Keep the client boundary small.

### 4. Accessible by default
Every component ships with proper ARIA attributes, keyboard navigation, and focus management. Accessibility is not a variant — it's the base.

### 5. Consistent API
Buttons accept `variant`, `size`, `disabled`. Cards accept `children`, `className`, `as`. Every component follows the same API patterns.

---

## Component Categories

### Primitives (02_Design_System/components/)
- **Button** — The only way to trigger an action
- **Container** — The only way to constrain width
- **SectionHeading** — Consistent section headers
- **NoiseOverlay** — Subtle grain texture
- **ScrollProgress** — Reading position indicator

### Layout (03_Product_System/*/layout/)
- **Header** — Site navigation
- **Footer** — Site closure
- **PageLoader** — First impression
- **SmoothScroll** — Lenis wrapper

### Sections (03_Product_System/*/sections/)
- **Hero** — First thing you see
- **Philosophy** — Brand statement
- **Journey / Timeline** — Story progression
- **Grid / Cards** — Multiple items
- **Newsletter / CTA** — Action invitation

---

## Adding a Component

Before creating a new component:

1. **Does it already exist?** — Check the system. Don't duplicate.
2. **Can it be composed?** — Can you build it from existing components?
3. **Is it truly reusable?** — If it's used once, it might not need to be a component.
4. **Does it belong in 02 (reusable primitive) or 03 (project-specific)?**

---

*Components are decisions, preserved. Don't preserve a bad decision. Don't duplicate a good one.*
