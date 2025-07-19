export const CONTACT_INFO = {
  phone: "+919685847274",
  email: "connect@shubhhampers.com",
  whatsappNumber: "919685847274"
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
