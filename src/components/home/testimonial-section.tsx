"use client";

import Image from "next/image";
import { useLanguage } from "@/app/providers";

export function TestimonialSection() {
  const { t } = useLanguage();

  const testimonials = [
    {
      quote:
        "Zaan has completely transformed how we manage our salon. The scheduling system alone has saved us hours each week.",
      author: "Sarah Johnson",
      role: "Owner, Elegance Salon",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    {
      quote:
        "The financial reporting tools give me insights I never had before. I can make better business decisions with confidence.",
      author: "Michael Chen",
      role: "Director, Style Studio",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    },
    {
      quote:
        "Our clients love the online booking system, and we've seen a 30% increase in appointments since implementing Zaan.",
      author: "Aisha Patel",
      role: "Manager, Glow Beauty Spa",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aisha",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            {t("home.testimonials.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("home.testimonials.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-muted/20"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    unoptimized
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
