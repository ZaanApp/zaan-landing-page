import { Button } from "@/components/ui/button";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ArrowRight, BarChart3, MessageSquare, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SalesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_800px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Sales & Marketing
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Grow your client base and increase revenue with powerful
                    marketing tools designed for beauty professionals.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="font-medium">
                    <Link href="/register">Start Free Trial</Link>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl lg:aspect-square">
                <Image
                  src="https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&q=80"
                  alt="Salon marketing and sales"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:gap-16">
              {/* Feature 1 */}
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="p-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold">Client Communication</h2>
                    <p className="text-muted-foreground">
                      Stay connected with your clients through automated and
                      personalized communications.
                    </p>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        Automated appointment reminders via SMS and email
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        Post-appointment follow-ups to gather feedback
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        Birthday and special occasion messages with personalized
                        offers
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="relative aspect-video overflow-hidden rounded-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80"
                    alt="Client communication interface"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Feature 2 */}
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="relative aspect-video overflow-hidden rounded-xl order-2 lg:order-1">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                    alt="Marketing campaigns interface"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center space-y-4 order-1 lg:order-2">
                  <div className="p-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold">Marketing Campaigns</h2>
                    <p className="text-muted-foreground">
                      Create and track targeted promotions to boost bookings
                      during slow periods.
                    </p>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        Email campaign builder with beautiful templates
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        Targeted promotions based on client history and
                        preferences
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Performance tracking with detailed analytics</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="p-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold">Client Retention</h2>
                    <p className="text-muted-foreground">
                      Keep clients coming back with loyalty programs and
                      personalized experiences.
                    </p>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        Customizable loyalty programs with points and rewards
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        Automated re-booking reminders for regular services
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        Client win-back campaigns for lapsed customers
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="relative aspect-video overflow-hidden rounded-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?w=800&q=80"
                    alt="Zaan's client retention dashboard showing loyalty program metrics, rebooking rates, and customer win-back campaign performance"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl">
                  Grow Your Client Base Today
                </h2>
                <p className="max-w-[900px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of salons increasing their revenue with Zaan's
                  marketing tools
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="font-medium"
                >
                  <Link href="/register">Start Free Trial</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Link href="/contact">Schedule Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
