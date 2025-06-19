import {
  Clock,
  FileBarChart,
  Receipt,
  Calculator,
  Settings,
  TrendingUp,
} from "lucide-react";

export default function FeatureCardsSection() {
  const features = [
    {
      title: "Real-time Comprehensive Reports",
      description:
        "All financial transactions are recorded instantly and automatically in the Zaan system. View updated detailed reports for all operations without any additional effort on your part.",
      icon: Clock,
      gradient: "from-blue-50 to-indigo-100",
    },
    {
      title: "Separate Revenue & Expense Reports",
      description:
        "Access accurate and organized financial reports covering all aspects of salon management, including daily, weekly, and monthly revenues, expense distributions, and net profit for any time period.",
      icon: Receipt,
      gradient: "from-teal-50 to-emerald-100",
    },
    {
      title: "Integrated Tax Support",
      description:
        "Manage tax obligations effortlessly with detailed VAT reports available at the click of a button. Accurately classify each taxable transaction and export reports as Excel or PDF files for your accountant.",
      icon: Calculator,
      gradient: "from-purple-50 to-violet-100",
    },
    {
      title: "Customizable Report Generation",
      description:
        "Take complete control of your financial reporting by specifying the exact data you want to review—sales, expenses, profits, and more—with flexible time period options for daily, weekly, or monthly analysis.",
      icon: Settings,
      gradient: "from-amber-50 to-orange-100",
    },
    {
      title: "Visual Financial Analytics",
      description:
        "Forget complex spreadsheets. Zaan provides intuitive visual reports that simplify financial analysis, making it easier to make informed decisions for faster salon growth.",
      icon: FileBarChart,
      gradient: "from-cyan-50 to-sky-100",
    },
    {
      title: "Performance Insights",
      description:
        "Compare actual results against projections with sophisticated analytics that highlight opportunities for growth and areas requiring attention to maximize profitability.",
      icon: TrendingUp,
      gradient: "from-rose-50 to-pink-100",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Comprehensive Financial Reporting Tools
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to gain clear insights into your salon's
            financial performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${feature.gradient} rounded-lg p-6 shadow-sm border transition-all hover:shadow-md`}
            >
              <div className="inline-flex items-center justify-center p-2 bg-white/80 rounded-lg mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
