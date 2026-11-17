"use client";

import React, { useState, useMemo } from "react";

const initialLabResults = [
  {
    id: 1,
    testName: "Numération formule sanguine (NFS)",
    date: "2024-07-01",
    result: "Normal",
    normalRange: "N/A",
    status: "Normal",
    notes: "Aucune anomalie détectée.",
  },
  {
    id: 2,
    testName: "Glycémie",
    date: "2024-07-15",
    result: "110 mg/dL",
    normalRange: "70 - 110 mg/dL",
    status: "Normal",
    notes: "",
  },
  {
    id: 3,
    testName: "Cholestérol",
    date: "2024-06-20",
    result: "220 mg/dL",
    normalRange: "< 200 mg/dL",
    status: "Élevée",
    notes: "Modifications du mode de vie recommandées, contrôle dans 3 mois.",
  },
  {
    id: 4,
    testName: "Vitamin D",
    date: "2024-05-10",
    result: "25 ng/mL",
    normalRange: "30 - 100 ng/mL",
    status: "Faible",
    notes: "Supplémentation conseillée.",
  },
];

// Statut color mapping for badges
const statusColors = {
  Normal: "text-green-600 bg-green-100",
  Élevée: "text-red-700 bg-red-100",
  Faible: "text-yellow-800 bg-yellow-100",
  "En attente": "text-gray-700 bg-gray-100",
};

const PatientLabResults = () => {
  const [labResults] = useState(initialLabResults);
  const [sortAsc, setSortAsc] = useState(false);

  // Memoized sorted results by date ascending/descending
  const sortedResults = useMemo(() => {
    return [...labResults].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortAsc ? dateA - dateB : dateB - dateA;
    });
  }, [labResults, sortAsc]);

  // Toggle sort order handler
  const toggleSortOrder = () => setSortAsc((prev) => !prev);

  return (
    <section className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-3xl font-extrabold mb-6 text-center">
        <span className="text-black">Lab </span>
        <span className="text-blue-700">Test Results</span>
      </h2>

      <div className="flex justify-end mb-4">
        <button
          onClick={toggleSortOrder}
          className="text-blue-700 bg-blue-100 px-4 py-2 rounded-md hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label={`Sort by date ${sortAsc ? "ascending" : "descending"}`}
          type="button"
        >
          Sort by Date: {sortAsc ? "Plus anciens d’abord" : "Plus récents d’abord"}
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] border-collapse text-left">
          <thead>
            <tr className="bg-blue-100 text-blue-900 font-semibold">
              <th className="p-3 border border-blue-200 rounded-tl-lg">Test Name</th>
              <th className="p-3 border border-blue-200">Date</th>
              <th className="p-3 border border-blue-200">Result</th>
              <th className="p-3 border border-blue-200">Normal Range</th>
              <th className="p-3 border border-blue-200">Statut</th>
              <th className="p-3 border border-blue-200 rounded-tr-lg">Notes</th>
            </tr>
          </thead>
          <tbody>
            {sortedResults.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center p-6 text-gray-600">
                  Non lab results found.
                </td>
              </tr>
            ) : (
              sortedResults.map(
                ({ id, testName, date, result, normalRange, status, notes }) => (
                  <tr
                    key={id}
                    className="even:bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <td className="p-3 border border-blue-200 whitespace-normal">{testName}</td>
                    <td className="p-3 border border-blue-200 whitespace-nowrap">
                      {new Date(date).toLocaleDateString("fr-FR", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </td>
                    <td className="p-3 border border-blue-200 whitespace-nowrap">{result}</td>
                    <td className="p-3 border border-blue-200 whitespace-nowrap">{normalRange}</td>
                    <td className="p-3 border border-blue-200">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                          statusColors[status] || "text-gray-700 bg-gray-200"
                        }`}
                        aria-label={`Statut: ${status}`}
                      >
                        {status}
                      </span>
                    </td>
                    <td className="p-3 border border-blue-200 whitespace-normal max-w-xs break-words">
                      {notes || "-"}
                    </td>
                  </tr>
                )
              )
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default PatientLabResults;
