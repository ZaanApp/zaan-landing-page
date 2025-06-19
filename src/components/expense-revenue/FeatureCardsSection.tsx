import {
  DollarSign,
  TrendingUp,
  BarChart,
  FileText,
  Calculator,
  Shield,
} from "lucide-react";

export function FeatureCardsSection() {
  const features = [
    {
      title: "Revenue Tracking",
      description:
        "Every service provided and every product sold has its revenue automatically recorded with great accuracy and in real time. Gain instant visibility into your sales performance.",
      icon: DollarSign,
      gradient: "from-blue-50 to-indigo-100",
    },
    {
      title: "Expense Management",
      description:
        "Categorize all your salon expenses in an organized and clear way. Know exactly where your money is going and identify savings opportunities.",
      icon: TrendingUp,
      gradient: "from-teal-50 to-emerald-100",
    },
    {
      title: "Analytical Reports",
      description:
        "Get clear insights into revenue and expenses for different time periods, with easy-to-understand analytical details to guide your salon's strategies.",
      icon: BarChart,
      gradient: "from-purple-50 to-violet-100",
    },
    {
      title: "Automated Integration",
      description:
        "Seamlessly connect with all your other operations - from bookings and invoicing to payroll. Ensure data accuracy and save valuable time.",
      icon: FileText,
      gradient: "from-amber-50 to-orange-100",
    },
    {
      title: "Financial Forecasting",
      description:
        "Use historical data to project future revenue and expenses, helping you make informed decisions about investments and growth opportunities.",
      icon: Calculator,
      gradient: "from-cyan-50 to-sky-100",
    },
    {
      title: "Compliance Support",
      description:
        "Meet your local accounting and tax requirements with organized financial data to support your reporting and ensure regulatory compliance.",
      icon: Shield,
      gradient: "from-rose-50 to-pink-100",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Intelligent Financial Control
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            With the Zaan system, you are in intelligent control of your salon's
            finances
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
