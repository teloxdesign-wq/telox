import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Shader-based liquid displacement page transition.
 * Renders a full-screen plane with a GLSL shader that wipes across the screen
 * using noise-based displacement, creating a liquid dissolve effect.
 */

const transitionVertex = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const transitionFragment = /* glsl */ `
  varying vec2 vUv;
  uniform float uProgress;
  uniform float uTime;
  uniform vec2 uResolution;

  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                       -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
        + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
        dot(x12.zw,x12.zw)), 0.0);
    m = m*m; m = m*m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 uv = vUv;
    vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);
    vec2 p = (uv - 0.5) * aspect;

    // Animated noise field for the wipe edge
    float n = snoise(p * 3.0 + uTime * 0.3);
    float n2 = snoise(p * 6.0 - uTime * 0.2);

    // The wipe edge uses noise to create an organic, liquid boundary
    float edge = uv.x + n * 0.15 + n2 * 0.05;
    float wipe = smoothstep(uProgress - 0.15, uProgress + 0.15, edge);

    // Deep blue-black with electric blue edge glow
    vec3 bgColor = vec3(0.005, 0.01, 0.02);
    vec3 edgeColor = vec3(0.15, 0.4, 1.0);
    vec3 color = mix(edgeColor, bgColor, wipe);

    // Add glow at the wipe boundary
    float glow = 1.0 - abs(edge - uProgress) * 8.0;
    glow = max(glow, 0.0);
    color += edgeColor * glow * 0.3 * (1.0 - wipe);

    float alpha = 1.0 - wipe;
    gl_FragColor = vec4(color, alpha);
  }
`;

function TransitionPlane({
  progressRef,
}: {
  progressRef: React.RefObject<number>;
}) {
  const matRef = useRef<THREE.ShaderMaterial>(null!);

  const uniforms = useMemo(
    () => ({
      uProgress: { value: 0 },
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(1, 1) },
    }),
    []
  );

  useFrame((state, delta) => {
    const dt = Math.min(delta, 1 / 30);
    uniforms.uTime.value += dt;
    uniforms.uProgress.value = progressRef.current;
    uniforms.uResolution.value.set(state.size.width, state.size.height);
  });

  return (
    <mesh scale={[2, 2, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        ref={matRef}
        vertexShader={transitionVertex}
        fragmentShader={transitionFragment}
        uniforms={uniforms}
        transparent
        depthWrite={false}
      />
    </mesh>
  );
}

export interface TransitionHandle {
  play: (onComplete?: () => void) => void;
}

export function PageTransition({
  active,
  progressRef,
}: {
  active: boolean;
  progressRef: React.RefObject<number>;
}) {
  if (!active) return null;

  return (
    <Canvas
      className="fixed inset-0"
      style={{ pointerEvents: "none", zIndex: 100 }}
      camera={{ position: [0, 0, 1], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, alpha: true }}
      frameloop="always"
    >
      <TransitionPlane progressRef={progressRef} />
    </Canvas>
  );
}
