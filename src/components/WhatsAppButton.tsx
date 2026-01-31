"use client";

import { Button } from "@ui-kit/button";
import { handleWhatsApp } from "@lib/contact-utils";

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
  children: React.ReactNode;
}

export default function WhatsAppButton({
  message = "Hello! I'm interested in your hamper services",
  className = "",
  children
}: WhatsAppButtonProps) {
  return (
    <Button onClick={() => handleWhatsApp(message)} className={className}>
      {children}
    </Button>
  );
}
