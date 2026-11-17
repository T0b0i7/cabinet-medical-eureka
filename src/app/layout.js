import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "../components/Header/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import SmoothScrollInit from "../components/SmoothScrollInit.jsx";
import SiteConfigProvider from "../components/SiteConfigProvider.jsx";
import WhatsAppButton from "../components/WhatsAppButton.jsx";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cabinet Médical EURÊKA — Porto-Novo, Bénin",
  description:
    "Cabinet Médical EURÊKA à Porto-Novo : ORL, chirurgie cervico-faciale et médecine générale. Ouvert 7j/7 de 08h00 à 18h00. Prise de rendez-vous en ligne et par WhatsApp.",
  keywords: [
    "Cabinet Médical EURÊKA",
    "médecin Porto-Novo",
    "ORL Bénin",
    "chirurgie cervico-faciale",
    "médecine générale Porto-Novo",
    "rendez-vous médical Bénin",
  ],
  authors: [{ name: "Cabinet Médical EURÊKA" }],
  openGraph: {
    title: "Cabinet Médical EURÊKA — Porto-Novo",
    description:
      "ORL, chirurgie cervico-faciale et médecine générale à Porto-Novo. Ouvert 7j/7 de 08h00 à 18h00.",
    locale: "fr_BJ",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <SiteConfigProvider>
          <Navbar />

          {/* Initialisation du défilement fluide */}
          <SmoothScrollInit />

          <main className="flex-grow">{children}</main>

          <Footer />
          <WhatsAppButton />
        </SiteConfigProvider>
      </body>
    </html>
  );
}
