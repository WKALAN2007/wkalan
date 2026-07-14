# 007 — React Architecture

## Philosophy

**Server components by default. Client components by necessity.**

WKALAN uses React 19 with the Next.js App Router. The architecture is built around one principle: ship as little JavaScript to the browser as possible.

---

## Component Types

### Server Components (Default)
```tsx
// No "use client" = Server Component
// Runs on the server. Zero client JavaScript.

export function ContentBlock({ data }: Props) {
  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </div>
  );
}
```

**Can:**
- Fetch data directly (async components)
- Access backend resources
- Keep large dependencies on the server

**Cannot:**
- Use hooks (useState, useEffect, etc.)
- Use browser APIs (window, document, etc.)
- Handle user interaction (onClick, onChange)

### Client Components
```tsx
"use client";

// Runs on the server AND in the browser.
// Ships JavaScript to the client.

export function InteractiveWidget() {
  const [state, setState] = useState(false);
  return <button onClick={() => setState(!state)}>Toggle</button>;
}
```

**When to use:**
- Event listeners (onClick, onChange, onScroll)
- React hooks (useState, useEffect, useRef)
- Browser APIs (window, document, IntersectionObserver)
- Animation libraries (framer-motion)
- Client-only context providers

---

## The Client Boundary

```
Server Component (layout.tsx)
  ├── Server Component (page.tsx)
  │   ├── Server Component (StaticSection)
  │   ├── Client Component (AnimatedSection)  ← "use client" boundary
  │   │   ├── Server Component (StaticCard)    ← Nested inside client still works
  │   │   └── Client Component (InteractiveCard)
  │   └── Client Component (Hero)
  └── Server Component (Footer)
```

**Rule:** Push the client boundary as deep as possible. A page with one `"use client"` section only ships JavaScript for that section — not the entire page.

---

## Data Flow

### Server → Client (Props)
```tsx
// Server component fetches data
export default async function Page() {
  const projects = await getProjects();

  return (
    // Passes data down to client components as props
    <ProjectGrid projects={projects} />
  );
}
```

### Client State (Local)
```tsx
"use client";

// Client component manages its own UI state
export function Accordion({ children }) {
  const [open, setOpen] = useState(false);
  return ...
}
```

### No Global State
WKALAN sites are content/identity sites — not applications. There is no global state (Redux, Zustand, Context). Each component manages its own UI state.

**Exception:** Future authenticated experiences (client portal, CMS preview) may require shared state.

---

## Component Composition Pattern

```tsx
// Page composes sections
export default function Page() {
  return (
    <main>
      <Hero />
      <Philosophy />
      <Journey />
      <Craft />
      <Connect />
    </main>
  );
}

// Section composes UI primitives
export function Philosophy() {
  return (
    <section>
      <Container>
        <SectionHeading />
        <p>...</p>
        <Button />
      </Container>
    </section>
  );
}
```

**Key:** Pages are thin. They compose sections. They don't contain layout logic. Sections are self-contained. They import UI primitives from `02_Design_System`.

---

## File Size Limits

| Type | Max Lines | Action if Exceeded |
|------|-----------|--------------------|
| Page | 30 | Too much logic — move to sections |
| Section | 300 | Extract sub-components |
| UI Component | 150 | May be doing too much |
| Utility | 50 | Should be focused |
