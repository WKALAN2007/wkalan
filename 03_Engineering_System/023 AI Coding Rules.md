# 023 — AI Coding Rules

## Philosophy

**AI accelerates. Humans decide.**

WKALAN uses AI as a tool — never as a replacement for judgment. AI can generate code. It cannot understand a person's life. It cannot savor. It cannot make a design decision.

---

## When to Use AI

### Appropriate Uses
- **Boilerplate generation** — File scaffolding, component skeletons, repetitive patterns
- **Type generation** — Deriving types from data structures
- **Refactoring** — Renaming, extracting, reorganizing (with human review)
- **Documentation** — First drafts of docs, READMEs, comments
- **Testing** — Generating test cases from component APIs
- **Search** — Finding patterns, references, examples in the codebase

### Inappropriate Uses
- **Design decisions** — Color, typography, spacing, layout. These come from the Design System and the client's story.
- **Content writing** — Brand copy, manifestos, client stories. These come from 品味 (savoring).
- **Client communication** — Emails, proposals, presentations. These require human judgment.
- **Final code without review** — Every AI-generated line must pass human code review.

---

## AI Code Review Checklist

Every AI-generated code block must be verified:

- [ ] **Is it correct?** — Does it actually do what was intended?
- [ ] **Is it simple?** — Would a human write it the same way, or is it over-engineered?
- [ ] **Is it consistent?** — Does it follow WKALAN coding standards?
- [ ] **Is it accessible?** — Keyboard, screen reader, contrast?
- [ ] **Is it using the design system?** — Design tokens, not hardcoded values?
- [ ] **Is it necessary?** — Did AI add complexity that wasn't requested?
- [ ] **Is there no dead code?** — AI loves adding unused imports and unreachable code.

---

## Prompt Engineering for WKALAN

When prompting AI for WKALAN work, always include:

1. **Context:** "This is for WKALAN, a digital identity studio. Our philosophy is 品味人生，雕刻身份."
2. **Constraints:** "Use Tailwind CSS. Use framer-motion with the WKALAN curve: cubic-bezier(0.16, 1, 0.3, 1). Use our design tokens."
3. **Reference:** "Follow the pattern in `03_Engineering_System/site/sections/Hero.tsx`."
4. **Quality bar:** "This must meet WCAG AA. It must work on mobile. It must pass our code review checklist."

---

## The WKALAN AI Prompts Library

All reusable prompts live in `05_AI_System/`. Before writing a new prompt, check if one already exists.

Categories:
- **Brand/** — Prompts for brand strategy, manifesto writing, voice definition
- **Design/** — Prompts for color systems, typography, layout patterns
- **Code/** — Prompts for React components, Next.js patterns, animation
- **Review/** — Prompts for design review, code review, accessibility audit

---

*AI is a tool. 品味 is a human act. Never confuse the two.*
