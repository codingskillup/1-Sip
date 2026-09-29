"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const C = {
  ocean: "#0284c7",
  oceanDark: "#0369a1",
  aqua: "#00b4d8",
  navy: "#0c2340",
  textMuted: "#475569",
  white: "#ffffff",
};

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Contact & Order", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);
  const pathname = usePathname();
  const ticking = useRef(false);

  useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth <= 1040);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 25);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    setScrolled(window.scrollY > 25);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navH = mobile ? 68 : 80;

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: navH,
          background: scrolled ? "rgba(255, 255, 255, 0.96)" : "rgba(255, 255, 255, 0.88)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: `1px solid ${scrolled ? "rgba(2, 132, 199, 0.15)" : "rgba(2, 132, 199, 0.08)"}`,
          boxShadow: scrolled ? "0 8px 30px rgba(2, 132, 199, 0.08)" : "none",
          transition: "all 0.25s ease",
        }}
      >
        {/* Top Water Gradient Bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background: `linear-gradient(90deg, #0284c7 0%, #00b4d8 50%, #38bdf8 100%)`,
          }}
        />

        <div
          style={{
            width: "min(90%, 1280px)",
            height: "100%",
            margin: "0 auto",
            padding: mobile ? "0 16px" : 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              textDecoration: "none",
              flexShrink: 0,
            }}
            onClick={() => setMenuOpen(false)}
          >
            <div
              style={{
                width: mobile ? 42 : 50,
                height: mobile ? 42 : 50,
                borderRadius: "50%",
                background: "linear-gradient(135deg, rgba(0, 180, 216, 0.15) 0%, rgba(2, 132, 199, 0.05) 100%)",
                border: "1.5px solid rgba(0, 180, 216, 0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 10px rgba(0, 180, 216, 0.15)",
              }}
            >
              <Image
                src="/images/oneSipLogo.png"
                alt="1 Sip Natural Water"
                width={46}
                height={46}
                priority
                style={{
                  width: "88%",
                  height: "88%",
                  objectFit: "contain",
                }}
              />
            </div>
            <div>
              <div
                style={{
                  color: C.navy,
                  fontSize: mobile ? 16 : 18.5,
                  fontWeight: 900,
                  lineHeight: 1.1,
                  letterSpacing: -0.5,
                }}
              >
                1 Sip
              </div>
              <div
                style={{
                  color: C.ocean,
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: 1.2,
                  textTransform: "uppercase",
                }}
              >
                Natural Mineral Water
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          {!mobile && (
            <nav
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                background: "rgba(2, 132, 199, 0.04)",
                padding: "4px 8px",
                borderRadius: 30,
                border: "1px solid rgba(2, 132, 199, 0.08)",
              }}
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{
                      position: "relative",
                      padding: "8px 18px",
                      borderRadius: 24,
                      textDecoration: "none",
                      fontSize: 14,
                      fontWeight: isActive ? 800 : 500,
                      color: isActive ? "#ffffff" : C.textMuted,
                      background: isActive ? "linear-gradient(135deg, #0284c7 0%, #00b4d8 100%)" : "transparent",
                      boxShadow: isActive ? "0 4px 14px rgba(2, 132, 199, 0.28)" : "none",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          )}

          {/* Desktop Right Actions */}
          {!mobile && (
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <Link
                href="tel:+923126016060"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  color: C.navy,
                  fontSize: 13.5,
                  fontWeight: 700,
                  textDecoration: "none",
                  padding: "8px 14px",
                  borderRadius: 10,
                  background: "rgba(2, 132, 199, 0.06)",
                  border: "1px solid rgba(2, 132, 199, 0.12)",
                }}
              >
                <span>📞</span>
                <span>0312 6016060</span>
              </Link>

              <Link
                href="/contact"
                style={{
                  padding: "10px 22px",
                  borderRadius: 10,
                  background: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
                  color: "#ffffff",
                  fontWeight: 800,
                  fontSize: 13.5,
                  textDecoration: "none",
                  boxShadow: "0 6px 20px rgba(2, 132, 199, 0.3)",
                  letterSpacing: 0.2,
                  whiteSpace: "nowrap",
                  transition: "transform 0.18s ease, box-shadow 0.18s ease",
                }}
              >
                Order Bottles →
              </Link>
            </div>
          )}

          {/* Mobile Hamburger */}
          {mobile && (
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((v) => !v)}
              style={{
                width: 44,
                height: 44,
                borderRadius: 10,
                border: "1px solid rgba(2, 132, 199, 0.18)",
                background: "rgba(2, 132, 199, 0.06)",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 5,
              }}
            >
              {menuOpen ? (
                <span style={{ color: C.ocean, fontSize: 22, lineHeight: 1 }}>✕</span>
              ) : (
                <>
                  <span style={{ width: 22, height: 2.5, background: C.ocean, borderRadius: 2 }} />
                  <span style={{ width: 16, height: 2.5, background: C.aqua, borderRadius: 2 }} />
                  <span style={{ width: 22, height: 2.5, background: C.ocean, borderRadius: 2 }} />
                </>
              )}
            </button>
          )}
        </div>
      </header>

      {/* Spacer to prevent layout shift */}
      <div style={{ height: navH, flexShrink: 0 }} />

      {/* Mobile Drawer Menu */}
      {mobile && menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: "fixed",
            top: navH,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 999,
            background: "rgba(4, 27, 47, 0.45)",
            backdropFilter: "blur(10px)",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#ffffff",
              borderBottom: `3px solid ${C.aqua}`,
              padding: "20px 6% 28px",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
            }}
          >
            <nav style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      padding: "14px 18px",
                      borderRadius: 10,
                      textDecoration: "none",
                      fontSize: 16,
                      fontWeight: isActive ? 800 : 500,
                      color: isActive ? "#ffffff" : C.navy,
                      background: isActive ? "linear-gradient(135deg, #0284c7 0%, #00b4d8 100%)" : "rgba(2, 132, 199, 0.04)",
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div style={{ marginTop: 18, paddingTop: 16, borderTop: "1px solid rgba(2, 132, 199, 0.1)" }}>
              <div style={{ display: "flex", gap: 10, marginBottom: 12 }}>
                <Link
                  href="tel:+923126016060"
                  style={{
                    flex: 1,
                    textAlign: "center",
                    padding: "12px",
                    borderRadius: 10,
                    background: "rgba(2, 132, 199, 0.08)",
                    color: C.navy,
                    fontWeight: 700,
                    fontSize: 14,
                    textDecoration: "none",
                  }}
                >
                  📞 Call Hotline
                </Link>
                <Link
                  href="https://wa.me/923126016060"
                  target="_blank"
                  style={{
                    flex: 1,
                    textAlign: "center",
                    padding: "12px",
                    borderRadius: 10,
                    background: "#25d366",
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: 14,
                    textDecoration: "none",
                  }}
                >
                  💬 WhatsApp
                </Link>
              </div>

              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  padding: "14px",
                  borderRadius: 10,
                  background: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
                  color: "#ffffff",
                  fontWeight: 800,
                  fontSize: 15,
                  textDecoration: "none",
                  textAlign: "center",
                  boxShadow: "0 6px 20px rgba(2, 132, 199, 0.28)",
                }}
              >
                Order Bottles Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
