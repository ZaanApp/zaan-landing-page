"use client";

import dynamic from "next/dynamic";

const HeroSection = dynamic(
  () =>
    import("@/components/tax-insurance/HeroSection").then((mod) => mod.default),
  { ssr: false },
);
const IntroductionSection = dynamic(
  () =>
    import("@/components/tax-insurance/IntroductionSection").then(
      (mod) => mod.default,
    ),
  { ssr: false },
);
const FeatureCardsSection = dynamic(
  () =>
    import("@/components/tax-insurance/FeatureCardsSection").then(
      (mod) => mod.default,
    ),
  { ssr: false },
);
const AlternatingSections = dynamic(
  () =>
    import("@/components/tax-insurance/AlternatingSections").then(
      (mod) => mod.default,
    ),
  { ssr: false },
);
const CTASection = dynamic(
  () =>
    import("@/components/tax-insurance/CTASection").then((mod) => mod.default),
  { ssr: false },
);

export default function TaxInsurancePage() {
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
