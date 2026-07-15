"use client";

import { useRef, useEffect, Suspense } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ── Three.js Floating Particles ── */
function Particles3D() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const count = 120;

  useEffect(() => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const dummy = new THREE.Object3D();
    for (let i = 0; i < count; i++) {
      dummy.position.set(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 15 - 5,
      );
      dummy.scale.setScalar(Math.random() * 0.03 + 0.01);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    }
    mesh.instanceMatrix.needsUpdate = true;
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.03;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.02;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color="#ffffff" transparent opacity={0.25} />
    </instancedMesh>
  );
}

/* ── Main Hero ── */
export function CinematicHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  // ── GSAP ScrollTrigger timeline ──
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      tl.fromTo(
        ".hero-bg-layer",
        { scale: 1 },
        { scale: 1.15, ease: "none" },
        0,
      );

      tl.fromTo(
        ".hero-text-line",
        { y: 120, opacity: 0, filter: "blur(12px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          stagger: 0.15,
          duration: 1.2,
          ease: "power3.out",
        },
        0.1,
      );

      tl.fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        0.6,
      );

      tl.to(".hero-overlay", { opacity: 1, duration: 1, ease: "none" }, 0.7);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // ── Video autoplay ──
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden bg-[#0A0A0A]"
    >
      {/* ── Layer 0: Three.js 3D particle scene ── */}
      <div className="absolute inset-0 z-[2] pointer-events-none opacity-40">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <Suspense fallback={null}>
            <Particles3D />
          </Suspense>
        </Canvas>
      </div>

      {/* ── Layer 1: CSS Perspective Parallax Container ── */}
      <div
        className="absolute inset-0 z-0"
        style={{ perspective: "1200px", perspectiveOrigin: "center center" }}
      >
        {/* Background layer — furthest, moves slowest */}
        <motion.div
          className="hero-bg-layer absolute inset-0"
          style={{
            transform: "translateZ(-600px) scale(1.5)",
            z: -600,
          }}
        >
          {/* Video background with image fallback */}
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            poster="/yichen-hero.jpg"
            muted
            loop
            playsInline
            preload="auto"
          >
            {/* No video source — gracefully degrades to poster image */}
          </video>
          {/* Fallback: static image with slow zoom */}
          <div className="absolute inset-0">
            <motion.img
              src="/yichen-hero.jpg"
              alt=""
              className="h-full w-full object-cover"
              style={{ scale: videoScale }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/70 via-[#0A0A0A]/50 to-[#0A0A0A]/90" />
        </motion.div>

        {/* Mid layer — moves at medium speed */}
        <motion.div
          className="absolute right-0 top-0 hidden h-full w-[45%] lg:block"
          style={{
            transform: "translateZ(-300px) scale(1.25)",
            z: -300,
          }}
        >
          <img
            src="/yichen-hero.jpg"
            alt=""
            className="h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </div>

      {/* ── Layer 2: Text content — closest, moves fastest ── */}
      <motion.div
        className="relative z-10 px-8 sm:px-16"
        style={{ opacity }}
      >
        <div className="flex max-w-4xl flex-col gap-8">
          <h1
            ref={titleRef}
            className="font-heading text-5xl leading-[1.05] tracking-[-0.02em] text-white sm:text-7xl md:text-8xl lg:text-9xl"
          >
            <span className="hero-text-line block">Every creator</span>
            <span className="hero-text-line block">is shaped by stories</span>
            <span className="hero-text-line block text-white/30">
              you never see.
            </span>
          </h1>

          <div ref={subtitleRef} className="hero-subtitle flex items-center gap-6">
            <div className="h-[1px] w-16 bg-white/20" />
            <span className="text-xs tracking-[0.25em] text-white/40">
              林奕辰 · LIN YICHEN
            </span>
          </div>
        </div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-10 right-10 z-20 flex items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <motion.div
          className="h-12 w-[1px] bg-white/20"
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className="text-[10px] tracking-[0.2em] text-white/25">
          SCROLL
        </span>
      </motion.div>

      {/* ── Fade-to-black overlay ── */}
      <motion.div
        className="hero-overlay pointer-events-none absolute inset-0 z-30 bg-[#0A0A0A]"
        style={{ opacity: useTransform(scrollYProgress, [0.5, 1], [0, 1]) }}
      />
    </section>
  );
}
