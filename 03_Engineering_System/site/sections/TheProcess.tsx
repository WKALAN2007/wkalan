"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "01", word: "倾听", en: "Listen", desc: "几小时的对话。不是问卷。是聊天。不急。不赶。品味你的人生。" },
  { num: "02", word: "理解", en: "Understand", desc: "从几千字的对话里，找到三个真正属于你的关键词。不是我们编的——是从你的故事里长出来的。" },
  { num: "03", word: "雕刻", en: "Carve", desc: "开始设计。去掉不属于你的。留下本质。每一个颜色、每一个字距、每一个动画——都有来处。" },
  { num: "04", word: "呈现", en: "Reveal", desc: "上线。不是交付。是诞生。一个陌生人走进去，离开时觉得自己认识了一个人。" },
];

export function TheProcess() {
  return (
    <section id="process" className="bg-[var(--color-surface)] py-[var(--space-section)]">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
        <motion.div
          className="mb-16 flex flex-col items-center gap-4 text-center"
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
            The Process
          </motion.span>
          <motion.div
            className="h-[1px] w-12 bg-[var(--color-accent)]/30"
            variants={{
              hidden: { scaleX: 0 },
              visible: { scaleX: 1, transition: { duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] } },
            }}
            style={{ transformOrigin: "center" }}
          />
        </motion.div>

        <div className="mx-auto max-w-2xl">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="group flex gap-6 border-b border-[var(--color-border)] py-8 last:border-b-0 sm:gap-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              <span className="font-mono text-sm text-[var(--color-text-tertiary)] transition-colors group-hover:text-[var(--color-accent)]">
                {step.num}
              </span>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-medium text-[var(--color-text-primary)]">
                    {step.word}
                  </h3>
                  <span className="text-xs tracking-[0.15em] text-[var(--color-text-tertiary)]">
                    {step.en}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bridge */}
        <motion.p
          className="mt-16 text-center text-sm text-[var(--color-text-tertiary)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          看我们为别人做了什么 &darr;
        </motion.p>
      </div>
    </section>
  );
}
