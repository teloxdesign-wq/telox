import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function Logo3D({ 
  className, 
  size = 120, 
  reflect = false 
}: { 
  className?: string; 
  size?: number; 
  reflect?: boolean; 
}) {
  const s = `${size}px`;
  const d = `${size / 2}px`;

  const css = `
    .logo-container {
      perspective: 1200px;
      transform-style: preserve-3d;
    }
    .logo-wrapper {
      transform-style: preserve-3d;
      position: relative;
    }
    .logo-cube {
      position: absolute;
      transform-style: preserve-3d;
      width: var(--s);
      height: var(--s);
      left: calc(var(--s) / -2);
      top: calc(var(--s) / -2);
    }
    .logo-face {
      position: absolute;
      border: 1px solid rgba(255, 255, 255, 0.25);
      background: radial-gradient(circle at center, rgba(30, 79, 199, 0.5) 0%, rgba(13, 36, 87, 0.9) 100%);
      box-shadow: inset 0 0 20px rgba(30, 79, 199, 0.8), 0 0 5px rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(2px);
      -webkit-backdrop-filter: blur(2px);
    }
    .logo-face.front { width: var(--s); height: var(--s); transform: translateZ(calc(var(--d) / 2)); }
    .logo-face.back { width: var(--s); height: var(--s); transform: rotateY(180deg) translateZ(calc(var(--d) / 2)); }
    .logo-face.left { width: var(--d); height: var(--s); left: calc(50% - var(--d)/2); transform: rotateY(-90deg) translateZ(calc(var(--s) / 2)); }
    .logo-face.right { width: var(--d); height: var(--s); left: calc(50% - var(--d)/2); transform: rotateY(90deg) translateZ(calc(var(--s) / 2)); }
    .logo-face.top { width: var(--s); height: var(--d); top: calc(50% - var(--d)/2); transform: rotateX(90deg) translateZ(calc(var(--s) / 2)); }
    .logo-face.bottom { width: var(--s); height: var(--d); top: calc(50% - var(--d)/2); transform: rotateX(-90deg) translateZ(calc(var(--s) / 2)); }
  `;

  return (
    <div className={cn("logo-container flex items-center justify-center", className)} style={{ '--s': s, '--d': d } as any}>
      <style>{css}</style>
      
      {/* Main Logo */}
      <motion.div
        className="logo-wrapper w-0 h-0"
        animate={{ rotateY: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        <Cube x="calc(var(--s) * -0.5)" y="calc(var(--s) * -0.5)" />
        <Cube x="calc(var(--s) * 0.5)" y="calc(var(--s) * -0.5)" />
        <Cube x="0px" y="calc(var(--s) * 0.5)" />
      </motion.div>

      {/* Reflection */}
      {reflect && (
        <div 
          className="absolute left-1/2 -translate-x-1/2 top-[100%] mt-[10px] pointer-events-none" 
          style={{ width: size, height: size }}
        >
          <div 
            className="w-full h-full relative" 
            style={{ 
              maskImage: 'linear-gradient(to bottom, black 0%, transparent 70%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 70%)',
              transformStyle: "preserve-3d"
            }}
          >
            <motion.div
              className="logo-wrapper w-0 h-0 absolute left-1/2 top-0"
              style={{ scaleY: -1, opacity: 0.35, filter: 'blur(3px)' }}
              animate={{ rotateY: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
              <Cube x="calc(var(--s) * -0.5)" y="calc(var(--s) * -0.5)" />
              <Cube x="calc(var(--s) * 0.5)" y="calc(var(--s) * -0.5)" />
              <Cube x="0px" y="calc(var(--s) * 0.5)" />
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
}

function Cube({ x, y }: { x: string; y: string }) {
  return (
    <div className="logo-cube" style={{ transform: `translate3d(${x}, ${y}, 0)` }}>
      <div className="logo-face front" />
      <div className="logo-face back" />
      <div className="logo-face left" />
      <div className="logo-face right" />
      <div className="logo-face top" />
      <div className="logo-face bottom" />
    </div>
  );
}
