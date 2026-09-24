"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AboutUs() {
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
      id="about"
      style={{
        position: "relative",
        background: "#ffffff",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "min(92%, 1420px)",
          margin: "0 auto",
          paddingTop: mobile ? 55 : 90,
          paddingBottom: mobile ? 55 : 90,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: mobile ? "1fr" : "1.05fr 0.95fr",
            alignItems: "center",
            gap: mobile ? 38 : 75,
          }}
        >
          <div
            style={{
              position: "relative",
              minHeight: mobile ? 360 : 520,
            }}
          >
            <div
              style={{
                position: "absolute",
                left: mobile ? 10 : 0,
                top: mobile ? 15 : 20,
                width: mobile ? "94%" : "92%",
                height: mobile ? 325 : 465,
                borderRadius: mobile ? 24 : 30,
                background: "#e9f8ff",
              }}
            />

            <div
              style={{
                position: "relative",
                width: mobile ? "94%" : "92%",
                height: mobile ? 325 : 465,
                marginLeft: mobile ? 0 : 18,
                borderRadius: mobile ? 24 : 30,
                overflow: "hidden",
                boxShadow: "0 25px 65px rgba(5,63,115,0.14)",
              }}
            >
              <Image
                src="/images/aboutCholistan.png"
                alt="Cholistan landscape"
                fill
                sizes="(max-width: 900px) 92vw, 48vw"
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
                    "linearGradient(180deg, rgba(0,0,0,0.02) 45%, rgba(1,47,85,0.28) 100%)",
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
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 10px 30px rgba(3,45,85,0.12)",
                }}
              >
                <div
                  style={{
                    color: "#0b9146",
                    fontSize: 12,
                    fontWeight: 850,
                    marginBottom: 3,
                  }}
                >
                  Inspired by Cholistan
                </div>

                <div
                  style={{
                    color: "#073f78",
                    fontSize: mobile ? 14 : 15,
                    fontWeight: 800,
                  }}
                >
                  Nature, Water and Pakistan
                </div>
              </div>
            </div>

            {!mobile && (
              <div
                style={{
                  position: "absolute",
                  right: 0,
                  bottom: 6,
                  width: 170,
                  height: 170,
                  borderRadius: "50%",
                  background:
                    "radialGradient(circle, rgba(18,163,79,0.12), rgba(18,163,79,0))",
                }}
              />
            )}
          </div>

          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 14,
                color: "#0b9146",
                fontSize: 13,
                fontWeight: 850,
                textTransform: "uppercase",
                letterSpacing: 1.5,
              }}
            >
              About Us
            </div>

            <h2
              style={{
                margin: 0,
                maxWidth: 560,
                color: "#073f78",
                fontSize: mobile ? 36 : 49,
                lineHeight: 1.1,
                fontWeight: 850,
              }}
            >
              The Essence of Nature
              <span
                style={{
                  display: "block",
                  color: "#0c9847",
                }}
              >
                in Every Sip
              </span>
            </h2>

            <p
              style={{
                marginTop: 22,
                marginBottom: 0,
                maxWidth: 590,
                color: "#58758d",
                fontSize: mobile ? 15 : 16,
                lineHeight: 1.8,
              }}
            >
              1 Sip Natural Water is more than a water brand. It represents
              freshness, nature and a strong connection with Pakistani
              identity.
            </p>

            <p
              style={{
                marginTop: 15,
                marginBottom: 0,
                maxWidth: 590,
                color: "#58758d",
                fontSize: mobile ? 15 : 16,
                lineHeight: 1.8,
              }}
            >
              Our visual identity takes inspiration from Cholistan, combining
              desert landscapes, fresh water, greenery and the natural beauty
              of Pakistan.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: mobile ? "1fr" : "1fr 1fr",
                gap: 13,
                marginTop: 27,
                maxWidth: 560,
              }}
            >
              <SmallCard
                icon="💧"
                title="Fresh Identity"
                text="A brand built around water and freshness"
              />

              <SmallCard
                icon="🌿"
                title="Nature Inspired"
                text="Inspired by natural beauty and greenery"
              />

              <SmallCard
                icon="🏜️"
                title="Cholistan"
                text="A visual connection with the desert landscape"
              />

              <SmallCard
                icon="PK"
                title="Pakistani"
                text="A local identity inspired by Pakistan"
              />
            </div>

            <Link
              href="#story"
              style={{
                display: "inlineFlex",
                alignItems: "center",
                gap: 10,
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
              Learn More
              <span
                style={{
                  fontSize: 18,
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

function SmallCard({
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
        gap: 12,
        padding: "14px",
        borderRadius: 16,
        background: "#f8fcff",
        border: "1px solid rgba(6,65,120,0.07)",
      }}
    >
      <div
        style={{
          width: 43,
          height: 43,
          flexShrink: 0,
          borderRadius: 13,
          background: "rgba(15,151,72,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#087c3d",
          fontSize: icon === "PK" ? 11 : 18,
          fontWeight: 850,
        }}
      >
        {icon}
      </div>

      <div>
        <div
          style={{
            color: "#073f78",
            fontSize: 13,
            fontWeight: 850,
          }}
        >
          {title}
        </div>

        <div
          style={{
            marginTop: 3,
            color: "#7890a2",
            fontSize: 11,
            lineHeight: 1.45,
          }}
        >
          {text}
        </div>
      </div>
    </div>
  );
}