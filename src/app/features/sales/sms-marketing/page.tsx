import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  MessageSquare,
  Bell,
  Smartphone,
  BarChart,
  Clock,
  Users,
  Link as LinkIcon,
  ThumbsUp,
  Zap,
  UserCheck,
} from "lucide-react";
import Image from "next/image";

export default function SmsMarketingPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col items-center text-center">
            <div className="inline-block p-3 rounded-full bg-primary/10 mb-6">
              <MessageSquare className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              SMS Marketing in Zaan
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mb-10">
              A short message to your client from Zaan, but its impact is great!
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
          <p className="text-xl leading-relaxed text-muted-foreground">
            Zaan gives you a powerful and fast marketing tool that makes you
            always present in your customer's mind. Whether you're looking to
            promote a specific offer or daily deal, or to remind your customer
            of their appointment or number of points in the loyalty program, or
            to remind your customers who have stopped booking. A short text
            message will be a quick and effective tool to reach your customers
            and build new bridges of communication with them.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Advantages of SMS Marketing in Zaan
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Powerful tools to create and manage effective SMS campaigns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 - Blue gradient flowing right */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-lg p-6 shadow-sm border">
              <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-lg mb-4">
                <Bell className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Instant and Guaranteed Access
              </h3>
              <p className="text-muted-foreground">
                90% of text messages are opened within the first 3 minutes.
                Ensure your message reaches every target customer instantly.
              </p>
            </div>

            {/* Feature 2 - Teal-emerald gradient flowing bottom-left */}
            <div className="bg-gradient-to-bl from-teal-50 to-emerald-100 rounded-lg p-6 shadow-sm border">
              <div className="inline-flex items-center justify-center p-2 bg-teal-100 rounded-lg mb-4">
                <Users className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Customized Marketing Campaigns
              </h3>
              <p className="text-muted-foreground">
                Filter customers by preferences, visit frequency, or last
                appointment date to create personalized campaigns.
              </p>
            </div>

            {/* Feature 3 - Purple-violet gradient flowing top-right */}
            <div className="bg-gradient-to-tr from-purple-50 to-violet-100 rounded-lg p-6 shadow-sm border">
              <div className="inline-flex items-center justify-center p-2 bg-purple-100 rounded-lg mb-4">
                <LinkIcon className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Direct Link to Bookings
              </h3>
              <p className="text-muted-foreground">
                Include online booking links in every message, making it easy to
                convert interest into immediate reservations.
              </p>
            </div>

            {/* Feature 4 - Amber-orange gradient flowing top-left */}
            <div className="bg-gradient-to-tl from-amber-50 to-orange-100 rounded-lg p-6 shadow-sm border">
              <div className="inline-flex items-center justify-center p-2 bg-amber-100 rounded-lg mb-4">
                <Clock className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Automatic Scheduling
              </h3>
              <p className="text-muted-foreground">
                Schedule messages to send automatically at optimal times,
                aligning with your campaign timing or peak engagement hours.
              </p>
            </div>

            {/* Feature 5 - Cyan-sky gradient flowing bottom-right */}
            <div className="bg-gradient-to-br from-cyan-50 to-sky-100 rounded-lg p-6 shadow-sm border">
              <div className="inline-flex items-center justify-center p-2 bg-cyan-100 rounded-lg mb-4">
                <ThumbsUp className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Follow-up Messages</h3>
              <p className="text-muted-foreground">
                Automatically send thank you messages, request feedback, or
                suggest complementary services based on recent appointments.
              </p>
            </div>

            {/* Feature 6 - Rose-pink gradient flowing left */}
            <div className="bg-gradient-to-l from-rose-50 to-pink-100 rounded-lg p-6 shadow-sm border">
              <div className="inline-flex items-center justify-center p-2 bg-rose-100 rounded-lg mb-4">
                <BarChart className="h-6 w-6 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Accurate Campaign Reports
              </h3>
              <p className="text-muted-foreground">
                Track message delivery, link clicks, and conversion rates with
                detailed reports that help you measure campaign success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Drive Immediate Action Section - Image on Left */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
                alt="Customer checking SMS notification"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-lg mb-4">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold mb-6">
                Drive Immediate Action
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                SMS marketing delivers unparalleled engagement rates with 98%
                open rates and 45% response rates. Send time-sensitive
                promotions, flash sales, and limited-time offers directly to
                your customers' phones and see immediate results.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 rounded-full bg-blue-100 p-1">
                    <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  </div>
                  <span>
                    Instantly notify customers about last-minute appointment
                    openings
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 rounded-full bg-blue-100 p-1">
                    <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  </div>
                  <span>
                    Promote flash sales with urgency-driving countdown timers
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 rounded-full bg-blue-100 p-1">
                    <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  </div>
                  <span>
                    Include direct booking links for one-tap conversion
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Personalized Customer Journeys Section - Image on Right */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center justify-center p-2 bg-purple-100 rounded-lg mb-4">
                <UserCheck className="h-6 w-6 text-purple-600" />
              </div>
              <h2 className="text-3xl font-bold mb-6">
                Personalized Customer Journeys
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Create targeted SMS campaigns based on customer behavior,
                preferences, and history. Zaan's powerful segmentation tools
                allow you to send the right message to the right customer at
                exactly the right time.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 rounded-full bg-purple-100 p-1">
                    <div className="h-2 w-2 rounded-full bg-purple-600"></div>
                  </div>
                  <span>
                    Segment customers by visit frequency, services used, or
                    spending habits
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 rounded-full bg-purple-100 p-1">
                    <div className="h-2 w-2 rounded-full bg-purple-600"></div>
                  </div>
                  <span>
                    Send personalized birthday offers and loyalty milestones
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 rounded-full bg-purple-100 p-1">
                    <div className="h-2 w-2 rounded-full bg-purple-600"></div>
                  </div>
                  <span>
                    Re-engage dormant customers with personalized win-back
                    campaigns
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg order-1 lg:order-2">
              <Image
                src="/SMSMarketing/image1.png"
                alt="Personalized customer journey"
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
            Would you like to draw your customers' attention to you again?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            With Zaan, identify your target customers, add the text of the
            message, choose the appropriate timing, and leave the rest to the
            system.
          </p>
          <Button size="lg" asChild>
            <Link href="/register">Start Your Free Trial Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
