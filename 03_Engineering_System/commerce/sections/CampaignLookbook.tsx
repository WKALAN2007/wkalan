"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { processSteps } from "@/03_Engineering_System/commerce/data/products";

export function CampaignLookbook() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  return (
    <section
      ref={sectionRef}
      id="campaign"
      className="relative overflow-hidden bg-[#fafaf7] py-24 md:py-32"
    >
      <div className="mx-auto max-w-[var(--container-wide)] px-[var(--container-padding)]">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono text-[10px] tracking-[0.3em] text-[#4a8c4a]"
          >
            05.
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 font-heading text-4xl tracking-[-0.02em] text-[var(--wk-text-primary)] md:text-5xl lg:text-6xl"
          >
            From Source to Shelf
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 max-w-lg text-sm text-[var(--wk-text-secondary)] md:text-base"
          >
            Every product traces back to the earth — here&apos;s how we bring
            nature to your door with uncompromising care.
          </motion.p>
        </div>

        {/* Process Steps */}
        <motion.div
          style={{ opacity }}
          className="grid grid-cols-1 gap-12 md:grid-cols-3"
        >
          {processSteps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group text-center"
            >
              {/* Step number */}
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#7ab87a] bg-white font-heading text-xl font-bold text-[#3d7a3d] transition-all group-hover:bg-[#3d7a3d] group-hover:text-white group-hover:border-[#3d7a3d] group-hover:scale-110">
                {step.num}
              </div>

              <h3 className="font-heading text-xl tracking-[-0.02em] text-[var(--wk-text-primary)]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--wk-text-secondary)]">
                {step.description}
              </p>

              <div className="mt-6 overflow-hidden rounded-2xl shadow-md transition-transform group-hover:scale-[1.02]">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full aspect-[16/10] object-cover"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Connecting line (desktop) */}
        <div className="relative mt-0 hidden md:block">
          <div className="absolute left-[18%] right-[18%] top-[-44px] h-[2px] bg-[#c8e6c8]" />
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="mx-auto max-w-2xl font-heading text-2xl leading-relaxed tracking-[-0.01em] text-[var(--wk-text-primary)]/70 md:text-3xl">
            &ldquo;Nature is not a place to visit. It is home — and everything
            we make should honor that.&rdquo;
          </p>
          <p className="mt-6 font-mono text-[10px] tracking-[0.2em] text-[var(--wk-text-tertiary)]">
            — VERDANT FOUNDER
          </p>
        </motion.div>
      </div>
    </section>
  );
}
