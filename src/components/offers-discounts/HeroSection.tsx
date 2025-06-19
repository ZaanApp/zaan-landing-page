"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Percent } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-palette-teal/10 to-background">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block p-3 rounded-full bg-palette-teal/10 mb-6">
            <Percent className="h-8 w-8 text-palette-teal" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Offers & Discounts
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-10">
            Boost your salon's revenue with strategic promotions that attract
            new clients and keep existing ones coming back!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-palette-teal text-white hover:bg-palette-teal/90"
              asChild
            >
              <Link href="/register">Start Free Trial</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
