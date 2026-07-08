import { motion, AnimatePresence } from "framer-motion";

export function NavOverlay({ navOpen, setView, setNavOpen }: any) {
  return (
    <AnimatePresence>
      {navOpen && (
        <motion.div className="absolute inset-0 z-40 pointer-events-none flex justify-end">
          <div className="w-1/2 h-full flex flex-col justify-center items-end pr-[10vw] pointer-events-auto gap-12">
            {['ABOUT US', 'WORK', 'CONTACT'].map((item, i) => (
              <motion.button
                key={item}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 300, damping: 30 }}
                className="text-white font-serif text-5xl md:text-6xl tracking-[0.15em] hover:text-blue-500 transition-colors"
                onClick={() => {
                  setView(item.split(' ')[0].toLowerCase());
                  setNavOpen(false);
                }}
              >
                {item}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
