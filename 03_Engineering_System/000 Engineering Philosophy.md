# 000 — Engineering Philosophy

## Code Is Communication.

Code is not just instructions for a computer. It's communication between people — between you now and your teammate later, between you today and you in six months, between WKALAN and every developer who will ever work on this system.

**Write code for humans first. Computers second.**

---

## The WKALAN Engineering Principles

### 1. Simplicity Scales
Complexity doesn't make you look smart. It makes your codebase unmaintainable. The simplest solution that meets the requirements is the best solution. Every time.

**Simple code is:**
- Easy to read
- Easy to change
- Easy to delete
- Obvious in its intent

**Complex code is:**
- A future bug
- A future argument
- A future rewrite

### 2. Build Once, Reuse Everywhere
A component built for one project should work in all projects. A utility written once should never be rewritten. If you find yourself copying and pasting code — stop. Extract it. Make it reusable. Put it in the design system.

### 3. Performance Is Part of the Design
Performance is not optimization you do at the end. It's a design constraint from the beginning. A beautiful page that takes 8 seconds to load is not beautiful. It's broken.

Performance targets:
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1
- **TBT (Total Blocking Time):** < 200ms

### 4. Clean Architecture Enables Creativity
A well-structured codebase is not restrictive. It's liberating. When the foundations are solid, you can build anything on top. When they're shaky, every new feature is terrifying.

### 5. The Framework Serves the Philosophy
Next.js, Tailwind, framer-motion, Lenis — these are tools. They serve WKALAN's philosophy. When a tool conflicts with the philosophy, the philosophy wins. We change the tool, not the principle.

### 6. Accessibility Is Not a Feature
It's the baseline. Every component. Every page. Every project. No exceptions. If it's not accessible, it's not done. If it's not done, it doesn't ship.

### 7. AI Is a Tool, Not a Replacement
AI can generate code. It cannot understand a person's life. We use AI to accelerate the mechanical — never to replace the human. AI-generated code must pass the same review as human-written code.

---

## The Engineering Stack

| Layer | Technology | Why |
|-------|-----------|-----|
| **Framework** | Next.js 16 (App Router) | Server components, streaming, ISR — the most complete React framework |
| **Language** | TypeScript (strict) | Types are documentation that can't go out of date |
| **Styling** | Tailwind CSS v4 | Utility-first, design token integration, zero runtime |
| **Components** | shadcn/ui philosophy | Copy-paste primitives, full control, not a dependency |
| **Animation** | framer-motion + Lenis | Declarative React animations + smooth scrolling |
| **Deployment** | Vercel | Edge network, preview deployments, analytics |

---

## Code Review Standards

Every PR must answer:
1. **Does it work?** — Functionally correct.
2. **Is it simple?** — The simplest solution that meets the requirements.
3. **Is it accessible?** — Keyboard, screen reader, contrast, touch.
4. **Is it performant?** — No unnecessary renders. No massive bundles. Optimized images.
5. **Is it consistent?** — Follows the naming conventions. Uses the design tokens. Matches the patterns.
6. **Is it documented?** — Complex logic has comments. Components have clear APIs.

---

*Engineering is not about writing code. It's about building systems that outlast the people who built them.*
