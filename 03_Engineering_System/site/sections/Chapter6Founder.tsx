"use client";

import { motion } from "framer-motion";

export function Chapter6Founder() {
  return (
    <section className="bg-[var(--color-background)] py-[var(--space-section-lg)]">
      <div className="mx-auto max-w-[var(--container-narrow)] px-[var(--container-padding)]">
        <motion.div
          className="flex flex-col gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Label */}
          <motion.div
            className="flex items-center gap-3"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.7 } },
            }}
          >
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-text-tertiary)]">
              Chapter 5
            </span>
            <div className="h-[1px] w-8 bg-[var(--color-border)]" />
          </motion.div>

          <motion.h2
            className="font-heading text-3xl leading-tight text-[var(--color-text-primary)] sm:text-4xl"
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] } },
            }}
          >
            Why I Started WKALAN.
          </motion.h2>

          <motion.div
            className="flex flex-col gap-6 text-lg leading-relaxed text-[var(--color-text-secondary)]"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.8, delay: 0.35, staggerChildren: 0.2 } },
            }}
          >
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              17岁那年，我一个人走完了圣地亚哥朝圣之路。800公里。
            </motion.p>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              在那条路上，我遇到来自世界各地的陌生人。每一个人，都带着自己的故事，自己的伤痛，自己的梦想。而就在那段日子裡，我突然明白了一件事。
            </motion.p>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              我们每天都只能透过影片认识创作者。但画面背后那个人——他的经历，他的挣扎，他的信念——我们几乎一无所知。
            </motion.p>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              我希望让世界看见影片背后的人。
            </motion.p>
          </motion.div>

          <motion.p
            className="font-heading text-2xl italic text-[var(--color-text-primary)]"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 1, delay: 1.3 } },
            }}
          >
            品味人生，雕刻身份。
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
