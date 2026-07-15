"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const inviteChars = "Stay in touch.".split(" ");

export function FashionNewsletter() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-[#FAFAFA] px-6">
      <div className="relative z-10 flex flex-col items-center gap-10 text-center">
        {/* Chapter label */}
        <motion.span
          className="text-xs tracking-[0.2em] text-[#B8B0A0]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.7 } },
          }}
        >
          第五章 · 联系
        </motion.span>

        {/* Character-by-character headline */}
        <h2 className="font-heading text-3xl tracking-[-0.01em] text-[#1E1E1C] sm:text-5xl">
          <motion.span
            className="inline-flex flex-wrap justify-center gap-x-[0.25em]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
            }}
          >
            {inviteChars.map((char, i) => (
              <motion.span
                key={char + i}
                className="inline-block"
                variants={{
                  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
              >
                {char === " " ? " " : char}
              </motion.span>
            ))}
          </motion.span>
        </h2>

        {/* Description */}
        <motion.p
          className="max-w-sm text-sm leading-relaxed text-[#8C8880]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] },
            },
          }}
        >
          Early access to new drops, collection notes,
          <br />
          and the occasional letter from our atelier.
        </motion.p>

        {/* Form or success message */}
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="flex w-full max-w-sm flex-col gap-3 sm:flex-row"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, delay: 1.2 },
                },
              }}
              exit={{ opacity: 0, y: -16, transition: { duration: 0.3 } }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="flex-1 border-b border-[#D4CEC6] bg-transparent px-1 py-3 text-sm text-[#1E1E1C] placeholder-[#B8B0A0] outline-none transition-colors focus:border-[#1E1E1C]"
              />
              <button
                type="submit"
                className="border border-[#1E1E1C] px-8 py-3 text-sm tracking-[0.08em] text-[#1E1E1C] transition-all hover:bg-[#1E1E1C] hover:text-white"
              >
                Subscribe
              </button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              className="flex flex-col items-center gap-2"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="font-heading text-2xl text-[#1E1E1C]">Thank you.</span>
              <span className="text-sm text-[#8C8880]">You&apos;re on the list.</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
