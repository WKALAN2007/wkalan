# 001 — Architecture

## Overview

WKALAN uses **Next.js 16 App Router** with a route-group-based multi-site architecture. Three independent websites share one codebase, one design system, and one set of engineering standards.

---

## Architectural Principles

### 1. Route Groups for Domain Separation
Each "site" within WKALAN is a Next.js route group. Route groups share the root layout (fonts, metadata, HTML shell) but have independent layouts (headers, footers, scroll behavior).

### 2. Feature-Based Organization
Code is organized by feature (site, section, component), not by type (all hooks together, all utils together). Related code lives together.

### 3. Shared Design System
`02_Design_System/` is the single source of truth for all visual primitives. Every site imports from it. No site duplicates design system code.

### 4. Server by Default
Components are server components unless they need interactivity. Keep the client boundary as small as possible.

---

## Directory Map

```
wkalan/
├── app/                                    # Next.js App Router
│   ├── layout.tsx                          # Root: fonts, metadata, HTML shell
│   ├── globals.css                         # Global styles + @theme
│   │
│   ├── (site)/                             # WKALAN main site → /
│   │   ├── layout.tsx                      # Site layout (Header, Footer, etc.)
│   │   └── page.tsx                        # Homepage composition
│   │
│   ├── (fashion)/                          # NKSEN fashion → /fashion
│   │   ├── layout.tsx
│   │   └── fashion/page.tsx
│   │
│   └── (basketball)/                       # 小白剪了個球 → /basketball
│       ├── layout.tsx
│       └── basketball/page.tsx
│
├── 01_Brand_System/                        # Why we exist
├── 02_Design_System/                       # How it looks
│   ├── tokens.css                          # CSS custom properties
│   ├── components/                         # Reusable UI primitives
│   └── lib/                                # Shared utilities
│
├── 03_Engineering_System/                  # How it works ← THIS IS IT
│   ├── site/                               # WKALAN main site components
│   │   ├── layout/                         # Header, Footer, SmoothScroll, PageLoader
│   │   └── sections/                       # Hero, Problem, Belief, Process, Work, Founder, CTA
│   ├── fashion/                            # Fashion site components
│   └── basketball/                         # Basketball site components
│
├── 04_Business_System/                     # How it grows
├── 05_AI_System/                           # AI prompts and rules
├── 06_Knowledge_Base/                       # Research and references
└── 07_Playbooks/                            # SOPs and workflows
```

---

## Data Flow

```
User Request
  ↓
Next.js App Router (app/)
  ↓ matches route group
  ↓
Route Group Layout ((site) | (fashion) | (basketball))
  ↓ wraps page
  ↓
Page Component (page.tsx)
  ↓ composes sections
  ↓
Section Components (03_Engineering_System/*/sections/)
  ↓ uses UI primitives
  ↓
Design System Components (02_Design_System/components/)
  ↓ reads tokens
  ↓
CSS Custom Properties (02_Design_System/tokens.css)
  ↓
Rendered Page
```

---

## Key Decisions

### Why route groups instead of separate apps?
- Shared design system — update tokens once, all sites benefit
- Shared layout primitives — SmoothScroll, fonts, metadata
- Single deployment — one Vercel project, three sites
- Easier maintenance — one codebase, one CI, one set of dependencies

### Why feature-based over type-based?
- Related code lives together
- Easier to onboard new developers
- Clearer ownership: "I'm working on the fashion site" = one directory

### Why server components by default?
- Better performance (less client JS)
- SEO-friendly (content rendered on server)
- Simpler mental model (no useEffect for data fetching)
