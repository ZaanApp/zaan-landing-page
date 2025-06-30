"use client";

import React, { useState } from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../components/ui/tabs";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardFooter } from "../components/ui/card";
import { Star } from "lucide-react";

interface Service {
  id: string;
  name: string;
  nameAr?: string;
  price: number;
  originalPrice?: number;
  rating: number;
  category: string;
  type: "service" | "offer" | "package" | "daily-deal";
  description?: string;
  descriptionAr?: string;
  duration?: string;
  durationAr?: string;
  includes?: string[];
  includesAr?: string[];
  image?: string;
}

interface ServiceTabsProps {
  language?: "en" | "ar";
}

const ServicesTabs = ({ language = "en" }: ServiceTabsProps) => {
  const isArabic = language === "ar";
  const [activeFilter, setActiveFilter] = useState("services");

  // Comprehensive data for services, offers, packages, and daily deals
  const services: Service[] = [
    // Daily Deals
    {
      id: "dd1",
      name: "Morning Special - Classic Manicure",
      nameAr: "عرض الصباح - مانيكير كلاسيكي",
      price: 80,
      originalPrice: 120,
      rating: 4.9,
      category: "daily-offers",
      type: "daily-deal",
      description: "Available until 12 PM only",
      descriptionAr: "متاح حتى الساعة 12 ظهراً فقط",
      duration: "45 min",
      durationAr: "45 دقيقة",
      image:
        "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=80",
    },
    {
      id: "dd2",
      name: "Midweek Glow - Express Facial",
      nameAr: "إشراقة منتصف الأسبوع - فيشل سريع",
      price: 200,
      originalPrice: 280,
      rating: 4.8,
      category: "daily-offers",
      type: "daily-deal",
      description: "Tuesday & Wednesday only",
      descriptionAr: "الثلاثاء والأربعاء فقط",
      duration: "30 min",
      durationAr: "30 دقيقة",
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=80",
    },

    // Regular Services
    {
      id: "s1",
      name: "Classic Manicure",
      nameAr: "مانيكير كلاسيكي",
      price: 120,
      rating: 4.9,
      category: "nail-art",
      type: "service",
      description: "Professional nail care with cuticle treatment",
      descriptionAr: "عناية احترافية بالأظافر مع علاج الجلد الميت",
      duration: "45 min",
      durationAr: "45 دقيقة",
      image:
        "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=80",
    },
    {
      id: "s2",
      name: "Gel Polish Application",
      nameAr: "تطبيق طلاء الجل",
      price: 150,
      rating: 4.8,
      category: "nail-art",
      type: "service",
      description: "Long-lasting gel polish with UV curing",
      descriptionAr: "طلاء جل طويل الأمد مع التجفيف بالأشعة فوق البنفسجية",
      duration: "60 min",
      durationAr: "60 دقيقة",
      image:
        "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=400&q=80",
    },
    {
      id: "s3",
      name: "Hair Cut & Style",
      nameAr: "قص وتصفيف الشعر",
      price: 300,
      rating: 4.8,
      category: "hair",
      type: "service",
      description: "Professional haircut with styling",
      descriptionAr: "قص شعر احترافي مع التصفيف",
      duration: "90 min",
      durationAr: "90 دقيقة",
      image:
        "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&q=80",
    },
    {
      id: "s4",
      name: "Deep Cleansing Facial",
      nameAr: "فيشل التنظيف العميق",
      price: 350,
      rating: 4.8,
      category: "facial",
      type: "service",
      description: "Complete facial treatment with extraction",
      descriptionAr: "علاج وجه كامل مع إزالة الرؤوس السوداء",
      duration: "75 min",
      durationAr: "75 دقيقة",
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=80",
    },

    // Special Offers
    {
      id: "o1",
      name: "New Client Special - 20% Off",
      nameAr: "عرض العميل الجديد - خصم 20%",
      price: 240,
      originalPrice: 300,
      rating: 4.9,
      category: "daily-offers",
      type: "offer",
      description: "First visit discount on any service",
      descriptionAr: "خصم الزيارة الأولى على أي خدمة",
      duration: "Varies",
      durationAr: "متغير",
      image:
        "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&q=80",
    },
    {
      id: "o2",
      name: "Student Discount - Nail Services",
      nameAr: "خصم الطلاب - خدمات الأظافر",
      price: 100,
      originalPrice: 150,
      rating: 4.7,
      category: "nail-art",
      type: "offer",
      description: "15% off with valid student ID",
      descriptionAr: "خصم 15% مع هوية الطالب الصالحة",
      duration: "60 min",
      durationAr: "60 دقيقة",
      image:
        "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=80",
    },

    // Packages
    {
      id: "p1",
      name: "Bridal Beauty Package",
      nameAr: "باقة جمال العروس",
      price: 1200,
      originalPrice: 1500,
      rating: 5.0,
      category: "makeup",
      type: "package",
      description: "Complete bridal preparation",
      descriptionAr: "تحضير كامل للعروس",
      duration: "4 hours",
      durationAr: "4 ساعات",
      includes: [
        "Hair styling",
        "Makeup application",
        "Manicure & Pedicure",
        "Facial treatment",
      ],
      includesAr: [
        "تصفيف الشعر",
        "تطبيق المكياج",
        "مانيكير وبديكير",
        "علاج الوجه",
      ],
      image:
        "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&q=80",
    },
    {
      id: "p2",
      name: "Monthly Maintenance Package",
      nameAr: "باقة الصيانة الشهرية",
      price: 800,
      originalPrice: 1000,
      rating: 4.9,
      category: "nail-art",
      type: "package",
      description: "4 sessions of nail care per month",
      descriptionAr: "4 جلسات عناية بالأظافر شهرياً",
      duration: "Monthly",
      durationAr: "شهرياً",
      includes: [
        "Weekly manicure",
        "Gel polish touch-up",
        "Cuticle care",
        "Hand massage",
      ],
      includesAr: [
        "مانيكير أسبوعي",
        "تجديد طلاء الجل",
        "عناية بالجلد الميت",
        "تدليك اليدين",
      ],
      image:
        "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=400&q=80",
    },
    {
      id: "p3",
      name: "Glow Up Package",
      nameAr: "باقة الإشراق",
      price: 650,
      originalPrice: 800,
      rating: 4.8,
      category: "facial",
      type: "package",
      description: "Complete facial rejuvenation",
      descriptionAr: "تجديد كامل للوجه",
      duration: "2.5 hours",
      durationAr: "2.5 ساعة",
      includes: [
        "Deep cleansing facial",
        "Hydrating mask",
        "Eye treatment",
        "Lip care",
      ],
      includesAr: [
        "فيشل التنظيف العميق",
        "قناع مرطب",
        "علاج العينين",
        "عناية الشفاه",
      ],
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=80",
    },
  ];

  // Filter options
  const filterOptions = [
    {
      id: "services",
      name: "Services",
      nameAr: "الخدمات",
    },
    {
      id: "packages",
      name: "Packages",
      nameAr: "الباقات",
    },
    {
      id: "daily-offers",
      name: "Daily Offers & Deals",
      nameAr: "العروض والصفقات اليومية",
    },
  ];

  // Function to filter services based on active filter
  const getFilteredServices = () => {
    switch (activeFilter) {
      case "packages":
        return services.filter((service) => service.type === "package");
      case "daily-offers":
        return services.filter(
          (service) =>
            service.type === "offer" || service.type === "daily-deal",
        );
      case "services":
      default:
        return services.filter((service) => service.type === "service");
    }
  };

  // Helper function to get type badge color
  const getTypeBadgeColor = (type: Service["type"]) => {
    switch (type) {
      case "daily-deal":
        return "bg-red-100 text-red-800";
      case "offer":
        return "bg-green-100 text-green-800";
      case "package":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-blue-100 text-blue-800";
    }
  };

  // Helper function to get type label
  const getTypeLabel = (type: Service["type"]) => {
    const labels = {
      "daily-deal": isArabic ? "صفقة اليوم" : "Daily Deal",
      offer: isArabic ? "عرض خاص" : "Special Offer",
      package: isArabic ? "باقة" : "Package",
      service: isArabic ? "خدمة" : "Service",
    };
    return labels[type];
  };

  return (
    <div className={`w-full bg-white p-4 ${isArabic ? "rtl" : "ltr"}`}>
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {filterOptions.map((filter) => (
          <Button
            key={filter.id}
            variant={activeFilter === filter.id ? "default" : "outline"}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-6 py-2 rounded-full transition-all ${
              activeFilter === filter.id
                ? "bg-[#00abc2] hover:bg-[#00abc2] text-white"
                : "border-gray-200 hover:bg-gray-50"
            }`}
          >
            {isArabic ? filter.nameAr : filter.name}
          </Button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {getFilteredServices().map((service) => (
          <Card
            key={service.id}
            className="overflow-hidden hover:shadow-lg transition-shadow"
          >
            {/* Service Image */}
            {service.image && (
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={isArabic ? service.nameAr : service.name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <CardContent className="p-4">
              {/* Type Badge */}
              <div className="flex justify-between items-start mb-2">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeBadgeColor(service.type)}`}
                >
                  {getTypeLabel(service.type)}
                </span>
                {service.duration && (
                  <span className="text-xs text-gray-500">
                    {isArabic ? service.durationAr : service.duration}
                  </span>
                )}
              </div>

              {/* Service Name */}
              <h3 className="font-medium text-lg mb-2">
                {isArabic ? service.nameAr : service.name}
              </h3>

              {/* Description */}
              {service.description && (
                <p className="text-sm text-gray-600 mb-3">
                  {isArabic ? service.descriptionAr : service.description}
                </p>
              )}

              {/* Includes (for packages) */}
              {service.includes && service.includes.length > 0 && (
                <div className="mb-3">
                  <p className="text-xs font-medium text-gray-700 mb-1">
                    {isArabic ? "يشمل:" : "Includes:"}
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {(isArabic ? service.includesAr : service.includes)?.map(
                      (item, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-1 h-1 bg-[#00abc2] rounded-full mr-2"></span>
                          {item}
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              )}

              {/* Price and Rating */}
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="ml-1 text-sm">{service.rating}</span>
                </div>
                <div className="text-right">
                  {service.originalPrice && (
                    <div className="text-sm text-gray-500 line-through">
                      {service.originalPrice} SAR
                    </div>
                  )}
                  <div className="text-lg font-semibold text-[#00abc2]">
                    {service.price} SAR
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button className="w-full bg-[#00abc2] hover:bg-[#00abc2]">
                {isArabic ? "احجز الآن" : "Book Now"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServicesTabs;
