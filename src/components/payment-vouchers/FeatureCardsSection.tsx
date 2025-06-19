import {
  Receipt,
  Tags,
  Clock,
  FileSpreadsheet,
  CreditCard,
  FileCheck,
} from "lucide-react";

export default function FeatureCardsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Advantages of Managing Payment Vouchers
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover how Zaan simplifies your payment documentation and
            financial tracking
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 - Blue gradient flowing right */}
          <div className="rounded-xl p-6 shadow-sm bg-gradient-to-r from-blue-50 to-indigo-100 border border-blue-100">
            <div className="inline-flex items-center justify-center p-2 bg-white/80 rounded-lg mb-4">
              <Receipt className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-slate-800">
              Effortless Voucher Creation
            </h3>
            <p className="text-slate-700">
              Issue payment vouchers for any financial transaction with one
              click, whether for supplier payments, operational expenses, or
              employee dues.
            </p>
          </div>

          {/* Card 2 - Teal-emerald gradient flowing bottom-left */}
          <div className="rounded-xl p-6 shadow-sm bg-gradient-to-bl from-teal-50 to-emerald-100 border border-teal-100">
            <div className="inline-flex items-center justify-center p-2 bg-white/80 rounded-lg mb-4">
              <Tags className="h-6 w-6 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-slate-800">
              Expense Classification
            </h3>
            <p className="text-slate-700">
              Classify each payment voucher according to expense type (rent,
              salaries, purchases, supplies) for organized and easy-to-analyze
              financial reports.
            </p>
          </div>

          {/* Card 3 - Purple-violet gradient flowing top-right */}
          <div className="rounded-xl p-6 shadow-sm bg-gradient-to-tr from-purple-50 to-violet-100 border border-purple-100">
            <div className="inline-flex items-center justify-center p-2 bg-white/80 rounded-lg mb-4">
              <Clock className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-slate-800">
              Real-time Status Tracking
            </h3>
            <p className="text-slate-700">
              Monitor the status of each payment instrument through its payment
              method (cash, credit card, or pending) from the main control
              panel.
            </p>
          </div>

          {/* Card 4 - Amber-orange gradient flowing top-left */}
          <div className="rounded-xl p-6 shadow-sm bg-gradient-to-tl from-amber-50 to-orange-100 border border-amber-100">
            <div className="inline-flex items-center justify-center p-2 bg-white/80 rounded-lg mb-4">
              <FileSpreadsheet className="h-6 w-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-slate-800">
              Easy Export Options
            </h3>
            <p className="text-slate-700">
              Export payment vouchers as Excel files to share with the financial
              department or archive within official accounting records.
            </p>
          </div>

          {/* Card 5 - Cyan-sky gradient flowing bottom-right */}
          <div className="rounded-xl p-6 shadow-sm bg-gradient-to-br from-cyan-50 to-sky-100 border border-cyan-100">
            <div className="inline-flex items-center justify-center p-2 bg-white/80 rounded-lg mb-4">
              <CreditCard className="h-6 w-6 text-cyan-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-slate-800">
              Multiple Payment Methods
            </h3>
            <p className="text-slate-700">
              Support for various payment methods including cash, credit cards,
              bank transfers, and digital wallets for maximum flexibility.
            </p>
          </div>

          {/* Card 6 - Rose-pink gradient flowing left */}
          <div className="rounded-xl p-6 shadow-sm bg-gradient-to-l from-rose-50 to-pink-100 border border-rose-100">
            <div className="inline-flex items-center justify-center p-2 bg-white/80 rounded-lg mb-4">
              <FileCheck className="h-6 w-6 text-rose-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-slate-800">
              Audit-Ready Documentation
            </h3>
            <p className="text-slate-700">
              Generate comprehensive documentation that meets accounting
              standards and simplifies audit processes and financial compliance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
