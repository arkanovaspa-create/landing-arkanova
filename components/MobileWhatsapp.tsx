"use client";

import { MessageCircle } from "lucide-react";

type MobileWhatsappProps = {
  whatsappUrl: string;
  isNearForm: boolean;
};

export function MobileWhatsapp({ whatsappUrl, isNearForm }: MobileWhatsappProps) {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      tabIndex={isNearForm ? -1 : undefined}
      aria-hidden={isNearForm}
      className={`fixed bottom-4 right-4 z-40 grid min-h-14 min-w-14 place-items-center rounded-full border border-gold/40 bg-navy text-gold shadow-[0_12px_30px_rgba(0,0,0,0.22)] transition duration-200 hover:bg-navy-light md:hidden ${
        isNearForm ? "pointer-events-none translate-y-4 opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
    </a>
  );
}
