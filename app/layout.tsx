import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://copinho-estetica-automotiva.cainanbastos468.chatgpt.site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  title: "Copinho Estética Automotiva | Lavagem e Estética em Lorena - SP",
  description: "Estética automotiva em Lorena-SP. Lavagem de carros, lavagem completa de moto com cera, cristalização e higienização de bancos. Fale pelo WhatsApp e consulte a disponibilidade.",
  keywords: ["estética automotiva Lorena", "lavagem de carro Lorena", "lavagem de moto Lorena", "higienização automotiva", "cristalização automotiva", "Copinho Estética Automotiva"],
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Copinho Estética Automotiva | Lorena - SP",
    description: "Cuidado profissional, produtos de alta performance e atenção aos detalhes para o seu veículo.",
    type: "website",
    locale: "pt_BR",
    siteName: "Copinho Estética Automotiva",
    url: siteUrl,
    images: [{ url: "/capa-premium.webp", width: 1200, height: 630, alt: "Copinho Estética Automotiva" }],
  },
  twitter: { card: "summary_large_image", title: "Copinho Estética Automotiva | Lorena - SP", description: "Estética automotiva e cuidado profissional para o seu veículo.", images: ["/capa-premium.webp"] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <html lang="pt-BR"><head><link rel="preload" href="/hero-v5.webp" as="image" type="image/webp" /></head><body>{children}</body></html>;
}
