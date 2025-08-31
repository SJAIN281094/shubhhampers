export default function BusinessBenefits() {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-light/30 to-brand-gold/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-dark mb-6">
            Why Choose Business Hampers?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Smart businesses understand that relationships are their most valuable asset. Strategic
            hamper programs deliver measurable ROI through stronger connections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-brand-gold/20 hover:shadow-xl transition-shadow duration-200 text-center">
            <div className="text-4xl mb-4">🏢</div>
            <h3 className="text-xl font-bold text-brand-dark mb-3">Strengthen Company Culture</h3>
            <p className="text-gray-600 mb-4">
              Create a workplace where people feel genuinely appreciated and valued, leading to
              higher engagement and retention.
            </p>
            <div className="bg-brand-gold/10 rounded-lg p-3">
              <p className="text-xs text-brand-brown font-medium">Higher employee satisfaction</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-brand-gold/20 hover:shadow-xl transition-shadow duration-200 text-center">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-bold text-brand-dark mb-3">Build Client Partnerships</h3>
            <p className="text-gray-600 mb-4">
              Transform business relationships from transactional to meaningful, creating partners
              who choose to work with you.
            </p>
            <div className="bg-brand-amber/10 rounded-lg p-3">
              <p className="text-xs text-brand-brown font-medium">Increased client retention</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-brand-gold/20 hover:shadow-xl transition-shadow duration-200 text-center">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-brand-dark mb-3">Drive Business Growth</h3>
            <p className="text-gray-600 mb-4">
              Invested relationships lead to repeat business, referrals, and opportunities that
              drive sustainable growth.
            </p>
            <div className="bg-brand-brown/10 rounded-lg p-3">
              <p className="text-xs text-brand-brown font-medium">Measurable ROI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
