"use client";

import { motion } from "framer-motion";

const beliefs = [
  {
    label: "01",
    title: "科技不應該讓世界變得更複雜。",
    subtitle: "Technology should make the world easier to understand, not harder.",
    body: "我們相信，科技應該讓人更容易理解世界。在 Lumen，我們不追求更快的運算、更多的功能，而是追求更清晰的理解。",
  },
  {
    label: "02",
    title: "AI 不應該代替思考。",
    subtitle: "AI should sharpen thinking, not replace it.",
    body: "真正偉大的產品，不是讓使用者依賴它，而是讓使用者變得更有能力。我們不是打造一個更聰明的 AI，我們是在打造一個能陪伴人類思考的工具。",
  },
  {
    label: "03",
    title: "真正的價值在於轉化。",
    subtitle: "The value is in transformation, not collection.",
    body: "收集資訊從來不是目的。將資訊轉化為理解，將理解轉化為決策，將決策轉化為行動——這才是 Lumen 存在的意義。",
  },
];

export function LumenBehind() {
  return (
    <section className="py-28 sm:py-40" style={{ background: "var(--lumen-bg-surface)" }}>
      <div className="mx-auto max-w-[var(--container-narrow)] px-[var(--container-padding)]">
        <motion.span
          className="text-xs tracking-[0.25em] uppercase" style={{ color: "var(--lumen-text-tertiary)" }}
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.7 } } }}
        >
          Our Philosophy
        </motion.span>
        <motion.p
          className="mt-6 font-heading text-3xl leading-[1.15] tracking-[-0.01em] sm:text-5xl"
          style={{ color: "var(--lumen-text-primary)" }}
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}
        >
          我們相信。
          <br />
          What we believe.
        </motion.p>
        <div className="mt-16 flex flex-col gap-16">
          {beliefs.map((b, i) => (
            <motion.div
              key={b.label}
              className="flex flex-col gap-4 border-b pb-16 last:border-b-0 last:pb-0"
              style={{ borderColor: "var(--lumen-border)" }}
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] } } }}
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm" style={{ color: "var(--lumen-accent)" }}>{b.label}</span>
                <span className="h-[1px] w-6" style={{ background: "var(--lumen-accent)" }} />
              </div>
              <p className="font-heading text-xl leading-snug sm:text-2xl" style={{ color: "var(--lumen-text-primary)" }}>{b.title}</p>
              <p className="text-sm" style={{ color: "var(--lumen-text-tertiary)" }}>{b.subtitle}</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--lumen-text-secondary)" }}>{b.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
