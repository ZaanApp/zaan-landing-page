import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AlternatingSections() {
  const sections = [
    {
      title: "Real-Time Financial Dashboard",
      description:
        "Get a comprehensive view of your salon's financial health at a glance. Our intuitive dashboard displays key metrics like daily revenue, expense categories, profit margins, and cash flow in real-time. Make informed decisions with up-to-the-minute financial data always at your fingertips.",
      imageSrc:
        "/ExpenseAndRevenueManagementImages/exp-and-rev-in-Zaan-2.png",
      imageAlt: "Financial dashboard with charts and graphs",
      reverse: false,
      cta: {
        text: "Explore Dashboard",
        href: "/features/finance/financial-reports",
      },
    },
    {
      title: "Simplified Expense Categorization",
      description:
        "Say goodbye to manual expense sorting. Our intelligent system automatically categorizes your expenses based on vendor information and transaction patterns. Easily track spending across categories like inventory, utilities, marketing, and staff costs. Generate expense reports with just a few clicks for better financial planning.",
      imageSrc:
        "/ExpenseAndRevenueManagementImages/exp-and-rev-in-Zaan-3.png",
      imageAlt: "Expense categorization interface",
      reverse: true,
      cta: {
        text: "Learn More",
        href: "/features/finance/expense-revenue/details",
      },
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col ${section.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 items-center mb-20 last:mb-0`}
          >
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-lg overflow-hidden shadow-lg aspect-video">
                <Image
                  src={section.imageSrc}
                  alt={section.imageAlt}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
              <p className="text-muted-foreground mb-6">
                {section.description}
              </p>
              <Button variant="outline" asChild>
                <Link href={section.cta.href}>{section.cta.text}</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
