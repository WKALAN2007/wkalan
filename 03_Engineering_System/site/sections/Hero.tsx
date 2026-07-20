"use client";

import { motion } from "framer-motion";

/**
 * WKALAN Hero — 2026 rebuild
 *
 * Philosophy (per council): No case study image. No "快" or "便宜".
 * The hero IS the first evidence of quality — typography, spacing, restraint.
 * One sentence. One CTA. Done.
 *
 * Vignelli: brand semantics — WKALAN = "your existence on the internet, taken seriously."
 * Ive: every pixel must feel cared for. No decoration.
 * Fukasawa: natural discovery, not a push.
 */

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center bg-[var(--wk-bg)]">
      {/* ── Content ── */}
      <div className="mx-auto w-full max-w-[var(--container-max)] px-[var(--container-padding)]">
        <div className="flex max-w-3xl flex-col gap-8">
          {/* Eyebrow — understated label, Vignelli-style discipline */}
          <motion.span
            className="text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--wk-text-tertiary)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            设计与开发
          </motion.span>

          {/* Headline — display serif. Tight leading. No break until the rhythm demands it. */}
          <motion.h1
            className="font-[var(--font-display)] text-[clamp(3rem,8vw,7rem)] leading-[0.92] tracking-[-0.02em] text-[var(--wk-text-primary)]"
            style={{ fontFamily: "var(--font-display)" }}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            线上
            <br />
            认真
            <br />
            对待
          </motion.h1>

          {/* Subhead — single line. Clean. No bullet points. No process description. */}
          <motion.p
            className="max-w-md text-[var(--text-body)] leading-relaxed text-[var(--wk-text-secondary)]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            围绕你是谁而构建的定制网站。
            <br />
            不是模板。不是赶工。是让人觉得"这就是我"的东西——
            因为它从对话开始，不从表单开始。
          </motion.p>

          {/* CTA — singular. No secondary button. One action. */}
          <motion.div
            className="pt-2"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href="mailto:hello@wkalan.com"
              className="group inline-flex items-center gap-3 text-[var(--wk-text-primary)] transition-all"
            >
              <span className="text-[var(--text-body)] font-medium">
                从一场对话开始
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--wk-border)] text-sm transition-all group-hover:border-[var(--wk-text-primary)] group-hover:bg-[var(--wk-text-primary)] group-hover:text-white">
                &rarr;
              </span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll hint — Fukasawa: subtle, discovered, not announced ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 0.5, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="h-12 w-[1px] bg-[var(--wk-text-tertiary)]" />
      </motion.div>
    </section>
  );
}
