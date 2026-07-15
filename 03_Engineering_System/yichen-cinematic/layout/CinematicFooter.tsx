"use client";

import { motion } from "framer-motion";

export function CinematicFooter() {
  return (
    <footer className="bg-[#0A0A0A] py-24">
      <motion.div
        className="mx-auto flex max-w-[1400px] flex-col items-center gap-6 px-6 text-center sm:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 },
          },
        }}
      >
        <motion.span
          className="text-sm tracking-[0.15em] text-white/30"
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
            },
          }}
        >
          林奕辰
        </motion.span>
        <motion.p
          className="max-w-sm text-sm leading-relaxed text-white/20"
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] },
            },
          }}
        >
          Every ordinary life deserves to be remembered.
        </motion.p>
        <motion.p
          className="mt-4 text-xs tracking-[0.1em] text-white/15"
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] },
            },
          }}
        >
          不是所有重要的事情，都會上熱搜。
        </motion.p>
      </motion.div>
    </footer>
  );
}
