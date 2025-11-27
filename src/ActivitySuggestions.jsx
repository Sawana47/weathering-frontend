import React, { useMemo } from "react";

/**
 * Clothing recommender: simple rules based on temp and pop.
 */
function recommendClothing(temp, pop) {
  const clothing = [];
  if (temp <= 5) clothing.push("Heavy jacket");
  else if (temp <= 15) clothing.push("Jacket");
  else if (temp <= 22) clothing.push("Light sweater");
  else clothing.push("T-shirt");

  if (pop >= 50) clothing.push("Waterproof jacket");
  else if (pop >= 20) clothing.push("Carry umbrella");

  return clothing.join(", ");
}

export default function ActivitySuggestions({ current, hourly }) {
  const avgPop3 = useMemo(() => {
    const h = hourly.slice(0, 3);
    if (h.length === 0) return 0;
    return Math.round(h.reduce((s, it) => s + (it.pop ?? 0), 0) / h.length);
  }, [hourly]);

  const clothing = recommendClothing(current?.temp ?? 22, avgPop3);

  // Simple activity suitability (walk/run/outdoor) based on temp and pop
  const suggestions = useMemo(() => {
    const t = current?.temp ?? 22;
    const p = avgPop3;
    const res = [];
    if (p >= 60) res.push("Avoid long outdoor runs (high chance of rain)");
    else if (t < 10) res.push("Prefer indoor workouts (it's chilly)");
    else res.push("Good conditions for a short run or walk");

    if (t >= 30) res.push("Stay hydrated — heat advisory for strenuous activity");
    return res;
  }, [current, avgPop3]);

  return (
    <div className="rounded-xl p-6 bg-white/80 border border-white/50 shadow">
      <h3 className="text-lg font-semibold">Activity-aware Suggestions</h3>
      <div className="mt-3 text-sm text-slate-600"><strong>Clothing:</strong>
