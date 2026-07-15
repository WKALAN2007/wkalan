"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export function CinematicManifesto() {
  const sectionRef = useRef<HTMLElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const zhRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split text into characters
      if (line1Ref.current && line2Ref.current) {
        const split1 = new SplitText(line1Ref.current, { type: "chars" });
        const split2 = new SplitText(line2Ref.current, { type: "chars" });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play none none none",
          },
        });

        tl.fromTo(
          split1.chars,
          { opacity: 0, y: 60, filter: "blur(12px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            stagger: 0.04,
            duration: 0.8,
            ease: "power3.out",
          },
        );

        tl.fromTo(
          split2.chars,
          { opacity: 0, y: 60, filter: "blur(12px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            stagger: 0.05,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.3",
        );

        if (dividerRef.current) {
          tl.fromTo(
            dividerRef.current,
            { scaleX: 0 },
            { scaleX: 1, duration: 0.7, ease: "power3.out" },
            "-=0.4",
          );
        }

        if (zhRef.current) {
          tl.fromTo(
            zhRef.current,
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
            "-=0.2",
          );
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0A0A0A] px-8"
    >
      {/* CSS Perspective parallax background */}
      <div
        className="absolute inset-0"
        style={{ perspective: "1000px", perspectiveOrigin: "center center" }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#141414] to-[#0A0A0A]"
          style={{ transform: "translateZ(-200px) scale(1.2)" }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-10 text-center">
        <motion.span
          className="text-xs tracking-[0.25em] text-white/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          CHAPTER 02
        </motion.span>

        <p className="font-heading text-3xl leading-relaxed tracking-[-0.01em] text-white/85 sm:text-5xl md:text-7xl">
          <span ref={line1Ref} className="inline-block">
            The internet remembers numbers.
          </span>
          <br />
          <span ref={line2Ref} className="inline-block">
            I remember people.
          </span>
        </p>

        <div ref={dividerRef} className="h-[1px] w-16 bg-white/15" />

        <p ref={zhRef} className="text-sm leading-relaxed text-white/25">
          網路記得數字。
          <br />
          我記得人。
        </p>
      </div>
    </section>
  );
}
