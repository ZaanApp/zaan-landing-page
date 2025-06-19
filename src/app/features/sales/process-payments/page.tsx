import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CreditCard,
  ShieldCheck,
  Receipt,
  Wallet,
  Calculator,
  BarChart,
} from "lucide-react";

export default function ProcessPaymentsPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-palette-teal/20 to-background">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col items-center text-center">
            <div className="inline-block p-3 rounded-full bg-palette-teal/20 mb-6">
              <CreditCard className="w-8 h-8 text-palette-teal" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Process Payments in Zaan
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mb-10">
              Make every payment experience easy and secure for you and your
              customers!
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
          <p className="text-xl leading-relaxed text-muted-foreground mb-8">
            With Zaan, every payment in your salon is accurately calculated,
            whether paid in cash or online. Enjoy an easy, secure accounting
            experience with clear records for precise financial management.
            Flexible payment options ensure your customers' convenience and
            satisfaction—all managed from one intuitive control panel!
          </p>
          <div className="flex justify-center">
            <div className="h-1 w-20 bg-gradient-to-r from-palette-teal to-palette-lavender rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-palette-lightBg">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Advantages of Processing Payments in Zaan
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Say goodbye to accounting chaos and welcome precise financial
              organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-white to-palette-mint/30 rounded-lg p-6 shadow-md border border-palette-mint/20">
              <div className="inline-flex items-center justify-center p-2 bg-palette-teal/10 rounded-lg mb-4">
                <Calculator className="h-6 w-6 text-palette-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Integrated Cashier System
              </h3>
              <p className="text-muted-foreground">
                Enjoy a fast, intuitive payment interface designed specifically
                for salons. Automatically calculate service totals, apply
                discounts, and manage tax settings with ease.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-white to-palette-lavender/30 rounded-lg p-6 shadow-md border border-palette-lavender/20">
              <div className="inline-flex items-center justify-center p-2 bg-palette-teal/10 rounded-lg mb-4">
                <Wallet className="h-6 w-6 text-palette-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Multiple Payment Options
              </h3>
              <p className="text-muted-foreground">
                Support diverse payment methods including cash, credit cards,
                digital wallets, and bank transfers. Combine multiple payment
                methods on a single invoice for maximum flexibility.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-white to-palette-beige/30 rounded-lg p-6 shadow-md border border-palette-beige/20">
              <div className="inline-flex items-center justify-center p-2 bg-palette-teal/10 rounded-lg mb-4">
                <CreditCard className="h-6 w-6 text-palette-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Secure Online Reservations
              </h3>
              <p className="text-muted-foreground">
                Ensure booking credibility with deposit payments or full
                pre-payments. Customize your payment collection timing to suit
                your business model.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-white to-palette-mint/30 rounded-lg p-6 shadow-md border border-palette-mint/20">
              <div className="inline-flex items-center justify-center p-2 bg-palette-teal/10 rounded-lg mb-4">
                <ArrowRight className="h-6 w-6 text-palette-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Service-Linked Payments
              </h3>
              <p className="text-muted-foreground">
                Every transaction is automatically recorded in the customer's
                profile and linked to specific services, providing complete
                reference for inquiries or refunds.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gradient-to-br from-white to-palette-lavender/30 rounded-lg p-6 shadow-md border border-palette-lavender/20">
              <div className="inline-flex items-center justify-center p-2 bg-palette-teal/10 rounded-lg mb-4">
                <Receipt className="h-6 w-6 text-palette-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Detailed Tax Invoices
              </h3>
              <p className="text-muted-foreground">
                Generate electronic tax invoices with comprehensive details that
                comply with tax authority requirements, making compliance simple
                and straightforward.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gradient-to-br from-white to-palette-beige/30 rounded-lg p-6 shadow-md border border-palette-beige/20">
              <div className="inline-flex items-center justify-center p-2 bg-palette-teal/10 rounded-lg mb-4">
                <BarChart className="h-6 w-6 text-palette-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Comprehensive Financial Reports
              </h3>
              <p className="text-muted-foreground">
                Access detailed reports of all financial transactions on daily,
                weekly, or monthly basis, or create custom date ranges for
                precise revenue tracking.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* First Alternating Section - Image Right */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="inline-flex items-center justify-center p-2 bg-palette-teal/10 rounded-lg mb-2">
                <ShieldCheck className="h-6 w-6 text-palette-teal" />
              </div>
              <h2 className="text-3xl font-bold">Secure Payment Processing</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Protect your business and customers with our enterprise-grade
                security protocols. Every transaction in Zaan is encrypted and
                processed through secure channels that comply with the highest
                industry standards.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-palette-teal/20 p-1 rounded-full">
                    <svg
                      className="h-4 w-4 text-palette-teal"
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
                  <span>PCI DSS compliant payment processing</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-palette-teal/20 p-1 rounded-full">
                    <svg
                      className="h-4 w-4 text-palette-teal"
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
                  <span>End-to-end encryption for all transactions</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-palette-teal/20 p-1 rounded-full">
                    <svg
                      className="h-4 w-4 text-palette-teal"
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
                  <span>Fraud detection and prevention systems</span>
                </li>
              </ul>

              <Button variant="outline" className="mt-2" asChild>
                <Link href="/features/sales">Learn More</Link>
              </Button>
            </div>

            <div className="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-lg border border-palette-mint/20">
              <Image
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
                alt="Secure payment processing"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Second Alternating Section - Image Left */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-palette-lightBg/50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-lg border border-palette-lavender/20">
              <Image
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80"
                alt="Streamlined checkout experience"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="w-full lg:w-1/2 space-y-6">
              <div className="inline-flex items-center justify-center p-2 bg-palette-teal/10 rounded-lg mb-2">
                <ArrowRight className="h-6 w-6 text-palette-teal" />
              </div>
              <h2 className="text-3xl font-bold">
                Streamlined Checkout Experience
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Reduce wait times and enhance customer satisfaction with our
                intuitive, fast checkout process. Zaan's payment system is
                designed to make transactions quick and hassle-free for both
                your staff and clients.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-palette-teal/20 p-1 rounded-full">
                    <svg
                      className="h-4 w-4 text-palette-teal"
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
                  <span>One-click payment processing</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-palette-teal/20 p-1 rounded-full">
                    <svg
                      className="h-4 w-4 text-palette-teal"
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
                  <span>Saved payment methods for returning customers</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-palette-teal/20 p-1 rounded-full">
                    <svg
                      className="h-4 w-4 text-palette-teal"
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
                  <span>Mobile-friendly payment interface</span>
                </li>
              </ul>

              <Button variant="outline" className="mt-2" asChild>
                <Link href="/features/sales">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Third Alternating Section - Image Right */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="inline-flex items-center justify-center p-2 bg-palette-teal/10 rounded-lg mb-2">
                <Receipt className="h-6 w-6 text-palette-teal" />
              </div>
              <h2 className="text-3xl font-bold">
                Comprehensive Financial Records
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Keep track of every transaction with detailed financial records
                that make accounting and tax compliance effortless. Zaan
                automatically organizes your payment data into clear, accessible
                reports that provide valuable insights into your business
                performance.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-palette-teal/20 p-1 rounded-full">
                    <svg
                      className="h-4 w-4 text-palette-teal"
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
                    Automated transaction recording and categorization
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-palette-teal/20 p-1 rounded-full">
                    <svg
                      className="h-4 w-4 text-palette-teal"
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
                  <span>Customizable financial reports and dashboards</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-palette-teal/20 p-1 rounded-full">
                    <svg
                      className="h-4 w-4 text-palette-teal"
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
                    Export options for accounting software integration
                  </span>
                </li>
              </ul>

              <Button variant="outline" className="mt-2" asChild>
                <Link href="/features/finance/financial-reports">
                  Learn More
                </Link>
              </Button>
            </div>

            <div className="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-lg border border-palette-beige/20">
              <Image
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80"
                alt="Financial records and reporting"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-palette-lightBg to-palette-teal/10">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-block p-3 rounded-full bg-palette-teal/20 mb-6">
            <Wallet className="w-8 h-8 text-palette-teal" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Payment Experience?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Join thousands of salons already using Zaan to streamline their
            payment processes, improve customer satisfaction, and boost their
            financial management.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="teal" className="text-lg px-8" asChild>
              <Link href="/register">Start Your Free 14-Day Trial</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg" asChild>
              <Link href="/features/sales">Explore More Sales Features</Link>
            </Button>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            No credit card required. Cancel anytime.
          </p>
        </div>
      </section>
    </div>
  );
}
