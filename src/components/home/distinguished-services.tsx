"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function DistinguishedServices() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-palette-mint/10 via-white to-palette-lavender/10 z-0"></div>

      <div className="container px-4 md:px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-palette-darkTeal mb-4">
            Our Integrated Services
          </h2>
          <p className="text-palette-darkTeal/70 max-w-3xl mx-auto">
            A diverse range of essential and additional features you need for
            more effective management of your business
          </p>
        </div>

        {/* Three column layout for services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Management Column */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-palette-darkTeal mb-4 text-left">
              Management
            </h3>
            <p className="text-palette-darkTeal/70 mb-6 text-left">
              Manage bookings, sales, customers, locations, and team members,
              plus analyze data through advanced reports and statistics.
            </p>
            <div className="flex justify-start">
              <Button variant="teal" className="mt-4 group">
                <Link href="/features/operations" className="flex items-center">
                  <span>Discover More</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Expansion Column */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-palette-darkTeal mb-4 text-left">
              Expansion
            </h3>
            <p className="text-palette-darkTeal/70 mb-6 text-left">
              New customers from the world's largest beauty and health market.
              Using our marketing features, your customers will come
              consistently.
            </p>
            <div className="flex justify-start">
              <Button variant="teal" className="mt-4 group">
                <Link href="/features/sales" className="flex items-center">
                  <span>Discover More</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Payment Column */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-palette-darkTeal mb-4 text-left">
              Easy Payment
            </h3>
            <p className="text-palette-darkTeal/70 mb-6 text-left">
              Faster payment process using flexible payment methods that enable
              you to reduce the chances of customers missing their appointments
              through advance booking and easy payment.
            </p>
            <div className="flex justify-start">
              <Button variant="teal" className="mt-4 group">
                <Link href="/features/finance" className="flex items-center">
                  <span>Discover More</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* One Platform Section */}
        <div className="bg-palette-lightBg rounded-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-palette-darkTeal mb-4 text-left">
                One Platform, Unlimited Possibilities
              </h2>
              <p className="text-palette-darkTeal/70 mb-6 text-left">
                Everything you need for growth and expansion. Our team provides
                you with tools that help you increase sales, manage
                appointments, and retain customers so you can present your
                business in the best possible way.
              </p>
              <div className="flex justify-start">
                <Button className="bg-palette-darkTeal hover:bg-palette-darkTeal/90 text-white">
                  <Link href="/register" className="flex items-center gap-2">
                    <span>Start Now</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {/* Business Type Cards */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="aspect-square relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <h3 className="text-white font-medium text-lg text-left w-full">
                      Beauty Salon
                    </h3>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=500&q=80"
                    alt="Beauty Salon"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="aspect-square relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <h3 className="text-white font-medium text-lg text-left w-full">
                      Barber
                    </h3>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=500&q=80"
                    alt="Barber"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="aspect-square relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <h3 className="text-white font-medium text-lg text-left w-full">
                      Spa
                    </h3>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=500&q=80"
                    alt="Spa"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="aspect-square relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <h3 className="text-white font-medium text-lg text-left w-full">
                      Massage
                    </h3>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=500&q=80"
                    alt="Massage"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="aspect-square relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <h3 className="text-white font-medium text-lg text-left w-full">
                      Gym
                    </h3>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&q=80"
                    alt="Gym"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="aspect-square relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <h3 className="text-white font-medium text-lg text-left w-full">
                      Makeup Artist
                    </h3>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=500&q=80"
                    alt="Makeup Artist"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="aspect-square relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <h3 className="text-white font-medium text-lg text-left w-full">
                      Freelancer
                    </h3>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&q=80"
                    alt="Freelancer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="aspect-square relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <h3 className="text-white font-medium text-lg text-left w-full">
                      Medical and Dental
                    </h3>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=500&q=80"
                    alt="Medical and Dental"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
