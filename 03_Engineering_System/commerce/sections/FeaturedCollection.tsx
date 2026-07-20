"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export function FeaturedCollection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const leftY = useTransform(scrollYProgress, [0, 1], ["5%", "-10%"]);
  const rightY = useTransform(scrollYProgress, [0, 1], ["-5%", "10%"]);

  return (
    <section
      ref={sectionRef}
      id="featured"
      className="relative overflow-hidden bg-[var(--wk-bg)]"
    >
      <div className="grid md:grid-cols-2">
        {/* Left — Large Image */}
        <motion.div
          style={{ y: leftY }}
          className="relative aspect-[4/5] overflow-hidden md:aspect-auto"
        >
          <img
            src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=900&h=1200&fit=crop"
            alt="Botanical skincare collection"
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <div className="absolute bottom-8 left-8">
            <span className="font-mono text-[10px] tracking-[0.2em] text-white/60">
              [ SKINCARE RITUAL ]
            </span>
          </div>
        </motion.div>

        {/* Right — Content */}
        <div className="flex flex-col justify-center px-[var(--container-padding)] py-16 md:py-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            id="our-story"
          >
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#4a8c4a]">
              04.
            </span>
            <h2 className="mt-4 font-heading text-3xl leading-[1.1] tracking-[-0.02em] text-[var(--wk-text-primary)] md:text-4xl lg:text-5xl">
              Why Choose
              <br />
              Verdant?
            </h2>

            <div className="mt-6 h-px w-12 bg-[var(--wk-border)]" />

            <p className="mt-6 max-w-md text-sm leading-relaxed text-[var(--wk-text-secondary)] md:text-base">
              Every product meets our rigorous standards for purity, efficacy,
              and environmental stewardship. We believe what you bring into your
              home should be as pure as nature intended.
            </p>

            <div className="mt-8 space-y-3">
              {[
                "100% plant-based, organic certified ingredients",
                "Carbon-neutral shipping in compostable packaging",
                "Third-party lab tested — full transparency",
              ].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                  className="flex items-center gap-3 text-xs text-[var(--wk-text-secondary)]"
                >
                  <span className="h-px w-4 bg-[#4a8c4a]/40" />
                  {item}
                </motion.div>
              ))}
            </div>

            <Link
              href="/commerce/about"
              className="group mt-10 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] text-[#3d7a3d] transition-all hover:text-[#2d5a2d] hover:gap-3"
            >
              [ LEARN MORE ]
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Second row — Brand philosophy + Image */}
      <div className="grid md:grid-cols-2">
        {/* Left — Editorial content (dark) */}
        <div className="flex flex-col justify-center bg-[#1a3a1a] px-[var(--container-padding)] py-16 md:order-1 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#7ab87a]/60">
              OUR PHILOSOPHY
            </span>
            <h2 className="mt-4 font-heading text-3xl leading-[1.1] tracking-[-0.02em] text-white md:text-4xl">
              Modern Mentality
              <br />
              &amp; Traditional Craft
            </h2>

            <div className="mt-6 h-px w-12 bg-white/10" />

            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/50 md:text-base">
              Blending ancestral botanical wisdom with modern green chemistry.
              Every formula is a conversation between nature&apos;s intelligence
              and scientific rigor — effective, pure, and kind to the planet.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-8">
              {[
                { value: "100%", label: "Plant-Based" },
                { value: "110%", label: "Carbon Offset" },
                { value: "1%", label: "For the Planet" },
              ].map((stat) => (
                <div key={stat.label} className="transition-all hover:scale-105 cursor-default">
                  <p className="font-heading text-2xl text-[#a3d0a3]">{stat.value}</p>
                  <p className="mt-1 text-[10px] tracking-[0.1em] text-white/30">{stat.label}</p>
                </div>
              ))}
            </div>

            <Link
              href="/commerce/about"
              className="group mt-8 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] text-[#7ab87a] transition-all hover:text-white hover:gap-3"
            >
              [ READ OUR FULL STORY ]
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
        </div>

        {/* Right — Image */}
        <motion.div
          style={{ y: rightY }}
          className="relative aspect-[4/5] overflow-hidden md:order-2 md:aspect-auto"
        >
          <img
            src="https://images.unsplash.com/photo-1605040056130-38d9faad3534?w=900&h=1200&fit=crop"
            alt="Laboratory craftsmanship"
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <div className="absolute bottom-8 left-8">
            <span className="font-mono text-[10px] tracking-[0.2em] text-white/60">
              [ LAB · PORTLAND ]
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
