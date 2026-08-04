export default function Testimonials() {
  return (
    <section
      style={{
        padding: "80px 20px",
        background: "#111827",
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
        ⭐ Client Reviews
      </h2>

      <div
        style={{
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        }}
      >
        <div style={{ background: "#1f2937", padding: "20px", borderRadius: "10px" }}>
          ⭐⭐⭐⭐⭐
          <p>"Amazing website design!"</p>
          <strong>- Rahul</strong>
        </div>

        <div style={{ background: "#1f2937", padding: "20px", borderRadius: "10px" }}>
          ⭐⭐⭐⭐⭐
          <p>"Best SEO service."</p>
          <strong>- Priya</strong>
        </div>

        <div style={{ background: "#1f2937", padding: "20px", borderRadius: "10px" }}>
          ⭐⭐⭐⭐⭐
          <p>"Professional and fast delivery."</p>
          <strong>- Aman</strong>
        </div>
      </div>
    </section>
  );
}
