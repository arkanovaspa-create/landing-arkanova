import { WHATSAPP_NUMBER } from "./constants";

export function cleanPhone(phone: string) {
  return phone.replace(/[^\d+]/g, "");
}

export function normalizeChilePhone(phone: string) {
  const cleaned = cleanPhone(phone).replace(/^\+/, "");

  if (cleaned.startsWith("56")) {
    return cleaned;
  }

  if (cleaned.startsWith("9")) {
    return `56${cleaned}`;
  }

  return cleaned;
}

export function buildWhatsappUrl(message: string, phone = WHATSAPP_NUMBER) {
  const normalizedPhone = normalizeChilePhone(phone);
  return `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(message)}`;
}

export function buildLeadWhatsappMessage(params: {
  name: string;
  phone: string;
  commune: string;
  projectType: string;
  description: string;
}) {
  const detail = params.description.trim() || "Prefiero explicar el detalle por WhatsApp.";

  return [
    `Hola, quiero solicitar una visita técnica con Arkanova. Mi proyecto es: ${params.projectType}.`,
    `Nombre:\n${params.name}`,
    `Comuna:\n${params.commune}`,
    `Descripción:\n${detail}`,
    `Mi WhatsApp:\n${params.phone}`,
    "Vengo desde la landing de Arkanova."
  ].join("\n\n");
}
