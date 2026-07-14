import { type ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-[100dvh] bg-black text-white">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
