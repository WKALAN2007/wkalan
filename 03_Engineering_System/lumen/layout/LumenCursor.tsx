"use client";

import { useEffect, useRef } from "react";

export function LumenCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.1;
      cursorY += (mouseY - cursorY) * 0.1;
      cursor.style.transform = `translate3d(${cursorX - 20}px, ${cursorY - 20}px, 0)`;
      dot.style.transform = `translate3d(${mouseX - 3}px, ${mouseY - 3}px, 0)`;
      requestAnimationFrame(animate);
    };

    // Scale cursor on interactive elements
    const onMouseEnterInteractive = () => {
      cursor.style.width = "56px";
      cursor.style.height = "56px";
      cursor.style.borderColor = "var(--lumen-accent)";
      cursor.style.background = "rgba(91, 141, 239, 0.08)";
    };
    const onMouseLeaveInteractive = () => {
      cursor.style.width = "40px";
      cursor.style.height = "40px";
      cursor.style.borderColor = "rgba(255,255,255,0.12)";
      cursor.style.background = "transparent";
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    const interactives = document.querySelectorAll('a, button, [role="button"], input, textarea, [data-cursor-interactive]');
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnterInteractive);
      el.addEventListener("mouseleave", onMouseLeaveInteractive);
    });

    const observer = new MutationObserver(() => {
      const els = document.querySelectorAll('a, button, [role="button"], input, textarea, [data-cursor-interactive]');
      els.forEach((el) => {
        el.addEventListener("mouseenter", onMouseEnterInteractive);
        el.addEventListener("mouseleave", onMouseLeaveInteractive);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    const anim = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(anim);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Large ring */}
      <div
        ref={cursorRef}
        className="hidden sm:block fixed top-0 left-0 z-[9999] pointer-events-none rounded-full"
        style={{
          width: "40px",
          height: "40px",
          border: "1px solid rgba(255,255,255,0.12)",
          background: "transparent",
          transition: "width 0.3s, height 0.3s, border-color 0.3s, background 0.3s",
          marginLeft: "-20px",
          marginTop: "-20px",
        }}
      />
      {/* Small dot */}
      <div
        ref={dotRef}
        className="hidden sm:block fixed top-0 left-0 z-[9999] pointer-events-none rounded-full"
        style={{
          width: "6px",
          height: "6px",
          background: "var(--lumen-accent)",
          marginLeft: "-3px",
          marginTop: "-3px",
        }}
      />
    </>
  );
}
