import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function WhatTheySaid() {
  // Sample testimonials - replace with actual testimonial data
  const testimonials = [
    {
      category: "Salons",
      items: [
        {
          quote:
            "Zaan has revolutionized how we manage our salon chain. The multi-branch feature allows us to oversee all locations from a single dashboard.",
          name: "Jessica Williams",
          role: "CEO, Glamour Chain Salons",
          avatar: "jessica",
        },
        {
          quote:
            "The appointment scheduling system is intuitive and has reduced our no-shows by 60%. Our staff loves how easy it is to manage their schedules.",
          name: "Robert Chen",
          role: "Owner, Elite Hair Studio",
          avatar: "robert",
        },
        {
          quote:
            "Customer management in Zaan helps us remember client preferences and history, making every visit personalized. Our retention rate has improved significantly.",
          name: "Sophia Martinez",
          role: "Manager, Bliss Beauty Salon",
          avatar: "sophia",
        },
      ],
    },
    {
      category: "Spas",
      items: [
        {
          quote:
            "The inventory management system has been a game-changer for our spa. We've reduced waste and never run out of essential products anymore.",
          name: "David Thompson",
          role: "Director, Serenity Day Spa",
          avatar: "david",
        },
        {
          quote:
            "Zaan's marketing tools have helped us grow our client base by 40% in just six months. The automated email campaigns are particularly effective.",
          name: "Olivia Johnson",
          role: "Marketing Manager, Pure Relaxation",
          avatar: "olivia",
        },
        {
          quote:
            "The financial reporting in Zaan gives us clear insights into our business performance. It's helped us make data-driven decisions to increase profitability.",
          name: "James Wilson",
          role: "Owner, Tranquil Waters Spa",
          avatar: "james",
        },
      ],
    },
    {
      category: "Beauty Centers",
      items: [
        {
          quote:
            "As a comprehensive beauty center, we needed software that could handle diverse services. Zaan perfectly accommodates all our departments from hair to nails to skincare.",
          name: "Aisha Patel",
          role: "Director, Complete Beauty Center",
          avatar: "aisha",
        },
        {
          quote:
            "The staff management features have streamlined our HR processes. Tracking performance and commissions is now effortless.",
          name: "Carlos Rodriguez",
          role: "HR Manager, Beauty Evolution",
          avatar: "carlos",
        },
        {
          quote:
            "Our clients appreciate the online booking system, and we love how it integrates seamlessly with our in-house operations. Zaan has truly unified our digital and physical presence.",
          name: "Natalie Kim",
          role: "Digital Director, Modern Beauty",
          avatar: "natalie",
        },
      ],
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              What They Said About Zaan
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from the businesses that have transformed their operations
              with our platform
            </p>
          </div>
        </div>

        <Tabs defaultValue="Salons" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              {testimonials.map((category) => (
                <TabsTrigger key={category.category} value={category.category}>
                  {category.category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {testimonials.map((category) => (
            <TabsContent
              key={category.category}
              value={category.category}
              className="w-full"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((testimonial, index) => (
                  <TestimonialCard
                    key={index}
                    quote={testimonial.quote}
                    name={testimonial.name}
                    role={testimonial.role}
                    avatar={testimonial.avatar}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

function TestimonialCard({ quote, name, role, avatar }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex flex-col h-full space-y-4">
          <div className="flex-1">
            <p className="text-muted-foreground">"{quote}"</p>
          </div>
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${avatar}`}
                alt={name}
              />
              <AvatarFallback>{name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">{name}</p>
              <p className="text-sm text-muted-foreground">{role}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
