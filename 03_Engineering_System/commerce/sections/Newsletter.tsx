"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="relative overflow-hidden py-24 md:py-32" style={{ background: "#fdf8f0" }}>
      {/* Dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.4]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(90,158,90,0.06) 2px, transparent 2px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="mx-auto max-w-[var(--container-wide)] px-[var(--container-padding)] relative z-10">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Left — Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#4a8c4a]">
              07.
            </span>
            <h2 className="mt-4 font-heading text-3xl tracking-[-0.02em] text-[var(--wk-text-primary)] md:text-4xl lg:text-5xl">
              Get 10% Off
              <br />
              Your First Order
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--wk-text-secondary)]">
              Join the Verdant community for exclusive offers, green-living tips,
              and early access to new products — plus a welcome discount.
            </p>

            {/* Perks */}
            <div className="mt-8 space-y-3">
              {[
                "First access to new product drops",
                "Exclusive seasonal gift guides",
                "10% off your first purchase",
              ].map((perk, i) => (
                <motion.div
                  key={perk}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                  className="flex items-center gap-3 text-xs text-[var(--wk-text-secondary)] group cursor-default"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#3d7a3d]/10 transition-all group-hover:bg-[#3d7a3d]/20 group-hover:scale-110">
                    <Check size={9} className="text-[#3d7a3d]" />
                  </span>
                  {perk}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-[10px] tracking-[0.12em] text-[var(--wk-text-tertiary)]">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="mt-2 w-full border-b-2 border-[var(--wk-border-strong)] bg-transparent py-3 text-sm text-[var(--wk-text-primary)] outline-none transition-all placeholder:text-[var(--wk-text-tertiary)] hover:border-[#7ab87a] focus:border-[#3d7a3d] focus:pb-4"
                />
              </div>

              <motion.button
                type="submit"
                whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-3 font-mono text-[11px] tracking-[0.12em] text-[#3d7a3d] transition-all hover:text-[#2d5a2d] hover:gap-4 active:scale-[0.98]"
              >
                {submitted ? (
                  <span className="flex items-center gap-2 text-[#2D8A56]">
                    <Check size={14} />
                    WELCOME! CHECK YOUR EMAIL
                  </span>
                ) : (
                  <>
                    [ SIGN UP ]
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-2"
                    />
                  </>
                )}
              </motion.button>
            </form>

            <p className="mt-6 text-[10px] leading-relaxed text-[var(--wk-text-tertiary)]">
              By subscribing, you agree to our Privacy Policy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
