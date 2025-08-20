"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AlternatingSections() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* First Alternating Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
          <div className="lg:w-1/2">
            <Image
              src="/PaymentVoucher/image1.png"
              width={600}
              height={400}
              alt="Financial document management"
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
          <div className="lg:w-1/2">
            <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
              <span className="text-primary font-medium">
                Streamlined Process
              </span>
            </div>
            <h2 className="text-3xl font-bold mb-6">
              Simplified Financial Documentation
            </h2>
            <p className="text-muted-foreground mb-6">
              Our payment voucher system eliminates the complexity of financial
              documentation. Create, manage, and track payment vouchers with
              just a few clicks, ensuring accurate records for all your
              financial transactions.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <div className="mr-3 mt-1 bg-primary/20 p-1 rounded-full">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3334 4L6.00008 11.3333L2.66675 8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span>
                  One-click voucher generation for any transaction type
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 bg-primary/20 p-1 rounded-full">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3334 4L6.00008 11.3333L2.66675 8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span>Automatic categorization of expenses</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 bg-primary/20 p-1 rounded-full">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3334 4L6.00008 11.3333L2.66675 8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span>Secure digital storage with easy retrieval</span>
              </li>
            </ul>
            <Button variant="outline" asChild>
              <Link href="/features/finance/payment-vouchers/learn-more">
                Learn More
              </Link>
            </Button>
          </div>
        </div>

        {/* Second Alternating Section */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className="lg:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
              width={600}
              height={400}
              alt="Financial reporting"
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
          <div className="lg:w-1/2">
            <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
              <span className="text-primary font-medium">
                Enhanced Reporting
              </span>
            </div>
            <h2 className="text-3xl font-bold mb-6">
              Comprehensive Financial Insights
            </h2>
            <p className="text-muted-foreground mb-6">
              Transform your payment data into actionable insights with our
              advanced reporting tools. Track spending patterns, monitor cash
              flow, and make informed financial decisions with real-time
              analytics and customizable reports.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <div className="mr-3 mt-1 bg-primary/20 p-1 rounded-full">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3334 4L6.00008 11.3333L2.66675 8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span>Detailed expense breakdowns by category</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 bg-primary/20 p-1 rounded-full">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3334 4L6.00008 11.3333L2.66675 8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span>Customizable financial reports</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 bg-primary/20 p-1 rounded-full">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3334 4L6.00008 11.3333L2.66675 8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span>Export options for accounting integration</span>
              </li>
            </ul>
            <Button variant="outline" asChild>
              <Link href="/features/finance/payment-vouchers/reporting">
                Explore Reports
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
