import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  ClipboardCheck,
  BarChart2,
  MessageSquare,
  Award,
  Clock,
  UserCheck,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

export default function ServiceRecordsPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col items-center text-center">
            <div className="inline-block p-3 rounded-full bg-primary/10 mb-6">
              <ClipboardCheck className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Service Records in Zaan
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mb-10">
              With Zaan, there is no room for error. Every service provided is
              recorded with precision and detail!
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
            Comprehensive Service Tracking
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Because it is important for you to know the details and the extent
            of customer satisfaction with every service provided, Zaan gives you
            a detailed record of every service performed within the salon or
            through home services. Track the quality of work and build strong,
            long-lasting relationships with your clients through meticulous
            record-keeping.
          </p>
          <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/10">
            <p className="text-lg font-medium italic">
              "An accurate and up-to-date record helps you provide a more
              professional service! With Zaan, every service is recorded to
              provide the best possible experience for every customer."
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Advantages of Service Records in Zaan
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how our comprehensive service records system can
              transform your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
                <ClipboardCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Accurate Service Recording
              </h3>
              <p className="text-muted-foreground">
                Each service is automatically recorded in the customer's file
                with employee details, date, price, status, and other critical
                information for future reference.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
                <BarChart2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Quality Maintenance
              </h3>
              <p className="text-muted-foreground">
                When service is repeated for the same customer, employees can
                view previous session details, helping maintain consistent
                quality or improve based on feedback.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Inquiry Reference</h3>
              <p className="text-muted-foreground">
                Access a reliable reference for any customer inquiries or
                complaints, allowing you to review all service-related details
                exactly as they occurred.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Performance Evaluation
              </h3>
              <p className="text-muted-foreground">
                Monitor the quality of each employee's work and their commitment
                to providing services accurately and professionally to
                facilitate evaluation.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Historical Tracking
              </h3>
              <p className="text-muted-foreground">
                Access complete service history for any client, allowing you to
                track patterns, preferences, and service evolution over time.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
                <UserCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Client Relationship Management
              </h3>
              <p className="text-muted-foreground">
                Build stronger client relationships by remembering preferences,
                addressing concerns proactively, and personalizing future
                services.
              </p>
            </div>

            {/* Feature 7 */}
            <div className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Dispute Resolution</h3>
              <p className="text-muted-foreground">
                Quickly resolve any service disputes with accurate, timestamped
                records of all services provided, including special requests and
                modifications.
              </p>
            </div>

            {/* Feature 8 */}
            <div className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Business Intelligence
              </h3>
              <p className="text-muted-foreground">
                Gain valuable insights from service data to identify trends,
                optimize pricing, and develop new service offerings based on
                client preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* First Alternating Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6">
                Comprehensive Client History
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Zaan's service records provide a complete history of every
                client interaction, enabling your team to deliver personalized
                experiences that build loyalty and increase retention.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-1" />
                  <span>
                    Track every service, product, and stylist preference
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-1" />
                  <span>
                    Document special requests and service modifications
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-1" />
                  <span>
                    Record before and after photos for visual reference
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-1" />
                  <span>Access complete history from any device, anywhere</span>
                </li>
              </ul>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href="/register">Try It Free</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden order-1 lg:order-2">
              <Image
                src="/ServiceRecords/image2.png"
                alt="Client history and service records"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Second Alternating Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/ServiceRecords/image1.png"
                alt="Personalized marketing based on customer data"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Personalized Marketing Strategies
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Create customized marketing campaigns targeting specific
                customers based on their visit frequency, preferred services, or
                last appointment date. Zaan's detailed service records enable
                you to craft highly relevant promotions that drive results.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-1" />
                  <span>
                    Segment customers based on service history and preferences
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-1" />
                  <span>
                    Send targeted offers for services they're most likely to
                    book
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-1" />
                  <span>
                    Automate follow-up communications based on service history
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-1" />
                  <span>
                    Track campaign performance with detailed analytics
                  </span>
                </li>
              </ul>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href="/register">Start Marketing Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third Alternating Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6">
                Loyalty Program Integration
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                With Zaan's integrated loyalty program feature, you can track
                customer points, monitor offer redemptions, and create
                incentives that drive repeat visits and increase customer
                lifetime value.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-1" />
                  <span>
                    Automatically track loyalty points with each service
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-1" />
                  <span>
                    View complete history of rewards earned and redeemed
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-1" />
                  <span>
                    Create tiered loyalty programs based on visit frequency
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-1" />
                  <span>
                    Send automated notifications for available rewards
                  </span>
                </li>
              </ul>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href="/register">Build Customer Loyalty</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden order-1 lg:order-2">
              <Image
                src="/ServiceRecords/image3.png"
                alt="Loyalty program integration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/20 to-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transform Visitors into Loyal Customers
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Get started with Zaan's Service Records feature today and watch your
            customer satisfaction and loyalty increase with every visit.
            Comprehensive client profiles lead to exceptional experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/register">Start Your Free Trial</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/pricing">View Pricing Plans</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
