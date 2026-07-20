"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV = [
  { label: "Archive", href: "#archive" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Journal", href: "#journal" },
];

export function WatchHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled ? "rgba(15,15,15,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(212,197,169,0.06)" : "1px solid transparent",
          transition: "all 0.7s ease",
        }}
      >
        <div style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "20px clamp(1.5rem, 5vw, 3rem)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          {/* Logo — museum style monogram */}
          <a href="/watches" className="group/cursor" style={{ textDecoration: "none", zIndex: 50, position: "relative" }}>
            <span style={{
              fontFamily: "'Cinzel', serif",
              fontSize: 11,
              letterSpacing: "0.3em",
              color: "#B89947",
              fontWeight: 600,
            }}>
              ATELIER
            </span>
            <span style={{
              display: "block",
              fontFamily: "'Courier Prime', monospace",
              fontSize: 7,
              letterSpacing: "0.35em",
              color: "rgba(212,197,169,0.35)",
              marginTop: 2,
            }}>
              HORLOGÈRE · GENÈVE
            </span>
          </a>

          {/* Desktop nav */}
          <nav style={{ display: "none", gap: 32, alignItems: "center" }}
            className="md:flex">
            {NAV.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group/cursor"
                style={{
                  fontFamily: "'Courier Prime', monospace",
                  fontSize: 10,
                  letterSpacing: "0.2em",
                  color: "rgba(212,197,169,0.7)",
                  textDecoration: "none",
                  transition: "color 0.4s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#B89947")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(212,197,169,0.7)")}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              zIndex: 50, padding: 12, marginRight: -12, background: "none", border: "none",
              display: "block",
            }}
            className="md:hidden group/cursor"
            aria-label="Menu"
          >
            {menuOpen ? <X size={20} color="rgba(212,197,169,0.7)" /> : <Menu size={20} color="rgba(212,197,169,0.7)" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed", inset: 0, zIndex: 90,
              background: "rgba(15,15,15,0.97)", backdropFilter: "blur(24px)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            <nav style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 40 }}>
              {NAV.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: 36,
                    color: "rgba(212,197,169,0.7)",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
