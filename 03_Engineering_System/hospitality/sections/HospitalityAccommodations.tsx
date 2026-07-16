"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { properties } from "../data";

export function HospitalityAccommodations() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="accommodations" className="bg-[#F9F7F4] py-24 sm:py-32">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
        {/* Section header */}
        <motion.div
          className="mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
            },
          }}
        >
          <span className="text-xs tracking-[0.2em] text-[var(--color-accent-dark)]">
            YOUR NEXT VACATION
          </span>
          <h2 className="mt-4 font-heading text-3xl tracking-[-0.01em] text-[#1A1A18] sm:text-4xl">
            Our Properties
          </h2>
        </motion.div>

        {/* Horizontal scroll carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 -mx-[var(--container-padding)] px-[var(--container-padding)] scrollbar-hide"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {properties.map((property, i) => (
            <Link
              key={property.slug}
              href={`/hospitality/property/${property.slug}`}
              className="group flex-shrink-0 w-[75vw] max-w-[380px] no-underline"
              style={{ scrollSnapAlign: "start" }}
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      delay: 0.1 * i,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
              >
                <div className="grid grid-cols-2 gap-1 overflow-hidden">
                  {/* Main large image */}
                  <div className="col-span-2 aspect-[16/9] overflow-hidden">
                    <img
                      src={property.gallery[0]}
                      alt={property.name}
                      className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                  </div>
                  {/* Two smaller images */}
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={property.gallery[1]}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                  </div>
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={property.gallery[2]}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="font-heading text-xl text-[#1A1A18] border-b border-[var(--color-accent-dark)]/30 pb-2">
                    {property.name}
                  </h3>
                  <p className="mt-1 text-xs tracking-[0.08em] text-[var(--color-text-tertiary)]">
                    {property.location}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {property.tagline}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-2 text-xs tracking-[0.12em] text-[var(--color-accent-dark)] transition-all group-hover:gap-3">
                    DISCOVER
                    <span className="text-[10px]">→</span>
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
