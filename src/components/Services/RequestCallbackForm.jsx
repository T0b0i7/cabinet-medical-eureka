"use client";

import React, { useState } from "react";

const RequestCallbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    callbackDate: "",
    callbackTime: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic front-end validation
    if (
      !formData.name.trim() ||
      !formData.phone.trim() ||
      !formData.callbackDate ||
      !formData.callbackTime
    ) {
      alert("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    // Here you can integrate your API or backend logic
    console.log("Callback request submitted:", formData);

    setSubmitted(true);
    setFormData({
      name: "",
      phone: "",
      callbackDate: "",
      callbackTime: "",
      message: "",
    });
  };

  return (
    <section
      aria-labelledby="callback-form-title"
      className="max-w-3xl mx-auto p-6 sm:p-10 bg-white rounded-3xl shadow-lg"
    >
      <h2
        id="callback-form-title"
        className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 text-center"
      >
        Demander <span className="text-blue-600">un rappel</span>
      </h2>

      {submitted && (
        <div
          role="alert"
          className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md text-center"
        >
          Merci ! Votre demande de rappel a bien été envoyée.
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 font-medium text-gray-700">
              Nom complet <span aria-hidden="true" className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Votre nom complet"
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="name"
              className="rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 p-3 text-gray-900 outline-none transition"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label htmlFor="phone" className="mb-2 font-medium text-gray-700">
              Numéro de téléphone <span aria-hidden="true" className="text-red-600">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+229 01 00 00 00 00"
              value={formData.phone}
              onChange={handleChange}
              required
              pattern="^\+?[0-9\s\-()]{7,}$"
              title="Saisissez un numéro de téléphone valide"
              autoComplete="tel"
              className="rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 p-3 text-gray-900 outline-none transition"
            />
          </div>

          {/* Callback Date */}
          <div className="flex flex-col">
            <label
              htmlFor="callbackDate"
              className="mb-2 font-medium text-gray-700"
            >
              Date de rappel souhaitée{" "}
              <span aria-hidden="true" className="text-red-600">
                *
              </span>
            </label>
            <input
              type="date"
              id="callbackDate"
              name="callbackDate"
              value={formData.callbackDate}
              onChange={handleChange}
              required
              min={new Date().toISOString().split("T")[0]}
              className="rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 p-3 text-gray-900 outline-none transition"
            />
          </div>

          {/* Callback Time */}
          <div className="flex flex-col">
            <label
              htmlFor="callbackTime"
              className="mb-2 font-medium text-gray-700"
            >
              Heure de rappel souhaitée{" "}
              <span aria-hidden="true" className="text-red-600">
                *
              </span>
            </label>
            <input
              type="time"
              id="callbackTime"
              name="callbackTime"
              value={formData.callbackTime}
              onChange={handleChange}
              required
              className="rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 p-3 text-gray-900 outline-none transition"
            />
          </div>
        </div>

        {/* Message */}
        <div className="mt-6 flex flex-col">
          <label
            htmlFor="message"
            className="mb-2 font-medium text-gray-700"
          >
            Message complémentaire (facultatif)
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Précisez votre demande ou vos questions…"
            value={formData.message}
            onChange={handleChange}
            className="rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 p-3 text-gray-900 outline-none transition resize-none"
          />
        </div>

        {/* Submit */}
        <div className="mt-8 text-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-3 rounded-xl shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
          >
            Demander un rappel
          </button>
        </div>
      </form>
    </section>
  );
};

export default RequestCallbackForm;
