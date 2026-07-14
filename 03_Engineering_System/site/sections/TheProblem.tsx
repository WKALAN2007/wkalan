"use client";

import { motion } from "framer-motion";

const truths = [
  {
    metric: "播放量",
    truth: "一个数字。不是一个人格。",
    detail: "内容变成了指标——而不是了解一个人的窗口。",
  },
  {
    metric: "粉丝数",
    truth: "一个计数。不是一个故事。",
    detail: "观众在增长。但真正了解一个人，需要的不只是点一下关注。",
  },
  {
    metric: "内容",
    truth: "一个信息流。不是一个活人。",
    detail: "每一个封面背后，都是一个曾经笑过、挣扎过、梦想过的人。",
  },
];

export function TheProblem() {
  return (
    <section className="bg-[var(--color-surface)] py-[var(--space-section)]">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left: Headline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.span
              className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-text-tertiary)]"
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              The Problem
            </motion.span>
            <motion.h2
              className="mt-6 font-heading text-[var(--text-h2)] leading-[var(--leading-tight)] tracking-[-0.02em] text-[var(--color-text-primary)]"
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              被认识的
              <br />
              只有内容，
              <br />
              不是人。
            </motion.h2>
          </motion.div>

          {/* Right: Three Truths */}
          <motion.div
            className="flex flex-col gap-10 pt-0 lg:pt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          >
            {truths.map((item) => (
              <motion.div
                key={item.metric}
                variants={{
                  hidden: { opacity: 0, x: 24 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
                }}
                className="border-l-2 border-[var(--color-border)] pl-6 transition-colors duration-500 hover:border-[var(--color-accent)]/30"
              >
                <span className="text-sm font-medium tracking-[0.15em] text-[var(--color-text-tertiary)]">
                  {item.metric}
                </span>
                <p className="mt-2 text-xl leading-[var(--leading-snug)] text-[var(--color-text-primary)]">
                  {item.truth}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-text-tertiary)]">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bridge */}
        <motion.p
          className="mt-20 text-center font-heading text-xl italic text-[var(--color-text-secondary)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          但每个人，都值得被了解。
        </motion.p>
      </div>
    </section>
  );
}
