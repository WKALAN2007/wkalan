"use client";

import { motion } from "framer-motion";

export function Chapter2Problem() {
  return (
    <section className="bg-[var(--color-background)] py-[var(--space-section-lg)]">
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
              Chapter 1
            </span>
            <div className="h-[1px] w-8 bg-[var(--color-border)]" />
          </motion.div>

          {/* The Observation */}
          <motion.div className="flex flex-col gap-8">
            <motion.p
              className="text-lg leading-relaxed text-[var(--color-text-secondary)]"
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              今天的網路上，每個人都在看數字。
            </motion.p>

            <motion.div
              className="flex flex-col gap-4"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.8, delay: 0.35, staggerChildren: 0.12 } },
              }}
            >
              {["Followers.", "Views.", "Subscribers."].map((word, i) => (
                <motion.p
                  key={word}
                  className="font-heading text-4xl tracking-[-0.01em] text-[var(--color-text-tertiary)]/40 sm:text-5xl"
                  variants={{
                    hidden: { opacity: 0, x: -16 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
                  }}
                >
                  {word}
                </motion.p>
              ))}
            </motion.div>

            <motion.div
              className="mt-4 h-[1px] w-full bg-[var(--color-border)]"
              variants={{
                hidden: { scaleX: 0 },
                visible: { scaleX: 1, transition: { duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] } },
              }}
              style={{ transformOrigin: "left" }}
            />

            <motion.p
              className="font-heading text-2xl leading-relaxed text-[var(--color-text-primary)] sm:text-3xl"
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              但，真正的人呢？
            </motion.p>

            <motion.p
              className="text-lg leading-relaxed text-[var(--color-text-secondary)]"
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              我们每天都在观看创作者，却很少真正认识他们。
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
