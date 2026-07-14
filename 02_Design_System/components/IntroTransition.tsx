"use client";

import { motion } from "framer-motion";

const COLUMNS = 4;

export function IntroTransition() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[300]">
      {Array.from({ length: COLUMNS }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-y-0 bg-[#1A1A18]"
          style={{ left: `${(100 / COLUMNS) * i}%`, width: `${100 / COLUMNS}%` }}
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.3 + i * 0.08,
            ease: [0.65, 0, 0.35, 1],
          }}
        />
      ))}
    </div>
  );
}
