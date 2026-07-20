"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { TiltCard } from "../components/MouseParallax";
import watch1 from "@/public/watches/watch-1.jpg";
import watch2 from "@/public/watches/watch-2.jpg";
import watch3 from "@/public/watches/collection-1.jpg";
import craft1 from "@/public/watches/craft-1.jpg";
import heritageImg from "@/public/watches/heritage-2.jpg";
import heroWatch from "@/public/watches/hero-watch.jpg";

const ARCHIVE = [
  {
    id: "AH-001",
    name: "Chronographe Souverain",
    era: "Contemporary · 2024",
    grade: "OMEGA",
    gradeColor: "#B89947",
    description: "Column-wheel chronograph. Rose gold case, hand-bevelled bridges. Exhibition caseback revealing Calibre AH-01.",
    image: watch1,
    dimensions: "42mm · 18K Rose Gold",
    provenance: "Atelier Horlogère, Genève",
  },
  {
    id: "AH-002",
    name: "Calendrier Perpétuel",
    era: "Contemporary · 2023",
    grade: "OMEGA",
    gradeColor: "#B89947",
    description: "Perpetual calendar complication with moonphase. Platinum case. Flawless mechanical memory until 2100.",
    image: watch2,
    dimensions: "40mm · Platinum",
    provenance: "Atelier Horlogère, Genève",
  },
  {
    id: "AH-003",
    name: "Tourbillon Volant",
    era: "Contemporary · 2024",
    grade: "Class A",
    gradeColor: "#8B9DC3",
    description: "Flying tourbillon. White gold. Each component hand-bevelled over 120 hours by a single master craftsman.",
    image: watch3,
    dimensions: "44mm · White Gold",
    provenance: "Atelier Horlogère, Genève",
  },
  {
    id: "AH-004",
    name: "Montre de Poche Héritage",
    era: "Vintage · 1923",
    grade: "Class A",
    gradeColor: "#8B9DC3",
    description: "Original Calibre A01 pocket watch. The first in-house movement. Hand-wound, 18K gold hunter case.",
    image: heritageImg,
    dimensions: "48mm · 18K Gold",
    provenance: "Collection Henri Delacroix",
  },
  {
    id: "AH-005",
    name: "Édition Spéciale Genève",
    era: "Contemporary · 2024",
    grade: "Class B",
    gradeColor: "#9B8E7E",
    description: "Limited edition of 50 pieces. Guilloché dial cut on rose engines from 1912. Côtes de Genève finishing.",
    image: craft1,
    dimensions: "40mm · 904L Steel",
    provenance: "Atelier Horlogère, Genève",
  },
  {
    id: "AH-006",
    name: "GMT World-Timer",
    era: "Contemporary · 2023",
    grade: "Class B",
    gradeColor: "#9B8E7E",
    description: "Dual timezone complication. 24-hour rotating bezel. Exhibition caseback with Geneva stripes.",
    image: heroWatch,
    dimensions: "42mm · 904L Steel",
    provenance: "Atelier Horlogère, Genève",
  },
];

function ArchiveCard({ item, index }: { item: (typeof ARCHIVE)[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -20]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8], [0.3, 1, 0.5]);

  return (
    <motion.article
      ref={cardRef}
      style={{ y, opacity }}
      className="group/cursor"
    >
      {/* Image with 3D tilt */}
      <TiltCard>
        <div style={{
          position: "relative",
          aspectRatio: "3/4",
          overflow: "hidden",
          border: "1px solid rgba(212,197,169,0.06)",
          background: "#1c1c1c",
          transition: "border-color 0.6s",
        }}>
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-700 group-hover/cursor:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          quality={85}
        />

        {/* Museum label overlay */}
        <div style={{
          position: "absolute",
          bottom: 0, left: 0, right: 0,
          padding: "24px 20px",
          background: "linear-gradient(to top, rgba(18,18,18,0.9) 0%, transparent 100%)",
        }}>
          {/* Grade badge */}
          <span style={{
            fontFamily: "'Courier Prime', monospace",
            fontSize: 9,
            letterSpacing: "0.25em",
            color: item.gradeColor,
            display: "block",
            marginBottom: 8,
          }}>
            [{item.grade}] GRADE
          </span>
          {/* Name */}
          <h3 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(1.1rem, 1.5vw, 1.4rem)",
            fontWeight: 600,
            color: "#d4c5a9",
            margin: "0 0 4px",
          }}>
            {item.name}
          </h3>
          {/* ID */}
          <span style={{
            fontFamily: "'Courier Prime', monospace",
            fontSize: 9,
            letterSpacing: "0.2em",
            color: "rgba(212,197,169,0.35)",
          }}>
            {item.id}
          </span>
        </div>
      </div>
      </TiltCard>

      {/* Metadata */}
      <div style={{ padding: "16px 0" }}>
        <p style={{
          fontFamily: "'Courier Prime', monospace",
          fontSize: 11,
          lineHeight: 1.6,
          color: "rgba(212,197,169,0.5)",
          margin: "0 0 12px",
        }}>
          {item.description}
        </p>
        <div style={{
          display: "flex", gap: 24,
          fontFamily: "'Courier Prime', monospace",
          fontSize: 9,
          letterSpacing: "0.15em",
          color: "rgba(212,197,169,0.3)",
        }}>
          <span>{item.dimensions}</span>
          <span>{item.era}</span>
        </div>
      </div>
    </motion.article>
  );
}

export function ArchiveSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      id="archive"
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
          style={{
            display: "flex", alignItems: "center", gap: 16,
            marginBottom: 64,
          }}
        >
          <span style={{ width: 40, height: 1, background: "rgba(184,153,71,0.25)" }} />
          <span style={{
            fontFamily: "'Courier Prime', monospace",
            fontSize: 9,
            letterSpacing: "0.4em",
            color: "rgba(184,153,71,0.6)",
          }}>
            THE ARCHIVE
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
            margin: "0 0 16px",
          }}
        >
          Catalogued
          <br />
          <span style={{ color: "#B89947" }}>Timepieces</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "'Courier Prime', monospace",
            fontSize: 12,
            color: "rgba(212,197,169,0.5)",
            maxWidth: 480,
            lineHeight: 1.6,
            marginBottom: 64,
          }}
        >
          Each artifact is photographed from the original in our possession.
          Every entry is documented, graded, and preserved — a bridge between
          the analog era and the future.
        </motion.p>

        {/* Archive grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "clamp(2rem, 4vw, 3rem)",
        }}>
          {ARCHIVE.map((item, i) => (
            <ArchiveCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
