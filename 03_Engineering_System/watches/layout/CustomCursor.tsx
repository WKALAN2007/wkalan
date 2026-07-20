"use client";

import { useEffect, useRef } from "react";

/**
 * Luxury custom cursor — gold dot that expands on hoverable elements.
 * Mirrors the custom cursor style found on meinhardtaxer.com and therecord.institute.
 *
 * The cursor is:
 * - A small gold dot (8px) by default
 * - Expands to a ring (48px) when hovering interactive elements
 * - Hidden on touch devices
 */
export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const coords = useRef({ x: -100, y: -100 });
  const rafId = useRef<number>(0);
  const isHovering = useRef(false);

  useEffect(() => {
    // Don't show custom cursor on touch devices
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMouseMove = (e: MouseEvent) => {
      coords.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      if (!cursor) return;
      const { x, y } = coords.current;
      const size = isHovering.current ? 48 : 8;
      cursor.style.transform = `translate3d(${x - size / 2}px, ${y - size / 2}px, 0)`;
      rafId.current = requestAnimationFrame(animate);
    };

    const onMouseEnterLink = () => {
      isHovering.current = true;
      cursor.classList.add("cursor-hovering");
    };
    const onMouseLeaveLink = () => {
      isHovering.current = false;
      cursor.classList.remove("cursor-hovering");
    };

    // Attach hover detection to all interactive elements
    const attachListeners = () => {
      const hoverables = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, [data-cursor-hover], .group\\/cursor'
      );
      hoverables.forEach((el) => {
        el.addEventListener("mouseenter", onMouseEnterLink);
        el.addEventListener("mouseleave", onMouseLeaveLink);
      });
    };

    // Initial attach + mutation observer for dynamically added elements
    attachListeners();
    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    document.addEventListener("mousemove", onMouseMove, { passive: true });
    rafId.current = requestAnimationFrame(animate);

    // Hide default cursor
    document.documentElement.style.cursor = "none";
    const style = document.createElement("style");
    style.textContent = `a, button, [role="button"], input, textarea, select { cursor: none !important; }`;
    document.head.appendChild(style);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId.current);
      observer.disconnect();
      document.documentElement.style.cursor = "";
      style.remove();
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      id="custom-cursor"
      className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform"
      style={{ width: 8, height: 8 }}
    >
      {/* Default dot */}
      <div className="absolute inset-0 rounded-full bg-[#C9A84C] transition-all duration-300 ease-out cursor-dot" />
      {/* Expanded ring */}
      <div className="absolute inset-0 rounded-full border border-[#C9A84C]/40 scale-0 opacity-0 transition-all duration-300 ease-out cursor-ring" />
      <style jsx>{`
        .cursor-hovering .cursor-dot {
          transform: scale(0.3);
          opacity: 0.5;
        }
        .cursor-hovering .cursor-ring {
          transform: scale(1);
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
