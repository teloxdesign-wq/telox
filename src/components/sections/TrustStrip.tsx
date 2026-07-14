import { motion } from "framer-motion";
import { clients } from "@/lib/content";

export function TrustStrip() {
  return (
    <section
      className="py-12 border-y border-white/5"
      aria-label="Trusted by leading brands"
    >
      <div className="mx-auto px-6 md:px-12 max-w-7xl">
        <p className="text-center text-white/40 text-sm font-medium uppercase tracking-wider mb-8">
          Trusted by industry leaders
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {clients.map((client, i) => (
            <motion.span
              key={client.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="text-white/30 text-xl md:text-2xl font-bold tracking-tight hover:text-white/60 transition-colors"
            >
              {client.name}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
