"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("north-cookies-accepted");
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("north-cookies-accepted", "true");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-x-0 bottom-0 z-[200] border-t border-[var(--color-border)] bg-[var(--color-background)] px-6 py-5"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mx-auto flex max-w-[var(--container-max)] flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <p className="text-xs leading-relaxed text-[var(--color-text-secondary)] max-w-lg text-center sm:text-left">
              We use cookies to understand how people use North and to make the
              site better. We never track you across other sites.{" "}
              <a
                href="#"
                className="text-[var(--color-accent)] underline underline-offset-2"
              >
                Privacy Policy
              </a>
            </p>
            <button
              onClick={accept}
              className="shrink-0 rounded-full bg-[var(--color-text-primary)] px-6 py-2 text-xs font-medium text-[var(--color-text-inverse)] transition-colors hover:bg-[var(--color-accent)]"
            >
              Accept
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
