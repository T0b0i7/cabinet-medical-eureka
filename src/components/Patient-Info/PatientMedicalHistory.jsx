"use client";

import React, { useState } from "react";

// List of medical conditions for checkbox group
const MEDICAL_CONDITIONS = [
  "Diabète",
  "Hypertension",
  "Maladie cardiaque",
  "Asthma",
  "Cancer",
  "Maladie rénale",
  "Arthrite",
  "Autre",
];

// A reusable checkbox input with label for better clarity and reusability
function ConditionCheckbox({ condition, isChecked, onToggle, disabled }) {
  return (
    <label
      className="
        flex items-center cursor-pointer select-none
        text-gray-800 whitespace-nowrap font-medium text-base md:text-lg min-w-[180px]
      "
    >
      <input
        type="checkbox"
        name="existingConditions"
        value={condition}
        checked={isChecked}
        onChange={onToggle}
        disabled={disabled}
        className="form-checkbox h-5 w-5 md:h-6 md:w-6 text-blue-600"
        aria-checked={isChecked}
      />
      <span className="ml-3">{condition}</span>
    </label>
  );
}

// Radio group for smoking/alcohol questions
function RadioGroup({ legend, name, options, selectedValue, onChange, error, disabled }) {
  return (
    <fieldset className="mt-10" aria-describedby={error ? `${name}-error` : undefined}>
      <legend className="font-semibold text-gray-900 mb-4 text-lg">
        {legend} <span className="text-red-600">*</span>
      </legend>
      <div className="flex flex-wrap gap-8">
        {options.map((option) => (
          <label
            key={option}
            className="inline-flex items-center cursor-pointer text-gray-800 text-base"
          >
            <input
              type="radio"
              name={name}
              value={option}
              checked={selectedValue === option}
              onChange={onChange}
              disabled={disabled}
              className="form-radio h-5 w-5 text-blue-600"
              aria-checked={selectedValue === option}
              required
            />
            <span className="ml-3">{option}</span>
          </label>
        ))}
      </div>
      {error && (
        <p
          className="text-red-600 mt-3 text-sm font-medium"
          role="alert"
          id={`${name}-error`}
        >
          {error}
        </p>
      )}
    </fieldset>
  );
}

