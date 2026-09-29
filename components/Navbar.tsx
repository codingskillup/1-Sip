"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

// ── Water brand colors ──────────────────────────────────────
const C = {
  ocean: "#005f9e",
  aqua: "#00b4d8",
  navy: "#012a4a",
  skyBg: "#e8f6fb",
  white: "#ffffff",
};

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);
  const pathname = usePathname();
  const ticking = useRef(false);

  useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth <= 1000);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navH = mobile ? 62 : 76;

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
          willChange: "background, box-shadow",
          background: scrolled ? C.white : "rgba(255,255,255,0.95)",
          backdropFilter: scrolled ? "none" : "blur(20px)",
          WebkitBackdropFilter: scrolled ? "none" : "blur(20px)",
          borderBottom: `1px solid ${scrolled ? "rgba(0,95,158,0.12)" : "rgba(0,95,158,0.06)"}`,
          boxShadow: scrolled ? "0 2px 24px rgba(0,95,158,0.09)" : "none",
          transition:
            "background 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
        }}
      >
        {/* Top aqua line (always visible) */}
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

        <div
          style={{
            width: "min(93%, 1480px)",
            height: "100%",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              textDecoration: "none",
              flexShrink: 0,
            }}
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/images/oneSipLogo.png"
              alt="1 Sip Natural Water"
              width={50}
              height={50}
              priority
              style={{
                width: mobile ? 44 : 50,
                height: mobile ? 44 : 50,
                objectFit: "contain",
              }}
            />
            {!mobile && (
              <div>
                <div
                  style={{
                    color: C.ocean,
                    fontSize: 15,
                    fontWeight: 800,
                    lineHeight: 1.1,
                  }}
                >
                  1 Sip
                </div>
                <div
                  style={{
                    color: C.aqua,
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: 1,
                    textTransform: "uppercase",
                  }}
                >
                  Natural Water
                </div>
              </div>
            )}
          </Link>

          {/* Desktop nav */}
          {!mobile && (
            <nav
              style={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                marginLeft: 44,
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
                      padding: "8px 17px",
                      borderRadius: 8,
                      textDecoration: "none",
                      fontSize: 14.5,
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? C.ocean : "#3d6580",
                      background: isActive
                        ? "rgba(0,95,158,0.07)"
                        : "transparent",
                      transition: "all 0.18s ease",
                    }}
                  >
                    {link.label}
                    {isActive && (
                      <span
                        style={{
                          position: "absolute",
                          bottom: 3,
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: 22,
                          height: 2.5,
                          borderRadius: 10,
                          background: `linear-gradient(90deg, ${C.ocean}, ${C.aqua})`,
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>
          )}

          {/* Desktop right */}
          {!mobile && (
            <div
              style={{
                marginLeft: "auto",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              {/* Social icons */}
              <SocialBtn href="#" title="Facebook" col="#1877f2"><FacebookSVG /></SocialBtn>
              <SocialBtn href="#" title="Instagram" col="#e1306c"><InstagramSVG /></SocialBtn>
              <SocialBtn href="#" title="TikTok" col="#010101"><TikTokSVG /></SocialBtn>
              <SocialBtn href="#" title="YouTube" col="#ff0000"><YoutubeSVG /></SocialBtn>

              {/* CTA */}
              <Link
                href="/contact"
                style={{
                  marginLeft: 10,
                  padding: "10px 22px",
                  borderRadius: 8,
                  background: C.ocean,
                  color: C.white,
                  fontWeight: 700,
                  fontSize: 13.5,
                  textDecoration: "none",
                  boxShadow: "0 4px 16px rgba(0,95,158,0.28)",
                  letterSpacing: 0.2,
                  whiteSpace: "nowrap",
                  transition: "background 0.18s ease",
                }}
              >
                Order Now
              </Link>
            </div>
          )}

          {/* Mobile hamburger */}
          {mobile && (
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((v) => !v)}
              style={{
                marginLeft: "auto",
                width: 42,
                height: 42,
                borderRadius: 8,
                border: `1px solid rgba(0,95,158,0.14)`,
                background: "rgba(0,95,158,0.05)",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 5,
              }}
            >
              {menuOpen ? (
                <span style={{ color: C.ocean, fontSize: 20, lineHeight: 1 }}>✕</span>
              ) : (
                <>
                  <span style={{ width: 20, height: 2, background: C.ocean, borderRadius: 2 }} />
                  <span style={{ width: 14, height: 2, background: C.aqua, borderRadius: 2 }} />
                  <span style={{ width: 20, height: 2, background: C.ocean, borderRadius: 2 }} />
                </>
              )}
            </button>
          )}
        </div>
      </header>

      {/* Height spacer */}
      <div style={{ height: navH, flexShrink: 0 }} />

      {/* Mobile menu */}
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
            background: "rgba(0,42,74,0.35)",
            backdropFilter: "blur(6px)",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: C.white,
              borderBottom: `3px solid ${C.aqua}`,
              padding: "18px 5% 24px",
              boxShadow: "0 16px 48px rgba(0,95,158,0.14)",
            }}
          >
            <nav style={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      padding: "14px 16px",
                      borderRadius: 8,
                      textDecoration: "none",
                      fontSize: 15.5,
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? C.ocean : "#3d6580",
                      background: isActive ? "rgba(0,95,158,0.07)" : "transparent",
                      borderLeft: isActive ? `3px solid ${C.aqua}` : "3px solid transparent",
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <div
              style={{
                display: "flex",
                gap: 8,
                marginTop: 18,
                paddingTop: 16,
                borderTop: "1px solid rgba(0,95,158,0.08)",
              }}
            >
              <SocialBtn href="#" title="Facebook" col="#1877f2"><FacebookSVG /></SocialBtn>
              <SocialBtn href="#" title="Instagram" col="#e1306c"><InstagramSVG /></SocialBtn>
              <SocialBtn href="#" title="TikTok" col="#010101"><TikTokSVG /></SocialBtn>
              <SocialBtn href="#" title="YouTube" col="#ff0000"><YoutubeSVG /></SocialBtn>
            </div>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                marginTop: 12,
                padding: "14px",
                borderRadius: 8,
                background: C.ocean,
                color: C.white,
                fontWeight: 700,
                fontSize: 15,
                textDecoration: "none",
                textAlign: "center",
                boxShadow: "0 4px 16px rgba(0,95,158,0.25)",
              }}
            >
              Order Now
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

function SocialBtn({ href, title, col, children }: { href: string; title: string; col: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      target="_blank"
      title={title}
      style={{
        width: 34,
        height: 34,
        borderRadius: "50%",
        background: `${col}12`,
        border: `1px solid ${col}28`,
        color: col,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
        flexShrink: 0,
      }}
    >
      {children}
    </Link>
  );
}

function FacebookSVG() {
  return <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 22V13.5H16.4L16.8 10.2H13.5V8.1C13.5 7.1 13.8 6.5 15.2 6.5H17V3.5C16.7 3.4 15.6 3.3 14.4 3.3C11.8 3.3 10.1 4.8 10.1 7.8V10.2H7.2V13.5H10.1V22H13.5Z" /></svg>;
}
function InstagramSVG() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>;
}
function TikTokSVG() {
  return <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M15.2 3C15.5 5.2 16.7 6.5 19 6.7V9.6C17.6 9.7 16.3 9.3 15.2 8.5V14.3C15.2 18 12.7 21 9.1 21C5.8 21 3 18.4 3 15C3 11.3 6 8.7 9.9 9V12C8.2 11.7 6.1 12.7 6.1 15C6.1 16.7 7.4 18 9.1 18C11.2 18 12.2 16.3 12.2 14.3V3H15.2Z" /></svg>;
}
function YoutubeSVG() {
  return <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12C22 9.8 21.8 8.4 21.6 7.7C21.4 6.9 20.8 6.3 20 6.1C18.6 5.7 12 5.7 12 5.7C12 5.7 5.4 5.7 4 6.1C3.2 6.3 2.6 6.9 2.4 7.7C2.2 8.4 2 9.8 2 12C2 14.2 2.2 15.6 2.4 16.3C2.6 17.1 3.2 17.7 4 17.9C5.4 18.3 12 18.3 12 18.3C12 18.3 18.6 18.3 20 17.9C20.8 17.7 21.4 17.1 21.6 16.3C21.8 15.6 22 14.2 22 12Z" /><path d="M10 9L16 12L10 15V9Z" fill="white" /></svg>;
}
