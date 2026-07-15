"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export function NorthContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="bg-white">
      {/* Back button */}
      <div className="fixed left-8 top-24 z-40">
        <Link
          href="/north"
          className="flex items-center gap-2 text-xs tracking-[0.08em] text-[var(--color-text-tertiary)] no-underline transition-colors hover:text-[var(--color-accent)]"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M10 3L5 8l5 5" />
          </svg>
          Back
        </Link>
      </div>
      <div className="grid min-h-screen lg:grid-cols-2">
        <section className="flex items-center px-8 pt-32 pb-20 sm:px-16">
          <div className="max-w-md">
            <motion.span className="text-xs tracking-[0.25em] text-gray-400" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>CONTACT</motion.span>
            <motion.h1 className="mt-8 font-heading text-4xl leading-[1.1] tracking-[-0.01em] text-gray-900 sm:text-5xl md:text-6xl" initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}>
              We would love<br />to hear from you.
            </motion.h1>
            <motion.p className="mt-8 text-sm leading-relaxed text-gray-500" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}>
              Whether you want to learn more about North, share your own memory story, or explore working with us — we read every message.
            </motion.p>
            <motion.div className="mt-12 flex flex-col gap-6" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}>
              <div>
                <p className="text-xs tracking-[0.1em] text-gray-400">EMAIL</p>
                <a href="mailto:hello@north.memory" className="text-sm text-[var(--color-accent)] underline underline-offset-4 transition-colors hover:text-gray-700">hello@north.memory</a>
              </div>
              <div>
                <p className="text-xs tracking-[0.1em] text-gray-400">OFFICE</p>
                <p className="text-sm text-gray-500">Portland, Oregon<br />By appointment only.</p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="flex items-center bg-white px-8 py-20 sm:px-16">
          <div className="w-full max-w-md">
            {submitted ? (
              <motion.div className="flex flex-col gap-4" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                <div className="h-[1px] w-12 bg-[var(--color-accent)]" />
                <p className="font-heading text-2xl leading-[1.2] text-gray-800">Thank you.</p>
                <p className="text-sm leading-relaxed text-gray-500">We read every message. Someone from our team will get back to you within a few days.</p>
              </motion.div>
            ) : (
              <motion.form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="flex flex-col gap-6" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs tracking-[0.1em] text-gray-400">NAME</label>
                  <input type="text" required className="border-b border-gray-200 bg-transparent py-3 text-sm text-gray-800 outline-none transition-colors focus:border-[var(--color-accent)]" placeholder="Your name" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs tracking-[0.1em] text-gray-400">EMAIL</label>
                  <input type="email" required className="border-b border-gray-200 bg-transparent py-3 text-sm text-gray-800 outline-none transition-colors focus:border-[var(--color-accent)]" placeholder="you@example.com" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs tracking-[0.1em] text-gray-400">MESSAGE</label>
                  <textarea rows={4} required className="resize-none border-b border-gray-200 bg-transparent py-3 text-sm text-gray-800 outline-none transition-colors focus:border-[var(--color-accent)]" placeholder="Tell us your story..." />
                </div>
                <button type="submit" className="mt-4 inline-flex items-center justify-center rounded-full bg-gray-900 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--color-accent)] hover:text-white">
                  Send message
                </button>
              </motion.form>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
