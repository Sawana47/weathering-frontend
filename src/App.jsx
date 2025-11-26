import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app-container">

      {/* 🔵 SECTION 1 — VIDEO HEADER */}
      <section className="hero-section">
        <video autoPlay loop muted className="background-video">
          <source src="/weather-video.mp4" type="video/mp4" />
        </video>

        <div className="overlay">
          <h1 className="title">Weather Forecast</h1>
          <p className="subtitle">Check your current weather and upcoming forecast</p>
        </div>
      </section>

      {/* 🔵 SECTION 2 — WEATHER CONTENT */}
      <section className="weather-section">
        <h2>Current Weather</h2>
        <div className="weather-box">
          {/* 👉 your existing weather code goes here */}
        </div>

        <h2>Upcoming Weather</h2>
        <div className="weather-box">
          {/* 👉 your code for next days weather */}
        </div>
      </section>

      {/* 🔵 SECTION 3 — AI FEATURES */}
      <section className="ai-section">
        <h2>AI Assistance</h2>
        <p>Smart weather-based suggestions using AI</p>
      </section>

      {/* 🔵 SECTION 4 — CLOTHING SUGGESTIONS */}
      <section className="clothing-section">
        <h2>Clothing Recommendations</h2>
        <p>Dress smartly based on temperature & conditions</p>
      </section>

    </div>
  );
}

export default App;
