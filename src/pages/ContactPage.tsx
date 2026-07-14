import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { ContactForm } from "@/components/sections/ContactForm";
import { Mail, Clock, MapPin } from "lucide-react";

export function ContactPage() {
  return (
    <Layout>
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-blue-500 text-sm font-semibold uppercase tracking-wider mb-3">
                Contact
              </p>
              <h1 className="font-sans text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
                Let's build together
              </h1>
              <p className="text-lg text-white/60 leading-relaxed mb-10">
                Tell us about your project and we'll get back to you within 24
                hours. No sales calls — just a genuine conversation about
                whether we're the right fit.
              </p>

              <div className="space-y-5">
                <ContactInfo
                  icon={<Mail size={18} />}
                  label="Email"
                  value="info@telox.agency"
                />
                <ContactInfo
                  icon={<Clock size={18} />}
                  label="Response time"
                  value="Within 24 hours, Mon–Fri"
                />
                <ContactInfo
                  icon={<MapPin size={18} />}
                  label="Working globally"
                  value="Remote-first, headquartered in Berlin"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function ContactInfo({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 text-blue-500">
        {icon}
      </div>
      <div>
        <p className="text-white/40 text-xs font-medium uppercase tracking-wider mb-0.5">
          {label}
        </p>
        <p className="text-white text-sm">{value}</p>
      </div>
    </div>
  );
}
