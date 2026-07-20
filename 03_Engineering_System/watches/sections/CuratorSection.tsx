"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export function CuratorSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      id="contact"
      style={{
        padding: "clamp(5rem, 10vw, 8rem) clamp(1.5rem, 5vw, 3rem)",
        background: "#121212",
        borderTop: "1px solid rgba(212,197,169,0.04)",
      }}
    >
      <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: 48 }}
        >
          <span style={{
            fontFamily: "'Courier Prime', monospace",
            fontSize: 9,
            letterSpacing: "0.4em",
            color: "rgba(184,153,71,0.6)",
            border: "1px solid rgba(184,153,71,0.2)",
            padding: "8px 20px",
          }}>
            THE CURATOR
          </span>
        </motion.div>

        {/* Headline */}
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
            margin: "0 0 24px",
          }}
        >
          Submit a
          <br />
          <span style={{ color: "#B89947" }}>Timepiece</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "'Courier Prime', monospace",
            fontSize: 12,
            lineHeight: 1.8,
            color: "rgba(212,197,169,0.55)",
            maxWidth: 520,
            margin: "0 auto 48px",
          }}
        >
          We accept submissions of exceptional Swiss timepieces for archival consideration.
          Each submission is reviewed by our curatorial team. Accepted pieces are photographed,
          catalogued, and preserved in perpetuity.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}
          className="sm:flex-row sm:justify-center"
        >
          <a
            href="mailto:curator@horlogere.ch"
            className="group/cursor"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              fontFamily: "'Courier Prime', monospace",
              fontSize: 10,
              letterSpacing: "0.2em",
              color: "#B89947",
              textDecoration: "none",
              border: "1px solid rgba(184,153,71,0.3)",
              padding: "16px 36px",
              transition: "all 0.5s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(184,153,71,0.08)";
              e.currentTarget.style.borderColor = "rgba(184,153,71,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "rgba(184,153,71,0.3)";
            }}
          >
            <Mail size={14} />
            CONTACT THE CURATOR
            <span className="group-hover/cursor:translate-x-1" style={{ transition: "transform 0.5s" }}>→</span>
          </a>
          <a
            href="mailto:archive@horlogere.ch"
            className="group/cursor"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              fontFamily: "'Courier Prime', monospace",
              fontSize: 10,
              letterSpacing: "0.2em",
              color: "rgba(212,197,169,0.5)",
              textDecoration: "none",
              border: "1px solid rgba(212,197,169,0.1)",
              padding: "16px 36px",
              transition: "all 0.5s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(212,197,169,0.2)";
              e.currentTarget.style.color = "rgba(212,197,169,0.8)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(212,197,169,0.1)";
              e.currentTarget.style.color = "rgba(212,197,169,0.5)";
            }}
          >
            SUBMISSION GUIDELINES
            <span className="group-hover/cursor:translate-x-1" style={{ transition: "transform 0.5s" }}>→</span>
          </a>
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "'Courier Prime', monospace",
            fontSize: 9,
            lineHeight: 1.6,
            color: "rgba(212,197,169,0.25)",
            marginTop: 48,
          }}
        >
          Every artifact photographed and catalogued by Atelier Horlogère is held
          physically within our archive in Geneva, Switzerland. Each entry is documented
          from the original timepiece in our possession.
        </motion.p>
      </div>
    </section>
  );
}
