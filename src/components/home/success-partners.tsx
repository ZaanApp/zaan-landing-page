"use client";

import Image from "next/image";
import { useLanguage } from "@/app/providers";
export function SuccessPartners() {
  const { t } = useLanguage();
  // Sample partner logos - replace with actual partner data
  const partners = [
    {
      name: "Glow Beauty Salon",
      logo: "https://api.dicebear.com/7.x/shapes/svg?seed=glowbeauty",
      alt: "Glow Beauty Salon logo",
    },
    {
      name: "Style Studio",
      logo: "https://api.dicebear.com/7.x/shapes/svg?seed=stylestudio",
      alt: "Style Studio logo",
    },
    {
      name: "Elegance Spa",
      logo: "https://api.dicebear.com/7.x/shapes/svg?seed=elegancespa",
      alt: "Elegance Spa logo",
    },
    {
      name: "Pure Bliss",
      logo: "https://api.dicebear.com/7.x/shapes/svg?seed=purebliss",
      alt: "Pure Bliss logo",
    },
    {
      name: "Radiant Beauty",
      logo: "https://api.dicebear.com/7.x/shapes/svg?seed=radiantbeauty",
      alt: "Radiant Beauty logo",
    },
    {
      name: "Serene Salon",
      logo: "https://api.dicebear.com/7.x/shapes/svg?seed=serenesalon",
      alt: "Serene Salon logo",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {t("home.successPartners.SuccessStories")}
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("home.successPartners.SuccessStoriesDescription")}
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="w-full max-w-[150px] h-[100px] relative flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <Image
                src={partner.logo}
                alt={partner.alt}
                width={80}
                height={80}
                className="object-contain"
                unoptimized
              />
              <div className="absolute bottom-1 left-0 right-0 text-center text-xs text-gray-500">
                {partner.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
