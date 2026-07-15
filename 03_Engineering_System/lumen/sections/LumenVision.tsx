"use client";

import { motion } from "framer-motion";

export function LumenVision() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden" style={{ background: "var(--lumen-bg)" }}>
      <div className="relative z-10 mx-auto max-w-[var(--container-narrow)] px-[var(--container-padding)] text-center">
        <motion.span
          className="text-xs tracking-[0.25em] uppercase" style={{ color: "var(--lumen-text-dim)" }}
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={{ hidden: { opacity: 0, filter: "blur(4px)" }, visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.8 } } }}
        >
          Mission & Vision
        </motion.span>
        <motion.p
          className="mt-16 font-heading text-3xl leading-[1.15] tracking-[-0.01em] sm:text-5xl md:text-6xl"
          style={{ color: "var(--lumen-text-primary)" }}
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: { opacity: 0, y: 40, filter: "blur(8px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } } }}
        >
          幫助每一個人，在資訊爆炸的時代，
          <br />
          依然能夠清晰地思考。
        </motion.p>
        <motion.div
          className="mx-auto mt-12 h-[1px] w-16" style={{ background: "var(--lumen-border-strong)" }}
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={{ hidden: { scaleX: 0, filter: "blur(2px)" }, visible: { scaleX: 1, filter: "blur(0px)", transition: { duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] } } }}
        />
        <motion.p
          className="mx-auto mt-10 max-w-md text-sm leading-relaxed sm:text-base"
          style={{ color: "var(--lumen-text-tertiary)" }}
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: { opacity: 0, y: 16, filter: "blur(4px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] } } }}
        >
          成為全球最值得信任的 AI 知識工作平台，讓每一個學生、創作者、研究者與創業者，都能建立屬於自己的知識系統，並將知識轉化為真正的價值。
        </motion.p>
      </div>
    </section>
  );
}
