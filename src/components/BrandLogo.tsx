import { motion } from "framer-motion";
import { useTeloxStore } from "@/store";
import { cn } from "@/lib/utils";

/**
 * Global top-left Telox brand mark.
 * Present on every page; clicking it always returns the user home.
 * Uses a lightweight 2D spinning cube (CSS 3D) so it is cheap on every view,
 * including sub-pages where the heavy Three.js canvas is not mounted.
 */
export function BrandLogo({ className }: { className?: string }) {
  const setView = useTeloxStore((s) => s.setView);
  const setNavOpen = useTeloxStore((s) => s.setNavOpen);

  const goHome = () => {
    setView("home");
    setNavOpen(false);
  };

  return (
    <motion.button
      type="button"
      onClick={goHome}
      aria-label="Telox — home"
      className={cn(
        "pointer-events-auto flex items-center gap-2.5 cursor-pointer select-none",
        className
      )}
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      data-cursor="link"
    >
      <CubeMark />
      <span className="text-white font-sans text-lg font-bold tracking-tight">
        Telox
      </span>
    </motion.button>
  );
}

/** Small CSS-3D spinning cube as the brand glyph. */
function CubeMark() {
  const s = "22px";
  const d = "11px";
  return (
    <div
      className="relative"
      style={{ width: s, height: s, perspective: "400px" }}
    >
      <motion.div
        className="absolute inset-0"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: 360 }}
        transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
      >
        {/* front */}
        <Face
          w={s}
          h={s}
          bg="linear-gradient(135deg, rgba(37,99,235,0.9), rgba(13,36,87,0.95))"
          transform={`translateZ(${d})`}
        />
        {/* back */}
        <Face
          w={s}
          h={s}
          bg="rgba(8,24,64,0.95)"
          transform={`rotateY(180deg) translateZ(${d})`}
        />
        {/* left */}
        <Face
          w={s}
          h={s}
          bg="rgba(12,32,80,0.95)"
          transform={`rotateY(-90deg) translateZ(${d})`}
          left="50%"
          marginLeft={`-${d}`}
        />
        {/* right */}
        <Face
          w={s}
          h={s}
          bg="rgba(12,32,80,0.95)"
          transform={`rotateY(90deg) translateZ(${d})`}
          left="50%"
          marginLeft={`-${d}`}
        />
        {/* top */}
        <Face
          w={s}
          h={s}
          bg="rgba(40,90,200,0.7)"
          transform={`rotateX(90deg) translateZ(${d})`}
          top="50%"
          marginTop={`-${d}`}
        />
        {/* bottom */}
        <Face
          w={s}
          h={s}
          bg="rgba(5,15,40,0.95)"
          transform={`rotateX(-90deg) translateZ(${d})`}
          top="50%"
          marginTop={`-${d}`}
        />
      </motion.div>
    </div>
  );
}

function Face({
  w,
  h,
  bg,
  transform,
  left = "0",
  top = "0",
  marginLeft = "0",
  marginTop = "0",
}: {
  w: string;
  h: string;
  bg: string;
  transform: string;
  left?: string;
  top?: string;
  marginLeft?: string;
  marginTop?: string;
}) {
  return (
    <div
      style={{
        position: "absolute",
        width: w,
        height: h,
        left,
        top,
        marginLeft,
        marginTop,
        background: bg,
        transform,
        borderRadius: "3px",
        border: "1px solid rgba(120,160,255,0.25)",
      }}
    />
  );
}
