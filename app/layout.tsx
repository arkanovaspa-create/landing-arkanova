import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1
};

export const metadata: Metadata = {
  metadataBase: new URL("https://arkanovaspa.cl"),
  title: {
    default: "Arkanova | Electricidad y Remodelaciones en Santiago",
    template: "%s | Arkanova"
  },
  description:
    "Servicios de electricidad, remodelaciones y mantenciones para casas, departamentos, oficinas y locales comerciales en Santiago y Región Metropolitana.",
  keywords: [
    "Arkanova",
    "Arkanova SPA",
    "Electricidad en Santiago",
    "Electricista en Santiago y RM",
    "Remodelaciones en Santiago",
    "Remodelación de casas",
    "Remodelación de departamentos",
    "Remodelación de oficinas",
    "Mantenciones en Santiago",
    "Visita técnica"
  ],
  alternates: {
    canonical: "https://www.arkanovaspa.cl"
  },
  openGraph: {
    title: "Arkanova | Electricidad y Remodelaciones en Santiago",
    description:
      "Agenda una visita técnica para trabajos de electricidad, remodelación y mantención en Santiago y Región Metropolitana.",
    type: "website",
    url: "https://www.arkanovaspa.cl",
    siteName: "Arkanova",
    locale: "es_CL",
    images: [{ url: "/images/logo-arkanova.png", width: 674, height: 575, alt: "Logo Arka Nova" }]
  },
  twitter: {
    card: "summary",
    title: "Arkanova | Electricidad y Remodelaciones en Santiago",
    description: "Electricidad, remodelaciones y mantenciones para casas, departamentos, oficinas y locales en Santiago y RM."
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-CL">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
