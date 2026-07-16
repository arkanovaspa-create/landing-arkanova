"use client";

import type { FormEvent } from "react";
import { useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { projectTypes } from "@/lib/constants";
import { buildLeadWhatsappMessage, buildWhatsappUrl } from "@/lib/whatsapp";

type FormValues = {
  name: string;
  phone: string;
  commune: string;
  project_type: string;
  description: string;
};

type SubmitStatus = "idle" | "sending" | "success" | "error";

const initialValues: FormValues = {
  name: "",
  phone: "",
  commune: "",
  project_type: "",
  description: ""
};

export function LeadForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [message, setMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

  const whatsappUrl = useMemo(() => {
    return buildWhatsappUrl(
      buildLeadWhatsappMessage({
        name: values.name || "Cliente",
        phone: values.phone,
        commune: values.commune,
        projectType: values.project_type || "Trabajo por definir",
        description: values.description
      })
    );
  }, [values]);

  function updateValue(name: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [name]: value }));
    setSubmitStatus("idle");
    setMessage("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const name = values.name.trim();
    const phone = values.phone.trim();
    const commune = values.commune.trim();
    const projectType = values.project_type.trim();
    const description = values.description.trim();

    if (!name || !phone || !commune) {
      setSubmitStatus("error");
      setMessage("Completa los campos obligatorios antes de enviar.");
      return;
    }

    if (!projectType && !description) {
      setSubmitStatus("error");
      setMessage("Indica el servicio requerido o una breve descripción.");
      return;
    }

    if (phone.replace(/\D/g, "").length < 8) {
      setSubmitStatus("error");
      setMessage("Ingresa un teléfono válido para poder contactarte.");
      return;
    }

    setSubmitStatus("sending");
    setMessage("Enviando solicitud...");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          phone,
          commune,
          project_type: projectType,
          description,
          url_origen: typeof window !== "undefined" ? window.location.href : ""
        })
      });

      if (!response.ok) {
        throw new Error("Lead request failed");
      }

      setSubmitStatus("success");
      setMessage("Solicitud enviada correctamente. Te contactaremos a la brevedad.");
      trackEvent("form_submit_success");
    } catch {
      setSubmitStatus("error");
      setMessage("Hubo un problema al enviar el formulario. Puedes escribirnos directamente por WhatsApp.");
      trackEvent("form_submit_fallback_whatsapp");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative grid min-w-0 gap-5 overflow-hidden rounded-xl border border-slate-200 bg-white p-4 shadow-soft ring-1 ring-white sm:p-7">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-navy via-gold to-gold-light opacity-80" />
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-gold-ink">Contacto rápido</p>
        <h3 className="mt-2 font-display text-2xl font-semibold text-ink">Solicita una visita técnica</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Cuéntanos qué necesitas y coordinamos una visita técnica o revisión inicial por WhatsApp.
        </p>
      </div>

      <div className="grid min-w-0 gap-4 sm:grid-cols-2">
        <Field label="Nombre" name="name" value={values.name} placeholder="Tu nombre" autoComplete="name" required onChange={updateValue} />
        <Field label="WhatsApp / Teléfono" name="phone" value={values.phone} placeholder="+56 9 1234 5678" autoComplete="tel" inputMode="tel" required onChange={updateValue} />
        <Field label="Comuna" name="commune" value={values.commune} placeholder="Santiago, Ñuñoa, Maipú..." required onChange={updateValue} />
        <Select label="Servicio requerido" name="project_type" value={values.project_type} options={projectTypes} onChange={updateValue} />
      </div>

      <div className="grid gap-2">
        <label htmlFor="description" className="text-sm font-semibold text-ink">
          Mensaje / descripción breve
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          value={values.description}
          onChange={(event) => updateValue("description", event.target.value)}
          placeholder="Ej: revisar tablero eléctrico, remodelar cocina, mejorar terminaciones, habilitar oficina..."
          className="min-h-32 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-base font-normal text-ink outline-none transition hover:border-slate-400 focus:border-gold focus:ring-4 focus:ring-gold/10"
        />
      </div>

      <p role="status" aria-live="polite" className="sr-only">
        {message}
      </p>

      {message ? (
        <div
          className={`rounded-md border px-4 py-3 text-sm ${
            submitStatus === "success"
              ? "border-gold/30 bg-gold/10 text-ink"
              : submitStatus === "sending"
                ? "border-slate-200 bg-slate-50 text-ink"
                : "border-red-200 bg-red-50 text-red-800"
          }`}
        >
          <div className="flex gap-2">
            {submitStatus === "success" ? <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" /> : null}
            <p aria-hidden="true">{message}</p>
          </div>
          {(submitStatus === "success" || submitStatus === "error") && whatsappUrl ? (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex min-h-11 items-center gap-2 rounded-md bg-gold px-4 py-2 font-semibold text-navy shadow-[0_12px_28px_rgba(198,162,88,0.25)] transition hover:bg-gold-light"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Escribir por WhatsApp
            </a>
          ) : null}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={submitStatus === "sending"}
        className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-gold px-5 py-3 text-base font-semibold text-navy shadow-[0_14px_35px_rgba(198,162,88,0.3)] transition hover:-translate-y-0.5 hover:bg-gold-light hover:shadow-[0_18px_40px_rgba(198,162,88,0.38)] disabled:cursor-not-allowed disabled:translate-y-0 disabled:opacity-70"
      >
        {submitStatus === "sending" ? "Enviando..." : "Solicitar visita técnica"}
        <ArrowRight className="h-5 w-5" aria-hidden="true" />
      </button>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: keyof FormValues;
  value: string;
  placeholder?: string;
  autoComplete?: string;
  inputMode?: "text" | "tel";
  required?: boolean;
  onChange: (name: keyof FormValues, value: string) => void;
};

function Field({ label, name, value, placeholder, autoComplete, inputMode = "text", required, onChange }: FieldProps) {
  return (
    <div className="grid min-w-0 gap-2">
      <label htmlFor={name} className="text-sm font-semibold text-ink">
        {label}
        {required ? (
          <span className="text-gold-ink" aria-hidden="true">
            {" "}
            *
          </span>
        ) : null}
      </label>
      <input
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
        required={required}
        onChange={(event) => onChange(name, event.target.value)}
        className="min-h-12 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-base font-normal text-ink outline-none transition hover:border-slate-400 focus:border-gold focus:ring-4 focus:ring-gold/10"
      />
    </div>
  );
}

type SelectProps = {
  label: string;
  name: keyof FormValues;
  value: string;
  options: readonly string[];
  required?: boolean;
  onChange: (name: keyof FormValues, value: string) => void;
};

function Select({ label, name, value, options, required, onChange }: SelectProps) {
  return (
    <div className="grid min-w-0 gap-2">
      <label htmlFor={name} className="text-sm font-semibold text-ink">
        {label}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        value={value}
        onChange={(event) => onChange(name, event.target.value)}
        className="min-h-12 w-full min-w-0 rounded-md border border-slate-300 bg-white px-4 py-3 text-base font-normal text-ink outline-none transition hover:border-slate-400 focus:border-gold focus:ring-4 focus:ring-gold/10"
      >
        <option value="" disabled>
          Seleccionar
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
