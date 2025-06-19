"use client";

import {
  Calculator,
  ChartBar,
  Clock,
  CreditCard,
  FileText,
  Users,
} from "lucide-react";

export default function FeatureCardsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Key Benefits</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover how Zaan's salary and commission management can transform
            your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="rounded-lg p-6 shadow-sm bg-gradient-to-r from-blue-50 to-indigo-100">
            <div className="inline-flex items-center justify-center p-2 bg-white/80 rounded-lg mb-4">
              <Calculator className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Automatic Calculations
            </h3>
            <p className="text-muted-foreground">
              Automatically calculate basic salaries and additional entitlements
              based on attendance, sales performance, and overtime hours.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-lg p-6 shadow-sm bg-gradient-to-bl from-teal-50 to-emerald-100">
            <div className="inline-flex items-center justify-center p-2 bg-white/80 rounded-lg mb-4">
              <CreditCard className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Commission Allocation
            </h3>
            <p className="text-muted-foreground">
              Set custom commission percentages for each employee based on
              specific financial goals and track their progress automatically.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-lg p-6 shadow-sm bg-gradient-to-tr from-purple-50 to-violet-100">
            <div className="inline-flex items-center justify-center p-2 bg-white/80 rounded-lg mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Performance Tracking</h3>
            <p className="text-muted-foreground">
              Link every service an employee performs to their performance
              record for fair and reliable commission calculations.
            </p>
          </div>

          {/* Card 4 */}
          <div className="rounded-lg p-6 shadow-sm bg-gradient-to-tl from-amber-50 to-orange-100">
            <div className="inline-flex items-center justify-center p-2 bg-white/80 rounded-lg mb-4">
              <ChartBar className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Updated Reports</h3>
            <p className="text-muted-foreground">
              Access detailed salary and commission reports that can be easily
              exported to Excel or PDF for your financial records.
            </p>
          </div>

          {/* Card 5 */}
          <div className="rounded-lg p-6 shadow-sm bg-gradient-to-br from-cyan-50 to-sky-100">
            <div className="inline-flex items-center justify-center p-2 bg-white/80 rounded-lg mb-4">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Complete Records</h3>
            <p className="text-muted-foreground">
              Document every financial transaction in employee files for easy
              reference and complete transparency.
            </p>
          </div>

          {/* Card 6 */}
          <div className="rounded-lg p-6 shadow-sm bg-gradient-to-l from-rose-50 to-pink-100">
            <div className="inline-flex items-center justify-center p-2 bg-white/80 rounded-lg mb-4">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Time Saving</h3>
            <p className="text-muted-foreground">
              Eliminate manual calculations and paperwork with our streamlined
              system that handles all compensation tasks automatically.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
