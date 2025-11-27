import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <header className="hero-bg relative overflow-hidden">
      {/* Animated cloud */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ x: ["-20%", "120%"] }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="h-40 opacity-40"
          style={{
            background:
              "radial-gradient(circle at 20% 40%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 40%)",
            width: "28%",
            height: "120px",
            marginTop: "20px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="rounded-2xl p-8 backdrop-blur-sm bg-white/60 border border-white/40 shadow-lg">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            WEATHER FORECAST
          </h1>
          <p className="mt-2 text-slate-700">
            Weathering — Hyperlocal Forecasting
          </p>

          <div className="mt-4 inline-flex items-center gap-2 bg-sky-50 px-4 py-1 rounded-full text-sm font-medium">
            Real-time • Microclimate • Activity-aware
          </div>
        </div>
      </div>
    </header>
  );
}
