"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import watch3 from "@/public/watches/watch-3.jpg";
import heroWatch from "@/public/watches/hero-watch.jpg";

const ENTRIES = [
  {
    date: "2024.12.15",
    title: "On the Geometry of Bevels",
    excerpt: "The 45-degree bevel is not arbitrary. It is the angle at which light breaks most evenly across the surface of a bridge — a discovery made in 1887 and never improved upon.",
    image: watch3,
  },
  {
    date: "2024.11.02",
    title: "The Rose Engine: A Machine That Sings",
    excerpt: "Our guilloché dials are cut on rose engines dating from 1912. Each pattern is unique. Each cut is made by hand. Each dial is a fingerprint of the craftsman who made it.",
    image: heroWatch,
  },
];

export function JournalSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      id="journal"
      style={{
        padding: "clamp(5rem, 10vw, 8rem) clamp(1.5rem, 5vw, 3rem)",
        background: "#1a1a1a",
        borderTop: "1px solid rgba(212,197,169,0.04)",
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
            THE JOURNAL
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
          Notes from
          <br />
          <span style={{ color: "#B89947" }}>the Atelier</span>
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
          Observations on craft, time, and the art of mechanical precision.
          Published irregularly — like the completion of a hand-bevelled bridge.
        </motion.p>

        {/* Journal entries */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: "clamp(2rem, 4vw, 3rem)",
        }}>
          {ENTRIES.map((entry, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group/cursor"
              style={{
                border: "1px solid rgba(212,197,169,0.04)",
                background: "#1c1c1c",
                transition: "border-color 0.5s",
              }}
            >
              {/* Image */}
              <div style={{
                position: "relative", aspectRatio: "16/9", overflow: "hidden",
                borderBottom: "1px solid rgba(212,197,169,0.04)",
              }}>
                <Image
                  src={entry.image}
                  alt={entry.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover/cursor:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={85}
                />
              </div>

              {/* Content */}
              <div style={{ padding: "28px 24px" }}>
                <span style={{
                  fontFamily: "'Courier Prime', monospace",
                  fontSize: 9,
                  letterSpacing: "0.25em",
                  color: "rgba(184,153,71,0.6)",
                  display: "block",
                  marginBottom: 12,
                }}>
                  {entry.date}
                </span>
                <h3 style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "#d4c5a9",
                  margin: "0 0 12px",
                  lineHeight: 1.3,
                }}>
                  {entry.title}
                </h3>
                <p style={{
                  fontFamily: "'Courier Prime', monospace",
                  fontSize: 11,
                  lineHeight: 1.6,
                  color: "rgba(212,197,169,0.5)",
                  margin: 0,
                }}>
                  {entry.excerpt}
                </p>
                <div style={{ marginTop: 20 }}>
                  <span style={{
                    fontFamily: "'Courier Prime', monospace",
                    fontSize: 9,
                    letterSpacing: "0.2em",
                    color: "rgba(212,197,169,0.3)",
                    cursor: "pointer",
                  }}>
                    READ ENTRY →
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
