"use client";

import { useEffect, useState } from "react";

const features = [
  {
    title: "Fresh & Refreshing",
    text: "Made for everyday refreshment at home, work and while travelling.",
    icon: "water",
  },
  {
    title: "Quality Focused",
    text: "Care and attention are given throughout the water handling process.",
    icon: "quality",
  },
  {
    title: "Hygienic Packaging",
    text: "Clean packaging is an important part of the 1 Sip product experience.",
    icon: "shield",
  },
  {
    title: "Multiple Sizes",
    text: "Practical bottle options for different everyday needs.",
    icon: "bottle",
  },
];

export default function ProductFeatures() {
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
        background: "#073f78",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 420,
          height: 420,
          borderRadius: "50%",
          background: "rgba(37, 178, 235, 0.12)",
          right: 20,
          top: 30,
        }}
      />

      <div
        style={{
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "rgba(23, 160, 77, 0.10)",
          left: 40,
          bottom: 0,
        }}
      />

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
            margin: "0 auto",
          }}
        >
          <div
            style={{
              color: "#7de8a9",
              fontSize: 13,
              fontWeight: 850,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              marginBottom: 10,
            }}
          >
            Product Features
          </div>

          <h2
            style={{
              margin: 0,
              color: "#ffffff",
              fontSize: mobile ? 34 : 46,
              lineHeight: 1.12,
              fontWeight: 850,
            }}
          >
            Freshness You Can Trust
          </h2>

          <p
            style={{
              margin: "15px auto 0",
              color: "rgba(255,255,255,0.72)",
              fontSize: mobile ? 14 : 16,
              lineHeight: 1.7,
            }}
          >
            Simple everyday features focused on freshness, care and convenient
            water options.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: mobile
              ? "1fr"
              : "repeat(4, minmax(0, 1fr))",
            gap: 16,
            marginTop: mobile ? 32 : 45,
          }}
        >
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              text={feature.text}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
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
        minHeight: 230,
        padding: "27px 23px",
        borderRadius: 22,
        background: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.13)",
        backdropFilter: "blur(12px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: 68,
          height: 68,
          borderRadius: "50%",
          background: "#ffffff",
          color: "#0b9146",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 18,
        }}
      >
        <FeatureIcon type={icon} />
      </div>

      <h3
        style={{
          margin: 0,
          color: "#ffffff",
          fontSize: 17,
          fontWeight: 850,
        }}
      >
        {title}
      </h3>

      <p
        style={{
          margin: "9px 0 0",
          color: "rgba(255,255,255,0.68)",
          fontSize: 13,
          lineHeight: 1.65,
        }}
      >
        {text}
      </p>
    </div>
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
        width="31"
        height="31"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M12 2C12 2 6 9 6 14a6 6 0 0 0 12 0c0 5 6 12 6 12Z" />
      </svg>
    );
  }

  if (type === "quality") {
    return (
      <svg
        width="31"
        height="31"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <circle cx="12" cy="12" r="8" />
        <path d="M8 12l3 3 5 5" />
      </svg>
    );
  }

  if (type === "shield") {
    return (
      <svg
        width="31"
        height="31"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M12 3l7 3v5c0 5 3 9 7 10 4 1 7 5 7 10V6l7 3v5c0 5 3 9 7 10Z" />
        <path d="M9 12l2 2 4 4" />
      </svg>
    );
  }

  return (
    <svg
      width="31"
      height="31"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M9 3h6" />
      <path d="M10 3v4" />
      <path d="M14 3v4" />
      <path d="M8 9c0 1 1 2 1 3v8h6v8c0 1 1 2 1 3V9Z" />
    </svg>
  );
}