"use client";

import { useEffect, useRef, useState } from "react";
import type { RefObject } from "react";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  Hammer,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  PlugZap,
  UserRound,
  Wrench
} from "lucide-react";
import { Container } from "./Container";
import { LeadForm } from "./LeadForm";
import { LogoLockup } from "./LogoLockup";
import { MobileWhatsapp } from "./MobileWhatsapp";
import { SectionHeading } from "./SectionHeading";
import { SectionNav } from "./SectionNav";
import type { NavSection } from "./SectionNav";
import { TechBackdrop } from "./TechBackdrop";
import { trackEvent } from "@/lib/analytics";
import { INSTAGRAM_URL, WHATSAPP_NUMBER } from "@/lib/constants";
import { buildWhatsappUrl } from "@/lib/whatsapp";

const NAV_SECTIONS: NavSection[] = [
  { id: "inicio", label: "Inicio" },
  { id: "servicios", label: "Servicios" },
  { id: "como-trabajamos", label: "Cómo trabajamos" },
  { id: "equipo", label: "Equipo" },
  { id: "faq", label: "Preguntas" },
  { id: "captacion", label: "Contacto" }
];

const serviceCategories = [
  {
    id: "instalaciones-electricas",
    title: "Instalaciones Eléctricas",
    analyticsCategory: "instalaciones_electricas",
    copy: "Revisión, normalización e instalación de puntos, tableros y circuitos, incluyendo normalizaciones con certificación TE1/SEC.",
    icon: PlugZap,
    items: ["Electricidad domiciliaria y comercial", "Normalización eléctrica y tableros"]
  },
  {
    id: "remodelaciones",
    title: "Remodelaciones",
    analyticsCategory: "remodelaciones",
    copy: "Mejoramos casas, departamentos, oficinas y locales con una ejecución ordenada de principio a fin.",
    icon: Hammer,
    items: ["Remodelaciones integrales", "Terminaciones interiores"]
  },
  {
    id: "mantencion-y-espacios",
    title: "Mantención y Espacios",
    analyticsCategory: "mantencion_espacios",
    copy: "Resolvemos fallas, mejoras puntuales y trabajos urgentes en espacios habitacionales y comerciales.",
    icon: Wrench,
    items: ["Mantenciones y reparaciones", "Oficinas, locales, casas y departamentos"]
  }
];

const coverageZones = ["Providencia", "Bilbao", "Cerro Colorado", "Pudahuel"];

const COMPANY_EMAIL = "arkanovaspa@gmail.com";

function formatChileanPhone(number: string) {
  return `+${number.slice(0, 2)} ${number.slice(2, 3)} ${number.slice(3, 7)} ${number.slice(7, 11)}`;
}

const howWeWorkSteps = [
  { title: "Nos cuentas tu proyecto", icon: MessageCircle },
  { title: "Coordinamos visita técnica", icon: CalendarCheck },
  { title: "Evaluamos alcance, materiales y condiciones reales", icon: ClipboardCheck },
  { title: "Entregamos una propuesta clara y ejecutamos de forma ordenada", icon: CheckCircle2 }
];

const team = [
  {
    name: "Alejandro Astete",
    role: "Gestión, planificación y especialidad eléctrica",
    copy: "Encargado de planificación, control financiero interno, documentación, presupuestos y apoyo técnico en soluciones eléctricas."
  },
  {
    name: "Rodrigo Montecinos",
    role: "Ejecución en terreno, arquitectura y coordinación de proveedores",
    copy: "Encargado de la ejecución de obras, coordinación en terreno, apoyo arquitectónico, contacto con proveedores y control operativo de los proyectos."
  }
];

const faqs = [
  {
    question: "¿Trabajan en toda la Región Metropolitana?",
    answer: "Sí, atendemos proyectos en Santiago y comunas de la Región Metropolitana."
  },
  {
    question: "¿La visita técnica tiene costo?",
    answer: "Depende del tipo de proyecto, ubicación y nivel de evaluación requerida. Te lo confirmamos antes de agendar."
  },
  {
    question: "¿Realizan trabajos eléctricos y remodelaciones?",
    answer: "Sí, ejecutamos trabajos eléctricos, mantenciones, remodelaciones y soluciones integrales para casas, departamentos, oficinas y locales."
  },
  {
    question: "¿Entregan presupuesto formal?",
    answer: "Sí, entregamos una propuesta clara según el alcance, materiales, mano de obra y condiciones reales del trabajo."
  },
  {
    question: "¿Pueden darme un valor inmediato?",
    answer: "Podemos entregar una orientación inicial, pero el presupuesto formal depende del alcance, materiales, ubicación y condiciones reales del trabajo. Por eso recomendamos coordinar una visita técnica."
  }
];

