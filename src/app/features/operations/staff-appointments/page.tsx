import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Clock,
  Users,
  CheckCircle,
  FileText,
  BarChart3,
  BellRing,
  ClipboardList,
} from "lucide-react";

export default function StaffAppointmentsPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section - Gradient 1 */}
      <section className="py-20 px-4 bg-gradient-to-b from-palette-teal/30 via-palette-mint/20 to-palette-beige/10">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-palette-darkTeal">
                Staff Appointments Management
              </h1>
              <p className="text-lg text-muted-foreground">
                Get an intelligent system that organizes employees' work
                accurately, away from randomness... and increase your customer
                satisfaction!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" variant="teal" asChild>
                  <Link href="/register">Start Free Trial</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <div className="aspect-video bg-gradient-to-br from-white via-palette-mint/10 to-palette-teal/20 rounded-lg overflow-hidden border shadow-lg">
                <div className="w-full h-full flex items-center justify-center relative">
                  <Calendar
                    size={80}
                    className="text-palette-teal opacity-40"
                  />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Users size={60} className="text-palette-darkTeal" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section - Gradient 2 */}
      <section className="py-16 px-4 bg-gradient-to-b from-palette-beige/10 via-white to-palette-lavender/10">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-gradient-to-r from-palette-mint/20 to-palette-teal/20 p-8 rounded-2xl shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-palette-darkTeal">
              More Than Just Customer Appointments
            </h2>
            <p className="text-lg text-palette-darkTeal/80 max-w-3xl mx-auto">
              Appointment management in your salon is not limited to customer
              reservations only, but rather begins with professionally organized
              scheduling of employee hours. The Zaan system gives you an
              integrated set of tools that work to coordinate the work team's
              working hours, and help you distribute tasks according to the
              dedication and specialization of each employee.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid Section - Gradient 3 */}
      <section className="py-16 px-4 bg-gradient-to-b from-palette-lavender/10 via-palette-mint/5 to-palette-beige/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-palette-darkTeal">
            Advantages of Managing Employee Appointments in Zaan
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature Card 1 */}
            <div className="bg-gradient-to-br from-white via-palette-mint/10 to-palette-teal/20 rounded-xl p-6 shadow-md border hover:shadow-lg transition-shadow">
              <div className="p-3 w-14 h-14 rounded-full bg-white flex items-center justify-center mb-4">
                <FileText className="h-7 w-7 text-palette-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-palette-darkTeal">
                Dedicated File For Each Employee
              </h3>
              <p className="text-palette-darkTeal/80">
                Track the work schedule of each employee individually, and know
                their availability in real-time. Ensure no duplicate
                reservations or appointment conflicts occur.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-gradient-to-br from-white via-palette-lavender/10 to-palette-teal/20 rounded-xl p-6 shadow-md border hover:shadow-lg transition-shadow">
              <div className="p-3 w-14 h-14 rounded-full bg-white flex items-center justify-center mb-4">
                <Users className="h-7 w-7 text-palette-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-palette-darkTeal">
                Allocate By Specialization
              </h3>
              <p className="text-palette-darkTeal/80">
                Identify qualified employees for each service based on
                specialization and professionalism. The system automatically
                suggests the right employee for bookings.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-gradient-to-br from-white via-palette-beige/10 to-palette-teal/20 rounded-xl p-6 shadow-md border hover:shadow-lg transition-shadow">
              <div className="p-3 w-14 h-14 rounded-full bg-white flex items-center justify-center mb-4">
                <Calendar className="h-7 w-7 text-palette-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-palette-darkTeal">
                Intelligent Distribution
              </h3>
              <p className="text-palette-darkTeal/80">
                Distribute appointments in a balanced manner among employees to
                avoid pressure on any single staff member. Ensure fair
                scheduling for better performance.
              </p>
            </div>

            {/* Feature Card 4 */}
            <div className="bg-gradient-to-br from-white via-palette-mint/10 to-palette-lavender/20 rounded-xl p-6 shadow-md border hover:shadow-lg transition-shadow">
              <div className="p-3 w-14 h-14 rounded-full bg-white flex items-center justify-center mb-4">
                <BellRing className="h-7 w-7 text-palette-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-palette-darkTeal">
                Automatic Notifications
              </h3>
              <p className="text-palette-darkTeal/80">
                Every employee receives timely notifications of upcoming
                appointments directly to their phone or email, keeping them
                informed of their schedule.
              </p>
            </div>

            {/* Feature Card 5 */}
            <div className="bg-gradient-to-br from-white via-palette-beige/10 to-palette-mint/20 rounded-xl p-6 shadow-md border hover:shadow-lg transition-shadow">
              <div className="p-3 w-14 h-14 rounded-full bg-white flex items-center justify-center mb-4">
                <Clock className="h-7 w-7 text-palette-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-palette-darkTeal">
                Accurate Attendance Tracking
              </h3>
              <p className="text-palette-darkTeal/80">
                Set working days and hours for each employee and let the system
                track delays, overtime, vacations, and breaks to measure
                productivity and commitment.
              </p>
            </div>

            {/* Feature Card 6 */}
            <div className="bg-gradient-to-br from-white via-palette-lavender/10 to-palette-beige/20 rounded-xl p-6 shadow-md border hover:shadow-lg transition-shadow">
              <div className="p-3 w-14 h-14 rounded-full bg-white flex items-center justify-center mb-4">
                <BarChart3 className="h-7 w-7 text-palette-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-palette-darkTeal">
                Detailed Performance Reports
              </h3>
              <p className="text-palette-darkTeal/80">
                Access comprehensive reports on appointments completed,
                attendance, and performance metrics to evaluate each employee
                and make data-driven decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Alternating Image/Text Sections - Gradient 4 */}
      <section className="py-16 px-4 bg-gradient-to-b from-palette-beige/20 via-palette-mint/10 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 order-2 md:order-1">
              <div className="bg-gradient-to-br from-palette-mint/30 to-palette-teal/20 rounded-xl overflow-hidden shadow-lg border border-palette-teal/20 aspect-video relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                      <Calendar
                        size={60}
                        className="text-palette-teal opacity-70"
                      />
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <ClipboardList
                        size={80}
                        className="text-palette-darkTeal"
                      />
                    </div>
                    <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2">
                      <CheckCircle
                        size={60}
                        className="text-palette-teal opacity-70"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 space-y-6 order-1 md:order-2">
              <div className="bg-gradient-to-r from-palette-mint/10 to-palette-teal/10 p-8 rounded-xl shadow-md">
                <h2 className="text-3xl font-bold text-palette-darkTeal mb-4">
                  Streamlined Scheduling Process
                </h2>
                <p className="text-palette-darkTeal/80 mb-4">
                  Zaan's staff appointment system transforms the way you manage
                  your team's schedule. With our intuitive interface, you can
                  easily view, create, and modify appointments for each staff
                  member with just a few clicks.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-palette-teal mt-0.5 flex-shrink-0" />
                    <span className="text-palette-darkTeal/90">
                      Drag-and-drop calendar interface for quick scheduling
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-palette-teal mt-0.5 flex-shrink-0" />
                    <span className="text-palette-darkTeal/90">
                      Color-coded appointments by service type or staff member
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-palette-teal mt-0.5 flex-shrink-0" />
                    <span className="text-palette-darkTeal/90">
                      Conflict detection to prevent double-booking
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-palette-teal mt-0.5 flex-shrink-0" />
                    <span className="text-palette-darkTeal/90">
                      Automated buffer time between appointments
                    </span>
                  </li>
                </ul>
                <div className="pt-4">
                  <Button variant="teal" asChild>
                    <Link href="/register">Try It Free</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Alternating Section - Gradient 5 */}
      <section className="py-16 px-4 bg-gradient-to-b from-white via-palette-lavender/10 to-palette-beige/10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <div className="bg-gradient-to-r from-palette-beige/20 to-palette-lavender/20 p-8 rounded-xl shadow-md">
                <h2 className="text-3xl font-bold text-palette-darkTeal mb-4">
                  Real-time Staff Availability
                </h2>
                <p className="text-palette-darkTeal/80 mb-4">
                  Never worry about scheduling conflicts again. Zaan provides
                  real-time visibility into your staff's availability, making it
                  easy to assign the right person to each appointment based on
                  their skills and schedule.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-palette-teal mt-0.5 flex-shrink-0" />
                    <span className="text-palette-darkTeal/90">
                      Live availability updates across all devices
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-palette-teal mt-0.5 flex-shrink-0" />
                    <span className="text-palette-darkTeal/90">
                      Staff skill matching for appropriate service assignment
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-palette-teal mt-0.5 flex-shrink-0" />
                    <span className="text-palette-darkTeal/90">
                      Customizable working hours and break times
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-palette-teal mt-0.5 flex-shrink-0" />
                    <span className="text-palette-darkTeal/90">
                      Vacation and time-off management
                    </span>
                  </li>
                </ul>
                <div className="pt-4">
                  <Button variant="teal" asChild>
                    <Link href="/register">Schedule a Demo</Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-gradient-to-br from-palette-lavender/20 to-palette-teal/20 rounded-xl overflow-hidden shadow-lg border border-palette-teal/20 aspect-video relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
                      <Users size={70} className="text-palette-teal" />
                    </div>
                    <div className="absolute bottom-1/3 right-1/3 transform translate-x-1/2 translate-y-1/2">
                      <Clock
                        size={60}
                        className="text-palette-darkTeal opacity-80"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third Alternating Section - Gradient 6 */}
      <section className="py-16 px-4 bg-gradient-to-b from-palette-beige/10 via-palette-mint/5 to-palette-teal/10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 order-2 md:order-1">
              <div className="bg-gradient-to-br from-palette-beige/30 to-palette-mint/20 rounded-xl overflow-hidden shadow-lg border border-palette-beige/50 aspect-video relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                      <BellRing
                        size={50}
                        className="text-palette-teal opacity-70"
                      />
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <BarChart3 size={80} className="text-palette-darkTeal" />
                    </div>
                    <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2">
                      <FileText
                        size={50}
                        className="text-palette-teal opacity-70"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 space-y-6 order-1 md:order-2">
              <div className="bg-gradient-to-r from-palette-teal/10 to-palette-beige/20 p-8 rounded-xl shadow-md">
                <h2 className="text-3xl font-bold text-palette-darkTeal mb-4">
                  Performance Analytics & Reporting
                </h2>
                <p className="text-palette-darkTeal/80 mb-4">
                  Gain valuable insights into your staff's performance with
                  comprehensive analytics and reporting tools. Track appointment
                  completion rates, customer satisfaction, and more to optimize
                  your business operations.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-palette-teal mt-0.5 flex-shrink-0" />
                    <span className="text-palette-darkTeal/90">
                      Detailed performance dashboards for each staff member
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-palette-teal mt-0.5 flex-shrink-0" />
                    <span className="text-palette-darkTeal/90">
                      Service completion time and efficiency metrics
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-palette-teal mt-0.5 flex-shrink-0" />
                    <span className="text-palette-darkTeal/90">
                      Customer feedback integration and analysis
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-palette-teal mt-0.5 flex-shrink-0" />
                    <span className="text-palette-darkTeal/90">
                      Exportable reports for performance reviews
                    </span>
                  </li>
                </ul>
                <div className="pt-4">
                  <Button variant="teal" asChild>
                    <Link href="/register">View Sample Reports</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section - Final Gradient */}
      <section className="py-16 px-4 bg-gradient-to-b from-palette-teal/10 via-palette-mint/15 to-palette-lavender/10">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-gradient-to-r from-palette-teal/20 to-palette-mint/30 p-10 rounded-2xl shadow-lg border border-palette-teal/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-palette-darkTeal">
              Ready to Transform Your Staff Management?
            </h2>
            <p className="text-lg text-palette-darkTeal/80 max-w-3xl mx-auto mb-8">
              Join thousands of salons and spas that have revolutionized their
              operations with Zaan's staff appointment management system. Start
              your free trial today and experience the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="teal" className="shadow-md" asChild>
                <Link href="/register">Start Free 14-Day Trial</Link>
              </Button>
              <Button size="lg" variant="outline" className="shadow-sm" asChild>
                <Link href="/pricing">View Pricing Plans</Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-palette-darkTeal/70">
              No credit card required. Cancel anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
