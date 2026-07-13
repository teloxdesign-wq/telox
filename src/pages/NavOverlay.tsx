import { motion } from "framer-motion";
import { View } from "@/store";

interface NavOverlayProps {
  setView: (v: View) => void;
  setNavOpen: (v: boolean) => void;
}

const navLinks = [
  { name: "About Us", view: "about" as View },
  { name: "Projects", view: "work" as View },
  { name: "Contact", view: "contact" as View },
];

export function NavOverlay({ setView, setNavOpen }: NavOverlayProps) {
  return (
    <motion.div
      key="nav-overlay"
      className="absolute inset-0 z-10 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      onClick={() => setNavOpen(false)}
    >
      {/* Soft backdrop that coexists with the 3D logo (no full opaque fill) */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

      <motion.div
        className="relative flex flex-col items-center gap-8"
        onClick={(e) => e.stopPropagation()}
      >
        {navLinks.map((link, i) => (
          <motion.button
            key={link.view}
            className="text-5xl md:text-6xl font-extralight text-white tracking-tight uppercase"
            onClick={() => {
              setView(link.view);
              setNavOpen(false);
            }}
            /* Reverse dissolve: starts diffuse + scaled + blurred, resolves
               into a crisp, settled state. Staggered per link. */
            initial={{
              opacity: 0,
              scale: 1.18,
              filter: "blur(18px)",
              y: -8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
              y: 0,
              transition: {
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.08 * i + 0.05,
              },
            }}
            exit={{
              opacity: 0,
              scale: 1.18,
              filter: "blur(18px)",
              y: -8,
              transition: {
                duration: 0.35,
                ease: [0.4, 0, 1, 1],
                delay: 0.04 * i,
              },
            }}
            whileHover={{ scale: 1.06, opacity: 1 }}
            whileTap={{ scale: 0.96 }}
          >
            {link.name}
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  );
}
