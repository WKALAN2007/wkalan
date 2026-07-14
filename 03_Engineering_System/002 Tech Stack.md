# 002 — Tech Stack

## The WKALAN Stack

Every technology choice is deliberate. Every dependency must justify its existence.

---

## Core

| Technology | Version | Role | Why |
|-----------|---------|------|-----|
| **Next.js** | 16 | Framework | App Router. Server components. Streaming. The most complete React framework. |
| **TypeScript** | 5.x (strict) | Language | Types are documentation. Strict mode catches bugs before runtime. |
| **React** | 19 | UI Library | Server components. Streaming. The ecosystem. |

## Styling

| Technology | Version | Role | Why |
|-----------|---------|------|-----|
| **Tailwind CSS** | 4 | Utility CSS | Design token integration via `@theme`. Zero runtime. Tree-shakes unused styles. |
| **@tailwindcss/postcss** | 4 | PostCSS plugin | Required for Tailwind v4 with Next.js. |
| **CSS Custom Properties** | — | Design tokens | Framework-agnostic. Work in any CSS context. Survive framework changes. |

## Component System

| Technology | Role | Why |
|-----------|------|-----|
| **shadcn/ui philosophy** | Pattern | Copy-paste primitives. Full control. Not a dependency. |
| **class-variance-authority** | Variant API | Type-safe component variants. Composable. |
| **clsx + tailwind-merge** | Class utilities | Conditional classes without conflicts. |

## Animation

| Technology | Version | Role | Why |
|-----------|---------|------|-----|
| **framer-motion** | 12 | React animations | Declarative. Server-compatible layout animations. `whileInView` for scroll triggers. |
| **Lenis** | 1.3 | Smooth scrolling | Lightweight. Performant. Native-like feel. No DOM manipulation. |

## Icons

| Technology | Role | Why |
|-----------|------|-----|
| **lucide-react** | Icon library | Consistent outline style. Tree-shakeable. Active maintenance. |

## Deployment

| Technology | Role | Why |
|-----------|------|-----|
| **Vercel** | Hosting + CI/CD | Built by the Next.js team. Preview deployments. Edge network. Analytics. |

## Development

| Technology | Role | Why |
|-----------|------|-----|
| **Turbopack** | Bundler | Next.js native. Fast HMR. Rust-based. |
| **ESLint** | Linting | Next.js config. TypeScript rules. |
| **Prettier** (optional) | Formatting | Consistency. Zero config with Tailwind. |

---

## What We Don't Use (And Why)

| Technology | Why Not |
|-----------|--------|
| **Redux / Zustand** | Unnecessary for static/content sites. Server components handle data. |
| **Styled Components** | Runtime cost. Conflicts with server components. |
| **GSAP (by default)** | Powerful but imperative. framer-motion is sufficient for WKALAN's animation vocabulary. Reserved for complex timelines only. |
| **Sass / Less** | Tailwind + CSS custom properties handle everything. |
| **GraphQL** | Overkill for content sites. REST/ISR is simpler. |
| **Prisma / ORM** | No database (yet). Static/content sites. |
| **Docker** | Vercel handles deployment. No containerization needed. |

---

## Adding a Dependency

Before adding any npm package:
1. **Is there already a way to do this?** — Check the existing stack.
2. **Can we build it simply?** — 50 lines of our code is better than 5000 lines of dependency.
3. **Is it actively maintained?** — Last commit > 6 months ago = red flag.
4. **What's the bundle size cost?** — Check on bundlephobia.com.
5. **Does it align with the philosophy?** — Does it serve 品味人生, or fight it?
