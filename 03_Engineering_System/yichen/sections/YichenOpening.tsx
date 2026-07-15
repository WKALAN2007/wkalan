"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const heroLines = [
  "Every creator",
  "is shaped by",
  "stories",
];

export function YichenOpening() {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(heroProgress, [0, 0.5], [1, 0]);
  const photoScale = useTransform(heroProgress, [0, 0.5], [1, 1.05]);
  const photoY = useTransform(heroProgress, [0, 0.5], ["0%", "8%"]);
  const textY = useTransform(heroProgress, [0, 0.5], ["0%", "-6%"]);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="grid min-h-screen w-full lg:grid-cols-2">
        {/* Left: Photograph — clip-path reveal + parallax */}
        <motion.div
          className="relative hidden lg:block"
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="absolute inset-0 h-full w-full overflow-hidden"
            style={{ scale: photoScale, y: photoY }}
          >
            {/* Clip-path reveal: bottom → top */}
            <motion.div
              className="absolute inset-0"
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              animate={{ clipPath: "inset(0% 0 0 0)" }}
              transition={{
                duration: 1.4,
                delay: 1.6,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <img
                src="/yichen-hero.jpg"
                alt="林奕辰 · Hangzhou"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </motion.div>
            <motion.div
              className="absolute inset-0 bg-black/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.8 }}
            />
          </motion.div>
        </motion.div>

        {/* Right: Text — parallax upward */}
        <motion.div
          className="flex items-center px-8 py-20 sm:px-16 lg:py-0"
          style={{ opacity: heroOpacity, y: textY }}
        >
          <div className="flex max-w-md flex-col gap-10">
            {/* Staggered line-by-line reveal */}
            <p className="font-heading text-3xl leading-[1.15] tracking-[-0.01em] text-[#1E1E1C] sm:text-4xl md:text-5xl">
              {heroLines.map((line, i) => (
                <motion.span
                  key={line}
                  className="block overflow-hidden"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.25, delayChildren: 0.2 } },
                  }}
                >
                  <motion.span
                    className="block"
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    transition={{
                      duration: 1.0,
                      delay: 1.2 + i * 0.25,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {line}
                  </motion.span>
                </motion.span>
              ))}
              <motion.span
                className="block overflow-hidden text-[#8C8880]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
              >
                The ones you never see.
              </motion.span>
            </p>

            <motion.div
              className="flex flex-col gap-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 3.0 }}
            >
              <span className="text-xs tracking-[0.2em] text-[#B8B0A0]">
                林奕辰 · LIN YICHEN
              </span>
              <span className="text-[11px] tracking-[0.15em] text-[#C4BFB5]">
                Documentary Creator · BILIBILI
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint — bottom right */}
      <motion.div
        className="absolute bottom-10 right-8 z-10 hidden sm:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 4.0 }}
      >
        <motion.span
          className="text-[11px] tracking-[0.2em] text-[#C4BFB5]"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          SCROLL
        </motion.span>
      </motion.div>
    </section>
  );
}