export default function PatientMedicalHistory() {
  // Form state: existing conditions array + text inputs + radio selections
  const [form, setForm] = useState({
    existingConditions: [],
    medications: "",
    allergies: "",
    familyHistory: "",
    smoking: "",
    alcohol: "",
  });

  // Validation errors
  const [formErrors, setFormErrors] = useState({});

  // Submission state for UI feedback
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Success feedback state
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Toggle condition checked state in existingConditions array
  const handleToggleCondition = (condition) => {
    setForm((prev) => {
      const hasCondition = prev.existingConditions.includes(condition);
      const updatedConditions = hasCondition
        ? prev.existingConditions.filter((c) => c !== condition)
        : [...prev.existingConditions, condition];
      return { ...prev, existingConditions: updatedConditions };
    });

    // Clear error related to existingConditions on change
    setFormErrors((prev) => {
      const copy = { ...prev };
      delete copy.existingConditions;
      return copy;
    });

    // Reset success if user changes input again
    setSubmitSuccess(false);
  };

  // Handle change for textareas and radio inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));

    // Clear related error on change
    setFormErrors((prev) => {
      const copy = { ...prev };
      delete copy[name];
      return copy;
    });

    setSubmitSuccess(false);
  };

  // Basic validation logic to check required fields
  const validateForm = () => {
    const errors = {};

    if (form.existingConditions.length === 0)
      errors.existingConditions = "Veuillez sélectionner au moins une pathologie ou « Aucun ».";

    if (!form.medications.trim())
      errors.medications = "Listez les traitements en cours ou saisissez « Aucun ».";

    if (!form.allergies.trim())
      errors.allergies = "Listez les allergies ou saisissez « Aucun ».";

    if (!form.familyHistory.trim())
      errors.familyHistory = "Renseignez les antécédents familiaux ou saisissez « Aucun ».";

    if (!form.smoking) errors.smoking = "Veuillez indiquer votre statut tabagique.";

    if (!form.alcohol) errors.alcohol = "Veuillez indiquer votre consommation d’alcool.";

    return errors;
  };

  // Form submit handler with simulated delay
  const handleSubmit = async (event) => {
    event.preventDefault();

    setFormErrors({});
    setSubmitSuccess(false);

    const errorsFound = validateForm();
    if (Object.keys(errorsFound).length > 0) {
      setFormErrors(errorsFound);
      return;
    }

    setIsSubmitting(true);

    try {
      // Fake async request
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitSuccess(true);
      // Reset form after successful submission
      setForm({
        existingConditions: [],
        medications: "",
        allergies: "",
        familyHistory: "",
        smoking: "",
        alcohol: "",
      });
    } catch {
      setFormErrors({ submit: "Envoi échoué. Veuillez réessayer." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      aria-labelledby="medical-history-title"
      className="max-w-5xl mx-auto bg-white p-10 rounded-xl shadow-md"
    >
      <h2 id="medical-history-title" className="text-3xl font-extrabold mb-10 text-center">
        <span className="text-black">Patient </span>
        <span className="text-blue-700">Antécédents médicaux</span>
      </h2>

      <form onSubmit={handleSubmit} noValidate>
        {/* Existing Medical Conditions */}
        <fieldset className="mb-10" aria-describedby={formErrors.existingConditions ? "existingConditions-error" : undefined}>
          <legend className="font-semibold text-gray-900 mb-5 text-lg">
            Antécédents médicaux <span className="text-red-600">*</span>
          </legend>
          <div className="flex flex-wrap gap-x-16 gap-y-4 md:gap-x-12 md:gap-y-6 justify-start max-w-full">
            {MEDICAL_CONDITIONS.map((condition) => (
              <ConditionCheckbox
                key={condition}
                condition={condition}
                isChecked={form.existingConditions.includes(condition)}
                onToggle={() => handleToggleCondition(condition)}
                disabled={isSubmitting}
              />
            ))}
          </div>
          {formErrors.existingConditions && (
            <p className="text-red-600 mt-3 text-sm font-medium" role="alert" id="existingConditions-error">
              {formErrors.existingConditions}
            </p>
          )}
        </fieldset>

        {/* Medications, Allergies, Family History */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <div>
            <label htmlFor="medications" className="block font-semibold mb-2 text-gray-900 text-lg">
              Current Traitements <span className="text-red-600">*</span>
            </label>
            <textarea
              id="medications"
              name="medications"
              rows={4}
              value={form.medications}
              onChange={handleInputChange}
              disabled={isSubmitting}
              placeholder="Listez les traitements en cours ou saisissez « Aucun »"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-none text-gray-900 text-base ${
                formErrors.medications ? "border-red-500" : "border-gray-300"
              }`}
              aria-invalid={!!formErrors.medications}
              aria-describedby={formErrors.medications ? "medications-error" : undefined}
              required
            />
            {formErrors.medications && (
              <p id="medications-error" className="text-red-600 mt-2 text-sm font-medium" role="alert">
                {formErrors.medications}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="allergies" className="block font-semibold mb-2 text-gray-900 text-lg">
              Allergies <span className="text-red-600">*</span>
            </label>
            <textarea
              id="allergies"
              name="allergies"
              rows={4}
              value={form.allergies}
              onChange={handleInputChange}
              disabled={isSubmitting}
              placeholder="Listez les allergies ou saisissez « Aucun »"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-none text-gray-900 text-base ${
                formErrors.allergies ? "border-red-500" : "border-gray-300"
              }`}
              aria-invalid={!!formErrors.allergies}
              aria-describedby={formErrors.allergies ? "allergies-error" : undefined}
              required
            />
            {formErrors.allergies && (
              <p id="allergies-error" className="text-red-600 mt-2 text-sm font-medium" role="alert">
                {formErrors.allergies}
              </p>
            )}
          </div>

          <div className="md:col-span-2">
            <label htmlFor="familyHistory" className="block font-semibold mb-2 text-gray-900 text-lg">
              Family Antécédents médicaux <span className="text-red-600">*</span>
            </label>
            <textarea
              id="familyHistory"
              name="familyHistory"
              rows={5}
              value={form.familyHistory}
              onChange={handleInputChange}
              disabled={isSubmitting}
              placeholder="Décrivez les antécédents familiaux ou saisissez « Aucun »"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-none text-gray-900 text-base ${
                formErrors.familyHistory ? "border-red-500" : "border-gray-300"
              }`}
              aria-invalid={!!formErrors.familyHistory}
              aria-describedby={formErrors.familyHistory ? "familyHistory-error" : undefined}
              required
            />
            {formErrors.familyHistory && (
              <p id="familyHistory-error" className="text-red-600 mt-2 text-sm font-medium" role="alert">
                {formErrors.familyHistory}
              </p>
            )}
          </div>
        </div>

        {/* Smoking status */}
        <RadioGroup
          legend="Fumez-vous ?"
          name="smoking"
          options={["Oui", "No", "Occasionnellement", "Je préfère ne pas préciser"]}
          selectedValue={form.smoking}
          onChange={handleInputChange}
          error={formErrors.smoking}
          disabled={isSubmitting}
        />

        {/* Alcohol consumption */}
        <RadioGroup
          legend="Consommez-vous de l’alcool ?"
          name="alcohol"
          options={["Oui", "No", "Occasionnellement", "Je préfère ne pas préciser"]}
          selectedValue={form.alcohol}
          onChange={handleInputChange}
          error={formErrors.alcohol}
          disabled={isSubmitting}
        />

        {/* Submission error */}
        {formErrors.submit && (
          <p className="mt-8 text-red-600 font-semibold text-center" role="alert">
            {formErrors.submit}
          </p>
        )}

        {/* Success message */}
        {submitSuccess && (
          <p className="mt-8 text-green-600 font-semibold text-center" role="alert">
            Antécédents médicaux enregistrés avec succès !
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-10 w-full bg-blue-700 hover:bg-blue-800 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition-colors flex justify-center items-center"
          aria-live="polite"
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin h-5 w-5 mr-3 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              Submitting...
            </>
          ) : (
            "Envoyer Antécédents médicaux"
          )}
        </button>
      </form>
    </section>
  );
}
