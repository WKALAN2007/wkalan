"use client";

import { motion } from "framer-motion";

const looks = [
  { name: "Relaxed Linen Shirt", category: "Outerwear", price: "¥1,280" },
  { name: "Wide-Leg Trousers", category: "Trousers", price: "¥980" },
  { name: "Merino Crew Knit", category: "Knitwear", price: "¥1,580" },
  { name: "Cotton Canvas Jacket", category: "Outerwear", price: "¥1,860" },
  { name: "Washed Denim Jean", category: "Trousers", price: "¥1,180" },
  { name: "Silk Blend Scarf", category: "Accessories", price: "¥680" },
];

export function FashionLookbook() {
  return (
    <section id="lookbook" className="bg-white py-28 sm:py-36">
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
            第四章 · 作品集
          </motion.span>
          <motion.p
            className="mt-6 font-heading text-3xl leading-[1.2] tracking-[-0.01em] text-[#1E1E1C] sm:text-4xl"
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.1 } },
            }}
          >
            The Collection
          </motion.p>
        </motion.div>

        {/* Product grid */}
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {looks.map((look, i) => (
            <motion.a
              key={look.name}
              href="#"
              className="group flex flex-col gap-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.7,
                    delay: 0.08 * i,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              }}
            >
              {/* Image placeholder with hover scale */}
              <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-[#E8E4DC] to-[#F3F2EF]">
                <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-heading text-3xl text-[#C4BFB5]/30 transition-transform duration-700 group-hover:scale-110">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                {/* Hover category tag */}
                <span className="absolute left-3 top-3 bg-white/90 px-3 py-1 text-[10px] tracking-[0.12em] text-[#6B6B68] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {look.category}
                </span>
              </div>

              {/* Product info */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <h3 className="text-sm font-medium text-[#1E1E1C] transition-colors duration-300 group-hover:text-[#B8B0A0]">
                    {look.name}
                  </h3>
                  <span className="text-xs tracking-[0.08em] text-[#A0A09C]">
                    {look.category}
                  </span>
                </div>
                <span className="text-sm text-[#6B6B68]">{look.price}</span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          className="mt-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] },
            },
          }}
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 border-b border-[#D4CEC6] pb-2 text-sm tracking-[0.08em] text-[#6B6B68] transition-all hover:border-[#1E1E1C] hover:text-[#1E1E1C]"
          >
            View All Pieces &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
