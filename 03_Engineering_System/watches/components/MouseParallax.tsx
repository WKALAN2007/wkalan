"use client";

import { useEffect, useRef, ReactNode } from "react";

/**
 * Mouse parallax wrapper — children move subtly in response to cursor position.
 *
 * @param strength - How much the element shifts (in px). Default 8.
 * @param className - Optional CSS class.
 *
 * Usage: <MouseParallax strength={12}><h1>Hello</h1></MouseParallax>
 */
export function MouseParallax({
  children,
  strength = 8,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      };
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    let raf = 0;
    const animate = () => {
      if (ref.current) {
        const { x, y } = mouseRef.current;
        ref.current.style.transform = `translate3d(${x * strength}px, ${y * strength}px, 0)`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [strength]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ transition: "transform 0.15s ease-out", willChange: "transform" }}
    >
      {children}
    </div>
  );
}

/**
 * Mouse parallax wrapper for cards — tilts toward cursor with 3D perspective.
 * Creates a "floating card" effect with depth.
 */
export function TiltCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateZ(2px)`;
    };

    const onLeave = () => {
      el.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) translateZ(0)";
    };

    el.addEventListener("mousemove", onMove, { passive: true });
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transition: "transform 0.3s ease-out",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}
