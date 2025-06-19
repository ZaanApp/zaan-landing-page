import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  FileText,
  Calculator,
  CheckCircle,
  BarChart,
  Clock,
  Shield,
} from "lucide-react";

export default function TaxManagementPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-palette-teal/20 to-background">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col items-center text-center">
            <div className="inline-block p-3 rounded-full bg-palette-teal/20 mb-6">
              <Calculator className="w-8 h-8 text-palette-teal" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Tax Management in Zaan
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mb-10">
              Say goodbye to tax complexities and hello to automated compliance
              that saves time and eliminates errors.
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
            Whether you operate a small salon or manage multiple branches, Zaan
            simplifies tax compliance with automated calculations and reporting
            that align with local regulations. Our system handles all the
            complexities, allowing you to focus on growing your business without
            worrying about tax compliance issues.
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
              Advantages of Tax Management in Zaan
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Streamline your tax processes with powerful automation and
              compliance features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-white to-palette-mint/30 rounded-lg p-6 shadow-md border border-palette-mint/20">
              <div className="inline-flex items-center justify-center p-2 bg-palette-teal/10 rounded-lg mb-4">
                <Shield className="h-6 w-6 text-palette-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Full Compliance with Tax Authority Requirements
              </h3>
              <p className="text-muted-foreground">
                Zaan is designed to comply with all electronic invoicing systems
                approved by the Zakat and Income Authority in Saudi Arabia. Our
                system is continuously updated to align with any changes in
                official laws and regulations.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-white to-palette-lavender/30 rounded-lg p-6 shadow-md border border-palette-lavender/20">
              <div className="inline-flex items-center justify-center p-2 bg-palette-teal/10 rounded-lg mb-4">
                <FileText className="h-6 w-6 text-palette-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Electronic Tax Invoices with QR Codes
              </h3>
              <p className="text-muted-foreground">
                Every invoice generated through Zaan includes your
                establishment's tax number, VAT rate, and a scannable QR code
                that makes it easy to verify invoice information and ensures
                ZATCA compliance.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-white to-palette-beige/30 rounded-lg p-6 shadow-md border border-palette-beige/20">
              <div className="inline-flex items-center justify-center p-2 bg-palette-teal/10 rounded-lg mb-4">
                <Calculator className="h-6 w-6 text-palette-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Automated Tax Rate Calculations
              </h3>
              <p className="text-muted-foreground">
                Set tax rates for each service or product just once, and Zaan
                automatically applies the correct calculations for every sale or
                reservation, eliminating manual recalculations and potential
                errors.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-white to-palette-mint/30 rounded-lg p-6 shadow-md border border-palette-mint/20">
              <div className="inline-flex items-center justify-center p-2 bg-palette-teal/10 rounded-lg mb-4">
                <BarChart className="h-6 w-6 text-palette-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Comprehensive Tax Reporting
              </h3>
              <p className="text-muted-foreground">
                Access detailed, exportable tax reports including VAT reports
                for revenues and expenses. Easily specify your preferred time
                period (monthly, quarterly, or yearly) and generate reports with
                a single click.
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
                <Clock className="h-6 w-6 text-palette-teal" />
              </div>
              <h2 className="text-3xl font-bold">
                Save Time and Reduce Errors
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Zaan's automated tax system eliminates the need for manual
                calculations, significantly reducing the possibility of human
                error while saving valuable time for your team and accountants.
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
                  <span>Automatic tax calculations on every transaction</span>
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
                    Eliminate manual data entry and calculation errors
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
                  <span>Free up staff time for more valuable activities</span>
                </li>
              </ul>

              <Button variant="outline" className="mt-2" asChild>
                <Link href="/features/sales">Learn More</Link>
              </Button>
            </div>

            <div className="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-lg border border-palette-mint/20">
              <Image
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80"
                alt="Automated tax calculations"
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
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
                alt="Integrated tax records"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="w-full lg:w-1/2 space-y-6">
              <div className="inline-flex items-center justify-center p-2 bg-palette-teal/10 rounded-lg mb-2">
                <FileText className="h-6 w-6 text-palette-teal" />
              </div>
              <h2 className="text-3xl font-bold">
                Integrated Tax Records & Reporting
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Zaan maintains a comprehensive record of all accounting and tax
                operations, allowing you to access any invoice or report within
                seconds. This organized system proves invaluable during internal
                reviews or regulatory authority audits.
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
                  <span>Instant access to historical tax records</span>
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
                  <span>Customizable reporting periods for business needs</span>
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
                  <span>Export-ready reports for accounting and auditing</span>
                </li>
              </ul>

              <Button variant="outline" className="mt-2" asChild>
                <Link href="/features/finance/financial-reports">
                  View Reports
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-palette-lightBg to-palette-teal/10">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-block p-3 rounded-full bg-palette-teal/20 mb-6">
            <Shield className="w-8 h-8 text-palette-teal" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Protect Your Business from Tax Complications
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Let Zaan handle all your financial procedures from tax calculations
            to invoice generation, so you can focus more on growing your
            business and serving your clients.
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
