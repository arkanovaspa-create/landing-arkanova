"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

type MobileWhatsappProps = {
  whatsappUrl: string;
};

export function MobileWhatsapp({ whatsappUrl }: MobileWhatsappProps) {
  const [isLeadSectionVisible, setIsLeadSectionVisible] = useState(false);

  useEffect(() => {
    const target = document.getElementById("captacion");

    if (!target || !("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsLeadSectionVisible(entry.isIntersecting);
      },
      {
        rootMargin: "0px 0px -20% 0px",
        threshold: 0.08
      }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={isLeadSectionVisible ? -1 : undefined}
      className={`fixed bottom-4 right-4 z-40 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/70 bg-[#303030] px-4 py-2 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.22)] transition duration-200 hover:bg-ink md:hidden ${
        isLeadSectionVisible ? "pointer-events-none translate-y-4 opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <MessageCircle className="h-5 w-5 text-turquoise" aria-hidden="true" />
      WhatsApp
    </a>
  );
}
