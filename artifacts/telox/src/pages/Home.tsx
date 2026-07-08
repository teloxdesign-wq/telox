import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import { Logo3D } from "@/components/Logo3D";

export function Home({ navOpen, setNavOpen }: { navOpen: boolean; setNavOpen: (v: boolean) => void }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { damping: 60, stiffness: 300 });
  const smoothY = useSpring(mouseY, { damping: 60, stiffness: 300 });

  const rotateX = useTransform(smoothY, [-1, 1], [12, -12]);
  const rotateY = useTransform(smoothX, [-1, 1], [-12, 12]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth) * 2 - 1);
      mouseY.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="absolute inset-0 bg-black flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      onClick={() => navOpen && setNavOpen(false)}
    >
      {/* Logo wrapper — layoutId matches Loader so Framer Motion grows it in */}
      <motion.div
        layoutId="telox-logo"
        className="relative z-10 cursor-pointer"
        animate={{
          x: navOpen ? "-22vw" : "0vw",
          scale: navOpen ? 0.55 : 1,
        }}
        transition={{ type: "spring", damping: 32, stiffness: 190 }}
        onClick={(e) => {
          e.stopPropagation();
          setNavOpen(!navOpen);
        }}
      >
        <motion.div style={{ rotateX, rotateY, transformPerspective: 1400 }}>
          <Logo3D size={220} reflect={!navOpen} rotationDuration={38} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
