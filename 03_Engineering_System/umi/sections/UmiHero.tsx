"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const headlineLines = [
  "From the sea",
  "to your pet",
];

const japaneseChars = ["海", "の", "幸"];

const packages = [
  { color: "#C1272D", label: "伝統", weight: "伝統" },
  { color: "#D4583A", label: "鮭入り", weight: "鮭入り" },
  { color: "#E06920", label: "減塩", weight: "減塩" },
];

export function UmiHero() {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(heroProgress, [0, 0.5], [1, 0]);
  const textY = useTransform(heroProgress, [0, 0.5], ["0%", "-6%"]);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-[#FFF8F0] via-[#FFF3E8] to-[#FFECD5] pt-20"
    >
      {/* Decorative fish lines */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute left-0 top-20 text-[20rem]">〜</div>
        <div className="absolute right-0 top-1/3 text-[16rem]">〜</div>
        <div className="absolute bottom-20 left-1/3 text-[24rem]">〜</div>
      </div>

      <motion.div
        className="relative z-10 flex flex-col items-center gap-10 px-6 text-center"
        style={{ opacity: heroOpacity, y: textY }}
        initial="hidden"
        animate="visible"
      >
        {/* Staggered line-by-line headline */}
        <div className="flex flex-col gap-2">
          {headlineLines.map((line, i) => (
            <motion.span
              key={line}
              className="block overflow-hidden"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.2, delayChildren: i * 0.3 } },
              }}
            >
              {line.split(" ").map((word, j) => (
                <motion.span
                  key={word + j}
                  className="inline-block"
                  variants={{
                    hidden: { y: "100%" },
                    visible: {
                      y: "0%",
                      transition: {
                        duration: 0.9,
                        ease: [0.16, 1, 0.3, 1],
                      },
                    },
                  }}
                >
                  <span className="text-5xl font-light tracking-[0.06em] text-[#C1272D] sm:text-6xl lg:text-7xl">
                    {word}{" "}
                  </span>
                </motion.span>
              ))}
            </motion.span>
          ))}
        </div>

        {/* Japanese characters — fade in with delay */}
        <motion.div
          className="flex gap-4 text-4xl sm:text-5xl"
          initial={{ opacity: 0, filter: "blur(8px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {japaneseChars.map((char, i) => (
            <span
              key={char}
              className={i === 1 ? "text-[#E06920]" : "text-[#C1272D]/40"}
            >
              {char}
            </span>
          ))}
        </motion.div>

        {/* Product packages — scale in */}
        <motion.div
          className="mt-6 flex gap-4"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {packages.map((pkg) => (
            <div
              key={pkg.label}
              className="flex h-32 w-24 flex-col items-center justify-center rounded-lg shadow-lg transition-transform duration-500 hover:scale-105 sm:h-40 sm:w-28"
              style={{ backgroundColor: pkg.color }}
            >
              <span className="text-[10px] font-bold text-white/70 sm:text-xs">
                {pkg.label}
              </span>
              <span className="mt-2 text-lg sm:text-2xl">🐟</span>
            </div>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          className="max-w-md text-sm leading-relaxed text-[#8C7B6B]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.8 }}
        >
          Premium Japanese bonito flakes, crafted in Ehime since 1910.
          <br />
          海の幸を、あなたの家族へ。
        </motion.p>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-10 right-8 z-10 hidden sm:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.4 }}
      >
        <motion.span
          className="text-[11px] tracking-[0.2em] text-[#C1272D]/30"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          スクロール
        </motion.span>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
