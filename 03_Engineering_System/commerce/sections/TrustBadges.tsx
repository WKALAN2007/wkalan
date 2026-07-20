"use client";

import { motion } from "framer-motion";
import { trustBadges } from "@/03_Engineering_System/commerce/data/products";

export function TrustBadges() {
  return (
    <section className="bg-[var(--wk-bg)] py-16">
      <div className="mx-auto max-w-[var(--container-wide)] px-[var(--container-padding)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-10 md:gap-14"
        >
          {trustBadges.map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="group flex flex-col items-center gap-2.5 transition-all duration-300 hover:-translate-y-2 cursor-default"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f2faf2] text-2xl transition-all duration-500 group-hover:bg-[#3d7a3d] group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#3d7a3d]/25">
                {badge.icon}
              </div>
              <span className="text-[11px] font-semibold tracking-[0.06em] text-[#1a3a1a] transition-colors group-hover:text-[#3d7a3d]">
                {badge.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
