import { motion } from "framer-motion";
import { ZoomText } from "./ZoomText";

export function About() {
  return (
    <motion.div
      className="absolute inset-0 bg-black text-white flex flex-col items-center justify-center z-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ZoomText text="ABOUT US" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="relative z-10 max-w-2xl px-6 flex flex-col items-center mt-12"
      >
        <h2 className="font-serif text-3xl md:text-5xl tracking-[0.1em] text-center mb-8 leading-tight">
          WE BUILD DIGITAL<br/>EXPERIENCES THAT ENDURE
        </h2>
        <p className="text-[14px] font-light text-center text-white/70 max-w-[480px] leading-relaxed mb-20">
          TELOX is an elite digital agency crafting products for brands that refuse to be ordinary. We blend meticulous engineering with stark, uncompromising design to create lasting digital impact.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.8 }}
          className="group relative p-[1px] rounded-[16px] bg-gradient-to-b from-white/10 to-transparent overflow-hidden"
        >
          <div className="absolute inset-0 bg-[#1e4fc7]/0 group-hover:bg-[#1e4fc7]/10 transition-colors duration-700 blur-xl" />
          <div className="relative bg-white/[0.04] backdrop-blur-[20px] rounded-[15px] px-8 py-6 flex items-center gap-6 border border-white/[0.08]">
            <div className="w-[60px] h-[60px] rounded-full bg-white/10 flex-shrink-0 flex items-center justify-center text-xl font-serif">EV</div>
            <div>
              <h3 className="font-serif text-2xl tracking-wide mb-1">Elias Vane</h3>
              <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-white/50 mb-3">Founder & Director</p>
              <p className="text-sm font-serif italic text-white/70">"Precision is the ultimate luxury."</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
