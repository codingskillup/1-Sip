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
        background: "#f3fbff",
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "min(92%, 1420px)",
          margin: "0 auto",
          paddingTop: mobile ? 55 : 80,
          paddingBottom: mobile ? 55 : 80,
        }}
      >
        <div
          style={{
            textAlign: "center",
            maxWidth: 680,
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
            minHeight: mobile ? 780 : 535,
            overflow: "hidden",
            borderRadius: mobile ? 25 : 32,
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
              priority={false}
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
                ? "rgba(255,255,255,0.18)"
                : "rgba(255,255,255,0.08)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              zIndex: 2,
              width: mobile ? "100%" : "47%",
              background: mobile
                ? "rgba(238,249,255,0.18)"
                : "rgba(238,249,255,0.56)",
              backdropFilter: "blur(2px)",
            }}
          />

          <div
            style={{
              position: "absolute",
              zIndex: 4,
              right: mobile ? "50%" : 12,
              bottom: mobile ? 5 : 0,
              transform: mobile ? "translateX(50%)" : "none",
              width: mobile ? "94%" : "45%",
              height: mobile ? 330 : "94%",
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
                width: mobile ? "84%" : "87%",
                maxWidth: mobile ? 500 : 560,
                height: "auto",
                objectFit: "contain",
                transform: mobile
                  ? "translateY(8px)"
                  : "translateY(8px)",
              }}
            />
          </div>

          <div
            style={{
              position: "absolute",
              zIndex: 6,
              left: mobile ? 18 : 55,
              top: mobile ? 35 : 72,
              width: mobile ? "calc(100% + 0px)" : 365,
              maxWidth: mobile ? "calc(100% + 0px)" : 365,
              right: mobile ? 18 : "auto",
            }}
          >
            <div
              style={{
                padding: mobile ? 23 : 27,
                borderRadius: mobile ? 22 : 24,
                background: "rgba(255,255,255,0.94)",
                backdropFilter: "blur(14px)",
                boxShadow: "0 17px 45px rgba(3,45,85,0.15)",
              }}
            >
              <div
                style={{
                  color: "#0b9346",
                  fontSize: mobile ? 13 : 14,
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: 1.8,
                  marginBottom: 10,
                }}
              >
                Get in Touch
              </div>

              <h3
                style={{
                  margin: 0,
                  color: "#073f78",
                  fontSize: mobile ? 24 : 28,
                  lineHeight: 1.15,
                  fontWeight: 850,
                }}
              >
                1 Sip Natural Water
              </h3>

              <p
                style={{
                  margin: "7px 0 0",
                  color: "#71889b",
                  fontSize: 12.5,
                }}
              >
                Nature in Every Sip
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 13,
                  marginTop: 22,
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
                  gap: 10,
                  marginTop: 23,
                }}
              >
                <Link
                  href="tel:+923126016060"
                  style={{
                    flex: 1,
                    padding: "12px 17px",
                    borderRadius: 40,
                    background: "#073f78",
                    color: "#ffffff",
                    textDecoration: "none",
                    textAlign: "center",
                    fontSize: 13,
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
                    padding: "12px 17px",
                    borderRadius: 40,
                    background: "#0b9848",
                    color: "#ffffff",
                    textDecoration: "none",
                    textAlign: "center",
                    fontSize: 13,
                    fontWeight: 800,
                  }}
                >
                  WhatsApp
                </Link>
              </div>
            </div>
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
        gap: 11,
      }}
    >
      <div
        style={{
          width: 41,
          height: 41,
          flexShrink: 0,
          borderRadius: 12,
          background: "rgba(11,145,70,0.08)",
          color: "#0b9146",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 17,
        }}
      >
        {icon}
      </div>

      <div>
        <div
          style={{
            color: "#8295a5",
            fontSize: 10.5,
            marginBottom: 2,
          }}
        >
          {title}
        </div>

        <div
          style={{
            color: "#073f78",
            fontSize: 12.5,
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