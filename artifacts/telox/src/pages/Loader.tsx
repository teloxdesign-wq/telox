import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo3D } from "@/components/Logo3D";

// r=47 → circumference ≈ 295.3
const RING_R = 47;
const CIRCUMFERENCE = 2 * Math.PI * RING_R;

export function Loader({ onComplete }: { onComplete: () => void }) {
  // 'spinning' → ring animates; 'done' → ring fades, logo begins growing
  const [phase, setPhase] = useState<"spinning" | "done">("spinning");

  useEffect(() => {
    // After 4s ring is full → fade ring out
    const t1 = setTimeout(() => setPhase("done"), 4000);
    // After ring has faded (~0.7s) → hand off to home, layoutId takes over
    const t2 = setTimeout(onComplete, 4700);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onComplete]);

  return (
    <motion.div
      key="loader"
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      <div className="relative flex items-center justify-center">
        {/* Logo — layoutId lets Framer Motion animate it into Home position */}
        <motion.div layoutId="telox-logo">
          <Logo3D size={55} reflect={false} rotationDuration={20} />
        </motion.div>

        {/* Progress ring — fades out when phase === 'done' */}
        <AnimatePresence>
          {phase === "spinning" && (
            <motion.svg
              key="ring"
              className="absolute pointer-events-none"
              width="110"
              height="110"
              viewBox="0 0 110 110"
              exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeOut" } }}
            >
              {/* dim track */}
              <circle
                cx="55" cy="55" r={RING_R}
                fill="none"
                stroke="rgba(255,255,255,0.07)"
                strokeWidth="1"
              />
              {/* animated progress arc */}
              <motion.circle
                cx="55" cy="55" r={RING_R}
                fill="none"
                stroke="rgba(255,255,255,0.75)"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeDasharray={CIRCUMFERENCE}
                initial={{ strokeDashoffset: CIRCUMFERENCE, rotate: -90 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 4, ease: "linear" }}
                style={{ transformOrigin: "55px 55px" }}
                transform="rotate(-90 55 55)"
              />
            </motion.svg>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
