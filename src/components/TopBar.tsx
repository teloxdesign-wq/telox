import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Logo3D } from "./Logo3D";
import { View } from "@/store";

interface TopBarProps {
  view: View;
  setView: (v: View) => void;
  navOpen: boolean;
  setNavOpen: (v: boolean) => void;
  setPhase: (p: string) => void; // Added setPhase prop
}

export function TopBar({ view, setView, navOpen, setNavOpen, setPhase }: TopBarProps) {
  const navLinks = [
    { name: "Home", view: "home" },
    { name: "Projects", view: "work" },
    { name: "Contact", view: "contact" },
  ];

  return (
    <motion.div
      key="topbar"
      className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-8 py-4 pointer-events-none"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* Logo on the left */}
      <motion.div
        className="pointer-events-auto cursor-pointer flex items-center gap-2"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        onClick={() => { setView("home"); setNavOpen(false); }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Logo3D size={40} rotationDuration={60} reflect={false} />
        <span className="text-white font-sans text-xl font-bold">Telox</span>
      </motion.div>

      {/* Navigation links on the right */}
      <motion.nav
        className="flex gap-8 pointer-events-auto"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      >
        {navLinks.map((link) => (
          <motion.button
            key={link.view}
            className={cn(
              "text-xl font-light opacity-70 hover:opacity-100 transition-opacity",
              view === link.view && "opacity-100 font-normal"
            )}
            onClick={() => setView(link.view)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {link.name}
          </motion.button>
        ))}
      </motion.nav>
    </motion.div>
  );
} 
