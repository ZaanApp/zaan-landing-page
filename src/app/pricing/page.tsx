"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Footer } from "@/components/layout/footer";
import { Check, AlertCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Draggable Employee Selector Component
function DraggableEmployeeSelector() {
  const [employees, setEmployees] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [showContactModal, setShowContactModal] = useState(false);
  const sliderRef = useRef(null);
  const trackRef = useRef<HTMLDivElement>(null);;
  const MAX_EMPLOYEES = 10;

  // Calculate total price with new pricing structure
  // First user: 99 riyals, each additional user: 29 riyals
  const totalPrice = employees === 1 ? 99 : 99 + (employees - 1) * 29;

  // Handle drag start
  const handleMouseDown = (e: MouseEvent) => {
    // Don't prevent default here as it can block interactions
    setIsDragging(true);
    setStartX(e.clientX - currentX);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  // Handle touch start for mobile
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    // Don't prevent default here as it can block all touch events
    setIsDragging(true);
    setStartX(e.touches[0].clientX - currentX);
    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("touchend", handleTouchEnd);
  };

  // Handle mouse movement during drag
  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const track = trackRef.current;
    if (!track) return;

    const trackWidth = track.getBoundingClientRect().width;
    const stepWidth = trackWidth / (MAX_EMPLOYEES - 1);

    let newX = e.clientX - startX;
    newX = Math.max(0, Math.min(newX, trackWidth));
    setCurrentX(newX);

    // Calculate employees based on position
    const newEmployees = Math.max(
      1,
      Math.min(MAX_EMPLOYEES, Math.round(newX / stepWidth) + 1),
    );
    setEmployees(newEmployees);
  };

  // Handle touch movement for mobile
  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault(); // Prevent scrolling while dragging
    const track = trackRef.current;
    if (!track) return;

    const trackWidth = track.getBoundingClientRect().width;
    const stepWidth = trackWidth / (MAX_EMPLOYEES - 1);

    let newX = e.touches[0].clientX - startX;
    newX = Math.max(0, Math.min(newX, trackWidth));
    setCurrentX(newX);

    // Calculate employees based on position
    const newEmployees = Math.max(
      1,
      Math.min(MAX_EMPLOYEES, Math.round(newX / stepWidth) + 1),
    );
    setEmployees(newEmployees);
  };

  // Handle drag end
  const handleMouseUp = () => {
    setIsDragging(false);
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  // Handle touch end for mobile
  const handleTouchEnd = () => {
    setIsDragging(false);
    document.removeEventListener("touchmove", handleTouchMove);
    document.removeEventListener("touchend", handleTouchEnd);
  };

  // Initialize slider position
  useEffect(() => {
    const track = trackRef.current;
    if (track) {
      const trackWidth = track.getBoundingClientRect().width;
      const stepWidth = trackWidth / (MAX_EMPLOYEES - 1);
      setCurrentX((employees - 1) * stepWidth);
    }

    // Add resize event listener to adjust slider position when window is resized
    const handleResize = () => {
      const currentTrack = trackRef.current;
      if (currentTrack) {
        const trackWidth = currentTrack.getBoundingClientRect().width;
        const stepWidth = trackWidth / (MAX_EMPLOYEES - 1);
        setCurrentX((employees - 1) * stepWidth);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [employees]);

  // Add keyboard support for accessibility
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      setEmployees((prev) => Math.min(prev + 1, MAX_EMPLOYEES));
    } else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      setEmployees((prev) => Math.max(prev - 1, 1));
    }
  };

  // Update position when employees change
  useEffect(() => {
    const track = trackRef.current;
    if (track) {
      const trackWidth = track.getBoundingClientRect().width;
      const stepWidth = trackWidth / (MAX_EMPLOYEES - 1);
      setCurrentX((employees - 1) * stepWidth);
    }
  }, [employees]);

  // Handle +10 button click
  const handleMoreThanTenClick = () => {
    setShowContactModal(true);
  };

  return (
    <div className="w-full px-4 py-6 bg-gray-50 rounded-lg border-2 border-palette-teal/20 shadow-sm">
    
      {/* Price Display */}
      <div className=" p-4 bg-muted/30 rounded-lg text-center">
        <p className="text-sm text-muted-foreground">Estimated Anualy Price</p>
        <div className="mt-1 text-4xl font-bold text-palette-darkTeal">
          2300 <Image src="/logo/riyalicon.png" alt="" width={20} height={20} className="inline" />
                 </div>
        <p className="mt-1 text-xs text-muted-foreground">
        One flat rate — unlimited users.
        </p>
      </div>

      {/* Enterprise Message - Shown when employees >= 10 or when 11+ is clicked */}
      {employees >= 10 && (
        <div className="mt-4 p-4 bg-palette-mint/30 rounded-lg text-center">
          <p className="text-sm font-medium text-palette-darkTeal">
            Enterprise Pricing Available
          </p>
          <p className="mt-1 text-sm">
            For businesses with more than 10 employees, we offer custom
            enterprise packages with volume discounts.
          </p>
          <Button
            variant="link"
            className="mt-2 text-palette-teal"
            onClick={handleMoreThanTenClick}
          >
            Contact our sales team →
          </Button>
        </div>
      )}

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-xl font-bold text-palette-darkTeal mb-4">
              Get a Special Enterprise Deal
            </h3>
            <p className="mb-4">
              Please provide your contact information and our sales manager will
              reach out with a special pricing offer.
            </p>

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="businessName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Business Name
                </label>
                <input
                  type="text"
                  id="businessName"
                  placeholder="Enter your business name"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-palette-teal focus:border-palette-teal"
                />
              </div>

              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  placeholder="Enter your phone number"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-palette-teal focus:border-palette-teal"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-palette-teal focus:border-palette-teal"
                />
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  placeholder="Enter any additional information or requirements"
                  rows={4}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-palette-teal focus:border-palette-teal"
                />
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <Button
                  variant="outline"
                  className="bg-red-500 hover:bg-red-600 text-white border-red-500"
                  onClick={() => setShowContactModal(false)}
                >
                  Cancel
                </Button>
                <Button
                  className="bg-palette-teal hover:bg-palette-darkTeal text-white"
                  onClick={() => {
                    alert(
                      "Thank you! Our sales team will contact you shortly.",
                    );
                    setShowContactModal(false);
                  }}
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function PricingPage() {
  const [showContactModal, setShowContactModal] = useState(false);

  // Handle Contact Sales click
  const handleContactSalesClick = () => {
    setShowContactModal(true);
  };

  return (
    <div className="bg-background">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-palette-lightBg">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-palette-darkTeal">
                  Pricing that Fits Every Business
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Simple, transparent pricing designed to grow with your salon
                  business.
                </p>
              </div>
            </div>

            {/* New Pricing Calculator Section */}
            <div className="mt-12 max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-2 border-primary/20 shadow-lg overflow-hidden">
                <CardHeader className="text-center bg-white border-b-2 border-gray-100">
                    <CardTitle className="text-2xl text-palette-darkTeal">
                      Here's what you'll pay:
                    </CardTitle>
                    
                  </CardHeader>

                  <CardContent className="bg-white pt-6">
                    <div className="space-y-6">
                      {/* Employee Number Selector - Draggable */}
                      <div className="mb-6">
                        <p className="text-sm text-muted-foreground  text-center">
                        Annual Subscription Pricing
                        </p>
                        <div className="flex flex-col items-center justify-center mb-4">
 
  

  <span className="mt-2 text-xs text-muted-foreground text-center">
    All features included — no hidden fees or per-user charges.
  </span>
</div>


                        <DraggableEmployeeSelector />
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="bg-white border-t border-gray-100 pt-6 flex flex-col space-y-4">
                    <p className="text-center text-sm text-muted-foreground">
                      *Cancel anytime with no cancellation fees
                    </p>
                    <Button
                      asChild
                      className="w-full bg-red-500 hover:bg-red-600 text-white"
                    >
                      <Link href="/register">Join Zaan Today</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Features Card */}
                <Card className="border-2 border-primary/20 shadow-lg overflow-hidden">
                  <CardHeader className="text-center bg-white border-b-2 border-gray-100">
                    <CardTitle className="text-2xl text-palette-darkTeal">
                      Every plan includes:
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="bg-white pt-6">
                    <div className="space-y-4">
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2 p-2 border-b border-gray-100">
                          <Check className="h-5 w-5 text-palette-teal shrink-0 mt-0.5" />
                          <span>Full access to all Zaan platform features</span>
                        </li>
                        <li className="flex items-start gap-2 p-2 border-b border-gray-100">
                          <Check className="h-5 w-5 text-palette-teal shrink-0 mt-0.5" />
                          <span>Unlimited client management</span>
                        </li>
                        <li className="flex items-start gap-2 p-2 border-b border-gray-100">
                          <Check className="h-5 w-5 text-palette-teal shrink-0 mt-0.5" />
                          <span>Online booking and appointment scheduling</span>
                        </li>
                        <li className="flex items-start gap-2 p-2 border-b border-gray-100">
                          <Check className="h-5 w-5 text-palette-teal shrink-0 mt-0.5" />
                          <span>Inventory management</span>
                        </li>
                        <li className="flex items-start gap-2 p-2 border-b border-gray-100">
                          <Check className="h-5 w-5 text-palette-teal shrink-0 mt-0.5" />
                          <span>Sales and marketing tools</span>
                        </li>
                        <li className="flex items-start gap-2 p-2 border-b border-gray-100">
                          <Check className="h-5 w-5 text-palette-teal shrink-0 mt-0.5" />
                          <span>Financial reporting and analytics</span>
                        </li>
                        <li className="flex items-start gap-2 p-2 border-b border-gray-100">
                          <Check className="h-5 w-5 text-palette-teal shrink-0 mt-0.5" />
                          <span>24/7 customer support</span>
                        </li>

                        {/* Additional Fees Notice */}
                        <li className="flex flex-col gap-2 p-4 bg-amber-50 border-l-4 border-amber-400 rounded-md mt-3">
                          <div className="flex items-start">
                            <AlertCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5 mr-2" />
                            <p className="text-sm font-medium text-amber-800">
                              Important: Additional Service Fees
                            </p>
                          </div>
                          <ul className="space-y-2 pl-7 mt-1">
                            <li className="flex items-start gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-amber-500 shrink-0"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <rect
                                  width="20"
                                  height="16"
                                  x="2"
                                  y="4"
                                  rx="2"
                                />
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                              </svg>
                              <span className="text-sm text-amber-700">
                                Emails carry additional fees
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-amber-500 shrink-0"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                              </svg>
                              <span className="text-sm text-amber-700">
                                SMS messages carry additional fees
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-amber-500 shrink-0"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                                <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Zm0 0a5 5 0 0 0 5 5" />
                                <path d="M13.5 14H12a5 5 0 0 1-5-5V8.5" />
                              </svg>
                              <span className="text-sm text-amber-700">
                                WhatsApp messages carry additional fees
                              </span>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <div className="mt-6 text-center md:col-span-2">
                  <Button
                    variant="link"
                    className="mt-2 text-palette-teal"
                    onClick={handleContactSalesClick}
                  >
                    Contact Sales →
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Modal */}
        {showContactModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
              <h3 className="text-xl font-bold text-palette-darkTeal mb-4">
                Get a Special Enterprise Deal
              </h3>
              <p className="mb-4">
                Please provide your contact information and our sales manager
                will reach out with a special pricing offer.
              </p>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="businessName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    placeholder="Enter your business name"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-palette-teal focus:border-palette-teal"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    placeholder="Enter your phone number"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-palette-teal focus:border-palette-teal"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email address"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-palette-teal focus:border-palette-teal"
                  />
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    placeholder="Enter any additional information or requirements"
                    rows={4}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-palette-teal focus:border-palette-teal"
                  />
                </div>

                <div className="flex justify-end space-x-3 pt-4">
                  <Button
                    variant="outline"
                    className="bg-red-500 hover:bg-red-600 text-white border-red-500"
                    onClick={() => setShowContactModal(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    className="bg-palette-teal hover:bg-palette-darkTeal text-white"
                    onClick={() => {
                      alert(
                        "Thank you! Our sales team will contact you shortly.",
                      );
                      setShowContactModal(false);
                    }}
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
