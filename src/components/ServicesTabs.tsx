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
import {
  Star,
  Scissors,
  Sparkles,
  Hand,
  Eye,
  Droplets,
  Heart,
  Waves,
  Zap,
  User,
  ChevronLeft,
  ChevronRight,
  Palette,
  Flower2,
  Brush,
} from "lucide-react";
import { ScrollArea } from "../components/ui/scroll-area";
import Image from "next/image";

interface Service {
  id: string;
  name: string;
  nameAr?: string;
  price: number;
  originalPrice?: number;
  rating: number;
  category: string;
  subcategory: string;
  type: "service" | "offer" | "package" | "daily-deal";
  description?: string;
  descriptionAr?: string;
  duration?: string;
  durationAr?: string;
  includes?: string[];
  includesAr?: string[];
  image?: string;
}

interface MainCategory {
  id: string;
  name: string;
  nameAr: string;
  subcategories: SubCategory[];
  image?: string;
}

interface SubCategory {
  id: string;
  name: string;
  nameAr: string;
}

interface ServiceTabsProps {
  language?: "en" | "ar";
}

const ServicesTabs = ({ language = "en" }: ServiceTabsProps) => {
  const isArabic = language === "ar";
  const [activeFilter, setActiveFilter] = useState("services");
  const [selectedMainCategory, setSelectedMainCategory] = useState<
    string | null
  >(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(
    null,
  );

  // Main categories with subcategories
  const mainCategories: MainCategory[] = [
    {
      id: "hair",
      name: "Hair",
      nameAr: "الشعر",
      image:"/onlinebookingicon/hair.png",
      subcategories: [
        { id: "cut", name: "Cut", nameAr: "قص" },
        { id: "color", name: "Color", nameAr: "صبغ" },
        { id: "styling", name: "Styling", nameAr: "تصفيف" },
        { id: "treatment", name: "Treatment", nameAr: "علاج" },
      ],
    },
    {
      id: "face",
      name: "Face",
      nameAr: "الوجه",
      image:"/onlinebookingicon/face.png",
      subcategories: [
        { id: "facial", name: "Facial", nameAr: "فيشل" },
        { id: "cleansing", name: "Cleansing", nameAr: "تنظيف" },
        { id: "hydration", name: "Hydration", nameAr: "ترطيب" },
        { id: "anti-aging", name: "Anti-Aging", nameAr: "مكافحة الشيخوخة" },
      ],
    },
    {
      id: "nails",
      name: "Nails",
      nameAr: "الأظافر",
      image:"/onlinebookingicon/nails.png",
      subcategories: [
        { id: "manicure", name: "Manicure", nameAr: "مانيكير" },
        { id: "pedicure", name: "Pedicure", nameAr: "بديكير" },
        { id: "gel-polish", name: "Gel Polish", nameAr: "طلاء جل" },
        { id: "nail-art", name: "Nail Art", nameAr: "فن الأظافر" },
      ],
    },
    {
      id: "lashes-brows",
      name: "Lashes & Brows",
      nameAr: "الرموش والحواجب",
      image:"/onlinebookingicon/nails.png",
      subcategories: [
        {
          id: "lash-extensions",
          name: "Lash Extensions",
          nameAr: "تمديد الرموش",
        },
        { id: "lash-lift", name: "Lash Lift", nameAr: "رفع الرموش" },
        { id: "brow-shaping", name: "Brow Shaping", nameAr: "تشكيل الحواجب" },
        { id: "brow-tinting", name: "Brow Tinting", nameAr: "صبغ الحواجب" },
      ],
    },
    {
      id: "skincare",
      name: "Skincare",
      nameAr: "العناية بالبشرة",
      image:"/onlinebookingicon/skin.png",
      subcategories: [
        { id: "deep-cleansing", name: "Deep Cleansing", nameAr: "تنظيف عميق" },
        { id: "exfoliation", name: "Exfoliation", nameAr: "تقشير" },
        { id: "moisturizing", name: "Moisturizing", nameAr: "ترطيب" },
        {
          id: "acne-treatment",
          name: "Acne Treatment",
          nameAr: "علاج حب الشباب",
        },
      ],
    },
    {
      id: "massage",
      name: "Massage",
      nameAr: "التدليك",
      image:"/onlinebookingicon/massageicon.png",
      subcategories: [
        { id: "relaxation", name: "Relaxation", nameAr: "استرخاء" },
        { id: "deep-tissue", name: "Deep Tissue", nameAr: "الأنسجة العميقة" },
        { id: "hot-stone", name: "Hot Stone", nameAr: "الحجر الساخن" },
        { id: "aromatherapy", name: "Aromatherapy", nameAr: "العلاج العطري" },
      ],
    },
    {
      id: "moroccan-bath",
      name: "Moroccan Bath",
      nameAr: "الحمام المغربي",
      image:"/onlinebookingicon/massageicon.png",
      subcategories: [
        { id: "traditional", name: "Traditional", nameAr: "تقليدي" },
        { id: "luxury", name: "Luxury", nameAr: "فاخر" },
        { id: "couples", name: "Couples", nameAr: "للأزواج" },
      ],
    },
    {
      id: "waxing",
      name: "Waxing",
      nameAr: "إزالة الشعر بالشمع",
      image:"/onlinebookingicon/wax.png",
      subcategories: [
        { id: "full-body", name: "Full Body", nameAr: "الجسم كامل" },
        { id: "partial", name: "Partial", nameAr: "جزئي" },
        { id: "brazilian", name: "Brazilian", nameAr: "برازيلي" },
        { id: "eyebrow", name: "Eyebrow", nameAr: "الحواجب" },
      ],
    },
    {
      id: "body-treatments",
      name: "Body Treatments",
      nameAr: "علاجات الجسم",
      image:"/onlinebookingicon/body.png",
      subcategories: [
        { id: "body-wrap", name: "Body Wrap", nameAr: "لف الجسم" },
        { id: "scrub", name: "Body Scrub", nameAr: "تقشير الجسم" },
        {
          id: "cellulite",
          name: "Cellulite Treatment",
          nameAr: "علاج السيلوليت",
        },
        { id: "slimming", name: "Slimming", nameAr: "التنحيف" },
      ],
    },
  ];

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
      category: "nails",
      subcategory: "manicure",
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
      category: "face",
      subcategory: "facial",
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
      category: "nails",
      subcategory: "manicure",
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
      category: "nails",
      subcategory: "gel-polish",
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
      subcategory: "cut",
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
      category: "face",
      subcategory: "facial",
      type: "service",
      description: "Complete facial treatment with extraction",
      descriptionAr: "علاج وجه كامل مع إزالة الرؤوس السوداء",
      duration: "75 min",
      durationAr: "75 دقيقة",
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=80",
    },
    {
      id: "s5",
      name: "Hair Color Treatment",
      nameAr: "علاج صبغ الشعر",
      price: 450,
      rating: 4.9,
      category: "hair",
      subcategory: "color",
      type: "service",
      description: "Professional hair coloring with premium products",
      descriptionAr: "صبغ شعر احترافي بمنتجات فاخرة",
      duration: "120 min",
      durationAr: "120 دقيقة",
      image:
        "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&q=80",
    },
    {
      id: "s6",
      name: "Lash Extensions",
      nameAr: "تمديد الرموش",
      price: 280,
      rating: 4.7,
      category: "lashes-brows",
      subcategory: "lash-extensions",
      type: "service",
      description: "Individual lash extensions for natural look",
      descriptionAr: "تمديد رموش فردي للحصول على مظهر طبيعي",
      duration: "90 min",
      durationAr: "90 دقيقة",
      image:
        "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&q=80",
    },
    {
      id: "s7",
      name: "Relaxation Massage",
      nameAr: "تدليك الاسترخاء",
      price: 320,
      rating: 4.8,
      category: "massage",
      subcategory: "relaxation",
      type: "service",
      description: "Full body relaxation massage",
      descriptionAr: "تدليك استرخاء للجسم كامل",
      duration: "60 min",
      durationAr: "60 دقيقة",
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=80",
    },
    {
      id: "s8",
      name: "Traditional Moroccan Bath",
      nameAr: "الحمام المغربي التقليدي",
      price: 250,
      rating: 4.9,
      category: "moroccan-bath",
      subcategory: "traditional",
      type: "service",
      description: "Authentic Moroccan bath experience",
      descriptionAr: "تجربة الحمام المغربي الأصيل",
      duration: "90 min",
      durationAr: "90 دقيقة",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80",
    },

    // Special Offers
    {
      id: "o1",
      name: "New Client Special - 20% Off",
      nameAr: "عرض العميل الجديد - خصم 20%",
      price: 240,
      originalPrice: 300,
      rating: 4.9,
      category: "face",
      subcategory: "facial",
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
      category: "nails",
      subcategory: "manicure",
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
      category: "hair",
      subcategory: "styling",
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
      category: "nails",
      subcategory: "manicure",
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
      category: "face",
      subcategory: "facial",
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
    let filteredServices = [];

    switch (activeFilter) {
      case "packages":
        filteredServices = services.filter(
          (service) => service.type === "package",
        );
        break;
      case "daily-offers":
        filteredServices = services.filter(
          (service) =>
            service.type === "offer" || service.type === "daily-deal",
        );
        break;
      case "services":
      default:
        filteredServices = services.filter(
          (service) => service.type === "service",
        );
        break;
    }

    // Apply category and subcategory filters for services
    if (activeFilter === "services") {
      if (selectedMainCategory) {
        filteredServices = filteredServices.filter(
          (service) => service.category === selectedMainCategory,
        );
      }
      if (selectedSubCategory) {
        filteredServices = filteredServices.filter(
          (service) => service.subcategory === selectedSubCategory,
        );
      }
    }

    return filteredServices;
  };

  // Get current main category object
  const getCurrentMainCategory = () => {
    return mainCategories.find((cat) => cat.id === selectedMainCategory);
  };

  // Handle main category selection
  const handleMainCategorySelect = (categoryId: string) => {
    if (selectedMainCategory === categoryId) {
      setSelectedMainCategory(null);
      setSelectedSubCategory(null);
    } else {
      setSelectedMainCategory(categoryId);
      setSelectedSubCategory(null);
    }
  };

  // Handle subcategory selection
  const handleSubCategorySelect = (subcategoryId: string) => {
    if (selectedSubCategory === subcategoryId) {
      setSelectedSubCategory(null);
    } else {
      setSelectedSubCategory(subcategoryId);
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
      <div className="flex flex-wrap justify-center gap-3 mb-8 w-full overflow-x-auto">
  {filterOptions.map((filter) => (
    <Button
      key={filter.id}
      variant={activeFilter === filter.id ? "default" : "outline"}
      onClick={() => {
        setActiveFilter(filter.id);
        setSelectedMainCategory(null);
        setSelectedSubCategory(null);
      }}
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

{/* Category Navigation - Only show for Services */}
{activeFilter === "services" && (
  <div className="mb-8">
    <div className="w-full overflow-x-auto">
      <div className="flex flex-nowrap gap-1 pb-4 px-4 min-w-max">
        {mainCategories.map((category, index) => {
          const IconComponent = category.image ?? "/default-icon.png";;
          return (
            <React.Fragment key={category.id}>
              <button
                onClick={() => handleMainCategorySelect(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all whitespace-nowrap ${
                  selectedMainCategory === category.id
                    ? "bg-[#00abc2] text-white"
                    : "text-gray-700 hover:text-[#00abc2] hover:bg-[#00abc2]/10"
                }`}
              >
                
                <Image
        src={IconComponent}
        width={20}
        height={20}
        alt=""
        className="h-5 w-4"
      />
                <span className="text-sm font-medium">
                  {isArabic ? category.nameAr : category.name}
                </span>
              </button>
              {index < mainCategories.length - 1 && (
                <div className="flex items-center px-2">
                  <div className="w-px h-4 bg-gray-300"></div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>

    {selectedMainCategory && getCurrentMainCategory() && (
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">
            {isArabic
              ? getCurrentMainCategory()?.nameAr
              : getCurrentMainCategory()?.name}
          </h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setSelectedMainCategory(null);
              setSelectedSubCategory(null);
            }}
            className="text-gray-500 hover:text-gray-700"
          >
            {isArabic ? "إغلاق" : "Close"}
          </Button>
        </div>

        <div className="w-full overflow-x-auto">
          <div className="flex flex-nowrap gap-2 min-w-max justify-content-center">
            {getCurrentMainCategory()?.subcategories.map((subcategory) => (
              <Button
                key={subcategory.id}
                variant={
                  selectedSubCategory === subcategory.id
                    ? "default"
                    : "outline"
                }
                size="sm"
                onClick={() => handleSubCategorySelect(subcategory.id)}
                className={`rounded-full ${
                  selectedSubCategory === subcategory.id
                    ? "bg-[#00abc2] hover:bg-[#00abc2] text-white"
                    : "border-gray-200 hover:bg-gray-50"
                }`}
              >
                {isArabic ? subcategory.nameAr : subcategory.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    )}
  </div>
)}


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
