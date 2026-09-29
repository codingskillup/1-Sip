"use client";

import Image from "next/image";
import Link from "next/link";

const C = {
  ocean: "#0284c7",
  oceanDark: "#0369a1",
  aqua: "#00b4d8",
  cyanGlow: "#38bdf8",
  navyDeep: "#041b2f",
  navyDarker: "#020f1c",
  textLight: "#f0f9ff",
  textMuted: "#94a3b8",
  borderLight: "rgba(255, 255, 255, 0.08)",
  borderAqua: "rgba(0, 180, 216, 0.25)",
};

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products & Sizes", href: "/products" },
  { label: "Contact & Order", href: "/contact" },
];

const bottleSizes = [
  { size: "500ml Pocket Bottle", desc: "For travel, workouts & daily refresh", href: "/products" },
  { size: "1.5L Family Bottle", desc: "Ideal for meals & family hydration", href: "/products" },
  { size: "19L Dispenser Gallon", desc: "For homes, offices & commercial setups", href: "/products" },
];

export default function Footer() {
  return (
    <footer style={{ position: "relative", background: C.navyDeep, overflow: "hidden", color: C.textLight }}>
      {/* ── Top Ambient Shimmer Border ── */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: `linear-gradient(90deg, transparent 0%, ${C.aqua} 50%, transparent 100%)`,
          boxShadow: `0 0 16px ${C.aqua}`,
          zIndex: 10,
        }}
      />

      {/* ── Ambient Radial Glows in the Background ── */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          left: "20%",
          width: 500,
          height: 400,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(0, 180, 216, 0.12) 0%, transparent 70%)`,
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: 600,
          height: 500,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(2, 132, 199, 0.1) 0%, transparent 70%)`,
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      {/* ── Pre-Footer Floating CTA Card (Luxury Framed Width) ── */}
      <div
        style={{
          width: "min(90%, 1280px)",
          margin: "0 auto",
          padding: "56px 0 0",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg, rgba(2, 132, 199, 0.22) 0%, rgba(4, 27, 47, 0.95) 100%)",
            border: `1px solid ${C.borderAqua}`,
            borderRadius: 24,
            padding: "44px 52px",
            boxShadow: "0 24px 56px rgba(0, 0, 0, 0.35)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 28,
          }}
        >
          <div style={{ maxWidth: 680 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(0, 180, 216, 0.15)",
                border: "1px solid rgba(0, 180, 216, 0.35)",
                padding: "5px 16px",
                borderRadius: 20,
                fontSize: 12,
                fontWeight: 800,
                color: C.aqua,
                textTransform: "uppercase",
                letterSpacing: 1.2,
                marginBottom: 14,
              }}
            >
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#25d366" }} />
              Fresh Batches Bottled & Dispatched Daily
            </div>
            <h3 style={{ margin: "0 0 10px", fontSize: "clamp(24px, 3.2vw, 34px)", fontWeight: 900, color: "#ffffff", letterSpacing: -0.6 }}>
              Ready to Taste Nature in Every Sip?
            </h3>
            <p style={{ margin: 0, fontSize: 15.5, color: "#cbd5e1", lineHeight: 1.65 }}>
              Order genuine 1 Sip Natural Mineral Water for homes, offices, schools, and corporate events across Fort Abbas & Punjab.
            </p>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center" }}>
            <Link
              href="https://wa.me/923126016060?text=Hello%201%20Sip,%20I%20would%20like%20to%20order%20water%20bottles."
              target="_blank"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                padding: "15px 30px",
                borderRadius: 14,
                background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                color: "#ffffff",
                fontSize: 15,
                fontWeight: 800,
                textDecoration: "none",
                boxShadow: "0 8px 24px rgba(16, 185, 129, 0.35)",
                transition: "transform 0.2s ease",
              }}
            >
              <WhatsAppSVG />
              <span>Order on WhatsApp</span>
            </Link>

            <Link
              href="tel:+923126016060"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 26px",
                borderRadius: 14,
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                color: "#ffffff",
                fontSize: 15,
                fontWeight: 700,
                textDecoration: "none",
                transition: "background 0.2s ease",
              }}
            >
              <span>📞 0312 6016060</span>
            </Link>
          </div>
        </div>
      </div>

      {/* ── Main Footer Grid (Luxury Framed Width) ── */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "min(90%, 1280px)",
          margin: "0 auto",
          padding: "68px 0 40px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 48,
            marginBottom: 56,
          }}
        >
          {/* Column 1: Brand Info */}
          <div>
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 14,
                textDecoration: "none",
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  width: 54,
                  height: 54,
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(0, 180, 216, 0.25) 0%, rgba(2, 132, 199, 0.05) 100%)",
                  border: "1.5px solid rgba(0, 180, 216, 0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 24px rgba(0, 180, 216, 0.25)",
                }}
              >
                <Image
                  src="/images/oneSipLogo.png"
                  alt="1 Sip Logo"
                  width={48}
                  height={48}
                  style={{ width: "90%", height: "90%", objectFit: "contain" }}
                />
              </div>
              <div>
                <div style={{ color: "#ffffff", fontSize: 20, fontWeight: 900, lineHeight: 1.1, letterSpacing: -0.5 }}>
                  1 Sip
                </div>
                <div style={{ color: C.aqua, fontSize: 11, letterSpacing: 1.4, textTransform: "uppercase", fontWeight: 700 }}>
                  Natural Mineral Water
                </div>
              </div>
            </Link>

            <p style={{ color: "#94a3b8", fontSize: 14.5, lineHeight: 1.7, margin: "0 0 22px", maxWidth: 320 }}>
              Rooted in the pristine essence of Cholistan — delivering clean, refreshing, and scientifically balanced drinking water to homes and workplaces.
            </p>

            {/* Purity Verification Pills */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { icon: "💧", text: "Multi-Stage RO & UV Purification" },
                { icon: "🛡️", text: "Food-Grade BPA-Free Bottling" },
                { icon: "🌿", text: "Naturally Balanced Mineral Content" },
              ].map((b) => (
                <div
                  key={b.text}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 13,
                    color: "#cbd5e1",
                    background: "rgba(255, 255, 255, 0.04)",
                    padding: "6px 12px",
                    borderRadius: 8,
                    border: "1px solid rgba(255, 255, 255, 0.07)",
                  }}
                >
                  <span>{b.icon}</span>
                  <span>{b.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <div
              style={{
                color: C.aqua,
                fontSize: 12.5,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: 1.5,
                marginBottom: 22,
              }}
            >
              Explore 1 Sip
            </div>
            <nav style={{ display: "flex", flexDirection: "column", gap: 13 }}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    color: "#cbd5e1",
                    textDecoration: "none",
                    fontSize: 15,
                    fontWeight: 600,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    transition: "all 0.2s ease",
                  }}
                >
                  <span style={{ color: C.aqua, fontSize: 13 }}>›</span>
                  <span>{link.label}</span>
                </Link>
              ))}
            </nav>

            <div style={{ marginTop: 26, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <div style={{ color: "#94a3b8", fontSize: 12, marginBottom: 6 }}>Parent Organization</div>
              <div style={{ color: "#ffffff", fontSize: 14.5, fontWeight: 800 }}>
                🏢 Mian Rayan Traders
              </div>
            </div>
          </div>

          {/* Column 3: Products */}
          <div>
            <div
              style={{
                color: C.aqua,
                fontSize: 12.5,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: 1.5,
                marginBottom: 22,
              }}
            >
              Bottle Sizes
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {bottleSizes.map((b) => (
                <Link
                  key={b.size}
                  href={b.href}
                  style={{
                    textDecoration: "none",
                    padding: "12px 16px",
                    borderRadius: 12,
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.07)",
                    transition: "background 0.2s ease",
                  }}
                >
                  <div style={{ color: "#ffffff", fontSize: 14.5, fontWeight: 800 }}>{b.size}</div>
                  <div style={{ color: "#94a3b8", fontSize: 12.5, marginTop: 2 }}>{b.desc}</div>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4: Contact & Socials */}
          <div>
            <div
              style={{
                color: C.aqua,
                fontSize: 12.5,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: 1.5,
                marginBottom: 22,
              }}
            >
              Plant & Depot Contact
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
              <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span style={{ fontSize: 16, flexShrink: 0 }}>📍</span>
                <span style={{ color: "#cbd5e1", fontSize: 14, lineHeight: 1.55 }}>
                  Commercial Market, Ahmed Garden, Fort Abbas, Punjab, Pakistan
                </span>
              </div>

              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <span style={{ fontSize: 16, flexShrink: 0 }}>☎️</span>
                <Link
                  href="tel:+923126016060"
                  style={{ color: "#ffffff", fontSize: 15, fontWeight: 800, textDecoration: "none" }}
                >
                  0312 6016060
                </Link>
              </div>

              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <span style={{ fontSize: 16, flexShrink: 0 }}>🕒</span>
                <span style={{ color: "#cbd5e1", fontSize: 13.5 }}>
                  Mon – Sun: 8:00 AM – 10:00 PM
                </span>
              </div>

              {/* Social Media Links */}
              <div style={{ marginTop: 10 }}>
                <div style={{ color: "#94a3b8", fontSize: 12, marginBottom: 10, fontWeight: 700 }}>
                  Follow Us Online:
                </div>
                <div style={{ display: "flex", gap: 10 }}>
                  {[
                    { label: "Facebook", icon: <FacebookSVG /> },
                    { label: "Instagram", icon: <InstagramSVG /> },
                    { label: "TikTok", icon: <TikTokSVG /> },
                    { label: "YouTube", icon: <YoutubeSVG /> },
                  ].map((s) => (
                    <Link
                      key={s.label}
                      href="#"
                      title={s.label}
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        background: "rgba(255, 255, 255, 0.06)",
                        border: "1px solid rgba(255, 255, 255, 0.12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#ffffff",
                        textDecoration: "none",
                        transition: "all 0.2s ease",
                      }}
                    >
                      {s.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Copyright Bar ── */}
        <div
          style={{
            borderTop: `1px solid ${C.borderLight}`,
            paddingTop: 28,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div style={{ color: "#94a3b8", fontSize: 13.5 }}>
            © {new Date().getFullYear()} 1 Sip Natural Mineral Water. Produced & distributed by Mian Rayan Traders.
          </div>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontSize: 13.5,
              fontWeight: 700,
              color: C.aqua,
            }}
          >
            <span>Pure Nature in Every Sip</span>
            <span style={{ color: "#94a3b8" }}>·</span>
            <span>Proudly Pakistani 🇵🇰</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppSVG() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.031 2C6.496 2 2 6.5 2 12.043c0 1.933.548 3.738 1.498 5.277L2 22l4.828-1.464a9.972 9.972 0 0 0 5.203 1.464c5.534 0 10.03-4.5 10.03-10.043C22.062 6.5 17.565 2 12.031 2zm5.792 14.28c-.244.686-1.22 1.258-1.996 1.424-.53.112-1.224.202-3.555-.764-2.983-1.238-4.908-4.28-5.056-4.478-.149-.197-1.205-1.604-1.205-3.058 0-1.455.76-2.171 1.03-2.464.27-.294.593-.367.791-.367.199 0 .398.002.571.011.185.009.432-.07.674.512.248.597.843 2.057.917 2.207.074.15.124.326.025.524-.099.198-.149.322-.297.495-.149.174-.313.388-.447.521-.148.148-.303.31-.13.608.173.297.771 1.272 1.654 2.058 1.135 1.011 2.091 1.324 2.389 1.472.297.149.471.124.645-.074.173-.198.743-.866.941-1.163.198-.297.397-.248.67-.149.272.099 1.732.817 2.03.966.297.148.496.223.57.347.074.124.074.72-.17 1.406z" />
    </svg>
  );
}

function FacebookSVG() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.5 22V13.5H16.4L16.8 10.2H13.5V8.1C13.5 7.1 13.8 6.5 15.2 6.5H17V3.5C16.7 3.4 15.6 3.3 14.4 3.3C11.8 3.3 10.1 4.8 10.1 7.8V10.2H7.2V13.5H10.1V22H13.5Z" />
    </svg>
  );
}

