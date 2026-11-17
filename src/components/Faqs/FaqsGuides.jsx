"use client";

import React from "react";
import Link from "next/link";

const guides = [
  {
    id: 1,
    title: "Comment préparer votre consultation",
    description:
      "Questions à poser, documents à apporter et suivi : tout pour profiter pleinement de votre rendez-vous.",
    image: "https://plus.unsplash.com/premium_photo-1702599160474-22e21180b230?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "/appointments",
  },
  {
    id: 2,
    title: "Comprendre vos frais de consultation",
    description:
      "Un guide simple pour comprendre les tarifs, les ordonnances et les modalités de paiement.",
    image: "https://media.istockphoto.com/id/2087258763/photo/from-above-photo-of-a-senior-man-using-a-laptop-computer-and-paying-bills-with-serious-nurse.webp?a=1&b=1&s=612x612&w=0&k=20&c=s9yet_GxWR9LrvAqVkGmgHB768E7lc9iwNt72EzGbzY=",
    url: "/patient-info",
  },
  {
    id: 3,
    title: "Mieux vivre avec une maladie chronique",
    description:
      "Des conseils pratiques pour gérer au quotidien une maladie de longue durée.",
    image: "https://media.istockphoto.com/id/2203057449/photo/man-with-pills-organizer.webp?a=1&b=1&s=612x612&w=0&k=20&c=02ypi4T2P5BwnF_GoLV9uz5Hc5zhCYfZH-bejreEMDA=",
    url: "/services",
  },
  {
    id: 4,
    title: "Les bases d’une bonne alimentation",
    description:
      "Des repères simples pour une alimentation équilibrée et un mode de vie sain.",
    image: "https://images.unsplash.com/photo-1590779033823-2aa50ccf7292?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TnV0cml0aW9uJTIwYW5kJTIwV2VsbG5lc3MlMjBCYXNpY3N8ZW58MHx8MHx8fDA%3D",
    url: "/blog",
  },
];

export default function FaqsGuides() {
  return (
    <section
      aria-label="Guides pratiques"
      className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20 py-16 bg-white rounded-xl shadow-md"
    >
      <h2 className="text-3xl font-extrabold text-blue-700 mb-12 text-center select-text">
        <span className="text-black">Guides</span> pratiques
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {guides.map(({ id, title, description, image, url }) => (
          <Link
            key={id}
            href={url}
            className="block rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 truncate" title={title}>
                {title}
              </h3>
              <p className="text-gray-700 font-light leading-relaxed text-sm line-clamp-4">
                {description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
