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
        action="https://formsubmit.co/lishalisha4948@gmail.com"
        method="POST"
        style={{
          maxWidth: "600px",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_subject" value="New Contact from TipsR Pro" />
        <input type="hidden" name="_next" value="https://tipsr-pro.vercel.app" />

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          required
        />

        <button type="submit">
          🚀 Send Message
        </button>
      </form>
    </section>
  );
}
