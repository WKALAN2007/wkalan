"use client";

import { motion } from "framer-motion";

export function ManifestoHero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-white">
      <motion.div
        className="relative z-10 flex flex-col items-center gap-8 px-6 text-center"
      >
        <motion.h1
          className="font-bold text-[clamp(3rem,10vw,7rem)] leading-[1.05] tracking-[-0.02em] text-neutral-900"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          做一个
          <br />
          围绕你的网站。
        </motion.h1>

        <motion.p
          className="max-w-lg text-lg leading-relaxed text-neutral-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          帮人做网站。快。干净。不套模板。从一次对话开始。
        </motion.p>

        <motion.div
          className="mt-4 flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <a
            href="#process"
            className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 px-6 py-3 text-sm font-medium text-neutral-900 transition-all hover:border-neutral-400 hover:bg-neutral-50"
          >
            怎么做 →
          </a>
          <a
            href="mailto:hello@wkalan.com"
            className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-neutral-700"
          >
            预约对话 →
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
