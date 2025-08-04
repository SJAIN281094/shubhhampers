import Link from "next/link";
import { Button } from "@ui-kit/button";
import SectionHeader from "./ui/SectionHeader";
import GradientCard from "./ui/GradientCard";

// Type definitions
interface ServiceData {
  title: string;
  description: string;
  icon: string;
  features: string[];
  link: string;
}

// Move services data outside component for better performance
const SERVICES_DATA: ServiceData[] = [
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
    link: "/hampers/wedding-gift-hampers"
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

export default function CoreServices() {
  return (
    <section className='py-20 bg-white'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <SectionHeader
          title='Our Core Services'
          description='From business relationship building to wedding celebrations, we provide specialized services that create meaningful connections and lasting impact.'
          variant='center'
          size='md'
        />

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {SERVICES_DATA.map((service: ServiceData) => (
            <GradientCard key={service.title} variant='light' size='lg' hover={true}>
              <div className='text-center mb-6'>
                <div className='text-6xl mb-4'>{service.icon}</div>
                <h3 className='text-2xl font-bold text-brand-dark mb-3'>{service.title}</h3>
                <p className='text-gray-700 leading-relaxed'>{service.description}</p>
              </div>

              <div className='bg-white/50 rounded-xl p-4 border border-brand-gold/20 mb-6'>
                <h4 className='font-semibold text-brand-brown mb-3 text-center'>Key Features:</h4>
                <div className='grid grid-cols-2 gap-2'>
                  {service.features.map((feature: string) => (
                    <div
                      key={feature}
                      className='flex items-center gap-2 p-2 bg-white/60 rounded-lg'
                    >
                      <div className='w-1.5 h-1.5 bg-gradient-to-r from-brand-gold to-brand-amber rounded-full' />
                      <span className='text-sm text-gray-700'>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className='text-center'>
                <Link href={service.link}>
                  <Button className='bg-gradient-to-r from-brand-amber to-brand-gold hover:from-brand-gold hover:to-brand-amber text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200 w-full'>
                    Learn More
                  </Button>
                </Link>
              </div>
            </GradientCard>
          ))}
        </div>
      </div>
    </section>
  );
}
