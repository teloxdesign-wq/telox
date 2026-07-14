import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLDivElement>(null);

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
        y: 80,
        filter: "blur(25px)",
        opacity: 0,
        ease: "none",
      });

      gsap.from(emailRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "top 20%",
          scrub: 1,
        },
        y: 40,
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
        className="font-serif text-white/90 text-center leading-[0.9] tracking-tighter mb-8"
        style={{ fontSize: "clamp(3rem, 10vw, 9rem)" }}
      >
        Let's<br />Create
      </div>
      <div ref={emailRef} className="flex flex-col items-center gap-6">
        <a
          href="mailto:info@telox.agency"
          data-cursor="link"
          className="font-sans text-lg md:text-2xl font-light text-white/70 hover:text-white transition-colors tracking-wide"
        >
          info@telox.agency
        </a>
        <div className="flex gap-6">
          {["Instagram", "Behance", "Twitter"].map((social) => (
            <a
              key={social}
              href="#"
              data-cursor="link"
              className="text-[10px] uppercase tracking-[0.3em] text-white/40 hover:text-white/80 transition-colors"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
