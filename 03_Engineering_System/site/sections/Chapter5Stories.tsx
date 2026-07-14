"use client";

import { motion } from "framer-motion";

const stories = [
  {
    name: "Akira Mori",
    description: "紀錄片攝影師。不是展示作品，而是讓你慢慢認識一個人——他的眼睛、他的沉默、他選擇看見什麼。",
    href: "/mori",
  },
  {
    name: "NKSEN",
    description: "一个时装品牌的数字身份。安静、编辑感、让衣服自己说话。",
    href: "/fashion",
  },
];

export function Chapter5Stories() {
  return (
    <section className="bg-[var(--color-surface)] py-[var(--space-section)]">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
        <motion.div
          className="flex flex-col gap-12"
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
              Chapter 4
            </span>
            <div className="h-[1px] w-8 bg-[var(--color-border)]" />
          </motion.div>

          <motion.h2
            className="font-heading text-3xl leading-tight text-[var(--color-text-primary)] sm:text-4xl"
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] } },
            }}
          >
            Stories We&apos;ve Crafted.
          </motion.h2>

          <div className="grid gap-8 sm:grid-cols-2">
            {stories.map((story, i) => (
              <motion.a
                key={story.name}
                href={story.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border border-[var(--color-border)] bg-[var(--color-background)] p-8 transition-all duration-500 hover:border-[var(--color-accent)]/30 hover:shadow-[var(--shadow-lg)]"
                variants={{
                  hidden: { opacity: 0, y: 32, scale: 0.97 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.7, delay: 0.3 + 0.15 * i, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
              >
                <h3 className="font-heading text-2xl text-[var(--color-text-primary)] transition-colors group-hover:text-[var(--color-accent)]">
                  {story.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {story.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-1 text-xs font-medium uppercase tracking-[0.15em] text-[var(--color-accent)] transition-all group-hover:gap-2">
                  View Project <span>&rarr;</span>
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
