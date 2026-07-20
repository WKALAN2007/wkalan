"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Leaf, Globe, Heart, Shield, Users, Factory } from "lucide-react";

const values = [
  { icon: Leaf, title: "100% Plant-Based", desc: "Every ingredient is derived from nature. No synthetics, no toxins, no compromises." },
  { icon: Globe, title: "Climate Positive", desc: "We offset 110% of our carbon footprint. From sourcing to shipping." },
  { icon: Heart, title: "1% for the Planet", desc: "We donate 1% of every sale to environmental nonprofits worldwide." },
  { icon: Shield, title: "Third-Party Tested", desc: "Every batch independently lab-tested for purity and potency." },
  { icon: Users, title: "Fair Trade Certified", desc: "Direct partnerships with small-scale farmers and cooperatives." },
  { icon: Factory, title: "Zero-Waste Facility", desc: "Our production runs on 100% renewable energy with closed-loop water systems." },
];

const timeline = [
  { year: "2023", title: "The Spark", desc: "Our founder, a botanist-turned-entrepreneur, realized most 'natural' products weren't. The idea for Verdant was born in a Portland community garden." },
  { year: "2024", title: "First Formulations", desc: "After 18 months of R&D with green chemists and herbalists, our first six products passed rigorous third-party testing." },
  { year: "2025", title: "Launch & Growth", desc: "Verdant launched with 12 products. Within six months, we'd shipped to 50,000 homes and achieved climate-positive certification." },
  { year: "2026", title: "Scaling Impact", desc: "Now with 45+ products, 14 sourcing countries, and a growing refill network. On track for B-Corp certification." },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--wk-bg)]">
      <div className="mx-auto max-w-[var(--container-wide)] px-[var(--container-padding)] pt-28 pb-6">
        <Link href="/commerce" className="group inline-flex items-center gap-2 text-xs tracking-[0.08em] text-[var(--wk-text-tertiary)] transition-all hover:text-[#3d7a3d] hover:gap-3">
          <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
          [ BACK TO SHOP ]
        </Link>
      </div>

      {/* Hero */}
      <div className="mx-auto max-w-[var(--container-narrow)] px-[var(--container-padding)] pb-16 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-[10px] tracking-[0.3em] text-[#4a8c4a]"
        >
          OUR STORY
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 font-heading text-4xl tracking-[-0.02em] text-[var(--wk-text-primary)] md:text-5xl lg:text-6xl"
        >
          Modern Mentality &amp;
          <br />
          Traditional Craft
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-sm leading-relaxed text-[var(--wk-text-secondary)] max-w-xl mx-auto"
        >
          Blending ancestral botanical wisdom with modern green chemistry. Every Verdant
          formula is a conversation between nature&apos;s intelligence and scientific rigor.
        </motion.p>
      </div>

      {/* Image banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-[var(--container-wide)] px-[var(--container-padding)] mb-24"
      >
        <div className="overflow-hidden rounded-2xl aspect-[21/9]">
          <img
            src="https://images.unsplash.com/photo-1605040056130-38d9faad3534?w=1400&h=600&fit=crop"
            alt="Verdant laboratory"
            className="h-full w-full object-cover"
          />
        </div>
      </motion.div>

      {/* Values Grid */}
      <div className="mx-auto max-w-[var(--container-wide)] px-[var(--container-padding)] pb-24">
        <h2 className="font-heading text-2xl tracking-[-0.02em] text-[var(--wk-text-primary)] mb-10 text-center">
          What We Stand For
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="group rounded-2xl bg-white p-6 shadow-[var(--shadow-sm)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-md)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f2faf2] text-[#3d7a3d] transition-all group-hover:bg-[#3d7a3d] group-hover:text-white group-hover:scale-110">
                <v.icon size={20} />
              </div>
              <h3 className="mt-4 font-heading text-lg text-[var(--wk-text-primary)]">{v.title}</h3>
              <p className="mt-2 text-xs text-[var(--wk-text-secondary)] leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-[#1a3a1a] py-24">
        <div className="mx-auto max-w-[var(--container-narrow)] px-[var(--container-padding)]">
          <h2 className="font-heading text-2xl tracking-[-0.02em] text-white mb-12 text-center">
            Our Journey
          </h2>
          <div className="space-y-0">
            {timeline.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="flex gap-6 pb-10 relative"
              >
                <div className="flex-shrink-0 w-16 text-right">
                  <span className="font-heading text-xl text-[#7ab87a]">{t.year}</span>
                </div>
                <div className="relative pl-6 border-l-2 border-[#3d7a3d]/30 flex-1">
                  <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-[#3d7a3d]" />
                  <h3 className="font-heading text-lg text-white">{t.title}</h3>
                  <p className="mt-1 text-xs text-white/50 leading-relaxed">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 text-center bg-[var(--wk-bg)]">
        <Link
          href="/commerce#new-arrivals"
          className="group inline-flex items-center gap-2 rounded-full bg-[#3d7a3d] px-8 py-4 text-sm font-semibold tracking-[0.08em] text-white transition-all hover:bg-[#2d5a2d] hover:shadow-xl hover:shadow-[#3d7a3d]/30 hover:-translate-y-0.5 active:scale-[0.98]"
        >
          [ SHOP THE COLLECTION ]
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </main>
  );
}
