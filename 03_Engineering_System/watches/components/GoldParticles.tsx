"use client";

import { useEffect, useRef } from "react";

/**
 * Canvas-based ambient gold particle system.
 * Particles float upward slowly with subtle horizontal drift.
 * Mouse position influences particle flow direction.
 * Renders at 60fps with requestAnimationFrame.
 *
 * Performance: uses lightweight Canvas 2D (not WebGL).
 * Capped at 80 particles for mobile-friendly performance.
 */
interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  opacitySpeed: number;
  hue: number;
}

export function GoldParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -100, y: -100 });
  const particlesRef = useRef<Particle[]>([]);
  const animRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Initialize particles
    const count = 80;
    particlesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.8 + 0.4,
      speedY: Math.random() * 0.35 + 0.08,
      speedX: (Math.random() - 0.5) * 0.2,
      opacity: Math.random() * 0.35 + 0.05,
      opacitySpeed: (Math.random() - 0.5) * 0.004,
      hue: Math.random() * 30 + 35, // gold range: 35-65 hue
    }));

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    let lastTime = 0;
    const animate = (time: number) => {
      const dt = Math.min((time - lastTime) / 16.667, 3); // cap delta to prevent jumps
      lastTime = time;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mx = mouseRef.current.x / canvas.width - 0.5;

      particlesRef.current.forEach((p) => {
        // Update
        p.y -= p.speedY * dt;
        p.x += (p.speedX + mx * 0.15) * dt;
        p.opacity += p.opacitySpeed * dt;

        // Bounds
        if (p.opacity <= 0.02 || p.opacity >= 0.4) p.opacitySpeed *= -1;
        if (p.y < -20) { p.y = canvas.height + 20; p.x = Math.random() * canvas.width; }
        if (p.x < -20) p.x = canvas.width + 20;
        if (p.x > canvas.width + 20) p.x = -20;

        // Draw
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 55%, 65%, ${p.opacity})`;
        ctx.fill();

        // Subtle glow for larger particles
        if (p.size > 1.2) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${p.hue}, 55%, 65%, ${p.opacity * 0.12})`;
          ctx.fill();
        }
      });

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1,
        pointerEvents: "none",
        opacity: 0.6,
      }}
      aria-hidden="true"
    />
  );
}
