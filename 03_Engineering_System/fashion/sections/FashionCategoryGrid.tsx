"use client";

import { motion } from "framer-motion";

const categories = [
  { label: "Outerwear", image: "/fashion/cat-outerwear.jpg", count: "12 pieces" },
  { label: "Knitwear", image: "/fashion/cat-knitwear.jpg", count: "8 pieces" },
  { label: "Trousers", image: "/fashion/cat-trousers.jpg", count: "10 pieces" },
  { label: "Accessories", image: "/fashion/cat-accessories.jpg", count: "6 pieces" },
];

export function FashionCategoryGrid() {
  return (
    <section className="bg-[#FAFAFA] py-28 sm:py-36">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
        {/* Section header */}
        <motion.div
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.span
            className="text-xs tracking-[0.2em] text-[#B8B0A0]"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.7 } },
            }}
          >
            第二章 · 系列
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

        {/* Category cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.label}
              href="#"
              className="group relative aspect-[3/4] cursor-pointer overflow-hidden bg-[#E8E5E0]"
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
              {/* Placeholder gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#E8E4DC] to-[#F3F2EF] transition-transform duration-700 group-hover:scale-105" />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/25" />

              {/* Label */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6 pt-16">
                <h3 className="text-lg font-medium text-white">{cat.label}</h3>
                <span className="text-xs tracking-[0.08em] text-white/60">{cat.count}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
