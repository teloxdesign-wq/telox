import { useRef, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Lightformer,
  MeshTransmissionMaterial,
} from "@react-three/drei";
import * as THREE from "three";
import { useTeloxStore } from "@/store";
import { LogoErrorBoundary } from "./LogoErrorBoundary";

function LogoMesh({ onLogoClick }: { onLogoClick: () => void }) {
  const groupRef = useRef<THREE.Group>(null!);
  const meshRef = useRef<THREE.Mesh>(null!);
  const mouse = useRef({ x: 0, y: 0 });
  const floatPhase = useRef(0);

  useEffect(() => {
    const handleMove = (e: PointerEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  // Low-poly icosahedron (20 faces) — minimal geometry for glass refraction
  const geometry = useMemo(() => new THREE.IcosahedronGeometry(1.4, 0), []);

  useFrame((_, delta) => {
    const group = groupRef.current;
    const mesh = meshRef.current;
    if (!group || !mesh) return;

    const dt = Math.min(delta, 1 / 30); // clamp for stability on slow frames
    floatPhase.current += dt;

    // Slow auto-rotation for life
    mesh.rotation.y += dt * 0.35;
    mesh.rotation.x += dt * 0.12;

    // Reactive lean toward the mouse, frame-rate independent damping
    const targetRotY = mouse.current.x * 0.6;
    const targetRotX = -mouse.current.y * 0.4;
    const damp = 1 - Math.pow(0.0015, dt);
    group.rotation.y += (targetRotY - group.rotation.y) * damp;
    group.rotation.x += (targetRotX - group.rotation.x) * damp;

    // Gentle floating motion (replaces drei <Float>)
    group.position.y = Math.sin(floatPhase.current * 1.4) * 0.12;
    group.position.x = Math.cos(floatPhase.current * 0.9) * 0.06;
  });

  return (
    <group
      ref={groupRef}
      onClick={(e) => {
        e.stopPropagation();
        onLogoClick();
      }}
    >
      <mesh
        ref={meshRef}
        geometry={geometry}
        onPointerOver={() => (document.body.style.cursor = "pointer")}
        onPointerOut={() => (document.body.style.cursor = "auto")}
      >
        {/* Glassmorphism material — restored, with reduced samples/resolution
            for performance. Low-poly geometry keeps the transmission pass cheap. */}
        <MeshTransmissionMaterial
          transmission={1}
          thickness={0.5}
          roughness={0.12}
          ior={1.2}
          chromaticAberration={0.06}
          backside={false}
          samples={6}
          resolution={256}
          color="#1a3a6e"
          attenuationColor="#2563eb"
          attenuationDistance={0.8}
        />
      </mesh>
    </group>
  );
}

export function TeloxCanvas() {
  const setNavOpen = useTeloxStore((s) => s.setNavOpen);

  return (
    <LogoErrorBoundary fallback={<div />}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 40 }}
        className="absolute inset-0"
        style={{ pointerEvents: "auto" }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        frameloop="always"
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[4, 6, 5]} intensity={1.5} color="#ffffff" />
        <directionalLight position={[-5, -3, -2]} intensity={0.6} color="#3b82f6" />

        {/* Custom environment for glass reflections — lightweight, no HDR loading */}
        <Environment resolution={64}>
          <Lightformer intensity={2} position={[0, 2, 4]} scale={[6, 1, 1]} />
          <Lightformer intensity={1.5} position={[-3, 1, 2]} scale={[3, 1, 1]} />
          <Lightformer intensity={1.5} position={[3, 1, 2]} scale={[3, 1, 1]} />
          <Lightformer intensity={1} position={[0, -2, 2]} scale={[4, 1, 1]} />
        </Environment>

        <LogoMesh onLogoClick={() => setNavOpen(true)} />
      </Canvas>
    </LogoErrorBoundary>
  );
}
