"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AlternatingSections() {
  const sections = [
    {
      title: "Comprehensive Financial Overview",
      description:
        "Get a complete picture of your salon's financial health with detailed reports covering income, expenses, and profit margins. Track performance over time with easy-to-understand visualizations and metrics tailored to the beauty industry.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
      alt: "Financial dashboard showing salon performance metrics",
      buttonText: "Explore Financial Dashboard",
      buttonLink: "/register",
      imageLeft: false,
    },
    {
      title: "Tax Management Made Simple",
      description:
        "Never worry about tax season again. Zaan automatically categorizes transactions for tax purposes and generates reports that make filing straightforward. Export tax-ready documents for your accountant with just one click.",
      image:
        "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&q=80",
      alt: "Person reviewing tax documents on tablet",
      buttonText: "Simplify Your Taxes",
      buttonLink: "/register",
      imageLeft: true,
    },
    {
      title: "Staff Performance Analytics",
      description:
        "Understand the contribution of each team member to your bottom line. Track revenue generated, services performed, and client retention rates by stylist. Use these insights to create fair commission structures and incentive programs.",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80",
      alt: "Staff performance analytics chart",
      buttonText: "Optimize Your Team",
      buttonLink: "/register",
      imageLeft: false,
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              section.imageLeft ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center gap-8 mb-20 last:mb-0`}
          >
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={section.image}
                  alt={section.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {section.title}
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                {section.description}
              </p>
              <Button size="lg" asChild>
                <Link href={section.buttonLink}>{section.buttonText}</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
