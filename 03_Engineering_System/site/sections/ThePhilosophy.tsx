"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    word: "品味",
    en: "Savor",
    desc: "在画任何图之前，我们先聊。几十个小时。不急。不赶。品味这个人一生中，那些重要的、普通的、被遗忘的、值得记住的时刻。",
  },
  {
    word: "雕刻",
    en: "Carve",
    desc: "从品味到的故事里，找到只属于他的关键词。去掉多余的。留下本质。每一个像素、每一个字、每一个动画——都有来处。",
  },
  {
    word: "呈现",
    en: "Reveal",
    desc: "最终不是一个网站。是一个让人可以被了解的空间。一个陌生人走进去，离开时觉得自己认识了一个人。",
  },
];

export function ThePhilosophy() {
  return (
    <section className="bg-[var(--color-background)] py-[var(--space-section)]">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
        <motion.div
          className="flex flex-col items-center gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Header */}
          <div className="flex flex-col items-center gap-4 text-center">
            <motion.span
              className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-text-tertiary)]"
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              我们的方式
            </motion.span>
            <motion.div
              className="h-[1px] w-12 bg-[var(--color-accent)]/30"
              variants={{
                hidden: { scaleX: 0 },
                visible: { scaleX: 1, transition: { duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] } },
              }}
              style={{ transformOrigin: "center" }}
            />
          </div>

          {/* Three Pillars */}
          <div className="grid gap-10 sm:grid-cols-3">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.word}
                className="flex flex-col items-center gap-4 text-center"
                variants={{
                  hidden: { opacity: 0, y: 32 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
              >
                <span className="font-heading text-5xl tracking-[-0.02em] text-[var(--color-text-primary)]">
                  {pillar.word}
                </span>
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-text-tertiary)]">
                  {pillar.en}
                </span>
                <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom line */}
          <motion.p
            className="text-sm text-[var(--color-text-tertiary)]"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.8, delay: 0.6 } },
            }}
          >
            好的设计从不随机。
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
