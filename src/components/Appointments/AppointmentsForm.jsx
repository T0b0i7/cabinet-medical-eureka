"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaCheckCircle } from "react-icons/fa";
import { useSiteConfig } from "../SiteConfigProvider";
import {
  SPECIALTIES,
  TIME_SLOTS,
  appointmentMessage,
  whatsappUrl,
} from "@/lib/siteConfig";

const PRIMARY_BLUE = "#2563eb";
const INPUT_BORDER = "#d1d5db";
const ERROR_RED = "#ef4444";
const TEXT_DARK = "#111827";

const EMPTY_FORM = {
  fullName: "",
  phone: "",
  specialty: "",
  date: "",
  time: "",
  message: "",
};

export default function AppointmentsForm() {
  const site = useSiteConfig();
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sentMessage, setSentMessage] = useState("");

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = "Votre nom complet est requis";
    if (!formData.phone.trim()) {
      errs.phone = "Votre numéro de téléphone est requis";
    } else if (!/^\+?[0-9\s-]{8,20}$/.test(formData.phone.trim())) {
      errs.phone = "Numéro de téléphone invalide";
    }
    if (!formData.specialty) errs.specialty = "Veuillez choisir une spécialité";
    if (!formData.date) {
      errs.date = "La date est requise";
    } else if (new Date(formData.date) < new Date(new Date().toDateString())) {
      errs.date = "La date ne peut pas être dans le passé";
    }
    if (!formData.time) errs.time = "Veuillez choisir un créneau";
    return errs;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const getInputStyles = (field) => ({
    width: "100%",
    padding: "12px 16px",
    borderRadius: 10,
    border: errors[field]
      ? `2px solid ${ERROR_RED}`
      : `1.8px solid ${INPUT_BORDER}`,
    backgroundColor: "#fff",
    fontSize: 16,
    color: TEXT_DARK,
    outline: "none",
    boxShadow: errors[field]
      ? `0 0 6px ${ERROR_RED}66`
      : "0 0 4px rgba(0,0,0,0.06)",
    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
  });

  const handleFocus = (e) => {
    e.target.style.borderColor = PRIMARY_BLUE;
    e.target.style.boxShadow = `0 0 8px ${PRIMARY_BLUE}88`;
  };
  const handleBlur = (e) => {
    const field = e.target.name;
    e.target.style.borderColor = errors[field] ? ERROR_RED : INPUT_BORDER;
    e.target.style.boxShadow = errors[field]
      ? `0 0 6px ${ERROR_RED}66`
      : "0 0 4px rgba(0,0,0,0.06)";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);

    const message = appointmentMessage(site, {
      name: formData.fullName,
      phone: formData.phone,
      specialty: formData.specialty,
      date: formData.date,
      time: formData.time,
      message: formData.message,
    });
    window.open(whatsappUrl(site, message), "_blank", "noopener,noreferrer");
    setSentMessage(message);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData(EMPTY_FORM);
      setErrors({});
    }, 900);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        backgroundColor: "#fff",
        maxWidth: 600,
        margin: "-1px auto 2rem auto",
        padding: 24,
        borderRadius: 12,
        boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
        fontFamily: "'Inter', sans-serif",
        color: TEXT_DARK,
        userSélectionner: "none",
      }}
      aria-label={`Formulaire de rendez-vous — ${site.clinic}`}
    >
      <h2
        style={{
          fontSize: 28,
          fontWeight: 700,
          marginBottom: 8,
          textAlign: "center",
          letterSpacing: 0.5,
        }}
      >
        <span style={{ color: "black" }}>Prenez </span>
        <span style={{ color: PRIMARY_BLUE }}>rendez-vous</span>
      </h2>
      <p style={{ textAlign: "center", color: "#4b5563", marginBottom: 24, fontSize: 14 }}>
        {site.clinic} · {site.city} — {site.hours}
      </p>

      {submitted && (
        <div
          role="alert"
          style={{
            backgroundColor: "#d1fae5",
            color: "#065f46",
            borderRadius: 8,
            padding: 16,
            marginBottom: 24,
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
            <FaCheckCircle /> Votre demande a été préparée pour WhatsApp.
          </span>
          <a
            href={whatsappUrl(site, sentMessage)}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginTop: 12,
              backgroundColor: "#16a34a",
              color: "#fff",
              padding: "10px 18px",
              borderRadius: 8,
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            <FaWhatsapp /> Envoyer sur WhatsApp
          </a>
        </div>
      )}

      <form onEnvoyer={handleSubmit} noValidate>
        {/* Nom complet */}
        <div style={{ marginBottom: 16 }}>
          <label htmlFor="fullName" style={{ display: "block", fontWeight: 600, marginBottom: 6, fontSize: 15 }}>
            Nom complet <span style={{ color: ERROR_RED }}>*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Ex. : Adjovi Sossou"
            value={formData.fullName}
            onChange={handleChange}
            style={getInputStyles("fullName")}
            aria-invalid={errors.fullName ? "true" : "false"}
            aria-describedby="fullName-error"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {errors.fullName && (
            <p id="fullName-error" role="alert" style={{ color: ERROR_RED, marginTop: 6, fontSize: 14 }}>
              {errors.fullName}
            </p>
          )}
        </div>

        {/* Téléphone */}
        <div style={{ marginBottom: 16 }}>
          <label htmlFor="phone" style={{ display: "block", fontWeight: 600, marginBottom: 6, fontSize: 15 }}>
            Téléphone / WhatsApp <span style={{ color: ERROR_RED }}>*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+229 01 00 00 00 00"
            value={formData.phone}
            onChange={handleChange}
            style={getInputStyles("phone")}
            aria-invalid={errors.phone ? "true" : "false"}
            aria-describedby="phone-error"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {errors.phone && (
            <p id="phone-error" role="alert" style={{ color: ERROR_RED, marginTop: 6, fontSize: 14 }}>
              {errors.phone}
            </p>
          )}
        </div>

        {/* Spécialité */}
        <div style={{ marginBottom: 16 }}>
          <label htmlFor="specialty" style={{ display: "block", fontWeight: 600, marginBottom: 6, fontSize: 15 }}>
            Spécialité <span style={{ color: ERROR_RED }}>*</span>
          </label>
          <select
            id="specialty"
            name="specialty"
            value={formData.specialty}
            onChange={handleChange}
            style={getInputStyles("specialty")}
            aria-invalid={errors.specialty ? "true" : "false"}
            aria-describedby="specialty-error"
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            <option value="">Choisir une spécialité</option>
            {SPECIALTIES.map((s) => (
              <option key={s.id} value={s.label}>
                {s.label} — {s.price}
              </option>
            ))}
          </select>
          {errors.specialty && (
            <p id="specialty-error" role="alert" style={{ color: ERROR_RED, marginTop: 6, fontSize: 14 }}>
              {errors.specialty}
            </p>
          )}
        </div>

        {/* Date et créneau */}
        <div style={{ display: "flex", gap: 16, marginBottom: 16, flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 50%", minWidth: 140 }}>
            <label htmlFor="date" style={{ display: "block", fontWeight: 600, marginBottom: 6, fontSize: 15 }}>
              Date <span style={{ color: ERROR_RED }}>*</span>
            </label>
            <input
              id="date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              min={new Date().toISOString().split("T")[0]}
              style={getInputStyles("date")}
              aria-invalid={errors.date ? "true" : "false"}
              aria-describedby="date-error"
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            {errors.date && (
              <p id="date-error" role="alert" style={{ color: ERROR_RED, marginTop: 6, fontSize: 14 }}>
                {errors.date}
              </p>
            )}
          </div>

          <div style={{ flex: "1 1 50%", minWidth: 140 }}>
            <label htmlFor="time" style={{ display: "block", fontWeight: 600, marginBottom: 6, fontSize: 15 }}>
              Créneau <span style={{ color: ERROR_RED }}>*</span>
            </label>
            <select
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              style={getInputStyles("time")}
              aria-invalid={errors.time ? "true" : "false"}
              aria-describedby="time-error"
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              <option value="">Choisir</option>
              {TIME_SLOTS.map((slot) => (
                <option key={slot} value={slot}>
                  {slot.replace(":", "h")}
                </option>
              ))}
            </select>
            {errors.time && (
              <p id="time-error" role="alert" style={{ color: ERROR_RED, marginTop: 6, fontSize: 14 }}>
                {errors.time}
              </p>
            )}
          </div>
        </div>

        {/* Message */}
        <div style={{ marginBottom: 24 }}>
          <label htmlFor="message" style={{ display: "block", fontWeight: 600, marginBottom: 6, fontSize: 15 }}>
            Motif de consultation (facultatif)
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Décrivez brièvement vos symptômes ou votre demande…"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            style={{ ...getInputStyles("message"), resize: "vertical" }}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>

        <motion.button
          type="submit"
          disabled={submitting}
          whileHover={submitting ? {} : { scale: 1.03 }}
          whileTap={submitting ? {} : { scale: 0.97 }}
          style={{
            width: "100%",
            padding: "12px 12px",
            fontSize: 15,
            fontWeight: 600,
            color: "#fff",
            backgroundColor: submitting ? "#9ca3af" : PRIMARY_BLUE,
            border: "none",
            borderRadius: 8,
            cursor: submitting ? "not-allowed" : "pointer",
            transition: "background-color 0.3s ease",
            letterSpacing: 0.3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            userSélectionner: "none",
          }}
          aria-busy={submitting}
        >
          {submitting ? (
            "Envoi en cours…"
          ) : (
            <>
              <FaWhatsapp /> Confirmer et envoyer sur WhatsApp
            </>
          )}
        </motion.button>
        <p style={{ textAlign: "center", marginTop: 12, fontSize: 12, color: "#6b7280" }}>
          Ou appelez le{" "}
          <a href={`tel:${site.phoneRaw}`} style={{ color: PRIMARY_BLUE, fontWeight: 600 }}>
            {site.phone}
          </a>
        </p>
      </form>
    </motion.section>
  );
}
