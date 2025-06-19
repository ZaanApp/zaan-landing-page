import { Button } from "@/components/ui/button";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ArrowRight, BarChart3, CreditCard, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FinancePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_800px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Financial Management
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Take control of your salon's finances with powerful tools
                    for payments, reporting, and payroll.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="font-medium">
                    <Link href="/register">Start Free Trial</Link>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl lg:aspect-square">
                <Image
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80"
                  alt="Salon financial management"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:gap-16">
              {/* Feature 1 */}
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="p-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <CreditCard className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold">Payment Processing</h2>
                    <p className="text-muted-foreground">
                      Seamless payment solutions for in-person and online
                      transactions.
                    </p>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        Integrated card processing with competitive rates
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        Digital tipping options with customizable suggestions
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        Online payment links for deposits and pre-payments
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="relative aspect-video overflow-hidden rounded-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
                    alt="Payment processing interface"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Feature 2 */}
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="relative aspect-video overflow-hidden rounded-xl order-2 lg:order-1">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                    alt="Financial reporting interface"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center space-y-4 order-1 lg:order-2">
                  <div className="p-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold">Financial Reporting</h2>
                    <p className="text-muted-foreground">
                      Comprehensive reports and analytics to guide your business
                      decisions.
                    </p>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        Real-time dashboard with key performance indicators
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        Detailed sales reports by service, product, and staff
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Expense tracking and profit margin analysis</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="p-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold">Payroll Management</h2>
                    <p className="text-muted-foreground">
                      Simplify staff compensation with automated commission
                      calculations and payroll processing.
                    </p>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        Flexible commission structures with tiered rates
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        Automated payroll calculations based on hours and sales
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        Direct deposit integration for seamless payments
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="relative aspect-video overflow-hidden rounded-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
                    alt="Zaan payroll management system showing commission calculations, staff compensation details, and direct deposit integration for salon businesses"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl">
                  Take Control of Your Finances Today
                </h2>
                <p className="max-w-[900px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of salons optimizing their financial
                  performance with Zaan
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="font-medium"
                >
                  <Link href="/register">Start Free Trial</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Link href="/contact">Schedule Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
