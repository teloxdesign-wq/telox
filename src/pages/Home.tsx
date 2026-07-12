import { motion } from "framer-motion";
import { useTeloxStore } from "@/store";

export function Home({ children }: { children: React.ReactNode }) {
  const navOpen = useTeloxStore((s) => s.navOpen);
  const toggleNav = useTeloxStore((s) => s.toggleNav);

  return (
    <motion.div
      className="absolute inset-0"
      style={{ zIndex: 5 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Subtle radial gradient behind logo area */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: "14%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "420px",
          height: "420px",
          background:
            "radial-gradient(ellipse at center, rgba(30,60,180,0.12) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />
      
      {children}
    </motion.div>
  );
} 
