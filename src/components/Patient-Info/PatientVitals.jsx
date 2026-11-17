"use client";

import React, { useState } from "react";

const initialVitals = [
  {
    id: 1,
    type: "Tension artérielle",
    unit: "mmHg",
    values: [
      { date: "2024-08-01", value: "120/80" }, // Normal
      { date: "2024-07-25", value: "130/85" }, // Slightly elevated
      { date: "2024-07-18", value: "140/90" }, // Élevée
    ],
    normalRange: "90/60 - 120/80",
  },
  {
    id: 2,
    type: "Fréquence cardiaque",
    unit: "bpm",
    values: [
      { date: "2024-08-01", value: 72 },
      { date: "2024-07-25", value: 80 },
      { date: "2024-07-18", value: 95 },
    ],
    normalRange: "60 - 100",
  },
  {
    id: 3,
    type: "Température corporelle",
    unit: "°C",
    values: [
      { date: "2024-08-01", value: 36.6 },
      { date: "2024-07-25", value: 37.2 },
      { date: "2024-07-18", value: 38.5 }, // Fever
    ],
    normalRange: "36.1 - 37.2",
  },
  {
    id: 4,
    type: "Fréquence respiratoire",
    unit: "breaths/min",
    values: [
      { date: "2024-08-01", value: 16 },
      { date: "2024-07-25", value: 18 },
      { date: "2024-07-18", value: 22 }, // Slightly elevated
    ],
    normalRange: "12 - 20",
  },
  {
    id: 5,
    type: "Saturation en oxygène",
    unit: "%",
    values: [
      { date: "2024-08-01", value: 98 },
      { date: "2024-07-25", value: 95 },
      { date: "2024-07-18", value: 92 }, // Faible
    ],
    normalRange: "95 - 100",
  },
  {
    id: 6,
    type: "Glycémie",
    unit: "mg/dL",
    values: [
      { date: "2024-08-01", value: 95 },
      { date: "2024-07-25", value: 105 }, // Slightly elevated
      { date: "2024-07-18", value: 140 }, // Élevée
    ],
    normalRange: "70 - 110",
  },
];

// Check abnormality of a given vital sign value
const isAbnormal = (type, value) => {
  if (type === "Tension artérielle") {
    // Format: "systolic/diastolic"
    const [sys, dia] = value.split("/").map(Number);
    if (isNaN(sys) || isNaN(dia)) return false;
    // Élevée BP thresholds
    if (sys > 130 || dia > 85) return true;
    // Faible BP thresholds
    if (sys < 90 || dia < 60) return true;
    return false;
  }

  if (typeof value === "number") {
    switch (type) {
      case "Fréquence cardiaque":
        return value < 60 || value > 100;
      case "Température corporelle":
        return value < 36.1 || value > 37.2;
      case "Fréquence respiratoire":
        return value < 12 || value > 20;
      case "Saturation en oxygène":
        return value < 95;
      case "Glycémie":
        return value < 70 || value > 110;
      default:
        return false;
    }
  }
  return false;
};

const PatientVitals = () => {
  const [vitals] = useState(initialVitals);

  return (
    <section
      className="max-w-5xl mx-auto p-6 bg-white rounded-xl shadow-md"
      aria-label="Résumé des constantes vitales"
    >
      <h2 className="text-3xl font-extrabold mb-8 text-center">
        <span className="text-black">Patient </span>
        <span className="text-blue-700">Vital Signs</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {vitals.map(({ id, type, unit, values, normalRange }) => (
          <VitalItem
            key={id}
            type={type}
            unit={unit}
            values={values}
            normalRange={normalRange}
          />
        ))}
      </div>
    </section>
  );
};

const VitalItem = ({ type, unit, values, normalRange }) => (
  <article
    className="border border-gray-300 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow"
    aria-label={`${type} vital sign readings`}
  >
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{type}</h3>
    <p className="text-sm text-gray-600 mb-4">
      Normal Range: <span className="font-medium">{normalRange} {unit}</span>
    </p>

    <div className="space-y-3">
      {values.map(({ date, value }, idx) => {
        const abnormal = isAbnormal(type, value);
        return (
          <div
            key={idx}
            className="flex justify-between items-center"
            title={`Relevé du ${new Date(date).toLocaleDateString("fr-FR")}`}
          >
            <time className="text-gray-500 text-sm min-w-[90px]">
              {new Date(date).toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </time>
            <span
              className={`font-semibold text-lg ${
                abnormal ? "text-red-600" : "text-gray-900"
              }`}
              aria-label={`${type} value: ${value} ${unit}${abnormal ? ", abnormal reading" : ""}`}
            >
              {value} {unit}
            </span>
          </div>
        );
      })}
    </div>
  </article>
);

export default PatientVitals;
