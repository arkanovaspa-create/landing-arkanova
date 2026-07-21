"use client";

import { useEffect, useRef, useState } from "react";
import { Instagram, Menu, MessageCircle, X } from "lucide-react";
import { Container } from "./Container";
import { LogoLockup } from "./LogoLockup";
import { trackEvent } from "@/lib/analytics";

export type NavSection = {
  id: string;
  label: string;
};

type SectionNavProps = {
  sections: NavSection[];
  activeSection: string;
  onNavigate: (id: string) => void;
  whatsappUrl: string;
  instagramUrl: string;
};

export function SectionNav({ sections, activeSection, onNavigate, whatsappUrl, instagramUrl }: SectionNavProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isDrawerOpen) {
      closeButtonRef.current?.focus();
    }
  }, [isDrawerOpen]);

  useEffect(() => {
    if (!isDrawerOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeDrawer();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isDrawerOpen]);

  function closeDrawer() {
    setIsDrawerOpen(false);
    menuButtonRef.current?.focus();
  }

  function handleNavigate(id: string) {
    onNavigate(id);
    setIsDrawerOpen(false);
  }

  return (
    <>
      <header className="sticky top-0 z-50 bg-navy/95 backdrop-blur-md">
      <Container className="flex items-center justify-between gap-3 py-3">
        <button
          type="button"
          onClick={() => handleNavigate("inicio")}
          className="corner-accent min-w-0 shrink-0 py-1 pl-2"
          aria-label="Ir a Inicio"
        >
          <LogoLockup />
        </button>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navegación principal">
          {sections.map((section) => {
            const isActive = section.id === activeSection;
            return (
              <button
                key={section.id}
                type="button"
                aria-current={isActive ? "page" : undefined}
                onClick={() => handleNavigate(section.id)}
                className={`border-b-2 pb-1 text-sm font-semibold transition ${
                  isActive ? "border-gold text-gold-light" : "border-transparent text-white/80 hover:border-gold/50 hover:text-gold-light"
                }`}
              >
                {section.label}
              </button>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            onClick={() => trackEvent("whatsapp_click", { location: "nav" })}
            className="grid min-h-11 min-w-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition hover:border-gold hover:text-gold"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver Instagram de Arkanova"
            onClick={() => trackEvent("instagram_click")}
            className="grid min-h-11 min-w-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition hover:border-gold hover:text-gold"
          >
            <Instagram className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setIsDrawerOpen(true)}
          aria-label="Abrir menú"
          aria-expanded={isDrawerOpen}
          aria-controls="mobile-drawer"
          className="grid min-h-11 min-w-11 place-items-center rounded-md border border-white/20 text-white lg:hidden"
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>
      </Container>
      <div className="h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" aria-hidden="true" />
      </header>

      {isDrawerOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-navy-deep/70" onClick={closeDrawer} aria-hidden="true" />
          <div
            id="mobile-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación"
            className="absolute right-0 top-0 flex h-full w-72 max-w-[85vw] flex-col bg-navy p-6 shadow-[0_0_60px_rgba(0,0,0,0.4)]"
          >
            <div className="flex items-center justify-between">
              <LogoLockup compact variant="icon" />
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeDrawer}
                aria-label="Cerrar menú"
                className="grid min-h-11 min-w-11 place-items-center rounded-md border border-white/20 text-white"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <nav className="mt-8 grid gap-1" aria-label="Navegación móvil">
              {sections.map((section) => {
                const isActive = section.id === activeSection;
                return (
                  <button
                    key={section.id}
                    type="button"
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => handleNavigate(section.id)}
                    className={`min-h-11 rounded-md px-3 py-2 text-left text-base font-semibold transition ${
                      isActive ? "bg-gold/10 text-gold-light" : "text-white/80 hover:bg-white/5 hover:text-gold-light"
                    }`}
                  >
                    {section.label}
                  </button>
                );
              })}
            </nav>

            <div className="mt-auto flex items-center gap-3 border-t border-white/10 pt-6">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar por WhatsApp"
                onClick={() => trackEvent("whatsapp_click", { location: "nav" })}
                className="grid min-h-11 min-w-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition hover:border-gold hover:text-gold"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver Instagram de Arkanova"
                onClick={() => trackEvent("instagram_click")}
                className="grid min-h-11 min-w-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition hover:border-gold hover:text-gold"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
