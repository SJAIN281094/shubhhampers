import Link from "next/link";
import SectionHeader from "./ui/SectionHeader";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

export default function AboutCTA() {
  return (
    <section className='py-20 bg-gradient-to-br from-brand-brown to-brand-dark text-white'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <SectionHeader
          title='Ready to Create Something Special?'
          description="Let's work together to create magical hamper experiences that celebrate your special moments and make every occasion unforgettable."
          variant='center'
          size='lg'
          theme='dark'
          className='mb-8'
        />
        <div className='text-center max-w-4xl mx-auto'>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/contact'>
              <PrimaryButton size='sm'>💬 Get in Touch</PrimaryButton>
            </Link>
            <Link href='/hampers'>
              <SecondaryButton size='sm'>🎁 Explore Hampers</SecondaryButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
