"use client";

import { motion } from "framer-motion";

const categories = [
  {
    name: "Ready-to-Wear",
    image: "/fashion/category-1.jpg",
    href: "#",
    objectPos: "50% 30%",
  },
  {
    name: "Tailoring",
    image: "/fashion/category-2.jpg",
    href: "#",
    objectPos: "50% 25%",
  },
  {
    name: "Accessories",
    image: "/fashion/category-3.jpg",
    href: "#",
    objectPos: "50% 30%",
  },
];

export function FashionCategoryGrid() {
  return (
    <section id="category-grid" className="bg-[#FAFAFA] py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-12 flex flex-col gap-3 sm:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.span
            className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#999999] sm:text-xs"
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            Shop by Category
          </motion.span>
          <motion.h2
            className="font-heading text-2xl leading-tight text-[#1A1A1A] sm:text-3xl md:text-4xl"
            style={{ fontFamily: "var(--font-instrument-serif)" }}
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            The Essentials
          </motion.h2>
        </motion.div>

        {/* Category Grid — all cards equal height via aspect ratio */}
        <div className="grid gap-4 sm:gap-5 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.name}
              href={cat.href}
              className="group relative block w-full overflow-hidden bg-[#E8E5E0]"
              style={{ aspectRatio: "3 / 4" }}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.12 * i,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                style={{ objectPosition: cat.objectPos }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/25 transition-all duration-500 group-hover:bg-black/40" />
              {/* Text */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <h3
                  className="text-xl text-white sm:text-2xl"
                  style={{ fontFamily: "var(--font-instrument-serif)" }}
                >
                  {cat.name}
                </h3>
                <span className="mt-1 inline-flex items-center gap-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/60 transition-all group-hover:gap-2 group-hover:text-white/80 sm:text-xs">
                  Shop
                  <span className="transition-transform group-hover:translate-x-0.5">
                    &rarr;
                  </span>
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
