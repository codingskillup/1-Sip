"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const C = {
  ocean: "#0284c7",
  oceanDark: "#0369a1",
  aqua: "#00b4d8",
  navy: "#0c2340",
  slate: "#475569",
  lightSky: "#f0f9ff",
  iceGlow: "#e0f2fe",
  white: "#ffffff",
  borderLight: "rgba(2, 132, 199, 0.14)",
};

const pillars = [
  {
    icon: "💧",
    title: "Uncompromising Purity",
    desc: "Every batch is tested across multiple parameters including total dissolved solids, pH balance, and microbial sterility.",
  },
  {
    icon: "🏜️",
    title: "Rooted in Cholistan",
    desc: "Inspired by the resilience of our homeland, we value water as the most precious treasure nature gives us.",
  },
  {
    icon: "🔬",
    title: "Advanced Technology",
    desc: "Equipped with automated bottling lines, high-efficiency RO membranes, and dual-phase UV disinfection.",
  },
  {
    icon: "🤝",
    title: "Customer Trust",
    desc: "Transparent distribution by Mian Rayan Traders, serving families, retailers, schools, and health clinics.",
  },
];

const timeline = [
  {
    step: "The Vision",
    desc: "Recognizing the urgent need for dependable, clinical-standard bottled water in Fort Abbas and surrounding Punjab districts.",
  },
  {
    step: "Plant Architecture",
    desc: "Constructing a modern water processing hub in Ahmed Garden, Commercial Market, adhering to high sanitary guidelines.",
  },
  {
    step: "Bottling Precision",
    desc: "Introducing 500ml, 1.5L, and 19L dispenser formats with automated blow molding and tamper-evident sealing.",
  },
  {
    step: "Growing Nationwide",
    desc: "Expanding daily distribution networks to supply everyday hydration across homes, institutions, and workplaces.",
  },
];

