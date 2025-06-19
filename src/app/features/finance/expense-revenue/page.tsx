import { HeroSection } from "@/components/expense-revenue/HeroSection";
import { IntroductionSection } from "@/components/expense-revenue/IntroductionSection";
import { FeatureCardsSection } from "@/components/expense-revenue/FeatureCardsSection";
import { AlternatingSections } from "@/components/expense-revenue/AlternatingSections";
import { CTASection } from "@/components/expense-revenue/CTASection";

export default function ExpenseRevenuePage() {
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
