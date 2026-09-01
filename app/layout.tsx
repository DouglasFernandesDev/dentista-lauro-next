import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, IBM_Plex_Mono, Inter } from "next/font/google";

import { buildStructuredData, siteConfig } from "@/lib/site-config";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Odontologia Estética | Facetas em Resina`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "facetas em resina composta",
    "odontologia estética",
    "dentista Araruama",
    "lentes de resina",
    "sorriso natural",
    "Dr. Lauro Santos",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Odontologia Estética`,
    description: siteConfig.description,
    images: [
      {
        url: "/imagens/capa.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — facetas em resina composta`,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#071b33",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${cormorant.variable} ${ibmPlexMono.variable}`}
    >
      <body className="flex min-h-dvh flex-col bg-background">
        <a href="#conteudo" className="skip-link">
          Pular para o conteúdo
        </a>
        {children}
        <script
          type="application/ld+json"
          // JSON-LD estático e confiável (sem entrada de usuário).
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildStructuredData()) }}
        />
      </body>
    </html>
  );
}
