"use client";

import dynamic from "next/dynamic";

const HeroSection = dynamic(
  () => import("@/components/offers-discounts/HeroSection"),
  { ssr: false },
);
const IntroductionSection = dynamic(
  () => import("@/components/offers-discounts/IntroductionSection"),
  { ssr: false },
);
const FeatureCardsSection = dynamic(
  () => import("@/components/offers-discounts/FeatureCardsSection"),
  { ssr: false },
);
const AlternatingSections = dynamic(
  () => import("@/components/offers-discounts/AlternatingSections"),
  { ssr: false },
);
const CTASection = dynamic(
  () => import("@/components/offers-discounts/CTASection"),
  { ssr: false },
);

export default function OffersDiscountsPage() {
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
