"use client";

import Image from "next/image";
import Link from "next/link";

const C = { ocean: "#005f9e", aqua: "#00b4d8", navy: "#012a4a", white: "#ffffff" };

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer style={{ position: "relative", background: C.navy, overflow: "hidden" }}>
      {/* Wave top */}
      <div style={{ height: 52, overflow: "hidden" }}>
        <svg viewBox="0 0 1440 52" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
          <path d="M0,52 L0,26 C360,6 720,46 1080,21 C1260,11 1380,31 1440,26 L1440,52 Z" fill={C.ocean} />
        </svg>
      </div>

      {/* Aqua top accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: `linear-gradient(90deg, ${C.ocean}, ${C.aqua}, ${C.ocean})`,
        }}
      />

      {/* Glow blobs */}
      <div
        style={{
          position: "absolute",
          right: "-6%",
          top: "10%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${C.aqua}10 0%, transparent 68%)`,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "-4%",
          bottom: "5%",
          width: 380,
          height: 380,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${C.aqua}08 0%, transparent 68%)`,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "min(93%, 1480px)",
          margin: "0 auto",
          padding: "52px 0 30px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr",
            gap: 52,
            marginBottom: 44,
          }}
        >
          {/* Brand */}
          <div>
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                textDecoration: "none",
                marginBottom: 18,
              }}
            >
              <div
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.08)",
                  border: "1.5px solid rgba(255,255,255,0.16)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                <Image src="/images/oneSipLogo.png" alt="1 Sip" width={46} height={46} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
              </div>
              <div>
                <div style={{ color: C.white, fontSize: 18, fontWeight: 800, lineHeight: 1.1 }}>1 Sip</div>
                <div style={{ color: C.aqua, fontSize: 10.5, letterSpacing: 1, textTransform: "uppercase", fontWeight: 600 }}>
                  Natural Water
                </div>
              </div>
            </Link>
            <p style={{ color: "rgba(255,255,255,0.42)", fontSize: 14, lineHeight: 1.75, maxWidth: 300, margin: "0 0 22px" }}>
              Pure water inspired by the golden landscapes of Cholistan —
              made for everyday refreshment, home, office and travel.
            </p>
            {/* Tagline */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "7px 16px",
                borderRadius: 6,
                background: `${C.aqua}18`,
                border: `1px solid ${C.aqua}30`,
                color: C.aqua,
                fontSize: 12,
                fontWeight: 700,
                fontStyle: "italic",
              }}
            >
              💧 Nature in Every Sip
            </div>

            {/* Social icons */}
            <div style={{ display: "flex", gap: 9, marginTop: 18 }}>
              {[
                { l: "FB", col: "#1877f2" },
                { l: "IG", col: "#e1306c" },
                { l: "TT", col: "#ffffff" },
                { l: "YT", col: "#ff4444" },
              ].map((s) => (
                <Link
                  key={s.l}
                  href="#"
                  title={s.l}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: `${s.col}18`,
                    border: `1px solid ${s.col}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: s.col,
                    textDecoration: "none",
                    fontSize: 11,
                    fontWeight: 800,
                  }}
                >
                  {s.l}
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div style={{ color: `${C.aqua}70`, fontSize: 10.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.8, marginBottom: 18 }}>
              Navigation
            </div>
            <nav style={{ display: "flex", flexDirection: "column", gap: 11 }}>
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{ color: "rgba(255,255,255,0.45)", textDecoration: "none", fontSize: 14, fontWeight: 500 }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <div style={{ color: `${C.aqua}70`, fontSize: 10.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.8, marginBottom: 18 }}>
              Contact
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
              {[
                { icon: "📍", text: "Commercial Market, Ahmed Garden, Fort Abbas" },
                { icon: "☎", text: "0312 6016060" },
                { icon: "🏢", text: "Mian Rayan Traders" },
              ].map((item) => (
                <div key={item.text} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <span style={{ fontSize: 14, flexShrink: 0, marginTop: 1 }}>{item.icon}</span>
                  <span style={{ color: "rgba(255,255,255,0.42)", fontSize: 13, lineHeight: 1.55 }}>{item.text}</span>
                </div>
              ))}
              <Link
                href="https://wa.me/923126016060"
                target="_blank"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  padding: "9px 16px",
                  borderRadius: 7,
                  background: "#25d36618",
                  border: "1px solid #25d36630",
                  color: "#4cd88a",
                  textDecoration: "none",
                  fontSize: 13,
                  fontWeight: 700,
                  marginTop: 4,
                }}
              >
                💬 WhatsApp Order
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: 22,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 10,
          }}
        >
          <span style={{ color: "rgba(255,255,255,0.20)", fontSize: 12 }}>
            © {new Date().getFullYear()} 1 Sip Natural Water · Mian Rayan Traders · All rights reserved.
          </span>
          <span
            style={{
              backgroundImage: `linear-gradient(90deg, ${C.aqua}, ${C.ocean})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontSize: 12,
              fontWeight: 700,
            }}
          >
            Pure · Fresh · Natural
          </span>
        </div>
      </div>
    </footer>
  );
}
