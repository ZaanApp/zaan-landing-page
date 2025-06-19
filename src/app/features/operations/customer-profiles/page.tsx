import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  FileText,
  Users,
  BarChart,
  Gift,
  RefreshCw,
  Mail,
  ShoppingBag,
} from "lucide-react";

export default function CustomerProfilesPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/20 to-primary/5">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="space-y-6 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Customer Files in Zaan
            </h1>
            <p className="text-xl text-muted-foreground">
              Every client you have has a story, and with Zaan you know every
              detail!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/register">Start Free Trial</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Schedule Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-background rounded-lg p-8 border shadow-sm">
            <p className="text-lg text-center max-w-3xl mx-auto">
              Zaan's system gives you an integrated digital file for each
              customer, containing the details of every visit and any notes
              regarding their reservations or preferences. Be prepared to
              provide an exceptional experience every time, with all customer
              information at your fingertips.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Advantages of Zaan Customer File System
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="bg-background rounded-lg p-6 border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 mb-2">
                  <FileText size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold">
                  Detailed Client Records
                </h3>
                <p className="text-muted-foreground">
                  Every reservation, service, and note from your team is
                  automatically saved in one easy-to-access file.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-background rounded-lg p-6 border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 mb-2">
                  <Users size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold">
                  Personal Preferences Tracking
                </h3>
                <p className="text-muted-foreground">
                  Understand what your customers want and which services they
                  regularly seek, creating a personalized experience.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-background rounded-lg p-6 border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 mb-2">
                  <ShoppingBag size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold">
                  Purchase History Tracking
                </h3>
                <p className="text-muted-foreground">
                  Monitor product purchases and timing patterns to optimize your
                  inventory and anticipate customer needs.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-background rounded-lg p-6 border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 mb-2">
                  <Gift size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold">
                  Loyalty Program Integration
                </h3>
                <p className="text-muted-foreground">
                  Track loyalty points and offer redemptions to create targeted
                  promotions that drive repeat visits.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="bg-background rounded-lg p-6 border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 mb-2">
                  <RefreshCw size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Automatic Updates</h3>
                <p className="text-muted-foreground">
                  Every reservation, cancellation, review, or communication is
                  automatically recorded in the customer file.
                </p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="bg-background rounded-lg p-6 border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 mb-2">
                  <Mail size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold">
                  Personalized Marketing
                </h3>
                <p className="text-muted-foreground">
                  Create customized campaigns targeting specific customers based
                  on visit frequency and service preferences.
                </p>
              </div>
            </div>

            {/* Feature 7 */}
            <div className="bg-background rounded-lg p-6 border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 mb-2">
                  <BarChart size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Customer Analytics</h3>
                <p className="text-muted-foreground">
                  Gain insights into customer behavior patterns to make
                  data-driven business decisions.
                </p>
              </div>
            </div>

            {/* Feature 8 */}
            <div className="bg-background rounded-lg p-6 border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 mb-2">
                  <Users size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Customer Retention</h3>
                <p className="text-muted-foreground">
                  Transform one-time visitors into loyal customers with
                  personalized attention and service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternating Sections */}
      {/* Section 1 */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">
                  Detailed Records for Every Client
                </h2>
                <p className="text-lg text-muted-foreground">
                  Every interaction with your customers is automatically
                  documented and organized in one centralized location. Access
                  complete service histories, preferences, and notes with just a
                  few clicks.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>
                      Comprehensive service history with detailed notes
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Staff observations and recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Quick access to past appointments and outcomes</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden order-1 lg:order-2">
              <Image
                src="https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&q=80"
                alt="Detailed client records interface"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&q=80"
                alt="Personalized marketing dashboard"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">
                  Personalized Marketing Based on Customer Data
                </h2>
                <p className="text-lg text-muted-foreground">
                  Create highly targeted marketing campaigns that resonate with
                  your customers' specific needs and preferences, resulting in
                  higher engagement and conversion rates.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>
                      Segment customers based on visit frequency and preferences
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Automated birthday and anniversary promotions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Re-engagement campaigns for inactive customers</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">
                  Loyalty Program Integration
                </h2>
                <p className="text-lg text-muted-foreground">
                  Seamlessly connect customer profiles with your loyalty program
                  to track points, rewards, and offer redemptions, creating a
                  powerful system for increasing customer retention.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Real-time loyalty point tracking and management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Customizable reward tiers and special offers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Automated notifications for available rewards</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden order-1 lg:order-2">
              <Image
                src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=800&q=80"
                alt="Loyalty program integration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Transform Visitors into Loyal Customers
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Get started with Zaan's Customer Profiles feature today and watch
              your customer satisfaction and loyalty increase with every visit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                variant="secondary"
                className="font-medium"
                asChild
              >
                <Link href="/register">Start Your Free Trial</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/contact">Schedule a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
