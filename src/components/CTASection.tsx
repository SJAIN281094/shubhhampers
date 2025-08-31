import Link from "next/link";
import SectionHeader from "./ui/SectionHeader";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  primaryButtonAction?: () => void;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  secondaryButtonAction?: () => void;
  theme?: "light" | "dark";
  className?: string;
}

export default function CTASection({
  title = "Ready to Create Something Special?",
  description = "Let's work together to create magical hamper experiences that celebrate your special moments and make every occasion unforgettable.",
  primaryButtonText = "Get in Touch",
  primaryButtonHref = "/contact",
  primaryButtonAction,
  secondaryButtonText = "Explore Hampers",
  secondaryButtonHref = "/hampers",
  secondaryButtonAction,
  theme = "dark",
  className = ""
}: CTASectionProps) {
  const isDark = theme === "dark";

  const backgroundClass = isDark
    ? "bg-gradient-to-br from-brand-brown to-brand-dark text-white"
    : "bg-gradient-to-br from-brand-gold/10 to-brand-amber/10";

  const renderButton = (
    text: string,
    href?: string,
    action?: () => void,
    isPrimary: boolean = true
  ) => {
    const ButtonComponent = isPrimary ? PrimaryButton : SecondaryButton;
    const buttonContent = <ButtonComponent size="sm">{text}</ButtonComponent>;

    if (action) {
      return (
        <button onClick={action} className="inline-block">
          {buttonContent}
        </button>
      );
    }

    if (href) {
      return <Link href={href}>{buttonContent}</Link>;
    }

    return buttonContent;
  };

  return (
    <section className={`py-20 ${backgroundClass} ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={title}
          description={description}
          variant="center"
          size="lg"
          theme={theme}
          className="mb-8"
        />
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {renderButton(primaryButtonText, primaryButtonHref, primaryButtonAction, true)}
            {renderButton(secondaryButtonText, secondaryButtonHref, secondaryButtonAction, false)}
          </div>
        </div>
      </div>
    </section>
  );
}
