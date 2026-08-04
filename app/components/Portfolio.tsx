export default function Portfolio() {
  const projects = [
    "🌐 Business Website",
    "📝 Blog Website",
    "🛒 E-commerce Store",
    "📱 Mobile App UI",
    "🎨 Portfolio Website",
    "🚀 SEO Project",
  ];

  return (
    <section
      style={{
        padding: "80px 20px",
        background: "#0f172a",
        color: "white",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "42px",
          color: "#22c55e",
          marginBottom: "40px",
        }}
      >
        💼 Our Portfolio
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              background: "#111827",
              padding: "25px",
              borderRadius: "12px",
              border: "1px solid #22c55e",
            }}
          >
            <h3>{project}</h3>
            <p style={{ color: "#cbd5e1" }}>
              Professional project by TipsR Pro.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

