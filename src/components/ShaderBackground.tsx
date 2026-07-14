import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uMouse;
  uniform vec2 uResolution;

  // Classic simplex noise by Ashima Arts
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
    m = m*m;
    m = m*m;
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

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 5; i++) {
      v += a * snoise(p);
      p *= 2.0;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 uv = vUv;
    vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);
    vec2 p = (uv - 0.5) * aspect;

    // Mouse influence creates a gravitational pull in the noise field
    vec2 mouseInfluence = (uMouse - 0.5) * aspect;
    float dist = length(p - mouseInfluence);
    float pull = smoothstep(0.6, 0.0, dist) * 0.15;

    float t = uTime * 0.06;
    vec2 q = vec2(fbm(p * 1.5 + t), fbm(p * 1.5 + t + vec2(5.2, 1.3)));
    vec2 r = vec2(
      fbm(p * 2.0 + q + t * 0.5 + pull),
      fbm(p * 2.0 + q + t * 0.3 + vec2(1.7, 9.2))
    );
    float n = fbm(p * 3.0 + r);

    // Dark editorial palette — deep blacks with blue undertones
    vec3 colorBase = vec3(0.008, 0.012, 0.025);
    vec3 colorMid  = vec3(0.02, 0.04, 0.12);
    vec3 colorHi   = vec3(0.08, 0.18, 0.45);

    vec3 color = mix(colorBase, colorMid, smoothstep(-0.5, 0.5, n));
    color = mix(color, colorHi, smoothstep(0.3, 0.9, length(r)) * 0.6);

    // Subtle vignette
    float vig = 1.0 - smoothstep(0.4, 1.1, length(p));
    color *= 0.7 + vig * 0.3;

    gl_FragColor = vec4(color, 1.0);
  }
`;

function ShaderPlane() {
  const matRef = useRef<THREE.ShaderMaterial>(null!);
  const mouse = useRef(new THREE.Vector2(0.5, 0.5));
  const targetMouse = useRef(new THREE.Vector2(0.5, 0.5));

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uResolution: { value: new THREE.Vector2(1, 1) },
    }),
    []
  );

  useFrame((state, delta) => {
    const dt = Math.min(delta, 1 / 30);
    uniforms.uTime.value += dt;

    // Lerp mouse for smooth gravitational pull
    targetMouse.current.x += (mouse.current.x - targetMouse.current.x) * 0.04;
    targetMouse.current.y += (mouse.current.y - targetMouse.current.y) * 0.04;
    uniforms.uMouse.value.copy(targetMouse.current);

    uniforms.uResolution.value.set(
      state.size.width,
      state.size.height
    );
  });

  useEffect(() => {
    const handleMove = (e: PointerEvent) => {
      mouse.current.x = e.clientX / window.innerWidth;
      mouse.current.y = 1.0 - e.clientY / window.innerHeight;
    };
    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <mesh scale={[2, 2, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        ref={matRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        depthWrite={false}
      />
    </mesh>
  );
}

export function ShaderBackground() {
  return (
    <Canvas
      className="fixed inset-0"
      style={{ pointerEvents: "none", zIndex: 0 }}
      camera={{ position: [0, 0, 1], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, alpha: false }}
      frameloop="always"
    >
      <ShaderPlane />
    </Canvas>
  );
}
