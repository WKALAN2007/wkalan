"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { comparisonData } from "@/03_Engineering_System/commerce/data/products";

export function ProductSpotlight() {
  return (
    <section id="comparison" className="bg-[var(--wk-bg)] py-24 md:py-32">
      <div className="mx-auto max-w-[var(--container-wide)] px-[var(--container-padding)]">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono text-[10px] tracking-[0.3em] text-[#4a8c4a]"
          >
            06.
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 font-heading text-4xl tracking-[-0.02em] text-[var(--wk-text-primary)] md:text-5xl"
          >
            How We Compare
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-3 max-w-md text-sm text-[var(--wk-text-secondary)]"
          >
            See why Verdant is the smarter choice for your home and the planet.
          </motion.p>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-x-auto rounded-2xl shadow-[var(--shadow-md)] transition-shadow hover:shadow-[var(--shadow-lg)]"
        >
          <table className="w-full border-collapse bg-white">
            <thead>
              <tr>
                <th className="p-6 text-left font-mono text-[10px] tracking-[0.15em] text-[var(--wk-text-tertiary)] uppercase" />
                <th className="p-6 text-center font-heading text-lg text-[#3d7a3d] relative group cursor-default">
                  Verdant
                  <span className="absolute top-2 right-3 text-xs text-[#c8a44e] transition-transform group-hover:scale-125">★</span>
                </th>
                <th className="p-6 text-center font-heading text-lg text-[var(--wk-text-primary)]">Conventional</th>
                <th className="p-6 text-center font-heading text-lg text-[var(--wk-text-primary)]">Budget Brands</th>
              </tr>
            </thead>
            <tbody>
              {/* Icon row */}
              <tr>
                <td className="p-4" />
                <td className="p-4 text-center bg-[#f2faf2]">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#3d7a3d] text-2xl text-white transition-transform hover:scale-110 cursor-default shadow-md shadow-[#3d7a3d]/20">🌿</div>
                </td>
                <td className="p-4 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--wk-surface)] text-2xl transition-transform hover:scale-105 cursor-default opacity-60">🏭</div>
                </td>
                <td className="p-4 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--wk-surface)] text-2xl transition-transform hover:scale-105 cursor-default opacity-50">💰</div>
                </td>
              </tr>
              {comparisonData.rows.map((row, i) => (
                <motion.tr
                  key={row.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                  className="group/row transition-colors"
                >
                  <td className="border-t border-[var(--wk-border)] p-4 pl-6 text-sm font-semibold text-[var(--wk-text-primary)] group-hover/row:text-[#3d7a3d] transition-colors">
                    {row.label}
                  </td>
                  <td className="border-t border-[var(--wk-border)] bg-[#f2faf2] p-4 text-center text-sm text-[#2d5a2d] group-hover/row:bg-[#e0f0e0] transition-colors font-medium">
                    {row.verdant}
                  </td>
                  <td className="border-t border-[var(--wk-border)] p-4 text-center text-sm text-[var(--wk-text-secondary)]">
                    {row.conventional}
                  </td>
                  <td className="border-t border-[var(--wk-border)] p-4 text-center text-sm text-[var(--wk-text-secondary)]">
                    {row.budget}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* CTA below table */}
        <div className="mt-10 text-center">
          <Link
            href="/commerce/about"
            className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.1em] text-[#3d7a3d] transition-all hover:text-[#2d5a2d] hover:gap-3"
          >
            [ LEARN ABOUT OUR STANDARDS ]
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
