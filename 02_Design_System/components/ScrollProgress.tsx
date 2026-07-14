"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Thin progress bar at the very top of the viewport.
 * Subtle — almost imperceptible. There to reward attention.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[80] h-[2px] origin-left bg-primary"
      style={{ scaleX }}
    />
  );
}
