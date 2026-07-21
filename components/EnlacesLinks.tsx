"use client";

import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { ClipboardCheck, Globe, Instagram, MessageCircle } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { INSTAGRAM_URL } from "@/lib/constants";
import { buildWhatsappUrl } from "@/lib/whatsapp";

const LOGO_SRC = "/images/logo-completo-transparente.png";
const LOGO_RATIO = 2000 / 1620;

type LinkItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  external: boolean;
  emphasis: "primary" | "secondary";
  onClick?: () => void;
};

export function EnlacesLinks() {
  const whatsappUrl = buildWhatsappUrl("Hola, quiero cotizar un proyecto con Arkanova.");

  const links: LinkItem[] = [
    {
      label: "Sitio web",
      href: "/",
      icon: Globe,
      external: false,
      emphasis: "secondary"
    },
    {
      label: "Escríbenos por WhatsApp",
      href: whatsappUrl,
      icon: MessageCircle,
      external: true,
      emphasis: "primary",
      onClick: () => trackEvent("whatsapp_click", { location: "enlaces" })
    },
    {
      label: "Síguenos en Instagram",
      href: INSTAGRAM_URL,
      icon: Instagram,
      external: true,
      emphasis: "secondary",
      onClick: () => trackEvent("instagram_click", { location: "enlaces" })
    },
    {
      label: "Cotizar proyecto",
      href: "/#captacion",
      icon: ClipboardCheck,
      external: false,
      emphasis: "primary",
      onClick: () => trackEvent("cotizar_click", { location: "enlaces" })
    }
  ];

  return (
    <main className="relative flex min-h-[100svh] flex-col items-center overflow-hidden bg-navy px-4 py-12 text-white sm:py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(198,162,88,0.16),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(198,162,88,0.10),transparent_28%),linear-gradient(135deg,#0D1733_0%,#080D1F_52%,#101D3D_100%)]" />

      <div className="relative z-[2] flex w-full max-w-sm flex-1 flex-col items-center justify-center text-center">
        <div className="corner-accent p-5">
          <span className="relative mx-auto block h-24 w-[119px] sm:h-28 sm:w-[138px]">
            <Image src={LOGO_SRC} alt="Arkanova SpA" fill sizes="160px" className="object-contain" priority />
          </span>
        </div>

        <h1 className="mt-4 font-display text-2xl font-semibold text-white sm:text-3xl">Arkanova</h1>
        <p className="mt-1 font-mono text-xs uppercase tracking-[0.16em] text-gold-light sm:text-sm">
          Remodelación Integral
        </p>
        <p className="mt-5 max-w-xs text-sm leading-6 text-slate-300">
          Elige una opción para contactarnos.
        </p>

        <nav aria-label="Enlaces de Arkanova" className="mt-9 grid w-full gap-4">
          {links.map((link) => {
            const Icon = link.icon;
            const isPrimary = link.emphasis === "primary";
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                onClick={link.onClick}
                className={`inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-md px-5 py-3 text-base font-semibold transition ${
                  isPrimary
                    ? "bg-gold text-navy shadow-[0_14px_35px_rgba(198,162,88,0.3)] hover:bg-gold-light hover:shadow-[0_18px_45px_rgba(198,162,88,0.38)]"
                    : "border border-white/30 bg-white/10 text-white backdrop-blur transition hover:border-gold/60 hover:bg-white/20"
                }`}
              >
                <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                {link.label}
              </a>
            );
          })}
        </nav>
      </div>

      <p className="relative z-[2] mt-10 text-xs text-slate-400">Arkanova SpA — Santiago, Región Metropolitana</p>
    </main>
  );
}
