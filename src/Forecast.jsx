export default function Forecast() {
  const days = [
    { day: "Mon", temp: "30°C", icon: "/icons/cloudy.gif" },
    { day: "Tue", temp: "27°C", icon: "/icons/rain.gif" },
    { day: "Wed", temp: "31°C", icon: "/icons/sunny.gif" },
    { day: "Thu", temp: "29°C", icon: "/icons/storm.gif" },
  ];

  return (
    <div className="mt-10">
      <h2 className="text-3xl font-semibold mb-4">Upcoming Weather</h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {days.map((item) => (
          <div
            key={item.day}
            className="p-4 bg-white/50 backdrop-blur-xl rounded-2xl shadow-md text-center"
          >
            <p className="font-semibold">{item.day}</p>
            <img src={item.icon} className="w-16 mx-auto" />
            <p className="text-xl font-bold">{item.temp}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
