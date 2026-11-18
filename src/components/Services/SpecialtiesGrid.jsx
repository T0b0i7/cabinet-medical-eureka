"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { SPECIALTIES } from "../../lib/siteConfig";

// Grille complète des spécialités et tarifs du cabinet.
export default function SpecialtiesGrid() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-blue-50 px-4 py-1 text-sm font-semibold text-blue-700">
            Nos spécialités
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Toutes les spécialités du cabinet
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Une prise en charge complète pour toute la famille. Les tarifs
            indiqués sont donnés à titre indicatif et peuvent varier selon
            l’acte réalisé.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SPECIALTIES.map((specialty, index) => (
            <motion.article
              key={specialty.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  {specialty.label}
                </h3>
                <FaCheckCircle
                  className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600"
                  aria-hidden="true"
                />
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">
                {specialty.description}
              </p>
              <p className="mt-4 inline-flex w-fit items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                {specialty.price}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
