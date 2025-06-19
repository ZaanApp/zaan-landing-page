"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to streamline your salon's payroll?
          </h2>
          <p className="text-xl max-w-3xl mb-10">
            Start managing your staff salaries and commission structures with
            ease. Join thousands of salon owners who have simplified their
            financial operations with Zaan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-white text-indigo-700 hover:bg-gray-100 font-semibold"
              asChild
            >
              <Link href="/register">Start Free Trial</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 font-semibold"
              asChild
            >
              <Link href="/contact">Schedule Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
