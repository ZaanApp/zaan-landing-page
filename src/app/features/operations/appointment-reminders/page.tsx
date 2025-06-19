import { Button } from "@/components/ui/button";
import { Footer } from "@/components/layout/footer";
import {
  ArrowRight,
  Calendar,
  Clock,
  Bell,
  Globe,
  Share2,
  CreditCard,
  Smartphone,
  Zap,
  BellRing,
  MessageSquare,
  Users,
  Settings,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AppointmentRemindersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col items-center text-center">
            <div className="inline-block p-3 rounded-full bg-primary/10 mb-6">
              <BellRing className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Appointment Reminders in Zaan
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mb-10">
              Say goodbye to missed appointments...and forgotten reservations!
              With crowded appointments, multiple clients, and a large number of
              wrong services are possible, and they can cost you the loss of
              your client's trust.
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            With the automatic appointment reminders feature in the Zaan system,
            you are safe from missed appointments and forgotten reservations.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mt-4">
            The system sends automatic messages to customers before their
            appointments at a specific time that you choose, whether via SMS or
            WhatsApp, to ensure the customer's commitment to showing up at the
            time specified for their reservation.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Advantages of Appointment Reminders in the Zaan System
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need for effective appointment management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
                <BellRing className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Automated Messages</h3>
              <p className="text-muted-foreground">
                No need for manual reminder tasks and random calls. The system
                sends automatic messages to customers before their appointments
                at a time you specify.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reduce Absenteeism</h3>
              <p className="text-muted-foreground">
                Experience a clear decrease in the percentage of absenteeism and
                a significant increase in customer attendance and commitment to
                appointment times.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
                <Settings className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Customizable Settings
              </h3>
              <p className="text-muted-foreground">
                Complete control over setting the appropriate time to send
                appointment reminder messages, whether 24 hours before or just
                one hour, with choice of channel (SMS or WhatsApp).
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Reminders</h3>
              <p className="text-muted-foreground">
                Whether the reservation is online or offline, the system
                automatically sends reminders, even if modifications or
                cancellations are made to the reservation.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Improved Customer Experience
              </h3>
              <p className="text-muted-foreground">
                Increase your client's positive impression of your salon and the
                level of service provided, encouraging them to return again and
                again.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Increased Productivity
              </h3>
              <p className="text-muted-foreground">
                Reduce unused appointments and increase staff productivity by
                ensuring clients show up on time, allowing your team to focus on
                providing excellent service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Experience Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80"
                alt="Automated reminder system"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">
                Automated Messages Without Manual Intervention
              </h2>
              <p className="text-lg text-muted-foreground">
                With the activation of the automatic appointment reminder
                messages feature in Zaan, you do not need manual reminder tasks
                and random calls. The system handles everything automatically.
              </p>
              <p className="text-lg text-muted-foreground">
                Your customers will receive timely reminders that help them
                remember and prioritize their appointments with you.
              </p>
              <div className="flex items-center gap-2 text-primary">
                <Smartphone className="h-5 w-5" />
                <span className="font-medium">
                  SMS and WhatsApp integration
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Integration Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <h2 className="text-3xl font-bold">
                Significantly Reduce Absenteeism
              </h2>
              <p className="text-lg text-muted-foreground">
                Using automatic appointment reminders from Zaan, you will
                experience a clear decrease in the percentage of absenteeism and
                a significant increase in customer attendance.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>
                    Enjoy increased revenue with fewer missed appointments
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>
                    Make better use of your team's time with reliable scheduling
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>
                    Improve customer satisfaction with organized appointment
                    management
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl order-1 md:order-2">
              <Image
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80"
                alt="Reduced absenteeism"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            Start Reducing No-Shows Today
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Your appointment schedule is always organized and your clients come
            exactly on time. No chaos and overlapping appointments after today
            with Zaan.
          </p>
          <Button size="lg" asChild>
            <Link href="/register">Start Your Free Trial Today</Link>
          </Button>
        </div>
      </section>
      <Footer />
    </>
  );
}
