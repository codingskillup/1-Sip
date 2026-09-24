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
        background:
          "linearGradient(135deg, #eefaff 0%, #ffffff 50%, #f2fff7 100%)",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: mobile ? 260 : 520,
          height: mobile ? 260 : 520,
          borderRadius: "50%",
          background: "rgba(21, 169, 228, 0.08)",
          right: mobile ? 0 : 40,
          top: mobile ? 30 : 10,
        }}
      />

      <div
        style={{
          position: "absolute",
          width: mobile ? 200 : 360,
          height: mobile ? 200 : 360,
          borderRadius: "50%",
          background: "rgba(14, 153, 71, 0.07)",
          left: mobile ? 0 : 30,
          bottom: 0,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "min(92%, 1420px)",
          margin: "0 auto",
          paddingTop: mobile ? 60 : 90,
          paddingBottom: mobile ? 60 : 90,
        }}
      >
        <div
          style={{
            textAlign: "center",
            maxWidth: 680,
            margin: "0 auto 42px",
          }}
        >
          <div
            style={{
              color: "#0b9346",
              fontSize: 13,
              fontWeight: 850,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              marginBottom: 11,
            }}
          >
            Contact 1 Sip
          </div>

          <h2
            style={{
              margin: 0,
              color: "#073f78",
              fontSize: mobile ? 36 : 50,
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
              margin: "16px auto 0",
              color: "#657f94",
              fontSize: mobile ? 14 : 16,
              lineHeight: 1.75,
            }}
          >
            Contact 1 Sip Natural Water for product information, orders and
            general enquiries.
          </p>
        </div>

        <div
          style={{
            position: "relative",
            minHeight: mobile ? 760 : 560,
            borderRadius: mobile ? 26 : 34,
            overflow: "hidden",
            background: "#ffffff",
            boxShadow: "0 25px 70px rgba(4,65,105,0.12)",
            border: "1px solid rgba(7,63,120,0.07)",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              width: mobile ? "100%" : "58%",
            }}
          >
            <Image
              src="/images/aboutCholistan.png"
              alt="Cholistan landscape"
              fill
              sizes="(maxWidth: 900px) 100vw, 58vw"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />

            <div
              style={{
                position: "absolute",
                inset: 0,
                background: mobile
                  ? "linearGradient(180deg, rgba(4,38,72,0.16) 0%, rgba(4,38,72,0.48) 100%)"
                  : "linearGradient(90deg, rgba(4,38,72,0.12) 0%, rgba(4,38,72,0.20) 55%, rgba(4,38,72,0.65) 100%)",
              }}
            />
          </div>

          <div
            style={{
              position: "absolute",
              right: mobile ? "50%" : 0,
              bottom: mobile ? 10 : 0,
              transform: mobile ? "translateX(50%)" : "none",
              width: mobile ? "92%" : "48%",
              height: mobile ? 330 : "100%",
              display: "flex",
              alignItems: "flexEnd",
              justifyContent: "center",
              background: mobile
                ? "transparent"
                : "linearGradient(90deg, rgba(255,255,255,0) 0%, rgba(238,249,255,0.82) 28%, rgba(238,249,255,0.98) 100%)",
            }}
          >
            <Image
              src="/images/heroProducts.png"
              alt="1 Sip Natural Water products"
              width={680}
              height={560}
              sizes="(maxWidth: 900px) 92vw, 48vw"
              style={{
                width: mobile ? "88%" : "92%",
                maxWidth: mobile ? 520 : 620,
                height: "auto",
                objectFit: "contain",
                filter: "dropShadow(0 25px 34px rgba(3,68,115,0.20))",
              }}
            />
          </div>

          <div
            style={{
              position: "relative",
              zIndex: 5,
              width: mobile ? "auto" : 390,
              marginLeft: mobile ? 18 : 55,
              paddingTop: mobile ? 42 : 58,
            }}
          >
            <div
              style={{
                padding: mobile ? 24 : 30,
                borderRadius: 24,
                background: "rgba(255,255,255,0.93)",
                backdropFilter: "blur(14px)",
                boxShadow: "0 18px 50px rgba(3,45,85,0.16)",
              }}
            >
              <div
                style={{
                  color: "#0b9346",
                  fontSize: 12,
                  fontWeight: 850,
                  textTransform: "uppercase",
                  letterSpacing: 1.3,
                  marginBottom: 9,
                }}
              >
                Get in Touch
              </div>

              <h3
                style={{
                  margin: 0,
                  color: "#073f78",
                  fontSize: mobile ? 25 : 30,
                  fontWeight: 850,
                  lineHeight: 1.15,
                }}
              >
                1 Sip Natural Water
              </h3>

              <p
                style={{
                  margin: "8px 0 0",
                  color: "#71889b",
                  fontSize: 13,
                }}
              >
                Nature in Every Sip
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  marginTop: 25,
                }}
              >
                <ContactItem
                  title="Location"
                  text="Commercial Market, Ahmed Garden, Fort Abbas"
                  icon="location"
                />

                <ContactItem
                  title="Phone"
                  text="0312 6016060"
                  icon="phone"
                />

                <ContactItem
                  title="WhatsApp"
                  text="0312 6016060"
                  icon="message"
                />

                <ContactItem
                  title="Company"
                  text="Mian Rayan Traders"
                  icon="company"
                />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: mobile ? "column" : "row",
                  gap: 10,
                  marginTop: 26,
                }}
              >
                <Link
                  href="tel:+923126016060"
                  style={{
                    flex: 1,
                    padding: "13px 18px",
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
                    padding: "13px 18px",
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

          {!mobile && (
            <div
              style={{
                position: "absolute",
                left: 55,
                bottom: 34,
                zIndex: 4,
                color: "#ffffff",
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 750,
                  opacity: 0.85,
                }}
              >
                From the Heart of Cholistan
              </div>

              <div
                style={{
                  marginTop: 4,
                  fontSize: 20,
                  fontWeight: 850,
                }}
              >
                Pure Water for Every Day
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  title,
  text,
  icon,
}: {
  title: string;
  text: string;
  icon: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
      }}
    >
      <div
        style={{
          width: 44,
          height: 44,
          flexShrink: 0,
          borderRadius: 13,
          background: "rgba(11,145,70,0.08)",
          color: "#0b9146",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ContactIcon type={icon} />
      </div>

      <div>
        <div
          style={{
            color: "#7890a2",
            fontSize: 10.5,
            marginBottom: 3,
          }}
        >
          {title}
        </div>

        <div
          style={{
            color: "#073f78",
            fontSize: 13,
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

function ContactIcon({
  type,
}: {
  type: string;
}) {
  if (type === "location") {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <circle cx="12" cy="10" r="3" />
        <path d="M12 22s7 6 7 12A7 7 0 0 0 5 12c0 6 7 10 7 10Z" />
      </svg>
    );
  }

  if (type === "phone") {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M6 3h4l2 5 3 3 5 2v4c0 2 1 4 3 5 2 1 5 1 7 0l2 2c1 1 2 1 3 1" />
      </svg>
    );
  }

  if (type === "message") {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M4 4h16v12H8l4 4v4Z" />
      </svg>
    );
  }

  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="4" y="6" width="16" height="14" rx="2" />
      <path d="M9 6V4h6v2" />
      <path d="M8 11h8" />
    </svg>
  );
}