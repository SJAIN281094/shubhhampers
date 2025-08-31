import CTASection from "./CTASection";

export default function AboutCTA() {
  return (
    <CTASection
      title="Ready to Create Something Special?"
      description="Let's work together to create magical hamper experiences that celebrate your special moments and make every occasion unforgettable."
      primaryButtonText="Get in Touch"
      primaryButtonHref="/contact"
      secondaryButtonText="Explore Hampers"
      secondaryButtonHref="/hampers"
      theme="dark"
    />
  );
}
