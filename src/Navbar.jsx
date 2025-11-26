export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "12px 20px",
      background: "#0a2342",
      color: "white",
      borderRadius: "10px",
      marginBottom: "16px"
    }}>
      <h2 style={{ margin: 0 }}>🌦 WEATHERING</h2>

      <div style={{ display: "flex", gap: "16px" }}>
        <a href="#weather" style={{ color: "white", textDecoration: "none" }}>Weather</a>
        <a href="#clothing" style={{ color: "white", textDecoration: "none" }}>Clothing</a>
        <a href="#reports" style={{ color: "white", textDecoration: "none" }}>Reports</a>
        <a href="#diary" style={{ color: "white", textDecoration: "none" }}>Diary</a>
        <a href="#assistant" style={{ color: "white", textDecoration: "none" }}>AI Assistant</a>
      </div>
    </nav>
  );
}
