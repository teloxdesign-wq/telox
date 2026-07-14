import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { CTASection } from "@/components/sections/CTASection";
import { Check } from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We dig deep into your business, users, and goals to define a clear strategy.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Wireframes, prototypes, and design systems — validated before a line of code.",
  },
  {
    step: "03",
    title: "Develop",
    description:
      "Production-grade engineering with type safety, testing, and CI/CD from day one.",
  },
  {
    step: "04",
    title: "Deploy & Iterate",
    description:
      "We ship, monitor, and optimize. Performance budgets and analytics keep us honest.",
  },
];

export function ServicesPage() {
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
              Services
            </p>
            <h1 className="font-sans text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
              Everything you need to ship
            </h1>
            <p className="text-lg text-white/60 leading-relaxed">
              From first wireframe to production deploy, we cover the full
              spectrum of digital product development. No handoffs, no
              silos — one team, end to end.
            </p>
          </motion.div>
        </div>
      </section>

      <ServicesSection detailed />

      <section className="py-20 md:py-28 bg-white/[0.01]" aria-labelledby="process-heading">
        <div className="mx-auto px-6 md:px-12 max-w-7xl">
          <div className="max-w-2xl mb-12 md:mb-16">
            <p className="text-blue-500 text-sm font-semibold uppercase tracking-wider mb-3">
              How we work
            </p>
            <h2
              id="process-heading"
              className="font-sans text-3xl md:text-5xl font-bold tracking-tight text-white"
            >
              A process built for outcomes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
              >
                <span className="text-blue-500/40 text-sm font-mono font-bold mb-3 block">
                  {s.step}
                </span>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {s.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {s.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {[
              "Fixed-scope or retainer",
              "Weekly demos",
              "Code ownership",
              "30-day post-launch support",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm text-white/60"
              >
                <Check size={16} className="text-blue-500" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
