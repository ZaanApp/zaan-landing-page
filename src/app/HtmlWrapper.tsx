"use client";

import { useLanguage } from "@/app/providers";
import { useEffect } from "react";

export function HtmlWrapper({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage();
  const isArabic = language === "ar";

  useEffect(() => {
    document.documentElement.lang = isArabic ? "ar" : "en";
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
  }, [isArabic]);

  return (
    <div className={isArabic ? "font-arabic" : "font-default"}>
      {children}
    </div>
  );
}
