"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

/**
 * Lottie-style animated SVG watch gear.
 * Rotates continuously with GSAP for precise speed control.
 * Two interlocking gears create a mechanical feel.
 *
 * This replaces the need for Lottie — pure SVG + GSAP.
 */
export function AnimatedGear({ size = 60 }: { size?: number }) {
  const gear1Ref = useRef<SVGGElement>(null);
  const gear2Ref = useRef<SVGGElement>(null);

  useEffect(() => {
    if (!gear1Ref.current || !gear2Ref.current) return;

    gsap.to(gear1Ref.current, {
      rotation: 360,
      duration: 12,
      repeat: -1,
      ease: "none",
      transformOrigin: "50% 50%",
    });

    gsap.to(gear2Ref.current, {
      rotation: -360,
      duration: 8,
      repeat: -1,
      ease: "none",
      transformOrigin: "50% 50%",
    });
  }, []);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Watch mechanism animation"
    >
      {/* Gear 1 (larger, clockwise) */}
      <g ref={gear1Ref}>
        <circle cx="38" cy="38" r="22" stroke="#B89947" strokeWidth="1.5" strokeOpacity="0.3" fill="none" />
        <circle cx="38" cy="38" r="16" stroke="#B89947" strokeWidth="0.8" strokeOpacity="0.15" fill="none" />
        <circle cx="38" cy="38" r="16" stroke="#B89947" strokeWidth="0.8" strokeOpacity="0.15" fill="none" />
        <circle cx="38" cy="38" r="5" fill="#B89947" fillOpacity="0.3" />
        {/* Gear teeth */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          const x1 = 38 + Math.cos(angle) * 16;
          const y1 = 38 + Math.sin(angle) * 16;
          const x2 = 38 + Math.cos(angle) * 22;
          const y2 = 38 + Math.sin(angle) * 22;
          return (
            <line
              key={i}
              x1={x1} y1={y1} x2={x2} y2={y2}
              stroke="#B89947" strokeWidth="1.5" strokeOpacity="0.25"
            />
          );
        })}
        {/* Spokes */}
        {Array.from({ length: 4 }).map((_, i) => {
          const angle = (i / 4) * Math.PI * 2;
          return (
            <line
              key={`s-${i}`}
              x1={38 + Math.cos(angle) * 5}
              y1={38 + Math.sin(angle) * 5}
              x2={38 + Math.cos(angle) * 16}
              y2={38 + Math.sin(angle) * 16}
              stroke="#B89947" strokeWidth="0.6" strokeOpacity="0.2"
            />
          );
        })}
      </g>

      {/* Gear 2 (smaller, counter-clockwise) */}
      <g ref={gear2Ref}>
        <circle cx="68" cy="68" r="16" stroke="#B89947" strokeWidth="1.2" strokeOpacity="0.25" fill="none" />
        <circle cx="68" cy="68" r="3.5" fill="#B89947" fillOpacity="0.25" />
        {/* Teeth */}
        {Array.from({ length: 6 }).map((_, i) => {
          const angle = (i / 6) * Math.PI * 2;
          const x1 = 68 + Math.cos(angle) * 12;
          const y1 = 68 + Math.sin(angle) * 12;
          const x2 = 68 + Math.cos(angle) * 16;
          const y2 = 68 + Math.sin(angle) * 16;
          return (
            <line
              key={i}
              x1={x1} y1={y1} x2={x2} y2={y2}
              stroke="#B89947" strokeWidth="1.2" strokeOpacity="0.2"
            />
          );
        })}
        {/* Spokes */}
        {Array.from({ length: 3 }).map((_, i) => {
          const angle = (i / 3) * Math.PI * 2;
          return (
            <line
              key={`s2-${i}`}
              x1={68 + Math.cos(angle) * 3.5}
              y1={68 + Math.sin(angle) * 3.5}
              x2={68 + Math.cos(angle) * 12}
              y2={68 + Math.sin(angle) * 12}
              stroke="#B89947" strokeWidth="0.5" strokeOpacity="0.18"
            />
          );
        })}
      </g>

      {/* Center dot */}
      <circle cx="50" cy="50" r="2" fill="#B89947" fillOpacity="0.2" />
    </svg>
  );
}

/**
 * DrawSVG animation component.
 * Draws an SVG path progressively — the "ATELIER" underline.
 * Uses GSAP DrawSVGPlugin for smooth line reveal.
 */
export function DrawUnderline({ width = 120 }: { width?: number }) {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!pathRef.current) return;
    const DrawSVGPlugin = require("gsap/DrawSVGPlugin");
    gsap.registerPlugin(DrawSVGPlugin);

    gsap.fromTo(
      pathRef.current,
      { drawSVG: "0% 0%" },
      {
        drawSVG: "0% 100%",
        duration: 1.5,
        delay: 0.8,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: pathRef.current,
          start: "top 80%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <svg
      width={width}
      height="4"
      viewBox={`0 0 ${width} 4`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }}
    >
      <path
        ref={pathRef}
        d={`M0,2 Q${width / 2},-1 ${width},2`}
        stroke="#B89947"
        strokeWidth="1"
        strokeOpacity="0.4"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
