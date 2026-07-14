# Components

## Philosophy

**Every component should justify its existence.**

WKALAN components are the building blocks of digital identity. They are:
- **Minimal** — nothing decorative, everything functional
- **Accessible** — keyboard navigable, screen-reader friendly
- **Composable** — combine, don't customize
- **Consistent** — the same button works the same way everywhere

## UI Primitives

Located in `02_Design_System/components/`:

### Container
The foundational layout wrapper. Enforces max-width, horizontal padding, and optional semantic HTML tag.

```tsx
<Container as="section" className="py-24">
  ...
</Container>
```

### Button
Three variants: `primary`, `secondary`, `ghost`. Accepts `href` (renders as Link) or `onClick` (renders as button).

```tsx
<Button variant="primary" href="/contact">Get in touch</Button>
<Button variant="secondary" onClick={handleClick}>Learn more</Button>
<Button variant="ghost" href="/about">About us</Button>
```

### SectionHeading
Consistent section header with optional label, heading, and description.

```tsx
<SectionHeading
  label="Our Work"
  heading="数字身份"
  description="Every project starts with a person, not a brief."
/>
```

### ScrollProgress
A thin progress bar at the top of the page showing scroll position. Subtle. Out of the way.

### NoiseOverlay
A barely-visible grain texture. Adds tactile depth. Invisible at first glance — felt, not noticed.

## Layout Components

Located in `03_Product_System/site/layout/`:

### Header
Sticky header. Transparent at top → opaque on scroll. Logo left, nav center/right, hamburger on mobile.

### Footer
Multi-column footer. Links, social, copyright. Dark background or matching page background.

### PageLoader
Full-screen loading animation. Brand logo fade-in/fade-out. First impression.

### SmoothScroll
Lenis initialization wrapper. Enables smooth scrolling globally. Renders nothing visible.

## Pattern: Section Component

Every section follows the same structure:

```tsx
"use client";

import { motion } from "framer-motion";

export function SectionName() {
  return (
    <section id="section-id" className="section-padding bg-[var(--color-background)]">
      <div className="container-standard">
        {/* Section label */}
        <motion.span
          className="section-label"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
          }}
        >
          LABEL
        </motion.span>

        {/* Divider accent */}
        <motion.div
          className="divider-accent mt-3"
          variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }}
          style={{ transformOrigin: "left" }}
        />

        {/* Content */}
        <motion.h2
          className="type-h2 mt-8"
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: { opacity: 1, y: 0, transition: { delay: 0.1 } },
          }}
        >
          Heading
        </motion.h2>
      </div>
    </section>
  );
}
```

## Component Rules

### 1. One component, one file
Don't put multiple components in one file. Exceptions: small internal helpers.

### 2. Props over styles
Components accept logical props (`variant`, `size`), not style props (`color`, `margin`). Use `className` for one-off overrides.

### 3. Server by default
Components are server components unless they need interactivity (`use client`). Keep the client boundary small.

### 4. cn() for class merging
Always use the `cn()` utility for conditional classes. It handles conflicts and deduplication.

```tsx
import { cn } from "@/02_Design_System/lib/utils";

className={cn("base-class", isActive && "active-class", className)}
```

### 5. Forward refs when needed
If a component wraps an interactive element, forward the ref for focus management.

## Adding a Component

Before creating a new component, ask:
1. Does this already exist in the system?
2. Can this be composed from existing components?
3. Is this truly reusable, or specific to one section?
4. Does it belong in `02_Design_System/components/` (reusable) or `03_Product_System/` (project-specific)?
