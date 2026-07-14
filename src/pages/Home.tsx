import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTeloxStore } from "@/store";

gsap.registerPlugin(ScrollTrigger);

export function Home({ children }: { children: React.ReactNode }) {
  const navOpen = useTeloxStore((s) => s.navOpen);
  const containerRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const subTextRef = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Hero text morphs/distorts on scroll — parallax + scale + blur
      gsap.to(heroTextRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
        y: -200,
        scale: 1.3,
        opacity: 0,
        filter: "blur(20px)",
        ease: "none",
      });

      gsap.to(subTextRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "40% top",
          scrub: 1,
        },
        y: -80,
        opacity: 0,
        ease: "none",
      });

      gsap.to(scrollHintRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "10% top",
          scrub: 0.5,
        },
        opacity: 0,
        ease: "none",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <motion.div
      ref={containerRef}
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

      {/* Brutalist-luxury overlapping typography */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <div
          ref={heroTextRef}
          className="font-serif text-white text-center leading-[0.85] tracking-tighter"
          style={{ fontSize: "clamp(4rem, 18vw, 16rem)" }}
        >
          TELOX
        </div>
      </div>

      {/* Subtitle — positioned to overlap with hero text */}
      <div
        ref={subTextRef}
        className="absolute left-1/2 top-[62%] -translate-x-1/2 pointer-events-none"
      >
        <div className="text-center">
          <p className="font-sans text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/40">
            Creative Digital Studio
          </p>
          <p className="font-sans text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/30 mt-2">
            Est. MMXXIV
          </p>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        ref={scrollHintRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none flex flex-col items-center gap-2"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-white/30">
          Scroll
        </span>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent"
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
      </div>

      {children}
    </motion.div>
  );
}
