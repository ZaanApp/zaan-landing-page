"use client";

import { useState, useEffect } from "react";
import { createContext, useContext } from "react";

// Create a context for language
type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: () => "",
});

// Hook to use the language context
export const useLanguage = () => useContext(LanguageContext);

export function Providers({ children }: { children: React.ReactNode }) {
  // Initialize language from localStorage or default to Arabic
  const [language, setLanguage] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("zaan-language") || "ar";
    }
    return "ar";
  });
  const [translations, setTranslations] = useState<Record<string, any>>({});

  // Load translations based on language and save to localStorage
  useEffect(() => {
    // Save selected language to localStorage
    localStorage.setItem("zaan-language", language);

    const loadTranslations = async () => {
      try {
        // Dynamic import of translation files
        let module;
        if (language === "ar") {
          module = await import("../messages/ar.json");
        } else {
          module = await import("../messages/en.json");
        }

        setTranslations(module.default);

        // Set HTML dir attribute for RTL languages
        document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
        document.documentElement.lang = language;
      } catch (error) {
        console.error(`Failed to load translations for ${language}`, error);
        // Fallback to English
        try {
          const enModule = await import("../messages/en.json");
          setTranslations(enModule.default);
        } catch (fallbackError) {
          console.error("Failed to load fallback translations", fallbackError);
          setTranslations({});
        }
      }
    };

    loadTranslations();
  }, [language]);

  // Translation function
  const t = (key: string): string => {
    const keys = key.split(".");
    let result = translations;

    for (const k of keys) {
      if (result && typeof result === "object" && k in result) {
        result = result[k];
      } else {
        return key; // Return the key if translation not found
      }
    }

    return typeof result === "string" ? result : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
