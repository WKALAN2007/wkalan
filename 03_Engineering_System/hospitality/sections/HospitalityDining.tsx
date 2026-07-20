"use client";

import { useCallback, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { restaurants } from "../data";

const restaurantList = restaurants;

export function HospitalityDining() {
  return (
    <section id="dining" className="bg-white py-28 sm:py-36">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
        <motion.div
          className="mb-16 text-center"
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
          <span className="text-xs tracking-[0.2em] text-[var(--wk-accent-dark)]">
            DINING
          </span>
          <h2 className="mt-4 font-heading text-3xl tracking-[-0.01em] text-[#1A1A18] sm:text-4xl">
            Culinary Excellence
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-[var(--wk-text-secondary)]">
            Four distinct venues, each a destination in its own right — from
            refined tasting menus to sunset cocktails.
          </p>
        </motion.div>

        {/* Dining grid with wave stagger */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {restaurantList.map((restaurant, i) => (
            <DiningCard key={restaurant.slug} restaurant={restaurant} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DiningCard({
  restaurant,
  index,
}: {
  restaurant: (typeof restaurantList)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const springMx = useSpring(mx, { stiffness: 60, damping: 20 });
  const springMy = useSpring(my, { stiffness: 60, damping: 20 });
  const rotateY = useTransform(springMx, [0, 1], [4, -4]);
  const rotateX = useTransform(springMy, [0, 1], [-2, 2]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const r = e.currentTarget.getBoundingClientRect();
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
      key={restaurant.slug}
      href={`/hospitality/dining/${restaurant.slug}`}
      className="group no-underline"
      style={{ perspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={{
          hidden: { opacity: 0, y: 32 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.7,
              delay: 0.08 * index,
              ease: [0.16, 1, 0.3, 1],
            },
          },
        }}
        style={{ rotateY, rotateX }}
      >
        <motion.div
          className="relative aspect-square overflow-hidden"
          style={{ borderRadius: 4 }}
          animate={{
            boxShadow: hovered
              ? "0 16px 36px rgba(0,0,0,0.1)"
              : "0 2px 4px rgba(0,0,0,0.03)",
          }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src={restaurant.heroImage}
            alt={restaurant.name}
            className="h-full w-full object-cover"
            animate={{ scale: hovered ? 1.08 : 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.div
            className="absolute inset-0"
            animate={{
              background: hovered
                ? "linear-gradient(to top, rgba(0,0,0,0.5), transparent 50%)"
                : "linear-gradient(to top, rgba(0,0,0,0.2), transparent 40%)",
            }}
            transition={{ duration: 0.5 }}
          />
          <motion.span
            className="absolute bottom-4 left-4 font-heading text-lg text-white"
            animate={{ y: hovered ? 0 : 8, opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {restaurant.name}
          </motion.span>
        </motion.div>
        <div className="mt-5">
          <span className="text-[10px] tracking-[0.12em] text-[var(--wk-accent-dark)]">
            {restaurant.cuisine}
          </span>
          <h3 className="mt-1 font-heading text-xl text-[#1A1A18]">
            {restaurant.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--wk-text-secondary)]">
            {restaurant.description.slice(0, 120)}...
          </p>
          <motion.span
            className="mt-4 inline-flex items-center gap-2 text-xs tracking-[0.12em] text-[var(--wk-accent-dark)]"
            animate={{ gap: hovered ? "12px" : "8px" }}
            transition={{ duration: 0.3 }}
          >
            RESERVE A TABLE
            <span className="text-[10px]">→</span>
          </motion.span>
        </div>
      </motion.div>
    </Link>
  );
}
