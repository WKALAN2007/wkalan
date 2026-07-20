"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function ManifestoHero() {
  return (
    <section className="relative flex min-h-screen items-end pb-24 sm:items-center sm:pb-0 bg-[var(--wk-bg-dark)]">
      {/* ── Full-bleed background — real work, Benoist-style ── */}
      <div className="absolute inset-0">
        <Image
          src="/hospitality/hero/hero-1.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* ── Content overlaid — Van Schneider: one bold heading ── */}
      <div className="relative z-10 w-full px-6 sm:px-12 lg:px-24">
        <div className="flex flex-col gap-8 max-w-4xl">
          {/* Label — small, understated */}
          <motion.span
            className="text-xs font-medium uppercase tracking-[0.25em] text-white/45"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Case Study &middot; Aurelia Hospitality
          </motion.span>

          {/* Headline — display serif, large, tight — Benoist + Locomotive */}
          <motion.h1
            className="font-[var(--font-display)] text-[clamp(3.5rem,9vw,8rem)] leading-[0.95] tracking-[-0.015em] text-white"
            style={{ fontFamily: "var(--font-display)" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            做一个
            <br />
            围绕你的网站。
          </motion.h1>

          {/* Subhead — Van Schneider: concept before aesthetics */}
          <motion.p
            className="max-w-lg text-[var(--text-body)] leading-relaxed text-white/65"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            帮人做网站。快。干净。不套模板。
            <br />
            从一次对话开始。五到七天，一个围绕你的网站上线。
          </motion.p>

          {/* CTAs — staggered, fast */}
          <motion.div
            className="flex flex-wrap items-center gap-4 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href="#stories"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-sm font-medium text-white transition-all hover:border-white/50 hover:bg-white/10"
            >
              看案例 →
            </a>
            <a
              href="mailto:hello@wkalan.com"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-medium text-[var(--wk-bg-dark)] transition-all hover:bg-[var(--wk-accent)] hover:text-white"
            >
              预约对话 →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
