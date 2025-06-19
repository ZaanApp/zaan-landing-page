import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  BarChart3,
  Calendar,
  CreditCard,
  MessageSquare,
  Settings,
  Users,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function FeatureSection() {
  return (
    <section className="py-20 bg-palette-lightBg">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-palette-darkTeal">
              Features Designed for Beauty Professionals
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover how Zaan can transform your salon business with our
              comprehensive suite of tools
            </p>
          </div>
        </div>

        <Tabs defaultValue="operations" className="mt-12">
          <div className="flex justify-center">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="operations">Operations</TabsTrigger>
              <TabsTrigger value="sales">Sales & Marketing</TabsTrigger>
              <TabsTrigger value="finance">Finance</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="operations" className="mt-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={<Calendar className="h-6 w-6" />}
                title="Appointment Scheduling"
                description="Streamline booking with an intuitive calendar system that reduces no-shows and maximizes your schedule."
                link="/features/operations/scheduling"
              />
              <FeatureCard
                icon={<Users className="h-6 w-6" />}
                title="Staff Management"
                description="Easily manage employee schedules, performance, and commissions all in one place."
                link="/features/operations/staff"
              />
              <FeatureCard
                icon={<Settings className="h-6 w-6" />}
                title="Inventory Control"
                description="Track product usage, set automatic reorders, and connect directly with suppliers."
                link="/features/operations/inventory"
              />
            </div>

            <div className="mt-12 rounded-xl overflow-hidden border bg-white">
              <div className="grid lg:grid-cols-2">
                <div className="p-6 md:p-8 lg:p-10 flex items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-palette-darkTeal">
                      Streamlined Operations
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      Zaan's operations management tools help you run your salon
                      more efficiently, reducing administrative work by up to
                      40% and giving you more time to focus on your clients.
                    </p>
                    <Button asChild className="mt-4" variant="outline">
                      <Link
                        href="/features/operations"
                        className="inline-flex items-center"
                      >
                        Learn more <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="relative aspect-video lg:aspect-auto">
                  <Image
                    src="https://images.unsplash.com/photo-1470259078422-826894b933aa?w=800&q=80"
                    alt="Salon operations management"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="sales" className="mt-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={<MessageSquare className="h-6 w-6" />}
                title="Client Communication"
                description="Automated appointment reminders, follow-ups, and personalized marketing messages."
                link="/features/sales/communication"
              />
              <FeatureCard
                icon={<BarChart3 className="h-6 w-6" />}
                title="Marketing Campaigns"
                description="Create and track targeted promotions to boost bookings during slow periods."
                link="/features/sales/marketing"
              />
              <FeatureCard
                icon={<Users className="h-6 w-6" />}
                title="Client Retention"
                description="Loyalty programs and personalized experiences to keep clients coming back."
                link="/features/sales/retention"
              />
            </div>

            <div className="mt-12 rounded-xl overflow-hidden border bg-white">
              <div className="grid lg:grid-cols-2">
                <div className="relative aspect-video lg:aspect-auto order-2 lg:order-1">
                  <Image
                    src="https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&q=80"
                    alt="Salon marketing and sales"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 md:p-8 lg:p-10 flex items-center order-1 lg:order-2">
                  <div>
                    <h3 className="text-2xl font-bold text-palette-darkTeal">
                      Grow Your Client Base
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      Our marketing tools help you attract new clients and
                      retain existing ones with personalized campaigns that
                      deliver results.
                    </p>
                    <Button asChild className="mt-4" variant="outline">
                      <Link
                        href="/features/sales"
                        className="inline-flex items-center"
                      >
                        Learn more <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="finance" className="mt-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={<CreditCard className="h-6 w-6" />}
                title="Payment Processing"
                description="Seamless in-person and online payments with integrated tipping and receipt options."
                link="/features/finance/payments"
              />
              <FeatureCard
                icon={<BarChart3 className="h-6 w-6" />}
                title="Financial Reporting"
                description="Comprehensive reports on revenue, expenses, and profitability to guide business decisions."
                link="/features/finance/reporting"
              />
              <FeatureCard
                icon={<Users className="h-6 w-6" />}
                title="Payroll Management"
                description="Automated commission calculations and payroll processing for your staff."
                link="/features/finance/payroll"
              />
            </div>

            <div className="mt-12 rounded-xl overflow-hidden border bg-white">
              <div className="grid lg:grid-cols-2">
                <div className="p-6 md:p-8 lg:p-10 flex items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-palette-darkTeal">
                      Financial Control
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      Take control of your salon's finances with powerful tools
                      that provide clear insights into your business performance
                      and help you make data-driven decisions.
                    </p>
                    <Button asChild className="mt-4" variant="outline">
                      <Link
                        href="/features/finance"
                        className="inline-flex items-center"
                      >
                        Learn more <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="relative aspect-video lg:aspect-auto">
                  <Image
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80"
                    alt="Salon financial management"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

function FeatureCard({ icon, title, description, link }: FeatureCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="p-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
          {icon}
        </div>
        <CardTitle className="text-palette-darkTeal">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button
          asChild
          variant="ghost"
          className="p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent"
        >
          <Link
            href={link}
            className="inline-flex items-center text-sm font-medium"
          >
            Learn more <ArrowRight className="ml-1 h-3 w-3" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
