import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  MessageCircle,
  Clock,
  Users,
  BarChart,
  Zap,
  Shield,
} from "lucide-react";
import Image from "next/image";
export default function WhatsappIntegrationPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col items-center text-center">
            <div className="inline-block p-3 rounded-full bg-primary/10 mb-6">
              <MessageCircle className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              WhatsApp Business Integration
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mb-10">
              Transform your salon's communication with clients through our
              seamless WhatsApp Business integration - where every message
              drives growth.
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
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col items-center gap-8 mb-10">
            <div className="w-full text-center">
              <h2 className="text-3xl font-bold mb-6">
                Revolutionize Your Client Communication
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                In today's fast-paced world, exceptional service extends beyond
                your salon chair. With Zaan's WhatsApp integration, transform
                every client interaction into an opportunity for growth, from
                booking confirmations to personalized marketing campaigns.
              </p>
              <p className="text-lg text-muted-foreground">
                Stop running your salon with outdated communication methods.
                Join the thousands of beauty professionals who have elevated
                their client experience and boosted their revenue through the
                power of WhatsApp in the Zaan system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center gap-8">
            <div className="w-full text-center">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
                <MessageCircle className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm font-medium text-primary">
                  Real-time Communication
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-6">
                Connect With Clients Where They Already Are
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                With over 2 billion users worldwide, WhatsApp is where your
                clients already spend their time. Zaan's integration lets you
                meet them there with professional, branded communications that
                feel personal and drive results for your salon business.
              </p>
              <ul className="space-y-3 text-left max-w-2xl mx-auto">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 bg-primary/20 p-1 rounded-full">
                    <svg
                      className="h-4 w-4 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span>98% open rate compared to 20% for emails</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 bg-primary/20 p-1 rounded-full">
                    <svg
                      className="h-4 w-4 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span>40% higher response rate than traditional SMS</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 bg-primary/20 p-1 rounded-full">
                    <svg
                      className="h-4 w-4 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span>
                    Seamless integration with your existing client database
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-tr from-background to-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Powerful WhatsApp Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Unlock the full potential of WhatsApp communication with these
              powerful features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Card 1 - Blue gradient */}
            <div className="rounded-xl p-6 shadow-sm bg-gradient-to-r from-blue-50 to-indigo-100 border border-blue-100">
              <div className="inline-flex items-center justify-center p-2 bg-white/80 rounded-lg mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Appointment Reminders
              </h3>
              <p className="text-muted-foreground">
                Reduce no-shows dramatically with automatic WhatsApp
                confirmations and timely reminders, allowing your team to focus
                on delivering exceptional service.
              </p>
            </div>

            {/* Feature Card 2 - Teal-emerald gradient */}
            <div className="rounded-xl p-6 shadow-sm bg-gradient-to-bl from-teal-50 to-emerald-100 border border-teal-100">
              <div className="inline-flex items-center justify-center p-2 bg-white/80 rounded-lg mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Team Communication</h3>
              <p className="text-muted-foreground">
                Connect instantly with your staff through WhatsApp for booking
                alerts, business updates, and coordinated operations across all
                salon locations.
              </p>
            </div>

            {/* Feature Card 3 - Purple-violet gradient */}
            <div className="rounded-xl p-6 shadow-sm bg-gradient-to-tr from-purple-50 to-violet-100 border border-purple-100">
              <div className="inline-flex items-center justify-center p-2 bg-white/80 rounded-lg mb-4">
                <BarChart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Marketing Campaigns
              </h3>
              <p className="text-muted-foreground">
                Design targeted promotions based on client history and
                preferences, scheduled to arrive at optimal times for maximum
                engagement and conversion.
              </p>
            </div>

            {/* Feature Card 4 - Amber-orange gradient */}
            <div className="rounded-xl p-6 shadow-sm bg-gradient-to-tl from-amber-50 to-orange-100 border border-amber-100">
              <div className="inline-flex items-center justify-center p-2 bg-white/80 rounded-lg mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Digital Payments</h3>
              <p className="text-muted-foreground">
                Send invoices and service tickets directly via WhatsApp for a
                modern, convenient payment experience that reflects your salon's
                sophistication.
              </p>
            </div>

            {/* Feature Card 5 - Cyan-sky gradient */}
            <div className="rounded-xl p-6 shadow-sm bg-gradient-to-br from-cyan-50 to-sky-100 border border-cyan-100">
              <div className="inline-flex items-center justify-center p-2 bg-white/80 rounded-lg mb-4">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Client Feedback</h3>
              <p className="text-muted-foreground">
                Gather valuable insights through post-appointment follow-ups,
                helping you continuously improve your services and client
                satisfaction.
              </p>
            </div>

            {/* Feature Card 6 - Rose-pink gradient */}
            <div className="rounded-xl p-6 shadow-sm bg-gradient-to-l from-rose-50 to-pink-100 border border-rose-100">
              <div className="inline-flex items-center justify-center p-2 bg-white/80 rounded-lg mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer Loyalty</h3>
              <p className="text-muted-foreground">
                Send birthday wishes and special occasion messages with
                personalized offers, strengthening client relationships and
                encouraging repeat bookings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Alternating Text Sections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* First Text Section */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
                <Users className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm font-medium text-primary">
                  Client Engagement
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-6">
                Personalized Client Experience at Scale
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                With Zaan's WhatsApp integration, you can deliver personalized
                service to hundreds of clients simultaneously. Send appointment
                confirmations, follow-ups, and special offers that feel
                individually crafted but are efficiently automated.
              </p>

              <ul className="space-y-3 text-left">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 bg-primary/20 p-1 rounded-full">
                    <svg
                      className="h-4 w-4 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span>Automated yet personalized client communications</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 bg-primary/20 p-1 rounded-full">
                    <svg
                      className="h-4 w-4 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span>Instant responses to common client inquiries</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 bg-primary/20 p-1 rounded-full">
                    <svg
                      className="h-4 w-4 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span>Seamless integration with your client database</span>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <Image
                  src="/images/whatsapp/whatsapp1.png"
                  alt="WhatsApp Client Engagement"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Second Text Section */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
                <BarChart className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm font-medium text-primary">
                  Business Growth
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-6">
                Measurable Impact on Your Bottom Line
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Track the direct impact of your WhatsApp communications on
                bookings, sales, and client retention. Our analytics dashboard
                gives you clear insights into which messages drive the most
                engagement and revenue.
              </p>

              <ul className="space-y-3 text-left">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 bg-primary/20 p-1 rounded-full">
                    <svg
                      className="h-4 w-4 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span>
                    Reduce no-shows by up to 60% with timely reminders
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 bg-primary/20 p-1 rounded-full">
                    <svg
                      className="h-4 w-4 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span>
                    Increase rebooking rates with strategic follow-ups
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 bg-primary/20 p-1 rounded-full">
                    <svg
                      className="h-4 w-4 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span>Detailed analytics on message performance and ROI</span>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative ">
                <Image
                  src="/images/whatsapp/whatsapp5.png"
                  alt="WhatsApp Business Growth Analytics"
                  width={1057}
                  height={649}
                  className="rounded-lg shadow-lg object-cover w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-palette-teal/10 to-palette-lavender/20">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-block p-3 rounded-full bg-primary/10 mb-6">
            <MessageCircle className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Client Communications?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            Join thousands of salon businesses already growing their revenue and
            client satisfaction with Zaan's WhatsApp integration.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="teal" className="text-lg px-8" asChild>
              <Link href="/register">Start Your Free 14-Day Trial</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg" asChild>
              <Link href="/contact">Schedule a Demo</Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            No credit card required. Cancel anytime.
          </p>
        </div>
      </section>
    </div>
  );
}
