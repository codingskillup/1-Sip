"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const points = ["Pure", "Natural", "Fresh", "Pakistani"];

export default function Hero() {
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
      id="home"
      style={{
        position: "relative",
        width: "100%",
        minHeight: mobile ? "auto" : 690,
        overflow: "hidden",
        background: "#f7fcff",
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
          src="/images/cholistanHero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: mobile ? "68% center" : "center",
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background: mobile
            ? `
              linear-gradient(
                180deg,
                rgba(255,255,255,0.97) 0%,
                rgba(255,255,255,0.91) 46%,
                rgba(255,255,255,0.55) 72%,
                rgba(255,255,255,0.18) 100%
              )
            `
            : `
              linear-gradient(
                90deg,
                rgba(255,255,255,0.98) 0%,
                rgba(255,255,255,0.94) 27%,
                rgba(255,255,255,0.74) 43%,
                rgba(255,255,255,0.30) 60%,
                rgba(255,255,255,0.08) 100%
              )
            `,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          zIndex: 1,
          right: mobile ? "50%" : "7%",
          top: mobile ? "52%" : "8%",
          transform: mobile ? "translateX(50%)" : "none",
          width: mobile ? 330 : 580,
          height: mobile ? 330 : 580,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(218,246,255,0.76) 0%, rgba(218,246,255,0.38) 45%, rgba(218,246,255,0) 72%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "min(92%, 1420px)",
          margin: "0 auto",
          minHeight: mobile ? "auto" : 690,
          display: "flex",
          flexDirection: mobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: mobile ? 25 : 40,
          paddingTop: mobile ? 55 : 40,
          paddingBottom: mobile ? 20 : 35,
        }}
      >
        <div
          style={{
            width: mobile ? "100%" : "47%",
            textAlign: mobile ? "center" : "left",
            paddingTop: mobile ? 0 : 5,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              padding: "10px 17px",
              marginBottom: 21,
              borderRadius: 40,
              background: "rgba(255,255,255,0.82)",
              border: "1px solid rgba(12,132,70,0.16)",
              boxShadow: "0 10px 35px rgba(5,70,110,0.07)",
              backdropFilter: "blur(12px)",
              color: "#087a3d",
              fontSize: mobile ? 12 : 13,
              fontWeight: 800,
            }}
          >
            <span
              style={{
                width: 9,
                height: 9,
                flexShrink: 0,
                borderRadius: "50%",
                background: "#18a04d",
              }}
            />

            Pure Water from the Heart of Cholistan
          </div>

          <div
            style={{
              marginBottom: 8,
              color: "#087f3d",
              fontSize: mobile ? 17 : 20,
              fontWeight: 800,
            }}
          >
            1 Sip Natural Water
          </div>

          <h1
            style={{
              margin: 0,
              maxWidth: 650,
              color: "#063f7d",
              fontSize: mobile ? 45 : 70,
              lineHeight: 1.02,
              letterSpacing: mobile ? 0 : 0.3,
              fontWeight: 850,
            }}
          >
            Nature in

            <span
              style={{
                display: "block",
                color: "#0d9947",
              }}
            >
              Every Sip
            </span>
          </h1>

          <p
            style={{
              maxWidth: 590,
              marginTop: 22,
              marginBottom: 0,
              marginLeft: mobile ? "auto" : 0,
              marginRight: mobile ? "auto" : 0,
              color: "#355d80",
              fontSize: mobile ? 15 : 18,
              lineHeight: 1.75,
              fontWeight: 500,
            }}
          >
            Fresh water inspired by the beauty of Cholistan, made for your
            home, office, travel and everyday refreshment.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: mobile ? "center" : "flex-start",
              alignItems: "center",
              gap: mobile ? 12 : 15,
              marginTop: 23,
            }}
          >
            {points.map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                  color: "#073c70",
                  fontSize: 14,
                  fontWeight: 750,
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    flexShrink: 0,
                    borderRadius: "50%",
                    background: "#18a04d",
                  }}
                />

                {item}
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: mobile ? "column" : "row",
              alignItems: "center",
              justifyContent: mobile ? "center" : "flex-start",
              gap: 13,
              marginTop: 30,
            }}
          >
            <Link
              href="#products"
              style={{
                width: mobile ? "100%" : "auto",
                maxWidth: mobile ? 360 : "none",
                padding: "15px 26px",
                borderRadius: 40,
                background: "#078d42",
                color: "#ffffff",
                textDecoration: "none",
                textAlign: "center",
                fontSize: 15,
                fontWeight: 800,
                boxShadow: "0 12px 30px rgba(7,136,63,0.23)",
              }}
            >
              Explore Our Products
              <span
                style={{
                  marginLeft: 10,
                  fontSize: 18,
                }}
              >
                →
              </span>
            </Link>

            <Link
              href="#about"
              style={{
                width: mobile ? "100%" : "auto",
                maxWidth: mobile ? 360 : "none",
                padding: "14px 26px",
                borderRadius: 40,
                background: "rgba(255,255,255,0.82)",
                border: "1px solid rgba(6,60,117,0.16)",
                color: "#063c75",
                textDecoration: "none",
                textAlign: "center",
                fontSize: 15,
                fontWeight: 800,
                backdropFilter: "blur(10px)",
              }}
            >
              Learn More
            </Link>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: mobile ? "center" : "flex-start",
              gap: mobile ? 17 : 28,
              marginTop: 34,
            }}
          >
            <MiniFeature
              icon="💧"
              title="Pure"
              text="Refreshing"
            />

            <MiniFeature
              icon="🌿"
              title="Natural"
              text="Fresh Feel"
            />

            <MiniFeature
              icon="PK"
              title="Pakistani"
              text="Local Brand"
            />
          </div>
        </div>

        <div
          style={{
            position: "relative",
            width: mobile ? "100%" : "53%",
            minHeight: mobile ? 430 : 620,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: mobile ? 40 : 45,
              transform: "translateX(-50%)",
              width: mobile ? 330 : 520,
              height: mobile ? 330 : 520,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(255,255,255,0.82) 0%, rgba(207,241,255,0.50) 46%, rgba(207,241,255,0) 73%)",
            }}
          />

          <Image
            src="/images/heroProducts.png"
            alt="1 Sip Natural Water Products"
            width={760}
            height={570}
            priority
            sizes="(max-width: 900px) 95vw, 53vw"
            style={{
              position: "relative",
              zIndex: 3,
              width: "100%",
              maxWidth: mobile ? 540 : 720,
              height: "auto",
              objectFit: "contain",
              filter: "drop-shadow(0 24px 30px rgba(2,61,110,0.18))",
            }}
          />

          <div
            style={{
              position: "absolute",
              zIndex: 4,
              right: mobile ? 4 : 10,
              top: mobile ? 35 : 95,
              padding: mobile ? "10px 14px" : "12px 17px",
              borderRadius: 18,
              background: "rgba(255,255,255,0.91)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 14px 35px rgba(5,62,108,0.11)",
              color: "#087a3d",
              fontWeight: 850,
              fontSize: mobile ? 12 : 14,
            }}
          >
            Healthy Choice
          </div>

          <div
            style={{
              position: "absolute",
              zIndex: 4,
              left: mobile ? 5 : 20,
              bottom: mobile ? 25 : 75,
              padding: mobile ? "10px 14px" : "12px 17px",
              borderRadius: 18,
              background: "rgba(255,255,255,0.91)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 14px 35px rgba(5,62,108,0.11)",
              color: "#063c75",
              fontWeight: 850,
              fontSize: mobile ? 12 : 14,
            }}
          >
            Fresh Every Day
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniFeature({
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
        gap: 9,
      }}
    >
      <div
        style={{
          width: 42,
          height: 42,
          flexShrink: 0,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.84)",
          border: "1px solid rgba(7,136,63,0.13)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#063c75",
          fontSize: icon === "PK" ? 11 : 17,
          fontWeight: 850,
          boxShadow: "0 8px 22px rgba(4,65,105,0.06)",
        }}
      >
        {icon}
      </div>

      <div>
        <div
          style={{
            color: "#073c70",
            fontSize: 13,
            fontWeight: 850,
          }}
        >
          {title}
        </div>

        <div
          style={{
            marginTop: 2,
            color: "#71879a",
            fontSize: 11,
          }}
        >
          {text}
        </div>
      </div>
    </div>
  );
}