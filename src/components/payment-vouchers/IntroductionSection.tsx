export default function IntroductionSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">
            Streamlined Payment Documentation
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            With the Zaan system, issuing payment vouchers becomes an easy and
            organized process that helps you accurately document all your
            internal and external payments, protecting your expenses and
            facilitating auditing and accounting processes.
          </p>
        </div>

        <div className="bg-palette-lightBg rounded-xl p-8 shadow-sm">
          <p className="text-center text-xl font-medium text-palette-darkTeal mb-6">
            Every financial transaction is carefully documented, so you always
            stay on top of your expenses!
          </p>
          <p className="text-center text-muted-foreground">
            Managing payment vouchers has become easier and more accurate with
            Zaan, as it is a simple part of an integrated and professional
            financial system.
          </p>
        </div>
      </div>
    </section>
  );
}
