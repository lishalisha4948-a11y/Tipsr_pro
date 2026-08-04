"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        background: "#08111f",
        padding: "18px 30px",
        borderBottom: "1px solid #1f2937",
        zIndex: 100,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            color: "#22c55e",
            margin: 0,
            fontWeight: "bold",
          }}
        >
          🚀 TipsR Pro
        </h2>

        <nav
          style={{
            display: "flex",
            gap: "18px",
            flexWrap: "wrap",
          }}
        >
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
