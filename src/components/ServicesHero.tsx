export default function ServicesHero() {
  return (
    <section className='relative py-20 overflow-hidden'>
      <div className='absolute inset-0 bg-brand-gold/10' />
      <div className='absolute top-10 right-10 w-40 h-40 bg-brand-gold/20 rounded-full opacity-60' />
      <div className='absolute bottom-20 left-10 w-32 h-32 bg-brand-amber/25 rounded-full opacity-50' />

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='text-center max-w-4xl mx-auto'>
          <div className='inline-flex items-center gap-2 bg-brand-gold/20 px-6 py-2 rounded-full mb-6 border border-brand-gold/20 shadow-md'>
            <span className='text-brand-brown font-bold text-base md:text-lg'>🎯 Our Services</span>
          </div>

          <h1 className='font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-brand-dark mb-6 tracking-wide'>
            Custom Gift Baskets & Bulk Hamper Services
          </h1>

          <p className='text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed'>
            Beyond beautiful hampers, we offer comprehensive services designed to help you build
            meaningful relationships, strengthen business connections, and create lasting emotional
            impact through thoughtful gestures.
          </p>

          <div className='bg-white/40 rounded-xl p-4 border border-brand-gold/20 shadow-md'>
            <p className='text-lg text-brand-brown font-medium italic'>
              &ldquo;Every service designed to deepen connections and create meaningful
              moments&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
