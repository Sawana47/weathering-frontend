export default function CurrentWeather() {
  return (
    <div className="mt-6 p-8 rounded-3xl bg-white/60 backdrop-blur-xl shadow-xl text-center">
      <h2 className="text-2xl font-semibold mb-2">Your Location</h2>

      {/* Animated Icon */}
      <img
        src="/icons/sunny.gif"
        alt="weather-icon"
        className="w-28 mx-auto"
      />

      <p className="text-6xl font-bold">29°C</p>
      <p className="text-xl mt-2 opacity-70">Sunny</p>
    </div>
  );
}
