import Image from "next/image";
import {
  ArrowRight,
  Building2,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  Hammer,
  HardHat,
  Instagram,
  Lightbulb,
  MessageCircle,
  PlugZap,
  ShieldCheck,
  Wrench
} from "lucide-react";
import { Container } from "./Container";
import { LeadForm } from "./LeadForm";
import { SectionHeading } from "./SectionHeading";
import { INSTAGRAM_URL, WHATSAPP_NUMBER } from "@/lib/constants";
import { buildWhatsappUrl } from "@/lib/whatsapp";

const services = [
  { title: "Remodelación integral", copy: "Renovamos casas, departamentos y oficinas con una ejecución ordenada desde la revisión inicial hasta las terminaciones.", icon: Hammer },
  { title: "Electricidad domiciliaria y comercial", copy: "Revisamos, reparamos e instalamos puntos, tableros y circuitos con foco en seguridad y continuidad.", icon: PlugZap },
  { title: "Mantención y reparaciones", copy: "Resolvemos fallas y mejoras puntuales para que tu propiedad vuelva a funcionar sin vueltas innecesarias.", icon: Wrench },
  { title: "Terminaciones interiores", copy: "Afinamos pintura, pisos, cielos, tabiquería y detalles finales para dejar espacios prolijos y listos.", icon: HardHat },
  { title: "Oficinas y espacios comerciales", copy: "Habilitamos y mejoramos espacios de trabajo, atención o venta cuidando tiempos y operación diaria.", icon: Building2 },
  { title: "Evaluación técnica en terreno", copy: "Visitamos en Santiago y RM para revisar el alcance, priorizar partidas y preparar un presupuesto claro.", icon: CalendarCheck }
];

const trustSteps = [
  { title: "Agenda simple", copy: "Nos escribes por WhatsApp y coordinamos visita técnica o revisión inicial.", icon: CalendarCheck },
  { title: "Presupuesto claro", copy: "Definimos alcance, partidas y prioridades antes de ejecutar.", icon: ClipboardCheck },
  { title: "Ejecución profesional", copy: "Trabajo ordenado, buena comunicación y cuidado del espacio intervenido.", icon: ShieldCheck },
  { title: "Revisión final", copy: "Acompañamos el avance y revisamos el resultado antes de cerrar.", icon: CheckCircle2 }
];

const works = [
  {
    title: "Remodelación de casa o departamento",
    tag: "Remodelación integral",
    copy: "Renovación de espacios interiores con electricidad, terminaciones y coordinación de obra."
  },
  {
    title: "Electricidad para vivienda u oficina",
    tag: "Electricidad",
    copy: "Revisión de tableros, puntos eléctricos, circuitos y reparaciones para operar con seguridad."
  },
  {
    title: "Oficinas y espacios comerciales",
    tag: "Oficinas",
    copy: "Mantenciones, terminaciones y mejoras para espacios de trabajo o atención."
  }
];

export function LandingPage() {
  const whatsappUrl = buildWhatsappUrl(
    "Hola, me gustaría agendar una visita técnica con Arkanova para un trabajo de electricidad o remodelación en Santiago/RM.",
    WHATSAPP_NUMBER
  );

  return (
    <main className="bg-soft">
      <Hero whatsappUrl={whatsappUrl} />
      <Services />
      <Trust />
      <Works />
      <LeadCapture />
      <Footer whatsappUrl={whatsappUrl} />
    </main>
  );
}

