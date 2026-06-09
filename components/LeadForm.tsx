"use client";

import type { FormEvent } from "react";
import { useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { projectTypes } from "@/lib/constants";
import { buildLeadWhatsappMessage, buildWhatsappUrl } from "@/lib/whatsapp";

type FormValues = {
  name: string;
  phone: string;
  commune: string;
  project_type: string;
  description: string;
};

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
  const [submitted, setSubmitted] = useState(false);

  const whatsappUrl = useMemo(() => {
    if (!submitted) {
      return "";
    }

    return buildWhatsappUrl(
      buildLeadWhatsappMessage({
        name: values.name,
        phone: values.phone,
        commune: values.commune,
        projectType: values.project_type,
        description: values.description
      })
    );
  }, [submitted, values]);

  function updateValue(name: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [name]: value }));
    setSubmitted(false);
    setMessage("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const requiredValues = [values.name, values.phone, values.commune, values.project_type];
    const hasMissingField = requiredValues.some((value) => !value.trim());

    if (hasMissingField) {
      setSubmitted(false);
      setMessage("Completa los campos obligatorios antes de enviar.");
      return;
    }

    if (values.phone.replace(/\D/g, "").length < 8) {
      setSubmitted(false);
      setMessage("Ingresa un teléfono válido para poder contactarte.");
      return;
    }

    setSubmitted(true);
    setMessage("Listo. Dejamos el mensaje preparado para agendar la visita técnica por WhatsApp.");
  }

  return (
    <form onSubmit={handleSubmit} className="grid min-w-0 gap-4 overflow-hidden rounded-lg border border-slate-200 bg-white p-4 shadow-soft ring-1 ring-white sm:p-6">
      <div>
        <p className="text-sm font-semibold uppercase text-gold">Contacto rápido</p>
        <h3 className="mt-2 text-2xl font-semibold text-ink">Agenda una visita técnica</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Cuéntanos qué necesitas y coordinamos una visita técnica o revisión inicial por WhatsApp.
        </p>
      </div>

      <div className="grid min-w-0 gap-4 sm:grid-cols-2">
        <Field label="Nombre" name="name" value={values.name} placeholder="Tu nombre" autoComplete="name" required onChange={updateValue} />
        <Field label="WhatsApp" name="phone" value={values.phone} placeholder="+56 9 1234 5678" autoComplete="tel" inputMode="tel" required onChange={updateValue} />
        <Field label="Comuna" name="commune" value={values.commune} placeholder="Santiago, Ñuñoa, Maipú..." required onChange={updateValue} />
        <Select label="Tipo de trabajo" name="project_type" value={values.project_type} options={projectTypes} required onChange={updateValue} />
      </div>

      <div className="grid gap-2">
        <label htmlFor="description" className="text-sm font-semibold text-ink">
          Descripción breve
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          value={values.description}
          onChange={(event) => updateValue("description", event.target.value)}
          placeholder="Ej: revisar tablero eléctrico, remodelar cocina, mejorar terminaciones, habilitar oficina..."
          className="min-h-32 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-base font-normal text-ink outline-none transition focus:border-turquoise focus:ring-4 focus:ring-turquoise/10"
        />
      </div>

      {message ? (
        <div
          className={`rounded-md border px-4 py-3 text-sm ${
            submitted ? "border-turquoise/30 bg-turquoise/10 text-ink" : "border-red-200 bg-red-50 text-red-800"
          }`}
          role="status"
        >
          <div className="flex gap-2">
            {submitted ? <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" /> : null}
            <p>{message}</p>
          </div>
          {submitted && whatsappUrl ? (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex min-h-11 items-center gap-2 rounded-md bg-gold px-4 py-2 font-semibold text-white shadow-[0_12px_28px_rgba(253,135,28,0.2)] transition hover:bg-orange/90"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Abrir WhatsApp
            </a>
          ) : null}
        </div>
      ) : null}

      <button
        type="submit"
        className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-gold px-5 py-3 text-base font-semibold text-white shadow-[0_14px_35px_rgba(253,135,28,0.24)] transition hover:bg-orange/90"
      >
        Agendar visita técnica
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
        className="min-h-12 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-base font-normal text-ink outline-none transition focus:border-turquoise focus:ring-4 focus:ring-turquoise/10"
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
        className="min-h-12 w-full min-w-0 rounded-md border border-slate-300 bg-white px-4 py-3 text-base font-normal text-ink outline-none transition focus:border-turquoise focus:ring-4 focus:ring-turquoise/10"
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
