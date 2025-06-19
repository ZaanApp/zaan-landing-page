import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Mail,
  BarChart,
  Users,
  Clock,
  FileText,
  Calendar,
  DollarSign,
} from "lucide-react";
import Image from "next/image";

export default function EmailCampaignsPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-palette-teal/20 to-background">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col items-center text-center">
            <div className="inline-block p-3 rounded-full bg-palette-teal/20 mb-6">
              <Mail className="h-8 w-8 text-palette-teal" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Email Marketing Campaigns
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mb-10">
              Create professional campaigns that convert leads into bookings and
              turn your client list into a valuable revenue stream.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="teal" asChild>
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
          <p className="text-xl leading-relaxed text-muted-foreground">
            The Zaan email marketing platform connects your client data with
            powerful campaign tools, helping you create targeted messages that
            drive real results. With minimal effort and maximum impact, turn
            your client database into a consistent source of bookings and
            revenue.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-palette-lightBg">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-slate-800">
              Advantages of Email Marketing in Zaan
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Everything you need to create, send, and analyze effective email
              campaigns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-white to-palette-lightBg rounded-lg p-6 shadow-md border border-palette-teal/10 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center p-3 bg-palette-teal/20 rounded-lg mb-4">
                <FileText className="h-6 w-6 text-palette-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-palette-darkTeal">
                Professional Templates
              </h3>
              <p className="text-muted-foreground">
                Create stunning campaigns in minutes with our ready-made,
                customizable templates that reflect your salon's brand
                identity—no design experience required.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-bl from-white to-palette-lightBg rounded-lg p-6 shadow-md border border-palette-teal/10 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center p-3 bg-palette-teal/20 rounded-lg mb-4">
                <Users className="h-6 w-6 text-palette-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-palette-darkTeal">
                Smart Client Targeting
              </h3>
              <p className="text-muted-foreground">
                Filter clients by visit frequency, demographics, preferred
                services, and more to create highly targeted campaigns that
                resonate with specific audience segments.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-tr from-white to-palette-lightBg rounded-lg p-6 shadow-md border border-palette-teal/10 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center p-3 bg-palette-teal/20 rounded-lg mb-4">
                <Clock className="h-6 w-6 text-palette-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-palette-darkTeal">
                Intelligent Scheduling
              </h3>
              <p className="text-muted-foreground">
                Send campaigns at optimal times or set up automated sends for
                holidays, special occasions, and seasonal promotions to maximize
                open rates and engagement.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-tl from-white to-palette-lightBg rounded-lg p-6 shadow-md border border-palette-teal/10 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center p-3 bg-palette-teal/20 rounded-lg mb-4">
                <BarChart className="h-6 w-6 text-palette-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-palette-darkTeal">
                Real-Time Analytics
              </h3>
              <p className="text-muted-foreground">
                Track opens, clicks, and bookings in real-time to measure
                campaign performance and continuously improve your marketing
                strategy for better results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Alternating Sections */}
      {/* Section 1: Image Left */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"
                alt="Personalized email campaign"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Personalized Content That Converts
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Create personalized emails that make clients feel valued and
                recognized. Include their name, preferred services, appointment
                history, and loyalty points to create a truly customized
                experience that drives engagement.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-palette-teal">•</div>
                  <p>
                    Address clients by name and reference their service history
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-palette-teal">•</div>
                  <p>
                    Include personalized recommendations based on past bookings
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-palette-teal">•</div>
                  <p>Highlight available loyalty points and special offers</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Image Right */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-palette-lightBg">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6">
                Seamless Booking Integration
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Every email can include interactive booking buttons that take
                clients directly to your online booking page, turning email
                opens into actual appointments with just one click.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-palette-teal">•</div>
                  <p>
                    Direct "Book Now" buttons that connect to your scheduling
                    system
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-palette-teal">•</div>
                  <p>
                    Special offer redemption links with pre-selected services
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-palette-teal">•</div>
                  <p>Higher conversion rates with simplified booking process</p>
                </li>
              </ul>
              <div className="mt-8">
                <Button variant="teal" asChild>
                  <Link href="/register">Try It Now</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl order-1 lg:order-2">
              <Image
                src="https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&q=80"
                alt="Booking integration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-palette-darkTeal text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-block p-4 rounded-full bg-white/10 mb-6">
            <DollarSign className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-6">
            Turn Your Client List Into a Revenue Stream
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            One well-designed email campaign can generate dozens of bookings.
            Start using Zaan's email marketing tools today and transform your
            client database into an indispensable source of income.
          </p>
          <Button size="lg" variant="secondary" asChild className="font-medium">
            <Link href="/register">Start Your Free Trial Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
