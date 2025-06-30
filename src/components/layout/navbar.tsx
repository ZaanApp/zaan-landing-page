"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import {
  ChevronDown,
  Menu,
  X,
  Briefcase,
  ShoppingCart,
  DollarSign,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLanguage } from "@/app/providers";
import { ThemeSwitcher } from "@/components/theme-switcher";
import Image from "next/image";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur  supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center ">
          <div className="flex items-center ">
          <Link href="/" className="flex items-center space-x-1">
       <Image src="/logo.png" alt="Logo" className="h-21  w-auto items-center"  width={1000} height={1000}/>
           
          </Link>
          </div>

          <nav className="hidden md:flex gap-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1">
                  {t("navigation.features")} <ChevronDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-72 p-2">
                {/* Operations Management */}
                <DropdownMenuGroup>
                  <DropdownMenuLabel className="flex items-center gap-2 text-primary font-bold">
                    <Briefcase size={18} />
                    <span>{t("features.operations.title")}</span>
                  </DropdownMenuLabel>

                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger className="pl-8 hover:bg-accent">
                      <span>{t("features.operations.appointments.title")}</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent className="w-56">
                      <DropdownMenuItem asChild>
                        <Link href="/features/operations/online-booking">
                          {t("features.operations.subfeatures.onlineBooking")}
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/features/operations/appointment-reminders">
                          {t(
                            "features.operations.subfeatures.appointmentReminders",
                          )}
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/features/operations/calendar-view">
                          {t("features.operations.subfeatures.calendarView")}
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/features/operations/staff-appointments">
                          {t(
                            "features.operations.subfeatures.staffAppointments",
                          )}
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>

                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger className="pl-8 hover:bg-accent">
                      <span>{t("features.operations.customer.title")}</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent className="w-56">
                      <DropdownMenuItem asChild>
                        <Link href="/features/operations/customer-profiles">
                          {t(
                            "features.operations.subfeatures.customerProfiles",
                          )}
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/features/operations/service-records">
                          {t("features.operations.subfeatures.serviceRecords")}
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/features/operations/loyalty-programs">
                          {t("features.operations.subfeatures.loyaltyPrograms")}
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/features/operations/customer-communication">
                          {t(
                            "features.operations.subfeatures.customerCommunication",
                          )}
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                </DropdownMenuGroup>

                <DropdownMenuSeparator />

                {/* Sales & Marketing */}
                <DropdownMenuGroup>
                  <DropdownMenuLabel className="flex items-center gap-2 text-primary font-bold">
                    <ShoppingCart size={18} />
                    <span>{t("features.sales.title")}</span>
                  </DropdownMenuLabel>

                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger className="pl-8 hover:bg-accent">
                      <span>{t("features.sales.pos.title")}</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent className="w-56">
                      <DropdownMenuItem asChild>
                        <Link href="/features/sales/process-payments">
                          {t("features.sales.subfeatures.processPayments")}
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/features/sales/invoices-receipts">
                          {t("features.sales.subfeatures.invoicesReceipts")}
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/features/sales/tax-management">
                          {t("features.sales.subfeatures.taxManagement")}
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>

                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger className="pl-8 hover:bg-accent">
                      <span>{t("navigation.digitalMarketing")}</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent className="w-56">
                      <DropdownMenuItem asChild>
                        <Link href="/features/sales/email-campaigns">
                          {t("features.sales.subfeatures.emailCampaigns")}
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/features/sales/sms-marketing">
                          {t("features.sales.subfeatures.smsMarketing")}
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/features/sales/whatsapp-integration">
                          {t("features.sales.subfeatures.whatsappIntegration")}
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/features/sales/offers-discounts">
                          {t("features.sales.subfeatures.offersDiscounts")}
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                </DropdownMenuGroup>

                <DropdownMenuSeparator />

                {/* Financial Management */}
                <DropdownMenuGroup>
                  <DropdownMenuLabel className="flex items-center gap-2 text-primary font-bold">
                    <DollarSign size={18} />
                    <span>{t("features.finance.title")}</span>
                  </DropdownMenuLabel>

                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger className="pl-8 hover:bg-accent">
                      <span>{t("features.finance.accounting.title")}</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent className="w-56">
                      <DropdownMenuItem asChild>
                        <Link href="/features/finance/expense-revenue">
                          {t("features.finance.subfeatures.expenseRevenue")}
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/features/finance/budget-planning">
                          {t("features.finance.subfeatures.budgetPlanning")}
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/features/finance/financial-reports">
                          {t("features.finance.subfeatures.financialReports")}
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>

                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger className="pl-8 hover:bg-accent">
                      <span>{t("features.finance.payroll.title")}</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent className="w-56">
                      <DropdownMenuItem asChild>
                        <Link href="/features/finance/salary-commission">
                          {t("features.finance.subfeatures.salaryCommission")}
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/features/finance/payment-vouchers">
                          {t("features.finance.subfeatures.paymentVouchers")}
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/features/finance/tax-insurance">
                          {t("features.finance.subfeatures.taxInsurance")}
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/pricing"
              className="flex items-center text-sm font-medium"
            >
              {t("navigation.pricing")}
            </Link>
            <Link
              href="/blog"
              className="flex items-center text-sm font-medium"
            >
              {t("navigation.blog")}
            </Link>
            <Link
              href="/about"
              className="flex items-center text-sm font-medium"
            >
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
                <Link href="/register">{t("navigation.signup")}</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
