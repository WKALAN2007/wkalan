"use client";

import { motion } from "framer-motion";

const lines = [
  "每一个人的人生，",
  "都值得被细細品味。",
  "",
  "真正好的网站，",
  "不是展示作品。",
  "而是让人理解作品背后的人。",
  "",
  "不是数据。",
  "是故事。",
  "",
  "不是流量。",
  "是理解。",
];

export function Chapter3Philosophy() {
  return (
    <section className="bg-[var(--color-surface)] py-[var(--space-section-lg)]">
      <div className="mx-auto max-w-[var(--container-narrow)] px-[var(--container-padding)]">
        <motion.div
          className="flex flex-col gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
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
              Chapter 2
            </span>
            <div className="h-[1px] w-8 bg-[var(--color-border)]" />
          </motion.div>

          {/* Poetic lines — each one reveals slowly */}
          <div className="flex flex-col gap-5">
            {lines.map((line, i) => {
              if (line === "") {
                return <div key={i} className="h-6" />;
              }
              return (
                <motion.p
                  key={i}
                  className={`leading-relaxed tracking-[-0.01em] text-[var(--color-text-primary)] ${
                    i === 0
                      ? "font-heading text-3xl sm:text-4xl"
                      : "text-lg text-[var(--color-text-secondary)]"
                  }`}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.8,
                        delay: 0.2 + 0.15 * i,
                        ease: [0.16, 1, 0.3, 1],
                      },
                    },
                  }}
                >
                  {line}
                </motion.p>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
