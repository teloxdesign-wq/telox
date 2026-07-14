import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";

export function HomePage() {
  return (
    <Layout>
      <Hero />
      <TrustStrip />
      <ServicesSection />
      <PortfolioGrid />
      <Testimonials />
      <CTASection />
    </Layout>
  );
}
