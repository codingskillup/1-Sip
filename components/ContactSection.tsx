"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ContactSection() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setMobile(window.innerWidth <= 900);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => {
      window.removeEventListener("resize", checkScreen);
    };
  }, []);

  return (
    <section
      id="contact"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#f4fbff",
      }}
    >
      <div
        style={{
          width: "min(92%, 1420px)",
          margin: "0 auto",
          paddingTop: mobile ? 55 : 80,
          paddingBottom: mobile ? 55 : 80,
        }}
      >
        <div
          style={{
            textAlign: "center",
            maxWidth: 720,
            margin: "0 auto 38px",
          }}
        >
          <div
            style={{
              color: "#0b9346",
              fontSize: 13,
              fontWeight: 850,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              marginBottom: 10,
            }}
          >
            Contact 1 Sip
          </div>

          <h2
            style={{
              margin: 0,
              color: "#073f78",
              fontSize: mobile ? 35 : 48,
              lineHeight: 1.08,
              fontWeight: 850,
            }}
          >
            Fresh Water

            <span
              style={{
                display: "block",
                color: "#0b9346",
              }}
            >
              Closer to You
            </span>
          </h2>

          <p
            style={{
              margin: "15px auto 0",
              color: "#657f94",
              fontSize: mobile ? 14 : 15,
              lineHeight: 1.7,
            }}
          >
            Contact 1 Sip Natural Water for product information, orders and
            general enquiries.
          </p>
        </div>

        <div
          style={{
            position: "relative",
            minHeight: mobile ? 850 : 560,
            overflow: "hidden",
            borderRadius: mobile ? 24 : 32,
            background: "#ffffff",
            border: "1px solid rgba(7,63,120,0.06)",
            boxShadow: "0 24px 65px rgba(4,65,105,0.10)",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 0,
            }}
          >
            <Image
              src="/images/aboutCholistan.png"
              alt="Cholistan landscape"
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>

          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 1,
              background: mobile
                ? "rgba(255,255,255,0.10)"
                : "rgba(255,255,255,0.04)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              position: "absolute",
              zIndex: 3,
              left: mobile ? 0 : 0,
              top: mobile ? 20 : 0,
              width: mobile ? "100%" : "50%",
              height: mobile ? 470 : "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: mobile ? 18 : 30,
              paddingRight: mobile ? 18 : 30,
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                width: mobile ? "92%" : 460,
                maxWidth: 460,
                padding: mobile ? 24 : 34,
                borderRadius: mobile ? 22 : 28,
                background: "rgba(255,255,255,0.95)",
                boxShadow: "0 20px 50px rgba(3,45,85,0.15)",
              }}
            >
              <div
                style={{
                  color: "#0b9346",
                  fontSize: mobile ? 16 : 18,
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: 2.2,
                  marginBottom: 14,
                  textAlign: "center",
                }}
              >
                Get in Touch
              </div>

              <h3
                style={{
                  margin: 0,
                  color: "#073f78",
                  fontSize: mobile ? 27 : 38,
                  lineHeight: 1.12,
                  fontWeight: 850,
                  textAlign: "left",
                }}
              >
                1 Sip Natural Water
              </h3>

              <p
                style={{
                  margin: "10px 0 0",
                  color: "#71889b",
                  fontSize: mobile ? 14 : 15,
                }}
              >
                Nature in Every Sip
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 15,
                  marginTop: 28,
                }}
              >
                <ContactItem
                  icon="📍"
                  title="Location"
                  text="Commercial Market, Ahmed Garden, Fort Abbas"
                />

                <ContactItem
                  icon="☎"
                  title="Phone"
                  text="0312 6016060"
                />

                <ContactItem
                  icon="💬"
                  title="WhatsApp"
                  text="0312 6016060"
                />

                <ContactItem
                  icon="🏢"
                  title="Company"
                  text="Mian Rayan Traders"
                />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: mobile ? "column" : "row",
                  gap: 12,
                  marginTop: 28,
                }}
              >
                <Link
                  href="tel:+923126016060"
                  style={{
                    flex: 1,
                    padding: "14px 18px",
                    borderRadius: 40,
                    background: "#0b4a8f",
                    color: "#ffffff",
                    textDecoration: "none",
                    textAlign: "center",
                    fontSize: 14,
                    fontWeight: 800,
                  }}
                >
                  Call Now
                </Link>

                <Link
                  href="https://wa.me/923126016060"
                  target="_blank"
                  style={{
                    flex: 1,
                    padding: "14px 18px",
                    borderRadius: 40,
                    background: "#10a34a",
                    color: "#ffffff",
                    textDecoration: "none",
                    textAlign: "center",
                    fontSize: 14,
                    fontWeight: 800,
                  }}
                >
                  WhatsApp
                </Link>
              </div>
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              zIndex: 4,
              right: mobile ? "4%" : "1%",
              bottom: mobile ? 5 : 0,
              width: mobile ? "92%" : "48%",
              height: mobile ? 370 : "96%",
              display: "flex",
              alignItems: "flexEnd",
              justifyContent: "center",
            }}
          >
            <Image
              src="/images/heroProducts.png"
              alt="1 Sip Natural Water products"
              width={650}
              height={530}
              sizes="100vw"
              style={{
                width: mobile ? "82%" : "90%",
                maxWidth: mobile ? 500 : 600,
                height: "auto",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 13,
      }}
    >
      <div
        style={{
          width: 50,
          height: 50,
          flexShrink: 0,
          borderRadius: 14,
          background: "rgba(11,145,70,0.08)",
          color: "#0b9146",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 20,
        }}
      >
        {icon}
      </div>

      <div>
        <div
          style={{
            color: "#8295a5",
            fontSize: 12,
            marginBottom: 3,
          }}
        >
          {title}
        </div>

        <div
          style={{
            color: "#073f78",
            fontSize: 15,
            fontWeight: 800,
            lineHeight: 1.45,
          }}
        >
          {text}
        </div>
      </div>
    </div>
  );
}