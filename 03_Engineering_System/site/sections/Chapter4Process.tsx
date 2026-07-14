"use client";

import { motion } from "framer-motion";

const steps = [
  { word: "Listen", chinese: "倾听" },
  { word: "Understand", chinese: "理解" },
  { word: "Distill", chinese: "提炼" },
  { word: "Design", chinese: "设计" },
  { word: "Craft", chinese: "打磨" },
  { word: "Refine", chinese: "精炼" },
];

export function Chapter4Process() {
  return (
    <section className="bg-[var(--color-background)] py-[var(--space-section)]">
      <div className="mx-auto max-w-[var(--container-narrow)] px-[var(--container-padding)]">
        <motion.div
          className="flex flex-col gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Label */}
          <motion.div
            className="flex items-center gap-3"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.7 } },
            }}
          >
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-text-tertiary)]">
              Chapter 3
            </span>
            <div className="h-[1px] w-8 bg-[var(--color-border)]" />
          </motion.div>

          <motion.p
            className="font-heading text-3xl leading-tight text-[var(--color-text-primary)] sm:text-4xl"
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] } },
            }}
          >
            How we work.
          </motion.p>

          {/* Steps */}
          <div className="flex flex-col">
            {steps.map((step, i) => (
              <motion.div
                key={step.word}
                className="group flex items-center gap-6 border-b border-[var(--color-border)] py-6 last:border-b-0 sm:gap-10"
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7, delay: 0.3 + 0.1 * i, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
              >
                <span className="w-6 text-right font-mono text-xs text-[var(--color-text-tertiary)] transition-colors group-hover:text-[var(--color-accent)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex items-center gap-3">
                  <span className="text-lg font-medium text-[var(--color-text-primary)] transition-colors group-hover:text-[var(--color-accent)]">
                    {step.word}
                  </span>
                  <span className="text-sm text-[var(--color-text-tertiary)]">
                    {step.chinese}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
