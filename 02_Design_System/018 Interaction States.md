# 018 — Interaction States

## Philosophy

**Every state is a conversation. Don't go silent.**

Every interactive element in a WKALAN project exists in one of six states. Each state communicates something different. A well-designed element is clear in every state. A poorly designed one disappears.

---

## The Six States

### 1. Default
*The element at rest. Its natural state.*

- Visible, accessible, clear purpose
- Consistent with the rest of the design system
- Not calling attention to itself

### 2. Hover
*The cursor touches the element. The element acknowledges.*

- Immediate feedback (100ms or less for color)
- Subtle transformation (scale, lift, underline reveal)
- Communicates: "I'm interactive. Click me."

### 3. Focus
*The element is selected via keyboard navigation.*

- Visible focus ring: 2px `--color-accent`, offset 2px
- Same visual weight as hover, different style (ring vs fill)
- Communicates: "You're here. Press Enter to activate."

### 4. Active / Pressed
*The element is being clicked or tapped.*

- Subtle scale down (0.98) or background darkening
- Duration: instant (100ms)
- Communicates: "I felt that. Processing."

### 5. Loading
*The action is in progress. Please wait.*

- Spinner or skeleton — never a frozen button
- The element is disabled during loading
- Communicates: "Working on it. This won't take long."

### 6. Disabled
*The action is not available right now.*

- Reduced opacity (40%–50%)
- `cursor: not-allowed`
- `pointer-events: none`
- Communicates: "Not available. No need to click."

---

## State by Component

| Component | Default | Hover | Focus | Active | Loading | Disabled |
|-----------|---------|-------|-------|--------|---------|----------|
| **Button** | Accent bg, white text | Darker accent | Focus ring | Scale 0.98 | Spinner + disabled | 40% opacity |
| **Link** | Accent color | Underline + darker | Focus ring | Color shift | N/A | 40% opacity |
| **Input** | Border, no fill | Border darkens | Focus ring + accent border | Border accent | N/A | 40% opacity |
| **Card (clickable)** | Flat, no shadow | Lift + shadow | Focus ring | Scale 0.98 | N/A | N/A |
| **Icon button** | Current color | Opacity 0.7 | Focus ring | Opacity 0.5 | N/A | 40% opacity |

---

## State Rules

### 1. Never remove focus
`:focus-visible` is mandatory on every interactive element. Removing it (`outline: none` without replacement) is an accessibility violation.

### 2. Loading state replaces the label
A button in loading state shows a spinner, not the original text. "Submit" becomes a spinner. This prevents double-clicks and communicates progress.

### 3. Disabled is not the same as loading
Loading = "wait, something is happening." Disabled = "this action is not available." The visual treatment should be different enough to distinguish.

### 4. Hover and focus should have equal visual weight
Keyboard users deserve the same feedback as mouse users. The focus ring should be as visible as the hover effect.

### 5. Active state is the fastest
The pressed/active state should be nearly instant (100ms). It confirms physical interaction. Slow active states feel laggy.

---

*An element without clear states is like a person without facial expressions — hard to read, hard to trust.*
