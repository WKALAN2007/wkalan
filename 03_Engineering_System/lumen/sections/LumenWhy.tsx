"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    label: "資訊爆炸的時代",
    text: "人們每天閱讀大量文件、參加會議、觀看影片、整理筆記。但真正的挑戰從來不是資訊不足，而是無法理解、整理與運用。現有的工具讓人們更忙碌，而不是更清晰。",
  },
  {
    label: "The real problem",
    text: "If the greatest minds in history — Einstein, Curie, Turing — did their best work with just a notebook and a quiet room, why do we believe that more information, more notifications, and more AI chats will make us think better? Knowledge without understanding is just noise.",
  },
  {
    label: "So we built Lumen",
    text: "Not another AI chatbot. Not another productivity app. Lumen 是一個以 AI 為核心的知識工作平台，協助人們建立屬於自己的知識系統，讓每一次閱讀都能轉化成真正的理解。",
  },
];

export function LumenWhy() {
  return (
    <section className="py-28 sm:py-40" style={{ background: "var(--lumen-bg-surface)" }}>
      <div className="mx-auto max-w-[var(--container-narrow)] px-[var(--container-padding)]">
        <motion.span
          className="text-xs tracking-[0.25em] uppercase"
          style={{ color: "var(--lumen-text-tertiary)" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.7 } } }}
        >
          Why we started
        </motion.span>
        <div className="mt-16 flex flex-col gap-16">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.label}
              className="flex flex-col gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-6" style={{ background: "var(--lumen-accent)" }} />
                <span className="text-xs font-medium uppercase tracking-[0.12em]" style={{ color: "var(--lumen-accent)" }}>{reason.label}</span>
              </div>
              <p className="text-base leading-relaxed sm:text-lg" style={{ color: "var(--lumen-text-secondary)" }}>{reason.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
