"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

/* ---------- helpers ---------- */
const nowISODate = () => new Date().toISOString().split("T")[0];

const simulateApi = (delay = 900, failRate = 0.06) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < failRate) reject(new Error("Erreur réseau"));
      else resolve(true);
    }, delay);
  });

const formatTime = (t) => {
  if (!t) return "";
  return t;
};

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

/* ---------- Focus-trapped Modal (reusable) ---------- */
function Modal({ open, onClose, labelledBy, describedBy, children }) {
  const ref = useRef(null);
  const lastActive = useRef(null);

  useEffect(() => {
    if (!open) return;
    lastActive.current = document.activeElement;
    document.body.style.overflow = "hidden";

    setTimeout(() => {
      const el = ref.current?.querySelector(
        'button, a, input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );
      el?.focus();
    }, 80);

    const onKey = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
      if (e.key === "Tab") {
        const nodes = ref.current.querySelectorAll(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (!nodes.length) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    const onFocus = (e) => {
      if (!ref.current.contains(e.target)) {
        e.stopPropagation();
        const el = ref.current.querySelector(
          'button, a, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );
        el?.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("focus", onFocus, true);

    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("focus", onFocus, true);
      document.body.style.overflow = "";
      try {
        lastActive.current?.focus();
      } catch (e) {}
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
          aria-modal="true"
          role="dialog"
          aria-labelledby={labelledBy}
          aria-describedby={describedBy}
        >
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.32 } }}
            exit={{ opacity: 0, y: 10, scale: 0.98, transition: { duration: 0.22 } }}
            className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl ring-1 ring-black/5 p-6 relative"
            role="document"
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ---------- Availability generator (simulated) ---------- */
const generateSlotsForDate = (dateISO) => {
  const slots = [];
  const [Y, M, D] = dateISO.split("-").map((n) => Number(n));
  const base = new Date(Y, M - 1, D, 8, 0, 0);
  for (let i = 0; i < 20; i++) {
    const dt = new Date(base.getTime() + i * 30 * 60 * 1000);
    const hh = String(dt.getHours()).padStart(2, "0");
    const mm = String(dt.getMinutes()).padStart(2, "0");
    const busy = Math.random() < 0.12;
    slots.push({ time: `${hh}:${mm}`, available: !busy });
  }
  if (slots.filter((s) => s.available).length < 3) {
    for (let i = 0; i < 3; i++) slots[i].available = true;
  }
  return slots;
};

/* ---------- Inline Quick Booking Form ---------- */
function QuickBooking({ onOpenFull, onBooked }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState(nowISODate());
  const [time, setTime] = useState("");
  const [slots, setSlots] = useState(() => generateSlotsForDate(nowISODate()));
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [err, setErr] = useState("");

  useEffect(() => {
    setSlots(generateSlotsForDate(date));
    setTime("");
  }, [date]);

  const validate = () => {
    const e = {};
    if (!name.trim()) e.name = "Veuillez saisir votre nom complet";
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Saisissez une adresse e-mail valide";
    if (!date) e.date = "Sélectionner a date";
    if (!time) e.time = "Sélectionner a time slot";
    return e;
  };

  const submit = async (e) => {
    e?.preventDefault?.();
    setErr("");
    setSuccessMsg("");
    const v = validate();
    if (Object.keys(v).length) {
      setErr(Object.values(v)[0]);
      return;
    }

    setLoading(true);
    try {
      setSlots((prev) => prev.map((s) => (s.time === time ? { ...s, available: false } : s)));
      await simulateApi(900, 0.12);
      setSuccessMsg("Demande de rendez-vous reçue — nous vous appelons pour confirmer.");
      setName("");
      setEmail("");
      setTime("");
      onBooked?.({ name, email, date, time });
      setTimeout(() => setSuccessMsg(""), 3500);
    } catch (err) {
      setErr("Réservation impossible pour le moment. Veuillez réessayer.");
      setSlots(generateSlotsForDate(date));
    } finally {
      setLoading(false);
    }
  };

  const suggestion = slots.find((s) => s.available);

  return (
    <div className="bg-white border border-slate-100 dark:border-slate-800 rounded-2xl p-4 shadow-sm">
      <form onSubmit={submit} noValidate>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            className="flex-1 px-2 py-1 rounded border border-gray-300 bg-gray-50 text-black text-sm focus:outline-none focus:ring-1 focus:ring-sky-400"
            placeholder="Nom complet"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-label="Nom complet"
            disabled={loading}
          />
          <input
            className="w-[220px] sm:w-auto px-2 py-1 rounded border border-gray-300 bg-gray-50 text-black text-sm focus:outline-none focus:ring-1 focus:ring-sky-400"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="E-mail"
            disabled={loading}
          />
        </div>

        <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <input
            type="date"
            min={nowISODate()}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="px-2 py-1 rounded border border-gray-300 bg-gray-50 text-black text-sm focus:outline-none focus:ring-1 focus:ring-sky-400"
            aria-label="Date souhaitée"
            disabled={loading}
          />

          <select
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="px-2 py-1 rounded border border-gray-300 bg-gray-50 text-black text-sm focus:outline-none focus:ring-1 focus:ring-sky-400"
            aria-label="Créneau souhaité"
            disabled={loading}
          >
            <option value="">
              {suggestion ? `Suggestion : ${formatTime(suggestion.time)}` : "Choisir un créneau"}
            </option>
            {slots.map((s) => (
              <option key={s.time} value={s.time} disabled={!s.available}>
                {formatTime(s.time)} {s.available ? "" : "— réservé"}
              </option>
            ))}
          </select>

          <div className="flex items-center gap-2">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-sky-700 hover:bg-sky-800 text-white px-3 py-1.5 rounded font-semibold text-sm disabled:opacity-60"
            >
              {loading ? (
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="3"
                    className="opacity-25"
                  />
                  <path d="M4 12a8 8 0 018-8v8H4z" fill="currentColor" className="opacity-75" />
                </svg>
              ) : (
                "Réservation rapide"
              )}
            </button>

            <button
              type="button"
              onClick={() => onOpenFull({ default: { name, email, date, time } })}
              className="px-3 py-1.5 rounded border border-gray-300 bg-gray-50 text-black text-sm hover:bg-gray-100"
            >
              Formulaire complet
            </button>
          </div>
        </div>

        <div className="mt-3 text-xs text-gray-500">
          <div>{err && <span className="text-red-600 font-medium">{err}</span>}</div>
          <div>{successMsg && <span className="text-emerald-600 font-medium">{successMsg}</span>}</div>
          <div className="mt-1 text-gray-400">
            Disponibilités : 08h00 — 18h00 · Créneaux toutes les 30 minutes
          </div>
        </div>
      </form>
    </div>
  );
}

/* ---------- Full Booking Form (modal content) ---------- */
function FullBookingForm({ defaults = {}, onClose }) {
  const [name, setName] = useState(defaults?.name || "");
  const [email, setEmail] = useState(defaults?.email || "");
  const [date, setDate] = useState(defaults?.date || nowISODate());
  const [time, setTime] = useState(defaults?.time || "");
  const [slots, setSlots] = useState(() => generateSlotsForDate(nowISODate()));
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const nameRef = useRef(null);

  useEffect(() => {
    setTimeout(() => nameRef.current?.focus(), 70);
  }, []);

  useEffect(() => {
    setSlots(generateSlotsForDate(date));
    setTime("");
  }, [date]);

  const validate = () => {
    if (!name.trim()) return "Saisissez votre nom complet";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Saisissez une adresse e-mail valide";
    if (!date) return "Sélectionner a date";
    if (!time) return "Sélectionner a time";
    return null;
  };

  const submit = async (ev) => {
    ev?.preventDefault?.();
    setServerError("");
    const v = validate();
    if (v) {
      setServerError(v);
      return;
    }
    setLoading(true);
    try {
      await simulateApi(1200, 0.08);
      onClose({ name, email, date, time });
    } catch (err) {
      setServerError("Envoi impossible — veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 id="appointment-modal-title" className="text-xl font-semibold text-slate-900 mb-2">
        Prendre rendez-vous
      </h2>
      <p id="appointment-modal-desc" className="text-sm text-gray-700 mb-4">
        Renseignez vos informations et choisissez un créneau disponible. Nous vous contacterons pour confirmer.
      </p>

      <form onSubmit={submit} noValidate className="space-y-3">
        <div>
          <label className="text-sm font-medium text-slate-700">Nom complet</label>
          <input
            ref={nameRef}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-700"
            placeholder="Votre nom complet"
            aria-required
            disabled={loading}
          />
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700">E-mail</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-700"
            placeholder="vous@exemple.com"
            aria-required
            disabled={loading}
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-sm font-medium text-slate-700">Date</label>
            <input
              type="date"
              min={nowISODate()}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-700"
              disabled={loading}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">Heure</label>
            <select
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-700"
              disabled={loading}
            >
              <option value="">Choisir un créneau</option>
              {slots.map((s) => (
                <option key={s.time} value={s.time} disabled={!s.available}>
                  {formatTime(s.time)} {s.available ? "" : " — réservé"}
                </option>
              ))}
            </select>
          </div>
        </div>

        {serverError && <div className="text-red-600 text-sm">{serverError}</div>}

        <div className="flex justify-end gap-3 mt-4">
          <button
            type="button"
            onClick={() => onClose(null)}
            disabled={loading}
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
          >
            Annuler
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-5 py-2 rounded bg-blue-700 hover:bg-blue-800 text-white disabled:opacity-50"
          >
            {loading ? "Envoi…" : "Prendre rendez-vous"}
          </button>
        </div>
      </form>
    </div>
  );
}

/* ---------- Main Component ---------- */
export default function AppointmentsHero() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalDefaults, setModalDefaults] = useState({});
  const [toast, setToast] = useState("");
  const [highlighted, setHighlighted] = useState(null);

  // Animation controls
  const leftControls = useAnimation();
  const rightControls = useAnimation();

  // Refs for intersection observer
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const observerLeft = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) leftControls.start({ opacity: 1, x: 0 });
      },
      { threshold: 0.3 }
    );
    if (leftRef.current) observerLeft.observe(leftRef.current);

    const observerRight = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) rightControls.start({ opacity: 1, x: 0 });
      },
      { threshold: 0.3 }
    );
    if (rightRef.current) observerRight.observe(rightRef.current);

    return () => {
      observerLeft.disconnect();
      observerRight.disconnect();
    };
  }, [leftControls, rightControls]);

  const openFull = ({ default: def } = {}) => {
    setModalDefaults(def || {});
    setModalOpen(true);
  };

  const onBooked = (payload) => {
    setToast(
      `Demandé : ${payload.date} ${formatTime(payload.time)} — nous vous appellerons pour confirmer.`
    );
    setTimeout(() => setToast(""), 4500);
  };

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left content */}
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, x: -14 }}
            animate={leftControls}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-black"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
            >
              <span className="text-blue-600">Prenez</span> rendez-vous{" "}
              <span className="text-blue-600">en quelques clics</span>
            </motion.h1>

            <motion.p
              className="mt-4 text-gray-800 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.12 }}
            >
              Choisissez un créneau qui vous convient, indiquez vos coordonnées et
              notre équipe vous rappelle pour confirmer. Des créneaux sont réservés
              aux urgences légères et aux consultations de suivi.
            </motion.p>

            <div className="mt-6 flex gap-3 flex-wrap items-center">
              <button
                onClick={() => openFull()}
                className="inline-flex items-center gap-3 bg-blue-700 hover:bg-blue-800 text-white px-5 py-3 rounded-xl font-semibold shadow focus:outline-none focus:ring-4 focus:ring-sky-200"
              >
                Prendre rendez-vous
              </button>

              <a
                href="#services"
                className="px-4 py-3 rounded-lg border border-slate-300 hover:border-slate-400"
              >
                Nos spécialités
              </a>
            </div>

            <div className="mt-6">
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <li className="bg-white border border-slate-100 dark:border-slate-800 rounded-lg p-3 shadow-sm">
                  <div className="text-sm text-slate-500">Sans rendez-vous</div>
                  <div className="font-semibold mt-1 text-blue-700">Créneaux le jour même</div>
                </li>
                <li className="bg-white border border-slate-100 dark:border-slate-800 rounded-lg p-3 shadow-sm">
                  <div className="text-sm text-slate-500">Téléconsultation</div>
                  <div className="font-semibold mt-1 text-blue-700">Consultations vidéo</div>
                </li>
                <li className="bg-white border border-slate-100 dark:border-slate-800 rounded-lg p-3 shadow-sm">
                  <div className="text-sm text-slate-500">Urgences</div>
                  <div className="font-semibold mt-1 text-blue-700">Prise en charge prioritaire</div>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right content */}
          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, x: 14 }}
            animate={rightControls}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex flex-col gap-6">
              <div className="bg-white border border-slate-100 dark:border-slate-800 rounded-2xl p-5 shadow-lg">
                <div className="flex items-start gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1615486511473-4e83867c9516?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="healthcare professional"
                    className="w-20 h-20 rounded-xl object-cover shadow"
                  />
                  <div className="flex-1">
                    <div className="text-sm text-slate-500">Prochain créneau disponible</div>
                    <div className="font-semibold text-slate-900 text-lg mt-1">
                      Lun. 11 août · 09h30
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      Créneaux toutes les 30 minutes · Téléconsultation et cabinet
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => setHighlighted((s) => (s === "next" ? null : "next"))}
                      className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-2 rounded-lg font-semibold"
                    >
                      Réserver
                    </button>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <div className="text-xs text-slate-500">Ou utilisez la réservation rapide</div>
                  <div className="mt-3">
                    <QuickBooking
                      onOpenFull={(payload) => openFull(payload)}
                      onBooked={(payload) => onBooked(payload)}
                    />
                  </div>
                </div>
              </div>

              {/* small help card */}
              <div className="bg-white border border-slate-100 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-gray-900">Besoin d’aide ?</div>
                  <div className="text-xs text-slate-500">
                    Appelez-nous au <span className="font-semibold">+229 01 41 60 83 39</span>
                  </div>
                </div>
                <div>
                  <a
                    className="px-3 py-2 rounded-lg border border-slate-300 hover:bg-slate-100"
                    href="tel:+2290141608339"
                  >
                    Appeler
                  </a>
                </div>
              </div>

              {/* subtle toast */}
              {toast && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 p-3 text-sm"
                >
                  {toast}
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Full booking modal */}
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        labelledBy="appointment-modal-title"
        describedBy="appointment-modal-desc"
      >
        <FullBookingForm
          defaults={modalDefaults}
          onClose={(payload) => {
            setModalOpen(false);
            if (payload) {
              setToast(
                `Réservé : ${payload.date} ${formatTime(payload.time)} — nous vous contacterons.`
              );
              setTimeout(() => setToast(""), 4500);
            }
          }}
        />
      </Modal>
    </section>
  );
}
