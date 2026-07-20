"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AnimatedGear } from "./AnimatedGear";

/**
 * Museum-vault style loading screen.
 * Gold circular reveal with Cinzel brand reveal.
 * Duration: 2 seconds.
 */
export function MuseumLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="museum-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 300,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#121212",
            flexDirection: "column",
          }}
        >
          {/* Animated interlocking gears (Lottie replacement) */}
          <div style={{ position: "absolute", opacity: 0.4 }}>
            <AnimatedGear size={140} />
          </div>

          {/* Center content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ textAlign: "center", zIndex: 1 }}
          >
            {/* Brand letters staggered */}
            <div style={{ display: "flex", gap: 6, justifyContent: "center", marginBottom: 20 }}>
              {"ATELIER".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.25 + i * 0.08,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: 18,
                    fontWeight: 600,
                    color: "#B89947",
                    letterSpacing: "0.4em",
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Gold line reveal */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.9, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
              style={{
                width: 60,
                height: 1,
                background: "rgba(184,153,71,0.4)",
                margin: "0 auto",
                transformOrigin: "center",
              }}
            />

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              style={{
                fontFamily: "'Courier Prime', monospace",
                fontSize: 8,
                letterSpacing: "0.4em",
                color: "rgba(212,197,169,0.3)",
                marginTop: 16,
              }}
            >
              ARCHIVE OF FINE TIMEPIECES
            </motion.p>
          </motion.div>

          {/* Bottom loading bar */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "absolute",
              bottom: "15%",
              left: "50%",
              transform: "translateX(-50%)",
              width: 100,
              height: 1,
              background: "rgba(184,153,71,0.3)",
              transformOrigin: "left",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
