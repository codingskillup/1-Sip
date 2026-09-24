"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CholistanStory() {
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
      id="story"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#fffaf2",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: mobile ? 180 : 320,
          height: mobile ? 180 : 320,
          borderRadius: "50%",
          background: "rgba(16, 151, 72, 0.05)",
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
            gridTemplateColumns: mobile ? "1fr" : "1.05fr 0.95fr",
            gap: mobile ? 40 : 75,
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              minHeight: mobile ? 350 : 520,
            }}
          >
            <div
              style={{
                position: "absolute",
                left: mobile ? 12 : 20,
                top: mobile ? 14 : 20,
                width: mobile ? "94%" : "95%",
                height: mobile ? 325 : 480,
                borderRadius: mobile ? 25 : 32,
                background: "#e9f4de",
              }}
            />

            <div
              style={{
                position: "relative",
                width: mobile ? "94%" : "95%",
                height: mobile ? 325 : 480,
                overflow: "hidden",
                borderRadius: mobile ? 25 : 32,
                boxShadow: "0 24px 60px rgba(77, 59, 28, 0.15)",
              }}
            >
<Image
  src="/images/cholistanStory.png"
  alt="Cholistan desert and historic fort"
  fill
  sizes="(max-width: 900px) 92vw, 50vw"
  style={{
    objectFit: "cover",
    objectPosition: "center",
  }}
/>

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(5, 45, 75, 0.08)",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  left: mobile ? 18 : 25,
                  bottom: mobile ? 18 : 24,
                  padding: mobile ? "11px 15px" : "13px 18px",
                  borderRadius: 16,
                  background: "rgba(255,255,255,0.92)",
                  boxShadow: "0 12px 30px rgba(5,45,80,0.12)",
                }}
              >
                <div
                  style={{
                    color: "#0a9146",
                    fontSize: 12,
                    fontWeight: 850,
                    marginBottom: 4,
                  }}
                >
                  From the Heart of Cholistan
                </div>

                <div
                  style={{
                    color: "#073f78",
                    fontSize: mobile ? 14 : 15,
                    fontWeight: 800,
                  }}
                >
                  Desert, Water, Nature, Pakistan
                </div>
              </div>
            </div>
          </div>

          <div>
            <div
              style={{
                marginBottom: 13,
                color: "#0a9146",
                fontSize: 13,
                fontWeight: 850,
                textTransform: "uppercase",
                letterSpacing: 1.5,
              }}
            >
              Inspired by Cholistan
            </div>

            <h2
              style={{
                margin: 0,
                maxWidth: 570,
                color: "#073f78",
                fontSize: mobile ? 37 : 50,
                lineHeight: 1.08,
                fontWeight: 850,
              }}
            >
              The Land of
              <span
                style={{
                  display: "block",
                  color: "#0b9346",
                }}
              >
                Endless Beauty
              </span>
            </h2>

            <p
              style={{
                maxWidth: 590,
                marginTop: 22,
                marginBottom: 0,
                color: "#5c7488",
                fontSize: mobile ? 15 : 16,
                lineHeight: 1.8,
              }}
            >
              Cholistan is one of Pakistan&apos;s most distinctive landscapes,
              known for its golden desert, wide horizons, historic forts and
              natural beauty.
            </p>

            <p
              style={{
                maxWidth: 590,
                marginTop: 14,
                marginBottom: 0,
                color: "#5c7488",
                fontSize: mobile ? 15 : 16,
                lineHeight: 1.8,
              }}
            >
              The visual identity of 1 Sip takes inspiration from this land,
              bringing together water, nature and Pakistani character in one
              fresh brand experience.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: mobile ? "1fr 1fr" : "repeat(4, 1fr)",
                gap: 11,
                marginTop: 28,
              }}
            >
              <StoryItem
                icon="🏜️"
                title="Desert"
              />

              <StoryItem
                icon="💧"
                title="Water"
              />

              <StoryItem
                icon="🌿"
                title="Nature"
              />

              <StoryItem
                icon="PK"
                title="Pakistan"
              />
            </div>

            <Link
              href="#quality"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                marginTop: 30,
                padding: "14px 24px",
                borderRadius: 40,
                background: "#0b9146",
                color: "#ffffff",
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 800,
                boxShadow: "0 12px 30px rgba(11,145,70,0.20)",
              }}
            >
              Discover Our Story

              <span
                style={{
                  fontSize: 17,
                }}
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function StoryItem({
  icon,
  title,
}: {
  icon: string;
  title: string;
}) {
  return (
    <div
      style={{
        padding: "15px 10px",
        borderRadius: 16,
        background: "#ffffff",
        border: "1px solid rgba(6,65,120,0.07)",
        boxShadow: "0 10px 28px rgba(5,60,100,0.05)",
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: 42,
          height: 42,
          margin: "0 auto",
          borderRadius: "50%",
          background: "rgba(11,145,70,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#073f78",
          fontSize: icon === "PK" ? 11 : 18,
          fontWeight: 850,
        }}
      >
        {icon}
      </div>

      <div
        style={{
          marginTop: 8,
          color: "#073f78",
          fontSize: 12,
          fontWeight: 850,
        }}
      >
        {title}
      </div>
    </div>
  );
}