export default function OurValues() {
  return (
    <section className='py-20 bg-gradient-to-br from-brand-light/30 to-brand-gold/10'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='font-display text-4xl lg:text-5xl font-bold text-brand-dark mb-6'>
            Our Values
          </h2>
          <p className='text-xl text-gray-700 max-w-3xl mx-auto'>
            {`These core values guide everything we do and every relationship
            we build.`}
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='bg-white rounded-2xl p-8 shadow-lg border border-brand-gold/20 hover:shadow-xl transition-all duration-300'>
            <div className='text-4xl mb-4'>💫</div>
            <h3 className='text-xl font-bold text-brand-dark mb-3'>Authenticity</h3>
            <p className='text-gray-600'>
              {`We believe in being genuine in everything we do. No corporate
              jargon, no empty promises – just honest, transparent
              relationships.`}
            </p>
          </div>

          <div className='bg-white rounded-2xl p-8 shadow-lg border border-brand-gold/20 hover:shadow-xl transition-all duration-300'>
            <div className='text-4xl mb-4'>🎯</div>
            <h3 className='text-xl font-bold text-brand-dark mb-3'>Purpose</h3>
            <p className='text-gray-600'>
              {`Every hamper we curate has a purpose – to strengthen
              relationships, show appreciation, and create meaningful
              connections.`}
            </p>
          </div>

          <div className='bg-white rounded-2xl p-8 shadow-lg border border-brand-gold/20 hover:shadow-xl transition-all duration-300'>
            <div className='text-4xl mb-4'>🌟</div>
            <h3 className='text-xl font-bold text-brand-dark mb-3'>Growth</h3>
            <p className='text-gray-600'>
              {`We're constantly learning, improving, and growing together
              with our clients and partners.`}
            </p>
          </div>

          <div className='bg-white rounded-2xl p-8 shadow-lg border border-brand-gold/20 hover:shadow-xl transition-all duration-300'>
            <div className='text-4xl mb-4'>🤝</div>
            <h3 className='text-xl font-bold text-brand-dark mb-3'>Partnership</h3>
            <p className='text-gray-600'>
              {`We see our clients as partners in creating meaningful
              experiences. Your success is our success.`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
