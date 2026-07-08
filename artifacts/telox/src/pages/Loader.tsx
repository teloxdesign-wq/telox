import { useEffect } from "react";
import { motion } from "framer-motion";
import { Logo3D } from "@/components/Logo3D";

export function Loader({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const t = setTimeout(onComplete, 4000);
    return () => clearTimeout(t);
  }, [onComplete]);

  return (
    <motion.div 
      key="loader" 
      exit={{ opacity: 0, transition: { duration: 1.2 } }} 
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
    >
      <div className="relative flex items-center justify-center">
        {/* Animated Layout Wrapper for Logo */}
        <motion.div layoutId="logo-container" initial={{ scale: 55/120 }}>
          <Logo3D size={120} reflect={false} />
        </motion.div>
        
        {/* Progress Ring */}
        <svg className="absolute pointer-events-none" width="160" height="160" viewBox="0 0 160 160">
          <motion.circle
            cx="80" 
            cy="80" 
            r="78"
            fill="none"
            stroke="rgba(255,255,255,0.8)"
            strokeWidth="1.5"
            strokeDasharray="490"
            initial={{ strokeDashoffset: 490 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 4, ease: "linear" }}
            className="origin-center -rotate-90"
          />
        </svg>
      </div>
    </motion.div>
  );
}
