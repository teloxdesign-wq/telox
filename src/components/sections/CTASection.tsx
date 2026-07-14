import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 md:py-28" aria-labelledby="cta-heading">
      <div className="mx-auto px-6 md:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/10 via-black to-black p-10 md:p-16 text-center"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(37,99,235,0.15) 0%, transparent 70%)",
            }}
          />
          <div className="relative">
            <h2
              id="cta-heading"
              className="font-sans text-3xl md:text-5xl font-bold tracking-tight text-white max-w-2xl mx-auto"
            >
              Ready to build something that converts?
            </h2>
            <p className="mt-4 text-white/60 text-lg max-w-xl mx-auto">
              Let's talk about your project. Free consultation, no obligation.
            </p>
            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center justify-center gap-2 min-h-12 px-8 rounded-full bg-white text-black font-semibold text-base hover:bg-blue-500 hover:text-white transition-colors duration-200"
            >
              Book a Consultation
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
