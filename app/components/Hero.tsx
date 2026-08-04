export default function Hero() {
  return (
    <section
      style={{
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        background: "linear-gradient(135deg,#0f172a,#1e293b)",
        color: "white",
        padding: "20px",
      }}
    >
      <h1
        style={{
          fontSize: "58px",
          color: "#22c55e",
          marginBottom: "20px",
        }}
      >
        🚀 TipsR Pro
      </h1>

      <h2 style={{ fontSize: "30px" }}>
        Smart Digital Solutions
      </h2>

      <p
        style={{
          maxWidth: "700px",
          marginTop: "20px",
          color: "#cbd5e1",
          fontSize: "20px",
          lineHeight: "1.8",
        }}
      >
        We create professional websites, SEO solutions,
        blogs, portfolios and modern web applications
        that help businesses grow online.
      </p>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "40px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <button
          style={{
            background: "#22c55e",
            color: "#000",
            padding: "15px 35px",
            borderRadius: "10px",
            border: "none",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          🚀 Get Started
        </button>

        <button
          style={{
            background: "transparent",
            color: "#22c55e",
            padding: "15px 35px",
            border: "2px solid #22c55e",
            borderRadius: "10px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          📞 Contact Us
        </button>
      </div>
    </section>
  );
}
