import Link from "next/link";
import { Button } from "@ui-kit/button";

export default function CoreServices() {
  const services = [
    {
      title: "Business Solutions",
      description:
        "Transform your corporate relationships with dedicated business services that understand your unique needs.",
      icon: "🏢",
      features: ["Account Management", "Bulk Excellence", "Corporate Programs", "Client Relations"],
      link: "/business"
    },
    {
      title: "Wedding Services",
      description:
        "Complete wedding support from planning and logistics to custom design and coordination.",
      icon: "💒",
      features: ["Wedding Planning", "Logistics Management", "Custom Design", "Guest Relations"],
      link: "/collections?category=wedding"
    },
    {
      title: "Custom Curation",
      description:
        "Bespoke hamper creation tailored to your exact specifications and relationship goals.",
      icon: "🎨",
      features: [
        "Personal Consultation",
        "Custom Products",
        "Brand Integration",
        "Special Occasions"
      ],
      link: "/contact?service=custom"
    }
  ];

  return (
    <section className='py-20 bg-white'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='font-display text-4xl lg:text-5xl font-bold text-brand-dark mb-6'>
            Our Core Services
          </h2>
          <p className='text-xl text-gray-700 max-w-3xl mx-auto'>
            From business relationship building to wedding celebrations, we provide specialized
            services that create meaningful connections and lasting impact.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <div
              key={index}
              className='bg-gradient-to-br from-brand-light/20 to-brand-gold/10 rounded-3xl p-8 shadow-xl border border-brand-gold/20 hover:shadow-2xl transition-all duration-500'
            >
              <div className='text-center mb-6'>
                <div className='text-6xl mb-4'>{service.icon}</div>
                <h3 className='text-2xl font-bold text-brand-dark mb-3'>{service.title}</h3>
                <p className='text-gray-700 leading-relaxed'>{service.description}</p>
              </div>

              <div className='bg-white/40 backdrop-blur-sm rounded-xl p-4 border border-brand-gold/20 mb-6'>
                <h4 className='font-semibold text-brand-brown mb-3 text-center'>Key Features:</h4>
                <div className='grid grid-cols-2 gap-2'>
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className='flex items-center gap-2 p-2 bg-white/50 backdrop-blur-sm rounded-lg'
                    >
                      <div className='w-1.5 h-1.5 bg-gradient-to-r from-brand-gold to-brand-amber rounded-full' />
                      <span className='text-sm text-gray-700'>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className='text-center'>
                <Link href={service.link}>
                  <Button className='bg-gradient-to-r from-brand-amber to-brand-gold hover:from-brand-gold hover:to-brand-amber text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full'>
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
