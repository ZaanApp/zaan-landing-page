"use client";

import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLanguage } from "@/app/providers";
import { ThemeSwitcher } from "@/components/theme-switcher";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  const { t } = useLanguage();
  const pathname = usePathname();
  const showBusinessName = pathname === "/features/operations/online-booking";

  const handleMenuEnter = () => {
    if (timeoutId.current) clearTimeout(timeoutId.current);
    setOpen(true);
  };

  const handleMenuLeave = () => {
    timeoutId.current = setTimeout(() => {
      setOpen(false);
    }, 200);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center justify-start md:justify-normal">
            {showBusinessName ? (
              <Link href="/" className="flex items-center space-x-1">
                <Image
                  src="/logo/logoonline.png"
                  alt="Logo"
                  className="h-16 w-auto"
                  width={1000}
                  height={1000}
                />
              </Link>
            ) : (
              <Link href="/" className="flex items-center space-x-1">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  className="h-20 w-auto"
                  width={1000}
                  height={1000}
                />
              </Link>
            )}
          </div>

          <nav className="hidden md:flex gap-6">
            {/* Features Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMenuEnter}
              onMouseLeave={handleMenuLeave}
            >
              <button className="flex items-center pr-0 text-sm font-medium">
                {t("navigation.features")}
                <ChevronDown size={16} />
              </button>

              {open && (
                <div
                  className="fixed top-[64px] left-0 w-full bg-white shadow-lg border-t border-gray-200 z-50"
                  onMouseEnter={handleMenuEnter}
                  onMouseLeave={handleMenuLeave}
                >
                  <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {/* Operations */}
                    <div>
                      <h4 className="font-bold mb-4 text-palette-darkTeal">
                        <Link href="/features/operations">
                          {t("features.operations.title")}
                        </Link>
                      </h4>
                      <ul className="space-y-2 pl-0 sm:pl-4 text-sm text-neutral-500">
            <li className=" hover:text-palette-darkTeal">
              <Link href="/features/operations/appointment-reminders">
                {t("features.operations.subfeatures.appointmentReminders")}
              </Link>
            </li>
            <li className=" hover:text-palette-darkTeal">
              <Link href="/features/operations/online-booking">
                {t("features.operations.subfeatures.onlineBooking")}
              </Link>
            </li>
            <li className=" hover:text-palette-darkTeal">
              <Link href="/features/operations/calendar-view">
                {t("features.operations.subfeatures.calendarView")}
              </Link>
            </li>
            <li className=" hover:text-palette-darkTeal">
              <Link href="/features/operations/staff-appointments">
                {t("features.operations.subfeatures.staffAppointments")}
              </Link>
            </li>
            <li className=" hover:text-palette-darkTeal">
              <Link href="/features/operations/customer-profiles">
                {t("features.operations.subfeatures.customerProfiles")}
              </Link>
            </li>
            <li className=" hover:text-palette-darkTeal">
              <Link href="/features/operations/service-records">
                {t("features.operations.subfeatures.serviceRecords")}
              </Link>
            </li>
            <li className=" hover:text-palette-darkTeal">
              <Link href="/features/operations/loyalty-programs">
                {t("features.operations.subfeatures.loyaltyPrograms")}
              </Link>
            </li>
            <li className=" hover:text-palette-darkTeal">
              <Link href="/features/operations/customer-communication">
                {t("features.operations.subfeatures.customerCommunication")}
              </Link>
            </li>
          </ul>
                    </div>

                    {/* Sales */}
                    <div>
                      <h4 className="font-bold mb-4 text-palette-darkTeal">
                        <Link href="/features/sales">
                          {t("features.sales.title")}
                        </Link>
                      </h4>
                      <ul className="space-y-2 pl-0 sm:pl-4 text-sm text-neutral-500">
            <li className=" hover:text-palette-darkTeal">
              <Link href="/features/sales/process-payments">
                {t("features.sales.subfeatures.processPayments")}
              </Link>
            </li>
            <li className=" hover:text-palette-darkTeal">
              <Link href="/features/sales/invoices-receipts">
                {t("features.sales.subfeatures.invoicesReceipts")}
              </Link>
            </li>
            <li className=" hover:text-palette-darkTeal">
              <Link href="/features/sales/tax-management">
                {t("features.sales.subfeatures.taxManagement")}
              </Link>
            </li>
            <li className=" hover:text-palette-darkTeal">
              <Link href="/features/sales/email-campaigns">
                {t("features.sales.subfeatures.emailCampaigns")}
              </Link>
            </li>
            <li className=" hover:text-palette-darkTeal">
              <Link href="/features/sales/sms-marketing">
                {t("features.sales.subfeatures.smsMarketing")}
              </Link>
            </li>
            <li className=" hover:text-palette-darkTeal">
              <Link href="/features/sales/whatsapp-integration">
                {t("features.sales.subfeatures.whatsappIntegration")}
              </Link>
            </li>
            <li className=" hover:text-palette-darkTeal">
              <Link href="/features/sales/offers-discounts">
                {t("features.sales.subfeatures.offersDiscounts")}
              </Link>
            </li>
          </ul>
                    </div>

                    {/* Finance */}
                    <div>
                      <h4 className="font-bold mb-4 text-palette-darkTeal">
                        <Link href="/features/finance">
                          {t("features.finance.title")}
                        </Link>
                      </h4>
                      <ul className="space-y-2 pl-0 sm:pl-4 text-sm text-neutral-500">
            <li className=" hover:text-palette-darkTeal">
              <Link href="/features/finance/expense-revenue">
                {t("features.finance.subfeatures.expenseRevenue")}
              </Link>
            </li>
            <li className=" hover:text-palette-darkTeal">
              <Link href="/features/finance/budget-planning">
                {t("features.finance.subfeatures.budgetPlanning")}
              </Link>
            </li>
            <li className=" hover:text-palette-darkTeal">
              <Link href="/features/finance/financial-reports">
                {t("features.finance.subfeatures.financialReports")}
              </Link>
            </li>
            <li className=" hover:text-palette-darkTeal">
              <Link href="/features/finance/salary-commission">
                {t("features.finance.subfeatures.salaryCommission")}
              </Link>
            </li>
            <li className=" hover:text-palette-darkTeal">
              <Link href="/features/finance/payment-vouchers">
                {t("features.finance.subfeatures.paymentVouchers")}
              </Link>
            </li>
            <li className=" hover:text-palette-darkTeal">
              <Link href="/features/finance/tax-insurance">
                {t("features.finance.subfeatures.taxInsurance")}
              </Link>
            </li>
          </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-4 text-palette-darkTeal">
                        <Link href="/features/operations">
                         Mobile Apps
                        </Link>
                      </h4>
                      <ul className="space-y-2 pl-0 sm:pl-4 text-sm text-neutral-500">
            <li className=" hover:text-palette-darkTeal">
              <Link href="/features/operations/appointment-reminders">
                Link1
              </Link>
            </li>
            <li className=" hover:text-palette-darkTeal">
              <Link href="/features/operations/online-booking">
              Link2
              </Link>
            </li>
            <li className=" hover:text-palette-darkTeal">
              <Link href="/features/operations/calendar-view">
              Link3
              </Link>
            </li>
            
          </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Other nav items */}
            <Link href="/pricing" className="flex items-center text-sm font-medium">
              {t("navigation.pricing")}
            </Link>
            <Link href="/blog" className="flex items-center text-sm font-medium">
              {t("navigation.blog")}
            </Link>
            <Link href="/about" className="flex items-center text-sm font-medium">
              {t("navigation.about")}
            </Link>
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          <ThemeSwitcher />
          <Button variant="ghost" asChild>
            <Link href="/login">{t("navigation.login")}</Link>
          </Button>
          <Button asChild>
            <Link href="/register">{t("navigation.signUp")}</Link>
          </Button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden p-4 pt-0 bg-white border-b">
          <nav className="flex flex-col space-y-4">
            <div className="py-3 border-b">
              <div className="font-medium mb-1 text-palette-darkTeal">
                {t("navigation.features")}
              </div>
              <div className="pl-4 flex flex-col space-y-2">
                <Link href="/features/operations" className="text-sm">
                  {t("features.operations.title")}
                </Link>
                <Link href="/features/sales" className="text-sm">
                  {t("features.sales.title")}
                </Link>
                <Link href="/features/finance" className="text-sm">
                  {t("features.finance.title")}
                </Link>
              </div>
            </div>
            <Link href="/pricing" className="py-2">
              {t("navigation.pricing")}
            </Link>
            <Link href="/blog" className="py-2">
              {t("navigation.blog")}
            </Link>
            <Link href="/about" className="py-2">
              {t("navigation.about")}
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              <div className="flex space-x-2 justify-start pb-2">
                <LanguageSwitcher />
                <ThemeSwitcher />
              </div>
              <Button variant="outline" asChild>
                <Link href="/login">{t("navigation.login")}</Link>
              </Button>
              <Button asChild>
                <Link href="/register">{t("navigation.signUp")}</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
