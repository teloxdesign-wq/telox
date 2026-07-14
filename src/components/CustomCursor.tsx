import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type CursorVariant = "default" | "link" | "text" | "view" | "drag";

export function CustomCursor() {
  const [variant, setVariant] = useState<CursorVariant>("default");
  const [label, setLabel] = useState("");
  const [visible, setVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { stiffness: 500, damping: 35, mass: 0.8 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  // Inner dot follows more tightly
  const dotX = useSpring(mouseX, { stiffness: 1200, damping: 50, mass: 0.3 });
  const dotY = useSpring(mouseY, { stiffness: 1200, damping: 50, mass: 0.3 });

  useEffect(() => {
    const move = (e: PointerEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const over = (e: Event) => {
      const el = e.target as HTMLElement;
      const interactive = el.closest(
        'a, button, [data-cursor], [role="button"], input, textarea, [data-cursor-label]'
      );
      if (interactive) {
        const cv = interactive.getAttribute("data-cursor") as CursorVariant;
        const cl = interactive.getAttribute("data-cursor-label") || "";
        setVariant(cv || "link");
        setLabel(cl);
      } else {
        setVariant("default");
        setLabel("");
      }
    };

    const leave = () => setVisible(false);

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerover", over, { passive: true });
    document.addEventListener("pointerleave", leave);

    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
      document.removeEventListener("pointerleave", leave);
    };
  }, [mouseX, mouseY, visible]);

  const sizes: Record<CursorVariant, number> = {
    default: 36,
    link: 64,
    text: 8,
    view: 96,
    drag: 80,
  };

  const size = useSpring(sizes[variant], {
    stiffness: 350,
    damping: 28,
    mass: 0.6,
  });

  useEffect(() => {
    size.set(sizes[variant]);
  }, [variant, size]);

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center"
        style={{
          x,
          y,
          width: size,
          height: size,
          translateX: "-50%",
          translateY: "-50%",
          mixBlendMode: variant === "default" ? "difference" : "normal",
        }}
        animate={{
          opacity: visible ? 1 : 0,
          borderColor:
            variant === "default"
              ? "rgba(255,255,255,0.6)"
              : "rgba(37,99,235,0.9)",
          backgroundColor:
            variant === "link" || variant === "view"
              ? "rgba(37,99,235,0.08)"
              : "rgba(255,255,255,0)",
        }}
        transition={{ duration: 0.2 }}
      >
        <div
          className="rounded-full border"
          style={{ width: "100%", height: "100%" }}
        />
        {label && (
          <motion.span
            className="absolute text-[10px] font-medium uppercase tracking-widest text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            {label}
          </motion.span>
        )}
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          x: dotX,
          y: dotY,
          width: 6,
          height: 6,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: variant === "default" ? "#fff" : "#2563eb",
          opacity: visible ? 1 : 0,
        }}
      />
    </>
  );
}
