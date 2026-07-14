import { useRef, useState, useCallback } from "react";

/**
 * Manages the shader-based page transition lifecycle.
 * Returns `active` (whether the transition canvas is mounted), a progress ref
 * for the shader, and a trigger function that plays the liquid wipe.
 */
export function useTransition() {
  const progressRef = useRef(0);
  const [active, setActive] = useState(false);

  const trigger = useCallback((onComplete?: () => void) => {
    setActive(true);
    progressRef.current = 0;

    const start = performance.now();
    const duration = 1200;

    const animate = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / duration, 1);
      // Ease in-out cubic
      const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      progressRef.current = eased;

      if (t < 1) {
        requestAnimationFrame(animate);
      } else {
        onComplete?.();
        setTimeout(() => setActive(false), 100);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  return { active, progressRef, trigger };
}
