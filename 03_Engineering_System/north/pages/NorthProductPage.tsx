"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const features = [
  {
    title: "Understand",
    line: "See the threads that connect your memories.",
    body: "North doesn't just store files. It understands who is in each photo, where it was taken, and how it relates to everything else in your archive. Upload a photograph from 1995, and North will connect it to the voice memo you recorded last week about that exact moment — even if you forgot the connection existed.",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&q=80",
    how: "Computer vision models identify people, places, objects, and handwriting. Audio processing transcribes and indexes every word. All processing happens on-device before anything touches the cloud.",
  },
  {
    title: "Organize",
    line: "Not folders. Not tags. Stories that make sense.",
    body: "Folders are how computers think. Timelines are how people remember. North weaves your photos, voice memos, and videos into living timelines — by person, by place, by the moments that defined a year.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
    how: "A knowledge graph maps relationships between every piece of content you add. It learns from how you organize, but never makes decisions for you.",
  },
  {
    title: "Preserve",
    line: "What matters shouldn't depend on a hard drive.",
    body: "Every memory you add to North is encrypted, distributed across multiple geographic regions, and stored in open, documented formats designed to be readable for a century.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80",
    how: "Format-agnostic storage with embedded metadata. Every file has a checksum, a creation timestamp, and a plain-text description. We call it the 'hundred-year guarantee.'",
  },
];

const faq = [
  { q: "Who owns my data?", a: "You do. Always. North stores your memories, but you retain full ownership and can export everything — including the knowledge graph connections — at any time, in open formats." },
  { q: "What happens if North shuts down?", a: "We've designed for this from day one. All your content is stored in documented, open formats with embedded recovery instructions. You can download your entire archive with one click." },
  { q: "How is this different from cloud storage?", a: "Cloud storage treats your memories as files. North treats them as stories. A story knows who is in it, when it happened, what was said, and how it connects to everything else in your life." },
  { q: "Is my data used to train AI models?", a: "Never. The AI that helps organize your memories runs on your device and learns only from your data." },
  { q: "Can my family access my memories?", a: "You decide. North supports shared family archives where multiple people can contribute. Every person controls their own privacy settings." },
];

export function NorthProductPage() {
  return (
    <main className="bg-white">
      {/* Back button */}
      <div className="fixed left-8 top-24 z-40">
        <Link
          href="/north"
          className="flex items-center gap-2 text-xs tracking-[0.08em] text-[var(--color-text-tertiary)] no-underline transition-colors hover:text-[var(--color-accent)]"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M10 3L5 8l5 5" />
          </svg>
          Back
        </Link>
      </div>

      {/* Hero */}
      <section className="flex min-h-[60vh] items-center justify-center px-8 pt-20 text-center">
        <div className="mx-auto max-w-[var(--container-narrow)]">
          <motion.span
            className="text-xs tracking-[0.25em] text-[var(--color-text-tertiary)]"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}
          >
            UNDERSTAND
          </motion.span>
          <motion.h1
            className="mt-8 font-heading text-4xl leading-[1.1] tracking-[-0.01em] text-[var(--color-text-primary)] sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            One place for every memory
            <br />
            that matters.
          </motion.h1>
          <motion.p
            className="mt-6 mx-auto max-w-lg text-base leading-relaxed text-[var(--color-text-secondary)]"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            North is not cloud storage. It is not a photo app. It is a living archive designed to preserve your family&apos;s stories across generations.
          </motion.p>
        </div>
      </section>

      {/* Features */}
      {features.map((f, i) => (
        <section key={f.title} className={`px-8 py-20 sm:px-16 sm:py-28 ${i % 2 === 1 ? "bg-[var(--color-surface)]" : "bg-white"}`}>
          <div className="mx-auto grid max-w-[var(--container-max)] gap-12 lg:grid-cols-2 lg:gap-20">
            <motion.div
              className="flex flex-col justify-center gap-4"
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}
            >
              <span className="text-xs tracking-[0.12em] text-[var(--color-accent)]">{f.title}</span>
              <h2 className="font-heading text-3xl leading-[1.2] tracking-[-0.01em] text-[var(--color-text-primary)] sm:text-4xl">{f.line}</h2>
              <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">{f.body}</p>
              <div className="mt-4 border-l-2 border-[var(--color-accent)]/20 pl-4">
                <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-[var(--color-accent)]">How it works</span>
                <p className="mt-1 text-sm leading-relaxed text-[var(--color-text-tertiary)]">{f.how}</p>
              </div>
            </motion.div>
            <motion.div
              className="aspect-[4/3] overflow-hidden bg-[var(--color-surface)]"
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] } } }}
            >
              <img src={f.image} alt={f.title} className="h-full w-full object-cover" loading="lazy" />
            </motion.div>
          </div>
        </section>
      ))}

      {/* FAQ */}
      <section className="bg-white px-8 py-28 sm:px-16 sm:py-36">
        <div className="mx-auto max-w-[var(--container-narrow)]">
          <motion.span
            className="text-xs tracking-[0.25em] text-[var(--color-text-tertiary)]"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.7 } } }}
          >
            FAQ
          </motion.span>
          <div className="mt-12 flex flex-col">
            {faq.map((item, i) => (
              <motion.div
                key={item.q}
                className="border-b border-[var(--color-border)] py-8 last:border-b-0"
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] } } }}
              >
                <p className="font-medium text-[var(--color-text-primary)]">{item.q}</p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
