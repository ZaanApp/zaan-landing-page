import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AlternatingSections() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* First Section - Left Image, Right Text */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
          <div className="w-full lg:w-1/2 relative">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80"
                alt="Team performance tracking dashboard"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary/10 w-24 h-24 rounded-full hidden lg:block" />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6">
              Performance-Based Rewards
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Motivate your team with transparent, performance-based commission
              structures that reward excellence and drive business growth.
              Zaan's intelligent system tracks individual contributions and
              automatically calculates fair compensation.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <div className="mr-3 mt-1 bg-primary/20 p-1 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span>
                  Customizable commission tiers based on sales targets
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 bg-primary/20 p-1 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span>Real-time performance tracking and visualization</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 bg-primary/20 p-1 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span>Automated bonus calculations for top performers</span>
              </li>
            </ul>
            <Button variant="outline" asChild>
              <Link href="/features/finance/salary-commission/performance">
                Learn More
              </Link>
            </Button>
          </div>
        </div>

        {/* Second Section - Right Image, Left Text */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className="w-full lg:w-1/2 relative">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
                alt="Automated payroll processing"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary/10 w-24 h-24 rounded-full hidden lg:block" />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6">
              Streamlined Payroll Processing
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Say goodbye to manual calculations and paperwork. Zaan's automated
              payroll system handles everything from basic salaries to complex
              commission structures, saving you time and eliminating errors.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <div className="mr-3 mt-1 bg-primary/20 p-1 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span>Automated tax calculations and deductions</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 bg-primary/20 p-1 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span>Direct deposit and payment processing</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 bg-primary/20 p-1 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span>Compliance with local labor regulations</span>
              </li>
            </ul>
            <Button variant="outline" asChild>
              <Link href="/features/finance/salary-commission/payroll">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
