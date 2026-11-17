'use client';

import React, { useState } from 'react';
import { HiDownload, HiChartBar, HiUsers, HiCalendar } from 'react-icons/hi';

const reportStats = [
  {
    id: 'revenue',
    name: 'Recettes',
    value: '43 707 FCFA',
    icon: <HiDownload className="w-8 h-8 text-green-600" />,
    description: 'Recettes totales générées',
  },
  {
    id: 'users',
    name: 'Patients actifs',
    value: '3,622',
    icon: <HiUsers className="w-8 h-8 text-blue-600" />,
    description: 'Patients actifs ce mois-ci',
  },
  {
    id: 'appointments',
    name: 'Rendez-vous',
    value: '235',
    icon: <HiCalendar className="w-8 h-8 text-indigo-600" />,
    description: 'Rendez-vous programmés',
  },
];

const DashboardReports = () => {
  const [downloading, setDownloading] = useState(false);

  const handleDownloadReport = () => {
    if (downloading) return;
    setDownloading(true);
    // Simulate report download delay
    setTimeout(() => {
      alert('Rapport téléchargé avec succès !');
      setDownloading(false);
    }, 2000);
  };

  return (
    <section
      aria-labelledby="reports-title"
      className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-8 sm:p-12"
      style={{ fontFamily: "'Inter', sans-serif", color: '#111827' }}
    >
      {/* Header */}
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 border-b border-gray-200 pb-6">
        <h2
          id="reports-title"
          className="text-3xl font-extrabold tracking-tight text-gray-900 select-none"
        >
          Rapports Vue d’ensemble
        </h2>
        <button
          onClick={handleDownloadReport}
          disabled={downloading}
          aria-label="Télécharger latest report"
          className={`mt-4 sm:mt-0 inline-flex items-center gap-2 px-5 py-3 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1 transition
            ${
              downloading
                ? 'cursor-not-allowed bg-green-100 text-green-400'
                : 'bg-green-600 text-white hover:bg-green-700'
            }`}
        >
          {downloading ? (
            <svg
              className="animate-spin -ml-1 mr-2 h-6 w-6 text-white"
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
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
              />
            </svg>
          ) : (
            <HiDownload className="w-6 h-6" aria-hidden="true" />
          )}
          Télécharger le rapport
        </button>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
        {reportStats.map(({ id, name, value, icon, description }) => (
          <article
            key={id}
            className="flex items-center gap-6 bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-default"
            aria-label={`${name}: ${value}, ${description}`}
            tabIndex={0}
          >
            <div className="flex-shrink-0">{icon}</div>
            <div>
              <p className="text-gray-600 font-semibold tracking-wide">{name}</p>
              <p className="text-3xl font-extrabold text-gray-900 mt-1">{value}</p>
              <p className="text-gray-500 mt-0.5 text-sm">{description}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Chart Area */}
      <section
        aria-label="Évolution des rendez-vous et des recettes"
        className="bg-gray-50 rounded-xl p-8 shadow-md"
        style={{ minHeight: 280 }}
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-6 select-none">
          Rendez-vous et recettes du mois
        </h3>

        {/* Placeholder Chart (You can replace with real chart lib) */}
        <svg
          viewBox="0 0 600 250"
          role="img"
          aria-label="Graphique des rendez-vous et des recettes par mois"
          className="w-full h-56"
          style={{ maxWidth: '100%' }}
        >
          <defs>
            <linearGradient id="gradient-revenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.7} />
              <stop offset="95%" stopColor="#10b981" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="gradient-appointments" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.7} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
            </linearGradient>
          </defs>

          {/* X Axis */}
          <line x1="40" y1="220" x2="560" y2="220" stroke="#ccc" strokeWidth="1" />
          {/* Y Axis */}
          <line x1="40" y1="20" x2="40" y2="220" stroke="#ccc" strokeWidth="1" />

          {/* Recettes Line */}
          <path
            fill="url(#gradient-revenue)"
            stroke="#10b981"
            strokeWidth="3"
            d="M40 200 L110 160 L180 130 L250 110 L320 90 L390 80 L460 70 L530 60 L560 55"
            strokeLinecap="round"
          />

          {/* Rendez-vous Line */}
          <path
            fill="url(#gradient-appointments)"
            stroke="#3b82f6"
            strokeWidth="3"
            d="M40 210 L110 190 L180 170 L250 150 L320 140 L390 130 L460 120 L530 110 L560 105"
            strokeLinecap="round"
          />

          {/* Labels */}
          {['Janv.', 'Févr.', 'Mars', 'Avr.', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.'].map(
            (month, i) => (
              <text
                key={month}
                x={40 + i * 60}
                y={235}
                fontSize="12"
                fill="#6b7280"
                textAnchor="middle"
              >
                {month}
              </text>
            )
          )}
        </svg>
      </section>
    </section>
  );
};

export default DashboardReports;
