import { useRef, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import { useTeloxStore } from "@/store";
import { LogoErrorBoundary } from "./LogoErrorBoundary";

function LogoMesh({ onLogoClick }: { onLogoClick: () => void }) {
  const groupRef = useRef<THREE.Group>(null!);
  const meshRef = useRef<THREE.Mesh>(null!);

  // Single passive listener for normalized mouse coords
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: PointerEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  // Minimal faceted icosahedron — one clean professional geometric shape
  const geometry = useMemo(() => new THREE.IcosahedronGeometry(1.4, 0), []);

  useFrame((_, delta) => {
    const group = groupRef.current;
    const mesh = meshRef.current;
    if (!group || !mesh) return;

    const dt = Math.min(delta, 1 / 30); // clamp for stability on slow frames

    // Continuous slow auto-rotation for life
    mesh.rotation.y += dt * 0.35;
    mesh.rotation.x += dt * 0.12;

    // Reactive lean toward the mouse, frame-rate independent damping
    const targetRotY = mouse.current.x * 0.6;
    const targetRotX = -mouse.current.y * 0.4;
    const damp = 1 - Math.pow(0.0015, dt);
    group.rotation.y += (targetRotY - group.rotation.y) * damp;
    group.rotation.x += (targetRotX - group.rotation.x) * damp;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.15} floatIntensity={0.35}>
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
          {/* Standard material: cheap, no transmission, no env-map cost */}
          <meshStandardMaterial
            color="#0a1840"
            metalness={0.88}
            roughness={0.28}
            flatShading
          />
        </mesh>
        {/* Subtle wireframe overlay for geometric definition */}
        <mesh geometry={geometry} scale={1.005}>
          <meshBasicMaterial color="#2563eb" wireframe transparent opacity={0.18} />
        </mesh>
      </group>
    </Float>
  );
}

export function TeloxCanvas() {
  const setNavOpen = useTeloxStore((s) => s.setNavOpen);

  return (
    <LogoErrorBoundary fallback={<div />}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 40 }}
        className="z-0"
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        frameloop="always"
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[4, 6, 5]} intensity={2.4} color="#ffffff" />
        <directionalLight position={[-5, -3, -2]} intensity={0.8} color="#3b82f6" />
        <pointLight position={[0, 0, 3]} intensity={1.2} color="#2563eb" distance={12} />
        <LogoMesh onLogoClick={() => setNavOpen(true)} />
      </Canvas>
    </LogoErrorBoundary>
  );
}
