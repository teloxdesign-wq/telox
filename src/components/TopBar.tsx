import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { View } from "@/store";

interface TopBarProps {
  view: View;
  setView: (v: View) => void;
}

const navLinks = [
  { name: "About Us", view: "about" as View },
  { name: "Projects", view: "work" as View },
  { name: "Contact", view: "contact" as View },
];

export function TopBar({ view, setView }: TopBarProps) {
  return (
    <motion.nav
      key="topbar-nav"
      className="absolute top-0 right-0 z-30 flex items-center gap-8 px-8 py-4 pointer-events-auto"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {navLinks.map((link) => (
        <motion.button
          key={link.view}
          className={cn(
            "text-lg font-light opacity-70 hover:opacity-100 transition-opacity",
            view === link.view && "opacity-100 font-normal"
          )}
          onClick={() => setView(link.view)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
        >
          {link.name}
        </motion.button>
      ))}
    </motion.nav>
  );
}