export default function AboutPage() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth <= 900);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ background: "#ffffff", overflow: "hidden" }}>
      {/* ── 1. Header (Bright, Crystal Glacial Sky) ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #ffffff 100%)",
          padding: mobile ? "44px 0 50px" : "64px 0 76px",
          borderBottom: "1px solid rgba(2, 132, 199, 0.12)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-20%",
            right: "5%",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0, 180, 216, 0.15) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ width: "min(93%, 1280px)", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "4px 14px",
              borderRadius: 20,
              background: "rgba(2, 132, 199, 0.08)",
              border: "1px solid rgba(2, 132, 199, 0.2)",
              color: C.ocean,
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 1.2,
              textTransform: "uppercase",
              marginBottom: 14,
            }}
          >
            <span>📖</span>
            <span>About 1 Sip</span>
          </div>

          <h1
            style={{
              margin: "0 0 14px",
              fontSize: mobile ? 36 : 56,
              fontWeight: 900,
              color: C.navy,
              lineHeight: 1.1,
              letterSpacing: -1,
            }}
          >
            The Essence of Nature,{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #0284c7 0%, #00b4d8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Bottled with Care
            </span>
          </h1>

          <p style={{ margin: 0, fontSize: mobile ? 15 : 17, color: C.slate, maxWidth: 620, lineHeight: 1.7 }}>
            A Pakistani natural water enterprise born out of respect for Cholistan’s heritage — committed to health, vitality, and purity in every drop.
          </p>
        </div>
      </section>

      {/* ── 2. Story Section ── */}
      <section style={{ padding: mobile ? "50px 0" : "80px 0", background: "#ffffff" }}>
        <div
          style={{
            width: "min(93%, 1280px)",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: mobile ? "1fr" : "1fr 1fr",
            gap: mobile ? 36 : 60,
            alignItems: "center",
          }}
        >
          {/* Visual with Cholistan Frame */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                borderRadius: 24,
                overflow: "hidden",
                border: "1.5px solid rgba(2, 132, 199, 0.2)",
                boxShadow: "0 20px 48px rgba(2, 132, 199, 0.12)",
                position: "relative",
              }}
            >
              <Image
                src="/images/aboutCholistan.png"
                alt="Cholistan Dunes and 1 Sip Heritage"
                width={650}
                height={450}
                sizes="(max-width: 900px) 90vw, 45vw"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, transparent 60%, rgba(4, 27, 47, 0.6) 100%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 20,
                  left: 20,
                  right: 20,
                  background: "rgba(255, 255, 255, 0.92)",
                  backdropFilter: "blur(12px)",
                  padding: "12px 18px",
                  borderRadius: 12,
                  border: "1px solid rgba(2, 132, 199, 0.2)",
                }}
              >
                <div style={{ color: C.ocean, fontSize: 11.5, fontWeight: 700, textTransform: "uppercase" }}>
                  Fort Abbas · Cholistan Desert
                </div>
                <div style={{ color: C.navy, fontSize: 14, fontWeight: 800 }}>
                  A Oasis of Refreshment for Pakistan
                </div>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div>
            <div style={{ color: C.ocean, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.2, marginBottom: 8 }}>
              Our Roots & Mission
            </div>
            <h2 style={{ margin: "0 0 16px", fontSize: mobile ? 28 : 38, fontWeight: 900, color: C.navy, letterSpacing: -0.6 }}>
              Where Thirst Meets Nature’s Perfection
            </h2>

            <p style={{ margin: "0 0 16px", fontSize: 15.5, color: C.slate, lineHeight: 1.75 }}>
              In the historic territory of Cholistan, water is revered not just as a commodity, but as life itself. 1 Sip was founded under Mian Rayan Traders to deliver authentic, pure water that families can rely on without second thought.
            </p>

            <p style={{ margin: "0 0 24px", fontSize: 15, color: C.slate, lineHeight: 1.75 }}>
              By merging modern multi-barrier filtration technologies with rigid quality assurance, 1 Sip preserves the natural, light, and sweet taste of pure water while completely removing unnecessary salts and potential microbial organisms.
            </p>

            <div
              style={{
                background: "rgba(2, 132, 199, 0.05)",
                borderLeft: `4px solid ${C.ocean}`,
                padding: "16px 20px",
                borderRadius: "0 12px 12px 0",
                marginBottom: 28,
              }}
            >
              <div style={{ fontStyle: "italic", fontSize: 15, color: C.navy, fontWeight: 600 }}>
                &ldquo;Our promise is simple: pristine freshness and uncompromising quality in every single sip.&rdquo;
              </div>
              <div style={{ fontSize: 12.5, color: C.ocean, fontWeight: 700, marginTop: 6 }}>
                — Mian Rayan Traders Management
              </div>
            </div>

            <Link
              href="/products"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "13px 26px",
                borderRadius: 12,
                background: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
                color: "#ffffff",
                fontSize: 14.5,
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 8px 24px rgba(2, 132, 199, 0.28)",
              }}
            >
              <span>Explore Our Bottles</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 3. Four Core Pillars ── */}
      <section
        style={{
          background: "linear-gradient(180deg, #f8fcff 0%, #ffffff 100%)",
          padding: mobile ? "50px 0" : "80px 0",
          borderTop: "1px solid rgba(2, 132, 199, 0.1)",
        }}
      >
        <div style={{ width: "min(93%, 1280px)", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 48px" }}>
            <div style={{ color: C.ocean, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.2, marginBottom: 8 }}>
              Guiding Principles
            </div>
            <h2 style={{ margin: 0, fontSize: mobile ? 28 : 38, fontWeight: 900, color: C.navy, letterSpacing: -0.6 }}>
              The Pillars Behind Every Bottle
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: mobile ? "1fr" : "repeat(4, 1fr)",
              gap: 20,
            }}
          >
            {pillars.map((p) => (
              <div
                key={p.title}
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(2, 132, 199, 0.12)",
                  borderRadius: 18,
                  padding: "28px 22px",
                  boxShadow: "0 4px 18px rgba(2, 132, 199, 0.04)",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: "rgba(2, 132, 199, 0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 24,
                    marginBottom: 16,
                  }}
                >
                  {p.icon}
                </div>
                <h3 style={{ margin: "0 0 8px", fontSize: 17, fontWeight: 800, color: C.navy }}>
                  {p.title}
                </h3>
                <p style={{ margin: 0, fontSize: 13.5, color: C.slate, lineHeight: 1.65 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Journey Timeline ── */}
      <section style={{ padding: mobile ? "50px 0" : "80px 0", background: "#ffffff" }}>
        <div style={{ width: "min(93%, 1280px)", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 48px" }}>
            <div style={{ color: C.ocean, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.2, marginBottom: 8 }}>
              Our Path
            </div>
            <h2 style={{ margin: 0, fontSize: mobile ? 28 : 38, fontWeight: 900, color: C.navy, letterSpacing: -0.6 }}>
              From Idea to Daily Refreshment
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: mobile ? "1fr" : "repeat(4, 1fr)",
              gap: 20,
            }}
          >
            {timeline.map((t, idx) => (
              <div
                key={t.step}
                style={{
                  background: "rgba(2, 132, 199, 0.03)",
                  border: "1px solid rgba(2, 132, 199, 0.12)",
                  borderRadius: 16,
                  padding: "24px 20px",
                }}
              >
                <div style={{ fontSize: 24, fontWeight: 900, color: C.ocean, marginBottom: 8 }}>
                  0{idx + 1}
                </div>
                <h3 style={{ margin: "0 0 8px", fontSize: 16, fontWeight: 800, color: C.navy }}>
                  {t.step}
                </h3>
                <p style={{ margin: 0, fontSize: 13, color: C.slate, lineHeight: 1.6 }}>
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
