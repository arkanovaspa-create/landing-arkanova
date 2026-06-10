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
  UserRound,
  Wrench
} from "lucide-react";
import { Container } from "./Container";
import { LeadForm } from "./LeadForm";
import { MobileWhatsapp } from "./MobileWhatsapp";
import { SectionHeading } from "./SectionHeading";
import { INSTAGRAM_URL, WHATSAPP_NUMBER } from "@/lib/constants";
import { buildWhatsappUrl } from "@/lib/whatsapp";

const LOGO_SRC = "/images/logo-arkanova.png";

const services = [
  { title: "Electricidad domiciliaria y comercial", copy: "Revisión, reparación, normalización e instalación de puntos, tableros y circuitos para espacios seguros.", icon: PlugZap },
  { title: "Remodelaciones integrales", copy: "Mejoramos casas, departamentos, oficinas y locales con una ejecución ordenada de principio a fin.", icon: Hammer },
  { title: "Mantenciones y reparaciones", copy: "Resolvemos fallas, mejoras puntuales y trabajos urgentes para que tu propiedad vuelva a funcionar bien.", icon: Wrench },
  { title: "Oficinas, locales, casas y departamentos", copy: "Atendemos espacios habitacionales y comerciales en Santiago y Región Metropolitana.", icon: Building2 },
  { title: "Normalización eléctrica y tableros", copy: "Revisamos tableros, protecciones y puntos críticos para mejorar seguridad y continuidad operativa.", icon: ShieldCheck },
  { title: "Terminaciones interiores", copy: "Afinamos pintura, pisos, cielos, tabiquería y detalles finales para dejar espacios prolijos y listos.", icon: HardHat }
];

const trustSteps = [
  { title: "Atención en Santiago y RM", copy: "Coordinamos visitas para casas, departamentos, oficinas y locales comerciales.", icon: Building2 },
  { title: "Visita técnica", copy: "Revisamos el alcance real del trabajo antes de proponer una solución.", icon: CalendarCheck },
  { title: "Presupuesto claro", copy: "Definimos partidas, prioridades y condiciones antes de ejecutar.", icon: ClipboardCheck },
  { title: "Comunicación por WhatsApp", copy: "Mantenemos el seguimiento simple, directo y fácil de revisar.", icon: MessageCircle },
  { title: "Trabajo ordenado", copy: "Cuidamos el espacio intervenido y mantenemos una ejecución profesional.", icon: ShieldCheck },
  { title: "Soluciones integrales", copy: "Apoyamos trabajos eléctricos, mantenciones, remodelaciones y terminaciones interiores.", icon: CheckCircle2 }
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

const processSteps = [
  "Nos cuentas tu proyecto",
  "Coordinamos visita técnica",
  "Evaluamos alcance, materiales y condiciones reales",
  "Entregamos una propuesta clara y ejecutamos de forma ordenada"
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
    title: "Oficinas y locales comerciales",
    tag: "Espacios comerciales",
    copy: "Mantenciones, terminaciones y mejoras para espacios de trabajo, venta o atención."
  }
];

export function LandingPage() {
  const whatsappUrl = buildWhatsappUrl(
    "Hola, quiero solicitar una visita técnica con Arkanova. Mi proyecto es: ",
    WHATSAPP_NUMBER
  );

  return (
    <main className="bg-soft">
      <Hero whatsappUrl={whatsappUrl} />
      <Services />
      <Trust />
      <Team />
      <Process />
      <Works />
      <LeadCapture />
      <Faq />
      <Footer whatsappUrl={whatsappUrl} />
      <MobileWhatsapp whatsappUrl={whatsappUrl} />
    </main>
  );
}

