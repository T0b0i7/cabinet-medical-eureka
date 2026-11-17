"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCheckCircle,
  FaClock,
  FaCalendarAlt,
  FaPhoneAlt,
  FaParking,
  FaBaby,
  FaWhatsapp,
} from "react-icons/fa";
import { useSiteConfig } from "../SiteConfigProvider";
import {
  SPECIALTIES,
  TIME_SLOTS,
  appointmentMessage,
  whatsappUrl,
} from "@/lib/siteConfig";

const FEATURES = [
  {
    icon: <FaCalendarAlt className="text-blue-600 w-6 h-6" />,
    title: "Ouvert 7j/7",
    description: "Du lundi au dimanche, de 08h00 à 18h00, sans interruption.",
  },
  {
    icon: <FaClock className="text-blue-600 w-6 h-6" />,
    title: "Rendez-vous rapides",
    description: "Prise de rendez-vous en ligne ou directement par WhatsApp.",
  },
  {
    icon: <FaParking className="text-blue-600 w-6 h-6" />,
    title: "Parking sécurisé",
    description: "Un parking privé et surveillé pour stationner sereinement.",
  },
  {
    icon: <FaBaby className="text-blue-600 w-6 h-6" />,
    title: "Salle d’allaitement",
    description: "Un espace dédié au confort des mamans et de leurs nourrissons.",
  },
];

const EMPTY_FORM = {
  name: "",
  phone: "",
  specialty: "",
  date: "",
  time: "",
  message: "",
};

