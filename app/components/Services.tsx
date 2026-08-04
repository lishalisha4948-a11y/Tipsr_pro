export default function Services() {
  const services = [
    {
      title: "🌐 Website Development",
      desc: "Professional and responsive websites.",
    },
    {
      title: "📈 SEO Optimization",
      desc: "Improve your Google ranking.",
    },
    {
      title: "📝 Blogging",
      desc: "High quality SEO friendly blogs.",
    },
    {
      title: "🎨 Graphic Design",
      desc: "Modern logos, banners and graphics.",
    },
  ];

  return (
    <section
      style={{
        background: "#111827",
        color: "white",
        padding: "80px 20px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "40px",
          color: "#22c55e",
          marginBottom: "40px",
        }}
      >
        💼 Our Services
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          maxWidth: "1100px",
          margin: "auto",
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              background: "#1e293b",
              padding: "30px",
              borderRadius: "15px",
            }}
          >
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

