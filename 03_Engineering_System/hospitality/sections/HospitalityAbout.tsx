"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function HospitalityAbout() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section ref={sectionRef} id="about" className="relative overflow-hidden bg-white">
      <div className="flex flex-col lg:flex-row lg:min-h-[80vh]">
        {/* Image with parallax */}
        <div className="relative lg:w-1/2 min-h-[50vh] lg:min-h-full overflow-hidden">
          <motion.img
            src="/hospitality/about.jpg"
            alt="Aurelia Santorini"
            className="absolute inset-0 h-[110%] w-full object-cover"
            style={{ y: imageY }}
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Text with stagger */}
        <div className="flex items-center lg:w-1/2">
          <div className="px-8 py-16 sm:px-16 lg:py-24">
            <motion.span
              className="text-xs tracking-[0.2em] text-[var(--wk-accent-dark)]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              THE SPIRIT OF AURELIA
            </motion.span>

            <motion.h2
              className="mt-4 font-heading text-3xl tracking-[-0.01em] text-[#1A1A18] sm:text-4xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={{
                hidden: { opacity: 0, x: 30 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              One journey that lingers long
            </motion.h2>

            <div className="mt-8 space-y-5">
              <motion.p
                className="text-sm leading-relaxed text-[var(--wk-text-secondary)] sm:text-base"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
              >
                Since 1923, Aurelia has been more than a collection of addresses.
                It is a philosophy — a belief that the finest luxury is felt, not
                displayed. It is in the cool marble beneath your feet on a summer
                afternoon, the rosemary carried by the breeze across a terrace,
                and the quiet confidence of a place that knows exactly who it is.
              </motion.p>
              <motion.p
                className="text-sm leading-relaxed text-[var(--wk-text-secondary)] sm:text-base"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
              >
                Each of our properties is a reflection of its surroundings — the
                volcanic stone of Santorini, the whitewashed lanes of Mykonos, the
                lemon groves of Amalfi — woven together by a common thread of
                genuine care. Our people, many of whom have been with us for
                decades, are the keepers of this spirit.
              </motion.p>
            </div>

            {/* Quote with border reveal */}
            <motion.blockquote
              className="mt-10 border-l-2 border-[var(--wk-accent-dark)]/30 pl-6 overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              <motion.p
                className="font-heading text-lg italic leading-relaxed text-[#1A1A18] sm:text-xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7, delay: 0.8, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
              >
                &ldquo;Luxury is not about opulence. It is about attention.
                About time. About the quiet confidence of being exactly where
                you belong.&rdquo;
              </motion.p>
            </motion.blockquote>

            <motion.a
              href="#experiences"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("experiences")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-8 inline-flex items-center gap-2 text-xs tracking-[0.12em] text-[var(--wk-accent-dark)] no-underline transition-all hover:gap-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: 1.0, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              DISCOVER MORE
              <span className="text-[10px]">→</span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
