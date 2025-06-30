"use client";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/layout/footer";
import {
  ArrowRight,
  Calendar,
  Clock,
  Bell,
  Globe,
  Share2,
  CreditCard,
  Smartphone,
  Zap,
  MapPin,
  Star,
  Twitter,
  Phone,
  Mail,
  Instagram,
  Facebook,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ServicesTabs from "@/components/ServicesTabs";
import Gallery from "@/components/Gallery";
import { LanguageSwitcher } from "@/components/language-switcher";
import { AvatarFallback, AvatarImage,Avatar } from "@radix-ui/react-avatar";

export default function OnlineBookingPage() {
  const [language, setLanguage] = useState<"en" | "ar">("en");

  const content = {
    en: {
      hero: {
        title: "Nai Beauty Boutique",
        subtitle: "Premium Beauty Services",
      },
      info: {
        rating: "4.8",
        reviews: "(299)",
        openUntil: "Open until 10:00PM",
        location: "King Salman Neighborhood, Riyadh",
        getDirections: "Get directions",
      },
      services: {
        title: "Our Services",
        bookNow: "Book Now",
      },
      team: {
        title: "Team",
        seeAll: "See all",
      },
      gallery: {
        title: "Our Work",
      },
      contact: {
        title: "Additional information",
        openingTimes: "Opening times",
        instantConfirmation: "Instant Confirmation",
        payByApp: "Pay by app",
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        hours: "2:00PM - 10:00PM",
        phone: "582792728",
        email: "info.naibeautyboutique@gmail.com",
      },
    },
    ar: {
      hero: {
        title: "ناي بيوتي بوتيك",
        subtitle: "خدمات تجميل متميزة",
      },
      info: {
        rating: "4.8",
        reviews: "(299)",
        openUntil: "مفتوح حتى 10:00 مساءً",
        location: "حي الملك سلمان، الرياض",
        getDirections: "الحصول على الاتجاهات",
      },
      services: {
        title: "خدماتنا",
        bookNow: "احجز الآن",
      },
      team: {
        title: "الفريق",
        seeAll: "عرض الكل",
      },
      gallery: {
        title: "أعمالنا",
      },
      contact: {
        title: "معلومات إضافية",
        openingTimes: "أوقات العمل",
        instantConfirmation: "تأكيد فوري",
        payByApp: "الدفع عبر التطبيق",
        days: [
          "الإثنين",
          "الثلاثاء",
          "الأربعاء",
          "الخميس",
          "الجمعة",
          "السبت",
          "الأحد",
        ],
        hours: "2:00 مساءً - 10:00 مساءً",
        phone: "582792728",
        email: "info.naibeautyboutique@gmail.com",
      },
    },
  };

  const t = content[language];
  const dir = language === "ar" ? "rtl" : "ltr";

  // Mock team data
  const teamMembers = [
    {
      name: "Irene",
      role: "",
      rating: null,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Irene",
    },
    {
      name: "Norhawa",
      role: "",
      rating: null,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Norhawa",
    },
    {
      name: "Salome",
      role: "",
      rating: null,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Salome",
    },
    {
      name: "Cherry",
      role: "Nail Technician",
      rating: 5.0,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Cherry",
    },
    {
      name: "Jovelyn",
      role: "Nail Technical",
      rating: 4.9,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jovelyn",
    },
    {
      name: "Olivia",
      role: "Nail Technician",
      rating: 4.7,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Olivia",
    },
    {
      name: "Gerlita",
      role: "Nail Technician",
      rating: 4.9,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Gerlita",
    },
    {
      name: "Rubilyn",
      role: "Beautician",
      rating: 4.7,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rubilyn",
    },
  ];
  return (
    <div>
   <main
      className={`flex min-h-screen flex-col items-center bg-white ${language === "ar" ? "font-arabic" : ""}`}
      dir={dir}
    >
      

      {/* Hero Section with Video Background */}
      <section className="w-full h-[70vh] relative mt-16">
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://images.unsplash.com/video/upload/v1612099975/production%20ID%204587884_qqgq4z.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl">{t.hero.subtitle}</p>
        </div>
      </section>

      {/* Salon Info Bar */}
      <section className="w-full bg-white py-4 border-b">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            </div>
            <span className="font-bold">{t.info.rating}</span>
            <span className="text-gray-500">{t.info.reviews}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-gray-500" />
            <span>{t.info.openUntil}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-gray-500" />
            <span>{t.info.location}</span>
            <a href="#" className="text-purple-600 hover:underline">
              {t.info.getDirections}
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {t.services.title}
          </h2>
          <ServicesTabs language={language} />
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="w-full py-12 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">{t.team.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {teamMembers.slice(0, 8).map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <Avatar className="h-24 w-24 mb-3">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback className="bg-purple-100 text-purple-600 text-xl">
                    {member.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-medium text-lg">{member.name}</h3>
                {member.rating && (
                  <div className="flex items-center gap-1 mt-1">
                    <span className="font-bold">{member.rating}</span>
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  </div>
                )}
                {member.role && (
                  <p className="text-gray-500 text-sm">{member.role}</p>
                )}
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button variant="outline">{t.team.seeAll}</Button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="w-full py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">{t.gallery.title}</h2>
          <Gallery />
        </div>
      </section>

      {/* Contact & Information Section */}
      <section id="about" className="w-full py-12 bg-gray-50">
        <div className="container mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">
              {t.contact.openingTimes}
            </h2>
            <div className="space-y-3">
              {t.contact.days.map((day, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <span>{day}</span>
                  </div>
                  <span>{t.contact.hours}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">{t.contact.title}</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 text-green-500">✓</div>
                <span>{t.contact.instantConfirmation}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-5 w-5">💳</div>
                <span>{t.contact.payByApp}</span>
              </div>
              <div className="flex items-center gap-2 mt-6">
                <Phone className="h-5 w-5" />
                <a href={`tel:${t.contact.phone}`} className="hover:underline">
                  {t.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <a
                  href={`mailto:${t.contact.email}`}
                  className="hover:underline"
                >
                  {t.contact.email}
                </a>
              </div>
              <div className="flex gap-4 mt-6">
                <a href="#" className="text-gray-600 hover:text-purple-600">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-purple-600">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-purple-600">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[400px] bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.6554831255814!2d46.6252213!3d24.7249403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee38cc5676b1d%3A0x6c6d8e1b2a1c3d4e!2sKing%20Salman%20Rd%2C%20Riyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      {/* Footer */}
    

      {/* Mobile Book Now Button */}
      <div className="fixed bottom-6 left-0 right-0 flex justify-center md:hidden z-50">
        <Button size="lg" className="rounded-full px-8 shadow-lg">
          {t.services.bookNow}
        </Button>
      </div>
    </main>
    </div>
  );
}
