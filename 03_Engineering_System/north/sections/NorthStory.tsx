"use client";

import { motion } from "framer-motion";

export function NorthStory() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative z-10 mx-auto grid min-h-[90vh] max-w-[var(--container-max)] items-center gap-16 px-[var(--container-padding)] py-28 lg:grid-cols-2 lg:gap-24">
        {/* Quote */}
        <motion.div
          className="flex flex-col gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.span
            className="text-xs tracking-[0.25em] text-gray-400"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.7 } },
            }}
          >
            CHIEF EXECUTIVE&apos;S MESSAGE
          </motion.span>
          <motion.p
            className="font-heading text-2xl leading-relaxed italic text-gray-800 sm:text-3xl"
            variants={{
              hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: { duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            &ldquo;The antidote to forgetting is not more storage. It is
            intention. Every memory we preserve today is a gift to someone who
            will need it tomorrow — someone we may never meet.&rdquo;
          </motion.p>
          <motion.div
            className="flex flex-col gap-1"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.7, delay: 0.6 } },
            }}
          >
            <div className="h-[1px] w-12 bg-gray-300" />
            <span className="text-sm font-medium text-gray-700">David Kim</span>
            <span className="text-xs tracking-[0.08em] text-gray-400">Founder & Chief Executive</span>
          </motion.div>
        </motion.div>

        {/* Portrait with scale reveal */}
        <motion.div
          className="relative aspect-[3/4] overflow-hidden lg:aspect-[4/5]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: { opacity: 0, scale: 1.06 },
            visible: { opacity: 1, scale: 1, transition: { duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] } },
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
            alt="David Kim, Founder"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.span
          className="text-[10px] tracking-[0.25em] text-gray-400"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          SCROLL TO EXPLORE
        </motion.span>
      </motion.div>
    </section>
  );
}
