# 020 — Quality Checklist

## Philosophy

**Good design is never random. And every design decision must be explainable.**

This checklist is the final gate. Every WKALAN project — our own site and every client's digital identity — must pass every item before launch. Not as a formality. As proof that the work reflects the philosophy.

---

## Principles

### Quality is not the absence of bugs. It's the presence of care.
A site can be technically perfect and still feel empty. Quality at WKALAN means: someone cared about every detail. Every pixel. Every word. Every animation. Every space.

### Ship when it's ready. Not when the deadline says so.
Deadlines are real. But shipping unfinished work costs more than delaying. A rushed WKALAN project damages the reputation more than a late one.

---

## Specification

### Brand
- [ ] Does it feel like WKALAN? (Minimal. Warm. Timeless. Human. Calm. Editorial. Precise.)
- [ ] Does it reflect "品味人生，雕刻身份"?
- [ ] Would the client recognize themselves in it?
- [ ] Is every design decision traceable to the client's story or WKALAN Design Specification?

### Design
- [ ] Is whitespace generous? Does content have room to breathe?
- [ ] Is hierarchy clear? Can you scan the page and understand importance?
- [ ] Are colors from the WKALAN Color System? No hardcoded hex values?
- [ ] Is typography from the WKALAN Typography System? Correct scale, weights, spacing?
- [ ] Is spacing from the WKALAN Rhythm System? Consistent throughout?
- [ ] Does every animation serve a purpose? Can each one answer: "What does this help the user understand?"
- [ ] Is the WKALAN curve used for all animations?
- [ ] Is there anything unnecessary that can be removed?

### User
- [ ] Is the page easy to read? (Font size, line height, contrast, reading width)
- [ ] Is navigation intuitive? Can a first-time visitor find what they need?
- [ ] Is the emotional journey clear? Stop → Think → Resonate → Believe → Act
- [ ] Does the page feel calm? No urgency. No pop-ups. No countdown timers.
- [ ] Would a stranger leave feeling like they met a person?

### Accessibility
- [ ] All images have descriptive `alt` text
- [ ] Heading hierarchy is logical (h1 → h2 → h3, no skips)
- [ ] Color contrast passes WCAG AA minimum
- [ ] All interactive elements are keyboard accessible
- [ ] Focus ring visible on `:focus-visible`
- [ ] Touch targets ≥ 44×44px
- [ ] `prefers-reduced-motion` respected
- [ ] Page readable at 200% zoom

### Responsive
- [ ] Tested on iPhone SE (375px)
- [ ] Tested on iPad (768px, 1024px)
- [ ] Tested on desktop (1280px, 1440px)
- [ ] No horizontal scroll at any breakpoint
- [ ] Typography scales correctly at all sizes

### Performance
- [ ] LCP < 2.5s
- [ ] CLS < 0.1
- [ ] Images use Next.js `<Image>` with lazy loading
- [ ] Fonts use `display: swap`
- [ ] No layout shift on load

### Engineering
- [ ] `npm run build` succeeds with zero errors
- [ ] No TypeScript errors
- [ ] No ESLint warnings
- [ ] No `console.log` in production code
- [ ] No commented-out code
- [ ] Import paths use `@/` alias
- [ ] Design tokens used (no hardcoded values)

---

## Examples

### ✅ Correct — Passing Review
> **Project:** Creator digital identity
> **Review result:** All items pass. The client's three keywords (安静, 真实, 少年感) are visible in every design decision. Whitespace is generous. Animations are minimal and purposeful. The site feels like the person.
>
> **Decision:** Ship.

### ❌ Incorrect — Failing Review
> **Project:** Brand website
> **Review result:** 6 items fail. Color contrast insufficient on 2 sections. Hero animation bounces (violates "no bounce" rule). Three sections have hardcoded spacing values instead of using the Rhythm System. Mobile menu is not keyboard accessible.
>
> **Decision:** Do not ship. Fix all 6 items. Re-review.

### ✅ Correct — Deliberately Still
> **Section:** The Origin — dark background, three story beats.
> **Review question:** "This section has no scroll-triggered animation. Intentional?"
> **Designer answer:** "Yes. The story is heavy enough. Motion would distract."
> **Decision:** Passes. Intentional stillness is a valid design decision.

---

*These two sentences are the final test for every project:*
*"Good design is never random."*
*"If a design decision cannot be explained, it should not exist."*
