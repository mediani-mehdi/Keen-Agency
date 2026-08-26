import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Keen Agency — L'Identité, la Visibilité & l'Influence de votre Marque",
  description:
    "Keen Agency transforme chaque vision en une stratégie digitale créative et percutante. Nous construisons l'identité, la visibilité et l'influence de votre marque à travers le Branding, le Marketing Digital, la Création de Contenu et le Développement Web.",
  keywords: [
    "Keen Agency",
    "Keen Agency Digital",
    "Agence Digitale Maroc",
    "Branding & Design",
    "Marketing Digital",
    "Création de Contenu",
    "Développement Web",
    "Stratégie & Conseil",
  ],
  authors: [{ name: "Keen Agency" }],
  openGraph: {
    title: "Keen Agency — Votre Vision, Notre Mission",
    description:
      "Nous bâtissons l'identité, la visibilité et l'influence de votre marque avec une approche créative, flexible et orientée résultats.",
    type: "website",
    locale: "fr_FR",
  },
  icons: {
    icon: [
      { url: "/icon.png" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${poppins.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-900 selection:bg-[#0066FF] selection:text-white">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
