"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check } from "lucide-react";

export default function AlternatingSections() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* First Alternating Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
          <div className="lg:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&q=80"
              width={600}
              height={400}
              alt="Client loyalty program"
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
          <div className="lg:w-1/2">
            <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
              <span className="text-primary font-medium">Client Retention</span>
            </div>
            <h2 className="text-3xl font-bold mb-6">
              Build Lasting Client Relationships
            </h2>
            <p className="text-muted-foreground mb-6">
              Create loyalty programs that reward your most valuable clients and
              keep them coming back. With Zaan's client segmentation tools, you
              can design targeted offers based on visit frequency, spending
              habits, and service preferences.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <div className="mr-3 mt-1 bg-primary/20 p-1 rounded-full">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span>Tiered loyalty programs with customizable rewards</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 bg-primary/20 p-1 rounded-full">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span>Birthday and anniversary special offers</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 bg-primary/20 p-1 rounded-full">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span>Client win-back campaigns for lapsed customers</span>
              </li>
            </ul>
            <Button variant="outline" asChild>
              <Link href="/features/sales/offers-discounts/loyalty">
                Learn More
              </Link>
            </Button>
          </div>
        </div>

        {/* Second Alternating Section */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className="lg:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80"
              width={600}
              height={400}
              alt="Seasonal promotion campaign"
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
          <div className="lg:w-1/2">
            <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
              <span className="text-primary font-medium">
                Strategic Campaigns
              </span>
            </div>
            <h2 className="text-3xl font-bold mb-6">
              Drive Revenue with Seasonal Promotions
            </h2>
            <p className="text-muted-foreground mb-6">
              Plan and execute seasonal campaigns that capitalize on holidays,
              local events, and slow periods. Our campaign tools make it easy to
              create, schedule, and track promotions that drive bookings when
              you need them most.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <div className="mr-3 mt-1 bg-primary/20 p-1 rounded-full">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span>Holiday and seasonal promotion templates</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 bg-primary/20 p-1 rounded-full">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span>Fill empty slots with targeted flash sales</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 bg-primary/20 p-1 rounded-full">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span>Multi-channel promotion distribution</span>
              </li>
            </ul>
            <Button variant="outline" asChild>
              <Link href="/features/sales/offers-discounts/campaigns">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
