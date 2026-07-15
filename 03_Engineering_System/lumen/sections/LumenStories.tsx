"use client";

import { motion } from "framer-motion";

const stories = [
  {
    name: "Elena, PhD Researcher",
    quote: "Before Lumen, my literature review was spread across 47 PDFs, 12 browser tabs, and a Notion page I couldn't find anymore. Now everything is connected. I can trace an idea from a 1998 paper to a YouTube talk last week — in seconds.",
    role: "Computational Biology · University of Cambridge",
  },
  {
    name: "Marcus, Founder",
    quote: "As a solo founder, I'm drowning in information. Lumen doesn't just organize it. It helps me see the patterns. Last month I found a connection between two unrelated pieces of research that became the foundation of our pivot.",
    role: "Early-stage Startup · Berlin",
  },
  {
    name: "Yuki, Design Director",
    quote: "I was skeptical of anything with AI in it. But Lumen is different. It doesn't try to replace my thinking — it creates space for it. The quietest, most focused tool I've ever used.",
    role: "Design Agency · Tokyo",
  },
];

export function LumenStories() {
  return (
    <section className="py-28 sm:py-40" style={{ background: "var(--lumen-bg)" }}>
      <div className="mx-auto max-w-[var(--container-narrow)] px-[var(--container-padding)]">
        <motion.span
          className="text-xs tracking-[0.25em] uppercase" style={{ color: "var(--lumen-text-tertiary)" }}
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.7 } } }}
        >
          Stories
        </motion.span>
        <motion.p
          className="mt-6 font-heading text-3xl leading-[1.15] tracking-[-0.01em] sm:text-5xl"
          style={{ color: "var(--lumen-text-primary)" }}
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}
        >
          Real stories from real people.
        </motion.p>
        <div className="mt-16 flex flex-col gap-14">
          {stories.map((story, i) => (
            <motion.div
              key={story.name}
              className="flex flex-col gap-4 border-b pb-14 last:border-b-0 last:pb-0"
              style={{ borderColor: "var(--lumen-border)" }}
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.12 * i, ease: [0.16, 1, 0.3, 1] } } }}
            >
              <p className="font-heading text-lg leading-relaxed italic sm:text-xl" style={{ color: "var(--lumen-text-primary)" }}>
                &ldquo;{story.quote}&rdquo;
              </p>
              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium" style={{ color: "var(--lumen-text-primary)" }}>{story.name}</span>
                <span className="text-xs" style={{ color: "var(--lumen-text-tertiary)" }}>{story.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
