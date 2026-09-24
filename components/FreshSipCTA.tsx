"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function FreshSipCTA() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setMobile(window.innerWidth <= 850);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => {
      window.removeEventListener("resize", checkScreen);
    };
  }, []);

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#ffffff",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: mobile ? 230 : 420,
          height: mobile ? 230 : 420,
          borderRadius: "50%",
          background: "rgba(35, 174, 229, 0.08)",
          right: mobile ? 10 : 80,
          top: mobile ? 20 : 10,
        }}
      />

      <div
        style={{
          position: "absolute",
          width: mobile ? 170 : 300,
          height: mobile ? 170 : 300,
          borderRadius: "50%",
          background: "rgba(16, 151, 72, 0.07)",
          left: mobile ? 5 : 60,
          bottom: 0,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "min(92%, 1180px)",
          margin: "0 auto",
          paddingTop: mobile ? 60 : 85,
          paddingBottom: mobile ? 60 : 85,
        }}
      >
        <div
          style={{
            borderRadius: mobile ? 26 : 34,
            padding: mobile ? "42px 22px" : "58px 60px",
            background:
              "linearGradient(135deg, #eefaff 0%, #f7fffb 50%, #ffffff 100%)",
            border: "1px solid rgba(7,63,120,0.07)",
            boxShadow: "0 24px 70px rgba(4,65,105,0.09)",
            textAlign: "center",
          }}
        >
          <div
            style={{
              color: "#0b9346",
              fontSize: 13,
              fontWeight: 850,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Discover 1 Sip
          </div>

          <h2
            style={{
              margin: 0,
              color: "#073f78",
              fontSize: mobile ? 36 : 52,
              lineHeight: 1.08,
              fontWeight: 850,
            }}
          >
            Ready for a
            <span
              style={{
                display: "block",
                color: "#0b9346",
              }}
            >
              Fresh Sip?
            </span>
          </h2>

          <p
            style={{
              maxWidth: 620,
              margin: "18px auto 0",
              color: "#607b91",
              fontSize: mobile ? 14 : 16,
              lineHeight: 1.75,
            }}
          >
            Discover 1 Sip Natural Water for your everyday refreshment,
            whether you are at home, at work or on the move.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: mobile ? "column" : "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 13,
              marginTop: 30,
            }}
          >
            <Link
              href="#products"
              style={{
                width: mobile ? "100%" : "auto",
                maxWidth: mobile ? 340 : "none",
                padding: "15px 27px",
                borderRadius: 40,
                background: "#0b9146",
                color: "#ffffff",
                textDecoration: "none",
                textAlign: "center",
                fontSize: 14,
                fontWeight: 800,
                boxShadow: "0 12px 30px rgba(11,145,70,0.20)",
              }}
            >
              Our Products
              <span
                style={{
                  marginLeft: 10,
                  fontSize: 17,
                }}
              >
                →
              </span>
            </Link>

            <Link
              href="#contact"
              style={{
                width: mobile ? "100%" : "auto",
                maxWidth: mobile ? 340 : "none",
                padding: "14px 27px",
                borderRadius: 40,
                background: "#ffffff",
                border: "1px solid rgba(7,63,120,0.14)",
                color: "#073f78",
                textDecoration: "none",
                textAlign: "center",
                fontSize: 14,
                fontWeight: 800,
              }}
            >
              Contact Us
            </Link>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: mobile ? "1fr" : "repeat(3, 1fr)",
              gap: 12,
              maxWidth: 720,
              margin: "36px auto 0",
            }}
          >
            <CTAItem
              title="500ml"
              text="Perfect for daily use"
            />

            <CTAItem
              title="1.5L"
              text="Ideal for home and family"
            />

            <CTAItem
              title="19L"
              text="For home and office"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CTAItem({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div
      style={{
        padding: "16px 14px",
        borderRadius: 17,
        background: "rgba(255,255,255,0.85)",
        border: "1px solid rgba(7,63,120,0.07)",
      }}
    >
      <div
        style={{
          color: "#0b9346",
          fontSize: 18,
          fontWeight: 900,
        }}
      >
        {title}
      </div>

      <div
        style={{
          color: "#71889b",
          fontSize: 11.5,
          marginTop: 4,
        }}
      >
        {text}
      </div>
    </div>
  );
}