"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ProductCard } from "@/03_Engineering_System/commerce/components/ProductCard";
import { products } from "@/03_Engineering_System/commerce/data/products";

export function NewArrivals() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section
      ref={sectionRef}
      id="new-arrivals"
      className="relative overflow-hidden bg-[var(--wk-bg)] py-24 md:py-32"
    >
      {/* Section header */}
      <div className="mx-auto mb-16 max-w-[var(--container-wide)] px-[var(--container-padding)] md:mb-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-mono text-[10px] tracking-[0.3em] text-[#4a8c4a]"
            >
              02.
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-3 font-heading text-4xl tracking-[-0.02em] text-[var(--wk-text-primary)] md:text-5xl lg:text-6xl"
            >
              Best Sellers
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-3 max-w-md text-sm text-[var(--wk-text-secondary)]"
            >
              The products our community loves most — tried, tested, and trusted by thousands.
            </motion.p>
          </div>
          <Link
            href="/commerce#categories"
            className="group self-start inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] text-[#4a8c4a] transition-all hover:text-[#2d5a2d] hover:gap-3"
          >
            [ VIEW ALL — {products.length} PRODUCTS ]
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>

      {/* Product Grid */}
      <div className="mx-auto max-w-[var(--container-wide)] px-[var(--container-padding)]">
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>

      {/* Decorative background element */}
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute -right-40 top-1/2 -z-10 hidden h-[600px] w-[600px] rounded-full border border-[#c8e6c8] opacity-15 lg:block"
      />
    </section>
  );
}
