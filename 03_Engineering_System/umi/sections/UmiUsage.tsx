"use client";

import { motion } from "framer-motion";

export function UmiUsage() {
  return (
    <section className="bg-[#FFF8F0] py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
        <div className="grid gap-8 sm:grid-cols-2">
          {/* Use as a treat */}
          <motion.div
            className="flex flex-col items-center gap-6 rounded-2xl bg-white p-8 text-center"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <span className="text-5xl">😺</span>
            <div className="flex flex-col gap-1">
              {["Use it", "as a", "treat"].map((word) => (
                <span key={word} className="text-2xl font-light tracking-[0.05em]">{word}</span>
              ))}
            </div>
            <p className="max-w-xs text-sm text-gray-500">Highly palatable. Ideal for training, bonding, or rewarding your pet.</p>
          </motion.div>

          {/* Use as a topping */}
          <motion.div
            className="flex flex-col items-center gap-6 rounded-2xl bg-white p-8 text-center"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <span className="text-5xl">🐕</span>
            <div className="flex flex-col gap-1">
              {["Or as", "a", "topping"].map((word) => (
                <span key={word} className="text-2xl font-light tracking-[0.05em]">{word}</span>
              ))}
            </div>
            <p className="max-w-xs text-sm text-gray-500">Sprinkle on meals. Mealtime enjoyment for pets with reduced appetite.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
