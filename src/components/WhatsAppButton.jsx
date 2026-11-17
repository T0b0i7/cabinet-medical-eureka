"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useSiteConfig } from "./SiteConfigProvider";
import { whatsappUrl } from "@/lib/siteConfig";

export default function WhatsAppButton() {
  const site = useSiteConfig();

  const message = `Bonjour ${site.clinic}, je souhaite avoir des informations et prendre rendez-vous.`;

  return (
    <a
      href={whatsappUrl(site, message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Contacter ${site.clinic} sur WhatsApp`}
      className="fixed bottom-6 right-5 z-40 flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-2xl transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300"
    >
      <FaWhatsapp className="h-7 w-7" aria-hidden="true" />
      <span className="hidden text-sm font-semibold sm:inline">WhatsApp</span>
    </a>
  );
}
