import { AnimatePresence, motion } from "framer-motion";
import { useTeloxStore } from "./store";
import { useSmoothScroll } from "./hooks/use-smooth-scroll";
import { useTransition } from "./hooks/use-transition";
import { ShaderBackground } from "./components/ShaderBackground";
import { HeroScene } from "./components/HeroScene";
import { CustomCursor } from "./components/CustomCursor";
import { PageTransition } from "./components/PageTransition";
import { BrandLogo } from "./components/BrandLogo";
import { TopBar } from "./components/TopBar";
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
  const setView = useTeloxStore((s) => s.setView);
  const setNavOpen = useTeloxStore((s) => s.setNavOpen);

  const { active: transitionActive, progressRef, trigger } = useTransition();

  // Enable Lenis smooth scroll only on home view (sub-pages are fixed-height)
  useSmoothScroll(phase === "home" && view === "home");

  const showCanvas = phase === "loading" || (phase === "home" && view === "home");

  const handleNavigate = (v: typeof view) => {
    if (v === view) {
      setNavOpen(false);
      return;
    }
    trigger(() => {
      setView(v);
      setNavOpen(false);
    });
  };

  return (
    <div className="w-full h-[100dvh] bg-black text-white overflow-hidden relative font-sans selection:bg-[#2563eb]/30">
      {/* Atmospheric shader background — always present */}
      <ShaderBackground />

      {/* Custom physics-based cursor */}
      <CustomCursor />

      {/* Shader-based page transition overlay */}
      <PageTransition active={transitionActive} progressRef={progressRef} />

      {/* Hero 3D scene — mounted during loader and home view */}
      {showCanvas && phase === "home" && <HeroScene />}

      <AnimatePresence>
        {phase === "loading" && <Loader key="loader" />}
      </AnimatePresence>

      {/* Global brand logo */}
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
          <TopBar key="topbar" view={view} setView={handleNavigate} />
        )}
      </AnimatePresence>

      {/* Page content */}
      <AnimatePresence mode="wait">
        {phase === "home" && view === "home" && (
          <Home key="home">
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
          <Work key="work" setView={handleNavigate} />
        )}
        {view === "contact" && phase === "home" && <Contact key="contact" />}
      </AnimatePresence>

      {/* Navigation overlay */}
      <AnimatePresence>
        {navOpen && phase === "home" && (
          <NavOverlay
            key="nav-overlay"
            setView={handleNavigate}
            setNavOpen={setNavOpen}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
