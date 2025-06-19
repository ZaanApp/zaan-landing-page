import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  FileText,
  Mail,
  Download,
  CheckCircle,
  Search,
  BarChart,
} from "lucide-react";

export default function InvoicesReceiptsPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col items-center text-center">
            <div className="inline-block p-3 rounded-full bg-primary/10 mb-6">
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Invoices & Receipts
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mb-10">
              Create professional invoices and receipts that reflect your brand
              while maintaining accurate financial records for your business.
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
            Elevate Your Client Experience
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Every service provided and product purchased is instantly documented
            in a professionally designed electronic invoice through the Zaan
            system. Featuring your salon's branding and comprehensive payment
            details, our invoices represent more than just a receipt—they're an
            integral part of your premium customer experience.
          </p>
          <p className="text-lg text-muted-foreground">
            With Zaan's invoicing system, you'll deliver a seamless end-to-end
            experience that reflects your salon's commitment to quality and
            professionalism.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need for professional invoicing and receipts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Instant Electronic Invoices
              </h3>
              <p className="text-muted-foreground">
                Automatically generate and deliver invoices upon payment
                completion, whether online or through Zaan POS, with options for
                WhatsApp delivery or physical printing.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Professional Branded Design
              </h3>
              <p className="text-muted-foreground">
                Create invoices featuring your salon's name, logo, and brand
                identity with a clean, professional format that includes QR
                codes for digital verification.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Tax Compliance Support
              </h3>
              <p className="text-muted-foreground">
                Issue tax-compliant electronic invoices that meet all government
                requirements, including ZATCA standards, with automatic VAT
                calculation based on your registered tax number.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
                <ArrowRight className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Detailed Service Breakdown
              </h3>
              <p className="text-muted-foreground">
                Include comprehensive details on every invoice: service/product
                name, price, staff member, date and time, payment method, and
                any applicable discounts or taxes.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gradient-to-br from-white to-palette-lavender/30 rounded-lg p-6 shadow-md border border-palette-lavender/20">
              <div className="inline-flex items-center justify-center p-2 bg-palette-teal/10 rounded-lg mb-4">
                <Download className="h-6 w-6 text-palette-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Automatic Notifications
              </h3>
              <p className="text-muted-foreground">
                Send digital copies of invoices automatically to customers,
                reducing paper waste while enhancing your salon's modern image
                and environmental responsibility.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gradient-to-br from-white to-palette-beige/30 rounded-lg p-6 shadow-md border border-palette-beige/20">
              <div className="inline-flex items-center justify-center p-2 bg-palette-teal/10 rounded-lg mb-4">
                <Search className="h-6 w-6 text-palette-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Searchable Invoice History
              </h3>
              <p className="text-muted-foreground">
                Access your complete invoice history with powerful search
                capabilities by date, customer name, invoice number, or status
                (completed or returned).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Alternating Sections */}
      {/* Section 1 */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80"
                alt="Financial reporting dashboard"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Comprehensive Financial Reporting
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Transform your invoices into powerful business insights with
                Zaan's integrated financial reporting system. Every transaction
                is automatically linked to detailed reports that help you track
                revenue, identify top-selling services, and analyze business
                performance.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>
                    Generate revenue reports by service, staff, or time period
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Track invoice volume and payment methods</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Identify trends to inform business decisions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6">
                Seamless Digital Delivery
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Enhance your salon's modern image while reducing environmental
                impact with Zaan's digital invoice delivery. Send professional
                receipts instantly via WhatsApp or email, providing convenience
                for your clients and efficiency for your business.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Instant delivery to clients' preferred channels</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Reduce paper waste and printing costs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>
                    Maintain digital records for both you and your clients
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden order-1 lg:order-2">
              <Image
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80"
                alt="Digital invoice delivery"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
                alt="Tax compliance and reporting"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Tax Compliance Made Simple
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Navigate tax regulations with confidence using Zaan's
                tax-compliant invoicing system. Our platform automatically
                generates invoices that meet all government requirements,
                including ZATCA standards, while calculating VAT based on your
                registered tax information.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Compliant with latest tax regulations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Automatic VAT calculation and inclusion</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>QR codes for digital verification</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            Transform Your Salon's Invoicing Experience
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Make your billing system part of an integrated professional
            experience that enhances client trust and streamlines your financial
            management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/register">Start Your Free Trial Today</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/features/sales">Explore More Sales Features</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
