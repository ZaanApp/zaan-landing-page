import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Settings, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function OperationsPage() {
  return (
    <div>
      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_800px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Operations Management
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Streamline your salon operations with powerful tools
                    designed to save time and reduce administrative work.
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
                  src="https://images.unsplash.com/photo-1470259078422-826894b933aa?w=800&q=80"
                  alt="Salon operations management"
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
                    <Calendar className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold">
                      Appointment Scheduling
                    </h2>
                    <p className="text-muted-foreground">
                      Our intuitive scheduling system makes booking appointments
                      effortless for both staff and clients.
                    </p>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        Online booking that syncs with your calendar in
                        real-time
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        Automated reminders to reduce no-shows by up to 60%
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        Smart scheduling to optimize your staff's time
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="relative aspect-video overflow-hidden rounded-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80"
                    alt="Appointment scheduling interface"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Feature 2 */}
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="relative aspect-video overflow-hidden rounded-xl order-2 lg:order-1">
                  <Image
                    src="https://images.unsplash.com/photo-1529539795054-3c162aab037a?w=800&q=80"
                    alt="Staff management interface"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center space-y-4 order-1 lg:order-2">
                  <div className="p-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold">Staff Management</h2>
                    <p className="text-muted-foreground">
                      Easily manage your team's schedules, performance, and
                      commissions all in one place.
                    </p>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        Flexible scheduling with time-off requests and
                        availability management
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        Performance tracking with service and retail sales
                        metrics
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        Automated commission calculations based on customizable
                        rules
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="p-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Settings className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold">Inventory Control</h2>
                    <p className="text-muted-foreground">
                      Take control of your product inventory with powerful
                      tracking and supplier management tools.
                    </p>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        Real-time inventory tracking with low-stock alerts
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        Automated purchase orders based on usage patterns
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        Direct integration with supplier catalogs for easy
                        ordering
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="relative aspect-video overflow-hidden rounded-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&q=80"
                    alt="Real-time inventory management system with product tracking, low-stock alerts, and automated purchase orders"
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
                  Streamline Your Salon Operations Today
                </h2>
                <p className="max-w-[900px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of salons saving time and reducing stress with
                  Zaan's operations tools
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
    </div>
  );
}
