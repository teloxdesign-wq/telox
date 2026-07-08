import { motion } from "framer-motion";
import { ZoomText } from "./ZoomText";

export function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 bg-black text-white flex flex-col items-center justify-center z-20 px-6"
    >
      <ZoomText text="CONTACT" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="relative z-10 w-full max-w-2xl flex flex-col items-center mt-12"
      >
        <h2 className="font-serif text-3xl md:text-5xl tracking-[0.05em] text-center mb-6 leading-tight">
          LET'S CREATE SOMETHING<br/>REMARKABLE
        </h2>
        <a href="mailto:hello@telox.studio" className="font-mono text-[16px] text-white/60 hover:text-white hover:underline transition-colors mb-12">
          hello@telox.studio
        </a>

        <div className="flex flex-col gap-4 w-full max-w-md bg-white/[0.02] p-8 rounded-[16px] border border-white/[0.05] backdrop-blur-md">
          <input 
            className="bg-white/[0.03] border border-white/10 rounded-[4px] px-4 py-3 text-sm outline-none focus:border-[#2563eb]/50 transition-colors placeholder:text-white/30" 
            placeholder="Name" 
          />
          <input 
            className="bg-white/[0.03] border border-white/10 rounded-[4px] px-4 py-3 text-sm outline-none focus:border-[#2563eb]/50 transition-colors placeholder:text-white/30" 
            placeholder="Email" 
          />
          <textarea 
            className="bg-white/[0.03] border border-white/10 rounded-[4px] px-4 py-3 text-sm outline-none focus:border-[#2563eb]/50 transition-colors placeholder:text-white/30 min-h-[120px] resize-none" 
            placeholder="Message" 
          />
          <button className="border border-white/20 text-[10px] font-sans uppercase tracking-[0.2em] py-4 mt-2 rounded-[4px] hover:bg-[#1a3a6e]/40 hover:border-[#2563eb]/50 transition-all duration-500">
            Send Message
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
