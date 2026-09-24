"use client";

import { useEffect, useState } from "react";

const items = [
  {
    title: "Pure & Fresh",
    text: "Refreshing water for your everyday needs.",
    type: "water",
  },
  {
    title: "Natural Feel",
    text: "Inspired by nature and the beauty of Cholistan.",
    type: "leaf",
  },
  {
    title: "Quality Focused",
    text: "Care and attention throughout the water process.",
    type: "quality",
  },
  {
    title: "Refreshing Choice",
    text: "A fresh choice for home, office and travel.",
    type: "snow",
  },
  {
    title: "Proudly Pakistani",
    text: "Inspired by the land, culture and nature of Pakistan.",
    type: "pakistan",
  },
];

export default function WhyOneSip() {
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
      id="why"
      style={{
        position: "relative",
        background: "#ffffff",
        borderTop: "1px solid rgba(6,60,117,0.06)",
        borderBottom: "1px solid rgba(6,60,117,0.06)",
      }}
    >
      <div
        style={{
          width: "min(92%, 1420px)",
          margin: "0 auto",
          paddingTop: mobile ? 45 : 55,
          paddingBottom: mobile ? 45 : 55,
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: mobile ? 30 : 40,
          }}
        >
          <div
            style={{
              color: "#0b9146",
              fontSize: 13,
              fontWeight: 850,
              textTransform: "uppercase",
              letterSpacing: 1.6,
              marginBottom: 10,
            }}
          >
            Why 1 Sip
          </div>

          <h2
            style={{
              margin: 0,
              color: "#073f78",
              fontSize: mobile ? 32 : 42,
              lineHeight: 1.15,
              fontWeight: 850,
            }}
          >
            Freshness for Every Moment
          </h2>

          <p
            style={{
              maxWidth: 650,
              margin: "14px auto 0",
              color: "#678096",
              fontSize: mobile ? 14 : 16,
              lineHeight: 1.7,
            }}
          >
            Water inspired by nature, freshness and the identity of Pakistan.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: mobile
              ? "1fr"
              : "repeat(5, minmax(0, 1fr))",
            gap: mobile ? 14 : 0,
            borderRadius: 24,
            background: "#ffffff",
            boxShadow: mobile
              ? "none"
              : "0 18px 55px rgba(3,55,100,0.08)",
            border: mobile
              ? "none"
              : "1px solid rgba(6,60,117,0.07)",
            overflow: "hidden",
          }}
        >
          {items.map((item, index) => (
            <div
              key={item.title}
              style={{
                position: "relative",
                minHeight: mobile ? 140 : 200,
                padding: mobile ? 22 : "28px 20px",
                display: "flex",
                flexDirection: mobile ? "row" : "column",
                alignItems: "center",
                justifyContent: "center",
                gap: mobile ? 18 : 15,
                textAlign: mobile ? "left" : "center",
                background: "#ffffff",
                borderRadius: mobile ? 18 : 0,
                border: mobile
                  ? "1px solid rgba(6,60,117,0.07)"
                  : "none",
                boxShadow: mobile
                  ? "0 10px 30px rgba(3,55,100,0.06)"
                  : "none",
              }}
            >
              {!mobile && index !== items.length && index !== 0 && (
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "24%",
                    width: 1,
                    height: "52%",
                    background: "rgba(6,60,117,0.10)",
                  }}
                />
              )}

              <div
                style={{
                  width: mobile ? 60 : 68,
                  height: mobile ? 60 : 68,
                  flexShrink: 0,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background:
                    index === 1 || index === 4
                      ? "rgba(13,153,71,0.08)"
                      : "rgba(16,138,220,0.08)",
                  border:
                    index === 1 || index === 4
                      ? "1px solid rgba(13,153,71,0.18)"
                      : "1px solid rgba(16,138,220,0.18)",
                  color:
                    index === 1 || index === 4
                      ? "#0d9947"
                      : "#086fb8",
                }}
              >
                <FeatureIcon type={item.type} />
              </div>

              <div>
                <h3
                  style={{
                    margin: 0,
                    color: "#073f78",
                    fontSize: mobile ? 16 : 17,
                    lineHeight: 1.3,
                    fontWeight: 850,
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    margin: "7px 0 0",
                    color: "#71879a",
                    fontSize: mobile ? 13 : 12.5,
                    lineHeight: 1.6,
                  }}
                >
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureIcon({
  type,
}: {
  type: string;
}) {
  if (type === "water") {
    return (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M12 2C12 2 5 10 5 15a7 7 0 0 0 14 0c0 5 7 13 7 13Z" />
      </svg>
    );
  }

  if (type === "leaf") {
    return (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M20 4C12 4 5 7 5 14c0 4 3 6 6 6 7 0 9 8 9 16V4Z" />
        <path d="M5 20c3 4 7 7 12 9" />
      </svg>
    );
  }

  if (type === "quality") {
    return (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M12 3l3 3 4 1 1 4 2 3 2 3 1 4 4 1 3 3 3 3 4 1 1 4 2 3Z" />
        <path d="M9 12l2 2 4 4" />
      </svg>
    );
  }

  if (type === "snow") {
    return (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M12 2v20" />
        <path d="M4 7l16 10" />
        <path d="M4 17L20 7" />
        <path d="M9 4l3 2 3 2" />
        <path d="M9 20l3 2 3 2" />
      </svg>
    );
  }

  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M8 14c3 2 5 2 8 0" />
      <path d="M12 5v5" />
    </svg>
  );
}