import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useTeloxStore } from "@/store";

const projects = [
  {
    name: "PROJECT MERIDIAN",
    year: "2024",
    cat: "FINTECH",
    image: "/attached_assets/Gemini_Generated_Image_n0dnhyn0dnhyn0dn_1783486341985.png",
  },
  {
    name: "STUDIO VALK",
    year: "2023",
    cat: "COMMERCE",
    image: "/attached_assets/Gemini_Generated_Image_n0dnhyn0dnhyn0dn_1783486341985.png",
  },
  {
    name: "NOIR COLLECTIVE",
    year: "2023",
    cat: "FASHION",
    image: "/attached_assets/Gemini_Generated_Image_n0dnhyn0dnhyn0dn_1783486341985.png",
  },
  {
    name: "PHASE ZERO",
    year: "2022",
    cat: "PLATFORM",
    image: "/attached_assets/Gemini_Generated_Image_n0dnhyn0dnhyn0dn_1783486341985.png",
  },
  {
    name: "ATLAS DARK",
    year: "2022",
    cat: "IMMERSIVE",
    image: "/attached_assets/Gemini_Generated_Image_n0dnhyn0dnhyn0dn_1783486341985.png",
  },
];

export function Work({ setView }: { setView: (view: any) => void }) {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const currentProject = projects[currentProjectIndex];

  const goToNextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const goToPreviousProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <motion.div
      className="absolute inset-0 bg-black z-20 flex flex-col items-center justify-center p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeOut" } }}
      transition={{ duration: 0.7, ease: "easeIn" }}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={currentProject.name + "_image"}
          src={currentProject.image}
          alt={currentProject.name}
          className="max-w-[70vw] max-h-[60vh] object-contain mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.3, ease: "easeOut" } }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentProject.name + "_details"}
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeOut" } }}
          transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
        >
          <h3 className="font-serif text-3xl md:text-5xl text-white mb-3">
            {currentProject.name}
          </h3>
          <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-white/50">
            {currentProject.year} — {currentProject.cat}
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-8 flex gap-8">
        <motion.button
          onClick={goToPreviousProject}
          className="text-white/70 hover:text-white transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowLeft size={24} />
        </motion.button>
        <motion.button
          onClick={goToNextProject}
          className="text-white/70 hover:text-white transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowRight size={24} />
        </motion.button>
      </div>
    </motion.div>
  );
} 
