"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Calendar,
  Clock,
  Filter,
  Printer,
  User,
  Bell,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CalendarViewPage() {
  return (
    <>
      {/* Hero Section with Gradient */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-primary/10 via-primary/5 to-background">
        <div className="container px-4 md:px-6 text-center max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-6">
            Appointments Calendar in Zaan
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            With Zaan, all appointments are on one screen, elegantly organized
            and easy to modify!
          </p>
          <div className="flex justify-center">
            <Button asChild size="lg" className="font-medium">
              <Link href="/register">Start Free Trial</Link>
            </Button>
          </div>
          <div className="mt-12 relative aspect-video overflow-hidden rounded-xl max-w-3xl mx-auto shadow-xl">
            <Image
              src="/AppointmentCalenderImages/Offers-&-Discounts-4.png"
              alt="Calendar view interface"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">The Key to Salon Success</h2>
          <p className="text-lg text-muted-foreground mb-0 max-w-3xl mx-auto">
            An organized and flexible calendar is the key to the success of the
            daily management of any salon. With Zaan, you will be able to get an
            accurate and organized calendar that helps you track the day's
            appointments quickly and makes it easy for you to control and modify
            them in simple steps!
          </p>
        </div>
      </section>

      {/* Features Grid Section with Gradient */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Advantages of Zaan's Appointment Calendar
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="p-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Daily, Weekly or Monthly Overview
              </h3>
              <p className="text-muted-foreground">
                View appointments clearly divided by day, week, or month to
                monitor peak work times and better coordinate staff schedules.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="p-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Bell className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Daily Alerts for Appointments
              </h3>
              <p className="text-muted-foreground">
                Stay up to date with organized daily appointment notifications
                without manual searching or waiting for reports.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="p-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <ArrowRight className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Edit Appointments by Drag and Drop
              </h3>
              <p className="text-muted-foreground">
                Change any appointment easily on the main screen without
                re-entering booking details, reducing errors.
              </p>
            </div>

            {/* Feature Card 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="p-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Color Effects on Appointment Status
              </h3>
              <p className="text-muted-foreground">
                Each appointment status is color-coded for clear tracking at a
                glance, from waiting to in-progress.
              </p>
            </div>

            {/* Feature Card 5 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="p-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Filter className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Filter Appointments
              </h3>
              <p className="text-muted-foreground">
                Quickly filter appointments by employee or type, whether they're
                at home or inside the salon.
              </p>
            </div>

            {/* Feature Card 6 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="p-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <User className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Direct Link with Customer Files
              </h3>
              <p className="text-muted-foreground">
                Access client files, service requests, and history without
                leaving the appointment screen.
              </p>
            </div>

            {/* Feature Card 7 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="p-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Printer className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Print or Export Schedule
              </h3>
              <p className="text-muted-foreground">
                Print daily appointment schedules or export in PDF format to
                share with your team or keep as reference.
              </p>
            </div>

            {/* Feature Card 8 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="p-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Comprehensive Overview
              </h3>
              <p className="text-muted-foreground">
                Get a complete view of your salon's schedule to optimize staff
                allocation and service delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Alternating Image/Text Sections */}
      {/* Section 1 */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="relative aspect-video overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/AppointmentCalenderImages/calender-appointments-2.png"
                alt="Daily overview calendar"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <div className="p-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">
                Daily, Weekly or Monthly Overview
              </h2>
              <p className="text-lg text-muted-foreground">
                With the appointment calendar from Zaan you can view the
                appointment schedule, clearly divided by day, week, or month, to
                be able to monitor and evaluate peak work times, and to be able
                to better coordinate appointments and employee work hours.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>
                    Easily switch between daily, weekly, and monthly views
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Identify peak hours and optimize staff scheduling</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Plan ahead with comprehensive calendar views</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-4 order-2 md:order-1">
              <div className="p-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <ArrowRight className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">
                Edit Appointments by Drag and Drop
              </h2>
              <p className="text-lg text-muted-foreground">
                With drag and drop to edit appointments, you can change any
                appointment in an easy and simple way on the main appointment
                screen without having to re-enter the booking details again,
                thus you get quick organization and reduce the occurrence of
                errors.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>
                    Intuitive drag and drop interface for quick changes
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>No need to re-enter appointment details</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Significantly reduces scheduling errors</span>
                </li>
              </ul>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl shadow-lg order-1 md:order-2">
              <Image
                src="/AppointmentCalenderImages/calender-appointments-3.png"
                alt="Drag and drop appointment editing"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="relative aspect-video overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/AppointmentCalenderImages/calender-appointments-2.png"
                alt="Color-coded appointment status"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <div className="p-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">
                Color Effects on Appointment Status
              </h2>
              <p className="text-lg text-muted-foreground">
                Each appointment entered into the system will be identified with
                the basic color of the appointments, then the color will change
                automatically when the status of the appointment is changed,
                whether its status is changed to (Waiting - Cancellation -
                Postponing - In Progress). Each color symbolizes a new status
                for the appointment, so you will get a clear tracking of the
                work schedule at a quick glance.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Visual status tracking with color-coding</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Instant recognition of appointment status</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Streamlined salon workflow management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/20 via-primary/10 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            Are You Ready to Make Appointment Management a Success Tool for Your
            Salon?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Try Zaan's appointment calendar, and organize your day with
            confidence, speed and professionalism.
          </p>
          <Button size="lg" asChild className="font-medium">
            <Link href="/register">Start Your Free Trial Today</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
