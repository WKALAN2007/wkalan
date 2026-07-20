"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/03_Engineering_System/commerce/data/products";

export function Testimonials() {
  return (
    <section className="bg-[#1a3a1a] py-24 md:py-32">
      <div className="mx-auto max-w-[var(--container-wide)] px-[var(--container-padding)]">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono text-[10px] tracking-[0.3em] text-[#7ab87a]"
          >
            09.
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 font-heading text-4xl tracking-[-0.02em] text-white md:text-5xl"
          >
            What Our Community Says
          </motion.h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group rounded-2xl border border-white/[0.08] bg-white/[0.04] p-8 transition-all duration-500 hover:bg-white/[0.10] hover:-translate-y-2 hover:border-[#7ab87a]/30 hover:shadow-2xl hover:shadow-black/30 cursor-default"
            >
              {/* Stars */}
              <div className="mb-4 text-[#c8a44e] tracking-[3px] transition-transform group-hover:scale-105 origin-left">
                {"★".repeat(t.stars)}
              </div>

              <blockquote className="text-sm leading-relaxed text-white/70 italic transition-colors group-hover:text-white/90">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3d7a3d] text-sm font-bold text-white transition-all group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#3d7a3d]/40">
                  {t.initials}
                </div>
                <div>
                  <strong className="block text-sm text-white">{t.name}</strong>
                  <span className="text-xs text-[#7ab87a] transition-colors group-hover:text-[#a3d0a3]">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
