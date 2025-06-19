"use client";

export default function IntroductionSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">
            Drive Growth with Strategic Promotions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            With Zaan's offers and discounts management system, you can create,
            track, and optimize promotions that attract new clients and increase
            loyalty among existing ones. Our intelligent tools help you design
            targeted campaigns that maximize revenue while maintaining your
            profit margins.
          </p>
        </div>

        <div className="bg-palette-lightBg rounded-xl p-8 shadow-sm">
          <p className="text-center text-xl font-medium text-palette-darkTeal mb-6">
            The right promotion at the right time can transform your business
            growth!
          </p>
          <p className="text-center text-muted-foreground">
            Zaan's promotion tools give you complete control over your marketing
            strategy, with detailed analytics to measure success and optimize
            future campaigns.
          </p>
        </div>
      </div>
    </section>
  );
}
