"use client";

import React from "react";

const emergencyContactsData = [
  {
    id: 1,
    name: "Adjovi Hounsou",
    relationship: "Conjoint(e)",
    phone: "+229 01 00 00 00 00",
    email: "adjovi.hounsou@example.bj",
  },
  {
    id: 2,
    name: "Isidore Aholou",
    relationship: "Frère",
    phone: "+229 01 97 12 45 67",
    email: "isidore.aholou@example.bj",
  },
  {
    id: 3,
    name: "Estelle Agossou",
    relationship: "Ami(e)",
    phone: "+229 01 95 33 21 08",
    email: "estelle.agossou@example.bj",
  },
];

// Single contact card component for reusability and clarity
function ContactCard({ name, relationship, phone, email }) {
  // Format phone for tel: link (strip non-digit except +)
  const telLink = `tel:${phone.replace(/[^\d+]/g, "")}`;

  return (
    <li
      className="border border-gray-300 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow"
      aria-label={`Contact d’urgence : ${name}, lien : ${relationship}`}
    >
      <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">Lien :</span> {relationship}
      </p>
      <p className="text-gray-700 mb-1">
        <span className="font-semibold">Téléphone:</span>{" "}
        <a
          href={telLink}
          className="text-blue-700 underline hover:text-blue-800"
        >
          {phone}
        </a>
      </p>
      <p className="text-gray-700">
        <span className="font-semibold">E-mail:</span>{" "}
        <a
          href={`mailto:${email}`}
          className="text-blue-700 underline hover:text-blue-800"
        >
          {email}
        </a>
      </p>
    </li>
  );
}

export default function PatientEmergencyContacts() {
  return (
    <section
      aria-labelledby="emergency-contacts-heading"
      className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md"
    >
      <h2
        id="emergency-contacts-heading"
        className="text-3xl font-extrabold text-blue-700 mb-6 text-center"
      >
        Contacts d’urgence
      </h2>

      <ul className="space-y-6">
        {emergencyContactsData.map((contact) => (
          <ContactCard key={contact.id} {...contact} />
        ))}
      </ul>
    </section>
  );
}
