import HeroSection from "@/components/home/hero-section";
import { ValueProposition } from "@/components/home/value-proposition";
import { GradientFeatureCards } from "@/components/home/gradient-feature-cards";
import { SuccessPartners } from "@/components/home/success-partners";
import { TestimonialSection } from "@/components/home/testimonial-section";
import { CTASection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <HeroSection />
      <ValueProposition />
      <GradientFeatureCards />
      <SuccessPartners />
      <TestimonialSection />
      <CTASection />
    </div>
  );
}
