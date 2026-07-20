"use client";

import { motion } from "framer-motion";

/**
 * WKALAN Contact — 2026 rebuild
 *
 * Buffett: No pricing tiers on homepage. The work justifies the price.
 * Vignelli: One clear action. Semantic clarity.
 * Ive: The contact section itself shows care — spacing, type, restraint.
 */

export function Contact() {
  return (
    <section className="border-t border-[var(--wk-border)] bg-[var(--wk-surface)] py-[var(--space-section)]">
      <div className="mx-auto max-w-[var(--container-narrow)] px-[var(--container-padding)]">
        <motion.div
          className="flex flex-col items-center gap-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.span
            className="text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--wk-text-tertiary)]"
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            从这里开始
          </motion.span>

          <motion.h2
            className="font-[var(--font-display)] text-[var(--text-h2)] leading-[var(--leading-tight)] tracking-[-0.015em] text-[var(--wk-text-primary)]"
            style={{ fontFamily: "var(--font-display)" }}
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            一场对话。
          </motion.h2>

          <motion.p
            className="max-w-sm text-[var(--text-body)] leading-relaxed text-[var(--wk-text-secondary)]"
            variants={{
              hidden: { opacity: 0, y: 8 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            一小时。不说服。我们聊你——你做什么、
            你需要什么、我们是否合适。如果合适，我会告诉你
            具体多少钱、什么时候交付。
          </motion.p>

          <motion.a
            href="mailto:hello@wkalan.com"
            className="mt-4 inline-flex items-center gap-3 rounded-lg bg-[var(--wk-text-primary)] px-8 py-4 text-[var(--text-body)] font-medium text-white transition-all hover:bg-[var(--wk-accent)]"
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            hello@wkalan.com &rarr;
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
