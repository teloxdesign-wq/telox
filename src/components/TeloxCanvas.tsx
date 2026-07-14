import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, MeshTransmissionMaterial } from "@react-three/drei";
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
      <Html center distanceFactor={8} zIndexRange={[10, 0]} style={{ pointerEvents: "none", userSelect: "none" }}>
        <div style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", fontWeight: 500, letterSpacing: "0.35em", textTransform: "uppercase", color: "rgba(96, 144, 255, 0.85)", whiteSpace: "nowrap", textShadow: "0 0 20px rgba(37, 99, 235, 0.5)" }}>
          What We Do
        </div>
      </Html>
    </group>
  );
}

function GlassCube({ position, args }: { position: [number, number, number]; args: [number, number, number] }) {
  return (
    <mesh position={position}>
      <boxGeometry args={args} />
      <MeshTransmissionMaterial
        backside
        backsideThickness={0.5}
        samples={8}
        resolution={512}
        transmission={1}
        roughness={0}
        thickness={0.5}
        envMapIntensity={2}
        color="#ffffff"
      />
    </mesh>
  );
}

function LogoMesh({ onLogoClick }: { onLogoClick: () => void }) {
  const groupRef = useRef<THREE.Group>(null!);
  const logoRef = useRef<THREE.Group>(null!);
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

  useFrame((_, delta) => {
    const group = groupRef.current;
    const logo = logoRef.current;
    if (!group || !logo) return;

    const dt = Math.min(delta, 1 / 30);
    floatPhase.current += dt;

    // Rotation of the T-Logo
    logo.rotation.y += dt * 0.2;
    logo.rotation.x += dt * 0.1;

    const targetRotY = mouse.current.x * 0.6;
    const targetRotX = -mouse.current.y * 0.4;
    const damp = 1 - Math.pow(0.0015, dt);
    group.rotation.y += (targetRotY - group.rotation.y) * damp;
    group.rotation.x += (targetRotX - group.rotation.x) * damp;

    group.position.y = Math.sin(floatPhase.current * 1.4) * 0.12;
  });

  return (
    <group ref={groupRef} onClick={(e) => { e.stopPropagation(); onLogoClick(); }}>
      <group ref={logoRef} onPointerOver={() => (document.body.style.cursor = "pointer")} onPointerOut={() => (document.body.style.cursor = "auto")}>
        {/* Top Bar of the T */}
        <GlassCube position={[0, 1.2, 0]} args={[3, 0.8, 0.8]} />
        {/* Vertical Stem of the T */}
        <GlassCube position={[0, -0.6, 0]} args={[0.8, 2.5, 0.8]} />
      </group>
    </group>
  );
}

function ActiveGroup({ activeMode, children }: { activeMode: boolean; children: React.ReactNode }) {
  const groupRef = useRef<THREE.Group>(null!);
  useFrame((_, delta) => {
    const group = groupRef.current;
    if (!group) return;
    const dt = Math.min(delta, 1 / 30);
    const damp = 1 - Math.pow(0.002, dt);
    const targetX = activeMode ? -2.5 : 0;
    const targetScale = activeMode ? 0.5 : 1;
    group.position.x += (targetX - group.position.x) * damp;
    const s = group.scale.x + (targetScale - group.scale.x) * damp;
    group.scale.set(s, s, s);
  });
  return <group ref={groupRef}>{children}</group>;
}

export function TeloxCanvas() {
  const { setNavOpen, setActiveMode, activeMode, navOpen } = useTeloxStore();
  const handleLogoClick = () => {
    if (navOpen) { setNavOpen(false); return; }
    setActiveMode(!activeMode);
  };

  return (
    <LogoErrorBoundary fallback={<div />}>
      <Canvas camera={{ position: [0, 0, 6], fov: 40 }} className="absolute inset-0" dpr={[1, 1.75]} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[4, 6, 5]} intensity={2.4} />
        <ActiveGroup activeMode={activeMode}>
          <LogoMesh onLogoClick={handleLogoClick} />
          <OrbitingLabel />
        </ActiveGroup>
      </Canvas>
    </LogoErrorBoundary>
  );
}