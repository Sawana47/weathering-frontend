import React, { useState, useEffect } from "react";
import Navbar from "./Navbar.jsx";
import WeatherDisplay from "./WeatherDisplay.jsx";
import ClothingRecommender from "./ClothingRecommender.jsx";
import CrowdsourcedReports from "./CrowdsourcedReports.jsx";
import WeatherDiary from "./WeatherDiary.jsx";
import AIAssistant from "./AIAssistant.jsx";

export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }, [dark]);

  return (
    <div className="container" style={{ padding: "16px", maxWidth: "900px", margin: "auto" }}>

      <Navbar />

      <button
        onClick={() => setDark(!dark)}
        style={{
          padding: "10px 20px",
          marginBottom: "16px",
          borderRadius: "8px",
          border: "none",
          background: "#444",
          color: "white",
          cursor: "pointer"
        }}
      >
        Toggle {dark ? "Light" : "Dark"} Mode
      </button>

      <main style={{ display: "grid", gap: "16px" }}>

        <section id="weather" className="card">
          <WeatherDisplay />
        </section>

        <section id="clothing" className="card">
          <ClothingRecommender />
        </section>

        <section id="reports" className="card">
          <CrowdsourcedReports />
        </section>

        <section id="diary" className="card">
          <WeatherDiary />
        </section>

        <section id="assistant" className="card">
          <AIAssistant />
        </section>

      </main>

      <footer style={{
        marginTop: "20px",
        padding: "12px",
        textAlign: "center",
        opacity: 0.7
      }}>
        © 2025 WEATHERING — Hyperlocal Weather Project
      </footer>
    </div>
  );
}
