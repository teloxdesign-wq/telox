import { create } from "zustand";

export type Phase = "loading" | "home";
export type View = "home" | "about" | "work" | "contact";

interface TeloxStore {
  phase: Phase;
  view: View;
  navOpen: boolean;
  setPhase: (p: Phase) => void;
  setView: (v: View) => void;
  setNavOpen: (v: boolean) => void;
  toggleNav: () => void;
}

export const useTeloxStore = create<TeloxStore>((set) => ({
  phase: "loading",
  view: "home",
  navOpen: false,
  setPhase: (phase) => set({ phase }),
  setView: (view) => set({ view }),
  setNavOpen: (navOpen) => set({ navOpen }),
  toggleNav: () => set((s) => ({ navOpen: !s.navOpen })),
}));
