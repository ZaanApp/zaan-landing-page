"use client";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/app/providers";
import Link from "next/link";

export function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-primary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl">
              {t("home.cta.title")}
            </h2>
            <p className="max-w-[900px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("home.cta.description")}
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="font-medium"
            >
              <Link href="/register">{t("home.cta.startFreeTrial")}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href="/contact"> {t("home.cta.contactSales")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
