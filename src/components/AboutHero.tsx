export default function AboutHero() {
  return (
    <section className='relative py-20 overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0 bg-gradient-to-br from-brand-gold/10 via-transparent to-brand-amber/5' />
      <div className='absolute top-10 right-10 w-40 h-40 bg-brand-gold/20 rounded-full blur-2xl animate-pulse' />
      <div className='absolute bottom-20 left-10 w-32 h-32 bg-brand-amber/30 rounded-full blur-xl animate-bounce' />

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='text-center max-w-4xl mx-auto'>
          <div className='inline-flex items-center gap-2 bg-brand-gold/20 px-6 py-2 rounded-full mb-6'>
            <span className='text-brand-brown font-semibold'>✨ Our Story</span>
          </div>

          <h1 className='font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-brand-dark mb-6 tracking-wide'>
            About Shubhhampers
          </h1>

          <p className='text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed'>
            {`We're passionate about creating meaningful connections through
            thoughtful hampers. Every hamper we curate tells a story of care,
            appreciation, and genuine human connection.`}
          </p>
        </div>
      </div>
    </section>
  );
}
