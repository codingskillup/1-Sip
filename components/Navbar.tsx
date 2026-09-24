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

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          width: "100%",
          background: "rgba(255,255,255,0.97)",
          backdropFilter: "blur(15px)",
          borderBottom: "1px solid rgba(5,55,105,0.08)",
          boxShadow: "0 5px 20px rgba(0,48,94,0.05)",
        }}
      >
        <div
          style={{
            width: "min(92%, 1760px)",
            height: mobile ? 68 : 102,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Link
            href="#home"
            onClick={() => setMenuOpen(false)}
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
              width={68}
              height={68}
              priority
              style={{
                width: mobile ? 54 : 66,
                height: mobile ? 54 : 66,
                objectFit: "contain",
              }}
            />
          </Link>

          {!mobile && (
            <nav
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 38,
                flex: 1,
                marginLeft: 70,
              }}
            >
              {menuItems.map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    height: 102,
                    textDecoration: "none",
                    color: index === 0 ? "#07883f" : "#073b6e",
                    fontSize: 16,
                    fontWeight: 700,
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.label}

                  {index === 0 && (
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: 22,
                        width: 34,
                        height: 3,
                        margin: "auto",
                        borderRadius: 20,
                        background: "#18a04d",
                      }}
                    />
                  )}
                </Link>
              ))}
            </nav>
          )}

          {!mobile && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginLeft: 35,
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
              onClick={() => setMenuOpen(value => !value)}
              ariaLabel="Menu"
              style={{
                width: 44,
                height: 44,
                marginLeft: "auto",
                border: "none",
                borderRadius: 12,
                background: "#eef7fc",
                color: "#073b6e",
                cursor: "pointer",
                fontSize: menuOpen ? 27 : 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {menuOpen ? (
                "×"
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
                      width: 22,
                      height: 2,
                      borderRadius: 10,
                      background: "#073b6e",
                    }}
                  />

                  <span
                    style={{
                      width: 22,
                      height: 2,
                      borderRadius: 10,
                      background: "#073b6e",
                    }}
                  />

                  <span
                    style={{
                      width: 22,
                      height: 2,
                      borderRadius: 10,
                      background: "#073b6e",
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
          height: mobile ? 68 : 102,
        }}
      />

      {mobile && menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: "fixed",
            top: 68,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 999,
            background: "rgba(2,31,61,0.4)",
            backdropFilter: "blur(6px)",
          }}
        >
          <div
            onClick={event => event.stopPropagation()}
            style={{
              background: "#ffffff",
              padding: "18px 5% 26px",
              borderBottomLeftRadius: 25,
              borderBottomRightRadius: 25,
            }}
          >
            <nav
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              {menuItems.map(item => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    padding: "14px 10px",
                    color: "#073b6e",
                    fontSize: 16,
                    fontWeight: 700,
                    textDecoration: "none",
                    borderBottom: "1px solid #edf2f7",
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div
              style={{
                display: "flex",
                gap: 11,
                marginTop: 20,
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
      ariaLabel="Social Media"
      style={{
        width: 42,
        height: 42,
        borderRadius: "50%",
        background,
        color: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
      }}
    >
      {children}
    </Link>
  );
}

function FacebookIcon() {
  return (
    <svg
      width="19"
      height="19"
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
      width="19"
      height="19"
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
      width="19"
      height="19"
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
      width="20"
      height="20"
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