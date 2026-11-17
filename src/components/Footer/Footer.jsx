"use client";

import React from "react";
import Link from "next/link";
import { useSiteConfig } from "../SiteConfigProvider";
import { whatsappUrl } from "@/lib/siteConfig";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        <AboutSection />
        <QuickLinks />
        <ContactDetails />
        <SocialMedia />
      </div>

      <FooterBottom />
    </footer>
  );
}

// Présentation du cabinet
function AboutSection() {
  const site = useSiteConfig();
  return (
    <div>
      <h3 className="text-white text-base font-semibold mb-2 tracking-wide">
        {site.clinic}
      </h3>
      <p className="text-gray-400 leading-snug text-[12px] sm:text-xs">
        Cabinet médical à {site.city} : oto-rhino-laryngologie, chirurgie
        cervico-faciale et médecine générale. Ouvert 7j/7 de 08h00 à 18h00,
        avec parking privé sécurisé et salle d’allaitement.
      </p>
    </div>
  );
}

// Liens de navigation rapide
function QuickLinks() {
  const links = [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/about" },
    { label: "Spécialités", href: "/services" },
    { label: "Rendez-vous", href: "/appointments" },
    { label: "Informations patients", href: "/patient-info" },
    { label: "Urgences", href: "/emergency" },
    { label: "Notre équipe", href: "/ourteam" },
    { label: "Témoignages", href: "/testimonials" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faqs" },
    { label: "Espace patient", href: "/dashboard" },
    { label: "Politique de confidentialité", href: "/privacy-policy" },
    { label: "Conditions générales", href: "/terms&conditions" },
  ];

  return (
    <div>
      <h3 className="text-white text-base font-semibold mb-2 tracking-wide">
        Liens rapides
      </h3>

      <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-[12px] sm:text-xs">
        {links.map(({ label, href }) => (
          <li key={label}>
            <Link
              href={href}
              className="block hover:text-blue-500 transition-colors duration-200 whitespace-nowrap"
              aria-label={`Aller à la page ${label}`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Coordonnées du cabinet
function ContactDetails() {
  const site = useSiteConfig();
  return (
    <div>
      <h3 className="text-white text-base font-semibold mb-2 tracking-wide">
        Nonus contacter
      </h3>

      <address className="not-italic space-y-1 text-gray-400 text-[12px] sm:text-xs leading-tight">
        <p>{site.address}</p>
        <p>
          Téléphone :{" "}
          <a
            href={`tel:${site.phoneRaw}`}
            className="hover:text-blue-500 transition-colors duration-200 whitespace-nowrap"
            aria-label={`Appeler ${site.clinic}`}
          >
            {site.phone}
          </a>
        </p>
        <p>
          WhatsApp :{" "}
          <a
            href={whatsappUrl(site, `Bonjour ${site.clinic}, je souhaite prendre rendez-vous.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors duration-200 whitespace-nowrap"
          >
            Écrire au cabinet
          </a>
        </p>
        <p>
          E-mail :{" "}
          <a
            href={`mailto:${site.email}`}
            className="hover:text-blue-500 transition-colors duration-200 whitespace-nowrap"
            aria-label={`Envoyer un e-mail à ${site.clinic}`}
          >
            {site.email}
          </a>
        </p>
        <p>Horaires : {site.hours}</p>
      </address>
    </div>
  );
}

// Réseaux sociaux
function SocialMedia() {
  const site = useSiteConfig();
  return (
    <div>
      <h3 className="text-white text-base font-semibold mb-2 tracking-wide">
        Suivez-nous
      </h3>

      <div className="flex space-x-5 text-gray-400">
        <SocialIcon
          href="#"
          label="Facebook"
          hoverColor="hover:text-blue-600"
          svgPath="M22.675 0h-21.35C.595 0 0 .592 0 1.324v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.675V1.324C24 .592 23.406 0 22.675 0z"
        />

        <SocialIcon
          href="#"
          label="Twitter / X"
          hoverColor="hover:text-sky-400"
          svgPath="M23.954 4.569c-.885.389-1.83.654-2.825.775a4.932 4.932 0 002.163-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 00-8.384 4.482A13.944 13.944 0 011.671 3.149a4.822 4.822 0 001.523 6.574c-.806-.025-1.566-.247-2.229-.616v.061a4.916 4.916 0 003.946 4.817 4.996 4.996 0 01-2.224.084 4.919 4.919 0 004.588 3.417A9.867 9.867 0 010 19.54a13.94 13.94 0 007.548 2.209c9.057 0 14.01-7.513 14.01-14.01 0-.213-.004-.425-.014-.636A10.012 10.012 0 0024 4.59z"
        />

        <SocialIcon
          href="#"
          label="LinkedIn"
          hoverColor="hover:text-blue-700"
          svgPath="M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.355V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.6 0 4.267 2.37 4.267 5.456v6.285zM5.337 7.433a2.07 2.07 0 11-.001-4.14 2.07 2.07 0 010 4.14zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.543C0 23.227.792 24 1.771 24h20.451c.98 0 1.778-.773 1.778-1.728V1.73C24 .774 23.204 0 22.225 0z"
        />

        <a
          href={whatsappUrl(site, `Bonjour ${site.clinic}, je souhaite prendre rendez-vous.`)}
          aria-label="WhatsApp du cabinet"
          className="hover:text-green-400 transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </div>
    </div>
  );
}

function SocialIcon({ href, label, hoverColor, svgPath }) {
  return (
    <a
      href={href}
      aria-label={label}
      className={`${hoverColor} transition-colors duration-200`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d={svgPath} />
      </svg>
    </a>
  );
}

// Barre de copyright
function FooterBottom() {
  const site = useSiteConfig();
  return (
    <div className="border-t border-gray-700 mt-8 py-4 text-center text-gray-500 text-xs sm:text-sm select-none">
      &copy; {new Date().getFullYear()} {site.clinic} — {site.city}, {site.country}. Tous droits réservés.
    </div>
  );
}

export default Footer;
