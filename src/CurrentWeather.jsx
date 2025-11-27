import React from "react";

export default function CurrentWeatherCard({ location, current }) {
  if (!current) {
    return (
      <div className="rounded-xl p-6 bg-white/80 border border-white/50 shadow">
        Loading current weather...
      </div>
    );
  }

  return (
    <div className="rounded-xl p-6 bg-white/80 border border-white/50 shadow">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-slate-500">Current location</div>
          <div className="text-xl font-semibold">{location}</div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-5xl">{current.icon}</div>
          <div className="text-right">
            <div className="text-4xl font-bold">{current.temp}°C</div>
            <div className="text-sm text-slate-600">{current.description}</div>
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-4 text-sm text-slate-600">
        <div className="p-3 rounded-lg bg-slate-50">Feels: {current.feels_like}°C</div>
        <div className="p-3 rounded-lg bg-slate-50">Humidity: {current.humidity}%</div>
        <div className="p-3 rounded-lg bg-slate-50">Wind: {current.wind_kph} kph</div>
      </div>
    </div>
  );
}
