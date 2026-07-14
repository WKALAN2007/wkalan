# 003 — Folder Structure

## The Rule

**Related code lives together. Unrelated code stays apart.**

If you change a feature, you should only need to touch one directory. If you delete a feature, you should only need to delete one directory.

---

## Top-Level Layout

```
wkalan/
├── app/                         # Routes only — no business logic
├── 01_Brand_System/             # Philosophy docs — no code
├── 02_Design_System/            # Shared design tokens + UI primitives
│   ├── components/               # Reusable across all sites
│   ├── lib/                      # Shared utilities (cn, etc.)
│   └── *.css                     # Token definitions
├── 03_Engineering_System/       # Feature code — organized by site
│   ├── site/                     # WKALAN main site
│   │   ├── layout/               # Site-specific layout components
│   │   └── sections/             # Page sections
│   ├── fashion/                  # Fashion brand site
│   │   ├── layout/
│   │   └── sections/
│   ├── basketball/              # Basketball creator site
│   │   ├── layout/
│   │   └── sections/
│   └── constants/               # Site-wide constants (e.g., site config)
├── 04_Business_System/          # Business docs — no code
├── 05_AI_System/                # AI prompts + rules — no code
├── 06_Knowledge_Base/           # Research — no code
├── 07_Playbooks/                # SOPs — no code
├── public/                      # Static assets
│   └── fashion/                  # Fashion site images
├── content/                     # Future: CMS content (markdown, MDX)
├── data/                        # Future: static data (JSON, YAML)
├── types/                       # Future: shared TypeScript types
└── hooks/                       # Future: shared React hooks
```

---

## Component File Structure

Each component follows this pattern:

```
ComponentName/
├── index.ts          # Public API (re-exports)
├── ComponentName.tsx # Implementation
└── ComponentName.test.tsx  # Tests (future)
```

For simple components (single file, no tests), the flat structure is acceptable:
```
components/
├── Button.tsx
├── Container.tsx
└── SectionHeading.tsx
```

---

## Section File Structure

Every page section is a single file:

```
sections/
├── Hero.tsx           # Self-contained section
├── Philosophy.tsx     # Self-contained section
├── Journey.tsx        # Self-contained section
└── ...
```

If a section grows too large (> 300 lines), extract sub-components into the same directory:

```
sections/
├── Hero/
│   ├── index.ts
│   ├── Hero.tsx
│   ├── HeroImage.tsx
│   └── HeroText.tsx
└── ...
```

---

## File Naming

| Type | Convention | Example |
|------|-----------|---------|
| Component file | PascalCase | `Hero.tsx`, `Button.tsx` |
| Layout component | PascalCase | `Header.tsx`, `Footer.tsx` |
| Utility file | camelCase | `utils.ts`, `constants.ts` |
| CSS file | kebab-case | `tokens.css`, `typography.css` |
| Documentation | Plain text with spaces | `000 Design Philosophy.md` |
| Image asset | kebab-case | `hero.jpg`, `category-1.jpg` |

---

## Import Paths

Use `@/` path alias for all internal imports:

```tsx
// ✅ Good — absolute, clear origin
import { Button } from "@/02_Design_System/components/Button";
import { Hero } from "@/03_Engineering_System/site/sections/Hero";

// ❌ Bad — relative paths break when files move
import { Button } from "../../../02_Design_System/components/Button";
```
