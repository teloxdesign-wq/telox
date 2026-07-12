import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { RoundedBox, Float, MeshTransmissionMaterial, Environment } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";
import { useTeloxStore } from "@/store";
import { LogoErrorBoundary } from "./LogoErrorBoundary";

// Reduced by 2% from 1.0
const CUBE_SIZE = 0.98;
const GAP = 0.14;
const HALF = CUBE_SIZE / 2 + GAP / 2;
const CUBE_POSITIONS: [number, number, number][] = [
  [-HALF, HALF, 0], [HALF, HALF, 0], [0, -HALF, 0],
];

interface PremiumLogoMeshProps {
  onClick: () => void;
}

function PremiumLogoMesh({ onClick }: PremiumLogoMeshProps) {
  const phase = useTeloxStore((s) => s.phase);
  const groupRef = useRef<THREE.Group>(null!);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    const isHome = phase === "home";
    
    // Smooth interpolation for position and scale
    const targetX = isHome ? 0 : -2.5;
    const targetScale = isHome ? 1.45 : 0.98;
    
    groupRef.current.position.x += (targetX - groupRef.current.position.x) * 5 * delta;
    groupRef.current.scale.setScalar(
      groupRef.current.scale.x + (targetScale - groupRef.current.scale.x) * 5 * delta
    );
    
    // Mouse tracking with easing
    groupRef.current.rotation.y += (mouse.current.x * 0.5 - groupRef.current.rotation.y) * 3 * delta;
    groupRef.current.rotation.x += (-mouse.current.y * 0.3 - groupRef.current.rotation.x) * 3 * delta;
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={groupRef} onClick={onClick} onPointerOver={() => document.body.style.cursor = 'pointer'} onPointerOut={() => document.body.style.cursor = 'auto'}>
        {CUBE_POSITIONS.map(([x, y, z], i) => (
          <RoundedBox key={i} args={[CUBE_SIZE, CUBE_SIZE, CUBE_SIZE]} radius={0.15} position={[x, y, z]}>
            <MeshTransmissionMaterial
              backside={true}
              samples={16}
              transmission={0.9}
              roughness={0.05}
              thickness={0.5}
              color="#020617"
            />
          </RoundedBox>
        ))}
      </group>
    </Float>
  );
}

export function TeloxCanvas() {
  const { phase, setPhase } = useTeloxStore();

  return (
    <>
      {/* Main Canvas: No longer obscures the top-left branding */}
      <LogoErrorBoundary fallback={<div />}>
        <Canvas camera={{ position: [0, 0, 8], fov: 40 }} className="z-0">
          <Environment preset="studio" />
          <ambientLight intensity={0.5} />
          {/* Interaction: clicking the logo/canvas triggers transition */}
          <PremiumLogoMesh onClick={() => setPhase("nav")} />
        </Canvas>
      </LogoErrorBoundary>
    </>
  );
}
