import { motion } from "framer-motion";

export function Contact() {
  return (
    <motion.div
      className="absolute inset-0 z-10 flex items-center justify-center p-8 bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeOut" } }}
      transition={{ duration: 0.7, ease: "easeIn" }}
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
        className="text-5xl font-extralight text-white opacity-80 max-w-4xl text-center"
      >
        Contact us to bring your vision to life. Email: info@telox.agency
      </motion.div>
    </motion.div>
  );
} 
