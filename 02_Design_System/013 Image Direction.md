# 013 — Image Direction

## Philosophy

**Every image must earn its place.**

Images are the heaviest elements on a page — in file size, in visual weight, in emotional impact. An image that doesn't serve the story is not neutral. It's harmful. It distracts from the images that matter.

---

## Image Types

### Photography (Primary)
Real people. Real spaces. Real moments.
**Rule:** Must be of the client or their work. Never stock. Never AI.

### Screenshots (Evidence)
Captures of work, products, interfaces.
**Rule:** Treated as documentary evidence. Clean, well-lit, properly cropped.

### Texture / Atmosphere (Background)
Subtle grain, paper texture, atmospheric elements.
**Rule:** Barely visible. Below 2% opacity. Felt, not noticed.

### Logo / Brand Marks (Identity)
Client logos, partner marks, certifications.
**Rule:** Monochrome treatment on dark backgrounds. Consistent sizing.

---

## Image Formats

| Format | Usage |
|--------|-------|
| **WebP** | Default — all photographs and screenshots. Lossy or lossless as needed. |
| **AVIF** | Next-gen — use when supported, fallback to WebP |
| **SVG** | Icons, logos, simple graphics |
| **PNG** | Only when transparency is required |
| **JPEG** | Legacy fallback only |

---

## Image Sizing

| Context | Max Width | Format |
|---------|-----------|--------|
| Full-bleed hero | 2560px | WebP, 80% quality |
| Content image | 1440px | WebP, 80% quality |
| Card thumbnail | 800px | WebP, 75% quality |
| Avatar | 200px | WebP, 85% quality |
| Logo | 400px | SVG or WebP |

---

## AI Image Policy

**WKALAN does not use AI-generated images.**

This is not a technological position. It's a philosophical one.

- AI images have no photographer. No moment. No truth.
- AI images are averages of averages — the opposite of the specific, personal, unique identity we design for.
- AI images degrade trust. When someone realizes an image isn't real, they question everything else on the page.

**The only exception:** A client whose identity IS AI — an AI researcher, an AI ethics writer, someone whose story involves AI. Even then, AI imagery must be labeled as such.

---

## Image Loading

- **Lazy loading:** All images below the fold use `loading="lazy"`
- **Eager loading:** Hero image uses `loading="eager"`
- **Blur placeholder:** Next.js `placeholder="blur"` with `blurDataURL` for all above-fold images
- **Responsive sizes:** Use Next.js `<Image>` component with proper `sizes` attribute

---

## Image Rules

### 1. One hero image per page
More than one full-bleed image dilutes the impact. The hero is special because it's the only one.

### 2. No decorative images
Every image that isn't of the client or their work should be questioned. Text + space is usually better than a decorative image.

### 3. Consistent aspect ratios within a grid
A 3-column card grid with mixed 16:9, 3:4, and 1:1 images looks chaotic. Choose one ratio per grid.

### 4. Alt text is not optional
Every `<img>` must have `alt` text. Decorative images use `alt=""`. Content images use descriptive alt text.

---

*An image without a reason is noise. An image with a reason is a witness.*
