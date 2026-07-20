"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "01", word: "聊", en: "Chat", desc: "一小时视频通话。了解你。你做什么、你在乎什么、你想要什么样的网上空间。" },
  { num: "02", word: "设计", en: "Design", desc: "三天。从你身上长出来的设计。不是从模板库里选的——是围绕你做的。" },
  { num: "03", word: "开发", en: "Build", desc: "两天。Next.js + Tailwind。响应式。快。干净。没有多余的东西。" },
  { num: "04", word: "上线", en: "Launch", desc: "你的网站上线了。一个围绕你的地方。不是B站主页。不是微博。是你的。" },
];

export function TheProcess() {
  return (
    <section id="process" className="bg-[var(--wk-surface)] py-[var(--space-section)]">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
        <motion.div
          className="mb-16 flex flex-col items-center gap-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.span
            className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--wk-text-tertiary)]"
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
            }}
          >
            怎么做
          </motion.span>
          <motion.h2
            className="font-[var(--font-display)] text-[var(--text-h2)] leading-[var(--leading-tight)] tracking-[-0.015em] text-[var(--wk-text-primary)]"
            style={{ fontFamily: "var(--font-display)" }}
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] } },
            }}
          >
            围绕你而建。
          </motion.h2>
        </motion.div>

        <div className="mx-auto max-w-2xl">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="group flex gap-6 border-b border-[var(--wk-border)] py-8 last:border-b-0 sm:gap-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              <span className="font-mono text-sm text-[var(--wk-text-tertiary)] transition-colors group-hover:text-[var(--wk-accent)]">
                {step.num}
              </span>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-medium text-[var(--wk-text-primary)]">
                    {step.word}
                  </h3>
                  <span className="text-xs tracking-[0.15em] text-[var(--wk-text-tertiary)]">
                    {step.en}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-[var(--wk-text-secondary)]">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
