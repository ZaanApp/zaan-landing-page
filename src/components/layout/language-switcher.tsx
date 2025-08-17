"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  // Remove the current locale from the pathname
  const pathnameWithoutLocale = pathname.replace(`/${locale}`, "") || "/";

  // Set the HTML dir attribute based on the locale
  React.useEffect(() => {
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  const switchLocale = (newLocale: string) => {
    // If we're on the default locale (en) and there's no locale prefix
    if (locale === "en" && !pathname.startsWith("/en")) {
      router.push(`/${newLocale}${pathname}`);
    } else {
      router.push(`/${newLocale}${pathnameWithoutLocale}`);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => switchLocale("en")}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchLocale("ar")}>
          العربية
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