function Hero({ whatsappUrl }: { whatsappUrl: string }) {
  return (
    <section id="inicio" className="relative isolate min-h-[92svh] overflow-hidden bg-[#303030] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(38,207,205,0.28),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(253,135,28,0.18),transparent_28%),linear-gradient(135deg,#303030_0%,#252525_52%,#353535_100%)]" />
      <div className="absolute inset-0 opacity-[0.13] [background-image:linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:44px_44px]" />
      <div className="absolute -right-24 top-28 h-72 w-72 rounded-full border border-turquoise/20 bg-turquoise/5 blur-[1px] sm:h-96 sm:w-96" />
      <div className="absolute bottom-16 right-4 hidden h-72 w-72 rotate-45 rounded-[3rem] border border-gold/20 bg-white/[0.03] lg:block" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-turquoise/70 to-transparent" />
      <Container className="relative flex min-h-[92svh] flex-col justify-between py-5 sm:py-7">
        <header className="flex w-fit max-w-full items-center justify-between gap-3 rounded-full border border-white/15 bg-[#303030]/45 px-3 py-2 shadow-[0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur-md sm:w-full sm:px-4">
          <a href="#" className="min-w-0" aria-label="Arkanova inicio">
            <LogoLockup inverse />
          </a>
          <nav className="hidden items-center gap-5 text-sm font-semibold text-white/80 lg:flex" aria-label="Navegación principal">
            <a href="#servicios" className="transition hover:text-turquoise">
              Servicios
            </a>
            <a href="#proceso" className="transition hover:text-turquoise">
              Proceso
            </a>
            <a href="#captacion" className="transition hover:text-turquoise">
              Contacto
            </a>
          </nav>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-10 shrink-0 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-sm font-semibold text-white transition hover:border-turquoise hover:bg-white/20 hover:text-turquoise sm:inline-flex sm:px-4"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            <span>WhatsApp</span>
          </a>
        </header>

        <div className="w-full max-w-[22rem] pb-8 pt-20 sm:max-w-3xl sm:pb-14">
          <p className="text-sm font-semibold uppercase text-turquoise">Arkanova | Remodelación Integral</p>
          <h1 className="mt-5 max-w-full text-[2.25rem] font-semibold leading-[1.06] text-white sm:max-w-2xl sm:text-5xl lg:text-6xl">
            Electricidad y remodelaciones en Santiago y RM
          </h1>
          <p className="mt-5 max-w-full text-base leading-7 text-slate-200 sm:max-w-xl sm:text-lg sm:leading-8">
            Trabajos para casas, departamentos, oficinas y locales comerciales. Agenda tu visita técnica y recibe una propuesta clara.
          </p>
          <div className="mt-5 grid gap-2 text-sm font-medium text-slate-100 sm:max-w-xl sm:grid-cols-3">
            {["Electricidad", "Remodelaciones", "Mantenciones"].map((item) => (
              <p key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-turquoise" aria-hidden="true" />
                {item}
              </p>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#captacion"
              className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-md bg-gold px-4 py-3 text-center text-base font-semibold leading-tight text-white shadow-[0_14px_35px_rgba(253,135,28,0.28)] transition hover:bg-orange/90 hover:shadow-[0_18px_45px_rgba(253,135,28,0.34)] sm:w-auto sm:px-5"
            >
              <span>Solicitar visita técnica</span>
              <ArrowRight className="h-5 w-5 shrink-0" aria-hidden="true" />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-md border border-white/30 bg-white/10 px-4 py-3 text-base font-semibold text-white backdrop-blur transition hover:bg-white/20 sm:w-auto sm:px-5"
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

function Services() {
  return (
    <section id="servicios" className="bg-soft py-14 sm:py-16 lg:py-20">
      <Container>
        <SectionHeading
          eyebrow="Servicios"
          title="Soluciones para electricidad, remodelación y mantención."
          description="Nos enfocamos en trabajos bien definidos, comunicación clara y ejecución profesional para espacios habitacionales y comerciales."
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
            title="Un proceso simple para avanzar con claridad."
            description="Te pedimos la información justa, revisamos el caso y coordinamos el próximo paso por WhatsApp."
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
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

function Team() {
  return (
    <section id="equipo" className="bg-soft py-14 sm:py-16">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Equipo"
            title="Quiénes están detrás de Arkanova"
            description="En Arkanova combinamos planificación, ejecución en terreno y apoyo técnico para entregar soluciones ordenadas, claras y bien coordinadas. Nuestro objetivo es que cada proyecto tenga una buena evaluación inicial, comunicación constante y una ejecución responsable."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {team.map((member) => (
              <article key={member.name} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-turquoise/10 text-turquoise ring-1 ring-turquoise/20">
                  <UserRound className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-ink">{member.name}</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-gold">{member.role}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{member.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Process() {
  return (
    <section id="proceso" className="bg-white py-14 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow="Proceso"
          title="Cómo trabajamos"
          description="Para entregar una propuesta correcta, evaluamos el alcance, ubicación, materiales y condiciones reales del trabajo mediante visita técnica."
        />
        <div className="mt-9 grid gap-4 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <article key={step} className="rounded-lg border border-slate-200 bg-soft p-5">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gold text-sm font-bold text-white">0{index + 1}</span>
              <h3 className="mt-5 text-lg font-semibold leading-snug text-ink">{step}</h3>
            </article>
          ))}
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
            title="Trabajos y avances de Arkanova."
            description="Más adelante sumaremos fotografías reales de proyectos. Por ahora, el foco está en que puedas solicitar una evaluación clara y responsable."
            inverse
          />
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/15 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-white transition hover:border-turquoise hover:text-turquoise lg:shrink-0"
          >
            <Instagram className="h-5 w-5" aria-hidden="true" />
            @arkanova_cl
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
              title="Solicita tu visita técnica."
              description="Cuéntanos tu proyecto y te orientamos con una propuesta clara según el alcance, ubicación y condiciones reales del trabajo."
            />
            <div className="mt-6 grid gap-3 text-sm text-slate-700">
              {["Formulario breve y fácil desde el celular", "Atención en Santiago y Región Metropolitana", "Respuesta directa por WhatsApp"].map((item) => (
                <p key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-turquoise" aria-hidden="true" />
                  {item}
                </p>
              ))}
            </div>
            <p className="mt-6 rounded-lg border border-turquoise/25 bg-white p-4 text-sm leading-6 text-slate-700">
              Para entregar una propuesta correcta, evaluamos el alcance, ubicación, materiales y condiciones reales del trabajo mediante visita técnica.
            </p>
          </div>
          <LeadForm />
        </div>
      </Container>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="bg-white py-14 sm:py-16">
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

function Footer({ whatsappUrl }: { whatsappUrl: string }) {
  return (
    <footer className="bg-[#303030] py-10 text-white">
      <Container>
        <div className="grid gap-7 border-t border-white/10 pt-8 lg:grid-cols-[1.1fr_0.8fr_0.7fr] lg:items-center">
          <div>
            <LogoLockup inverse compact />
            <p className="mt-4 max-w-lg text-sm leading-6 text-slate-300">
              Electricidad, remodelaciones y mantenciones para casas, departamentos, oficinas y locales comerciales en Santiago y Región Metropolitana.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-turquoise">
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              WhatsApp +{WHATSAPP_NUMBER}
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-turquoise">
              <Instagram className="h-5 w-5" aria-hidden="true" />
              @arkanova_cl
            </a>
          </div>
          <a
            href="#captacion"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(253,135,28,0.22)] transition hover:bg-orange/90 lg:justify-self-end"
          >
            Solicitar visita técnica
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </Container>
    </footer>
  );
}

function LogoLockup({ inverse = false, compact = false }: { inverse?: boolean; compact?: boolean }) {
  return (
    <span className="flex min-w-0 items-center gap-3">
      <span
        className={`relative shrink-0 overflow-hidden rounded-lg bg-white shadow-sm ring-1 ${
          compact ? "h-12 w-14" : "h-16 w-[76px] sm:h-20 sm:w-24"
        } ${inverse ? "ring-white/20" : "ring-slate-200"}`}
      >
        <Image
          src={LOGO_SRC}
          alt="Logo Arka Nova"
          fill
          sizes={compact ? "56px" : "(min-width: 640px) 96px, 76px"}
          className="object-contain p-1"
          priority={!compact}
        />
      </span>
      <span className="hidden min-w-0 leading-tight sm:block">
        <span className={`hidden text-xs font-medium sm:block ${inverse ? "text-white/70" : "text-slate-500"}`}>Remodelación Integral</span>
      </span>
    </span>
  );
}
