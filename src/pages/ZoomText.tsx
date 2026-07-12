import { motion } from "framer-motion";

export function ZoomText({ text }: { text: string }) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 1 }}
      animate={{ scale: [0.8, 1, 1, 20], opacity: [0, 1, 1, 0] }}
      transition={{ duration: 1.6, times: [0, 0.2, 0.5, 1], ease: "easeInOut" }}
      className="absolute inset-0 flex items-center justify-center pointer-events-none z-30"
    >
      <h1 className="font-serif text-4xl md:text-6xl tracking-[0.15em] text-white whitespace-nowrap">
        {text}
      </h1>
    </motion.div>
  );
}