export default function HomeHero() {
  const site = useSiteConfig();
  const modalRef = useRef(null);
  const firstInputRef = useRef(null);
  const lastFocusRef = useRef(null);

  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [formErrors, setFormErrors] = useState({});
  const [submitting, setEnvoyerting] = useState(false);
  const [submitSuccess, setEnvoyerSuccess] = useState(false);
  const [submitError, setEnvoyerError] = useState("");

  // Gestion du focus et du clavier dans la fenêtre modale
  useEffect(() => {
    if (!modalOpen) return;

    lastFocusRef.current = document.activeElement;
    setTimeout(() => firstInputRef.current?.focus(), 150);
    document.body.style.overflow = "hidden";

    const handleFocusTrap = (e) => {
      if (!modalRef.current?.contains(e.target)) {
        e.preventDefault();
        firstInputRef.current?.focus();
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
      if (e.key === "Tab") {
        const focusableEls = modalRef.current?.querySelectorAll(
          'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusableEls || focusableEls.length === 0) return;

        const first = focusableEls[0];
        const last = focusableEls[focusableEls.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("focus", handleFocusTrap, true);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("focus", handleFocusTrap, true);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      lastFocusRef.current?.focus();
    };
  }, [modalOpen]);

  function validate() {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Votre nom complet est requis";
    if (!formData.phone.trim()) {
      errors.phone = "Votre numéro de téléphone est requis";
    } else if (!/^\+?[\d\s-]{8,20}$/.test(formData.phone.trim())) {
      errors.phone = "Numéro de téléphone invalide";
    }
    if (!formData.specialty) errors.specialty = "Veuillez choisir une spécialité";
    if (!formData.date) errors.date = "Veuillez choisir une date";
    if (!formData.time) errors.time = "Veuillez choisir un créneau";
    return errors;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (formErrors[name]) {
      setFormErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
    setEnvoyerError("");
  };

  const handleEnvoyer = async (e) => {
    e.preventDefault();
    setFormErrors({});
    setEnvoyerError("");
    setEnvoyerSuccess(false);

    const errors = validate();
    if (Object.keys(errors).length) return setFormErrors(errors);

    setEnvoyerting(true);
    try {
      const message = appointmentMessage(site, formData);
      // Ouverture immédiate de WhatsApp avec le récapitulatif pré-rempli
      window.open(whatsappUrl(site, message), "_blank", "noopener,noreferrer");
      await new Promise((res) => setTimeout(res, 600));
      setEnvoyerSuccess(true);
    } catch {
      setEnvoyerError(
        "Une erreur est survenue. Veuillez réessayer ou nous appeler directement."
      );
    } finally {
      setEnvoyerting(false);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setFormErrors({});
    setEnvoyerError("");
    setEnvoyerSuccess(false);
    setFormData(EMPTY_FORM);
  };

  const heroTextVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
    }),
  };

  const heroImageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.4 } },
  };

  const featuresVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 1 + i * 0.25, duration: 0.6, ease: "easeOut" },
    }),
  };

  const modalBackdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const modalContentVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: 40, scale: 0.95, transition: { duration: 0.3 } },
  };

  return (
    <>
      {/* Section d’accueil */}
      <section
        aria-label="Accueil du cabinet médical"
        className="relative bg-white w-full flex flex-col justify-center"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-20 flex flex-col lg:flex-row items-center gap-12">
          {/* Contenu texte */}
          <motion.div
            className="flex-1 text-center lg:text-left max-w-lg"
            initial="hidden"
            animate="visible"
            aria-labelledby="hero-heading"
            aria-describedby="hero-subtext"
          >
            <motion.p
              className="mb-4 inline-block rounded-full bg-blue-50 px-4 py-1 text-xs sm:text-sm font-semibold text-blue-700"
              custom={0}
              variants={heroTextVariants}
            >
              {site.city} · {site.hoursShort}
            </motion.p>
            <motion.h1
              id="hero-heading"
              className="text-[clamp(2.5rem,6vw,4.25rem)] font-extrabold leading-tight tracking-tight text-blue-700 select-text"
              custom={1}
              variants={heroTextVariants}
            >
              Votre santé,
              <br />
              <span className="text-black" aria-label="Notre priorité" role="text">
                notre priorité
              </span>
            </motion.h1>
            <motion.p
              id="hero-subtext"
              className="mt-6 text-lg sm:text-xl font-light text-gray-900 max-w-3xl mx-auto lg:mx-0"
              custom={2}
              variants={heroTextVariants}
            >
              Bienvenue au {site.clinic}, à {site.city}. Notre équipe vous
              accompagne en oto-rhino-laryngologie, chirurgie cervico-faciale et
              médecine générale, avec un plateau technique moderne et une prise
              en charge attentive, 7 jours sur 7 de 08h00 à 18h00.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              custom={3}
              variants={heroTextVariants}
            >
              <button
                onClick={() => setModalOpen(true)}
                className="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition-colors w-full sm:w-auto"
                aria-haspopup="dialog"
                aria-controls="appointment-modal"
              >
                Prendre rendez-vous
              </button>
              <a
                href={whatsappUrl(
                  site,
                  `Bonjour ${site.clinic}, je souhaite prendre rendez-vous.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-green-600 text-green-700 hover:bg-green-50 font-semibold px-8 py-4 rounded-lg transition-colors w-full sm:w-auto"
              >
                <FaWhatsapp className="w-5 h-5" aria-hidden="true" />
                WhatsApp
              </a>
            </motion.div>
          </motion.div>

          {/* Image d’accueil (inchangée) */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end max-w-xl w-full"
            initial="hidden"
            animate="visible"
            variants={heroImageVariants}
          >
            <img
              src="https://images.unsplash.com/photo-1597807037496-c56a1d8bc29a?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Professionnel de santé accompagnant une patiente"
              className="rounded-3xl shadow-2xl w-full max-w-[540px] h-auto object-cover select-none"
              loading="lazy"
              draggable={false}
            />
          </motion.div>
        </div>

        {/* Atouts du cabinet */}
        <motion.div
          className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center"
          initial="hidden"
          animate="visible"
          aria-label="Les atouts du cabinet médical"
        >
          {FEATURES.map(({ icon, title, description }, i) => (
            <motion.div
              key={title}
              className="flex flex-col items-center"
              custom={i}
              variants={featuresVariants}
            >
              <div className="bg-blue-100 rounded-full p-4 mb-4">{icon}</div>
              <h3 className="text-lg font-semibold text-blue-700 mb-1">{title}</h3>
              <p className="text-gray-700 font-light max-w-xs">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Fenêtre modale de rendez-vous */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            id="appointment-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            aria-describedby="modal-desc"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={(e) => e.target === e.currentTarget && closeModal()}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalBackdropVariants}
          >
            <motion.div
              ref={modalRef}
              tabIndex={-1}
              className="bg-white rounded-2xl w-full max-w-4xl p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={modalContentVariants}
            >
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 text-gray-500 hover:text-gray-900 text-2xl font-semibold focus:outline-none"
                aria-label="Fermer le formulaire de rendez-vous"
              >
                ×
              </button>

              {/* Colonne gauche : visuel et informations */}
              <div className="flex flex-col justify-center items-center rounded-xl overflow-hidden shadow-lg bg-blue-50 p-6 select-none">
                <img
                  src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=1094&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Médecin en consultation avec un patient"
                  className="rounded-xl mb-6 object-cover w-full max-w-sm shadow-lg"
                  loading="lazy"
                  draggable={false}
                />
                <h3 className="text-2xl font-bold text-blue-700 mb-3 text-center">
                  Réservez votre consultation
                </h3>
                <p className="text-gray-700 text-center font-light max-w-xs">
                  Choisissez la spécialité, la date et l’heure qui vous
                  conviennent. Notre équipe vous confirme le rendez-vous par
                  WhatsApp.
                </p>
                <p className="mt-4 text-sm font-semibold text-gray-800">
                  {site.phone} · {site.hours}
                </p>
              </div>

              {/* Colonne droite : formulaire */}
              <div className="flex flex-col">
                {submitSuccess ? (
                  <div
                    className="flex flex-col items-center justify-center gap-3 text-green-700 p-6 border border-green-300 rounded-lg"
                    role="alert"
                    tabIndex={0}
                  >
                    <FaCheckCircle className="w-12 h-12" aria-hidden="true" />
                    <p className="text-lg font-semibold text-center">
                      Votre demande a été préparée pour WhatsApp !
                    </p>
                    <p className="text-center text-sm text-gray-600">
                      Si WhatsApp ne s’est pas ouvert automatiquement, cliquez
                      sur le bouton ci-dessous pour envoyer le récapitulatif.
                    </p>
                    <a
                      href={whatsappUrl(site, appointmentMessage(site, formData))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-200"
                    >
                      <FaWhatsapp className="w-5 h-5" aria-hidden="true" />
                      Envoyer sur WhatsApp
                    </a>
                    <button
                      onClick={closeModal}
                      className="mt-2 px-6 py-2 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50"
                    >
                      Fermer
                    </button>
                  </div>
                ) : (
                  <form onEnvoyer={handleEnvoyer} className="space-y-5" noValidate>
                    <h2 id="modal-title" className="text-2xl font-extrabold text-blue-700 mb-1">
                      Prendre rendez-vous
                    </h2>
                    <p id="modal-desc" className="text-gray-600 mb-3 font-light text-sm">
                      Remplissez le formulaire : le récapitulatif sera envoyé
                      directement au cabinet via WhatsApp.
                    </p>

                    {/* Nom */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold mb-1">
                        Nom complet <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Ex. : Adjovi Sossou"
                        value={formData.name}
                        onChange={handleChange}
                        ref={firstInputRef}
                        disabled={submitting}
                        className={`w-full px-4 py-2.5 rounded-lg border focus:outline-none focus:ring-2 ${
                          formErrors.name
                            ? "border-red-500 focus:ring-red-400"
                            : "border-gray-300 focus:ring-blue-400"
                        }`}
                        aria-invalid={!!formErrors.name}
                        aria-describedby={formErrors.name ? "name-error" : undefined}
                        required
                        autoComplete="name"
                      />
                      {formErrors.name && (
                        <p id="name-error" className="mt-1 text-xs text-red-600" role="alert">
                          {formErrors.name}
                        </p>
                      )}
                    </div>

                    {/* Téléphone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold mb-1">
                        Téléphone / WhatsApp <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+229 01 41 60 83 39"
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={submitting}
                        className={`w-full px-4 py-2.5 rounded-lg border focus:outline-none focus:ring-2 ${
                          formErrors.phone
                            ? "border-red-500 focus:ring-red-400"
                            : "border-gray-300 focus:ring-blue-400"
                        }`}
                        aria-invalid={!!formErrors.phone}
                        aria-describedby={formErrors.phone ? "phone-error" : undefined}
                        required
                        autoComplete="tel"
                      />
                      {formErrors.phone && (
                        <p id="phone-error" className="mt-1 text-xs text-red-600" role="alert">
                          {formErrors.phone}
                        </p>
                      )}
                    </div>

                    {/* Spécialité */}
                    <div>
                      <label htmlFor="specialty" className="block text-sm font-semibold mb-1">
                        Spécialité <span className="text-red-600">*</span>
                      </label>
                      <select
                        id="specialty"
                        name="specialty"
                        value={formData.specialty}
                        onChange={handleChange}
                        disabled={submitting}
                        className={`w-full px-4 py-2.5 rounded-lg border bg-white focus:outline-none focus:ring-2 ${
                          formErrors.specialty
                            ? "border-red-500 focus:ring-red-400"
                            : "border-gray-300 focus:ring-blue-400"
                        }`}
                        aria-invalid={!!formErrors.specialty}
                        required
                      >
                        <option value="">Choisir une spécialité</option>
                        {SPECIALTIES.map((s) => (
                          <option key={s.id} value={s.label}>
                            {s.label}
                          </option>
                        ))}
                      </select>
                      {formErrors.specialty && (
                        <p className="mt-1 text-xs text-red-600" role="alert">
                          {formErrors.specialty}
                        </p>
                      )}
                    </div>

                    {/* Date et créneau */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="date" className="block text-sm font-semibold mb-1">
                          Date <span className="text-red-600">*</span>
                        </label>
                        <input
                          id="date"
                          name="date"
                          type="date"
                          value={formData.date}
                          onChange={handleChange}
                          disabled={submitting}
                          min={new Date().toISOString().split("T")[0]}
                          className={`w-full px-3 py-2.5 rounded-lg border focus:outline-none focus:ring-2 ${
                            formErrors.date
                              ? "border-red-500 focus:ring-red-400"
                              : "border-gray-300 focus:ring-blue-400"
                          }`}
                          aria-invalid={!!formErrors.date}
                          required
                        />
                        {formErrors.date && (
                          <p className="mt-1 text-xs text-red-600" role="alert">
                            {formErrors.date}
                          </p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="time" className="block text-sm font-semibold mb-1">
                          Créneau <span className="text-red-600">*</span>
                        </label>
                        <select
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          disabled={submitting}
                          className={`w-full px-3 py-2.5 rounded-lg border bg-white focus:outline-none focus:ring-2 ${
                            formErrors.time
                              ? "border-red-500 focus:ring-red-400"
                              : "border-gray-300 focus:ring-blue-400"
                          }`}
                          aria-invalid={!!formErrors.time}
                          required
                        >
                          <option value="">Choisir</option>
                          {TIME_SLOTS.map((slot) => (
                            <option key={slot} value={slot}>
                              {slot.replace(":", "h")}
                            </option>
                          ))}
                        </select>
                        {formErrors.time && (
                          <p className="mt-1 text-xs text-red-600" role="alert">
                            {formErrors.time}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Motif */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold mb-1">
                        Motif de consultation (facultatif)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={2}
                        placeholder="Ex. : douleurs d’oreille, vertiges, bilan de santé…"
                        value={formData.message}
                        onChange={handleChange}
                        disabled={submitting}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-vertical"
                      />
                    </div>

                    {submitError && (
                      <div
                        className="flex items-center gap-2 text-red-600 font-semibold justify-center"
                        role="alert"
                      >
                        <FaClock aria-hidden="true" className="w-5 h-5" />
                        <span>{submitError}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-blue-700 hover:bg-blue-800 disabled:opacity-60 transition-colors text-white font-semibold py-3.5 rounded-lg flex justify-center items-center gap-2 focus:outline-none focus:ring-4 focus:ring-blue-300"
                      aria-live="polite"
                    >
                      {submitting ? (
                        <>
                          <svg
                            className="animate-spin h-5 w-5 mr-2 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8v8H4z"
                            ></path>
                          </svg>
                          Envoi en cours…
                        </>
                      ) : (
                        <>
                          <FaWhatsapp className="w-5 h-5" aria-hidden="true" />
                          Confirmer et envoyer sur WhatsApp
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-gray-500 text-center flex items-center justify-center gap-1">
                      <FaPhoneAlt aria-hidden="true" /> Ou appelez le{" "}
                      <a href={`tel:${site.phoneRaw}`} className="font-semibold text-blue-700">
                        {site.phone}
                      </a>
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
