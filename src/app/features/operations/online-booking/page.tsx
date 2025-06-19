import { Button } from "@/components/ui/button";
import { Footer } from "@/components/layout/footer";
import {
  ArrowRight,
  Calendar,
  Clock,
  Bell,
  Globe,
  Share2,
  CreditCard,
  Smartphone,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function OnlineBookingPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col items-center text-center">
            <div className="inline-block p-3 rounded-full bg-primary/10 mb-6">
              <Calendar className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Online Reservations with Zaan
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mb-10">
              Be available 24/7... Give your clients the freedom to book their
              appointments from anywhere, at any time!
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            With the online booking feature in the Zaan system, there are no
            missed calls, no overlapping appointments, and no unorganized work
            schedules.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mt-4">
            Zaan system gives you a smart page to easily receive online
            bookings, which makes the work schedule in your salon always
            organized... and your client is always comfortable... even while you
            are sleeping!
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Advantages of Online Reservations in the Zaan System
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need for a seamless online booking experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Dedicated Booking Page
              </h3>
              <p className="text-muted-foreground">
                Create an elegant page with your salon's name and logo,
                displaying services, packages, and offers in an organized manner
                with clear descriptions and images.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Fully Automated Reservations
              </h3>
              <p className="text-muted-foreground">
                Once a customer selects a service and time, the reservation is
                automatically confirmed and linked to available staff in the
                schedule without manual intervention.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Real-Time Availability
              </h3>
              <p className="text-muted-foreground">
                Display only available appointments in real-time according to
                staff schedules and service types, preventing overlaps and
                duplicate bookings.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
                <Bell className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Instant Notifications
              </h3>
              <p className="text-muted-foreground">
                Send confirmation and reminder messages via SMS or WhatsApp to
                ensure customer attendance and reduce cancellations.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Flexible Payment Options
              </h3>
              <p className="text-muted-foreground">
                Choose from multiple reservation methods: deposits, full
                payment, or pay upon arrival. All transactions are automatically
                recorded and invoiced.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
                <Share2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Shareable Link</h3>
              <p className="text-muted-foreground">
                Publish your booking page link anywhere or send it via
                WhatsApp/SMS, targeting specific customers with personalized
                offers for instant reservations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Experience Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80"
                alt="Easy booking interface"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">
                Easy and Simple Interface for Clients
              </h2>
              <p className="text-lg text-muted-foreground">
                Zaan's online reservations page provides an easy and quick
                experience for making and confirming reservations at any time
                and from anywhere, without the need to download an application
                and without complexity.
              </p>
              <p className="text-lg text-muted-foreground">
                With the push of a button, your customer chooses the service and
                time and books with confidence.
              </p>
              <div className="flex items-center gap-2 text-primary">
                <Smartphone className="h-5 w-5" />
                <span className="font-medium">No app download required</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Integration Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <h2 className="text-3xl font-bold">
                Integration with Marketing Solutions
              </h2>
              <p className="text-lg text-muted-foreground">
                With Zaan, link offers, packages and daily deals to the online
                booking page directly and in an updated manner, to encourage
                your customers to book more services and get to know your
                services more closely.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>
                    Promote special offers directly on your booking page
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>
                    Showcase package deals to increase average booking value
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>
                    Feature daily deals to drive bookings during slower periods
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl order-1 md:order-2">
              <Image
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
                alt="Marketing integration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            Make your salon keep pace with the era of development with Zaan
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Try the online booking system from Zaan... and give your clients
            more convenience, and your salon to get rid of the chaos.
          </p>
          <Button size="lg" asChild>
            <Link href="/register">Start Your Free Trial Today</Link>
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
}
