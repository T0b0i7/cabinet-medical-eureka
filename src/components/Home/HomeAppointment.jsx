"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaWhatsapp, FaCheckCircle } from "react-icons/fa";
import { useSiteConfig } from "../SiteConfigProvider";
import {
  SPECIALTIES,
  TIME_SLOTS,
  appointmentMessage,
  whatsappUrl,
} from "@/lib/siteConfig";

const containerMotion = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const fadeUpMotion = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.6 } },
};

const buttonMotion = {
  rest: { scale: 1 },
  hover: { scale: 1.03 },
  tap: { scale: 0.97 },
};

const EMPTY_FORM = {
  name: "",
  phone: "",
  specialty: "",
  date: "",
  time: "",
  message: "",
};

export default function HomeAppointment() {
  const site = useSiteConfig();
  const animationControls = useAnimation();
  const sectionRef = useRef(null);

  const [formData, setFormData] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [isEnvoyerting, setIsEnvoyerting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [sentMessage, setSentMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Déclenche l’animation lorsque la section devient visible
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animationControls.start("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [animationControls]);

  function validateForm() {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Votre nom complet est requis";

    if (!formData.phone.trim()) {
      newErrors.phone = "Votre numéro de téléphone est requis";
    } else if (!/^\+?[\d\s-]{8,20}$/.test(formData.phone.trim())) {
      newErrors.phone = "Numéro de téléphone invalide";
    }

    if (!formData.specialty) {
      newErrors.specialty = "Veuillez choisir une spécialité";
    }

    if (!formData.date) {
      newErrors.date = "La date est requise";
    } else if (new Date(formData.date) < new Date(new Date().toDateString())) {
      newErrors.date = "La date ne peut pas être dans le passé";
    }

    if (!formData.time) newErrors.time = "Veuillez choisir un créneau";

    return newErrors;
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setErrorMessage("");
    setSuccessMessage(false);
  }

  async function handleEnvoyer(e) {
    e.preventDefault();

    setErrorMessage("");
    setSuccessMessage(false);

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsEnvoyerting(true);

    try {
      const message = appointmentMessage(site, formData);
      window.open(whatsappUrl(site, message), "_blank", "noopener,noreferrer");
      setSentMessage(message);
      await new Promise((res) => setTimeout(res, 800));

      setSuccessMessage(true);
      setFormData(EMPTY_FORM);
    } catch {
      setErrorMessage(
        "Une erreur est survenue. Veuillez réessayer ou nous contacter par téléphone."
      );
    } finally {
      setIsEnvoyerting(false);
    }
  }

  const recapMessage = appointmentMessage(site, formData);
  const lastSentMessage = sentMessage || recapMessage;

  return (
    <section
      ref={sectionRef}
      aria-labelledby="appointment-title"
      className="bg-white py-16 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto"
    >
      <motion.div
        className="max-w-xl mx-auto"
        variants={containerMotion}
        initial="hidden"
        animate={animationControls}
      >
        <motion.h2
          id="appointment-title"
          className="text-3xl font-extrabold text-gray-900 mb-4 text-center"
          variants={fadeUpMotion}
        >
          Prendre <span className="text-blue-700">rendez-vous</span>
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 max-w-xl mx-auto mb-12"
          variants={fadeUpMotion}
        >
          Choisissez votre spécialité et votre créneau : votre demande sera
          envoyée directement au {site.clinic} par WhatsApp.
        </motion.p>

        {successMessage && (
          <motion.div
            role="alert"
            className="mb-6 max-w-xl mx-auto bg-green-100 border border-green-400 text-green-700 px-4 py-4 rounded-md text-center font-semibold"
            variants={fadeUpMotion}
          >
            <span className="flex items-center justify-center gap-2 mb-2">
              <FaCheckCircle aria-hidden="true" /> Votre demande a été préparée !
            </span>
            <a
              href={whatsappUrl(site, lastSentMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-2 text-white hover:bg-green-700"
            >
              <FaWhatsapp aria-hidden="true" /> Renvoyer sur WhatsApp
            </a>
          </motion.div>
        )}

        {errorMessage && (
          <motion.div
            role="alert"
            className="mb-8 max-w-xl mx-auto bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md text-center font-semibold"
            variants={fadeUpMotion}
          >
            {errorMessage}
          </motion.div>
        )}

        <motion.form
          onEnvoyer={handleEnvoyer}
          noValidate
          className="grid grid-cols-1 gap-6 sm:grid-cols-2"
          variants={containerMotion}
        >
          {/* Nom complet */}
          <motion.div className="sm:col-span-2" variants={fadeUpMotion}>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nom complet <span className="text-red-600">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              disabled={isEnvoyerting}
              placeholder="Ex. : Adjovi Sossou"
              required
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              className={`block w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.name ? "border-red-500 focus:ring-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p id="name-error" role="alert" className="mt-1 text-red-600 text-sm">
                {errors.name}
              </p>
            )}
          </motion.div>

          {/* Téléphone */}
          <motion.div className="sm:col-span-2" variants={fadeUpMotion}>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Téléphone / WhatsApp <span className="text-red-600">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              disabled={isEnvoyerting}
              placeholder="+229 01 00 00 00 00"
              required
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              className={`block w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.phone ? "border-red-500 focus:ring-red-500" : "border-gray-300"
              }`}
            />
            {errors.phone && (
              <p id="phone-error" role="alert" className="mt-1 text-red-600 text-sm">
                {errors.phone}
              </p>
            )}
          </motion.div>

          {/* Spécialité */}
          <motion.div className="sm:col-span-2" variants={fadeUpMotion}>
            <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 mb-1">
              Spécialité <span className="text-red-600">*</span>
            </label>
            <select
              id="specialty"
              name="specialty"
              value={formData.specialty}
              onChange={handleChange}
              disabled={isEnvoyerting}
              required
              aria-invalid={!!errors.specialty}
              aria-describedby={errors.specialty ? "specialty-error" : undefined}
              className={`block w-full rounded-md border bg-white px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.specialty ? "border-red-500 focus:ring-red-500" : "border-gray-300"
              }`}
            >
              <option value="" disabled>
                Choisir une spécialité
              </option>
              {SPECIALTIES.map((s) => (
                <option key={s.id} value={s.label}>
                  {s.label} — {s.price}
                </option>
              ))}
            </select>
            {errors.specialty && (
              <p id="specialty-error" role="alert" className="mt-1 text-red-600 text-sm">
                {errors.specialty}
              </p>
            )}
          </motion.div>

          {/* Date */}
          <motion.div variants={fadeUpMotion}>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
              Date souhaitée <span className="text-red-600">*</span>
            </label>
            <input
              id="date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              disabled={isEnvoyerting}
              min={new Date().toISOString().split("T")[0]}
              required
              aria-invalid={!!errors.date}
              aria-describedby={errors.date ? "date-error" : undefined}
              className={`block w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.date ? "border-red-500 focus:ring-red-500" : "border-gray-300"
              }`}
            />
            {errors.date && (
              <p id="date-error" role="alert" className="mt-1 text-red-600 text-sm">
                {errors.date}
              </p>
            )}
          </motion.div>

          {/* Créneau */}
          <motion.div variants={fadeUpMotion}>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
              Créneau horaire <span className="text-red-600">*</span>
            </label>
            <select
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              disabled={isEnvoyerting}
              required
              aria-invalid={!!errors.time}
              aria-describedby={errors.time ? "time-error" : undefined}
              className={`block w-full rounded-md border bg-white px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.time ? "border-red-500 focus:ring-red-500" : "border-gray-300"
              }`}
            >
              <option value="" disabled>
                Choisir un créneau
              </option>
              {TIME_SLOTS.map((slot) => (
                <option key={slot} value={slot}>
                  {slot.replace(":", "h")}
                </option>
              ))}
            </select>
            {errors.time && (
              <p id="time-error" role="alert" className="mt-1 text-red-600 text-sm">
                {errors.time}
              </p>
            )}
            <p className="text-xs text-gray-500 mt-1">
              Créneaux disponibles de 08h00 à 18h00, 7j/7.
            </p>
          </motion.div>

          {/* Motif */}
          <motion.div className="sm:col-span-2" variants={fadeUpMotion}>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Motif de consultation (facultatif)
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              disabled={isEnvoyerting}
              placeholder="Décrivez brièvement vos symptômes ou votre demande…"
              className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </motion.div>

          {/* Bouton d’envoi */}
          <motion.div
            className="sm:col-span-2"
            variants={fadeUpMotion}
            initial="rest"
            animate="rest"
            whileHover="hover"
            whileTap="tap"
          >
            <motion.button
              type="submit"
              disabled={isEnvoyerting}
              className="w-full inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition-colors"
              variants={buttonMotion}
            >
              {isEnvoyerting ? (
                "Envoi en cours…"
              ) : (
                <>
                  <FaWhatsapp className="w-5 h-5" aria-hidden="true" />
                  Confirmer et envoyer sur WhatsApp
                </>
              )}
            </motion.button>
            <p className="mt-3 text-center text-xs text-gray-500">
              Ou appelez le{" "}
              <a href={`tel:${site.phoneRaw}`} className="font-semibold text-blue-700">
                {site.phone}
              </a>{" "}
              — {site.hours}.
            </p>
          </motion.div>
        </motion.form>
      </motion.div>
    </section>
  );
}
