"use client";

import { motion } from "framer-motion";

const values = [
  { number: "01", title: "Clarity First", body: "清晰，永遠比複雜更有力量。Clear is always more powerful than clever. Every feature we ship must make thinking easier — not add another layer of complexity." },
  { number: "02", title: "Human Before AI", body: "AI 是工具，人永遠是主角。AI is the tool. People are the point. Every decision starts with a single question: does this help someone understand?" },
  { number: "03", title: "Think Deeply", body: "真正重要的不是知道更多，而是理解更深。Knowing more is easy. Understanding deeply is rare. We design for depth — giving people the space, the quiet, and the tools to do their best thinking." },
  { number: "04", title: "Build With Purpose", body: "每一個功能，都應該解決真正的問題，而不是追逐潮流。Every feature must earn its place by solving a real problem. We don't chase trends. We build what actually matters." },
];

export function LumenValues() {
  return (
    <section className="py-28 sm:py-40" style={{ background: "var(--lumen-bg-surface)" }}>
      <div className="mx-auto max-w-[var(--container-narrow)] px-[var(--container-padding)]">
        <motion.span
          className="text-xs tracking-[0.25em] uppercase" style={{ color: "var(--lumen-text-tertiary)" }}
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.7 } } }}
        >
          Our Values
        </motion.span>
        <motion.p
          className="mt-6 font-heading text-3xl leading-[1.15] tracking-[-0.01em] sm:text-5xl"
          style={{ color: "var(--lumen-text-primary)" }}
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}
        >
          What we believe.
        </motion.p>
        <div className="mt-16 flex flex-col">
          {values.map((v, i) => (
            <motion.div
              key={v.number}
              className="flex flex-col gap-4 border-b py-10 last:border-b-0 sm:flex-row sm:gap-10"
              style={{ borderColor: "var(--lumen-border)" }}
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.12 * i, ease: [0.16, 1, 0.3, 1] } } }}
            >
              <span className="font-mono text-sm shrink-0" style={{ color: "var(--lumen-accent)" }}>{v.number}</span>
              <div className="flex flex-col gap-2">
                <p className="text-lg font-medium" style={{ color: "var(--lumen-text-primary)" }}>{v.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--lumen-text-secondary)" }}>{v.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
