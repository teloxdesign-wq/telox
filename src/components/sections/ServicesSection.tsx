import { motion } from "framer-motion";
import { Link } from "wouter";
import { Palette, Code, Server, Search, ArrowRight } from "lucide-react";
import { services } from "@/lib/content";

const iconMap: Record<string, typeof Palette> = {
  Palette,
  Code,
  Server,
  Search,
};

type Props = {
  detailed?: boolean;
};

export function ServicesSection({ detailed = false }: Props) {
  return (
    <section
      className="py-20 md:py-28"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto px-6 md:px-12 max-w-7xl">
        <div className="max-w-2xl mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-500 text-sm font-semibold uppercase tracking-wider mb-3"
          >
            What we do
          </motion.p>
          <motion.h2
            id="services-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="font-sans text-3xl md:text-5xl font-bold tracking-tight text-white"
          >
            Services engineered for growth
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Palette;
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors">
                    <Icon className="text-blue-500" size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {service.title}
                    </h3>
                    <p className="text-blue-500/80 text-sm font-medium">
                      {service.tagline}
                    </p>
                  </div>
                </div>

                <p className="text-white/60 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {detailed && (
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-white/70"
                      >
                        <span className="w-1 h-1 rounded-full bg-blue-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}

                {!detailed && (
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1 text-sm text-white/50 hover:text-blue-500 transition-colors"
                  >
                    Learn more
                    <ArrowRight size={14} />
                  </Link>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
