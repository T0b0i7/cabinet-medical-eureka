'use client'
import React, { useState } from "react";

const DashboardSettings = () => {
  // Form state
  const [profile, setProfil] = useState({
    name: "Koffi Zinsou",
    email: "koffi.zinsou@example.bj",
    password: "",
    confirmPassword: "",
    emailNotifications: true,
    darkMode: false,
    privacy: {
      showEmail: false,
      showProfilPicture: true,
    },
  });

  const [saved, setSaved] = useState(false);
  const [errors, setErrors] = useState({});

  // Handlers
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "showEmail" || name === "showProfilPicture") {
      setProfil((prev) => ({
        ...prev,
        privacy: { ...prev.privacy, [name]: checked },
      }));
    } else if (type === "checkbox") {
      setProfil((prev) => ({ ...prev, [name]: checked }));
    } else {
      setProfil((prev) => ({ ...prev, [name]: value }));
    }
    setSaved(false);
  };

  const validate = () => {
    let tempErrors = {};
    if (!profile.name.trim()) tempErrors.name = "Le nom est requis";
    if (!profile.email.trim()) tempErrors.email = "L’adresse e-mail est requise";
    else if (!/\S+@\S+\.\S+/.test(profile.email))
      tempErrors.email = "Adresse e-mail invalide";

    if (profile.password || profile.confirmPassword) {
      if (profile.password.length < 6)
        tempErrors.password = "Le mot de passe doit contenir au moins 6 caractères";
      if (profile.password !== profile.confirmPassword)
        tempErrors.confirmPassword = "Les mots de passe ne correspondent pas";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (validate()) {
      // Simulate saving data, here you could call an API
      setSaved(true);
      setProfil((prev) => ({
        ...prev,
        password: "",
        confirmPassword: "",
      }));
      setErrors({});
    }
  };

  const handleCancel = () => {
    // Reset to initial data (for demo)
    setProfil({
      name: "Koffi Zinsou",
      email: "koffi.zinsou@example.bj",
      password: "",
      confirmPassword: "",
      emailNotifications: true,
      darkMode: false,
      privacy: {
        showEmail: false,
        showProfilPicture: true,
      },
    });
    setErrors({});
    setSaved(false);
  };

  return (
    <div
      style={{
        maxWidth: 700,
        margin: "20px auto",
        padding: 24,
        borderRadius: 12,
        boxShadow:
          "0 4px 12px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#222",
      }}
    >
      <h2
        style={{
          marginBottom: 24,
          fontWeight: "700",
          fontSize: 28,
          borderBottom: "2px solid #e2e8f0",
          paddingBottom: 8,
        }}
      >
        Tableau de bord Paramètres
      </h2>

      <form onSubmit={handleSave} noValidate>
        {/* Profil Section */}
        <section style={{ marginBottom: 32 }}>
          <h3
            style={{
              fontWeight: 600,
              fontSize: 20,
              marginBottom: 16,
              color: "#374151",
            }}
          >
            Informations du profil
          </h3>

          {/* Name */}
          <label
            htmlFor="name"
            style={{ display: "block", marginBottom: 6, fontWeight: 600 }}
          >
            Nom complet
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={profile.name}
            onChange={handleChange}
            placeholder="Votre nom complet"
            style={{
              width: "100%",
              padding: 10,
              fontSize: 16,
              borderRadius: 6,
              border: errors.name
                ? "2px solid #ef4444"
                : "1.5px solid #cbd5e1",
              outline: "none",
              marginBottom: errors.name ? 6 : 16,
              transition: "border-color 0.2s ease-in-out",
            }}
          />
          {errors.name && (
            <p style={{ color: "#ef4444", marginTop: -12, marginBottom: 12 }}>
              {errors.name}
            </p>
          )}

          {/* Email */}
          <label
            htmlFor="email"
            style={{ display: "block", marginBottom: 6, fontWeight: 600 }}
          >
            Adresse e-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={profile.email}
            onChange={handleChange}
            placeholder="votre.email@exemple.com"
            style={{
              width: "100%",
              padding: 10,
              fontSize: 16,
              borderRadius: 6,
              border: errors.email
                ? "2px solid #ef4444"
                : "1.5px solid #cbd5e1",
              outline: "none",
              marginBottom: errors.email ? 6 : 16,
              transition: "border-color 0.2s ease-in-out",
            }}
          />
          {errors.email && (
            <p style={{ color: "#ef4444", marginTop: -12, marginBottom: 12 }}>
              {errors.email}
            </p>
          )}
        </section>

        {/* Password Section */}
        <section style={{ marginBottom: 32 }}>
          <h3
            style={{
              fontWeight: 600,
              fontSize: 20,
              marginBottom: 16,
              color: "#374151",
            }}
          >
            Changer le mot de passe
          </h3>
          <label
            htmlFor="password"
            style={{ display: "block", marginBottom: 6, fontWeight: 600 }}
          >
            Nouveau mot de passe
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={profile.password}
            onChange={handleChange}
            placeholder="Nouveau mot de passe"
            autoComplete="new-password"
            style={{
              width: "100%",
              padding: 10,
              fontSize: 16,
              borderRadius: 6,
              border: errors.password
                ? "2px solid #ef4444"
                : "1.5px solid #cbd5e1",
              outline: "none",
              marginBottom: errors.password ? 6 : 16,
              transition: "border-color 0.2s ease-in-out",
            }}
          />
          {errors.password && (
            <p style={{ color: "#ef4444", marginTop: -12, marginBottom: 12 }}>
              {errors.password}
            </p>
          )}

          <label
            htmlFor="confirmPassword"
            style={{ display: "block", marginBottom: 6, fontWeight: 600 }}
          >
            Confirmer le mot de passe
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={profile.confirmPassword}
            onChange={handleChange}
            placeholder="Confirmer le nouveau mot de passe"
            autoComplete="new-password"
            style={{
              width: "100%",
              padding: 10,
              fontSize: 16,
              borderRadius: 6,
              border: errors.confirmPassword
                ? "2px solid #ef4444"
                : "1.5px solid #cbd5e1",
              outline: "none",
              marginBottom: errors.confirmPassword ? 6 : 16,
              transition: "border-color 0.2s ease-in-out",
            }}
          />
          {errors.confirmPassword && (
            <p style={{ color: "#ef4444", marginTop: -12, marginBottom: 12 }}>
              {errors.confirmPassword}
            </p>
          )}
        </section>

        {/* Notifications Section */}
        <section style={{ marginBottom: 32 }}>
          <h3
            style={{
              fontWeight: 600,
              fontSize: 20,
              marginBottom: 16,
              color: "#374151",
            }}
          >
            Notifications
          </h3>
          <label
            htmlFor="emailNotifications"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontWeight: 600,
              fontSize: 16,
              cursor: "pointer",
            }}
          >
            <input
              id="emailNotifications"
              name="emailNotifications"
              type="checkbox"
              checked={profile.emailNotifications}
              onChange={handleChange}
              style={{ width: 20, height: 20, cursor: "pointer" }}
            />
            Activer les notifications par e-mail
          </label>
        </section>

        {/* Theme Section */}
        <section style={{ marginBottom: 32 }}>
          <h3
            style={{
              fontWeight: 600,
              fontSize: 20,
              marginBottom: 16,
              color: "#374151",
            }}
          >
            Theme
          </h3>
          <label
            htmlFor="darkMode"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontWeight: 600,
              fontSize: 16,
              cursor: "pointer",
            }}
          >
            <input
              id="darkMode"
              name="darkMode"
              type="checkbox"
              checked={profile.darkMode}
              onChange={handleChange}
              style={{ width: 20, height: 20, cursor: "pointer" }}
            />
            Activer le mode sombre
          </label>
        </section>

        {/* Privacy Section */}
        <section style={{ marginBottom: 32 }}>
          <h3
            style={{
              fontWeight: 600,
              fontSize: 20,
              marginBottom: 16,
              color: "#374151",
            }}
          >
            Privacy Paramètres
          </h3>
          <label
            htmlFor="showEmail"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontWeight: 600,
              fontSize: 16,
              cursor: "pointer",
            }}
          >
            <input
              id="showEmail"
              name="showEmail"
              type="checkbox"
              checked={profile.privacy.showEmail}
              onChange={handleChange}
              style={{ width: 20, height: 20, cursor: "pointer" }}
            />
            Afficher l’e-mail sur le profil
          </label>

          <label
            htmlFor="showProfilPicture"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontWeight: 600,
              fontSize: 16,
              marginTop: 12,
              cursor: "pointer",
            }}
          >
            <input
              id="showProfilPicture"
              name="showProfilPicture"
              type="checkbox"
              checked={profile.privacy.showProfilPicture}
              onChange={handleChange}
              style={{ width: 20, height: 20, cursor: "pointer" }}
            />
            Afficher la photo de profil publiquement
          </label>
        </section>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 16,
            marginTop: 16,
          }}
        >
          <button
            type="button"
            onClick={handleCancel}
            style={{
              padding: "10px 24px",
              fontSize: 16,
              fontWeight: 600,
              backgroundColor: "#e5e7eb",
              border: "none",
              borderRadius: 8,
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#d1d5db")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#e5e7eb")}
          >
            Annuler
          </button>

          <button
            type="submit"
            style={{
              padding: "10px 24px",
              fontSize: 16,
              fontWeight: 600,
              backgroundColor: "#2563eb",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#1e40af")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#2563eb")}
          >
            Enregistrer
          </button>
        </div>

        {saved && (
          <p
            style={{
              marginTop: 20,
              fontWeight: 600,
              color: "#16a34a",
              textAlign: "center",
            }}
          >
            Paramètres enregistrés avec succès !
          </p>
        )}
      </form>
    </div>
  );
};

export default DashboardSettings;
