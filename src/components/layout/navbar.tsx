"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLanguage } from "@/app/providers";
import { ThemeSwitcher } from "@/components/theme-switcher";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [lock, setLock] = useState(false);
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  const { t } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();
  const showBusinessName = pathname === "/features/operations/online-booking";

  const handleMenuEnter = () => {
    if (lock) return;
    if (timeoutId.current) clearTimeout(timeoutId.current);
    setOpen(true);
  };

  const handleMenuLeave = () => {
    if (lock) return;
    timeoutId.current = setTimeout(() => {
      setOpen(false);
    }, 200);
  };

  const handleLinkClick = (href: string) => {
    setLock(true);
    setOpen(false);
    router.push(href);
    setTimeout(() => {
      setLock(false);
    }, 1000);
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
                      <h4
                        className="font-bold mb-4 text-palette-darkTeal cursor-pointer"
                        onClick={() => handleLinkClick("/features/operations")}
                      >
                        {t("features.operations.title")}
                      </h4>

                      <ul className="space-y-2 pl-0 sm:pl-4 text-sm text-neutral-500">
                        <h4
                          className="font-bold mb-2 text-palette-palettelightTeal cursor-pointer"
                          onClick={() =>
                            handleLinkClick("/features/sales")
                          }
                        >
                          {t("features.operations.appointments.title")}
                        </h4>

                        <li
                          className="hover:text-palette-darkTeal cursor-pointer"
                          onClick={() =>
                            handleLinkClick(
                              "/features/operations/appointment-reminders"
                            )
                          }
                        >
                          {t(
                            "features.operations.subfeatures.appointmentReminders"
                          )}
                        </li>

                        <li
                          className="hover:text-palette-darkTeal cursor-pointer"
                          onClick={() =>
                            handleLinkClick("/features/operations/online-booking")
                          }
                        >
                          {t(
                            "features.operations.subfeatures.onlineBooking"
                          )}
                        </li>

                        <li
                          className="hover:text-palette-darkTeal cursor-pointer"
                          onClick={() =>
                            handleLinkClick("/features/operations/calendar-view")
                          }
                        >
                          {t(
                            "features.operations.subfeatures.calendarView"
                          )}
                        </li>

                        <li
                          className="hover:text-palette-darkTeal cursor-pointer"
                          onClick={() =>
                            handleLinkClick(
                              "/features/operations/staff-appointments"
                            )
                          }
                        >
                          {t(
                            "features.operations.subfeatures.staffAppointments"
                          )}
                        </li>

                        <h4
                          className="font-bold mb-2 text-palette-palettelightTeal cursor-pointer"
                          onClick={() =>
                            handleLinkClick("/features/sales")
                          }
                        >
                          {t("features.operations.customer.title")}
                        </h4>

                        <li
                          className="hover:text-palette-darkTeal cursor-pointer"
                          onClick={() =>
                            handleLinkClick(
                              "/features/operations/customer-profiles"
                            )
                          }
                        >
                          {t(
                            "features.operations.subfeatures.customerProfiles"
                          )}
                        </li>

                        <li
                          className="hover:text-palette-darkTeal cursor-pointer"
                          onClick={() =>
                            handleLinkClick(
                              "/features/operations/service-records"
                            )
                          }
                        >
                          {t(
                            "features.operations.subfeatures.serviceRecords"
                          )}
                        </li>

                        <li
                          className="hover:text-palette-darkTeal cursor-pointer"
                          onClick={() =>
                            handleLinkClick(
                              "/features/operations/loyalty-programs"
                            )
                          }
                        >
                          {t(
                            "features.operations.subfeatures.loyaltyPrograms"
                          )}
                        </li>

                        <li
                          className="hover:text-palette-darkTeal cursor-pointer"
                          onClick={() =>
                            handleLinkClick(
                              "/features/operations/customer-communication"
                            )
                          }
                        >
                          {t(
                            "features.operations.subfeatures.customerCommunication"
                          )}
                        </li>
                      </ul>
                    </div>

                    {/* Sales */}
                    <div>
                      <h4
                        className="font-bold mb-4 text-palette-darkTeal cursor-pointer"
                        onClick={() => handleLinkClick("/features/sales")}
                      >
                        {t("features.sales.title")}
                      </h4>

                      <ul className="space-y-2 pl-0 sm:pl-4 text-sm text-neutral-500">
                        <h4
                          className="font-bold mb-2 text-palette-palettelightTeal cursor-pointer"
                          onClick={() => handleLinkClick("/features/sales")}
                        >
                          {t("features.sales.pos.title")}
                        </h4>

                        <li
                          className="hover:text-palette-darkTeal cursor-pointer"
                          onClick={() =>
                            handleLinkClick("/features/sales/process-payments")
                          }
                        >
                          {t("features.sales.subfeatures.processPayments")}
                        </li>

                        <li
                          className="hover:text-palette-darkTeal cursor-pointer"
                          onClick={() =>
                            handleLinkClick("/features/sales/invoices-receipts")
                          }
                        >
                          {t("features.sales.subfeatures.invoicesReceipts")}
                        </li>

                        <li
                          className="hover:text-palette-darkTeal cursor-pointer"
                          onClick={() =>
                            handleLinkClick("/features/sales/tax-management")
                          }
                        >
                          {t("features.sales.subfeatures.taxManagement")}
                        </li>

                        <h4
                          className="font-bold mb-2 text-palette-palettelightTeal cursor-pointer"
                          onClick={() => handleLinkClick("/features/sales")}
                        >
                          {t("features.sales.marketing.title")}
                        </h4>

                        <li
                          className="hover:text-palette-darkTeal cursor-pointer"
                          onClick={() =>
                            handleLinkClick("/features/sales/email-campaigns")
                          }
                        >
                          {t("features.sales.subfeatures.emailCampaigns")}
                        </li>

                        <li
                          className="hover:text-palette-darkTeal cursor-pointer"
                          onClick={() =>
                            handleLinkClick("/features/sales/sms-marketing")
                          }
                        >
                          {t("features.sales.subfeatures.smsMarketing")}
                        </li>

                        <li
                          className="hover:text-palette-darkTeal cursor-pointer"
                          onClick={() =>
                            handleLinkClick("/features/sales/whatsapp-integration")
                          }
                        >
                          {t("features.sales.subfeatures.whatsappIntegration")}
                        </li>

                        <li
                          className="hover:text-palette-darkTeal cursor-pointer"
                          onClick={() =>
                            handleLinkClick("/features/sales/offers-discounts")
                          }
                        >
                          {t("features.sales.subfeatures.offersDiscounts")}
                        </li>
                      </ul>
                    </div>

                    {/* Finance */}
                    <div>
                      <h4
                        className="font-bold mb-4 text-palette-darkTeal cursor-pointer"
                        onClick={() => handleLinkClick("/features/finance")}
                      >
                        {t("features.finance.title")}
                      </h4>

                      <ul className="space-y-2 pl-0 sm:pl-4 text-sm text-neutral-500">
                        <h4
                          className="font-bold mb-2 text-palette-palettelightTeal cursor-pointer"
                          onClick={() => handleLinkClick("/features/finance")}
                        >
                          {t("features.finance.payroll.title")}
                        </h4>

                        <li
                          className="hover:text-palette-darkTeal cursor-pointer"
                          onClick={() =>
                            handleLinkClick("/features/finance/expense-revenue")
                          }
                        >
                          {t("features.finance.subfeatures.expenseRevenue")}
                        </li>

                        <li
                          className="hover:text-palette-darkTeal cursor-pointer"
                          onClick={() =>
                            handleLinkClick("/features/finance/budget-planning")
                          }
                        >
                          {t("features.finance.subfeatures.budgetPlanning")}
                        </li>

                        <li
                          className="hover:text-palette-darkTeal cursor-pointer"
                          onClick={() =>
                            handleLinkClick("/features/finance/financial-reports")
                          }
                        >
                          {t("features.finance.subfeatures.financialReports")}
                        </li>

                        <h4
                          className="font-bold mb-2 text-palette-palettelightTeal cursor-pointer"
                          onClick={() => handleLinkClick("/features/finance")}
                        >
                          {t("features.finance.accounting.title")}
                        </h4>

                        <li
                          className="hover:text-palette-darkTeal cursor-pointer"
                          onClick={() =>
                            handleLinkClick("/features/finance/salary-commission")
                          }
                        >
                          {t("features.finance.subfeatures.salaryCommission")}
                        </li>

                        <li
                          className="hover:text-palette-darkTeal cursor-pointer"
                          onClick={() =>
                            handleLinkClick("/features/finance/payment-vouchers")
                          }
                        >
                          {t("features.finance.subfeatures.paymentVouchers")}
                        </li>

                        <li
                          className="hover:text-palette-darkTeal cursor-pointer"
                          onClick={() =>
                            handleLinkClick("/features/finance/tax-insurance")
                          }
                        >
                          {t("features.finance.subfeatures.taxInsurance")}
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
    </header>
  );
}
