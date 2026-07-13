import { AnimatePresence } from "framer-motion";
import { useTeloxStore } from "./store";
import { TeloxCanvas } from "./components/TeloxCanvas";
import { BrandLogo } from "./components/BrandLogo";
import { TopBar } from "./components/TopBar";
import { Loader } from "./pages/Loader";
import { Home } from "./pages/Home";
import { NavOverlay } from "./pages/NavOverlay";
import { About } from "./pages/About";
import { Work } from "./pages/Work";
import { Contact } from "./pages/Contact";
import { motion } from "framer-motion";

export function MainShell() {
  const phase = useTeloxStore((s) => s.phase);
  const view = useTeloxStore((s) => s.view);
  const navOpen = useTeloxStore((s) => s.navOpen);
  const setView = useTeloxStore((s) => s.setView);
  const setNavOpen = useTeloxStore((s) => s.setNavOpen);

  const showCanvas = phase === "loading" || (phase === "home" && view === "home");

  return (
    <div className="w-full h-[100dvh] bg-black text-white overflow-hidden relative font-sans selection:bg-[#2563eb]/30">
      {/* Persistent Three.js canvas — visible during loader and home */}
      <AnimatePresence>{showCanvas && <TeloxCanvas key="r3f-canvas" />}</AnimatePresence>

      {/* Loader ring overlay */}
      <AnimatePresence>{phase === "loading" && <Loader key="loader" />}</AnimatePresence>

      {/* Global brand logo — top-left, present on every page once home is reached.
          Rendered at the shell level so it persists across view transitions. */}
      <AnimatePresence>
        {phase === "home" && (
          <div key="brand" className="absolute top-0 left-0 z-40 px-8 py-4">
            <BrandLogo />
          </div>
        )}
      </AnimatePresence>

      {/* Top-right nav links — visible on sub-pages (not home, not loading) */}
      <AnimatePresence>
        {phase === "home" && view !== "home" && (
          <TopBar key="topbar" view={view} setView={setView} />
        )}
      </AnimatePresence>

      {/* Page content — home is transparent (canvas shows through) */}
      <AnimatePresence mode="wait">
        {phase === "home" && view === "home" && (
          <Home key="home">
            {/* Click anywhere (when nav closed) opens the reverse-dissolve nav */}
            {!navOpen && (
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
        {view === "work" && phase === "home" && (
          <Work key="work" setView={setView} />
        )}
        {view === "contact" && phase === "home" && <Contact key="contact" />}
      </AnimatePresence>

      {/* Navigation overlay — reverse-dissolve animation.
          Rendered at shell level so it coexists with the 3D logo rather than
          replacing page content; the soft backdrop dims the logo gracefully. */}
      <AnimatePresence>
        {navOpen && phase === "home" && (
          <NavOverlay
            key="nav-overlay"
            setView={(v) => {
              setView(v);
              setNavOpen(false);
            }}
            setNavOpen={setNavOpen}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