function InstagramSVG() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokSVG() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M15.2 3C15.5 5.2 16.7 6.5 19 6.7V9.6C17.6 9.7 16.3 9.3 15.2 8.5V14.3C15.2 18 12.7 21 9.1 21C5.8 21 3 18.4 3 15C3 11.3 6 8.7 9.9 9V12C8.2 11.7 6.1 12.7 6.1 15C6.1 16.7 7.4 18 9.1 18C11.2 18 12.2 16.3 12.2 14.3V3H15.2Z" />
    </svg>
  );
}

function YoutubeSVG() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12C22 9.8 21.8 8.4 21.6 7.7C21.4 6.9 20.8 6.3 20 6.1C18.6 5.7 12 5.7 12 5.7C12 5.7 5.4 5.7 4 6.1C3.2 6.3 2.6 6.9 2.4 7.7C2.2 8.4 2 9.8 2 12C2 14.2 2.2 15.6 2.4 16.3C2.6 17.1 3.2 17.7 4 17.9C5.4 18.3 12 18.3 12 18.3C12 18.3 18.6 18.3 20 17.9C20.8 17.7 21.4 17.1 21.6 16.3C21.8 15.6 22 14.2 22 12Z" />
      <path d="M10 9L16 12L10 15V9Z" fill="white" />
    </svg>
  );
}
