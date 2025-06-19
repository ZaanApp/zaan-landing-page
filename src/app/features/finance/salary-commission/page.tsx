"use client";

import dynamic from "next/dynamic";

const HeroSection = dynamic(
  () => import("@/components/salary-commission/HeroSection"),
  { ssr: false },
);
const IntroductionSection = dynamic(
  () => import("@/components/salary-commission/IntroductionSection"),
  { ssr: false },
);
const FeatureCardsSection = dynamic(
  () => import("@/components/salary-commission/FeatureCardsSection"),
  { ssr: false },
);
const GradientFeatureCards = dynamic(
  () => import("@/components/salary-commission/GradientFeatureCards"),
  { ssr: false },
);
const AlternatingSections = dynamic(
  () => import("@/components/salary-commission/AlternatingSections"),
  { ssr: false },
);
const CTASection = dynamic(
  () => import("@/components/salary-commission/CTASection"),
  { ssr: false },
);

export default function SalaryCommissionPage() {
  return (
    <div className="bg-background min-h-screen">
      <HeroSection />
      <IntroductionSection />
      <FeatureCardsSection />
      <GradientFeatureCards />
      <AlternatingSections />
      <CTASection />
    </div>
  );
}
