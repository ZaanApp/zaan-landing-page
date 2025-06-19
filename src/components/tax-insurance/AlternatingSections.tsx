"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileCheck, Calculator } from "lucide-react";

export default function AlternatingSections() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* First Section - Left Image, Right Text */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
          <div className="w-full lg:w-1/2 relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1554224155-8d04cb21ed6c?w=800&q=80"
                alt="Tax compliance dashboard"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-palette-teal/10 w-24 h-24 rounded-full hidden lg:block" />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-palette-darkTeal">
              Automated Tax Compliance
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Eliminate the stress of tax season with Zaan's intelligent tax
              management system. Our platform automatically calculates, tracks,
              and prepares all necessary tax documents for your salon business.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <div className="mr-3 mt-1 bg-palette-teal/20 p-1 rounded-full">
                  <Calculator className="h-4 w-4 text-palette-teal" />
                </div>
                <span className="text-muted-foreground">
                  Automatic VAT and sales tax calculations on every transaction
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 bg-palette-teal/20 p-1 rounded-full">
                  <Calculator className="h-4 w-4 text-palette-teal" />
                </div>
                <span className="text-muted-foreground">
                  Real-time tax liability tracking and forecasting
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 bg-palette-teal/20 p-1 rounded-full">
                  <FileCheck className="h-4 w-4 text-palette-teal" />
                </div>
                <span className="text-muted-foreground">
                  One-click tax report generation for filing periods
                </span>
              </li>
            </ul>
            <Button
              variant="outline"
              className="border-palette-teal text-palette-teal hover:bg-palette-teal/10"
              asChild
            >
              <Link href="/features/finance/tax-insurance/tax-management">
                Learn More
              </Link>
            </Button>
          </div>
        </div>

        {/* Second Section - Right Image, Left Text */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className="w-full lg:w-1/2 relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
                alt="Insurance policy management"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-palette-lavender/30 w-24 h-24 rounded-full hidden lg:block" />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-palette-darkTeal">
              Comprehensive Insurance Management
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Protect your business and employees with Zaan's integrated
              insurance management tools. Track policies, manage renewals, and
              ensure complete coverage for your salon business.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <div className="mr-3 mt-1 bg-palette-lavender/40 p-1 rounded-full">
                  <FileCheck className="h-4 w-4 text-palette-darkTeal" />
                </div>
                <span className="text-muted-foreground">
                  Digital storage for all insurance policies and documents
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 bg-palette-lavender/40 p-1 rounded-full">
                  <FileCheck className="h-4 w-4 text-palette-darkTeal" />
                </div>
                <span className="text-muted-foreground">
                  Automated renewal reminders and coverage alerts
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 bg-palette-lavender/40 p-1 rounded-full">
                  <FileCheck className="h-4 w-4 text-palette-darkTeal" />
                </div>
                <span className="text-muted-foreground">
                  Employee insurance benefit tracking and management
                </span>
              </li>
            </ul>
            <Button
              variant="outline"
              className="border-palette-darkTeal text-palette-darkTeal hover:bg-palette-lavender/20"
              asChild
            >
              <Link href="/features/finance/tax-insurance/insurance-management">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
