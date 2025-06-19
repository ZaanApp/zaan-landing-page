import {
  Target,
  Link as LinkIcon,
  LineChart,
  FileBarChart,
  AlertCircle,
  TrendingUp,
} from "lucide-react";

export function FeatureCardsSection() {
  const features = [
    {
      title: "Clear Financial Goals",
      description:
        "Set precise monthly and annual revenue and expense targets. Track progress through accurate reports and analytics that help you evaluate performance and achieve goals faster.",
      icon: Target,
      gradient: "from-blue-50 to-indigo-100",
    },
    {
      title: "Integrated Business Planning",
      description:
        "Zaan automatically connects your budget to all daily salon operations including appointments, invoices, and variable expenses, ensuring your numbers accurately reflect reality at every moment.",
      icon: LinkIcon,
      gradient: "from-teal-50 to-emerald-100",
    },
    {
      title: "Real-time Expense Tracking",
      description:
        "Monitor spending as it happens and receive instant alerts when expenses rise above planned thresholds, allowing you to address issues before they impact your bottom line.",
      icon: AlertCircle,
      gradient: "from-purple-50 to-violet-100",
    },
    {
      title: "Visual Financial Reporting",
      description:
        "Forget complex spreadsheets. Zaan provides intuitive visual reports that simplify financial analysis, making it easier to make informed decisions for faster salon growth.",
      icon: FileBarChart,
      gradient: "from-amber-50 to-orange-100",
    },
    {
      title: "Seasonal Forecasting",
      description:
        "Plan for seasonal fluctuations with advanced forecasting tools that help you anticipate busy periods, adjust staffing levels, and optimize inventory management throughout the year.",
      icon: LineChart,
      gradient: "from-cyan-50 to-sky-100",
    },
    {
      title: "Performance Analytics",
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
            Comprehensive Budget Planning Tools
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to take control of your salon's financial future
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
