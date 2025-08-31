import SectionHeader from "./ui/SectionHeader";

export default function ContactHero() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-brand-gold/8" />
      <div className="absolute top-10 right-10 w-40 h-40 bg-brand-gold/15 rounded-full opacity-60" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-brand-amber/20 rounded-full opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          tag={{ emoji: "💬", text: "Let's Connect" }}
          title="Contact Premium Hamper Company"
          description="We'd love to hear from you! Whether you have questions, need a quote, or want to discuss your hamper needs, we're here to help."
          variant="center"
          size="lg"
          showDecorations={false}
        />
      </div>
    </section>
  );
}
