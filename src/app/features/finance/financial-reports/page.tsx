"use client";

import dynamic from "next/dynamic";

const HeroSection = dynamic(
  () =>
    import("@/components/financial-reports/HeroSection").then(
      (mod) => mod.default,
    ),
  { ssr: false },
);
const IntroductionSection = dynamic(
  () =>
    import("@/components/financial-reports/IntroductionSection").then(
      (mod) => mod.default,
    ),
  { ssr: false },
);
const FeatureCardsSection = dynamic(
  () =>
    import("@/components/financial-reports/FeatureCardsSection").then(
      (mod) => mod.default,
    ),
  { ssr: false },
);
const AlternatingSections = dynamic(
  () =>
    import("@/components/financial-reports/AlternatingSections").then(
      (mod) => mod.default,
    ),
  { ssr: false },
);
const CTASection = dynamic(
  () =>
    import("@/components/financial-reports/CTASection").then(
      (mod) => mod.default,
    ),
  { ssr: false },
);

export default function FinancialReportsPage() {
  return (
    <div className="bg-background min-h-screen">
      <HeroSection />
      <IntroductionSection />
      <FeatureCardsSection />
      <AlternatingSections />
      <CTASection />
    </div>
  );
}
