"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { subscriptionTiers } from "@/03_Engineering_System/commerce/data/products";

export function SubscriptionTiers() {
  return (
    <section
      id="subscriptions"
      className="py-24 md:py-32"
      style={{ background: "linear-gradient(180deg, #ffffff 0%, #f2faf2 100%)" }}
    >
      <div className="mx-auto max-w-[var(--container-wide)] px-[var(--container-padding)]">
        {/* Header */}
        <div className="mb-16 text-center md:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono text-[10px] tracking-[0.3em] text-[#4a8c4a]"
          >
            08.
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 font-heading text-4xl tracking-[-0.02em] text-[var(--wk-text-primary)] md:text-5xl lg:text-6xl"
          >
            Subscribe &amp; Save
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mx-auto mt-4 max-w-lg text-sm text-[var(--wk-text-secondary)]"
          >
            Never run out of your essentials. Choose your rhythm — pause, skip, or cancel anytime.
          </motion.p>
        </div>

        {/* Tiers */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-4xl mx-auto">
          {subscriptionTiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`relative rounded-2xl bg-white p-8 text-center border-2 transition-all duration-500 hover:shadow-xl active:scale-[0.98] ${
                tier.featured
                  ? "border-[#3d7a3d] shadow-lg scale-[1.03] hover:scale-[1.05] hover:shadow-2xl hover:shadow-[#3d7a3d]/20"
                  : "border-[var(--wk-border)] hover:border-[#7ab87a] hover:-translate-y-2"
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#3d7a3d] px-5 py-1.5 text-[10px] font-semibold tracking-[0.08em] text-white whitespace-nowrap shadow-lg shadow-[#3d7a3d]/30 transition-all hover:scale-105 hover:shadow-xl">
                  MOST POPULAR
                </span>
              )}

              <div className="text-4xl mb-4 transition-transform hover:scale-110 cursor-default inline-block">{tier.icon}</div>
              <h3 className="font-heading text-xl text-[var(--wk-text-primary)]">{tier.name}</h3>
              <p className="mt-1 text-xs text-[var(--wk-text-tertiary)]">{tier.frequency}</p>
              <p className="mt-4 font-heading text-3xl font-bold text-[#2d5a2d] transition-all hover:scale-105 cursor-default">${tier.price}</p>
              <p className="text-xs text-[var(--wk-text-tertiary)]">per delivery</p>

              <ul className="mt-6 space-y-2 text-left">
                {tier.perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-2 text-xs text-[var(--wk-text-secondary)] transition-all hover:translate-x-1 cursor-default">
                    <span className="text-[#3d7a3d] font-bold">✓</span>
                    {perk}
                  </li>
                ))}
              </ul>

              <Link
                href="/commerce/subscribe"
                className={`mt-8 inline-block w-full rounded-full py-3.5 text-xs font-semibold tracking-[0.08em] transition-all active:scale-[0.97] ${
                  tier.featured
                    ? "bg-[#3d7a3d] text-white hover:bg-[#2d5a2d] hover:shadow-xl hover:shadow-[#3d7a3d]/40 hover:-translate-y-0.5"
                    : "border-2 border-[#3d7a3d] text-[#3d7a3d] hover:bg-[#3d7a3d] hover:text-white hover:shadow-lg hover:-translate-y-0.5"
                }`}
              >
                {tier.featured ? "[ SUBSCRIBE NOW ]" : "[ GET STARTED ]"}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/commerce/subscribe"
            className="font-mono text-[11px] tracking-[0.1em] text-[var(--wk-text-tertiary)] transition-all hover:text-[#3d7a3d] hover:underline underline-offset-4"
          >
            [ COMPARE ALL PLANS IN DETAIL ]
          </Link>
        </div>
      </div>
    </section>
  );
}
