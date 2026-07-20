"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative flex h-screen min-h-[700px] items-end overflow-hidden"
      style={{ background: "linear-gradient(135deg, #f2faf2 0%, #eaf5e4 30%, #f0f7e8 60%, #fdf8f0 100%)" }}
    >
      {/* Background decorative circles */}
      <motion.div style={{ y, scale }} className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[#a3d0a3] opacity-[0.10] -top-[200px] -right-[100px]" />
        <div className="absolute w-[300px] h-[300px] rounded-full bg-[#7ab87a] opacity-[0.10] -bottom-[50px] -left-[50px]" />
        <div className="absolute w-[150px] h-[150px] rounded-full bg-[#f5e6c8] opacity-[0.15] top-[40%] left-[60%]" />
      </motion.div>

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.25]"
        style={{
          backgroundImage: "radial-gradient(circle, #a3d0a3 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full pb-16 md:pb-24"
      >
        <div className="mx-auto max-w-[var(--container-wide)] px-[var(--container-padding)]">
          {/* Est. badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6"
          >
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#4a8c4a]">
              EST. 2024
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4, duration: 1 }}
            className="overflow-hidden"
          >
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ delay: 2.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-5xl leading-[1.05] tracking-[-0.02em] text-[#1a3a1a] md:text-7xl lg:text-8xl"
            >
              Pure products
              <br />
              for <em className="not-italic text-[#4a8c4a] relative">
                conscious
                <span className="absolute bottom-1 left-0 w-full h-[6px] bg-[#c8e6c8] rounded-[3px] -z-10" />
              </em> living
            </motion.h1>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.0, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-lg text-sm leading-relaxed text-[#555] md:text-base"
          >
            Curated green essentials that nurture your home, body, and planet.
            Every product ethically sourced, sustainably packaged, and beautifully effective.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              href="/commerce#new-arrivals"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-[#3d7a3d] bg-[#3d7a3d] px-7 py-3.5 text-xs font-semibold tracking-[0.12em] text-white transition-all hover:bg-[#2d5a2d] hover:border-[#2d5a2d] hover:shadow-xl hover:shadow-[#3d7a3d]/40 hover:-translate-y-0.5 active:scale-[0.97]"
            >
              [ SHOP COLLECTION ]
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/commerce/about"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-[#3d7a3d] px-7 py-3.5 text-xs font-semibold tracking-[0.12em] text-[#3d7a3d] transition-all hover:bg-[#3d7a3d] hover:text-white hover:shadow-lg hover:shadow-[#3d7a3d]/20 hover:-translate-y-0.5 active:scale-[0.97]"
            >
              [ OUR STORY ]
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.8, duration: 0.8 }}
        className="absolute bottom-8 right-[var(--container-padding)] z-10 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="cursor-pointer hover:opacity-60 transition-opacity"
        >
          <ArrowDown size={18} className="text-[#4a8c4a]/40" />
        </motion.div>
      </motion.div>

      {/* Side vertical text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 0.8 }}
        className="absolute left-[var(--container-padding)] top-1/2 z-10 hidden -translate-y-1/2 lg:block"
        style={{ writingMode: "vertical-rl" }}
      >
        <span className="font-mono text-[10px] tracking-[0.3em] text-[#4a8c4a]/30">
          GREEN LIVING COLLECTION
        </span>
      </motion.div>
    </section>
  );
}
