"use client";

import { motion } from "framer-motion";
import { BittenButton } from "../layout/BittenButton";

export function LumenCTA() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center px-6" style={{ background: "var(--lumen-bg)" }}>
      <motion.div
        className="flex flex-col items-center gap-8 text-center"
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
      >
        <motion.span
          className="text-xs tracking-[0.25em] uppercase" style={{ color: "var(--lumen-text-dim)" }}
          variants={{ hidden: { opacity: 0, filter: "blur(4px)" }, visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.8 } } }}
        >
          Get in touch
        </motion.span>
        <motion.h2
          className="font-heading text-3xl leading-[1.15] tracking-[-0.01em] sm:text-5xl"
          style={{ color: "var(--lumen-text-primary)" }}
          variants={{ hidden: { opacity: 0, y: 40, filter: "blur(8px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } } }}
        >
          這家公司真的理解，
          <br />
          人們在資訊爆炸的時代最需要的是什麼。
        </motion.h2>
        <motion.p
          className="max-w-md text-sm leading-relaxed sm:text-base"
          style={{ color: "var(--lumen-text-secondary)" }}
          variants={{ hidden: { opacity: 0, y: 20, filter: "blur(4px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] } } }}
        >
          當你離開 Lumen 的網站時，我們希望你不是記住某個 AI 功能，而是記住一句話——這是一家真正理解你的人，所打造的公司。
        </motion.p>
        <motion.div
          variants={{ hidden: { opacity: 0, filter: "blur(4px)" }, visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.8, delay: 0.6 } } }}
        >
          <BittenButton href="mailto:hello@lumen.so" variant="accent">
            hello@lumen.so
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M1 11L11 1M11 1H3M11 1V9" />
            </svg>
          </BittenButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
