"use client";

import { motion } from "framer-motion";

export function Chapter7Invitation() {
  return (
    <section className="bg-[#0F0F0D] py-[var(--space-section-lg)]">
      <div className="mx-auto max-w-[var(--container-narrow)] px-[var(--container-padding)]">
        <motion.div
          className="flex flex-col items-center gap-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Label */}
          <motion.div
            className="flex items-center gap-3"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.7 } },
            }}
          >
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#C9A84C]/60">
              Chapter 6
            </span>
            <div className="h-[1px] w-8 bg-[#C9A84C]/20" />
          </motion.div>

          <motion.h2
            className="font-heading text-4xl leading-[1.1] tracking-[-0.02em] text-white sm:text-5xl"
            variants={{
              hidden: { opacity: 0, y: 32 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] } },
            }}
          >
            Let&apos;s tell
            <br />
            your story.
          </motion.h2>

          <motion.p
            className="max-w-md text-base leading-relaxed text-white/40"
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] } },
            }}
          >
            Not a template. Not a link-in-bio. A digital identity crafted around who you really are.
          </motion.p>

          <motion.div
            className="flex flex-col items-center gap-6"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.8, delay: 0.8 } },
            }}
          >
            <a
              href="mailto:hello@wkalan.com"
              className="inline-flex items-center gap-2 border border-[#C9A84C]/40 px-10 py-4 text-sm font-medium uppercase tracking-[0.15em] text-[#C9A84C] transition-all hover:border-[#C9A84C] hover:bg-[#C9A84C]/10"
            >
              Start the conversation &rarr;
            </a>
            <p className="text-xs text-white/20">hello@wkalan.com</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
