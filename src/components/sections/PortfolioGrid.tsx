import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/content";
import { cn } from "@/lib/utils";

type Props = {
  full?: boolean;
};

const sizeClasses: Record<string, string> = {
  sm: "md:col-span-1 md:row-span-1",
  md: "md:col-span-1 md:row-span-1",
  lg: "md:col-span-2 md:row-span-1",
};

export function PortfolioGrid({ full = false }: Props) {
  const items = full ? projects : projects.slice(0, 4);

  return (
    <section className="py-20 md:py-28" aria-labelledby="portfolio-heading">
      <div className="mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-blue-500 text-sm font-semibold uppercase tracking-wider mb-3"
            >
              Selected work
            </motion.p>
            <motion.h2
              id="portfolio-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="font-sans text-3xl md:text-5xl font-bold tracking-tight text-white"
            >
              Case studies that deliver
            </motion.h2>
          </div>
          {!full && (
            <Link
              href="/work"
              className="inline-flex items-center gap-1 text-sm text-white/50 hover:text-blue-500 transition-colors"
            >
              View all projects
              <ArrowUpRight size={16} />
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {items.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]",
                sizeClasses[project.size]
              )}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.name} — ${project.category}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white/90 text-xs font-medium border border-white/10">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-white">
                    {project.name}
                  </h3>
                  <span className="text-white/40 text-sm">{project.year}</span>
                </div>
                <p className="text-white/50 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/60 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
