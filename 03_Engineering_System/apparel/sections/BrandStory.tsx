"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function BrandStory() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-5%", "10%"]);

  return (
    <section ref={ref} className="bg-white py-28 sm:py-36">
      <div className="mx-auto grid max-w-[1400px] items-center gap-16 px-6 sm:px-8 lg:grid-cols-2 lg:gap-24">
        {/* Left: Image with parallax */}
        <motion.div
          className="relative aspect-[4/5] overflow-hidden bg-[#E8E5E0]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, scale: 0.96 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
            },
          }}
        >
          <motion.img
            src="/apparel/brand-story.jpg"
            alt="MÉTIER atelier — the art of making"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ y: imageY, scale: 1.15 }}
          />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="lg:pl-8"
        >
          <motion.span
            className="text-xs font-medium uppercase tracking-[0.2em] text-[#B8B0A0]"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.7 } },
            }}
          >
            Our Philosophy
          </motion.span>

          <motion.h2
            className="mt-6 font-heading text-3xl leading-[1.15] text-[#1E1E1C] sm:text-4xl lg:text-5xl"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            Clothes for
            <br />
            living, not
            <br />
            for show.
          </motion.h2>

          <motion.p
            className="mt-6 max-w-lg text-sm leading-relaxed text-[#6B6B68] sm:text-base"
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            MÉTIER was founded on the belief that the best clothing disappears. It doesn&apos;t shout for attention — it supports the life you&apos;re already living. Every piece we make is designed to be reached for, worn in, and passed on.
          </motion.p>

          <motion.p
            className="mt-4 max-w-lg text-sm leading-relaxed text-[#6B6B68] sm:text-base"
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            We work with small, family-owned mills and ateliers across Japan, Italy, and Portugal. Natural fibers. Ethical production. Garments made to outlast trends.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            <Link
              href="/apparel/products"
              className="group mt-8 inline-flex items-center gap-2 border-b border-[#D4D3CE] pb-2 text-xs font-medium uppercase tracking-[0.15em] text-[#1A1A1A] transition-all hover:border-[#1A1A1A]"
            >
              Explore the Collection
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
