import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { TopBar } from "./components/TopBar";
import { Loader } from "./pages/Loader";
import { Home } from "./pages/Home";
import { NavOverlay } from "./pages/NavOverlay";
import { About } from "./pages/About";
import { Work } from "./pages/Work";
import { Contact } from "./pages/Contact";

export function MainShell() {
  const [view, setView] = useState('loader');
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="w-full h-[100dvh] bg-black text-white overflow-hidden relative font-sans selection:bg-[#2563eb]/30">
      <AnimatePresence>
        {view === 'loader' && <Loader key="loader" onComplete={() => setView('home')} />}
      </AnimatePresence>

      {view !== 'loader' && (
        <TopBar view={view} setView={setView} navOpen={navOpen} setNavOpen={setNavOpen} />
      )}

      <AnimatePresence mode="wait">
        {view === 'home' && <Home key="home" navOpen={navOpen} setNavOpen={setNavOpen} />}
        {view === 'about' && <About key="about" />}
        {view === 'work' && <Work key="work" setView={setView} />}
        {view === 'contact' && <Contact key="contact" />}
      </AnimatePresence>

      {view === 'home' && (
        <NavOverlay navOpen={navOpen} setView={setView} setNavOpen={setNavOpen} />
      )}
    </div>
  );
}
