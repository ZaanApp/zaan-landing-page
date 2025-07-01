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
          <p className="text-muted-foreground text-neutral-500">{t("footer.description")}</p>
          <div className="grid grid-cols-2 pt-4">

          
           <div>
          <h4 className="font-bold mb-4 text-palette-darkTeal">
            {t("footer.company")}
          </h4>
          <ul className="space-y-2 text-sm text-neutral-500">
            <li className=" hover:text-palette-darkTeal">
              <Link
                href="/about"
               
              >
                {t("footer.aboutUs")}
              </Link>
            </li>
            <li className=" hover:text-palette-darkTeal">
              <Link
                href="/pricing"
              
              >
                {t("footer.pricing")}
              </Link>
            </li>
            <li className=" hover:text-palette-darkTeal">
              <Link
                href="/contact"
               
              >
                {t("footer.contact")}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-palette-darkTeal">
            {t("footer.legal")}
          </h4>
          <ul className="space-y-2 text-sm text-neutral-500">
            <li className=" hover:text-palette-darkTeal">
              <Link
                href="/privacy"
              
              >
                {t("footer.privacyPolicy")}
              </Link>
            </li>
            <li className=" hover:text-palette-darkTeal">
              <Link
                href="/terms"
              
              >
                {t("footer.termsOfService")}
              </Link>
            </li>
          </ul>
        </div>
        </div>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-palette-darkTeal">
            <Link
              href="/features/operations"
             
            >
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
        <div>
          <h4 className="font-bold mb-4 text-palette-darkTeal">
            <Link
              href="/features/sales"
              className="text-muted-foreground hover:text-foreground"
            >
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
        <div>
          <h4 className="font-bold mb-4 text-palette-darkTeal">
            <Link
              href="/features/finance"
              className="text-muted-foreground hover:text-foreground"
            >
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
