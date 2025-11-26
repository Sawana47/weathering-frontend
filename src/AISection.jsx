export default function AISection() {
  return (
    <div className="mt-14 p-10 bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl shadow-lg">
      <h2 className="text-3xl font-semibold">AI Weather Assistant</h2>
      <p className="mt-2 text-gray-600">Smart suggestions for your day.</p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div className="p-6 bg-white rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-2">Clothing Suggestion</h3>
          <p>Light cotton recommended. Use sunglasses.</p>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-2">Rain Alert</h3>
          <p>No rain expected today.</p>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-2">Air Quality</h3>
          <p>Good. Safe for outdoor activities.</p>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-2">Activity Tips</h3>
          <p>Perfect day for jogging or cycling.</p>
        </div>
      </div>
    </div>
  );
}
