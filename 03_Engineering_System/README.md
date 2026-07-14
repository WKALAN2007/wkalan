# 03_Engineering_System

## Overview

The WKALAN Engineering System defines **how we build.** It covers architecture, coding standards, technology choices, and quality gates.

## Structure

```
03_Engineering_System/
├── README.md
├── 000 Engineering Philosophy.md     ← Core beliefs
├── 001 Architecture.md               ← System design
├── 002 Tech Stack.md                 ← Technology choices + rationale
├── 003 Folder Structure.md           ← File organization
├── 004 Coding Standards.md           ← How we write code
├── 007 React Architecture.md         ← Server/Client component patterns
├── 012 Animation Architecture.md     ← framer-motion + Lenis stack
├── 023 AI Coding Rules.md            ← AI usage guidelines
├── 029 Engineering Checklist.md      ← Pre-deployment quality gate
│
├── site/                             ← WKALAN main site components
├── fashion/                          ← NKSEN fashion site components
├── basketball/                       ← Basketball creator site components
└── constants/                        ← Shared constants
```

## Key Principles

1. **Server components by default** — Client boundary pushed as deep as possible
2. **Feature-based organization** — Related code lives together
3. **One design system** — `02_Design_System/` is the single source of truth
4. **Route groups** — Multi-site architecture from one codebase
5. **AI accelerates, humans decide** — Every AI-generated line must pass review

## Quick Links

- **Tech Stack:** See `002 Tech Stack.md`
- **Coding Standards:** See `004 Coding Standards.md`
- **Before Shipping:** See `029 Engineering Checklist.md`
