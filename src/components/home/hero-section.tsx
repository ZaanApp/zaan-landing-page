"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/app/providers";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-primary/10 to-background overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_800px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                {t("home.hero.allInOne")}{" "}
                <span className="text-primary">{t("home.hero.toManage")}</span>{" "}
                {t("home.hero.business")}
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                {t("home.hero.softwareDelivers")}
              </p>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <Button size="lg" className="font-medium" asChild>
                <Link href="/register">{t("home.hero.startFreeTrial")}</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-medium"
                asChild
              >
                <Link href="/contact">{t("home.hero.requestDemo")}</Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              {t("home.hero.noSetupCosts")} - {t("home.hero.startManaging")}
            </p>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-xl lg:aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80"
              alt="Salon management software interface"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
