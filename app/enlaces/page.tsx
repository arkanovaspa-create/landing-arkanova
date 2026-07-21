import type { Metadata } from "next";
import { EnlacesLinks } from "@/components/EnlacesLinks";

export const metadata: Metadata = {
  title: "Enlaces",
  description: "Todos los enlaces de contacto de Arkanova en un solo lugar.",
  robots: {
    index: false,
    follow: false
  }
};

export default function EnlacesPage() {
  return <EnlacesLinks />;
}
