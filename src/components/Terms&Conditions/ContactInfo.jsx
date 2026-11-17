'use client'
import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <section
      aria-labelledby="contact-info-heading"
      className="max-w-5xl mx-auto px-6 sm:px-12 lg:px-20 py-16 bg-white rounded-lg shadow-md"
    >
      <h2
        id="contact-info-heading"
        className="mb-10 select-text text-3xl sm:text-4xl font-bold text-gray-900"
      >
        Coordonnées
      </h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 gap-10 sm:grid-cols-2 text-gray-700 text-lg sm:text-xl font-light">
        <div className="flex items-start gap-4">
          <FaMapMarkerAlt
            className="mt-1 flex-shrink-0 w-6 h-6 text-blue-600"
            aria-hidden="true"
          />
          <address className="not-italic leading-relaxed">
            Porto-Novo,
            <br />
            Bénin
            <br />
            Bénin
          </address>
        </div>

        <div className="flex items-center gap-4">
          <FaPhoneAlt className="w-6 h-6 text-blue-600" aria-hidden="true" />
          <a
            href="tel:+31201234567"
            className="rounded focus:outline-none focus:ring-2 focus:ring-blue-400 hover:underline"
          >
            +31 20 123 4567
          </a>
        </div>

        <div className="flex items-center gap-4">
          <FaEnvelope className="w-6 h-6 text-blue-600" aria-hidden="true" />
          <a
            href="mailto:contact@cabinet-eureka.bj"
            className="rounded focus:outline-none focus:ring-2 focus:ring-blue-400 hover:underline"
          >
            contact@cabinet-eureka.bj
          </a>
        </div>

        <div className="flex items-center gap-4">
          <FaClock className="w-6 h-6 text-blue-600" aria-hidden="true" />
          <p>
            Ouvert 7j/7 : 08h00 – 18h00
            <br />
            Sam – Dim : sur rendez-vous
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
