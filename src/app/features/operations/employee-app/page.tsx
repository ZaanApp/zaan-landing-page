import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Smartphone,
  Clock,
  BarChart3,
  Calendar,
  Trophy,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function EmployeeAppPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col items-center text-center">
            <div className="inline-block p-3 rounded-full bg-primary/10 mb-6">
              <Smartphone className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Zaan Employee App
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mb-10">
              Empower your salon staff with a dedicated mobile app that tracks
              performance, manages schedules, and boosts motivation - all in the
              palm of their hands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/register">Start Free Trial</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Schedule Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">
              Transform Your Team's Performance
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              The Zaan Employee App puts powerful performance tracking and
              management tools directly in your staff's hands. From automatic
              time recording to real-time performance insights, your team stays
              connected, motivated, and productive.
            </p>
            <p className="text-lg text-muted-foreground">
              Say goodbye to manual timesheets and hello to seamless workforce
              management that works as hard as your team does.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Everything Your Team Needs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive features designed to streamline operations and boost
              employee satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Performance Tracking */}
            <div className="rounded-xl p-6 shadow-sm bg-gradient-to-r from-blue-50 to-indigo-100 border border-blue-100">
              <div className="inline-flex items-center justify-center p-2 bg-white/80 rounded-lg mb-4">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Performance Tracking
              </h3>
              <p className="text-muted-foreground">
                Real-time insights into individual performance metrics, service
                completion rates, and customer satisfaction scores to help
                employees excel.
              </p>
            </div>

            {/* Automatic Time Recording */}
            <div className="rounded-xl p-6 shadow-sm bg-gradient-to-bl from-teal-50 to-emerald-100 border border-teal-100">
              <div className="inline-flex items-center justify-center p-2 bg-white/80 rounded-lg mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Automatic Time Recording
              </h3>
              <p className="text-muted-foreground">
                Seamless clock-in and clock-out functionality with GPS
                verification, eliminating manual timesheets and ensuring
                accurate payroll processing.
              </p>
            </div>

            {/* Attendance Tracking */}
            <div className="rounded-xl p-6 shadow-sm bg-gradient-to-tr from-purple-50 to-violet-100 border border-purple-100">
              <div className="inline-flex items-center justify-center p-2 bg-white/80 rounded-lg mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Attendance Tracking
              </h3>
              <p className="text-muted-foreground">
                Comprehensive attendance monitoring with detailed reports, late
                arrival notifications, and absence pattern analysis for better
                workforce management.
              </p>
            </div>

            {/* Vacation Management */}
            <div className="rounded-xl p-6 shadow-sm bg-gradient-to-tl from-amber-50 to-orange-100 border border-amber-100">
              <div className="inline-flex items-center justify-center p-2 bg-white/80 rounded-lg mb-4">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Vacation Management
              </h3>
              <p className="text-muted-foreground">
                Easy vacation request submission, approval workflows, and
                balance tracking to ensure proper staffing while respecting
                employee time off.
              </p>
            </div>

            {/* Employee Motivation */}
            <div className="rounded-xl p-6 shadow-sm bg-gradient-to-br from-cyan-50 to-sky-100 border border-cyan-100">
              <div className="inline-flex items-center justify-center p-2 bg-white/80 rounded-lg mb-4">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Employee Motivation
              </h3>
              <p className="text-muted-foreground">
                Gamification features, achievement badges, and performance
                leaderboards that inspire healthy competition and recognize
                outstanding work.
              </p>
            </div>

            {/* Mobile Accessibility */}
            <div className="rounded-xl p-6 shadow-sm bg-gradient-to-l from-rose-50 to-pink-100 border border-rose-100">
              <div className="inline-flex items-center justify-center p-2 bg-white/80 rounded-lg mb-4">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Mobile-First Design
              </h3>
              <p className="text-muted-foreground">
                Intuitive mobile interface optimized for on-the-go access,
                ensuring your team can stay connected whether they're on the
                salon floor or at home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Alternating Sections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* First Section */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
                <BarChart3 className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm font-medium text-primary">
                  Performance Analytics
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-6">
                Data-Driven Performance Insights
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Give your employees the power to track their own success with
                detailed performance analytics. From service completion times to
                customer satisfaction ratings, the app provides actionable
                insights that help staff improve and excel.
              </p>
              <ul className="space-y-3 text-left">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 bg-primary/20 p-1 rounded-full">
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </div>
                  <span>Real-time performance dashboards and metrics</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 bg-primary/20 p-1 rounded-full">
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </div>
                  <span>Goal setting and progress tracking features</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 bg-primary/20 p-1 rounded-full">
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </div>
                  <span>Personalized improvement recommendations</span>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                  alt="Employee performance analytics dashboard"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Second Section */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
                <Clock className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm font-medium text-primary">
                  Time Management
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-6">
                Effortless Time and Attendance
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Streamline workforce management with automatic time tracking and
                intelligent attendance monitoring. The app handles everything
                from clock-ins to vacation requests, making payroll processing
                accurate and stress-free.
              </p>
              <ul className="space-y-3 text-left">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 bg-primary/20 p-1 rounded-full">
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </div>
                  <span>GPS-verified clock-in and clock-out functionality</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 bg-primary/20 p-1 rounded-full">
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </div>
                  <span>
                    Automated break time tracking and overtime calculations
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 bg-primary/20 p-1 rounded-full">
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </div>
                  <span>Seamless integration with payroll systems</span>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80"
                  alt="Mobile time tracking interface"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-block p-3 rounded-full bg-primary-foreground/10 mb-6">
            <Smartphone className="h-8 w-8 text-primary-foreground" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
            Ready to Empower Your Team?
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-10">
            Join thousands of salon businesses already boosting employee
            satisfaction and productivity with the Zaan Employee App.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8"
              asChild
            >
              <Link href="/register">Start Your Free 14-Day Trial</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link href="/contact">Schedule a Demo</Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-primary-foreground/60">
            No credit card required. Cancel anytime.
          </p>
        </div>
      </section>
    </div>
  );
}
