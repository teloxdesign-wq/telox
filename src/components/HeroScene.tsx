import { useRef, useEffect, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { EffectComposer, Bloom, ChromaticAberration } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import * as THREE from "three";
import { useTeloxStore } from "@/store";

/**
 * Custom distortion shader material — displaces vertices using simplex noise
 * modulated by mouse position and time, creating a morphing, organic form.
 */
const distortionVertex = /* glsl */ `
  uniform float uTime;
  uniform float uDistort;
  uniform vec2 uMouse;

  varying vec3 vNormal;
  varying vec3 vPosition;
  varying float vDistort;

  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

  float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod289(i);
    vec4 p = permute(permute(permute(
      i.z + vec4(0.0, i1.z, i2.z, 1.0))
      + i.y + vec4(0.0, i1.y, i2.y, 1.0))
      + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }

  void main() {
    vNormal = normalize(normalMatrix * normal);

    // 3D noise displacement modulated by mouse + time
    float n = snoise(position * 1.5 + vec3(uTime * 0.3, uTime * 0.2, uTime * 0.25));
    float mouseInfluence = length(uMouse) * 0.3;
    float displacement = n * uDistort * (1.0 + mouseInfluence);

    vec3 newPos = position + normal * displacement;
    vDistort = displacement;
    vPosition = newPos;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
  }
`;

const distortionFragment = /* glsl */ `
  uniform float uTime;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform vec3 uColorC;

  varying vec3 vNormal;
  varying vec3 vPosition;
  varying float vDistort;

  void main() {
    // Fresnel rim lighting for premium edge glow
    vec3 viewDir = normalize(cameraPosition - vPosition);
    float fresnel = pow(1.0 - max(dot(vNormal, viewDir), 0.0), 2.5);

    // Color gradient based on distortion amount
    vec3 baseColor = mix(uColorA, uColorB, smoothstep(-0.3, 0.5, vDistort));
    vec3 color = mix(baseColor, uColorC, fresnel);

    // Add subtle iridescence
    float irid = sin(vDistort * 8.0 + uTime * 0.5) * 0.5 + 0.5;
    color += vec3(irid * 0.05, irid * 0.03, irid * 0.08) * fresnel;

    gl_FragColor = vec4(color, 1.0);
  }
`;

function DistortionLogo({ onLogoClick }: { onLogoClick: () => void }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const groupRef = useRef<THREE.Group>(null!);
  const mouse = useRef(new THREE.Vector2(0, 0));
  const targetRot = useRef(new THREE.Vector2(0, 0));
  const currentRot = useRef(new THREE.Vector2(0, 0));

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uDistort: { value: 0.35 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uColorA: { value: new THREE.Color("#050a1a") },
      uColorB: { value: new THREE.Color("#1a3a8a") },
      uColorC: { value: new THREE.Color("#60a5fa") },
    }),
    []
  );

  useEffect(() => {
    const handleMove = (e: PointerEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  useFrame((_, delta) => {
    const dt = Math.min(delta, 1 / 30);
    uniforms.uTime.value += dt;

    // Lerp mouse to target rotation for smooth, expensive feel
    targetRot.current.x = mouse.current.x * 0.5;
    targetRot.current.y = -mouse.current.y * 0.35;

    const damp = 1 - Math.pow(0.002, dt);
    currentRot.current.x += (targetRot.current.x - currentRot.current.x) * damp;
    currentRot.current.y += (targetRot.current.y - currentRot.current.y) * damp;

    if (groupRef.current) {
      groupRef.current.rotation.y = currentRot.current.x;
      groupRef.current.rotation.x = currentRot.current.y;
    }

    // Continuous slow auto-rotation on the mesh itself
    if (meshRef.current) {
      meshRef.current.rotation.z += dt * 0.08;
    }

    // Pass mouse to shader
    uniforms.uMouse.value.set(mouse.current.x, mouse.current.y);
  });

  return (
    <group ref={groupRef}>
      <mesh
        ref={meshRef}
        onClick={(e) => {
          e.stopPropagation();
          onLogoClick();
        }}
        onPointerOver={() => (document.body.style.cursor = "pointer")}
        onPointerOut={() => (document.body.style.cursor = "auto")}
      >
        <icosahedronGeometry args={[1.5, 32]} />
        <shaderMaterial
          vertexShader={distortionVertex}
          fragmentShader={distortionFragment}
          uniforms={uniforms}
        />
      </mesh>
      {/* Wireframe overlay for geometric definition */}
      <mesh scale={1.02}>
        <icosahedronGeometry args={[1.5, 2]} />
        <meshBasicMaterial
          color="#2563eb"
          wireframe
          transparent
          opacity={0.08}
        />
      </mesh>
    </group>
  );
}

function SceneLights() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} color="#ffffff" />
      <directionalLight position={[-5, -3, -2]} intensity={0.6} color="#3b82f6" />
      <pointLight position={[0, 0, 4]} intensity={1.5} color="#2563eb" distance={15} />
    </>
  );
}

export function HeroScene() {
  const setNavOpen = useTeloxStore((s) => s.setNavOpen);

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      className="absolute inset-0"
      style={{ pointerEvents: "auto" }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      frameloop="always"
    >
      <SceneLights />
      <DistortionLogo onLogoClick={() => setNavOpen(true)} />
      <EffectComposer>
        <Bloom
          intensity={0.6}
          luminanceThreshold={0.3}
          luminanceSmoothing={0.9}
          mipmapBlur
        />
        <ChromaticAberration
          blendFunction={BlendFunction.NORMAL}
          offset={[0.0008, 0.0008]}
          radialModulation={false}
          modulationOffset={0}
        />
      </EffectComposer>
    </Canvas>
  );
}
