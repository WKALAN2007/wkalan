"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function FashionHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 0.4], [0, 80]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const scrollToLookbook = () => {
    document.getElementById("lookbook")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="relative flex h-screen min-h-[700px] items-end overflow-hidden pb-12 sm:pb-20"
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ scale: imageScale }}
      >
        <img
          src="/fashion/hero.jpg"
          alt="NKSEN Spring Summer Collection"
          className="h-full w-full object-cover"
          style={{ objectPosition: "50% 35%" }}
        />
        {/* Stronger dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/20" />
      </motion.div>

      {/* Text Content */}
      <motion.div
        className="relative z-10 mx-auto w-full max-w-[1400px] px-6 sm:px-8"
        style={{ y: textY, opacity: textOpacity }}
      >
        <div className="max-w-2xl">
          <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/60 sm:text-xs">
            New Collection
          </span>
          <h1
            className="mt-3 font-heading text-4xl leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-instrument-serif)" }}
          >
            Spring
            <br />
            Summer &apos;26
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60 sm:mt-6 sm:text-base">
            A return to form. Clothes for living,
            <br />
            not for show.
          </p>
          <button
            onClick={scrollToLookbook}
            className="group mt-6 inline-flex items-center gap-2 border-b border-white/30 pb-2 text-sm text-white/80 transition-all hover:border-white/60 hover:text-white sm:mt-8"
          >
            Explore the Collection
            <ArrowDown className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-y-0.5" />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
