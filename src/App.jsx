import CurrentWeather from "./CurrentWeather.jsx";
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="page-container">

  <div className="section-title">Weather Forecast</div>
  <div className="section-subtitle">Check your current weather and upcoming forecast</div>

  <div className="weather-card">
    <div className="section-title">Current Weather</div>
    <div>Your Location</div>
    <div>29°C</div>
    <div>Sunny</div>
  </div>

  <div className="weather-card">
    <div className="section-title">Upcoming Weather</div>
  </div>

  <div className="weather-card">
    <div className="section-title">AI Assistance</div>
    <div>Smart weather-based suggestions using AI</div>
  </div>

  <div className="weather-card">
    <div className="section-title">Clothing Recommendations</div>
    <div>Dress smartly based on temperature & conditions</div>
  </div>

</div>
