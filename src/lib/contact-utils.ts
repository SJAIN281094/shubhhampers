// Centralized contact information - single source of truth
export const CONTACT_INFO = {
  phone: "+91 96858 47274",
  phoneFormatted: "+919685847274", // For tel: links
  email: "connect@shubhhampers.com",
  whatsappNumber: "919685847274",
  whatsappUrl: "https://wa.me/919685847274",

  // Display versions with emojis for UI
  displayPhone: "📞 +91 96858 47274",
  displayEmail: "✉️ connect@shubhhampers.com",

  // Social media links
  social: {
    instagram: "https://www.instagram.com/shubhhampers_",
    linkedin: "https://www.linkedin.com/company/shubh-hampers",
    facebook: "https://www.facebook.com/profile.php?id=61579813442869"
  },

  // Business information
  company: {
    name: "Shubhhampers",
    tagline: "Gifting the joy of every tyohaar",
    fullTagline: "✨ Gifting the joy of every tyohaar",
    description:
      "Premium hamper curation service specializing in corporate hampers, wedding hampers, and festival celebrations"
  }
};

export const handleWhatsApp = (
  message: string = "Hello, I'm interested in your hamper services"
) => {
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodedMessage}`, "_blank");
};

export const handleCall = () => {
  window.open(`tel:${CONTACT_INFO.phone}`, "_self");
};

export const handleEmail = () => {
  window.open(`mailto:${CONTACT_INFO.email}`, "_self");
};

// Common contact button configurations
export const getContactButtons = (customWhatsAppMessage?: string) => ({
  whatsapp: {
    label: "💬 WhatsApp",
    action: () => handleWhatsApp(customWhatsAppMessage),
    className: "bg-green-600 hover:bg-green-700 text-white"
  },
  call: {
    label: "📞 Call Us",
    action: handleCall,
    className: "bg-blue-600 hover:bg-blue-700 text-white"
  },
  email: {
    label: "📧 Email Us",
    action: handleEmail,
    className: "bg-gray-600 hover:bg-gray-700 text-white"
  }
});
