"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function injectKeyframes() {
  if (typeof document === "undefined") return;
  if (document.getElementById("north-anim")) return;
  const s = document.createElement("style");
  s.id = "north-anim";
  s.textContent = `
    @keyframes north-auto-scroll {
      0%   { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    @keyframes north-fade-up {
      0%   { opacity: 0; transform: translateY(40px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    @keyframes north-pulse {
      0%, 100% { opacity: 0.3; }
      50%      { opacity: 0.6; }
    }`;
  document.head.appendChild(s);
}

export function NorthOpening() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.2]);
  const heroScale = useTransform(scrollYProgress, [0, 0.6], [1, 1.08]);
  const textY = useTransform(scrollYProgress, [0, 0.5], ["0%", "-20%"]);

  useEffect(() => { injectKeyframes(); }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white"
    >
      {/* Background image with parallax scale */}
      <motion.div className="absolute inset-0" style={{ opacity: heroOpacity, scale: heroScale }}>
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1800&q=80"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center gap-6 px-8 text-center"
        style={{ y: textY }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.p
          className="text-xs tracking-[0.25em] text-white/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          SUSTAINABLE DEVELOPMENT REPORT 2025
        </motion.p>
        <motion.h1
          className="font-heading text-4xl leading-[1.1] tracking-[-0.01em] text-white/90 sm:text-6xl md:text-7xl"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Helping people remember
          <br />
          what matters.
        </motion.h1>
        <motion.div
          className="mt-4 h-[1px] w-16 bg-white/30"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.p
          className="max-w-md text-sm leading-relaxed text-white/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          We believe every family deserves a place where their stories live
          forever — not as files in a folder, but as a living archive that grows
          across generations.
        </motion.p>
      </motion.div>

      {/* SCROLL TO EXPLORE */}
      <motion.div
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.0 }}
      >
        <motion.span
          className="text-[10px] tracking-[0.25em] text-white/30"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          SCROLL TO EXPLORE
        </motion.span>
      </motion.div>
    </section>
  );
}
