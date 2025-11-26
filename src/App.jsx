import { useState, useEffect } from "react";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import AISection from "./components/AISection";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white text-gray-900">
      <header className="py-10 text-center">
        <h1 className="text-5xl font-extrabold tracking-wide">
          WEATHER FORECAST
        </h1>
      </header>

      <main className="max-w-5xl mx-auto px-4">
        <CurrentWeather />
        <Forecast />
        <AISection />
      </main>

      <footer className="text-center py-8 text-sm opacity-60">
        © 2025 Weathering — Powered by OpenWeather & AI
      </footer>
    </div>
  );
}
        
