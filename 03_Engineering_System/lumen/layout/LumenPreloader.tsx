"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LumenPreloader() {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    const duration = 2000;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const raw = Math.min(elapsed / duration, 1);
      // Ease-out for smoother feel
      const eased = 1 - Math.pow(1 - raw, 3);
      setProgress(Math.round(eased * 100));

      if (raw < 1) {
        requestAnimationFrame(tick);
      } else {
        // Hold at 100 briefly, then exit
        setTimeout(() => setIsDone(true), 400);
        setTimeout(() => setIsHidden(true), 1200);
      }
    };

    requestAnimationFrame(tick);
  }, []);

  if (isHidden) return null;

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{ background: "var(--lumen-bg)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Background image with overlay */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1800&q=80"
              alt=""
              className="h-full w-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: "var(--lumen-bg)", opacity: 0.75 }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-10">
            {/* Logo */}
            <motion.div
              className="flex flex-col items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span
                className="font-heading text-4xl tracking-[-0.02em] sm:text-5xl"
                style={{ color: "var(--lumen-text-primary)" }}
              >
                Lumen
              </span>
              <span
                className="text-xs tracking-[0.2em] uppercase"
                style={{ color: "var(--lumen-text-tertiary)" }}
              >
                Helping people think clearly
              </span>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              className="flex flex-col items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Bar track */}
              <div
                className="h-[1px] w-48 overflow-hidden"
                style={{ background: "var(--lumen-border)" }}
              >
                <motion.div
                  className="h-full"
                  style={{
                    background: "var(--lumen-accent)",
                    width: `${progress}%`,
                  }}
                />
              </div>
              {/* Percentage */}
              <span
                className="font-mono text-xs tracking-[0.1em]"
                style={{ color: "var(--lumen-text-tertiary)" }}
              >
                {progress}%
              </span>
            </motion.div>
          </div>

          {/* Bottom fade gradient */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--lumen-bg)] to-transparent" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
