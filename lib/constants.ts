export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "56937882951";
export const INSTAGRAM_URL = process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "https://www.instagram.com/arkanova_cl/";

export const projectTypes = [
  "Electricidad domiciliaria y comercial",
  "Remodelaciones integrales",
  "Mantenciones y reparaciones",
  "Oficinas, locales, casas y departamentos",
  "Normalización eléctrica y tableros",
  "Terminaciones interiores",
  "Otro"
] as const;
