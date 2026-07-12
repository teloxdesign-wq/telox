import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function Logo3D({
  className,
  size = 120,
  reflect = false,
  gap = 16,
  rotationDuration = 34,
}: {
  className?: string;
  size?: number;
  reflect?: boolean;
  gap?: number;
  rotationDuration?: number;
}) {
  const s = `${size}px`;
  const d = `${size / 2}px`;
  const step = size / 2 + gap / 2;

  const css = `
    .logo-container {
      perspective: 1400px;
      transform-style: preserve-3d;
    }
    .logo-wrapper {
      transform-style: preserve-3d;
      position: relative;
    }
    .logo-cube {
      position: absolute;
      transform-style: preserve-3d;
      width: var(--lc-s);
      height: var(--lc-s);
      left: calc(var(--lc-s) / -2);
      top: calc(var(--lc-s) / -2);
    }
    .logo-face {
      position: absolute;
      overflow: hidden;
      border-radius: 6px;
      border: 1px solid rgba(120, 160, 255, 0.30);
      background: radial-gradient(ellipse at 40% 35%, rgba(37, 99, 235, 0.55) 0%, rgba(13, 36, 87, 0.92) 60%, rgba(5, 15, 40, 0.98) 100%);
      box-shadow:
        inset 0 0 18px rgba(30, 79, 199, 0.7),
        inset 0 0 4px rgba(255,255,255,0.08);
      backdrop-filter: blur(2px);
      -webkit-backdrop-filter: blur(2px);
    }
    /* subtle edge highlight on top-left of each face */
    .logo-face::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        linear-gradient(135deg,
          rgba(255,255,255,0.22) 0%,
          rgba(255,255,255,0.06) 18%,
          transparent 40%);
      pointer-events: none;
      border-radius: inherit;
    }
    /* sweeping shimmer glint — periodic light catch */
    .logo-face::after {
      content: '';
      position: absolute;
      top: -20%;
      left: -60%;
      width: 40%;
      height: 140%;
      background: linear-gradient(
        105deg,
        transparent 0%,
        rgba(255,255,255,0.13) 45%,
        rgba(255,255,255,0.28) 50%,
        rgba(255,255,255,0.13) 55%,
        transparent 100%
      );
      animation: logo-shimmer 5s ease-in-out infinite;
      pointer-events: none;
    }
    @keyframes logo-shimmer {
      0%   { transform: translateX(0%);    opacity: 0; }
      10%  { opacity: 1; }
      35%  { transform: translateX(430%);  opacity: 0; }
      100% { transform: translateX(430%);  opacity: 0; }
    }
    /* stagger shimmer on each cube so they don't all flash together */
    .logo-cube:nth-child(2) .logo-face::after { animation-delay: 1.6s; }
    .logo-cube:nth-child(3) .logo-face::after { animation-delay: 3.2s; }

    .logo-face.front  { width: var(--lc-s); height: var(--lc-s); transform: translateZ(calc(var(--lc-d) / 2)); }
    .logo-face.back   { width: var(--lc-s); height: var(--lc-s); transform: rotateY(180deg) translateZ(calc(var(--lc-d) / 2)); }
    .logo-face.left   { width: var(--lc-d); height: var(--lc-s); left: calc(50% - var(--lc-d)/2); transform: rotateY(-90deg) translateZ(calc(var(--lc-s) / 2)); }
    .logo-face.right  { width: var(--lc-d); height: var(--lc-s); left: calc(50% - var(--lc-d)/2); transform: rotateY(90deg)  translateZ(calc(var(--lc-s) / 2)); }
    .logo-face.top    { width: var(--lc-s); height: var(--lc-d); top:  calc(50% - var(--lc-d)/2); transform: rotateX(90deg)  translateZ(calc(var(--lc-s) / 2)); }
    .logo-face.bottom { width: var(--lc-s); height: var(--lc-d); top:  calc(50% - var(--lc-d)/2); transform: rotateX(-90deg) translateZ(calc(var(--lc-s) / 2)); }

    /* side / top / bottom faces are darker */
    .logo-face.left, .logo-face.right {
      background: radial-gradient(ellipse at center, rgba(20, 60, 160, 0.5) 0%, rgba(5, 18, 55, 0.95) 100%);
    }
    .logo-face.top {
      background: linear-gradient(180deg, rgba(60, 120, 255, 0.35) 0%, rgba(13, 36, 87, 0.85) 100%);
    }
    .logo-face.bottom {
      background: linear-gradient(0deg, rgba(5, 12, 35, 0.97) 0%, rgba(13, 36, 87, 0.7) 100%);
    }
    .logo-face.back {
      background: radial-gradient(ellipse at center, rgba(10, 30, 90, 0.7) 0%, rgba(3, 10, 30, 0.98) 100%);
    }
  `;

  // Reflection container height — tall enough to show a full faded clone
  const reflectH = size * 1.1;

  return (
    <div
      className={cn('logo-container flex items-center justify-center', className)}
      style={{ '--lc-s': s, '--lc-d': d } as React.CSSProperties}
    >
      <style>{css}</style>

      {/* Main spinning logo */}
      <motion.div
        className="logo-wrapper w-0 h-0"
        style={{ cursor: "pointer" }}
        animate={{ rotateY: 360 }}
        transition={{ repeat: Infinity, duration: rotationDuration, ease: "linear" }}
      >
        <Cube x={`-${step}px`} y={`-${step}px`} />
        <Cube x={`${step}px`}  y={`-${step}px`} />
        <Cube x="0px"          y={`${step}px`}  />
      </motion.div>

      {/* Mirror reflection below */}
      {reflect && (
        <div
          className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            top: `calc(100% + ${size * 0.28}px)`,
            width: size * 2.6,
            height: reflectH,
          }}
        >
          {/* Blue-tinted floor glow */}
          <div
            className="absolute inset-x-0 top-0"
            style={{
              height: 2,
              background: "linear-gradient(90deg, transparent, rgba(37,99,235,0.35), transparent)",
            }}
          />
          {/* Flipped clone with gradient fade */}
          <div
            className="absolute inset-0"
            style={{
              maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 65%)",
              WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 65%)",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <motion.div
              className="logo-wrapper w-0 h-0"
              style={{
                scaleY: -1,
                opacity: 0.28,
                filter: "blur(2px) saturate(1.4)",
                position: "absolute",
                top: 0,
              }}
              animate={{ rotateY: 360 }}
              transition={{ repeat: Infinity, duration: rotationDuration, ease: "linear" }}
            >
              <Cube x={`-${step}px`} y={`-${step}px`} />
              <Cube x={`${step}px`}  y={`-${step}px`} />
              <Cube x="0px"          y={`${step}px`}  />
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
}

interface CubeProps extends React.ComponentPropsWithoutRef<"div"> {
  x: string;
  y: string;
}

function Cube({ x, y, ...props }: CubeProps) {
  return (
    <div className="logo-cube" style={{ transform: `translate3d(${x}, ${y}, 0)` }} {...props}>
      <div className="logo-face front" />
      <div className="logo-face back" />
      <div className="logo-face left" />
      <div className="logo-face right" />
      <div className="logo-face top" />
      <div className="logo-face bottom" />
    </div>
  );
} 
