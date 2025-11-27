import React, { useMemo } from "react";

/**
 * Calculate average PoP for next 3 hours from hourly data (first 3 items).
 * Render a horizontal list with tiny bars and PoP numbers.
 */
export default function MicroForecast({ hourly = [] }) {
  const next3 = hourly.slice(0, 3);
  const avgPop = useMemo(() => {
    if (!next3.length) return 0;
    const sum = next3.reduce((s, h) => s + (h.pop ?? 0), 0);
    return Math.round(sum / next3.length);
  }, [next3]);

  return (
    <div className="rounded-xl p-6 bg-white/80 border border-white/50 shadow">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Microclimate — next 3 hours</h3>
        <div className="text-sm text-slate-600">Avg PoP: <span className="font-bold">{avgPop}%</span></div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3">
        {next3.map((h, idx) => {
          const time = new Date(h.dt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
          return (
            <div key={idx} className="p-3 rounded-lg bg-slate-50">
              <div className="text-xs text-slate-500">{time}</div>
              <div className="mt-2 text-sm font-semibold">{h.temp}°C</div>
              <div className="mt-2 text-xs">PoP {h.pop}%</div>
              <div className="mt-2 h-2 bg-sky-200 rounded" style={{ width: `${Math.min(100, h.pop * 2)}%` }} />
            </div>
          );
        })}
      </div>

      <div className="mt-4 text-sm text-slate-600">
        Microforecast proxy: shows aggregated Probability of Precipitation (POP) for the immediate next hours.
      </div>
    </div>
  );
}
