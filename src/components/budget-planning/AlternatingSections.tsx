import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AlternatingSections() {
  const section = {
    title: "Interactive Budget Dashboard",
    description:
      "Take control of your salon's finances with our interactive budget dashboard. View real-time comparisons between planned and actual expenses, track revenue streams, and monitor key financial metrics all in one place. The intuitive visual interface makes it easy to spot trends, identify opportunities, and make data-driven decisions to optimize your salon's financial performance.",
    imageSrc:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
    imageAlt: "Interactive budget dashboard with financial metrics",
    cta: {
      text: "Explore Dashboard",
      href: "/features/finance/financial-reports",
    },
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-lg overflow-hidden shadow-lg aspect-video">
              <Image
                src={section.imageSrc}
                alt={section.imageAlt}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
            <p className="text-muted-foreground mb-6">{section.description}</p>
            <Button variant="outline" asChild>
              <Link href={section.cta.href}>{section.cta.text}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
