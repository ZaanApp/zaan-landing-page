"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/app/providers";
import { useEffect, useState } from "react";
import { AnimatePresence,motion } from "framer-motion";

export default function HeroSection() {
  const words = [
    "Your Salon",
    "Spa",
    "Beauty Center",
    "Barber Shop",
    "Skincare Clinic",
    "Massage Center",
    "Nail Spa",
    "Kids Barber",
    "Home Salon",
  ];
  const [index, setIndex] = useState(0);

  const { t } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500); // 2.5 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-primary/10 to-background overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_800px]">
          <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-6xl">
        {t("home.hero.allInOne")}{" "}
        <span className="text-primary">{t("home.hero.toManage")}</span>{" "}<br/>
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-bold inline-block whitespace-nowrap"
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
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
              src="/hero-img.png"
              alt="Salon management software interface"
              fill
              className="object-contain"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
