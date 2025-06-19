"use client";

import dynamic from "next/dynamic";

const HeroSection = dynamic(
  () =>
    import("@/components/payment-vouchers/HeroSection").then(
      (mod) => mod.default,
    ),
  { ssr: false },
);
const IntroductionSection = dynamic(
  () =>
    import("@/components/payment-vouchers/IntroductionSection").then(
      (mod) => mod.default,
    ),
  { ssr: false },
);
const FeatureCardsSection = dynamic(
  () =>
    import("@/components/payment-vouchers/FeatureCardsSection").then(
      (mod) => mod.default,
    ),
  { ssr: false },
);
const AlternatingSections = dynamic(
  () =>
    import("@/components/payment-vouchers/AlternatingSections").then(
      (mod) => mod.default,
    ),
  { ssr: false },
);
const CTASection = dynamic(
  () =>
    import("@/components/payment-vouchers/CTASection").then(
      (mod) => mod.default,
    ),
  { ssr: false },
);

export default function PaymentVouchersPage() {
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
