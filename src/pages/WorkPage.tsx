import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { CTASection } from "@/components/sections/CTASection";

export function WorkPage() {
  return (
    <Layout>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto px-6 md:px-12 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-blue-500 text-sm font-semibold uppercase tracking-wider mb-3">
              Portfolio
            </p>
            <h1 className="font-sans text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
              Work that moves the needle
            </h1>
            <p className="text-lg text-white/60 leading-relaxed">
              A selection of projects where design and engineering came together
              to deliver measurable business outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      <PortfolioGrid full />

      <CTASection />
    </Layout>
  );
}
