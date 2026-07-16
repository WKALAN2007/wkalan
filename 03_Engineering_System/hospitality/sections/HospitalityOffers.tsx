"use client";

import { motion } from "framer-motion";
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
            <Link
              key={offer.slug}
              href={`/hospitality/offer/${offer.slug}`}
              className="group relative flex min-h-[420px] flex-col justify-end overflow-hidden p-8 no-underline"
            >
              <motion.div
                className="absolute inset-0 z-0"
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
                      delay: 0.12 * i,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
              >
                <img
                  src={offer.cardImage}
                  alt={offer.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
              </motion.div>
              <div className="relative z-10">
                <h3 className="font-heading text-2xl text-white sm:text-3xl">
                  {offer.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {offer.description.slice(0, 160)}...
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-xs tracking-[0.12em] text-[var(--color-accent-dark)] transition-all group-hover:gap-3">
                  DISCOVER
                  <span className="text-[10px]">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
