"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Footer() {
  return (
    <footer className="bg-[#111111] py-20">
      <motion.div
        className="mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={container}
      >
        <div className="grid gap-12 sm:grid-cols-3">
          {/* Brand */}
          <motion.div className="flex flex-col gap-3" variants={item}>
            <span className="font-heading text-lg tracking-[-0.02em] text-white">
              WKALAN
            </span>
            <p className="max-w-xs text-sm leading-relaxed text-white/40">
              品味人生，雕刻身份。
              <br />
              A digital identity studio.
            </p>
          </motion.div>

          {/* Work */}
          <motion.div className="flex flex-col gap-2" variants={item}>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/30">
              Work
            </span>
            <a href="/basketball" target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 transition-colors hover:text-white/80">
              小白剪了個球
            </a>
            <a href="/fashion" target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 transition-colors hover:text-white/80">
              NKSEN
            </a>
            <a href="/apparel" target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 transition-colors hover:text-white/80">
              MÉTIER
            </a>
          </motion.div>

          {/* Contact */}
          <motion.div className="flex flex-col gap-2" variants={item}>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/30">
              Contact
            </span>
            <a href="mailto:hello@wkalan.com" className="text-sm text-white/50 transition-colors hover:text-white/80">
              hello@wkalan.com
            </a>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          className="mt-16 border-t border-white/10 pt-8"
          variants={item}
        >
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} WKALAN. 品味人生，雕刻身份。
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
