import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTeloxStore } from "@/store";

export function Loader() {
  const [barProgress, setBarProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const setPhase = useTeloxStore((s) => s.setPhase);
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const interval = setInterval(() => {
      setBarProgress((prev) => {
        if (prev < 100) return prev + 1;
        clearInterval(interval);
        return 100;
      });
    }, 40); // 100 steps * 40ms = 4000ms = 4 seconds

    const t1 = setTimeout(() => setPhase("home"), 4000);
    const t2 = setTimeout(() => setVisible(false), 4600); // 4s + 0.6s fade out

    return () => { clearInterval(interval); clearTimeout(t1); clearTimeout(t2); };
  }, [setPhase]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader-overlay"
          className="fixed inset-0 flex items-center justify-center pointer-events-none"
          style={{ zIndex: 20, backgroundColor: "#000000" }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
        >
          <motion.div
            key="loading-bar"
            className="w-64 h-2 rounded-full overflow-hidden"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            <motion.div
              className="h-full bg-white rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${barProgress}%` }}
              transition={{ duration: 0.04, ease: "linear" }} // Corresponds to 40ms per step
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
