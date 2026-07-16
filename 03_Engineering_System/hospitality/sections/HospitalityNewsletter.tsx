"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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
    <section className="bg-[#1C1C1A] py-24">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
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
          <span className="text-xs tracking-[0.2em] text-[var(--color-accent-dark)]">
            STAY CONNECTED
          </span>
          <h2 className="mt-4 font-heading text-2xl tracking-[-0.01em] text-white sm:text-3xl">
            Join the World of Aurelia
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/50">
            Receive curated stories, exclusive offers, and invitations to
            extraordinary experiences.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-10 flex w-full max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 border-b border-white/20 bg-transparent py-3 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-[var(--color-accent-dark)]"
            />
            <button
              type="submit"
              className="bg-[var(--color-accent-dark)] px-6 py-3 text-xs tracking-[0.12em] text-white transition-colors hover:bg-[#B8953D] sm:px-8"
            >
              SUBSCRIBE
            </button>
          </form>

          {submitted && (
            <motion.p
              className="mt-6 text-xs tracking-[0.08em] text-[var(--color-accent-dark)]"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Thank you for subscribing. Welcome to the family.
            </motion.p>
          )}

          <p className="mt-6 text-[10px] text-white/25">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
