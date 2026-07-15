"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ClipReveal } from "./ClipReveal";

const features = [
  {
    number: "01",
    title: "Capture",
    line: "Bring everything in.",
    desc: "PDFs, YouTube, web pages, voice memos, meeting notes — drop anything in. No folders, no tags, no setup. It just works.",
    detail: "支援 PDF、Word、PowerPoint、網頁、YouTube、Notion、Google Docs、語音錄音、會議紀錄。AI 自動整理內容，無需手動分類。",
    image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&q=80",
  },
  {
    number: "02",
    title: "Understand",
    line: "See what it actually means.",
    desc: "AI reads with you — summarizing, explaining, answering your questions. Not replacing your thinking. Sharpening it.",
    detail: "一鍵產生重點摘要、三分鐘閱讀版、關鍵觀點、結論與行動建議。直接對文檔提問，AI 引用原文回答。",
    image: "https://images.unsplash.com/photo-1434030216411-1b79f4e147c6?w=800&q=80",
  },
  {
    number: "03",
    title: "Connect",
    line: "Find the thread.",
    desc: "Lumen maps how every idea relates. That paper from last month, today's podcast, a note from three years ago — connected before you even ask.",
    detail: "系統自動建立知識關聯——文件、影片、會議、筆記之間共同概念一目了然。知識地圖視覺化，方便探索與建立關聯。",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
  },
  {
    number: "04",
    title: "Create",
    line: "Turn thinking into output.",
    desc: "From your research to a finished proposal, report, or essay — Lumen keeps you in flow. The AI assists. The thinking is yours.",
    detail: "支援 Email、Proposal、Report、Meeting Notes、Blog、Research Paper。AI 是協助思考，不是代替思考。",
    image: "https://images.unsplash.com/photo-1455390582269-044d83d4e4c4?w=800&q=80",
  },
];

export function LumenProduct() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const toggle = (i: number) => {
    setActiveIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section
      ref={sectionRef}
      className="py-28 sm:py-40"
      style={{ background: "var(--lumen-bg)" }}
    >
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
        {/* Section header */}
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.span
            className="text-xs tracking-[0.25em] uppercase"
            style={{ color: "var(--lumen-text-tertiary)" }}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.7 } } }}
          >
            Lumen Workspace
          </motion.span>
          <motion.p
            className="mt-6 font-heading text-3xl leading-[1.15] tracking-[-0.01em] sm:text-5xl lg:text-6xl"
            style={{ color: "var(--lumen-text-primary)" }}
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } } }}
          >
            讓所有資訊都能被整理、
            <br />
            理解與連結。
          </motion.p>

          {/* Horizontal divider — alkares style */}
          <motion.div
            className="mt-12 h-[1px] w-full"
            style={{ background: "var(--lumen-border)" }}
            variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] } } }}
          />
        </motion.div>

        {/* Interactive Accordion — alkares durability style */}
        <div className="flex flex-col">
          {features.map((f, i) => {
            const isActive = activeIndex === i;

            return (
              <motion.div
                key={f.number}
                className="group cursor-pointer"
                style={{
                  borderBottom: "1px solid var(--lumen-border)",
                }}
                onClick={() => toggle(i)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { duration: 0.5, delay: 0.08 * i } },
                }}
              >
                {/* Header — always visible */}
                <div className="flex items-center gap-4 sm:gap-8 py-6 sm:py-8">
                  {/* Number */}
                  <span
                    className="font-mono text-sm sm:text-lg shrink-0 transition-colors duration-500"
                    style={{ color: isActive ? "var(--lumen-accent)" : "var(--lumen-text-tertiary)" }}
                  >
                    {f.number}
                  </span>

                  {/* Title + line */}
                  <div className="flex-1 flex items-center gap-4 min-w-0">
                    <span
                      className="text-sm sm:text-base font-medium tracking-[0.04em] uppercase shrink-0 transition-colors duration-500"
                      style={{ color: isActive ? "var(--lumen-text-primary)" : "var(--lumen-text-secondary)" }}
                    >
                      {f.title}
                    </span>
                    <span
                      className="hidden sm:block text-sm transition-colors duration-500 truncate"
                      style={{ color: "var(--lumen-text-tertiary)" }}
                    >
                      {f.line}
                    </span>
                  </div>

                  {/* Indicator */}
                  <motion.div
                    className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full"
                    style={{
                      border: `1px solid ${isActive ? "var(--lumen-accent)" : "var(--lumen-border)"}`,
                    }}
                    animate={{ rotate: isActive ? 45 : 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <span
                      className="text-lg leading-none transition-colors duration-500"
                      style={{ color: isActive ? "var(--lumen-accent)" : "var(--lumen-text-dim)" }}
                    >
                      +
                    </span>
                  </motion.div>
                </div>

                {/* Expanded content */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 sm:pb-14 grid gap-8 lg:grid-cols-2 lg:gap-16">
                        {/* Image with clip reveal */}
                        <ClipReveal direction="up" className="aspect-[4/3]" style={{ borderRadius: "var(--radius-lg)" } as React.CSSProperties}>
                          <motion.img
                            src={f.image}
                            alt={f.title}
                            className="h-full w-full object-cover"
                            initial={{ scale: 1.06 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                          />
                        </ClipReveal>

                        {/* Text */}
                        <div className="flex flex-col gap-4 justify-center">
                          <p
                            className="font-heading text-xl leading-snug sm:text-2xl"
                            style={{ color: "var(--lumen-text-primary)" }}
                          >
                            {f.line}
                          </p>
                          <p
                            className="text-sm leading-relaxed sm:text-base"
                            style={{ color: "var(--lumen-text-secondary)" }}
                          >
                            {f.desc}
                          </p>
                          {/* Vertical divider — alkares style */}
                          <div
                            className="w-[1px] h-8 my-2"
                            style={{ background: "var(--lumen-accent)", opacity: 0.4 }}
                          />
                          <p
                            className="text-sm leading-relaxed"
                            style={{ color: "var(--lumen-text-tertiary)" }}
                          >
                            {f.detail}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
