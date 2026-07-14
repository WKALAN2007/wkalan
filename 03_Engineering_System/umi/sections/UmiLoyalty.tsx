"use client";

import { motion } from "framer-motion";

const tiers = [
  { name: "Silver", emoji: "🐟", desc: "Earn points on every purchase", color: "#C0C0C0" },
  { name: "Gold", emoji: "🐠", desc: "Free shipping + birthday treat", color: "#C9A84C" },
  { name: "Platinum", emoji: "🐡", desc: "Early access + exclusive flavors", color: "#4F6BFF" },
];

export function UmiLoyalty() {
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
            Loyalty Program
          </motion.span>
          <div className="mt-3 flex flex-col items-center gap-1">
            {["Reward", "your", "companion"].map((word) => (
              <motion.span
                key={word}
                className="text-3xl font-light tracking-[0.05em] sm:text-4xl"
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] } } }}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-3">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              className="flex flex-col items-center gap-3 rounded-2xl bg-[#FFF8F0] p-8 text-center transition-all duration-500 hover:shadow-lg"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <span className="text-4xl">{tier.emoji}</span>
              <h3 className="text-lg font-bold" style={{ color: tier.color }}>{tier.name}</h3>
              <p className="text-sm text-gray-500">{tier.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-[#C1272D] transition-colors hover:text-[#E06920]">
            View Loyalty Program &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
