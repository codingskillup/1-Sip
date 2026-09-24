"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const qualityItems = [
  {
    title: "Source Protection",
    text: "Careful attention to water source management.",
    icon: "source",
  },
  {
    title: "Water Treatment",
    text: "Appropriate water treatment and filtration processes.",
    icon: "filter",
  },
  {
    title: "Safe Bottling",
    text: "Clean handling during the bottling process.",
    icon: "bottle",
  },
  {
    title: "Hygienic Storage",
    text: "Proper product handling and storage conditions.",
    icon: "storage",
  },
];

export default function QualityPurity() {
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
      id="quality"
      style={{
        position: "relative",
        overflow: "hidden",
        background:
          "linearGradient(135deg, #f5fbff 0%, #eef9ff 50%, #ffffff 100%)",
      }}
    >
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: mobile ? 220 : 420,
          height: mobile ? 220 : 420,
          borderRadius: "50%",
          background: "rgba(30,166,229,0.08)",
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
            display: "grid",
            gridTemplateColumns: mobile ? "1fr" : "0.95fr 1.05fr",
            gap: mobile ? 45 : 75,
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                color: "#0a9346",
                fontSize: 13,
                fontWeight: 850,
                letterSpacing: 1.5,
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              Our Quality
            </div>

            <h2
              style={{
                margin: 0,
                maxWidth: 560,
                color: "#073f78",
                fontSize: mobile ? 37 : 50,
                lineHeight: 1.08,
                fontWeight: 850,
              }}
            >
              Purity You Can
              <span
                style={{
                  display: "block",
                  color: "#0b9346",
                }}
              >
                Trust
              </span>
            </h2>

            <p
              style={{
                maxWidth: 590,
                marginTop: 22,
                marginBottom: 0,
                color: "#58758d",
                fontSize: mobile ? 15 : 16,
                lineHeight: 1.8,
              }}
            >
              Our focus is on cleanliness and quality throughout water
              handling, treatment, bottling, packaging and storage.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: mobile ? "1fr" : "1fr 1fr",
                gap: 14,
                marginTop: 28,
              }}
            >
              {qualityItems.map((item) => (
                <QualityCard
                  key={item.title}
                  title={item.title}
                  text={item.text}
                  icon={item.icon}
                />
              ))}
            </div>

            <div
              style={{
                marginTop: 24,
                padding: "15px 17px",
                borderRadius: 16,
                background: "rgba(7,63,120,0.05)",
                border: "1px solid rgba(7,63,120,0.08)",
                color: "#60798e",
                fontSize: 12,
                lineHeight: 1.65,
              }}
            >
              Details about filtration, mineral content, laboratory testing,
              certifications and water source should only be published after
              confirmation from official company records and approvals.
            </div>
          </div>

          <div
            style={{
              position: "relative",
              minHeight: mobile ? 390 : 540,
            }}
          >
            <div
              style={{
                position: "absolute",
                right: mobile ? 0 : 10,
                top: mobile ? 12 : 20,
                width: mobile ? "94%" : "92%",
                height: mobile ? 350 : 490,
                borderRadius: mobile ? 25 : 32,
                background: "#dff5ff",
              }}
            />

            <div
              style={{
                position: "relative",
                width: mobile ? "94%" : "92%",
                height: mobile ? 350 : 490,
                marginLeft: mobile ? 0 : "auto",
                overflow: "hidden",
                borderRadius: mobile ? 25 : 32,
                boxShadow: "0 25px 65px rgba(5,63,115,0.14)",
              }}
            >
              <Image
                src="/images/qualityPlant.png"
                alt="Water treatment and filtration facility"
                fill
                sizes="(maxWidth: 900px) 92vw, 48vw"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linearGradient(180deg, rgba(0,0,0,0.01) 45%, rgba(4,49,88,0.30) 100%)",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  left: mobile ? 18 : 25,
                  bottom: mobile ? 18 : 24,
                  padding: "12px 16px",
                  borderRadius: 16,
                  background: "rgba(255,255,255,0.92)",
                  color: "#073f78",
                  boxShadow: "0 12px 30px rgba(5,45,80,0.12)",
                }}
              >
                <div
                  style={{
                    color: "#0a9346",
                    fontSize: 12,
                    fontWeight: 850,
                    marginBottom: 3,
                  }}
                >
                  Quality Focus
                </div>

                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 800,
                  }}
                >
                  Care at Every Stage
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QualityCard({
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
        padding: "17px",
        borderRadius: 18,
        background: "#ffffff",
        border: "1px solid rgba(6,65,120,0.07)",
        boxShadow: "0 10px 30px rgba(4,65,105,0.05)",
        display: "flex",
        alignItems: "center",
        gap: 13,
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          flexShrink: 0,
          borderRadius: 14,
          background: "rgba(11,145,70,0.08)",
          color: "#0b9146",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <QualityIcon type={icon} />
      </div>

      <div>
        <div
          style={{
            color: "#073f78",
            fontSize: 14,
            fontWeight: 850,
          }}
        >
          {title}
        </div>

        <div
          style={{
            marginTop: 4,
            color: "#7890a2",
            fontSize: 11.5,
            lineHeight: 1.5,
          }}
        >
          {text}
        </div>
      </div>
    </div>
  );
}

function QualityIcon({
  type,
}: {
  type: string;
}) {
  if (type === "source") {
    return (
      <svg
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M12 2C12 2 6 9 6 14a6 6 0 0 0 12 0c0 5 6 12 6 12Z" />
      </svg>
    );
  }

  if (type === "filter") {
    return (
      <svg
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M4 5h16" />
        <path d="M6 10h12" />
        <path d="M9 15h6" />
        <path d="M11 20h2" />
      </svg>
    );
  }

  if (type === "bottle") {
    return (
      <svg
        width="25"
        height="25"
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

  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="4" y="7" width="16" height="13" rx="2" />
      <path d="M8 7V4h8v3" />
      <path d="M8 12h8" />
      <path d="M8 16h5" />
    </svg>
  );
}