function Hero({ whatsappUrl }: { whatsappUrl: string }) {
  return (
    <section id="inicio" className="relative min-h-[92svh] overflow-hidden bg-[#303030] text-white">
      <Image
        src="/images/arkanova-hero.png"
        alt="Equipo técnico trabajando en una remodelación profesional"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(48,48,48,0.9)_0%,rgba(48,48,48,0.68)_48%,rgba(48,48,48,0.18)_100%)]" />
      <div className="absolute inset-0 bg-[#303030]/20 sm:bg-transparent" />
      <Container className="relative flex min-h-[92svh] flex-col justify-between py-5 sm:py-7">
        <header className="flex items-center justify-between gap-3 rounded-full border border-white/15 bg-[#303030]/45 px-3 py-2 shadow-[0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur-md sm:px-4">
          <a href="#" className="min-w-0" aria-label="Arkanova inicio">
            <LogoLockup inverse />
          </a>
          <nav className="hidden items-center gap-5 text-sm font-semibold text-white/80 lg:flex" aria-label="Navegación principal">
            <a href="#servicios" className="transition hover:text-turquoise">
              Servicios
            </a>
            <a href="#trabajos" className="transition hover:text-turquoise">
              Trabajos
            </a>
            <a href="#captacion" className="transition hover:text-turquoise">
              Contacto
            </a>
          </nav>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-10 shrink-0 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-sm font-semibold text-white transition hover:border-turquoise hover:bg-white/20 hover:text-turquoise sm:px-4"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            <span>WhatsApp</span>
          </a>
        </header>

        <div className="w-full max-w-[22rem] pb-8 pt-20 sm:max-w-3xl sm:pb-14">
          <p className="text-sm font-semibold uppercase text-turquoise">Arkanova | Remodelación Integral</p>
          <h1 className="mt-5 max-w-full text-[2.25rem] font-semibold leading-[1.06] text-white sm:max-w-2xl sm:text-5xl lg:text-6xl">
            Expertos en electricidad y remodelación en Santiago y RM
          </h1>
          <p className="mt-5 max-w-full text-base leading-7 text-slate-200 sm:max-w-xl sm:text-lg sm:leading-8">
            Realizamos trabajos para casas, departamentos y oficinas, con evaluación técnica, presupuesto claro y ejecución profesional.
          </p>
          <div className="mt-5 grid gap-2 text-sm font-medium text-slate-100 sm:max-w-xl sm:grid-cols-3">
            {["Casas", "Departamentos", "Oficinas"].map((item) => (
              <p key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-turquoise" aria-hidden="true" />
                {item}
              </p>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-md bg-gold px-4 py-3 text-center text-base font-semibold leading-tight text-white shadow-[0_14px_35px_rgba(253,135,28,0.28)] transition hover:bg-orange/90 hover:shadow-[0_18px_45px_rgba(253,135,28,0.34)] sm:w-auto sm:px-5"
            >
              <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
              <span>Agendar visita técnica</span>
            </a>
            <a
              href="#servicios"
              className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-md border border-white/30 bg-white/10 px-4 py-3 text-base font-semibold text-white backdrop-blur transition hover:bg-white/20 sm:w-auto sm:px-5"
            >
              Ver servicios
              <ArrowRight className="h-5 w-5 shrink-0" aria-hidden="true" />
            </a>
          </div>
        </div>
      </Container>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-soft to-transparent" />
    </section>
  );
}

function Services() {
  return (
    <section id="servicios" className="bg-soft py-14 sm:py-16 lg:py-20">
      <Container>
        <SectionHeading
          eyebrow="Servicios"
          title="Electricidad y remodelación integral para tu espacio."
          description="Nos enfocamos en casas, departamentos y oficinas en Santiago y Región Metropolitana. Si el trabajo requiere apoyo complementario, lo evaluamos dentro del alcance."
        />
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-turquoise/50 hover:shadow-soft"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-turquoise via-aqua to-gold opacity-80" />
                <div className="flex items-start justify-between gap-4">
                  <div className="grid h-11 w-11 place-items-center rounded-md bg-turquoise/10 text-turquoise ring-1 ring-turquoise/20 transition group-hover:bg-turquoise group-hover:text-ink">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-bold text-slate-300">0{index + 1}</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{service.copy}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function Trust() {
  return (
    <section id="confianza" className="bg-white py-14 sm:py-16">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <SectionHeading
            eyebrow="Confianza"
            title="Agenda tu visita técnica sin vueltas."
            description="Te pedimos la información justa, revisamos el caso y coordinamos el próximo paso por WhatsApp."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {trustSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article key={step.title} className="rounded-lg border border-slate-200 bg-soft p-5 transition hover:border-turquoise/50">
                  <div className="flex items-center gap-3">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-sm font-bold text-gold ring-1 ring-slate-200">0{index + 1}</span>
                    <Icon className="h-5 w-5 text-turquoise" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{step.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Works() {
  return (
    <section id="trabajos" className="bg-[#303030] py-16 text-white sm:py-20">
      <Container>
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Trabajos realizados"
            title="Trabajos y avances de remodelación."
            description="Ejemplos de trabajos eléctricos, remodelaciones y terminaciones para casas, departamentos y oficinas."
            inverse
          />
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/15 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-white transition hover:border-turquoise hover:text-turquoise lg:shrink-0"
          >
            <Instagram className="h-5 w-5" aria-hidden="true" />
            Ver Instagram
          </a>
        </div>
        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {works.map((work, index) => (
            <article key={work.title} className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
              <div className="flex items-start justify-between gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-md bg-gradient-to-br from-turquoise/25 to-gold/25 ring-1 ring-white/10">
                  <Lightbulb className="h-6 w-6 text-turquoise" aria-hidden="true" />
                </div>
                <span className="text-xs font-bold text-white/35">0{index + 1}</span>
              </div>
              <div className="mt-8 h-px bg-gradient-to-r from-turquoise/80 via-gold/70 to-transparent" />
              <div className="pt-5">
                <p className="inline-flex rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-semibold uppercase text-turquoise">
                  {work.tag}
                </p>
                <h3 className="mt-4 text-lg font-semibold">{work.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{work.copy}</p>
              </div>
            </article>
          ))}
        </div>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md border border-white/15 bg-white/[0.04] px-4 py-2 text-center text-sm font-semibold text-white transition hover:border-turquoise hover:text-turquoise sm:w-auto"
        >
          <Instagram className="h-5 w-5" aria-hidden="true" />
          Revisa nuestros trabajos y avances en Instagram: @arkanova_cl
        </a>
      </Container>
    </section>
  );
}

function LeadCapture() {
  return (
    <section id="captacion" className="bg-soft py-14 sm:py-20">
      <Container>
        <div className="grid gap-9 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Evaluación"
              title="Agenda una visita técnica."
              description="Cuéntanos qué necesitas y coordinamos una visita técnica o revisión inicial por WhatsApp."
            />
            <div className="mt-6 grid gap-3 text-sm text-slate-700">
              {["Pensado para contacto rápido desde Instagram", "Atención en Santiago y Región Metropolitana", "Conversación directa por WhatsApp"].map((item) => (
                <p key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-turquoise" aria-hidden="true" />
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

function Footer({ whatsappUrl }: { whatsappUrl: string }) {
  return (
    <footer className="bg-[#303030] py-10 text-white">
      <Container>
        <div className="grid gap-7 border-t border-white/10 pt-8 lg:grid-cols-[1.1fr_0.8fr_0.7fr] lg:items-center">
          <div>
            <LogoLockup inverse compact />
            <p className="mt-4 max-w-lg text-sm leading-6 text-slate-300">
              Expertos en electricidad y remodelación integral para casas, departamentos y oficinas en Santiago y Región Metropolitana.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-turquoise">
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              WhatsApp +{WHATSAPP_NUMBER}
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-turquoise">
              <Instagram className="h-5 w-5" aria-hidden="true" />
              Revisa nuestros trabajos y avances en Instagram: @arkanova_cl
            </a>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(253,135,28,0.22)] transition hover:bg-orange/90 lg:justify-self-end"
          >
            Agenda tu visita técnica
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </Container>
    </footer>
  );
}

function LogoLockup({ inverse = false, compact = false }: { inverse?: boolean; compact?: boolean }) {
  return (
    <span className="flex min-w-0 items-center gap-2.5">
      <span
        className={`grid shrink-0 place-items-center overflow-hidden rounded-full bg-white p-1.5 shadow-sm ring-1 ${
          compact ? "h-10 w-10" : "h-11 w-11 sm:h-12 sm:w-12"
        } ${inverse ? "ring-white/35" : "ring-slate-200"}`}
      >
        <span className="relative h-full w-full">
          <Image
            src="/images/logo-arkanova.jpeg"
            alt="Logo Arka Nova"
            fill
            sizes={compact ? "40px" : "48px"}
            className="object-cover object-[50%_42%] scale-[1.75]"
            priority={!compact}
          />
        </span>
      </span>
      <span className="min-w-0 leading-tight">
        <span className={`block text-sm font-bold tracking-normal ${inverse ? "text-white" : "text-ink"}`}>Arka Nova</span>
        <span className={`hidden text-xs font-medium sm:block ${inverse ? "text-white/70" : "text-slate-500"}`}>Remodelación Integral</span>
      </span>
    </span>
  );
}
