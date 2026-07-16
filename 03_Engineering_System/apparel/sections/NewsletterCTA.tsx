"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  return (
    <section className="bg-[#1A1A18] py-28 sm:py-36">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            className="text-xs font-medium uppercase tracking-[0.2em] text-white/40"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.7 } },
            }}
          >
            Stay Connected
          </motion.span>

          <motion.h2
            className="mt-6 font-heading text-3xl leading-[1.2] text-white sm:text-4xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            The MÉTIER Journal
          </motion.h2>

          <motion.p
            className="mt-4 text-sm leading-relaxed text-white/50 sm:text-base"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            Early access to new collections, editorial stories, and invitations to in-person events. Sent sparingly.
          </motion.p>

          <motion.div
            className="mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="mx-auto flex max-w-md items-center gap-0"
                  exit={{ opacity: 0, y: -16, transition: { duration: 0.3 } }}
                >
                  <input
                    ref={inputRef}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="h-12 flex-1 border-b border-white/20 bg-transparent px-0 text-sm text-white placeholder:text-white/30 focus:border-white/60 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="ml-4 flex h-12 w-12 flex-shrink-0 items-center justify-center border border-white/20 text-white/60 transition-all hover:border-white/60 hover:text-white"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  className="flex flex-col items-center gap-3"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20">
                    <Check className="h-5 w-5 text-white/60" />
                  </div>
                  <p className="text-sm text-white/60">Thank you. You&apos;re on the list.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
