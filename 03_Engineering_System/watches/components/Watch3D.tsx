"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

/**
 * Procedural 3D watch built from Three.js primitives.
 * No external .glb model needed — constructed from torus, cylinder, ring geometry.
 * Rotates slowly on Y axis with subtle tilt. Gold metallic material.
 */

function WatchGeometry() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.25;
      groupRef.current.rotation.x = Math.sin(Date.now() * 0.0003) * 0.08;
    }
  });

  const goldMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#C9A84C",
        metalness: 0.95,
        roughness: 0.18,
      }),
    []
  );

  const darkMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#1a1a1a",
        metalness: 0.3,
        roughness: 0.5,
      }),
    []
  );

  const glassMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#ffffff",
        metalness: 0,
        roughness: 0.05,
        transparent: true,
        opacity: 0.15,
        clearcoat: 1,
        clearcoatRoughness: 0.05,
      }),
    []
  );

  const leatherMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#2a2018",
        metalness: 0,
        roughness: 0.85,
      }),
    []
  );

  return (
    <group ref={groupRef}>
      {/* ── Watch Case ── */}
      {/* Main case body — torus shape */}
      <mesh position={[0, 0, 0]} material={goldMaterial}>
        <torusGeometry args={[1.5, 0.35, 32, 64]} />
      </mesh>

      {/* Inner bezel ring */}
      <mesh position={[0, 0, 0.02]} material={goldMaterial}>
        <torusGeometry args={[1.15, 0.12, 32, 64]} />
      </mesh>

      {/* Case side — cylinder */}
      <mesh position={[0, 0, -0.15]} rotation={[Math.PI / 2, 0, 0]} material={goldMaterial}>
        <cylinderGeometry args={[1.48, 1.52, 0.38, 64]} />
      </mesh>

      {/* ── Dial ── */}
      <mesh position={[0, 0, 0.08]} material={darkMaterial}>
        <cylinderGeometry args={[1.12, 1.12, 0.02, 64]} />
      </mesh>

      {/* ── Crystal (glass) ── */}
      <mesh position={[0, 0, 0.2]} material={glassMaterial}>
        <cylinderGeometry args={[1.1, 1.1, 0.04, 64]} />
      </mesh>

      {/* ── Hour markers ── */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const r = 0.85;
        return (
          <mesh
            key={i}
            position={[Math.cos(angle) * r, Math.sin(angle) * r, 0.15]}
            rotation={[0, 0, angle]}
            material={goldMaterial}
          >
            <boxGeometry args={[i % 3 === 0 ? 0.06 : 0.03, i % 3 === 0 ? 0.18 : 0.1, 0.02]} />
          </mesh>
        );
      })}

      {/* ── Hands ── */}
      {/* Hour hand */}
      <mesh
        position={[0, 0.15, 0.22]}
        rotation={[0, 0, -0.5]}
        material={goldMaterial}
      >
        <boxGeometry args={[0.04, 0.55, 0.015]} />
      </mesh>
      {/* Minute hand */}
      <mesh
        position={[0, 0.28, 0.23]}
        rotation={[0, 0, 1.2]}
        material={goldMaterial}
      >
        <boxGeometry args={[0.025, 0.7, 0.012]} />
      </mesh>
      {/* Second hand — thin */}
      <mesh
        position={[0, 0.35, 0.24]}
        rotation={[0, 0, 2.8]}
        material={goldMaterial}
      >
        <boxGeometry args={[0.012, 0.8, 0.008]} />
      </mesh>

      {/* Center pinion */}
      <mesh position={[0, 0, 0.26]} material={goldMaterial}>
        <sphereGeometry args={[0.06, 32, 32]} />
      </mesh>

      {/* ── Crown ── */}
      <mesh position={[1.5, 0, 0]} rotation={[0, 0, Math.PI / 2]} material={goldMaterial}>
        <cylinderGeometry args={[0.12, 0.12, 0.3, 16]} />
      </mesh>
      {/* Crown ridges */}
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh
          key={`crown-${i}`}
          position={[1.5 + Math.cos((i / 8) * Math.PI * 2) * 0.13, Math.sin((i / 8) * Math.PI * 2) * 0.13, 0]}
          rotation={[0, Math.PI / 2, 0]}
          material={goldMaterial}
        >
          <boxGeometry args={[0.35, 0.015, 0.015]} />
        </mesh>
      ))}

      {/* ── Strap lugs (top & bottom) ── */}
      {[-1, 1].map((dir) => (
        <group key={`lug-${dir}`}>
          <mesh position={[0.6, dir * 1.48, -0.05]} material={goldMaterial}>
            <boxGeometry args={[0.5, 0.2, 0.2]} />
          </mesh>
          <mesh position={[-0.6, dir * 1.48, -0.05]} material={goldMaterial}>
            <boxGeometry args={[0.5, 0.2, 0.2]} />
          </mesh>
        </group>
      ))}

      {/* ── Strap (top) ── */}
      <mesh position={[0, 2.2, -0.02]} material={leatherMaterial}>
        <boxGeometry args={[1.6, 1.4, 0.06]} />
      </mesh>
      {/* Strap (bottom) */}
      <mesh position={[0, -2.2, -0.02]} material={leatherMaterial}>
        <boxGeometry args={[1.6, 1.4, 0.06]} />
      </mesh>

      {/* ── Subdial ── */}
      <mesh position={[0, -0.5, 0.15]} material={goldMaterial}>
        <torusGeometry args={[0.2, 0.015, 16, 32]} />
      </mesh>
      <mesh position={[0, -0.5, 0.16]}>
        <cylinderGeometry args={[0.18, 0.18, 0.01, 32]} />
        <meshStandardMaterial color="#111" metalness={0.3} roughness={0.5} />
      </mesh>
      {/* Small seconds hand */}
      <mesh
        position={[0, -0.42, 0.18]}
        rotation={[0, 0, 0.8]}
        material={goldMaterial}
      >
        <boxGeometry args={[0.01, 0.15, 0.006]} />
      </mesh>

      {/* ── Date window ── */}
      <mesh position={[0.65, 0, 0.16]} material={goldMaterial}>
        <boxGeometry args={[0.15, 0.08, 0.005]} />
      </mesh>
      <mesh position={[0.65, 0, 0.17]}>
        <boxGeometry args={[0.12, 0.06, 0.005]} />
        <meshStandardMaterial color="#f5f0e8" metalness={0} roughness={0.6} />
      </mesh>
    </group>
  );
}

export function Watch3D() {
  return (
    <div style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}>
      <Canvas
        camera={{ position: [0, 0.3, 5.5], fov: 38 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.4} color="#d4c5a9" />
        <pointLight position={[5, 3, 5]} intensity={1.5} color="#C9A84C" />
        <pointLight position={[-5, -2, 3]} intensity={0.8} color="#B89947" />
        <pointLight position={[0, 5, 5]} intensity={0.6} color="#ffffff" />
        <spotLight
          position={[0, 4, 6]}
          angle={0.4}
          penumbra={0.5}
          intensity={2}
          color="#C9A84C"
          castShadow={false}
        />

        <WatchGeometry />

        <Environment preset="studio" />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}
