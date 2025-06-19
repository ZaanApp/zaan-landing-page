import { Button } from "@/components/ui/button";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-background">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  About Zaan
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  We're on a mission to transform the beauty industry with
                  innovative technology
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="relative aspect-video overflow-hidden rounded-xl lg:aspect-square">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80"
                  alt="Zaan team working together"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold">Our Story</h2>
                  <p className="text-muted-foreground">
                    Zaan was founded in 2020 by a team of beauty industry
                    veterans and technology experts who saw a need for better
                    tools to help salon businesses thrive in the digital age.
                  </p>
                  <p className="text-muted-foreground">
                    After years of working with salons and beauty professionals,
                    we noticed that most were using multiple disconnected
                    systems to manage their businesses. This created
                    inefficiencies, data silos, and frustration.
                  </p>
                  <p className="text-muted-foreground">
                    We set out to build a comprehensive platform that would
                    connect all aspects of salon management in one place, from
                    scheduling and client management to inventory and financial
                    reporting.
                  </p>
                  <p className="text-muted-foreground">
                    Today, Zaan is used by thousands of beauty professionals
                    across the country, helping them save time, increase
                    revenue, and deliver exceptional client experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Our Values
                </h2>
                <p className="max-w-[700px] text-muted-foreground">
                  The principles that guide everything we do
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center space-y-2 p-6 border rounded-lg">
                <div className="p-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Customer Success</h3>
                <p className="text-muted-foreground">
                  We're only successful when our customers are successful.
                  Everything we do is focused on helping beauty professionals
                  thrive.
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-2 p-6 border rounded-lg">
                <div className="p-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Innovation</h3>
                <p className="text-muted-foreground">
                  We're constantly pushing the boundaries of what's possible to
                  create better solutions for the beauty industry.
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-2 p-6 border rounded-lg">
                <div className="p-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Inclusivity</h3>
                <p className="text-muted-foreground">
                  We believe in creating tools that work for everyone, from
                  independent stylists to large salon chains.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Our Team
                </h2>
                <p className="max-w-[700px] text-muted-foreground">
                  Meet the people behind Zaan
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <TeamMember
                name="Sarah Johnson"
                role="CEO & Co-Founder"
                image="sarah"
              />
              <TeamMember
                name="Michael Chen"
                role="CTO & Co-Founder"
                image="michael"
              />
              <TeamMember
                name="Emma Rodriguez"
                role="Head of Product"
                image="emma"
              />
              <TeamMember
                name="David Kim"
                role="Head of Customer Success"
                image="david"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl">
                  Join the Zaan Community
                </h2>
                <p className="max-w-[900px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Experience how Zaan can transform your salon business
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
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

function TeamMember({ name, role, image }: TeamMemberProps) {
  return (
    <div className="flex flex-col items-center text-center space-y-2">
      <div className="relative w-32 h-32 overflow-hidden rounded-full mb-4">
        <Image
          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${image}`}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-muted-foreground">{role}</p>
    </div>
  );
}
