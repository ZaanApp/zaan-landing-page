"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Settings, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/app/providers";

export default function OperationsPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-background">
      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_800px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    {t("features.operations.heroTitle")}
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    {t("features.operations.heroDescription")}
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="font-medium">
                    <Link href="/register">
                      {t("features.operations.startFreeTrial")}
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl lg:aspect-square">
                <Image
                  src="https://images.unsplash.com/photo-1470259078422-826894b933aa?w=800&q=80"
                  alt={t("features.operations.title")}
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
                    <Calendar className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold">
                      {t("features.operations.appointmentScheduling.title")}
                    </h2>
                    <p className="text-muted-foreground">
                      {t(
                        "features.operations.appointmentScheduling.description",
                      )}
                    </p>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        {t(
                          "features.operations.appointmentScheduling.feature1",
                        )}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        {t(
                          "features.operations.appointmentScheduling.feature2",
                        )}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        {t(
                          "features.operations.appointmentScheduling.feature3",
                        )}
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="relative aspect-video overflow-hidden rounded-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80"
                    alt={t("features.operations.appointments.title")}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Feature 2 */}
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="relative aspect-video overflow-hidden rounded-xl order-2 lg:order-1">
                  <Image
                    src="https://images.unsplash.com/photo-1529539795054-3c162aab037a?w=800&q=80"
                    alt={t("features.operations.staffManagement.title")}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center space-y-4 order-1 lg:order-2">
                  <div className="p-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold">
                      {t("features.operations.staffManagement.title")}
                    </h2>
                    <p className="text-muted-foreground">
                      {t("features.operations.staffManagement.description")}
                    </p>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        {t("features.operations.staffManagement.feature1")}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        {t("features.operations.staffManagement.feature2")}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        {t("features.operations.staffManagement.feature3")}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="p-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Settings className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold">
                      {t("features.operations.inventoryControl.title")}
                    </h2>
                    <p className="text-muted-foreground">
                      {t("features.operations.inventoryControl.description")}
                    </p>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        {t("features.operations.inventoryControl.feature1")}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        {t("features.operations.inventoryControl.feature2")}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        {t("features.operations.inventoryControl.feature3")}
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="relative aspect-video overflow-hidden rounded-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&q=80"
                    alt={t("features.operations.inventoryControl.title")}
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
                  {t("features.operations.ctaTitle")}
                </h2>
                <p className="max-w-[900px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("features.operations.ctaDescription")}
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="font-medium"
                >
                  <Link href="/register">
                    {t("features.operations.startFreeTrial")}
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Link href="/contact">
                    {t("features.operations.scheduleDemo")}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
