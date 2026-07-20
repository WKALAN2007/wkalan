"use client";

import { motion } from "framer-motion";

/**
 * WKALAN Approach — 2026 rebuild
 *
 * Fukasawa: Not a 3-step diagram. A natural description of how it happens.
 * Jobs: Cut the process explanation. The work proves the process.
 * Vignelli: Design is one. From conversation to launch — it's all design.
 *
 * Replaces the old "TheProcess" section.
 */

export function Approach() {
  return (
    <section className="border-t border-[var(--wk-border)] bg-[var(--wk-bg)] py-[var(--space-section)]">
      <div className="mx-auto max-w-[var(--container-narrow)] px-[var(--container-padding)]">
        <motion.div
          className="flex flex-col gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Label */}
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
            工作方式          </motion.span>

          {/* Body — single flowing paragraph. No numbered steps. */}
          <motion.div
            className="flex flex-col gap-5"
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            <p className="text-[var(--text-h3)] leading-[var(--leading-snug)] text-[var(--wk-text-primary)]">
              我们聊一个小时。我倾听——真正地听。
              不是听一份需求清单，而是听你如何描述自己、
              你的工作、你在乎的东西。
            </p>

            <p className="text-[var(--text-body)] leading-relaxed text-[var(--wk-text-secondary)]">
              设计从那场对话中生长出来。字体、间距、颜色、
              动态——每个选择都追溯到你说过的某句话。不是模板。
              不是外部强加的品味。是一个感觉像你的网站，
              因为它从你开始。
            </p>

            <p className="text-[var(--text-body)] leading-relaxed text-[var(--wk-text-secondary)]">
              然后我把它做出来。结果是一个网站，你可以交给任何人说：
              这就是我。被认真对待。
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
