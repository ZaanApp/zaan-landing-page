"use client";

import {
  Calculator,
  FileCheck,
  Link2,
  Users,
  Shield,
  CreditCard,
} from "lucide-react";

export default function FeatureCardsSection() {
  const features = [
    {
      title: "Automated VAT Management",
      description:
        "Intelligent calculation of VAT on every sale and expense, with automated tax reports ready for submission to authorities.",
      icon: Calculator,
      gradient: "bg-gradient-to-r from-blue-50 to-indigo-100",
    },
    {
      title: "Certified Tax Invoices",
      description:
        "Fully compliant electronic invoicing with tax numbers, VAT rates, and QR codes that meet all regulatory requirements.",
      icon: FileCheck,
      gradient: "bg-gradient-to-bl from-teal-50 to-emerald-100",
    },
    {
      title: "Seamless Integration",
      description:
        "Intelligent linking of taxes with payroll and expenses to ensure accuracy in tax deductions and social insurance.",
      icon: Link2,
      gradient: "bg-gradient-to-tr from-purple-50 to-violet-100",
    },
    {
      title: "Staff Insurance Management",
      description:
        "Streamlined handling of employee insurance requirements with automatic calculations and documentation.",
      icon: Users,
      gradient: "bg-gradient-to-tl from-amber-50 to-orange-100",
    },
    {
      title: "Business Protection",
      description:
        "Comprehensive tracking of business insurance policies with renewal reminders and coverage analysis.",
      icon: Shield,
      gradient: "bg-gradient-to-br from-cyan-50 to-sky-100",
    },
    {
      title: "Financial Compliance",
      description:
        "Stay compliant with local regulations while focusing on growing your business with confidence.",
      icon: CreditCard,
      gradient: "bg-gradient-to-l from-rose-50 to-pink-100",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-palette-lightBg">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-palette-darkTeal">
            How Zaan Ensures Your Salon's Financial Compliance
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive tools that give you complete peace of mind
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.gradient} rounded-xl p-6 shadow-sm border border-white/20 hover:shadow-md transition-shadow duration-300`}
            >
              <div className="inline-flex items-center justify-center p-2 bg-white rounded-lg mb-4">
                <feature.icon className="h-6 w-6 text-palette-teal" />
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
