"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function FashionNewsletter() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-[#FAFAFA] py-24 sm:py-36">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
        <motion.div
          className="mx-auto max-w-lg text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.span
            className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#999999] sm:text-xs"
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            Stay Connected
          </motion.span>

          <motion.h2
            className="mt-5 font-heading text-2xl text-[#1A1A1A] sm:text-3xl"
            style={{ fontFamily: "var(--font-instrument-serif)" }}
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            Join the family
          </motion.h2>

          <motion.p
            className="mt-3 text-sm leading-relaxed text-[#888888]"
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            Early access to our drops, exclusive insights
            <br />
            and way more.
          </motion.p>

          {submitted ? (
            <motion.p
              className="mt-10 text-sm font-medium text-[#1A1A1A]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              Thank you. You&apos;re on the list.
            </motion.p>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-2"
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              <input
                type="email"
                placeholder="Your email address"
                required
                className="flex-1 border-b border-[#CCCCCC] bg-transparent px-1 py-3 text-sm text-[#1A1A1A] outline-none transition-colors placeholder:text-[#AAAAAA] focus:border-[#1A1A1A]"
              />
              <button
                type="submit"
                className="whitespace-nowrap border border-[#1A1A1A] px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] text-[#1A1A1A] transition-all hover:bg-[#1A1A1A] hover:text-white sm:px-8"
              >
                Sign Up
              </button>
            </motion.form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
