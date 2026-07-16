"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { categories } from "@/data/apparel/products";

export function CategoryGrid() {
  return (
    <section className="bg-[#FAFAF8] py-28 sm:py-36">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
        {/* Section header */}
        <motion.div
          className="mb-16 sm:mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.span
            className="text-xs font-medium uppercase tracking-[0.2em] text-[#B8B0A0]"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.7 } },
            }}
          >
            The Collection
          </motion.span>
          <motion.p
            className="mt-6 font-heading text-3xl leading-[1.2] tracking-[-0.01em] text-[#1E1E1C] sm:text-4xl"
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.1 } },
            }}
          >
            Shop by
            <br />
            Category
          </motion.p>
        </motion.div>

        {/* Category cards — 2×2 grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: {
                    duration: 0.7,
                    delay: 0.12 * i,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              }}
            >
              <Link
                href={`/apparel/products?category=${cat.slug}`}
                className="group relative block aspect-[3/4] cursor-pointer overflow-hidden bg-[#E8E5E0]"
              >
                {/* Category image */}
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/25" />
                {/* Label */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6 pt-16">
                  <h3 className="font-heading text-xl text-white" style={{ fontFamily: "var(--font-instrument-serif)" }}>
                    {cat.label}
                  </h3>
                  <span className="text-xs tracking-[0.08em] text-white/60">
                    {cat.count} pieces
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
