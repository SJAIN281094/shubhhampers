export default function OurMission() {
  return (
    <section className='py-20 bg-white'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <div>
            <h2 className='font-display text-4xl lg:text-5xl font-bold text-brand-dark mb-6'>
              Our Mission
            </h2>
            <p className='text-lg text-gray-700 mb-6 leading-relaxed'>
              {`At Shubhhampers, we believe that every hamper is an opportunity
              to strengthen relationships and create lasting memories. We're
              not just delivering packages – we're delivering joy,
              appreciation, and genuine human connection.`}
            </p>
            <p className='text-lg text-gray-700 mb-8 leading-relaxed'>
              {`Whether it's celebrating a festival, appreciating your team,
              or nurturing client relationships, we're here to help you make
              every moment special and meaningful.`}
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
              <div className='text-center p-4 bg-brand-gold/10 rounded-xl'>
                <div className='text-3xl mb-2'>💝</div>
                <h3 className='font-semibold text-brand-brown mb-1'>Thoughtful</h3>
                <p className='text-sm text-gray-600'>Every item carefully selected</p>
              </div>
              <div className='text-center p-4 bg-brand-amber/10 rounded-xl'>
                <div className='text-3xl mb-2'>🤝</div>
                <h3 className='font-semibold text-brand-brown mb-1'>Personal</h3>
                <p className='text-sm text-gray-600'>Direct communication & care</p>
              </div>
              <div className='text-center p-4 bg-brand-brown/10 rounded-xl'>
                <div className='text-3xl mb-2'>✨</div>
                <h3 className='font-semibold text-brand-brown mb-1'>Quality</h3>
                <p className='text-sm text-gray-600'>Premium products & service</p>
              </div>
            </div>
          </div>

          <div className='relative'>
            <div className='bg-gradient-to-br from-brand-gold/20 to-brand-amber/20 rounded-3xl p-8 shadow-xl'>
              <div className='text-6xl mb-6 text-center'>🎁</div>
              <h3 className='text-2xl font-bold text-brand-dark mb-4 text-center'>
                Why We Started
              </h3>
              <p className='text-gray-700 leading-relaxed'>
                {`We noticed that many hamper experiences felt impersonal and
                generic. We wanted to change that by creating a platform
                where every hamper feels personal, thoughtful, and meaningful.
                Our journey began with a simple belief: that the best hampers
                are those that strengthen relationships and create genuine
                connections.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
