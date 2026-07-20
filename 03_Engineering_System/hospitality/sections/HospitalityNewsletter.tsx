"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function HospitalityNewsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#1C1C1A] py-24">
      {/* Subtle animated radial gradient background */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)",
            "radial-gradient(ellipse 80% 80% at 40% 60%, rgba(201,168,76,0.08) 0%, transparent 70%)",
            "radial-gradient(ellipse 80% 80% at 60% 40%, rgba(201,168,76,0.04) 0%, transparent 70%)",
            "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
        <motion.div
          className="flex flex-col items-center text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
            },
          }}
        >
          <motion.span
            className="text-xs tracking-[0.2em] text-[var(--wk-accent-dark)]"
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.1 },
              },
            }}
          >
            STAY CONNECTED
          </motion.span>

          <motion.h2
            className="mt-4 font-heading text-2xl tracking-[-0.01em] text-white sm:text-3xl"
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            Join the World of Aurelia
          </motion.h2>

          <motion.p
            className="mt-4 max-w-md text-sm leading-relaxed text-white/50"
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.3 },
              },
            }}
          >
            Receive curated stories, exclusive offers, and invitations to
            extraordinary experiences.
          </motion.p>

          <motion.form
            onSubmit={handleSubmit}
            className="mt-10 flex w-full max-w-md flex-col gap-3 sm:flex-row"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 border-b border-white/20 bg-transparent py-3 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-[var(--wk-accent-dark)]"
            />
            <motion.button
              type="submit"
              className="bg-[var(--wk-accent-dark)] px-6 py-3 text-xs tracking-[0.12em] text-white transition-colors hover:bg-[#B8953D] sm:px-8"
              whileTap={{ scale: 0.97 }}
              whileHover={{ scale: 1.02 }}
            >
              SUBSCRIBE
            </motion.button>
          </motion.form>

          <AnimatePresence>
            {submitted && (
              <motion.div
                className="mt-6 flex items-center gap-2"
                initial={{ opacity: 0, y: 12, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Checkmark */}
                <motion.svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                >
                  <motion.path
                    d="M3 8l3.5 3.5L13 5"
                    stroke="var(--wk-accent-dark)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                  />
                </motion.svg>
                <p className="text-xs tracking-[0.08em] text-[var(--wk-accent-dark)]">
                  Thank you for subscribing. Welcome to the family.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.p
            className="mt-6 text-[10px] text-white/25"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { duration: 0.5, delay: 0.5 },
              },
            }}
          >
            We respect your privacy. Unsubscribe at any time.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
