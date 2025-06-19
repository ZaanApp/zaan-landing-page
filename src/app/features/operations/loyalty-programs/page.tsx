import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BadgePercent,
  BarChart4,
  Gift,
  QrCode,
  Star,
  Trophy,
  Users,
} from "lucide-react";
import Image from "next/image";

export default function LoyaltyProgramsPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-palette-teal/10 to-palette-lavender/20">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col items-center text-center">
            <div className="inline-block p-3 rounded-full bg-primary/10 mb-6">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Zaan Loyalty Programs
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mb-10">
              Increase customer loyalty and retention without spending a fortune
              on marketing. Transform your clients into brand ambassadors who
              return regularly and refer others to your salon.
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

      {/* Introduction Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            Smart Loyalty That Works For You
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            With the Zaan system, creating customer loyalty programs has become
            effortless. Our intelligent automation tracks every visit, service,
            and purchase to build lasting customer relationships—all without
            requiring extra effort or marketing expenses from your salon.
          </p>
          <p className="text-lg font-medium text-palette-darkTeal">
            Let your exceptional service do the talking while Zaan handles the
            loyalty tracking behind the scenes.
          </p>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-palette-mint/20 to-palette-beige/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Advantages of Zaan Loyalty Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover how our comprehensive loyalty features can transform your
              customer relationships and boost your salon's revenue.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
                <BadgePercent className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Flexible & Customizable
              </h3>
              <p className="text-muted-foreground">
                Choose from multiple loyalty models: points per service, visit
                counting, product purchase rewards, and more. Design programs
                that perfectly match your salon's identity and clientele.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
                <QrCode className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Automatic QR Registration
              </h3>
              <p className="text-muted-foreground">
                Enroll customers instantly from their first visit with a simple
                QR code scan. The system begins tracking appointments and
                purchases immediately, with zero paperwork.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
                <Gift className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant Rewards</h3>
              <p className="text-muted-foreground">
                Automatically deliver rewards when customers reach milestones.
                Offer discounts, free services, or special treatments based on
                your custom program parameters.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Real-time Point Updates
              </h3>
              <p className="text-muted-foreground">
                Every service booked or product purchased automatically updates
                loyalty points in real-time, creating a seamless experience for
                both staff and customers.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
                <BarChart4 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Performance Analytics
              </h3>
              <p className="text-muted-foreground">
                Access detailed reports identifying your most loyal customers,
                visit frequency increases, and program effectiveness to optimize
                your loyalty strategy for maximum revenue.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer Retention</h3>
              <p className="text-muted-foreground">
                Transform one-time visitors into regular clients with incentives
                that encourage repeat visits and create a sense of exclusivity
                and appreciation.
              </p>
            </div>

            {/* Feature 7 */}
            <div className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Tiered Programs</h3>
              <p className="text-muted-foreground">
                Create multi-level loyalty tiers that reward your best customers
                with premium benefits, encouraging clients to increase their
                spending to reach higher status levels.
              </p>
            </div>

            {/* Feature 8 */}
            <div className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
                <ArrowRight className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Seamless Integration
              </h3>
              <p className="text-muted-foreground">
                Enjoy perfect integration with other Zaan features including
                customer profiles, appointment scheduling, point-of-sale, and
                reporting for a unified business management experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Alternating Sections */}
      {/* Section 1 - Image Right */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold">
                Turn Clients Into Brand Ambassadors
              </h2>
              <p className="text-lg text-muted-foreground">
                Zaan's loyalty programs transform your regular clients into
                passionate advocates for your salon. By rewarding their loyalty,
                you create a network of customers who not only return regularly
                but actively recommend your services to friends and family.
              </p>
              <p className="text-lg text-muted-foreground">
                Our data shows that salons using Zaan's loyalty features see up
                to 40% increase in referral business and 35% higher customer
                retention rates compared to those without structured loyalty
                programs.
              </p>
              <Button variant="outline" className="mt-4" asChild>
                <Link href="/register">Start Building Loyalty</Link>
              </Button>
            </div>
            <div className="lg:w-1/2 rounded-xl overflow-hidden shadow-lg">
              <div className="relative h-[400px] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80"
                  alt="Salon clients enjoying loyalty rewards"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Image Left */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 rounded-xl overflow-hidden shadow-lg">
              <div className="relative h-[400px] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=800&q=80"
                  alt="Salon staff managing loyalty program"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold">
                Effortless Program Management
              </h2>
              <p className="text-lg text-muted-foreground">
                Say goodbye to punch cards, spreadsheets, and manual tracking.
                Zaan's automated loyalty system handles everything behind the
                scenes, from enrollment to reward delivery, without adding any
                administrative burden to your staff.
              </p>
              <p className="text-lg text-muted-foreground">
                The intuitive dashboard gives you complete control over program
                parameters, allowing you to adjust rewards, thresholds, and
                special promotions with just a few clicks. Spend less time
                managing loyalty and more time delivering exceptional service.
              </p>
              <Button variant="outline" className="mt-4" asChild>
                <Link href="/pricing">Explore Plans</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Image Right */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold">
                Data-Driven Loyalty Strategies
              </h2>
              <p className="text-lg text-muted-foreground">
                Leverage powerful analytics to understand exactly how your
                loyalty programs are performing. Identify which rewards drive
                the most repeat business, which customer segments respond best
                to different incentives, and how to optimize your programs for
                maximum ROI.
              </p>
              <p className="text-lg text-muted-foreground">
                Zaan's reporting tools help you make informed decisions about
                your loyalty strategy, ensuring you're investing in programs
                that truly impact your bottom line and strengthen customer
                relationships.
              </p>
              <Button variant="outline" className="mt-4" asChild>
                <Link href="/register">See Analytics Demo</Link>
              </Button>
            </div>
            <div className="lg:w-1/2 rounded-xl overflow-hidden shadow-lg">
              <div className="relative h-[400px] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                  alt="Analytics dashboard showing loyalty program performance"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-palette-teal/10 to-palette-lavender/20">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col items-center text-center p-8 bg-card rounded-xl shadow-lg border">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Turn Your Clients Into Hidden Marketers?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mb-8">
              Create the perfect loyalty program with Zaan and watch your
              customer visits increase with enthusiasm. Start your free trial
              today and see the difference a strategic loyalty program can make
              for your salon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2" asChild>
                <Link href="/register">
                  Start Free Trial <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/pricing">View Pricing Plans</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
