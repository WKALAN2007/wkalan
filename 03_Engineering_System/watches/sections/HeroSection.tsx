"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import dynamic from "next/dynamic";
import { MouseParallax } from "../components/MouseParallax";

// Lazy-load 3D watch — only loads when hero is visible
const Watch3D = dynamic(
  () => import("../components/Watch3D").then((m) => ({ default: m.Watch3D })),
  { ssr: false, loading: () => null }
);

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const overlayOpacity = useTransform(scrollYProgress, [0, 0.7], [0.45, 0.9]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], ["0%", "8%"]);

  return (
    <section
      ref={containerRef}
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "radial-gradient(ellipse at 50% 40%, #1a1a18 0%, #121212 60%)",
      }}
    >
      {/* ── 3D Watch (right side or center depending on screen) ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          opacity: 0.5,
        }}
      >
        <Watch3D />
      </div>

      {/* ── Dark overlay for text readability ── */}
      <motion.div
        style={{
          opacity: overlayOpacity,
          position: "absolute",
          inset: 0,
          zIndex: 2,
          background: "radial-gradient(ellipse at 50% 40%, transparent 0%, rgba(18,18,18,0.5) 40%, rgba(18,18,18,0.9) 85%)",
        }}
      />

      {/* ── Floating light orbs (glassmorphism ambient) ── */}
      <motion.div
        animate={{ y: [0, -30, 0], opacity: [0.12, 0.18, 0.12] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "15%",
          right: "20%",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(184,153,71,0.08) 0%, transparent 70%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <motion.div
        animate={{ y: [0, 20, 0], opacity: [0.08, 0.14, 0.08] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{
          position: "absolute",
          bottom: "20%",
          left: "10%",
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(184,153,71,0.06) 0%, transparent 70%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* ── Content ── */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY, position: "relative", zIndex: 10, textAlign: "center", padding: "0 clamp(1.5rem, 5vw, 3rem)" }}
      >
        {/* Museum classification badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: 32 }}
        >
          <span style={{
            display: "inline-block",
            fontFamily: "'Courier Prime', monospace",
            fontSize: 9,
            letterSpacing: "0.4em",
            color: "#B89947",
            border: "1px solid rgba(184,153,71,0.25)",
            padding: "6px 18px",
            backdropFilter: "blur(8px)",
            background: "rgba(18,18,18,0.3)",
          }}>
            OMEGA · CLASSIFICATION Ω
          </span>
        </motion.div>

        {/* Hero headline with mouse parallax */}
        <MouseParallax strength={10}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(2.8rem, 7vw, 6rem)",
              fontWeight: 600,
              lineHeight: 1.08,
              letterSpacing: "-0.01em",
              color: "#d4c5a9",
              margin: 0,
              textShadow: "0 2px 40px rgba(0,0,0,0.5)",
            }}
          >
            Preserving the
            <br />
            Art of{" "}
            <span style={{
              color: "#B89947",
              position: "relative",
              display: "inline-block",
            }}>
              Time
              <span style={{
                position: "absolute",
                bottom: -4,
                left: 0,
                right: 0,
                height: 2,
                background: "rgba(184,153,71,0.3)",
              }} />
            </span>
          </motion.h1>
        </MouseParallax>

        {/* Subtitle — Courier Prime */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "'Courier Prime', monospace",
            fontSize: "clamp(0.8rem, 1.2vw, 1rem)",
            color: "rgba(212,197,169,0.6)",
            maxWidth: 520,
            margin: "24px auto 0",
            lineHeight: 1.6,
            textShadow: "0 1px 20px rgba(0,0,0,0.5)",
          }}
        >
          A museum-grade archive of exceptional Swiss timepieces.
          <br />
          Each watch photographed, catalogued, and preserved for the analog era.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginTop: 40 }}
        >
          <a
            href="#archive"
            className="group/cursor"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              fontFamily: "'Courier Prime', monospace",
              fontSize: 10,
              letterSpacing: "0.25em",
              color: "#B89947",
              textDecoration: "none",
              border: "1px solid rgba(184,153,71,0.3)",
              padding: "14px 32px",
              backdropFilter: "blur(8px)",
              background: "rgba(18,18,18,0.4)",
              transition: "all 0.5s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(184,153,71,0.1)";
              e.currentTarget.style.borderColor = "rgba(184,153,71,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(18,18,18,0.4)";
              e.currentTarget.style.borderColor = "rgba(184,153,71,0.3)";
            }}
          >
            EXPLORE THE ARCHIVE
            <span style={{ transition: "transform 0.5s" }} className="group-hover/cursor:translate-x-1">→</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 0.8 }}
        style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", zIndex: 10 }}
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown size={16} color="rgba(212,197,169,0.3)" />
        </motion.div>
      </motion.div>
    </section>
  );
}
