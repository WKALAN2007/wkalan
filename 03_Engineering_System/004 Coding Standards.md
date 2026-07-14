# 004 — Coding Standards

## Philosophy

**Consistency is invisible craftsmanship.**

Everyone on the team should write code that looks like it was written by one person. When code is consistent, you stop noticing the style and start understanding the logic.

---

## TypeScript

### Strict Mode
```json
{
  "compilerOptions": {
    "strict": true
  }
}
```
No exceptions. Strict mode catches bugs before they become production incidents.

### Types Over Interfaces
```tsx
// ✅ Preferred — type aliases
type ButtonProps = {
  variant: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
};

// ⚠️ Acceptable but not preferred
interface ButtonProps { ... }
```
Use `type` for component props. Use `interface` only when you need declaration merging (rare).

### No `any`
```tsx
// ❌ Bad
const data: any = fetchData();

// ✅ Good
const data: SiteConfig = fetchData();

// ✅ Acceptable when truly unknown (use `unknown` first)
const data: unknown = parseJSON(raw);
```

### Explicit Return Types on Exported Functions
```tsx
// ✅ Good
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

// ⚠️ Acceptable for simple components
export function Button({ children }: ButtonProps) {
  return <button>{children}</button>;
}
```

---

## React Components

### Function Declarations Over Arrow Functions
```tsx
// ✅ Preferred
export function Hero() {
  return <section>...</section>;
}

// ❌ Avoid
export const Hero = () => {
  return <section>...</section>;
};
```
Function declarations are hoisted, easier to debug (named in stack traces), and more readable at the top level.

### Props Destructuring in Signature
```tsx
// ✅ Good
export function Button({ variant = "primary", size = "md", children }: ButtonProps) {
  return ...
}
```

### One Component Per File
Never export multiple components from one file. The filename should match the primary component name.

### "use client" at the Top
```tsx
"use client";

// rest of the component
```
Client directive goes on line 1. Always. No exceptions.

---

## Component Patterns

### The Section Component Pattern
```tsx
"use client";

import { motion } from "framer-motion";

export function SectionName() {
  return (
    <section id="section-id" className="section-padding">
      <div className="container-standard">
        {/* Section content */}
      </div>
    </section>
  );
}
```

### The Server Component Pattern
```tsx
// No "use client" directive
// No hooks. No event handlers. No browser APIs.

export function StaticContent({ data }: Props) {
  return (
    <div>
      {data.map(item => <Card key={item.id} {...item} />)}
    </div>
  );
}
```

### Props Pattern
```tsx
type ComponentProps = {
  // Required props first
  children: React.ReactNode;
  
  // Optional props with defaults
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  
  // HTML passthrough
  className?: string;
};
```

---

## CSS / Tailwind

### Class Order
1. Layout (display, position, z-index)
2. Spacing (padding, margin)
3. Sizing (width, height)
4. Visual (background, border, shadow)
5. Typography (font, text, leading)
6. Animation (transition, transform)

### Use Design Tokens in Tailwind
```tsx
// ✅ Good — uses design token
<div className="bg-[var(--color-background)] text-[var(--color-text-primary)]">

// ❌ Bad — hardcoded value
<div className="bg-[#FAFAF8] text-[#1A1A18]">
```

### Conditional Classes
```tsx
import { cn } from "@/02_Design_System/lib/utils";

// ✅ Good
<button className={cn(
  "base-class",
  variant === "primary" && "primary-class",
  className  // Allow parent overrides
)}>
```

---

## Comments

### Comment on Why, Not What
```tsx
// ✅ Good — explains reasoning
// Lenis duration is 1.2s — slightly longer than default for a more deliberate feel
const lenis = new Lenis({ duration: 1.2 });

// ❌ Bad — describes what the code already says
// Create a new Lenis instance with duration 1.2
const lenis = new Lenis({ duration: 1.2 });
```

### No Dead Code Comments
Don't leave commented-out code. Delete it. Git remembers.

### TODO Format
```tsx
// TODO(wkalan): Add keyboard navigation for the timeline entries
// FIXME(wkalan): Hover state breaks on Safari 17.4
```