function useSectionFocus(isActive: boolean) {
  const ref = useRef<HTMLElement>(null);
  const hasMounted = useRef(false);

  useEffect(() => {
    if (isActive && hasMounted.current) {
      ref.current?.focus();
    }
    hasMounted.current = true;
  }, [isActive]);

  return ref;
}

export function LandingPage() {
  const [activeSection, setActiveSection] = useState("inicio");
  const whatsappUrl = buildWhatsappUrl(
    "Hola, quiero solicitar una visita técnica con Arkanova. Mi proyecto es: ",
    WHATSAPP_NUMBER
  );

  return (
    <>
      <TechBackdrop />
      <SectionNav
        sections={NAV_SECTIONS}
        activeSection={activeSection}
        onNavigate={setActiveSection}
        whatsappUrl={whatsappUrl}
        instagramUrl={INSTAGRAM_URL}
      />
      <main className="bg-soft">
        <Hero isActive={activeSection === "inicio"} whatsappUrl={whatsappUrl} onNavigate={setActiveSection} />
        <Services isActive={activeSection === "servicios"} />
        <ComoTrabajamos isActive={activeSection === "como-trabajamos"} />
        <Team isActive={activeSection === "equipo"} />
        <Faq isActive={activeSection === "faq"} />
        <LeadCapture isActive={activeSection === "captacion"} />
        <Footer whatsappUrl={whatsappUrl} onNavigate={setActiveSection} />
      </main>
      <MobileWhatsapp whatsappUrl={whatsappUrl} isNearForm={activeSection === "captacion"} />
    </>
  );
}

type SectionProps = {
  isActive: boolean;
};

