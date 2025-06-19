"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-palette-teal to-palette-darkTeal text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Salon's Marketing Strategy?
          </h2>
          <p className="text-xl max-w-3xl mb-10">
            Join thousands of salon owners who are already using Zaan to create
            powerful offers and discounts that drive real business growth. Start
            your free trial today and see the difference for yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-white text-palette-teal hover:bg-gray-100"
              asChild
            >
              <Link href="/register">Start Your Free 14-Day Trial</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              asChild
            >
              <Link href="/pricing">View All Features</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
