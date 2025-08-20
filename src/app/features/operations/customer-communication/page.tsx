import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  MessageSquare,
  Bell,
  CheckCircle,
  RefreshCw,
  Share2,
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";

export default function CustomerCommunicationPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col items-center text-center">
            <div className="inline-block p-3 rounded-full bg-primary/10 mb-6">
              <MessageSquare className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Customer Communication
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mb-10">
              Build stronger, lasting relationships with your clients through
              seamless, personalized communication at every touchpoint.
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
            The Secret to Client Loyalty
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            In today's competitive beauty industry, exceptional service alone
            isn't enough. Maintaining consistent communication with your clients
            keeps your salon top-of-mind and builds lasting relationships.
            Zaan's professional communication tools connect with clients from
            their first booking through post-visit follow-ups, ensuring you're
            always just a message away.
          </p>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why Choose Zaan?
          </h2>

          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-2/3">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-lg">
                    Designed based on in-depth studies of the beauty sector
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-lg">
                    Addresses the specific obstacles faced by salon owners
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-lg">
                    Enables efficient and effective management of all business
                    operations
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-lg">
                    Contributes to increased sales and business growth
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-lg">
                    Helps beauty centers thrive by providing innovative
                    solutions
                  </span>
                </li>
              </ul>
              <Button className="mt-8" asChild>
                <Link href="/register">Experience the Difference</Link>
              </Button>
            </div>

            <div className="md:w-1/3 bg-card p-6 rounded-xl shadow-md border border-primary/20">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-3">85%</div>
                <p className="text-lg">
                  of salon owners and their employees have more time to develop
                  their business with Zaan
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Communication Tools That Drive Results
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
                <Bell className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Automated Appointment Messages
              </h3>
              <p className="text-muted-foreground">
                Send automatic booking confirmations and timely reminders to
                reduce no-shows and demonstrate your attention to detail.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Personalized Offer Notifications
              </h3>
              <p className="text-muted-foreground">
                Target clients with tailored promotions and special discounts
                through their preferred communication channels.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Post-Visit Follow-ups
              </h3>
              <p className="text-muted-foreground">
                Automatically send thank you messages and review requests to
                gather valuable feedback and reinforce your professionalism.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
                <Share2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Multi-Channel Support
              </h3>
              <p className="text-muted-foreground">
                Reach clients via SMS, WhatsApp, or email to ensure your
                messages are delivered through their preferred channels.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
                <RefreshCw className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Automated Workflows
              </h3>
              <p className="text-muted-foreground">
                Create communication sequences that trigger based on client
                actions or milestones to maintain engagement without manual
                effort.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">SMS Marketing</h3>
              <p className="text-muted-foreground">
                Send targeted text campaigns with high open rates to promote
                seasonal offers, new services, or special events.
              </p>
            </div>

            {/* Feature 7 */}
            <div className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                WhatsApp Integration
              </h3>
              <p className="text-muted-foreground">
                Connect with clients on their preferred messaging platform for
                higher engagement and more personal interactions.
              </p>
            </div>

            {/* Feature 8 */}
            <div className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Client Feedback System
              </h3>
              <p className="text-muted-foreground">
                Collect and analyze client reviews to improve services and
                showcase positive testimonials to attract new customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Alternating Sections */}
      {/* Section 1 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6">
                Automated Appointment Messaging
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Never let a client forget their appointment again. Zaan's
                automated messaging system sends confirmation messages for every
                new booking and customizable reminders before appointments.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Reduce no-show rates by up to 30%</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Customize timing and content of reminders</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Show clients you value their time</span>
                </li>
              </ul>
              <Button className="mt-8" asChild>
                <Link href="/register">Try It Free</Link>
              </Button>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/Customer-Communication images/Customer-Communication-3.png"
                  alt="Automated messaging dashboard"
                  width={600}
                  height={400}  
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/Customer-Communication images/Customer-Communication-2.png"
                  alt="Personalized marketing campaigns"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">
                Targeted Marketing Campaigns
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Turn occasional visitors into loyal clients with personalized
                offers and promotions. Zaan's marketing tools help you create
                and distribute targeted campaigns that drive results.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>
                    Segment clients based on visit history and preferences
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>
                    Create time-sensitive offers to drive immediate bookings
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>
                    Track campaign performance with detailed analytics
                  </span>
                </li>
              </ul>
              <Button className="mt-8" asChild>
                <Link href="/register">Start Marketing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6">Post-Visit Engagement</h2>
              <p className="text-lg text-muted-foreground mb-6">
                The client experience doesn't end when they leave your salon.
                Zaan's post-visit communication tools help you gather feedback,
                encourage reviews, and keep clients coming back.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>
                    Automatically send thank you messages after appointments
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>
                    Request and collect reviews to build your online reputation
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>
                    Follow up with personalized product recommendations
                  </span>
                </li>
              </ul>
              <Button className="mt-8" asChild>
                <Link href="/register">Enhance Client Relationships</Link>
              </Button>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/Customer-Communication images/Customer-Communication-1.png"
                  alt="Client feedback and reviews"
                  width={700}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 p-8 bg-card rounded-xl shadow-lg border bg-gradient-to-r from-primary/5 to-primary/10">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold mb-4">
                Make Every Client Feel Valued
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                With Zaan's comprehensive communication tools, staying connected
                with your clients has never been easier or more effective. Start
                building stronger relationships today.
              </p>
              <Button size="lg" className="gap-2" asChild>
                <Link href="/register">
                  Start Your Free Trial <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="lg:w-1/3 flex justify-center">
              <div className="relative w-64 h-64 flex items-center justify-center">
                <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse"></div>
                <MessageSquare className="w-24 h-24 text-primary relative z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