function Hero({ isActive, whatsappUrl, onNavigate }: SectionProps & { whatsappUrl: string; onNavigate: (id: string) => void }) {
  const ref = useSectionFocus(isActive);
  return (
    <section
      id="inicio"
      ref={ref as RefObject<HTMLElement>}
      tabIndex={-1}
      hidden={!isActive}
      className={`relative min-h-[92svh] overflow-hidden bg-navy text-white ${isActive ? "animate-section-in" : ""}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(198,162,88,0.16),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(198,162,88,0.10),transparent_28%),linear-gradient(135deg,#0D1733_0%,#080D1F_52%,#101D3D_100%)]" />
      <div className="absolute -right-24 top-28 h-72 w-72 rounded-full border border-gold/25 sm:h-96 sm:w-96" />
      <div className="absolute bottom-16 right-4 hidden h-72 w-72 rotate-45 rounded-[3rem] border border-gold/20 bg-white/[0.03] lg:block" />
      <Container className="relative flex min-h-[92svh] flex-col justify-center py-5 sm:py-7">
        <div className="corner-accent w-full max-w-[22rem] p-4 pb-8 sm:max-w-3xl sm:p-6">
          <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-gold-light sm:text-sm">
            <span className="text-gold" aria-hidden="true">
              {"//"}
            </span>
            Arkanova | Remodelación Integral
          </p>
          <h1 className="mt-5 max-w-full font-display text-[2.25rem] font-semibold leading-[1.08] text-white sm:max-w-2xl sm:text-5xl lg:text-6xl">
            Electricidad y remodelaciones en Santiago y RM
          </h1>
          <p className="mt-5 max-w-full text-base leading-7 text-slate-200 sm:max-w-xl sm:text-lg sm:leading-8">
            Trabajos para casas, departamentos, oficinas y locales comerciales. Agenda tu visita técnica y recibe una propuesta clara.
          </p>
          <div className="corner-accent mt-5 grid max-w-fit gap-2 border border-gold/20 bg-white/[0.02] p-4 text-sm font-medium text-slate-100 sm:max-w-xl sm:grid-cols-3">
            {["Electricidad", "Remodelaciones", "Mantenciones"].map((item) => (
              <p key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                {item}
              </p>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => onNavigate("captacion")}
              className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-md bg-gold px-4 py-3 text-center text-base font-semibold leading-tight text-navy shadow-[0_14px_35px_rgba(198,162,88,0.3)] transition hover:bg-gold-light hover:shadow-[0_18px_45px_rgba(198,162,88,0.38)] sm:w-auto sm:px-5"
            >
              <span>Solicitar visita técnica</span>
              <ArrowRight className="h-5 w-5 shrink-0" aria-hidden="true" />
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("whatsapp_click", { location: "hero" })}
              className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-md border border-white/30 bg-white/10 px-4 py-3 text-base font-semibold text-white backdrop-blur transition hover:border-gold/60 hover:bg-white/20 sm:w-auto sm:px-5"
            >
              <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </Container>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-soft to-transparent" />
    </section>
  );
}

function Services({ isActive }: SectionProps) {
  const ref = useSectionFocus(isActive);
  return (
    <section
      id="servicios"
      ref={ref as RefObject<HTMLElement>}
      tabIndex={-1}
      hidden={!isActive}
      className={`bg-soft py-14 sm:py-16 lg:py-20 ${isActive ? "animate-section-in" : ""}`}
    >
      <Container>
        <SectionHeading
          eyebrow="Servicios"
          title="Soluciones para electricidad, remodelación y mantención."
          description="Nos enfocamos en trabajos bien definidos para espacios habitacionales y comerciales."
        />
        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {serviceCategories.map((category) => {
            const Icon = category.icon;
            const categoryWhatsappUrl = buildWhatsappUrl(
              `Hola, quiero cotizar un servicio de ${category.title} con Arkanova. Mi proyecto es: `
            );
            return (
              <article
                key={category.id}
                id={category.id}
                className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-gold/50 hover:shadow-soft"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-navy via-gold to-gold-light opacity-80" />
                <div className="grid h-14 w-14 place-items-center rounded-lg bg-navy text-gold ring-1 ring-gold/20 transition group-hover:bg-gold group-hover:text-navy">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">{category.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{category.copy}</p>
                <ul className="mt-4 grid gap-2 text-sm text-slate-700">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-ink" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={categoryWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Cotizar ${category.title} por WhatsApp`}
                  onClick={() => trackEvent("whatsapp_click", { location: "categoria", category: category.analyticsCategory })}
                  className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-navy/15 bg-soft px-4 py-2 text-sm font-semibold text-navy transition hover:border-gold hover:bg-gold/10 hover:text-gold-ink"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Cotizar
                </a>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function ComoTrabajamos({ isActive }: SectionProps) {
  const ref = useSectionFocus(isActive);
  return (
    <section
      id="como-trabajamos"
      ref={ref as RefObject<HTMLElement>}
      tabIndex={-1}
      hidden={!isActive}
      className={`bg-white py-14 sm:py-16 lg:py-20 ${isActive ? "animate-section-in" : ""}`}
    >
      <Container>
        <SectionHeading
          eyebrow="Cómo trabajamos"
          title="Un proceso simple, con cobertura en toda la RM."
          description="Para entregar una propuesta correcta, evaluamos el alcance, ubicación, materiales y condiciones reales del trabajo mediante visita técnica."
        />

        <div className="mt-7">
          <p className="flex items-center gap-2 text-sm font-semibold text-ink">
            <MapPin className="h-4 w-4 text-gold-ink" aria-hidden="true" />
            Algunas zonas donde atendemos
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {coverageZones.map((zone) => (
              <li key={zone} className="rounded-full border border-gold/25 bg-gold/5 px-3 py-1 text-sm font-medium text-navy">
                {zone}
              </li>
            ))}
          </ul>
          <p className="mt-2 text-sm text-slate-600">Y otras comunas de Santiago y la Región Metropolitana.</p>
        </div>

        <div className="mt-9 grid gap-4 md:grid-cols-4">
          {howWeWorkSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article key={step.title} className="rounded-lg border border-slate-200 bg-soft p-5">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-gold text-sm font-bold text-navy">0{index + 1}</span>
                  <Icon className="h-5 w-5 text-gold-ink" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-snug text-ink">{step.title}</h3>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function Team({ isActive }: SectionProps) {
  const ref = useSectionFocus(isActive);
  return (
    <section
      id="equipo"
      ref={ref as RefObject<HTMLElement>}
      tabIndex={-1}
      hidden={!isActive}
      className={`bg-soft py-14 sm:py-16 lg:py-20 ${isActive ? "animate-section-in" : ""}`}
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Equipo"
            title="Quiénes están detrás de Arkanova"
            description="Planificación, ejecución en terreno y apoyo técnico bajo la misma coordinación."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {team.map((member) => (
              <article key={member.name} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-gold/10 text-gold-ink ring-1 ring-gold/20">
                  <UserRound className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-ink">{member.name}</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-gold-ink">{member.role}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{member.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Faq({ isActive }: SectionProps) {
  const ref = useSectionFocus(isActive);
  return (
    <section
      id="faq"
      ref={ref as RefObject<HTMLElement>}
      tabIndex={-1}
      hidden={!isActive}
      className={`bg-white py-14 sm:py-16 lg:py-20 ${isActive ? "animate-section-in" : ""}`}
    >
      <Container>
        <SectionHeading eyebrow="Preguntas frecuentes" title="Dudas antes de solicitar tu visita" />
        <div className="mt-9 grid gap-4 lg:grid-cols-2">
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-lg border border-slate-200 bg-soft p-5">
              <h3 className="text-base font-semibold text-ink">{faq.question}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{faq.answer}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function LeadCapture({ isActive }: SectionProps) {
  const ref = useSectionFocus(isActive);
  return (
    <section
      id="captacion"
      ref={ref as RefObject<HTMLElement>}
      tabIndex={-1}
      hidden={!isActive}
      className={`bg-soft py-14 sm:py-16 lg:py-20 ${isActive ? "animate-section-in" : ""}`}
    >
      <Container>
        <div className="grid gap-9 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Evaluación"
              title="Solicita tu visita técnica."
              description="Cuéntanos tu proyecto y te orientamos con una propuesta clara según el alcance, ubicación y condiciones reales del trabajo."
            />
            <div className="mt-6 grid gap-3 text-sm text-slate-700">
              {["Formulario breve y fácil desde el celular", "Zonas de cobertura en toda la RM", "Respuesta directa por WhatsApp"].map((item) => (
                <p key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-gold-ink" aria-hidden="true" />
                  {item}
                </p>
              ))}
            </div>
          </div>
          <LeadForm />
        </div>
      </Container>
    </section>
  );
}

function Footer({ whatsappUrl, onNavigate }: { whatsappUrl: string; onNavigate: (id: string) => void }) {
  return (
    <footer className="relative overflow-hidden bg-navy py-10 text-white">
      <Container>
        <div className="grid gap-9 border-t border-white/10 pt-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          <div className="corner-accent max-w-lg p-3">
            <LogoLockup inverse compact />
            <p className="mt-4 max-w-lg text-sm leading-6 text-slate-300">
              Electricidad, remodelaciones y mantenciones para casas, departamentos, oficinas y locales comerciales en Santiago y Región Metropolitana.
            </p>
          </div>

          <nav aria-label="Navegación del pie de página">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-gold-light">Navegación</p>
            <ul className="mt-4 grid gap-2">
              {NAV_SECTIONS.map((section) => (
                <li key={section.id}>
                  <button
                    type="button"
                    onClick={() => onNavigate(section.id)}
                    className="text-sm text-slate-300 transition hover:text-gold"
                  >
                    {section.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-gold-light">Contacto</p>
            <ul className="mt-4 grid gap-3 text-sm text-slate-300">
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("whatsapp_click", { location: "footer" })}
                  className="flex items-center gap-2 transition hover:text-gold"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  {formatChileanPhone(WHATSAPP_NUMBER)}
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY_EMAIL}`} className="flex items-center gap-2 transition hover:text-gold">
                  <Mail className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  {COMPANY_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("instagram_click")}
                  className="flex items-center gap-2 transition hover:text-gold"
                >
                  <Instagram className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  @arkanova_cl
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-9 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-400">Arkanova SpA — Santiago, Región Metropolitana</p>
          <button
            type="button"
            onClick={() => onNavigate("captacion")}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-semibold text-navy shadow-[0_14px_35px_rgba(198,162,88,0.28)] transition hover:bg-gold-light sm:w-auto"
          >
            Solicitar visita técnica
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </Container>
    </footer>
  );
}
