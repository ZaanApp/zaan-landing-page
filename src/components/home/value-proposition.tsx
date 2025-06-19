"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/app/providers";

export function ValueProposition() {
  const { t } = useLanguage();

  const benefits = [
    "home.valueProposition.benefit1",
    "home.valueProposition.benefit2",
    "home.valueProposition.benefit3",
    "home.valueProposition.benefit4",
    "home.valueProposition.benefit5",
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-palette-mint/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-palette-teal/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column with text content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-palette-darkTeal mb-6">
              {t("home.valueProposition.title")}
            </h2>

            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-palette-teal/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-palette-teal" />
                  </div>
                  <span className="text-palette-darkTeal/80">{t(benefit)}</span>
                </li>
              ))}
            </ul>

            <Button
              asChild
              className="bg-palette-darkTeal hover:bg-palette-darkTeal/90 text-white mt-2"
            >
              <Link href="/register" className="flex items-center gap-2">
                <span>{t("home.valueProposition.startFreeTrial")}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Right column with statistic */}
          <div className="bg-gradient-to-br from-palette-mint/20 to-palette-teal/20 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
            <div className="text-6xl md:text-7xl font-bold text-palette-darkTeal mb-4">
              {t("home.valueProposition.statistic")}
            </div>
            <p className="text-xl text-palette-darkTeal/80 max-w-md">
              {t("home.valueProposition.statisticDescription")}
            </p>
            <div className="mt-8 flex justify-center">
              <Button
                variant="outline"
                asChild
                className="border-palette-darkTeal text-palette-darkTeal hover:bg-palette-darkTeal/10"
              >
                <Link
                  href="/features/operations"
                  className="flex items-center gap-2"
                >
                  <span>{t("home.valueProposition.exploreFeatures")}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
