import { AnimatePresence, motion } from "framer-motion";
import { useTeloxStore } from "./store";
import { TeloxCanvas } from "./components/TeloxCanvas";
import { BrandLogo } from "./components/BrandLogo";
import { TopBar } from "./components/TopBar";
import { AgencyIdentity } from "./components/AgencyIdentity";
import { Loader } from "./pages/Loader";
import { Home } from "./pages/Home";
import { NavOverlay } from "./pages/NavOverlay";
import { About } from "./pages/About";
import { Work } from "./pages/Work";
import { Contact } from "./pages/Contact";

export function MainShell() {
  const phase = useTeloxStore((s) => s.phase);
  const view = useTeloxStore((s) => s.view);
  const navOpen = useTeloxStore((s) => s.navOpen);
  const activeMode = useTeloxStore((s) => s.activeMode);
  const setView = useTeloxStore((s) => s.setView);
  const setNavOpen = useTeloxStore((s) => s.setNavOpen);
  const setActiveMode = useTeloxStore((s) => s.setActiveMode);

  // Keep canvas mounted during loading, home view, and active mode
  const showCanvas = phase === "loading" || (phase === "home" && view === "home");

  return (
    <div className="w-full h-[100dvh] bg-black text-white overflow-hidden relative font-sans selection:bg-[#2563eb]/30">
      {showCanvas && <TeloxCanvas />}

      <AnimatePresence>{phase === "loading" && <Loader key="loader" />}</AnimatePresence>

      {/* Global brand logo — top-left, present on every page once home is reached */}
      <AnimatePresence>
        {phase === "home" && (
          <div key="brand" className="absolute top-0 left-0 z-40 px-8 py-4">
            <BrandLogo />
          </div>
        )}
      </AnimatePresence>

      {/* Top-right nav links — visible on sub-pages */}
      <AnimatePresence>
        {phase === "home" && view !== "home" && (
          <TopBar key="topbar" view={view} setView={setView} />
        )}
      </AnimatePresence>

      {/* Interactive hint on home screen */}
      <AnimatePresence>
        {phase === "home" && view === "home" && !navOpen && !activeMode && (
          <motion.div
            key="hint"
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <span className="text-[11px] font-sans uppercase tracking-[0.3em] text-white/30">
              Click the object to explore
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Agency identity panel — fades in on right when activeMode is on */}
      <AgencyIdentity />

      {/* Page content — home is transparent so the canvas shows through */}
      <AnimatePresence mode="wait">
        {phase === "home" && view === "home" && (
          <Home key="home">
            {!navOpen && !activeMode && (
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

      {/* Navigation overlay — reverse-dissolve animation */}
      <AnimatePresence>
        {navOpen && phase === "home" && (
          <NavOverlay
            key="nav-overlay"
            setView={(v) => {
              setView(v);
              setNavOpen(false);
              setActiveMode(false);
            }}
            setNavOpen={setNavOpen}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
