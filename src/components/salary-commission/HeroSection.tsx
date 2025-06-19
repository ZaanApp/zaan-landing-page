import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DollarSign } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-background">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block p-3 rounded-full bg-primary/10 mb-6">
            <DollarSign className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Salary & Commission Management
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-10">
            Earn your team's loyalty through accurate management of salaries and
            commissions with Zaan!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
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
