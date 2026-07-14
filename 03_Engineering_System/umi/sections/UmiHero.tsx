"use client";

import { motion } from "framer-motion";

export function UmiHero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-[#FFF8F0] via-[#FFF3E8] to-[#FFECD5] pt-20">
      {/* Decorative fish lines */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute left-0 top-20 text-[20rem]">〜</div>
        <div className="absolute right-0 top-1/3 text-[16rem]">〜</div>
        <div className="absolute bottom-20 left-1/3 text-[24rem]">〜</div>
      </div>

      <motion.div
        className="relative z-10 flex flex-col items-center gap-8 px-6 text-center"
        initial="hidden"
        animate="visible"
      >
        {/* Staggered typography */}
        <div className="flex flex-col items-center gap-1">
          {["From", "the", "sea"].map((word, i) => (
            <motion.span
              key={word}
              className="text-5xl font-light tracking-[0.1em] text-[#C1272D] sm:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* Japanese characters */}
        <motion.div
          className="flex gap-4 text-4xl text-[#C1272D]/40 sm:text-5xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <span>海</span>
          <span className="text-[#E06920]">の</span>
          <span>幸</span>
        </motion.div>

        <div className="flex flex-col items-center gap-1">
          {["to", "your", "pet"].map((word, i) => (
            <motion.span
              key={word}
              className="text-5xl font-light tracking-[0.1em] text-[#E06920] sm:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* Product packages row */}
        <motion.div
          className="mt-8 flex gap-4"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {[
            { color: "#C1272D", label: "伝統" },
            { color: "#D4583A", label: "鮭入り" },
            { color: "#E06920", label: "減塩" },
          ].map((pkg) => (
            <div
              key={pkg.label}
              className="flex h-32 w-24 flex-col items-center justify-center rounded-lg shadow-lg sm:h-40 sm:w-28"
              style={{ backgroundColor: pkg.color }}
            >
              <span className="text-[10px] font-bold text-white/70 sm:text-xs">{pkg.label}</span>
              <span className="mt-1 text-lg sm:text-2xl">🐟</span>
            </div>
          ))}
        </motion.div>

        <motion.p
          className="mt-4 max-w-md text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.8 }}
        >
          High quality Japanese bonito flakes for your pet.
        </motion.p>
      </motion.div>

      {/* Wave divider at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
