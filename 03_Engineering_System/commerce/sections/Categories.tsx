"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { categories } from "@/03_Engineering_System/commerce/data/products";
import { ArrowRight } from "lucide-react";

export function Categories() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="categories"
      className="relative overflow-hidden bg-[var(--wk-bg)] py-24 md:py-32"
    >
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
            03.
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 font-heading text-4xl tracking-[-0.02em] text-[var(--wk-text-primary)] md:text-5xl lg:text-6xl"
          >
            Shop by Category
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-3 max-w-md text-sm text-[var(--wk-text-secondary)]"
          >
            Explore our collections — each crafted with care for you and the earth.
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 gap-px bg-[var(--wk-border)] sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, i) => {
            const slug = category.name.toLowerCase().replace(/\s+/g, "-");
            return (
              <Link
                key={category.name}
                href={`/commerce/category/${slug}`}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative flex aspect-square flex-col justify-end overflow-hidden bg-[var(--wk-bg)] p-8 transition-all duration-500 hover:bg-[#f2faf2] active:scale-[0.98]"
              >
                {/* Background image on hover */}
                <motion.div
                  className="absolute inset-0 z-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === i ? 0.30 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={category.image}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-heading text-2xl tracking-[-0.02em] text-[var(--wk-text-primary)] transition-all duration-300 group-hover:translate-x-2 group-hover:text-[#3d7a3d] md:text-3xl">
                        {category.name}
                      </h3>
                      <p className="mt-2 text-xs text-[var(--wk-text-tertiary)] transition-colors group-hover:text-[var(--wk-text-secondary)]">
                        {category.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 transition-all duration-300 group-hover:gap-3">
                      <span className="font-mono text-[11px] text-[var(--wk-text-tertiary)] transition-all group-hover:text-[#3d7a3d] group-hover:scale-105">
                        [{category.count}]
                      </span>
                      <motion.span
                        animate={{ x: hoveredIndex === i ? 6 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="transition-all group-hover:text-[#3d7a3d]"
                      >
                        <ArrowRight size={16} className="text-[var(--wk-text-tertiary)] transition-all group-hover:text-[#3d7a3d]" />
                      </motion.span>
                    </div>
                  </div>
                </div>

                {/* Bottom highlight bar */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#3d7a3d] scale-x-0 transition-transform duration-500 group-hover:scale-x-100 origin-left" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
