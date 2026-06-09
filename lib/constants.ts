export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "56937882951";
export const INSTAGRAM_URL = process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "https://www.instagram.com/arkanova_cl/";

export const projectTypes = [
  "Remodelación integral",
  "Electricidad domiciliaria y comercial",
  "Mantención y reparaciones",
  "Terminaciones interiores",
  "Oficinas y espacios comerciales",
  "Evaluación técnica en terreno",
  "Otro"
] as const;
