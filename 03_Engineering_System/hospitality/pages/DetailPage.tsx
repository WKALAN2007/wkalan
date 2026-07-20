"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

interface DetailPageProps {
  heroImage: string;
  title: string;
  subtitle?: string;
  label: string;
  description: string;
  gallery: string[];
  meta?: { label: string; value: string }[];
  highlights?: string[];
  backHref: string;
  backLabel: string;
}

export function DetailPage({
  heroImage,
  title,
  subtitle,
  label,
  description,
  gallery,
  meta,
  highlights,
  backHref,
  backLabel,
}: DetailPageProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.2]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.06]);

  return (
    <main ref={sectionRef}>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-[#1C1C1A]">
        <motion.div
          className="absolute inset-0"
          style={{ opacity: heroOpacity, scale: heroScale }}
        >
          <img
            src={heroImage}
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        <motion.div
          className="relative z-10 flex flex-col items-center gap-4 px-8 text-center"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs tracking-[0.25em] text-[var(--wk-accent-dark)]">
            {label}
          </span>
          <h1 className="font-heading text-4xl leading-[1.1] tracking-[-0.01em] text-white sm:text-6xl md:text-7xl">
            {title}
          </h1>
          {subtitle && (
            <p className="text-sm tracking-[0.08em] text-white/50">{subtitle}</p>
          )}
          <div className="mt-2 h-[1px] w-16 bg-white/30" />
          <Link
            href={backHref}
            className="mt-4 text-[10px] tracking-[0.15em] text-white/40 no-underline transition-colors hover:text-white/70"
          >
            ← BACK TO {backLabel}
          </Link>
        </motion.div>
      </section>

      {/* Meta bar */}
      {meta && meta.length > 0 && (
        <div className="border-b border-[#E8E5DF] bg-[#F9F7F4]">
          <div className="mx-auto flex max-w-[var(--container-max)] flex-wrap justify-center gap-8 px-[var(--container-padding)] py-6 sm:gap-16">
            {meta.map((m) => (
              <div key={m.label} className="text-center">
                <p className="text-[10px] tracking-[0.12em] text-[var(--wk-text-tertiary)]">
                  {m.label}
                </p>
                <p className="mt-1 text-sm text-[#1A1A18]">{m.value}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Highlights */}
      {highlights && highlights.length > 0 && (
        <div className="bg-white py-8">
          <div className="mx-auto flex max-w-[var(--container-max)] flex-wrap justify-center gap-3 px-[var(--container-padding)]">
            {highlights.map((h) => (
              <span
                key={h}
                className="border border-[var(--wk-accent-dark)]/20 px-4 py-1.5 text-[10px] tracking-[0.1em] text-[var(--wk-accent-dark)]"
              >
                {h}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Description */}
      <section className="bg-[#F9F7F4] py-20 sm:py-28">
        <motion.div
          className="mx-auto max-w-2xl px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
            },
          }}
        >
          <span className="text-xs tracking-[0.2em] text-[var(--wk-accent-dark)]">
            DETAILS
          </span>
          {description.split("\n\n").map((paragraph, i) => (
            <p
              key={i}
              className="mt-6 text-sm leading-relaxed text-[var(--wk-text-secondary)] sm:text-base"
            >
              {paragraph}
            </p>
          ))}
        </motion.div>
      </section>

      {/* Gallery */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
          <motion.div
            className="mb-10 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            <span className="text-xs tracking-[0.2em] text-[var(--wk-accent-dark)]">
              GALLERY
            </span>
          </motion.div>
          <div className="columns-2 gap-4 sm:columns-3 sm:gap-5">
            {gallery.map((img, i) => (
              <motion.div
                key={`${img}-${i}`}
                className="mb-4 overflow-hidden sm:mb-5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: 0.06 * i,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
              >
                <img
                  src={img}
                  alt=""
                  className="w-full transition-transform duration-700 hover:scale-105 cursor-pointer"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1C1C1A] py-20 text-center">
        <motion.div
          className="mx-auto max-w-md px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
            },
          }}
        >
          <span className="text-xs tracking-[0.2em] text-[var(--wk-accent-dark)]">
            BEGIN YOUR JOURNEY
          </span>
          <h2 className="mt-4 font-heading text-2xl tracking-[-0.01em] text-white sm:text-3xl">
            Ready to experience {title}?
          </h2>
          <a
            href="/hospitality#accommodations"
            className="mt-6 inline-block border border-[var(--wk-accent-dark)] px-8 py-3 text-xs tracking-[0.15em] text-[var(--wk-accent-dark)] no-underline transition-colors hover:bg-[var(--wk-accent-dark)] hover:text-white"
          >
            EXPLORE PROPERTIES
          </a>
        </motion.div>
      </section>
    </main>
  );
}
