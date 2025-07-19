export default function ServicesHero() {
  return (
    <section className='relative py-20 overflow-hidden'>
      <div className='absolute inset-0 bg-gradient-to-br from-brand-gold/15 via-transparent to-brand-amber/10' />
      <div className='absolute top-10 right-10 w-40 h-40 bg-brand-gold/25 rounded-full blur-2xl animate-pulse' />
      <div className='absolute bottom-20 left-10 w-32 h-32 bg-brand-amber/30 rounded-full blur-xl animate-bounce' />

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='text-center max-w-4xl mx-auto'>
          <div className='inline-flex items-center gap-2 bg-gradient-to-r from-brand-gold/20 via-brand-light/30 to-brand-amber/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-brand-gold/20 shadow-lg'>
            <span className='text-brand-brown font-bold text-base md:text-lg'>🎯 Our Services</span>
          </div>

          <h1 className='font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-brand-dark mb-6 tracking-wide'>
            Services That Strengthen Bonds
          </h1>

          <p className='text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed'>
            Beyond beautiful hampers, we offer comprehensive services designed to help you build
            meaningful relationships, strengthen business connections, and create lasting emotional
            impact through thoughtful gestures.
          </p>

          <div className='bg-white/30 backdrop-blur-sm rounded-xl p-4 border border-brand-gold/20 shadow-lg'>
            <p className='text-lg text-brand-brown font-medium italic'>
              "Every service designed to deepen connections and create meaningful moments"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
