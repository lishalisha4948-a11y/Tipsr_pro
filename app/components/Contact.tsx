export default function Contact() {
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
          marginBottom: "20px",
        }}
      >
        📞 Contact Us
      </h2>

      <p
        style={{
          color: "#cbd5e1",
          marginBottom: "40px",
        }}
      >
        Let's discuss your next project.
      </p>

      <form
        style={{
          maxWidth: "600px",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Your Name"
          style={{
            padding: "15px",
            borderRadius: "8px",
            border: "none",
            fontSize: "16px",
          }}
        />

        <input
          type="email"
          placeholder="Your Email"
          style={{
            padding: "15px",
            borderRadius: "8px",
            border: "none",
            fontSize: "16px",
          }}
        />

        <input
          type="tel"
          placeholder="Phone Number"
          style={{
            padding: "15px",
            borderRadius: "8px",
            border: "none",
            fontSize: "16px",
          }}
        />

        <textarea
          placeholder="Your Message"
          rows={5}
          style={{
            padding: "15px",
            borderRadius: "8px",
            border: "none",
            fontSize: "16px",
          }}
        />

        <button
          type="submit"
          style={{
            background: "#22c55e",
            color: "#000",
            padding: "15px",
            border: "none",
            borderRadius: "8px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          🚀 Send Message
        </button>
      </form>
    </section>
  );
}
