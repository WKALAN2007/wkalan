"use client";

import { motion } from "framer-motion";

export function UmiStory() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Story images grid */}
          <motion.div
            className="grid grid-cols-2 gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {[
              { emoji: "🌊", label: "Pacific Ocean" },
              { emoji: "🐟", label: "Wild Bonito" },
              { emoji: "🏭", label: "Dried & Flaked" },
              { emoji: "📦", label: "Your Pet's Bowl" },
            ].map((img, i) => (
              <motion.div
                key={img.label}
                className="flex aspect-square flex-col items-center justify-center gap-2 rounded-xl bg-[#FFF8F0] text-4xl"
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, delay: 0.12 * i, ease: [0.16, 1, 0.3, 1] } },
                }}
              >
                {img.emoji}
                <span className="text-xs text-gray-400">{img.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Story text */}
          <motion.div
            className="flex flex-col gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.span
              className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C1272D]"
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}
            >
              Our Story
            </motion.span>
            <motion.div
              className="flex flex-col gap-1"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 0.15, staggerChildren: 0.1 } } }}
            >
              {["110 years", "crafting", "premium fish"].map((word) => (
                <motion.span
                  key={word}
                  className="text-4xl font-light tracking-[0.05em] text-gray-900 sm:text-5xl"
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
            <motion.p
              className="max-w-md text-base leading-relaxed text-gray-500"
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] } } }}
            >
              Since 1914, we&apos;ve been harvesting wild bonito from the Pacific Ocean. Pure Japanese bonito flakes — 100% natural, human-grade quality. Perfect for training, rewarding, or turning picky eaters into eager diners.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
