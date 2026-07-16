"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { restaurants } from "../data";

const restaurantList = restaurants;

export function HospitalityDining() {
  return (
    <section id="dining" className="bg-white py-28 sm:py-36">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
        {/* Section header */}
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
          <span className="text-xs tracking-[0.2em] text-[var(--color-accent-dark)]">
            DINING
          </span>
          <h2 className="mt-4 font-heading text-3xl tracking-[-0.01em] text-[#1A1A18] sm:text-4xl">
            Culinary Excellence
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-[var(--color-text-secondary)]">
            Four distinct venues, each a destination in its own right — from
            refined tasting menus to sunset cocktails.
          </p>
        </motion.div>

        {/* Dining grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {restaurantList.map((restaurant, i) => (
            <Link
              key={restaurant.slug}
              href={`/hospitality/dining/${restaurant.slug}`}
              className="group no-underline"
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
                      delay: 0.1 * i,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={restaurant.heroImage}
                    alt={restaurant.name}
                    className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />
                </div>
                <div className="mt-5">
                  <span className="text-[10px] tracking-[0.12em] text-[var(--color-accent-dark)]">
                    {restaurant.cuisine}
                  </span>
                  <h3 className="mt-1 font-heading text-xl text-[#1A1A18]">
                    {restaurant.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {restaurant.description.slice(0, 120)}...
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs tracking-[0.12em] text-[var(--color-accent-dark)] transition-all group-hover:gap-3">
                    RESERVE A TABLE
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
