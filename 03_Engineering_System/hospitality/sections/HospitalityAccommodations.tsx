"use client";

import { useRef, useCallback, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { properties } from "../data";

function PropertyCard({ property, index }: { property: (typeof properties)[0]; index: number }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [hovered, setHovered] = useState(false);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const springMx = useSpring(mx, { stiffness: 60, damping: 20 });
  const springMy = useSpring(my, { stiffness: 60, damping: 20 });

  const rotateY = useTransform(springMx, [0, 1], [6, -6]);
  const rotateX = useTransform(springMy, [0, 1], [-3, 3]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!cardRef.current) return;
      const r = cardRef.current.getBoundingClientRect();
      mx.set((e.clientX - r.left) / r.width);
      my.set((e.clientY - r.top) / r.height);
    },
    [mx, my]
  );

  const handleMouseEnter = useCallback(() => setHovered(true), []);
  const handleMouseLeave = useCallback(() => {
    setHovered(false);
    mx.set(0.5);
    my.set(0.5);
  }, [mx, my]);

  return (
    <Link
      ref={cardRef}
      key={property.slug}
      href={`/hospitality/property/${property.slug}`}
      className="group flex-shrink-0 w-[75vw] max-w-[380px] no-underline"
      style={{ scrollSnapAlign: "start", perspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
              delay: 0.1 * index,
              ease: [0.16, 1, 0.3, 1],
            },
          },
        }}
        style={{
          rotateY,
          rotateX,
          boxShadow: hovered
            ? "0 25px 50px rgba(0,0,0,0.15)"
            : "0 2px 8px rgba(0,0,0,0.04)",
          transition: "box-shadow 0.5s ease",
        }}
      >
        <motion.div
          className="grid grid-cols-2 gap-1 overflow-hidden"
          style={{ borderRadius: 4, overflow: "hidden" }}
        >
          {/* Main large image */}
          <div className="col-span-2 aspect-[16/9] overflow-hidden">
            <motion.img
              src={property.gallery[0]}
              alt={property.name}
              className="h-full w-full object-cover"
              animate={{ scale: hovered ? 1.08 : 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
          {/* Two smaller images */}
          <div className="aspect-square overflow-hidden">
            <motion.img
              src={property.gallery[1]}
              alt=""
              className="h-full w-full object-cover"
              animate={{ scale: hovered ? 1.08 : 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
          <div className="aspect-square overflow-hidden">
            <motion.img
              src={property.gallery[2]}
              alt=""
              className="h-full w-full object-cover"
              animate={{ scale: hovered ? 1.08 : 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </motion.div>
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
          <motion.span
            className="mt-3 inline-flex items-center gap-2 text-xs tracking-[0.12em] text-[var(--color-accent-dark)]"
            animate={{ gap: hovered ? "12px" : "8px" }}
            transition={{ duration: 0.3 }}
          >
            DISCOVER
            <span className="text-[10px]">→</span>
          </motion.span>
        </div>
      </motion.div>
    </Link>
  );
}

export function HospitalityAccommodations() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="accommodations" className="bg-[#F9F7F4] py-24 sm:py-32">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
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

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 -mx-[var(--container-padding)] px-[var(--container-padding)] scrollbar-hide"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {properties.map((property, i) => (
            <PropertyCard key={property.slug} property={property} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
