"use client";

import { useCallback, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { offers } from "../data";

const offerList = offers;

export function HospitalityOffers() {
  return (
    <section className="bg-[#F9F7F4] py-24 sm:py-32">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
        <motion.div
          className="mb-14 text-center"
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
            OFFERS
          </span>
          <h2 className="mt-4 font-heading text-3xl tracking-[-0.01em] text-[#1A1A18] sm:text-4xl">
            Exclusive Packages
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-3">
          {offerList.map((offer, i) => (
            <OfferCard key={offer.slug} offer={offer} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function OfferCard({
  offer,
  index,
}: {
  offer: (typeof offerList)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const springMx = useSpring(mx, { stiffness: 50, damping: 20 });
  const springMy = useSpring(my, { stiffness: 50, damping: 20 });
  const rotateY = useTransform(springMx, [0, 1], [5, -5]);
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
      key={offer.slug}
      href={`/hospitality/offer/${offer.slug}`}
      className="group relative flex min-h-[420px] flex-col justify-end overflow-hidden p-8 no-underline"
      style={{ perspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="absolute inset-0 z-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={{
          hidden: { opacity: 0, scale: 1.05 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.7,
              delay: 0.12 * index,
              ease: [0.16, 1, 0.3, 1],
            },
          },
        }}
        style={{ rotateY, rotateX }}
      >
        <motion.img
          src={offer.cardImage}
          alt={offer.title}
          className="absolute inset-0 h-full w-full object-cover"
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.div
          className="absolute inset-0"
          animate={{
            background: hovered
              ? "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.3) 50%, transparent)"
              : "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.3) 60%, transparent)",
          }}
          transition={{ duration: 0.5 }}
        />
        {/* Border glow */}
        <motion.div
          className="absolute inset-0"
          animate={{
            boxShadow: hovered
              ? "inset 0 0 0 1px rgba(201,168,76,0.3)"
              : "inset 0 0 0 0px rgba(201,168,76,0)",
          }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>

      <motion.div
        className="relative z-10"
        animate={{ y: hovered ? -8 : 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <h3 className="font-heading text-2xl text-white sm:text-3xl">
          {offer.title}
        </h3>
        <motion.p
          className="mt-3 text-sm leading-relaxed text-white/70"
          animate={{ opacity: hovered ? 1 : 0.7, y: hovered ? 0 : 4 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {offer.description.slice(0, 160)}...
        </motion.p>
        <motion.span
          className="mt-4 inline-flex items-center gap-2 text-xs tracking-[0.12em] text-[var(--color-accent-dark)]"
          animate={{ gap: hovered ? "12px" : "8px" }}
          transition={{ duration: 0.3 }}
        >
          DISCOVER
          <span className="text-[10px]">→</span>
        </motion.span>
      </motion.div>
    </Link>
  );
}
