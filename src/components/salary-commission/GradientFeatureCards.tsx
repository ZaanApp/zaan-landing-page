"use client";

import {
  Calculator,
  ChartBar,
  Clock,
  CreditCard,
  FileText,
} from "lucide-react";

export default function GradientFeatureCards() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-background to-primary/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Advantages of Zaan's Salary & Commission Management
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Powerful tools that transform how you manage your team's
            compensation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Blue gradient flowing right */}
          <div className="rounded-lg p-6 shadow-md border bg-gradient-to-r from-blue-50 to-indigo-100">
            <div className="inline-flex items-center justify-center p-3 bg-white/80 rounded-lg mb-4">
              <Calculator className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Automatic Salary Calculation
            </h3>
            <p className="text-muted-foreground">
              Zaan calculates basic salaries and additional entitlements
              automatically, based on attendance, sales performance, and
              overtime hours without manual intervention.
            </p>
          </div>

          {/* Card 2: Teal-emerald gradient flowing bottom-left */}
          <div className="rounded-lg p-6 shadow-md border bg-gradient-to-bl from-teal-50 to-emerald-100">
            <div className="inline-flex items-center justify-center p-3 bg-white/80 rounded-lg mb-4">
              <CreditCard className="h-6 w-6 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Custom Commission Allocation
            </h3>
            <p className="text-muted-foreground">
              Set personalized commission percentages for each employee based on
              specific financial goals, with automatic calculation when targets
              are achieved.
            </p>
          </div>

          {/* Card 3: Purple-violet gradient flowing top-right */}
          <div className="rounded-lg p-6 shadow-md border bg-gradient-to-tr from-purple-50 to-violet-100">
            <div className="inline-flex items-center justify-center p-3 bg-white/80 rounded-lg mb-4">
              <ChartBar className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Performance Analytics
            </h3>
            <p className="text-muted-foreground">
              Every service an employee performs is automatically linked to
              their performance record, enabling fair and reliable commission
              calculations.
            </p>
          </div>

          {/* Card 4: Orange-amber gradient flowing left */}
          <div className="rounded-lg p-6 shadow-md border bg-gradient-to-l from-orange-50 to-amber-100">
            <div className="inline-flex items-center justify-center p-3 bg-white/80 rounded-lg mb-4">
              <FileText className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Comprehensive Reports
            </h3>
            <p className="text-muted-foreground">
              Get detailed reports of employee salaries and commissions, ready
              to be exported to Excel or PDF for seamless integration with your
              financial records.
            </p>
          </div>

          {/* Card 5: Cyan-sky gradient flowing bottom-right */}
          <div className="rounded-lg p-6 shadow-md border bg-gradient-to-br from-cyan-50 to-sky-100">
            <div className="inline-flex items-center justify-center p-3 bg-white/80 rounded-lg mb-4">
              <Clock className="h-6 w-6 text-cyan-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Complete Transaction History
            </h3>
            <p className="text-muted-foreground">
              Every salary payment, commission, and financial advance is
              documented in the employee's file, ensuring all details remain
              preserved and easily accessible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
