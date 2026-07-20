"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import heroBg from "@/public/watches/hero-bg.jpg";
import craft1 from "@/public/watches/craft-1.jpg";
import detail1 from "@/public/watches/detail-1.jpg";

const GALLERY = [
  { src: heroBg, alt: "Archival photograph — Chronographe Souverain", span: "col-span-2 row-span-2" },
  { src: craft1, alt: "Movement detail — hand-bevelled bridges", span: "" },
  { src: detail1, alt: "Dial detail — guilloché pattern", span: "" },
];

export function GallerySection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      id="gallery"
      style={{
        padding: "clamp(5rem, 10vw, 8rem) clamp(1.5rem, 5vw, 3rem)",
        background: "#121212",
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
            GALLERY
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 600,
            lineHeight: 1.1,
            color: "#d4c5a9",
            margin: "0 0 48px",
          }}
        >
          Archival
          <br />
          <span style={{ color: "#B89947" }}>Photographs</span>
        </motion.h2>

        {/* Gallery grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "auto auto",
          gap: "clamp(0.5rem, 1vw, 1rem)",
        }}>
          {GALLERY.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={item.span}
              style={{
                position: "relative",
                minHeight: i === 0 ? 400 : 250,
                border: "1px solid rgba(212,197,169,0.04)",
                overflow: "hidden",
                background: "#1c1c1c",
              }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-1000"
                sizes={i === 0 ? "100vw" : "50vw"}
                quality={90}
              />
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                padding: "16px 20px",
                background: "linear-gradient(to top, rgba(18,18,18,0.8) 0%, transparent 100%)",
              }}>
                <span style={{
                  fontFamily: "'Courier Prime', monospace",
                  fontSize: 9,
                  letterSpacing: "0.2em",
                  color: "rgba(212,197,169,0.4)",
                }}>
                  {item.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
