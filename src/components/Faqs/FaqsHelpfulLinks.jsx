"use client";

import React from "react";
import Link from "next/link";
import { FaExternalLinkAlt, FaBook, FaInfoCircle, FaPhoneAlt } from "react-icons/fa";

const helpfulLinks = [
  {
    id: 1,
    icon: <FaBook className="w-5 h-5 text-blue-700" />,
    title: "Guides santé",
    url: "/blog",
    description: "Des guides détaillés pour prendre soin de votre santé.",
  },
  {
    id: 2,
    icon: <FaInfoCircle className="w-5 h-5 text-blue-700" />,
    title: "Confidentialité",
    url: "/privacy-policy",
    description: "En savoir plus sur nos politiques et la protection de vos données.",
  },
  {
    id: 3,
    icon: <FaPhoneAlt className="w-5 h-5 text-blue-700" />,
    title: "Contacter le cabinet",
    url: "/contactus",
    description: "Contactez notre équipe pour toute assistance.",
  },
  {
    id: 4,
    icon: <FaExternalLinkAlt className="w-5 h-5 text-blue-700" />,
    title: "Ressources externes",
    url: "/faqs",
    description: "Accédez à des ressources et outils de santé sélectionnés.",
  },
];

export default function FaqsHelpfulLinks() {
  return (
    <section
      aria-label="Helpful FAQ links"
      className="max-w-5xl mx-auto px-6 sm:px-12 lg:px-20 py-12 bg-white rounded-xl shadow-md"
    >
      <h2 className="text-2xl font-extrabold text-blue-700 mb-8 text-center select-text">
        Liens et ressources utiles
      </h2>

      <ul className="space-y-6">
        {helpfulLinks.map(({ id, icon, title, url, description }) => (
          <li key={id} className="group border border-gray-200 rounded-lg p-5 hover:shadow-lg transition-shadow cursor-pointer">
            <Link
              href={url}
              className="flex items-center space-x-4 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded"
            >
              <span className="flex-shrink-0">{icon}</span>
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                  {title}
                </span>
                <span className="text-gray-600 font-light text-sm leading-relaxed max-w-xl">
                  {description}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
