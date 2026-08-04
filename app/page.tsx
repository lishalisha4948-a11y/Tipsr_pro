import WhatsApp from "./components/WhatsApp";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <Navbar />

      <main
        style={{
          background: "#0f172a",
          color: "#ffffff",
          minHeight: "100vh",
        }}
      >
        <Hero />

        <Services />

         <About />
         <Portfolio />
        <Testimonials />
        <Contact />
        <footer
          style={{
            background: "#111827",
            padding: "30px",
            textAlign: "center",
            marginTop: "40px",
          }}
        >
          © 2026 TipsR Pro | Designed by Ranveer
        </footer>
      </main>
      <WhatsApp />
    </>
  );
}
