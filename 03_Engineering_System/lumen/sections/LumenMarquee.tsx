"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface LumenMarqueeProps {
  text: string;
  reverse?: boolean;
  speed?: number; // seconds per full cycle, default 20
}

export function LumenMarquee({ text, reverse = false, speed = 20 }: LumenMarqueeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const dir = reverse ? 1 : -1;
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `${dir * 8}%`]);

  // Duplicate text for seamless loop
  const items = Array.from({ length: 6 }, (_, i) => (
    <span key={i} className="shrink-0 mx-8 select-none">
      {text}
    </span>
  ));

  return (
    <div
      ref={ref}
      className="overflow-hidden py-8 sm:py-10"
      style={{
        background: "var(--lumen-bg-surface)",
        borderTop: "1px solid var(--lumen-border)",
        borderBottom: "1px solid var(--lumen-border)",
      }}
    >
      <motion.div
        className="flex whitespace-nowrap"
        style={{
          x,
          animation: `marquee-scroll ${speed}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {items}
      </motion.div>

      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
