import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@/components/Analytics";
import { INSTAGRAM_URL, WHATSAPP_NUMBER, projectTypes } from "@/lib/constants";

const coverageZones = ["Providencia", "Bilbao", "Cerro Colorado", "Pudahuel"];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["ElectricalContractor", "GeneralContractor"],
  name: "Arkanova",
  url: "https://www.arkanovaspa.cl",
  image: "https://www.arkanovaspa.cl/images/logo-completo-sobre-navy.png",
  telephone: `+${WHATSAPP_NUMBER}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Santiago",
    addressRegion: "Región Metropolitana",
    addressCountry: "CL"
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Región Metropolitana de Santiago" },
    ...coverageZones.map((zone) => ({ "@type": "Place", name: zone }))
  ],
  sameAs: [INSTAGRAM_URL],
  makesOffer: projectTypes
    .filter((service) => service !== "Otro")
    .map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service
      }
    }))
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap"
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap"
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0D1733"
};

export const metadata: Metadata = {
  metadataBase: new URL("https://arkanovaspa.cl"),
  title: {
    default: "Arkanova | Instalaciones Eléctricas y Remodelaciones",
    template: "%s | Arkanova"
  },
  description:
    "Arkanova: instalaciones eléctricas con certificación TE1/SEC, remodelaciones y mantenciones en Santiago y la Región Metropolitana. Agenda tu visita técnica.",
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
    "Normalización eléctrica TE1 SEC",
    "Visita técnica"
  ],
  alternates: {
    canonical: "https://www.arkanovaspa.cl"
  },
  icons: {
    icon: "/images/favicon.ico",
    apple: "/images/icono-apple-touch-180.png"
  },
  openGraph: {
    title: "Arkanova | Instalaciones Eléctricas y Remodelaciones",
    description:
      "Instalaciones eléctricas con certificación TE1/SEC, remodelaciones y mantenciones en Santiago y la Región Metropolitana. Agenda tu visita técnica.",
    type: "website",
    url: "https://www.arkanovaspa.cl",
    siteName: "Arkanova",
    locale: "es_CL",
    images: [{ url: "/images/logo-completo-sobre-navy.png", width: 2000, height: 1620, alt: "Arkanova SpA" }]
  },
  twitter: {
    card: "summary",
    title: "Arkanova | Instalaciones Eléctricas y Remodelaciones",
    description: "Electricidad con certificación TE1/SEC, remodelaciones y mantenciones en Santiago y la Región Metropolitana.",
    images: ["/images/logo-completo-sobre-navy.png"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-CL" className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
