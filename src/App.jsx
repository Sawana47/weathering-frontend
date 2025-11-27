import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import CurrentWeatherCard from "./components/CurrentWeatherCard";
import MicroForecast from "./components/MicroForecast";
import ActivitySuggestions from "./components/ActivitySuggestions";
import AIAssistant from "./components/AIAssistant";
import CrowdReport from "./components/CrowdReport";
import WeatherDiary from "./components/WeatherDiary";

export default function App() {
  // Mock current weather and forecast. Replace these with real API calls later.
  const [location, setLocation] = useState("Your Location");
  const [current, setCurrent] = useState(null);
  const [hourly, setHourly] = useState([]);

  useEffect(() => {
    // Mock fetch — replace with actual fetch to your backend/proxy
    const now = new Date();
    const mockCurrent = {
      temp: 24,
      feels_like: 24,
      description: "Partly Cloudy",
      humidity: 62,
      wind_kph: 12,
      icon: "🌤️",
    };

    // Create 12 hours of mock hourly data with PoP
    const mockHourly = Array.from({ length: 12 }).map((_, i) => {
      const dt = new Date(now.getTime() + i * 60 * 60 * 1000);
      return {
        dt: dt.toISOString(),
        temp: 24 + Math.round(2 * Math.sin((i / 12) * Math.PI)),
        pop: Math.round(Math.max(0, 50 * Math.sin((i / 6) * Math.PI))) // 0-50% mock
      };
    });

    setLocation("Kolkata, IN");
    setCurrent(mockCurrent);
    setHourly(mockHourly);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-sky-100 text-slate-900">
      <Hero title="WEATHER FORECAST" subtitle="Weathering — Hyperlocal Forecasting" />
      <main className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <section className="lg:col-span-2 space-y-6">
          <CurrentWeatherCard location={location} current={current} />
          <MicroForecast hourly={hourly} />
          <ActivitySuggestions current={current} hourly={hourly} />
        </section>

        <aside className="space-y-6">
          <AIAssistant />
          <CrowdReport />
          <WeatherDiary />
        </aside>
      </main>
      <footer className="text-center text-sm py-6 text-slate-500">
        © Weathering — Hyperlocal Forecasting · Mock demo
      </footer>
    </div>
  );
}
