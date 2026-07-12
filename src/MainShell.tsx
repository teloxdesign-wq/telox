import { AnimatePresence } from "framer-motion";
import { useTeloxStore } from "./store";
import { TeloxCanvas } from "./components/TeloxCanvas";
import { TopBar } from "./components/TopBar";
import { Loader } from "./pages/Loader";
import { Home } from "./pages/Home";
import { NavOverlay } from "./pages/NavOverlay";
import { About } from "./pages/About";
import { Work } from "./pages/Work";
import { Contact } from "./pages/Contact";
import { Logo3D } from "./components/Logo3D";
import { motion } from "framer-motion";

export function MainShell() {
  const phase = useTeloxStore((s) => s.phase);
  const view = useTeloxStore((s) => s.view);
  const navOpen = useTeloxStore((s) => s.navOpen);
  const setView = useTeloxStore((s) => s.setView);
  const setNavOpen = useTeloxStore((s) => s.setNavOpen);
  const setPhase = useTeloxStore((s) => s.setPhase);

  const isLanding = phase === "loading" || view === "home";

  return (
    <div className="w-full h-[100dvh] bg-black text-white overflow-hidden relative font-sans selection:bg-[#2563eb]/30">

      {/* Persistent Three.js canvas — visible during loader and home */}
      <AnimatePresence>
        {isLanding && <TeloxCanvas key="r3f-canvas" />}
      </AnimatePresence>

      {/* Loader ring overlay */}
      <AnimatePresence>
        {phase === "loading" && <Loader key="loader" />}
      </AnimatePresence>

      {/* Top bar — hidden during loading phase */}
      <AnimatePresence>
        {phase === "home" && view !== "home" && (
          <TopBar
            key="topbar"
            view={view}
            setView={setView}
            navOpen={navOpen}
            setNavOpen={setNavOpen}
            setPhase={setPhase}
          />
        )}
      </AnimatePresence>

      {/* Page content — home is transparent (canvas shows through) */}
      <AnimatePresence mode="wait">
        {phase === "home" && view === "home" && (
          <Home key="home">
            {navOpen ? (
              <NavOverlay
                navOpen={navOpen}
                setView={(v: string) => { setView(v as any); setNavOpen(false); }}
                setNavOpen={setNavOpen}
              />
            ) : (
              <motion.div
                className="absolute inset-0 z-10 cursor-pointer"
                onClick={() => setNavOpen(true)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            )}
          </Home>
        )}
        {view === "about" && phase === "home" && <About key="about" />}
        {view === "work" && phase === "home" && <Work key="work" setView={setView} />}
        {view === "contact" && phase === "home" && <Contact key="contact" />}
      </AnimatePresence>
    </div>
  );
} 
