import React from "react";
import Navbar from "./Navbar";

import WeatherDisplay from "./WeatherDisplay.jsx";
import ClothingRecommender from "./ClothingRecommender.jsx";
import CrowdsourcedReports from "./CrowdsourcedReports.jsx";
import WeatherDiary from "./WeatherDiary.jsx";
import AiAssistant from "./AiAssistant.jsx";

import "./index.css";

export default function App() {
  return (
    <div className="container">

      <Navbar />

      <header className="page-header">
        <h1>WEATHERING — Hyperlocal Demo</h1>
        <div className="subtext">Ready-to-run Skill Project for Presentation</div>
      </header>

      <main className="main-grid">

        <section id="weather" className="card">
          <WeatherDisplay />
        </section>

        <section id="clothes" className="card">
          <ClothingRecommender />
        </section>

        <section id="reports" className="card">
          <CrowdsourcedReports />
        </section>

        <section id="diary" className="card">
          <WeatherDiary />
        </section>

        <section id="ai" className="card">
          <AiAssistant />
        </section>

      </main>
    </div>
  );
}
