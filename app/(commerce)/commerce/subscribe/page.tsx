"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Check, Truck, Gift, Lock, Zap, Star } from "lucide-react";
import { subscriptionTiers } from "@/03_Engineering_System/commerce/data/products";

const perks = [
  { icon: Truck, title: "Free Shipping", desc: "Always included — no minimums" },
  { icon: Gift, title: "Free Seasonal Gift", desc: "A surprise in every delivery" },
  { icon: Lock, title: "Cancel Anytime", desc: "Pause, skip, or cancel — no lock-in" },
  { icon: Zap, title: "Early Access", desc: "Shop new drops before anyone else" },
];

export default function SubscribePage() {
  const [selected, setSelected] = useState(1); // Default to "The Essential"
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 2500);
  };

  return (
    <main className="min-h-screen bg-[var(--wk-bg)]">
      <div className="mx-auto max-w-[var(--container-wide)] px-[var(--container-padding)] pt-28 pb-6">
        <Link href="/commerce" className="group inline-flex items-center gap-2 text-xs tracking-[0.08em] text-[var(--wk-text-tertiary)] transition-all hover:text-[#3d7a3d] hover:gap-3">
          <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
          [ BACK TO SHOP ]
        </Link>
      </div>

      <div className="mx-auto max-w-[var(--container-wide)] px-[var(--container-padding)] pb-24">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-[10px] tracking-[0.3em] text-[#4a8c4a]"
          >
            SUBSCRIPTION
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 font-heading text-4xl tracking-[-0.02em] text-[var(--wk-text-primary)] md:text-5xl lg:text-6xl"
          >
            Subscribe &amp; Save
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-4 max-w-lg text-sm text-[var(--wk-text-secondary)]"
          >
            Never run out of your essentials. Choose your rhythm — pause, skip, or cancel anytime.
          </motion.p>
        </div>

        {/* Subscription Perks Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {perks.map((perk) => (
            <div key={perk.title} className="flex flex-col items-center gap-2 rounded-xl bg-white p-5 shadow-[var(--shadow-sm)] text-center transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-md)] hover:bg-[#f2faf2] cursor-default">
              <perk.icon size={20} className="text-[#3d7a3d]" />
              <span className="text-sm font-medium text-[var(--wk-text-primary)]">{perk.title}</span>
              <span className="text-[10px] text-[var(--wk-text-tertiary)]">{perk.desc}</span>
            </div>
          ))}
        </motion.div>

        {/* Tier Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-4xl mx-auto mb-16">
          {subscriptionTiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelected(i)}
              className={`relative rounded-2xl p-8 text-center border-2 cursor-pointer transition-all active:scale-[0.98] ${
                selected === i
                  ? tier.featured
                    ? "border-[#3d7a3d] shadow-xl scale-[1.03] bg-white"
                    : "border-[#3d7a3d] shadow-lg bg-white"
                  : "border-[var(--wk-border)] bg-white hover:border-[#7ab87a] hover:shadow-md hover:-translate-y-1"
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#3d7a3d] px-5 py-1.5 text-[10px] font-semibold tracking-[0.08em] text-white whitespace-nowrap shadow-lg shadow-[#3d7a3d]/30">
                  <Star size={10} className="inline mr-1" /> MOST POPULAR
                </span>
              )}

              {selected === i && !tier.featured && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[var(--wk-text-primary)] px-5 py-1.5 text-[10px] font-semibold tracking-[0.08em] text-white whitespace-nowrap">
                  SELECTED
                </span>
              )}

              <div className="text-4xl mb-4 transition-transform hover:scale-110 cursor-default">{tier.icon}</div>
              <h3 className="font-heading text-xl text-[var(--wk-text-primary)]">{tier.name}</h3>
              <p className="mt-1 text-xs text-[var(--wk-text-tertiary)]">{tier.frequency}</p>
              <p className="mt-4 font-heading text-3xl font-bold text-[#2d5a2d]">${tier.price}</p>
              <p className="text-xs text-[var(--wk-text-tertiary)]">per delivery</p>

              <ul className="mt-6 space-y-2 text-left">
                {tier.perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-2 text-xs text-[var(--wk-text-secondary)]">
                    <Check size={12} className="text-[#3d7a3d] flex-shrink-0" />
                    {perk}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <motion.button
            onClick={handleSubscribe}
            whileTap={{ scale: 0.97 }}
            className={`inline-flex items-center gap-2 rounded-full px-10 py-4 text-sm font-semibold tracking-[0.08em] transition-all active:scale-[0.98] ${
              subscribed
                ? "bg-[#2D8A56] text-white shadow-xl shadow-[#2D8A56]/30"
                : "bg-[#3d7a3d] text-white hover:bg-[#2d5a2d] hover:shadow-2xl hover:shadow-[#3d7a3d]/40 hover:-translate-y-1"
            }`}
          >
            {subscribed ? (
              <><Check size={18} /> SUBSCRIBED! WELCOME TO VERDANT</>
            ) : (
              <>[ SUBSCRIBE TO {subscriptionTiers[selected].name.toUpperCase()} — ${subscriptionTiers[selected].price}/MO ]</>
            )}
          </motion.button>
          <p className="mt-4 text-[10px] text-[var(--wk-text-tertiary)]">
            Pause, skip, or cancel anytime. No commitments.
          </p>
        </div>
      </div>
    </main>
  );
}
