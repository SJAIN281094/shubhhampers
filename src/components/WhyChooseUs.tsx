import SectionHeader from "./ui/SectionHeader";

export default function WhyChooseUs() {
  return (
    <section className='py-20 bg-gradient-to-br from-brand-light/30 to-brand-gold/10'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <SectionHeader
          title='Why Choose Shubhhampers?'
          description="We bring a fresh approach to hamper services, focusing on what matters most: creating magical moments and celebrating life's special occasions with lasting impact."
          variant='center'
          size='lg'
          className='mb-16'
        />

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='bg-white rounded-2xl p-8 shadow-lg border border-brand-gold/20 hover:shadow-xl transition-shadow duration-200'>
            <div className='w-16 h-16 bg-gradient-to-br from-brand-gold to-brand-amber rounded-full mx-auto mb-6 flex items-center justify-center text-2xl'>
              🎯
            </div>
            <h3 className='text-xl font-bold text-brand-dark mb-4 text-center'>
              Celebration Focus
            </h3>
            <p className='text-gray-600 text-center mb-4'>
              {`Every hamper is thoughtfully designed to create magical moments
              and celebrate special occasions, not just deliver products.`}
            </p>
            <div className='bg-brand-gold/10 rounded-lg p-3 text-center'>
              <span className='text-sm font-semibold text-brand-brown'>Magical Moments</span>
            </div>
          </div>

          <div className='bg-white rounded-2xl p-8 shadow-lg border border-brand-gold/20 hover:shadow-xl transition-shadow duration-200'>
            <div className='w-16 h-16 bg-gradient-to-br from-brand-amber to-brand-brown rounded-full mx-auto mb-6 flex items-center justify-center text-2xl'>
              💎
            </div>
            <h3 className='text-xl font-bold text-brand-dark mb-4 text-center'>Quality Curation</h3>
            <p className='text-gray-600 text-center mb-4'>
              {`Thoughtfully selected items that reflect your values and create
              genuine emotional connections with recipients.`}
            </p>
            <div className='bg-brand-amber/10 rounded-lg p-3 text-center'>
              <span className='text-sm font-semibold text-brand-brown'>Premium Selection</span>
            </div>
          </div>

          <div className='bg-white rounded-2xl p-8 shadow-lg border border-brand-gold/20 hover:shadow-xl transition-shadow duration-200'>
            <div className='w-16 h-16 bg-gradient-to-br from-brand-brown to-brand-gold rounded-full mx-auto mb-6 flex items-center justify-center text-2xl'>
              🚀
            </div>
            <h3 className='text-xl font-bold text-brand-dark mb-4 text-center'>
              Special Occasions
            </h3>
            <p className='text-gray-600 text-center mb-4'>
              {`Perfect for weddings, festivals, and business celebrations
              with enhanced relationships and lasting memories.`}
            </p>
            <div className='bg-brand-brown/10 rounded-lg p-3 text-center'>
              <span className='text-sm font-semibold text-brand-brown'>Celebration Results</span>
            </div>
          </div>

          <div className='bg-white rounded-2xl p-8 shadow-lg border border-brand-gold/20 hover:shadow-xl transition-shadow duration-200'>
            <div className='w-16 h-16 bg-gradient-to-br from-brand-gold to-brand-amber rounded-full mx-auto mb-6 flex items-center justify-center text-2xl'>
              🤝
            </div>
            <h3 className='text-xl font-bold text-brand-dark mb-4 text-center'>
              Celebration Partnership
            </h3>
            <p className='text-gray-600 text-center mb-4'>
              {`We're not just vendors - we're celebration partners invested in
              your special moments and creating magical experiences.`}
            </p>
            <div className='bg-brand-gold/10 rounded-lg p-3 text-center'>
              <span className='text-sm font-semibold text-brand-brown'>True Partnership</span>
            </div>
          </div>

          <div className='bg-white rounded-2xl p-8 shadow-lg border border-brand-gold/20 hover:shadow-xl transition-shadow duration-200'>
            <div className='w-16 h-16 bg-gradient-to-br from-brand-amber to-brand-brown rounded-full mx-auto mb-6 flex items-center justify-center text-2xl'>
              ⚡
            </div>
            <h3 className='text-xl font-bold text-brand-dark mb-4 text-center'>Fresh Approach</h3>
            <p className='text-gray-600 text-center mb-4'>
              {`Modern, authentic, and human-centered - we avoid corporate
              jargon and focus on genuine connections.`}
            </p>
            <div className='bg-brand-amber/10 rounded-lg p-3 text-center'>
              <span className='text-sm font-semibold text-brand-brown'>Authentic Service</span>
            </div>
          </div>

          <div className='bg-white rounded-2xl p-8 shadow-lg border border-brand-gold/20 hover:shadow-xl transition-shadow duration-200'>
            <div className='w-16 h-16 bg-gradient-to-br from-brand-brown to-brand-gold rounded-full mx-auto mb-6 flex items-center justify-center text-2xl'>
              🎨
            </div>
            <h3 className='text-xl font-bold text-brand-dark mb-4 text-center'>Custom Solutions</h3>
            <p className='text-gray-600 text-center mb-4'>
              {`Tailored hampers that reflect your brand, values, and specific
              celebration objectives for weddings, festivals, and business.`}
            </p>
            <div className='bg-brand-brown/10 rounded-lg p-3 text-center'>
              <span className='text-sm font-semibold text-brand-brown'>Personalized Touch</span>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className='mt-16 bg-white rounded-2xl p-8 shadow-lg border border-brand-gold/20'>
          <div className='text-center mb-8'>
            <h3 className='text-2xl font-bold text-brand-dark mb-4'>Our Commitment to You</h3>
            <p className='text-gray-700 max-w-2xl mx-auto'>
              {`When you choose Shubhhampers, you're choosing a partner dedicated
              to your celebrations and creating magical moments.`}
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='text-center p-4 bg-brand-gold/5 rounded-lg'>
              <div className='text-2xl mb-2'>⏱️</div>
              <h4 className='font-semibold text-brand-dark mb-2'>Timely Delivery</h4>
              <p className='text-sm text-gray-600'>On-time delivery that keeps your commitments</p>
            </div>

            <div className='text-center p-4 bg-brand-amber/5 rounded-lg'>
              <div className='text-2xl mb-2'>💬</div>
              <h4 className='font-semibold text-brand-dark mb-2'>Direct Communication</h4>
              <p className='text-sm text-gray-600'>
                No intermediaries - talk directly with decision makers
              </p>
            </div>

            <div className='text-center p-4 bg-brand-brown/5 rounded-lg'>
              <div className='text-2xl mb-2'>🔄</div>
              <h4 className='font-semibold text-brand-dark mb-2'>Ongoing Support</h4>
              <p className='text-sm text-gray-600'>
                Continuous guidance for your celebration strategies
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
