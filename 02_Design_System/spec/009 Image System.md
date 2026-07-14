# 009 — Image System

## Philosophy

**Every image must earn its place.**

Images are the heaviest elements on a page — in file size, visual weight, and emotional impact. An image that doesn't serve the story is not neutral. It's harmful. It distracts from the images that matter.

---

## Principles

### No decorative images.
Every image must be of the client, their work, or their world. "It looked empty" is not a reason to add an image.

### Consistent ratios within a grid.
One grid = one aspect ratio. Mixed ratios feel chaotic.

### Alt text is not optional.
Every `<img>` has descriptive `alt` text. Content images describe the content. Decorative images use `alt=""`.

---

## Specification

| Format | Usage |
|--------|-------|
| **WebP** | Default for all photographs |
| **AVIF** | Next-gen, WebP fallback |
| **SVG** | Icons, logos |
| **PNG** | Transparency only |
| **JPEG** | Legacy fallback |

### Image Sizing
Hero: 2560px, 80% quality. Content: 1440px, 80%. Card thumbnail: 800px, 75%. Avatar: 200px, 85%.

### Loading
Above-fold: `priority`, `loading="eager"`. Below-fold: `loading="lazy"`. Next.js `<Image>` with `placeholder="blur"`.

---

## Examples

### ✅ Correct
> A creator's site. Four images total. One hero portrait. Three work samples. Each image tells you something about the person. No filler.

### ❌ Incorrect
> 15 stock photos across 5 sections. Hero: smiling businesspeople. About: handshake. Contact: headset operator. None of them are the client.
