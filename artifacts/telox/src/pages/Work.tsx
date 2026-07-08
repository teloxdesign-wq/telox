import { motion } from "framer-motion";
import { ZoomText } from "./ZoomText";
import { ArrowRight } from "lucide-react";
import { Logo3D } from "@/components/Logo3D";

const projects = [
  { name: "PROJECT MERIDIAN", year: "2024", cat: "FINTECH", colors: "from-[#0a1628] to-black" },
  { name: "STUDIO VALK", year: "2023", cat: "COMMERCE", colors: "from-[#102447] to-black" },
  { name: "NOIR COLLECTIVE", year: "2023", cat: "FASHION", colors: "from-[#1a3a6e] to-black" },
  { name: "PHASE ZERO", year: "2022", cat: "PLATFORM", colors: "from-[#0d2457] to-black" },
  { name: "ATLAS DARK", year: "2022", cat: "IMMERSIVE", colors: "from-[#112a5c] to-black" },
];

export function Work({ setView }: any) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 bg-black z-20 flex flex-col"
    >
      <ZoomText text="WORK" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="flex-1 w-full flex items-center overflow-x-auto px-[10vw] gap-[5vw]"
      >
        {projects.map((p, i) => (
          <div key={i} className="relative group shrink-0 w-[70vw] md:w-[50vw] h-[60vh] rounded-[2px] overflow-hidden cursor-pointer transition-transform duration-700 hover:scale-[1.03]">
            <div className={`absolute inset-0 bg-gradient-to-br ${p.colors} opacity-80 group-hover:opacity-100 transition-opacity duration-700`} />
            <div className="absolute inset-0 border border-white/5 group-hover:border-[#2563eb]/40 transition-colors duration-700 z-10" />

            <div className="absolute bottom-8 left-8 z-20">
              <h3 className="font-serif text-3xl md:text-5xl text-white mb-3">{p.name}</h3>
              <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-white/50">{p.year} — {p.cat}</p>
            </div>
            
            <div className="absolute top-8 right-8 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center gap-2 text-[#2563eb]">
              <span className="text-[10px] font-sans uppercase tracking-[0.1em]">View</span>
              <ArrowRight size={14} />
            </div>
          </div>
        ))}

        <div onClick={() => setView('contact')} className="shrink-0 w-[40vw] md:w-[30vw] h-[60vh] flex flex-col items-center justify-center border border-white/5 bg-white/[0.02] backdrop-blur-md cursor-pointer hover:bg-white/[0.04] transition-colors rounded-[2px]">
          <Logo3D size={45} className="mb-10 opacity-50 pointer-events-none" />
          <h3 className="font-serif text-xl md:text-2xl mb-6">START A PROJECT</h3>
          <div className="h-[1px] w-12 bg-[#2563eb]" />
        </div>
        
        {/* spacer to allow full scroll to end */}
        <div className="w-[5vw] shrink-0" />
      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.0 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[200px] h-[1px] bg-white/10"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-[#2563eb] absolute top-1/2 -translate-y-1/2 left-0 shadow-[0_0_10px_rgba(37,99,235,1)] animate-[pulse_2s_ease-in-out_Infinity]" />
      </motion.div>
    </motion.div>
  );
}
