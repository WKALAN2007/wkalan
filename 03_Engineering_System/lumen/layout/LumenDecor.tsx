"use client";

import { motion } from "framer-motion";

/**
 * Floating decorative elements — subtle lines and dots
 * that drift slowly to add depth and life.
 */
export function LumenDecor() {
  const lines = [
    { top: "12%", left: "8%", width: "1px", height: "30vh", delay: 0 },
    { top: "25%", right: "6%", width: "1px", height: "20vh", delay: 1.5 },
    { bottom: "20%", left: "12%", width: "1px", height: "18vh", delay: 3 },
    { top: "40%", right: "15%", width: "40vw", height: "1px", delay: 2 },
    { top: "65%", left: "5%", width: "25vw", height: "1px", delay: 4 },
  ];

  const dots = [
    { top: "18%", right: "20%", delay: 0.5 },
    { top: "55%", left: "8%", delay: 2.5 },
    { top: "72%", right: "10%", delay: 1 },
    { bottom: "15%", right: "25%", delay: 3.5 },
    { top: "35%", left: "18%", delay: 1.8 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Floating lines */}
      {lines.map((l, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute hidden lg:block"
          style={{
            top: l.top,
            left: l.left,
            right: l.right,
            bottom: l.bottom,
            width: l.width,
            height: l.height,
            background: "var(--lumen-accent)",
            opacity: 0.06,
          }}
          animate={{ opacity: [0.04, 0.08, 0.04] }}
          transition={{
            duration: 5 + l.delay,
            repeat: Infinity,
            ease: "easeInOut",
            delay: l.delay,
          }}
        />
      ))}

      {/* Floating dots */}
      {dots.map((d, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute hidden lg:block rounded-full"
          style={{
            top: d.top,
            left: d.left,
            right: d.right,
            bottom: d.bottom,
            width: "4px",
            height: "4px",
            background: "var(--lumen-accent)",
            opacity: 0.08,
          }}
          animate={{
            y: [0, -16, 0],
            opacity: [0.06, 0.12, 0.06],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: d.delay,
          }}
        />
      ))}
    </div>
  );
}
