import { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTeloxStore } from "@/store";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { num: "01", title: "Creative Direction", desc: "Conceptual frameworks that define how brands move, feel, and speak in digital space." },
  { num: "02", title: "Immersive Web", desc: "Three-dimensional interfaces and real-time experiences built on WebGL and React Three Fiber." },
  { num: "03", title: "Motion Design", desc: "Choreographed transitions and micro-interactions that give interfaces a sense of life." },
  { num: "04", title: "Brand Systems", desc: "Scalable visual languages — typography, color, form — engineered for consistency across every surface." },
];

export function AgencyIdentity() {
  const activeMode = useTeloxStore((s) => s.activeMode);
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeMode) return;
    const ctx = gsap.context(() => {
      // Blur-in + parallax-up for headline
      if (headlineRef.current) {
        gsap.fromTo(
          headlineRef.current,
          { filter: "blur(24px)", y: 60, opacity: 0 },
          {
            filter: "blur(0px)",
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headlineRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Subtitle with slight delay
      if (subRef.current) {
        gsap.fromTo(
          subRef.current,
          { filter: "blur(18px)", y: 40, opacity: 0 },
          {
            filter: "blur(0px)",
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            delay: 0.3,
            scrollTrigger: {
              trigger: subRef.current,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Parallax-up for services list
      if (servicesRef.current) {
        const items = servicesRef.current.querySelectorAll("[data-service-item]");
        gsap.fromTo(
          items,
          { y: 80, opacity: 0, filter: "blur(12px)" },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: servicesRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Continuous parallax on scroll for the whole container
      if (containerRef.current) {
        gsap.to(containerRef.current, {
          y: -30,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [activeMode]);

  return (
    <AnimatePresence>
      {activeMode && (
        <motion.div
          key="agency-identity"
          ref={containerRef}
          className="absolute top-0 right-0 h-full w-full md:w-[55%] z-30 overflow-y-auto overflow-x-hidden"
          style={{ scrollbarWidth: "none" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="min-h-full flex flex-col justify-center px-6 md:px-16 lg:px-24 py-20">
            {/* Section label */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="text-[11px] font-sans uppercase tracking-[0.35em] text-[#2563eb]">
                Agency Identity
              </span>
            </motion.div>

            {/* Headline — editorial, large-scale */}
            <h1
              ref={headlineRef}
              className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-white mb-8"
              style={{ willChange: "transform, filter, opacity" }}
            >
              We craft digital
              <br />
              experiences that
              <br />
              <span className="italic text-[#6090ff]">feel alive.</span>
            </h1>

            {/* Subtitle */}
            <p
              ref={subRef}
              className="font-sans text-lg md:text-xl font-light text-white/60 max-w-xl mb-20 leading-relaxed"
              style={{ willChange: "transform, filter, opacity" }}
            >
              Telox is a creative technology studio operating at the intersection
              of design, code, and motion. We build immersive interfaces for
              brands that refuse to be ordinary.
            </p>

            {/* Services — editorial list, no boxes or borders */}
            <div ref={servicesRef} className="space-y-12">
              <div className="mb-4">
                <span className="text-[11px] font-sans uppercase tracking-[0.35em] text-white/40">
                  What We Do
                </span>
              </div>
              {services.map((s) => (
                <div
                  key={s.num}
                  data-service-item
                  className="group cursor-default"
                  style={{ willChange: "transform, filter, opacity" }}
                >
                  <div className="flex items-baseline gap-6 md:gap-10">
                    <span className="font-sans text-sm text-white/30 tabular-nums mt-2">
                      {s.num}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-serif text-2xl md:text-4xl text-white mb-3 transition-colors duration-300 group-hover:text-[#6090ff]">
                        {s.title}
                      </h3>
                      <p className="font-sans text-base md:text-lg font-light text-white/50 leading-relaxed max-w-lg">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer note */}
            <div className="mt-24 pt-8">
              <p className="font-sans text-sm font-light text-white/30 tracking-wide">
                Based everywhere — working with clients worldwide.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
