import { useRef, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { useTeloxStore } from "@/store";
import { LogoErrorBoundary } from "./LogoErrorBoundary";

function OrbitingLabel() {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const group = groupRef.current;
    if (!group) return;
    const t = state.clock.getElapsedTime();
    const radius = 2.6;
    group.position.x = Math.cos(t * 0.4) * radius;
    group.position.z = Math.sin(t * 0.4) * radius;
    group.position.y = Math.sin(t * 0.3) * 0.4;
    group.lookAt(state.camera.position);
  });

  return (
    <group ref={groupRef}>
      <Html
        center
        distanceFactor={8}
        zIndexRange={[10, 0]}
        style={{
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        <div
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            fontWeight: 500,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "rgba(96, 144, 255, 0.85)",
            whiteSpace: "nowrap",
            textShadow: "0 0 20px rgba(37, 99, 235, 0.5)",
          }}
        >
          What We Do
        </div>
      </Html>
    </group>
  );
}

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

  const geometry = useMemo(() => new THREE.IcosahedronGeometry(1.4, 0), []);

  useFrame((_, delta) => {
    const group = groupRef.current;
    const mesh = meshRef.current;
    if (!group || !mesh) return;

    const dt = Math.min(delta, 1 / 30);
    floatPhase.current += dt;

    mesh.rotation.y += dt * 0.35;
    mesh.rotation.x += dt * 0.12;

    const targetRotY = mouse.current.x * 0.6;
    const targetRotX = -mouse.current.y * 0.4;
    const damp = 1 - Math.pow(0.0015, dt);
    group.rotation.y += (targetRotY - group.rotation.y) * damp;
    group.rotation.x += (targetRotX - group.rotation.x) * damp;

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
        <meshStandardMaterial
          color="#0a1840"
          metalness={0.88}
          roughness={0.28}
          flatShading
        />
      </mesh>
      <mesh geometry={geometry} scale={1.005}>
        <meshBasicMaterial color="#2563eb" wireframe transparent opacity={0.12} />
      </mesh>
    </group>
  );
}

/** Spring-animated wrapper that moves the 3D content left + scales down when active. */
function ActiveGroup({ activeMode, children }: { activeMode: boolean; children: React.ReactNode }) {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((_, delta) => {
    const group = groupRef.current;
    if (!group) return;
    const dt = Math.min(delta, 1 / 30);
    const damp = 1 - Math.pow(0.002, dt); // spring-like damping

    const targetX = activeMode ? -2.5 : 0;
    const targetScale = activeMode ? 0.5 : 1;

    group.position.x += (targetX - group.position.x) * damp;
    const s = group.scale.x + (targetScale - group.scale.x) * damp;
    group.scale.set(s, s, s);
  });

  return <group ref={groupRef}>{children}</group>;
}

export function TeloxCanvas() {
  const setNavOpen = useTeloxStore((s) => s.setNavOpen);
  const setActiveMode = useTeloxStore((s) => s.setActiveMode);
  const activeMode = useTeloxStore((s) => s.activeMode);
  const navOpen = useTeloxStore((s) => s.navOpen);

  const handleLogoClick = () => {
    if (navOpen) {
      setNavOpen(false);
      return;
    }
    setActiveMode(!activeMode);
  };

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
        <ambientLight intensity={0.7} />
        <directionalLight position={[4, 6, 5]} intensity={2.4} color="#ffffff" />
        <directionalLight position={[-5, -3, -2]} intensity={0.8} color="#3b82f6" />
        <pointLight position={[0, 0, 3]} intensity={1.2} color="#2563eb" distance={12} />

        <ActiveGroup activeMode={activeMode}>
          <LogoMesh onLogoClick={handleLogoClick} />
          <OrbitingLabel />
        </ActiveGroup>
      </Canvas>
    </LogoErrorBoundary>
  );
}
