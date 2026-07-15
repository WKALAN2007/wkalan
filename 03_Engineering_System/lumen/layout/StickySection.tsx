"use client";

import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface StickySectionProps {
  children: ReactNode;
  index: number;
  total: number;
}

export function StickySection({ children, index }: StickySectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const numberY = useTransform(scrollYProgress, [0, 1], ["30%", "-20%"]);
  const numberOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.06, 0.06, 0]);

  // Only the first section gets the sticky paper effect
  const isSticky = index === 0;

  return (
    <div
      ref={sectionRef}
      style={{
        position: isSticky ? "sticky" : "relative",
        top: 0,
        minHeight: isSticky ? "100vh" : "auto",
        zIndex: index + 1,
      }}
    >
      {/* Decorative number */}
      <motion.span
        className="select-none pointer-events-none hidden lg:block"
        style={{
          position: "absolute",
          right: "4vw",
          bottom: "8vh",
          zIndex: 0,
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(12rem, 20vw, 20rem)",
          lineHeight: 0.75,
          color: "var(--lumen-accent)",
          opacity: numberOpacity,
          y: numberY,
        }}
        aria-hidden="true"
      >
        {String(index + 1).padStart(2, "0")}
      </motion.span>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {children}
      </div>

      {/* Bottom fade — only on the sticky paper */}
      {isSticky && (
        <div
          className="pointer-events-none"
          style={{
            position: "absolute",
            insetInline: 0,
            bottom: 0,
            height: "8rem",
            zIndex: 10,
            background: "linear-gradient(to top, var(--lumen-bg) 0%, transparent 100%)",
          }}
        />
      )}
    </div>
  );
}
