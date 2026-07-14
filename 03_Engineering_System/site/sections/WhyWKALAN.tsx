"use client";

import { motion } from "framer-motion";

const comparisons = [
  {
    them: "AI 可以生成一百个网页。",
    but: "但它不会知道你 17 岁那年夏天发生了什么。",
  },
  {
    them: "模板可以在十分钟内做好一个网站。",
    but: "但模板不认识你。它不认识任何人。",
  },
  {
    them: "代理商可以做专业的网页设计。",
    but: "但我们做的是数字身份——不是网页。是让一个人可以被了解的空间。",
  },
];

export function WhyWKALAN() {
  return (
    <section className="bg-[var(--color-surface)] py-[var(--space-section)]">
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
              Why WKALAN
            </motion.span>
            <motion.h2
              className="font-heading text-[var(--text-h2)] leading-[var(--leading-tight)] tracking-[-0.02em] text-[var(--color-text-primary)]"
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              为什么是
              <br />
              WKALAN。
            </motion.h2>
          </div>

          {/* Comparisons */}
          <div className="mx-auto flex max-w-2xl flex-col gap-10">
            {comparisons.map((row, i) => (
              <motion.div
                key={i}
                className="flex flex-col gap-2 sm:flex-row sm:gap-3"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7, delay: 0.2 + 0.15 * i, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
              >
                <span className="text-sm text-[var(--color-text-tertiary)] line-through">
                  {row.them}
                </span>
                <span className="text-sm font-medium text-[var(--color-text-primary)] sm:pl-2">
                  {row.but}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Closing line */}
          <motion.p
            className="text-sm text-[var(--color-text-tertiary)]"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.8, delay: 0.8 } },
            }}
          >
            品味人生的人，做不出千篇一律的设计。
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
