import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTeloxStore } from "@/store";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: "PROJECT MERIDIAN",
    year: "2024",
    cat: "FINTECH",
    desc: "A reimagined trading platform interface with real-time data visualization and immersive onboarding.",
    image: "/attached_assets/Gemini_Generated_Image_n0dnhyn0dnhyn0dn_1783486341985.png",
  },
  {
    name: "STUDIO VALK",
    year: "2023",
    cat: "COMMERCE",
    desc: "An experimental e-commerce experience with 3D product configurators and shader-driven transitions.",
    image: "/attached_assets/Gemini_Generated_Image_n0dnhyn0dnhyn0dn_1783486341985.png",
  },
  {
    name: "NOIR COLLECTIVE",
    year: "2023",
    cat: "FASHION",
    desc: "Editorial fashion showcase with scroll-driven morphing typography and WebGL atmospheric effects.",
    image: "/attached_assets/Gemini_Generated_Image_n0dnhyn0dnhyn0dn_1783486341985.png",
  },
  {
    name: "PHASE ZERO",
    year: "2022",
    cat: "PLATFORM",
    desc: "A SaaS platform with physics-based micro-interactions and a custom cursor-driven navigation system.",
    image: "/attached_assets/Gemini_Generated_Image_n0dnhyn0dnhyn0dn_1783486341985.png",
  },
  {
    name: "ATLAS DARK",
    year: "2022",
    cat: "IMMERSIVE",
    desc: "An immersive WebGL landing experience with shader-based page transitions and 3D scene integration.",
    image: "/attached_assets/Gemini_Generated_Image_n0dnhyn0dnhyn0dn_1783486341985.png",
  },
];

export function Work({ setView }: { setView: (view: any) => void }) {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const currentProject = projects[currentProjectIndex];

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: 1.5,
        },
        scale: 1.3,
        filter: "blur(40px)",
        opacity: 0,
        ease: "none",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const goToNextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const goToPreviousProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <motion.div
      ref={containerRef}
      className="absolute inset-0 bg-black z-20 flex flex-col items-center justify-center p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeOut" } }}
      transition={{ duration: 0.7, ease: "easeIn" }}
    >
      <div className="absolute top-24 left-8">
        <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/30">
          {String(currentProjectIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
        </span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentProject.name + "_image"}
          ref={imageRef}
          className="relative overflow-hidden"
          style={{ maxWidth: "70vw", maxHeight: "55vh" }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3, ease: "easeOut" } }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={currentProject.image}
            alt={currentProject.name}
            className="max-w-[70vw] max-h-[55vh] object-contain"
            data-cursor="view"
            data-cursor-label="View"
          />
          {/* Overlapping typographic mask */}
          <div className="absolute inset-0 flex items-end justify-center pb-4 pointer-events-none">
            <span
              className="font-serif text-white/10 leading-none tracking-tighter"
              style={{ fontSize: "clamp(3rem, 12vw, 10rem)" }}
            >
              {currentProject.cat}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentProject.name + "_details"}
          className="text-center mt-8 max-w-xl"
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -20, filter: "blur(10px)", transition: { duration: 0.3, ease: "easeOut" } }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className="font-serif text-3xl md:text-5xl text-white mb-3 tracking-tight">
            {currentProject.name}
          </h3>
          <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-white/50 mb-4">
            {currentProject.year} — {currentProject.cat}
          </p>
          <p className="font-sans text-sm md:text-base font-light text-white/50 leading-relaxed">
            {currentProject.desc}
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-8 flex gap-8">
        <motion.button
          onClick={goToPreviousProject}
          className="text-white/70 hover:text-white transition-colors"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.85 }}
          data-cursor="link"
        >
          <ArrowLeft size={24} />
        </motion.button>
        <motion.button
          onClick={goToNextProject}
          className="text-white/70 hover:text-white transition-colors"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.85 }}
          data-cursor="link"
        >
          <ArrowRight size={24} />
        </motion.button>
      </div>
    </motion.div>
  );
}
