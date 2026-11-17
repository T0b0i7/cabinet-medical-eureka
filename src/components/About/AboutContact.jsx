"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, ease: "easeOut", duration: 0.6 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AboutContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Update form state on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Insert your form submission logic here (e.g., API call)
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section
      aria-label="Nous contacter"
      className="bg-white py-20 px-6 sm:px-10 lg:px-20 max-w-7xl mx-auto"
    >
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Contact Information */}
        <motion.div variants={itemVariants} className="space-y-8">
          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
            Prenez <span className="text-blue-700">contact</span>
          </h2>
          <p className="text-gray-700 text-lg font-light max-w-md">
            Nous serions ravis d’échanger avec vous. Que vous ayez des questions
            sur nos spécialités ou que vous souhaitiez prendre rendez-vous,
            écrivez-nous : nous vous répondons rapidement.
          </p>

          <div className="space-y-6 max-w-md">
            <div className="flex items-center space-x-4 text-gray-800">
              <FaPhoneAlt className="text-blue-700 w-6 h-6" aria-hidden="true" />
              <a
                href="tel:+2290141608339"
                className="hover:text-blue-700 transition"
                aria-label="Appelez-nous au +229 01 41 60 83 39"
              >
                +229 01 41 60 83 39
              </a>
            </div>
            <div className="flex items-center space-x-4 text-gray-800">
              <FaEnvelope className="text-blue-700 w-6 h-6" aria-hidden="true" />
              <a
                href="mailto:contact@cabinet-eureka.bj"
                className="hover:text-blue-700 transition"
                aria-label="Écrivez-nous à contact@cabinet-eureka.bj"
              >
                contact@cabinet-eureka.bj
              </a>
            </div>
            <div className="flex flex-col space-y-2 text-gray-800 max-w-md">
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt
                  className="text-blue-700 w-6 h-6"
                  aria-hidden="true"
                />
                <address className="not-italic">
                  Cabinet Médical EURÊKA, Porto-Novo, Bénin
                </address>
              </div>

              {/* Embedded Google Map */}
              <div className="w-full aspect-[16/9] rounded-lg overflow-hidden border border-gray-300 shadow-sm mt-12">
                <iframe
                  title="Localisation du cabinet sur la carte"
                  src="https://www.google.com/maps?q=Porto-Novo,B%C3%A9nin&output=embed"
                  loading="lazy"
                  className="w-full h-full border-0"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          variants={itemVariants}
          className="bg-gray-50 rounded-xl shadow-md p-8"
          noValidate
          aria-label="Formulaire de contact"
        >
          {submitted && (
            <p
              className="mb-6 text-green-600 font-semibold"
              role="alert"
              aria-live="polite"
            >
              Merci pour votre message ! Nous vous répondrons dans les meilleurs délais.
            </p>
          )}
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Nom
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Votre nom complet"
              className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 transition"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="vous@exemple.com"
              className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 transition"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="subject"
              className="block text-gray-700 font-semibold mb-2"
            >
              Objet
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              value={formData.subject}
              onChange={handleChange}
              placeholder="Objet de votre message"
              className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 transition"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="message"
              className="block text-gray-700 font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Écrivez votre message ici…"
              className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 resize-y focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 focus-visible:ring-blue-400 focus:outline-none focus:ring-4 text-white font-semibold py-3 rounded-lg shadow-lg transition"
          >
            Envoyer le message
          </button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default AboutContact;
