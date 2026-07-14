# 029 — Engineering Checklist

## Before You Ship

Every WKALAN project must pass this checklist before deployment. Not as a formality. As a genuine quality gate.

---

## Performance

- [ ] LCP (Largest Contentful Paint) < 2.5s
- [ ] CLS (Cumulative Layout Shift) < 0.1
- [ ] All images use Next.js `<Image>` with proper `sizes`
- [ ] Hero image uses `priority` and `loading="eager"`
- [ ] Below-fold images use `loading="lazy"`
- [ ] No render-blocking JavaScript
- [ ] Fonts use `display: swap`

## Accessibility

- [ ] All images have descriptive `alt` text
- [ ] Heading hierarchy is logical (h1 → h2 → h3, no skips)
- [ ] Color contrast passes WCAG AA (check with DevTools)
- [ ] All interactive elements are keyboard accessible
- [ ] Focus ring visible on `:focus-visible`
- [ ] Skip-to-content link present
- [ ] Forms have labels
- [ ] `prefers-reduced-motion` respected
- [ ] Touch targets ≥ 44×44px

## Responsive

- [ ] Works on iPhone SE (375px)
- [ ] Works on iPad (768px, 1024px)
- [ ] Works on desktop (1280px, 1440px, 2560px)
- [ ] No horizontal scroll at any breakpoint
- [ ] Text readable at 200% zoom
- [ ] Navigation works on mobile (hamburger menu)

## Cross-Browser

- [ ] Chrome (latest)
- [ ] Safari (latest)
- [ ] Firefox (latest)
- [ ] Edge (latest)

## Code Quality

- [ ] No TypeScript errors
- [ ] No ESLint warnings
- [ ] No `console.log` in production code
- [ ] No commented-out code
- [ ] No unused imports
- [ ] No `any` types (without explicit justification)
- [ ] Import paths use `@/` alias (not relative)
- [ ] Design tokens used (no hardcoded colors/fonts/spacing)

## Design Consistency

- [ ] All colors from `02_Design_System/tokens.css`
- [ ] All spacing from the spacing scale
- [ ] All animations use the WKALAN curve
- [ ] All section spacing consistent
- [ ] Typography follows the type scale

## Deployment

- [ ] `npm run build` succeeds with no errors
- [ ] Preview deployment tested
- [ ] All routes return 200
- [ ] 404 page renders correctly
- [ ] Environment variables set in Vercel
- [ ] Custom domain configured (if applicable)

## The Final Question

**Does this feel like WKALAN?**

Not: does it work? (It should.)
Not: is it fast? (It should be.)
Not: is it accessible? (It must be.)

**Does it feel like someone savored the details?**

If yes — ship it.
If no — go back. Not to fix bugs. To add care.

---

*Checklists don't guarantee quality. Care does. The checklist is just the reminder.*
