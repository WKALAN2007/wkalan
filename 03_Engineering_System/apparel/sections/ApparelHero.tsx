"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const headlineLines = ["Spring / Summer", "Collection 2026"];

export function ApparelHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const textY = useTransform(scrollYProgress, [0, 0.4], [0, 80]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex h-screen min-h-[700px] items-end overflow-hidden pb-16 sm:pb-24"
    >
      {/* Background Image with Parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ scale: imageScale }}>
        <img
          src="/apparel/hero.jpg"
          alt="MÉTIER Spring Summer Collection 2026"
          className="h-full w-full object-cover"
          style={{ objectPosition: "50% 30%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/15" />
      </motion.div>

      {/* Text Content */}
      <motion.div
        className="relative z-10 mx-auto w-full max-w-[1400px] px-6 sm:px-8"
        style={{ y: textY, opacity: textOpacity }}
      >
        <div className="max-w-2xl">
          <motion.span
            className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/50 sm:text-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            New Collection
          </motion.span>

          <h1 className="mt-4 font-heading text-4xl leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {headlineLines.map((line, i) => (
              <motion.span
                key={line}
                className="block overflow-hidden"
                initial="hidden"
                animate="visible"
              >
                <motion.span
                  className="block"
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 1.0,
                    delay: 0.8 + i * 0.25,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {line}
                </motion.span>
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="mt-4 max-w-md text-sm leading-relaxed text-white/60 sm:mt-6 sm:text-base"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
          >
            A study in restraint. Quiet luxury for the everyday.
          </motion.p>

          <motion.div
            className="mt-6 flex flex-wrap gap-4 sm:mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.2 }}
          >
            <Link
              href="/apparel/products?category=women"
              className="group inline-flex items-center gap-2 border border-white/30 bg-white/10 px-6 py-3 text-sm text-white backdrop-blur-sm transition-all hover:border-white/60 hover:bg-white/20"
            >
              Shop Women
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/apparel/products?category=men"
              className="group inline-flex items-center gap-2 border border-white/30 bg-transparent px-6 py-3 text-sm text-white backdrop-blur-sm transition-all hover:border-white/60 hover:bg-white/10"
            >
              Shop Men
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-10 right-8 z-10 hidden sm:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
      >
        <motion.span
          className="text-[11px] tracking-[0.2em] text-white/25"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          Scroll
        </motion.span>
      </motion.div>
    </section>
  );
}
