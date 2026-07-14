"use client";

import { motion } from "framer-motion";

const products = [
  { name: "Traditional", desc: "The authentic Japanese recipe, pure and simple.", weight: "1.8oz", color: "#C1272D", emoji: "🐟" },
  { name: "Salmon Blended", desc: "Enhanced with premium salmon for extra appeal.", weight: "0.9oz", color: "#D4583A", emoji: "🐠" },
  { name: "Low Sodium", desc: "Heart-friendly option for special dietary needs.", weight: "1.4oz", color: "#E06920", emoji: "🐡" },
];

export function UmiProducts() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
        <motion.div
          className="mb-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.span
            className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C1272D]"
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}
          >
            Products
          </motion.span>
          <div className="mt-3 flex flex-col items-center gap-1">
            {["Available", "in", "three", "formulas"].map((word, i) => (
              <motion.span
                key={word}
                className="text-3xl font-light tracking-[0.05em] sm:text-4xl"
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] } } }}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-3">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              className="group flex flex-col items-center gap-4 rounded-2xl bg-[#FFF8F0] p-8 text-center transition-all duration-500 hover:shadow-lg"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12 * i, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Package */}
              <div
                className="flex h-40 w-28 flex-col items-center justify-center rounded-xl shadow-md transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundColor: product.color }}
              >
                <span className="text-3xl">{product.emoji}</span>
                <span className="mt-2 text-xs font-bold text-white/80">{product.weight}</span>
              </div>
              <h3 className="text-xl font-bold">{product.name}</h3>
              <p className="text-sm leading-relaxed text-gray-500">{product.desc}</p>
              <a href="#" className="text-sm font-medium text-[#C1272D] transition-colors hover:text-[#E06920]">
                See More &rarr;
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
