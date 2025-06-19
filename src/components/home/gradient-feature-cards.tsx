"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Briefcase, ShoppingCart, DollarSign } from "lucide-react";
import { useLanguage } from "@/app/providers";

export function GradientFeatureCards() {
  const { t } = useLanguage();

  const features = [
    {
      title: t("features.operations.title"),
      description: t("features.operations.description"),
      icon: <Briefcase className="h-6 w-6 text-primary" />,
      gradient: "from-blue-50 to-indigo-100",
      link: "/features/operations",
    },
    {
      title: t("features.sales.title"),
      description: t("features.sales.description"),
      icon: <ShoppingCart className="h-6 w-6 text-primary" />,
      gradient: "from-teal-50 to-emerald-100",
      link: "/features/sales",
    },
    {
      title: t("features.finance.title"),
      description: t("features.finance.description"),
      icon: <DollarSign className="h-6 w-6 text-primary" />,
      gradient: "from-purple-50 to-violet-100",
      link: "/features/finance",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            {t("home.features.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("home.features.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 shadow-sm bg-gradient-to-br ${feature.gradient} border border-white/20 hover:shadow-md transition-shadow duration-300`}
            >
              <div className="inline-flex items-center justify-center p-2 bg-white/80 rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground mb-4">
                {feature.description}
              </p>
              <Button variant="link" className="p-0" asChild>
                <Link href={feature.link}>{t("home.features.readMore")} →</Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-2">
            {t("home.features.sectionTitle")}
          </h3>
          <h3 className="text-2xl font-bold mb-4">
            {t("home.features.sectionTitleBreak")}
          </h3>
          <p className="text-muted-foreground">
            {t("home.features.sectionDescription")}
          </p>
        </div>
      </div>
    </section>
  );
}
