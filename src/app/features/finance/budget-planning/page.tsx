import { HeroSection } from "@/components/budget-planning/HeroSection";
import { IntroductionSection } from "@/components/budget-planning/IntroductionSection";
import { FeatureCardsSection } from "@/components/budget-planning/FeatureCardsSection";
import { AlternatingSections } from "@/components/budget-planning/AlternatingSections";
import { CTASection } from "@/components/budget-planning/CTASection";

export default function BudgetPlanningPage() {
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
