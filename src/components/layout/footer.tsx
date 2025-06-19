"use client";

import Link from "next/link";
import { useLanguage } from "@/app/providers";
import { Linkedin, Instagram, Twitter } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-white border-t py-12">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-palette-darkTeal">Zaan</h3>
          <p className="text-muted-foreground">{t("footer.description")}</p>
        </div>

        <div>
          <h4 className="font-medium mb-4 text-palette-darkTeal">
            {t("footer.features")}
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/features/operations"
                className="text-muted-foreground hover:text-foreground"
              >
                {t("features.operations.title")}
              </Link>
            </li>
            <li>
              <Link
                href="/features/sales"
                className="text-muted-foreground hover:text-foreground"
              >
                {t("features.sales.title")}
              </Link>
            </li>
            <li>
              <Link
                href="/features/finance"
                className="text-muted-foreground hover:text-foreground"
              >
                {t("features.finance.title")}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-4 text-palette-darkTeal">
            {t("footer.company")}
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/about"
                className="text-muted-foreground hover:text-foreground"
              >
                {t("footer.aboutUs")}
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="text-muted-foreground hover:text-foreground"
              >
                {t("footer.pricing")}
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-foreground"
              >
                {t("footer.contact")}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-4 text-palette-darkTeal">
            {t("footer.legal")}
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/privacy"
                className="text-muted-foreground hover:text-foreground"
              >
                {t("footer.privacyPolicy")}
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="text-muted-foreground hover:text-foreground"
              >
                {t("footer.termsOfService")}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mt-8 pt-8 border-t">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Zaan. {t("footer.allRightsReserved")}
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <span className="sr-only">Twitter</span>
              <Twitter size={20} />
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <span className="sr-only">Instagram</span>
              <Instagram size={20} />
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
