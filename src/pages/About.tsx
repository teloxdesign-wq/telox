import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
        },
        y: 100,
        filter: "blur(30px)",
        opacity: 0,
        ease: "none",
      });

      gsap.from(bodyRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "top 20%",
          scrub: 1,
        },
        y: 60,
        opacity: 0,
        ease: "none",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className="absolute inset-0 z-10 flex flex-col items-center justify-center p-8 bg-black/90"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeOut" } }}
      transition={{ duration: 0.7, ease: "easeIn" }}
    >
      <div
        ref={headingRef}
        className="font-serif text-white/90 text-center leading-[0.9] tracking-tighter mb-12"
        style={{ fontSize: "clamp(3rem, 10vw, 9rem)" }}
      >
        We Are<br />Telox
      </div>
      <div
        ref={bodyRef}
        className="max-w-2xl text-center font-sans text-lg md:text-xl font-light text-white/60 leading-relaxed"
      >
        A creative agency specializing in crafting unique digital experiences
        at the intersection of art, technology, and emotion. We build worlds
        that feel alive.
      </div>
    </motion.div>
  );
}
