import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1
};

export const metadata: Metadata = {
  metadataBase: new URL("https://arkanova.cl"),
  title: {
    default: "Arkanova | Electricidad y remodelación integral en Santiago y RM",
    template: "%s | Arkanova"
  },
  description:
    "Expertos en electricidad y remodelación integral para casas, departamentos y oficinas en Santiago y Región Metropolitana. Agenda tu visita técnica con Arkanova.",
  keywords: [
    "Arkanova",
    "Remodelación integral en Santiago",
    "Electricidad en Santiago",
    "Electricista en Santiago y RM",
    "Remodelación de casas",
    "Remodelación de departamentos",
    "Remodelación de oficinas",
    "Visita técnica",
    "Arkanova remodelación integral"
  ],
  openGraph: {
    title: "Arkanova | Electricidad y remodelación integral en Santiago y RM",
    description:
      "Agenda una visita técnica para trabajos de electricidad y remodelación integral en casas, departamentos y oficinas.",
    type: "website",
    siteName: "Arkanova",
    locale: "es_CL",
    images: [{ url: "/images/arkanova-hero.png", width: 1744, height: 902, alt: "Equipo Arkanova en obra de remodelación" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Arkanova | Electricidad y remodelación integral en Santiago y RM",
    description: "Agenda una visita técnica con Arkanova para trabajos de electricidad y remodelación en Santiago y RM."
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-CL">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
