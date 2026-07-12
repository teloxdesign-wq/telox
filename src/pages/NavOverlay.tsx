import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NavOverlayProps {
  navOpen: boolean;
  setView: (v: string) => void;
  setNavOpen: (v: boolean) => void;
}

export function NavOverlay({ navOpen, setView, setNavOpen }: NavOverlayProps) {
  const navLinks = [
    { name: "Home", view: "home" },
    { name: "Projects", view: "work" }, // Renamed from Work to Projects
    { name: "Contact", view: "contact" },
  ];

  return (
    <motion.div
      key="nav-overlay"
      className={cn(
        "absolute inset-0 z-10 flex items-center justify-center pointer-events-none opacity-0",
        navOpen && "pointer-events-auto opacity-100"
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: navOpen ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      onClick={() => setNavOpen(false)} // Close nav when clicking outside links
    >
      <motion.div
        className="flex flex-row gap-12 text-white font-light text-2xl"
        initial={{ y: 20, opacity: 0 }}
        animate={{
          y: navOpen ? 0 : 20,
          opacity: navOpen ? 1 : 0,
          transition: { duration: 0.3, ease: "easeInOut", delay: navOpen ? 0.1 : 0 },
        }}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the nav links container
      >
        {navLinks.map((link) => (
          <motion.button
            key={link.view}
            className="text-4xl font-extralight opacity-80 hover:opacity-100 transition-opacity tracking-tight uppercase"
            onClick={() => setView(link.view)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {link.name}
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  );
} 
