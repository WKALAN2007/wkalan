"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { GSAPReveal, GSAPParallax } from "../components/GSAPScrollReveal";
import { DrawUnderline } from "../components/AnimatedGear";
import detail1 from "@/public/watches/detail-1.jpg";
import detail2 from "@/public/watches/detail-2.jpg";

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section
      ref={containerRef}
      id="about"
      style={{
        padding: "clamp(5rem, 10vw, 8rem) clamp(1.5rem, 5vw, 3rem)",
        background: "#1a1a1a",
        borderTop: "1px solid rgba(212,197,169,0.04)",
        borderBottom: "1px solid rgba(212,197,169,0.04)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 64 }}
        >
          <span style={{ width: 40, height: 1, background: "rgba(184,153,71,0.25)" }} />
          <span style={{
            fontFamily: "'Courier Prime', monospace", fontSize: 9,
            letterSpacing: "0.4em", color: "rgba(184,153,71,0.6)",
          }}>
            ABOUT THE ARCHIVE
          </span>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "clamp(3rem, 6vw, 5rem)",
        }}
          className="lg:grid-cols-[1fr_1fr]">
          {/* Left: Editorial text */}
          <div>
            <GSAPReveal animation="fadeUp" duration={0.8}>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 500,
                fontStyle: "italic",
                lineHeight: 1.2,
                color: "#d4c5a9",
                margin: "0 0 32px",
              }}>
                &ldquo;A watch is the only relic of the analog age
                that still commands the wrist of the modern world.&rdquo;
              </h2>
            </GSAPReveal>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <p style={{
                fontFamily: "'Courier Prime', monospace",
                fontSize: 12,
                lineHeight: 1.8,
                color: "rgba(212,197,169,0.55)",
                margin: "0 0 20px",
              }}>
                Founded in 1887 by master watchmaker Henri Delacroix on Rue du Rhône in Geneva,
                Atelier Horlogère has dedicated itself to a singular pursuit: the creation of
                timepieces that transcend mere function.
              </p>
              <p style={{
                fontFamily: "'Courier Prime', monospace",
                fontSize: 12,
                lineHeight: 1.8,
                color: "rgba(212,197,169,0.55)",
                margin: "0 0 20px",
              }}>
                Each movement is assembled by a single artisan. Each dial is engine-turned
                on rose lathes from 1912. Each bridge is hand-bevelled at precisely 45 degrees —
                a geometry unchanged for over a century.
              </p>
              <p style={{
                fontFamily: "'Courier Prime', monospace",
                fontSize: 12,
                lineHeight: 1.8,
                color: "rgba(212,197,169,0.55)",
                margin: 0,
              }}>
                This archive exists to preserve and catalogue the finest examples of our craft.
                Every photograph is taken from the original timepiece — held physically within
                our atelier in Geneva, Switzerland.
              </p>
            </motion.div>

            {/* Founder attribution */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ marginTop: 40, paddingTop: 24, borderTop: "1px solid rgba(212,197,169,0.06)" }}
            >
              <span style={{
                fontFamily: "'Cinzel', serif", fontSize: 13, fontWeight: 600,
                color: "#B89947", display: "block", marginBottom: 4,
              }}>
                Henri Delacroix
              </span>
              <span style={{
                fontFamily: "'Courier Prime', monospace", fontSize: 9,
                letterSpacing: "0.2em", color: "rgba(212,197,169,0.3)",
              }}>
                FOUNDER & MASTER WATCHMAKER · GENÈVE, 1887
              </span>
              {/* GSAP DrawSVG underline */}
              <div style={{ marginTop: 16 }}>
                <DrawUnderline width={140} />
              </div>
            </motion.div>
          </div>

          {/* Right: Images with GSAP parallax */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <GSAPParallax speed={0.2}>
              <div style={{
                position: "relative", aspectRatio: "16/10",
                border: "1px solid rgba(212,197,169,0.04)", overflow: "hidden",
              }}>
                <Image src={detail1} alt="Watch movement detail" fill className="object-cover" sizes="50vw" quality={85} />
              </div>
            </GSAPParallax>
            <GSAPParallax speed={0.35}>
              <div style={{
                position: "relative", aspectRatio: "16/10",
                border: "1px solid rgba(212,197,169,0.04)", overflow: "hidden",
              }}>
                <Image src={detail2} alt="Craftsmanship detail" fill className="object-cover" sizes="50vw" quality={85} />
              </div>
            </GSAPParallax>
          </div>
        </div>
      </div>
    </section>
  );
}
