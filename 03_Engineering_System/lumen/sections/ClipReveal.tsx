"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ClipRevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
  style?: React.CSSProperties;
}

export function ClipReveal({ children, direction = "up", className = "", style }: ClipRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const clipMap = {
    up:    useTransform(scrollYProgress, [0, 0.4], ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"]),
    down:  useTransform(scrollYProgress, [0, 0.4], ["inset(0% 0% 100% 0%)", "inset(0% 0% 0% 0%)"]),
    left:  useTransform(scrollYProgress, [0, 0.4], ["inset(0% 100% 0% 0%)", "inset(0% 0% 0% 0%)"]),
    right: useTransform(scrollYProgress, [0, 0.4], ["inset(0% 0% 0% 100%)", "inset(0% 0% 0% 0%)"]),
  };

  const clipPath = clipMap[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ clipPath, willChange: "clip-path", ...style }}
    >
      {children}
    </motion.div>
  );
}
