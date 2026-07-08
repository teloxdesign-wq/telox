import { motion } from "framer-motion";

export function TopBar({ view, setView, navOpen, setNavOpen }: any) {
  return (
    <div className="fixed top-0 left-0 w-full px-8 py-10 flex justify-between items-center z-50 pointer-events-none">
      {/* Logo Wordmark */}
      <div 
        className="pointer-events-auto cursor-pointer" 
        onClick={() => setView('home')}
      >
        <span className="font-serif text-[14px] tracking-[0.4em] text-white/85 transition-opacity hover:opacity-100">
          TELOX
        </span>
      </div>

      {/* Navigation Trigger / Close */}
      <div 
        className="pointer-events-auto cursor-pointer p-4 -mr-4" 
        onClick={() => {
          if (view === 'home') {
            setNavOpen(!navOpen);
          } else {
            setView('home');
            setNavOpen(false);
          }
        }}
      >
        {(view === 'home' || navOpen) ? (
          <div className="flex flex-col gap-[5px]">
            <motion.div 
              animate={navOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }} 
              className="w-[22px] h-[1.5px] bg-white origin-center transition-colors" 
            />
            <motion.div 
              animate={navOpen ? { opacity: 0 } : { opacity: 1 }} 
              className="w-[22px] h-[1.5px] bg-white transition-colors" 
            />
            <motion.div 
              animate={navOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }} 
              className="w-[22px] h-[1.5px] bg-white origin-center transition-colors" 
            />
          </div>
        ) : (
          <div className="w-[22px] h-[22px] relative flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
            <div className="w-[22px] h-[1.5px] bg-white absolute rotate-45" />
            <div className="w-[22px] h-[1.5px] bg-white absolute -rotate-45" />
          </div>
        )}
      </div>
    </div>
  );
}
