"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const menuItems = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Products", href: "#products" },
  { label: "Why 1 Sip", href: "#why" },
  { label: "Quality & Purity", href: "#quality" },
  { label: "Our Story", href: "#story" },
  { label: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const checkScreen = () => {
      const value = window.innerWidth <= 1050;

      setMobile(value);

      if (!value) {
        setMenuOpen(false);
      }
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => {
      window.removeEventListener("resize", checkScreen);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleMenuClick = (label: string) => {
    setActive(label);
    setMenuOpen(false);
  };

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          width: "100%",
          zIndex: 1000,
          background: "rgba(255,255,255,0.98)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(5,55,105,0.07)",
          boxShadow: "0 4px 18px rgba(5,50,90,0.04)",
        }}
      >
        <div
          style={{
            width: "min(92%, 1680px)",
            height: mobile ? 66 : 82,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Link
            href="#home"
            onClick={() => handleMenuClick("Home")}
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            <Image
              src="/images/oneSipLogo.png"
              alt="1 Sip Natural Water"
              width={56}
              height={56}
              priority
              style={{
                width: mobile ? 52 : 56,
                height: mobile ? 52 : 56,
                objectFit: "contain",
              }}
            />
          </Link>

          {!mobile && (
            <nav
              style={{
                display: "flex",
                alignItems: "center",
                gap: 30,
                marginLeft: 48,
              }}
            >
              {menuItems.map((item) => {
                const isActive = active === item.label;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => handleMenuClick(item.label)}
                    style={{
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      height: 82,
                      textDecoration: "none",
                      color: isActive ? "#0a8d45" : "#073c70",
                      fontSize: 15,
                      fontWeight: 700,
                      whiteSpace: "nowrap",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {item.label}

                    {isActive && (
                      <span
                        style={{
                          position: "absolute",
                          left: "50%",
                          bottom: 15,
                          width: 30,
                          height: 3,
                          borderRadius: 20,
                          background: "#14a04d",
                          transform: "translateX(-50%)",
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>
          )}

          {!mobile && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginLeft: "auto",
              }}
            >
              <SocialButton href="#" background="#1877f2">
                <FacebookIcon />
              </SocialButton>

              <SocialButton href="#" background="#df296e">
                <InstagramIcon />
              </SocialButton>

              <SocialButton href="#" background="#111111">
                <TikTokIcon />
              </SocialButton>

              <SocialButton href="#" background="#ff0000">
                <YoutubeIcon />
              </SocialButton>
            </div>
          )}

          {mobile && (
            <button
              type="button"
              title="Menu"
              onClick={() => setMenuOpen((value) => !value)}
              style={{
                width: 42,
                height: 42,
                marginLeft: "auto",
                border: "none",
                borderRadius: 11,
                background: "#eef7fc",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {menuOpen ? (
                <span
                  style={{
                    color: "#073c70",
                    fontSize: 28,
                    lineHeight: 1,
                  }}
                >
                  ×
                </span>
              ) : (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 5,
                  }}
                >
                  <span
                    style={{
                      width: 21,
                      height: 2,
                      background: "#073c70",
                      borderRadius: 20,
                    }}
                  />

                  <span
                    style={{
                      width: 21,
                      height: 2,
                      background: "#073c70",
                      borderRadius: 20,
                    }}
                  />

                  <span
                    style={{
                      width: 21,
                      height: 2,
                      background: "#073c70",
                      borderRadius: 20,
                    }}
                  />
                </div>
              )}
            </button>
          )}
        </div>
      </header>

      <div
        style={{
          height: mobile ? 66 : 82,
        }}
      />

      {mobile && menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: "fixed",
            top: 66,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 999,
            background: "rgba(3,30,60,0.38)",
            backdropFilter: "blur(5px)",
          }}
        >
          <div
            onClick={(event) => event.stopPropagation()}
            style={{
              background: "#ffffff",
              padding: "15px 5% 24px",
              borderBottomLeftRadius: 22,
              borderBottomRightRadius: 22,
              boxShadow: "0 20px 40px rgba(5,50,90,0.13)",
            }}
          >
            <nav
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              {menuItems.map((item) => {
                const isActive = active === item.label;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => handleMenuClick(item.label)}
                    style={{
                      padding: "13px 12px",
                      borderRadius: 10,
                      color: isActive ? "#ffffff" : "#073c70",
                      background: isActive ? "#0a8d45" : "transparent",
                      fontSize: 15,
                      fontWeight: 700,
                      textDecoration: "none",
                    }}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginTop: 18,
                paddingTop: 17,
                borderTop: "1px solid #e8eef3",
              }}
            >
              <SocialButton href="#" background="#1877f2">
                <FacebookIcon />
              </SocialButton>

              <SocialButton href="#" background="#df296e">
                <InstagramIcon />
              </SocialButton>

              <SocialButton href="#" background="#111111">
                <TikTokIcon />
              </SocialButton>

              <SocialButton href="#" background="#ff0000">
                <YoutubeIcon />
              </SocialButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function SocialButton({
  href,
  background,
  children,
}: {
  href: string;
  background: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      style={{
        width: 38,
        height: 38,
        borderRadius: "50%",
        flexShrink: 0,
        background,
        color: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
        boxShadow: "0 5px 14px rgba(0,0,0,0.06)",
      }}
    >
      {children}
    </Link>
  );
}

function FacebookIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M13.5 22V13.5H16.4L16.8 10.2H13.5V8.1C13.5 7.1 13.8 6.5 15.2 6.5H17V3.5C16.7 3.4 15.6 3.3 14.4 3.3C11.8 3.3 10.1 4.8 10.1 7.8V10.2H7.2V13.5H10.1V22H13.5Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
      />

      <circle
        cx="12"
        cy="12"
        r="4"
      />

      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M15.2 3C15.5 5.2 16.7 6.5 19 6.7V9.6C17.6 9.7 16.3 9.3 15.2 8.5V14.3C15.2 18 12.7 21 9.1 21C5.8 21 3 18.4 3 15C3 11.3 6 8.7 9.9 9V12C8.2 11.7 6.1 12.7 6.1 15C6.1 16.7 7.4 18 9.1 18C11.2 18 12.2 16.3 12.2 14.3V3H15.2Z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M22 12C22 9.8 21.8 8.4 21.6 7.7C21.4 6.9 20.8 6.3 20 6.1C18.6 5.7 12 5.7 12 5.7C12 5.7 5.4 5.7 4 6.1C3.2 6.3 2.6 6.9 2.4 7.7C2.2 8.4 2 9.8 2 12C2 14.2 2.2 15.6 2.4 16.3C2.6 17.1 3.2 17.7 4 17.9C5.4 18.3 12 18.3 12 18.3C12 18.3 18.6 18.3 20 17.9C20.8 17.7 21.4 17.1 21.6 16.3C21.8 15.6 22 14.2 22 12Z" />

      <path
        d="M10 9L16 12L10 15V9Z"
        fill="#ffffff"
      />
    </svg>
  );
}