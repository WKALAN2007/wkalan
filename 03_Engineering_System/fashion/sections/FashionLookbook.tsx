"use client";

import { motion } from "framer-motion";

const looks = [
  {
    name: "Oversized Linen Shirt",
    price: "$185",
    image: "/fashion/hero.jpg",
    objectPos: "50% 35%",
    category: "Ready-to-Wear",
  },
  {
    name: "Relaxed Cotton Trouser",
    price: "$220",
    image: "/fashion/category-1.jpg",
    objectPos: "50% 30%",
    category: "Tailoring",
  },
  {
    name: "Structured Wool Blazer",
    price: "$390",
    image: "/fashion/category-2.jpg",
    objectPos: "50% 25%",
    category: "Tailoring",
  },
  {
    name: "Canvas Tote Bag",
    price: "$145",
    image: "/fashion/category-3.jpg",
    objectPos: "50% 30%",
    category: "Accessories",
  },
  {
    name: "Silk Evening Dress",
    price: "$320",
    image: "/fashion/look-4.jpg",
    objectPos: "50% 25%",
    category: "Ready-to-Wear",
  },
  {
    name: "Cashmere Wrap Coat",
    price: "$495",
    image: "/fashion/look-5.jpg",
    objectPos: "50% 20%",
    category: "Outerwear",
  },
];

export function FashionLookbook() {
  return (
    <section id="lookbook" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-12 flex flex-col items-center gap-3 text-center sm:mb-16"
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
            The Collection
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
            Spring Summer &apos;26
          </motion.h2>
        </motion.div>

        {/* Lookbook Grid — 3 columns x 2 rows on desktop */}
        <div className="grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {looks.map((look, i) => (
            <motion.div
              key={look.name}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.08 * i,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Image — consistent aspect ratio */}
              <div
                className="relative w-full overflow-hidden bg-[#E8E5E0]"
                style={{ aspectRatio: "3 / 4" }}
              >
                <img
                  src={look.image}
                  alt={look.name}
                  className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                  style={{ objectPosition: look.objectPos }}
                />
              </div>

              {/* Info */}
              <div className="mt-4 flex flex-col gap-0.5">
                <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#999999]">
                  {look.category}
                </span>
                <h3 className="text-sm font-medium text-[#1A1A1A]">
                  {look.name}
                </h3>
                <span className="text-sm text-[#666666]">{look.price}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 border-b border-[#1A1A1A]/20 pb-2 text-sm text-[#1A1A1A]/70 transition-all hover:border-[#1A1A1A]/50 hover:text-[#1A1A1A]"
          >
            View All Products
            <span>&rarr;</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
