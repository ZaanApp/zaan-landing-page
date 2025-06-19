"use client";

import {
  ArrowRight,
  BarChart3,
  Calendar,
  CreditCard,
  MapPin,
  MessageSquare,
  Settings,
  Users,
  Lightbulb,
  ClipboardList,
  ShoppingCart,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FeaturesSection() {
  const features = [
    {
      title: "Branches Management",
      description:
        "Open an unlimited number of branches for your business and follow them all from one place.",
      icon: <MapPin className="h-8 w-8" />,
      link: "/features/operations",
    },
    {
      title: "Service Management",
      description:
        "Flexible system to list all services and any services provided by your salon. You can manage them by category.",
      icon: <Lightbulb className="h-8 w-8" />,
      link: "/features/operations",
    },
    {
      title: "Staff Management",
      description:
        "Manage employee roll, performance, leave and attendance with our all-in-one spa and salon management system.",
      icon: <Users className="h-8 w-8" />,
      link: "/features/operations",
    },
    {
      title: "Customer Management",
      description:
        "With Zaan you can manage your customers' records in a wonderful way, as you can track their last visit and preferences.",
      icon: <MessageSquare className="h-8 w-8" />,
      link: "/features/sales",
    },
    {
      title: "Marketing",
      description:
        "Zaan's marketing automation software is tailor-made for the salon and spa business. Our solution helps you grow your client base.",
      icon: <BarChart3 className="h-8 w-8" />,
      link: "/features/sales",
    },
    {
      title: "Appointments",
      description:
        "A fast and easy-to-use appointment book for front desk staff is just the start of our omnichannel booking system.",
      icon: <Calendar className="h-8 w-8" />,
      link: "/features/operations",
    },
    {
      title: "Inventory",
      description:
        "A program that helps you control your inventory. Streamline processes to manage stock levels and reduce waste.",
      icon: <ClipboardList className="h-8 w-8" />,
      link: "/features/finance",
    },
    {
      title: "Dashboard",
      description:
        "Pull data from every aspect of your business, including sales, operations, marketing, staff performance and more.",
      icon: <BarChart3 className="h-8 w-8" />,
      link: "/features/finance",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            We designed Zaan to cover all your salon needs
            <br /> to help you operate beautifully
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            Always focus on your growth, leave the innovation to us.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background rounded-xl overflow-hidden shadow-sm border p-6 transition-all hover:shadow-md"
            >
              <div className="mb-4">
                <div className="p-2 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  {feature.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                {feature.description}
              </p>

              <Button
                asChild
                variant="link"
                className="p-0 h-auto font-medium text-primary"
              >
                <Link
                  href={feature.link}
                  className="flex items-center gap-1 text-sm"
                >
                  Read More <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
