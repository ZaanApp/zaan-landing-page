"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Check,
  Gift,
  Clock,
  Percent,
  Calendar,
  Users,
  BarChart3,
} from "lucide-react";

export default function FeatureCardsSection() {
  const features = [
    {
      title: "Targeted Promotions",
      description:
        "Create personalized offers based on client history, preferences, and demographics to maximize conversion rates.",
      icon: <Users className="h-6 w-6 text-palette-teal" />,
      gradient: "bg-gradient-to-r from-blue-50 to-indigo-100",
    },
    {
      title: "Time-Limited Offers",
      description:
        "Drive urgency with countdown timers and limited-time promotions that encourage clients to book immediately.",
      icon: <Clock className="h-6 w-6 text-palette-teal" />,
      gradient: "bg-gradient-to-bl from-teal-50 to-emerald-100",
    },
    {
      title: "Seasonal Campaigns",
      description:
        "Plan and schedule holiday and seasonal promotions in advance to capitalize on peak spending periods.",
      icon: <Calendar className="h-6 w-6 text-palette-teal" />,
      gradient: "bg-gradient-to-tr from-purple-50 to-violet-100",
    },
    {
      title: "Loyalty Rewards",
      description:
        "Automatically identify and reward your most valuable clients with tiered discounts and special offers.",
      icon: <Gift className="h-6 w-6 text-palette-teal" />,
      gradient: "bg-gradient-to-tl from-amber-50 to-orange-100",
    },
    {
      title: "Performance Tracking",
      description:
        "Measure the success of each promotion with detailed analytics on redemption rates, revenue generated, and ROI.",
      icon: <BarChart3 className="h-6 w-6 text-palette-teal" />,
      gradient: "bg-gradient-to-br from-cyan-50 to-sky-100",
    },
    {
      title: "Flexible Discount Types",
      description:
        "Choose from percentage discounts, fixed amounts, buy-one-get-one offers, or custom package deals to suit your goals.",
      icon: <Percent className="h-6 w-6 text-palette-teal" />,
      gradient: "bg-gradient-to-l from-rose-50 to-pink-100",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-palette-lightBg">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-palette-darkTeal">
            Powerful Marketing Tools at Your Fingertips
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to create, manage, and track effective offers
            and discounts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.gradient} rounded-xl p-6 shadow-sm border border-white/20 hover:shadow-md transition-shadow duration-300`}
            >
              <div className="inline-flex items-center justify-center p-2 bg-white rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-palette-darkTeal">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
