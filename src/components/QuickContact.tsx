import SectionHeader from "./ui/SectionHeader";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

export default function QuickContact() {
  return (
    <section className='py-20 bg-white'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <SectionHeader
          title='Need Immediate Help?'
          description='For urgent inquiries or immediate assistance, reach out to us directly.'
          variant='center'
          size='md'
          className='mb-8'
        />

        <div className='text-center'>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a href='tel:+919685847274'>
              <PrimaryButton size='sm'>📞 Call Now: +91 96858 47274</PrimaryButton>
            </a>
            <a href='mailto:connect@shubhhampers.com'>
              <SecondaryButton size='sm'>✉️ Email: connect@shubhhampers.com</SecondaryButton>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
