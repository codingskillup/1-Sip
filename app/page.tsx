"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// ── Water brand palette ────────────────────────────────────
const C = {
  ocean: "#005f9e",
  aqua: "#00b4d8",
  navy: "#012a4a",
  sky: "#e8f6fb",
  skyMid: "#c8eaf5",
  white: "#ffffff",
  textSub: "#3d6580",
  textMuted: "#7fa8be",
};

const WaveDivider = ({ flip = false, from = C.sky, to = C.white }: { flip?: boolean; from?: string; to?: string }) => (
  <div
    style={{
      position: "relative",
      height: 70,
      overflow: "hidden",
      background: flip ? to : from,
      flexShrink: 0,
    }}
  >
    <svg
      viewBox="0 0 1440 70"
      preserveAspectRatio="none"
      style={{ position: "absolute", bottom: 0, width: "100%", height: "100%" }}
    >
      <path
        d={
          flip
            ? "M0,70 L0,35 C240,65 480,5 720,35 C960,65 1200,5 1440,35 L1440,70 Z"
            : "M0,0 L0,35 C240,5 480,65 720,35 C960,5 1200,65 1440,35 L1440,0 Z"
        }
        fill={flip ? from : to}
      />
    </svg>
  </div>
);

const stats = [
  { value: "100%", label: "Pure Natural Water", icon: "💧" },
  { value: "3", label: "Bottle Sizes", icon: "🫙" },
  { value: "Zero", label: "Additives", icon: "✅" },
  { value: "PK", label: "Made in Pakistan", icon: "🇵🇰" },
];

const whyItems = [
  { icon: "💧", title: "Crystal Pure", desc: "No additives or artificial flavors — just naturally fresh, clean water.", accent: C.aqua },
  { icon: "🌊", title: "Nature Sourced", desc: "Inspired by the landscapes and natural beauty of Cholistan, Pakistan.", accent: C.ocean },
  { icon: "🛡️", title: "Quality Assured", desc: "Careful handling at every step — source, treatment, bottling, storage.", accent: "#0077b6" },
  { icon: "🇵🇰", title: "Proudly Local", desc: "A Pakistani brand made for Pakistani homes, offices and lives.", accent: "#0096c7" },
];

const products = [
  { size: "500ml", use: "Travel & Daily", desc: "Light and convenient for on-the-go refreshment every day.", col: C.aqua },
  { size: "1.5L", use: "Home & Family", desc: "Ideal for the dinner table and daily family hydration needs.", col: C.ocean },
  { size: "19L", use: "Home & Office", desc: "The smart dispenser choice for home or office — always fresh.", col: "#0077b6" },
];

const qualitySteps = [
  { num: "01", icon: "🌊", title: "Source Protection", col: C.ocean },
  { num: "02", icon: "🔬", title: "Water Treatment", col: C.aqua },
  { num: "03", icon: "🫙", title: "Safe Bottling", col: "#0077b6" },
  { num: "04", icon: "📦", title: "Hygienic Storage", col: "#0096c7" },
];

const testimonials = [
  { text: "Best natural water in Pakistan. Refreshing and clean every single time!", name: "Ahmed K.", city: "Lahore" },
  { text: "We switched our office to 1 Sip 19L dispensers — the whole team loves it.", name: "Sara M.", city: "Karachi" },
  { text: "The 500ml is my go-to for daily commuting. So fresh and light.", name: "Bilal R.", city: "Islamabad" },
];

export default function HomePage() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const fn = () => setMobile(window.innerWidth <= 900);
    fn();
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  return (
    <>
      {/* ════════════ HERO ════════════ */}
      <section
        style={{
          position: "relative",
          minHeight: mobile ? "auto" : 680,
          background: `linear-gradient(160deg, ${C.sky} 0%, #d0edf7 40%, ${C.white} 100%)`,
          overflow: "hidden",
        }}
      >
        {/* Subtle background photo */}
        <div style={{ position: "absolute", inset: 0 }}>
          <Image
            src="/images/cholistanHero.png"
            alt=""
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center 40%", opacity: 0.07 }}
          />
        </div>

        {/* Wave accent top-right */}
        <div
          style={{
            position: "absolute",
            top: -60,
            right: -80,
            width: mobile ? 350 : 700,
            height: mobile ? 350 : 700,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${C.aqua}22 0%, ${C.aqua}05 55%, transparent 72%)`,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -40,
            left: -60,
            width: mobile ? 280 : 520,
            height: mobile ? 280 : 520,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${C.ocean}14 0%, transparent 68%)`,
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: "min(93%, 1480px)",
            margin: "0 auto",
            minHeight: mobile ? "auto" : 680,
            display: "flex",
            flexDirection: mobile ? "column" : "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: mobile ? 20 : 40,
            paddingTop: mobile ? 52 : 60,
            paddingBottom: mobile ? 40 : 60,
          }}
        >
          {/* Left text */}
          <div style={{ width: mobile ? "100%" : "48%", textAlign: mobile ? "center" : "left" }}>
            {/* Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "7px 16px",
                borderRadius: 6,
                background: `${C.aqua}18`,
                border: `1px solid ${C.aqua}40`,
                color: "#0077b6",
                fontSize: 11.5,
                fontWeight: 700,
                letterSpacing: 1.2,
                textTransform: "uppercase",
                marginBottom: 22,
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: C.aqua,
                  animation: "pulse-drop 2.5s ease infinite",
                  flexShrink: 0,
                }}
              />
              Pure Natural Water · Pakistan
            </div>

            {/* Headline */}
            <h1
              style={{
                margin: 0,
                fontSize: mobile ? 48 : 76,
                fontWeight: 900,
                lineHeight: 0.98,
                letterSpacing: -2,
                color: C.navy,
              }}
            >
              Nature in
              <span
                style={{
                  display: "block",
                  backgroundImage: `linear-gradient(135deg, ${C.ocean} 0%, ${C.aqua} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Every Sip
              </span>
            </h1>

            <p
              style={{
                margin: mobile ? "18px auto 0" : "20px 0 0",
                maxWidth: 500,
                color: C.textSub,
                fontSize: mobile ? 15 : 17,
                lineHeight: 1.75,
              }}
            >
              Fresh, pure water inspired by the golden beauty of Cholistan —
              crafted for your home, office, travel and everyday life.
            </p>

            {/* Tag chips */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                justifyContent: mobile ? "center" : "flex-start",
                marginTop: 20,
              }}
            >
              {["100% Pure", "No Additives", "Natural", "Pakistani"].map((t) => (
                <span
                  key={t}
                  style={{
                    padding: "5px 13px",
                    borderRadius: 6,
                    background: `${C.ocean}0D`,
                    border: `1px solid ${C.ocean}18`,
                    color: C.ocean,
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div
              style={{
                display: "flex",
                flexDirection: mobile ? "column" : "row",
                gap: 12,
                justifyContent: mobile ? "center" : "flex-start",
                alignItems: mobile ? "center" : "flex-start",
                marginTop: 30,
              }}
            >
              <Link
                href="/products"
                id="hero-cta-products"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 28px",
                  borderRadius: 8,
                  background: C.ocean,
                  color: C.white,
                  textDecoration: "none",
                  fontSize: 15,
                  fontWeight: 700,
                  boxShadow: "0 8px 28px rgba(0,95,158,0.28)",
                  whiteSpace: "nowrap",
                }}
              >
                Explore Products →
              </Link>
              <Link
                href="/about"
                id="hero-cta-about"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "13px 26px",
                  borderRadius: 8,
                  background: C.white,
                  border: `1.5px solid ${C.aqua}`,
                  color: C.ocean,
                  textDecoration: "none",
                  fontSize: 15,
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                }}
              >
                Our Story
              </Link>
            </div>

            {/* Mini trust icons */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: mobile ? 14 : 22,
                justifyContent: mobile ? "center" : "flex-start",
                marginTop: 30,
              }}
            >
              {[
                { icon: "💧", title: "Pure", sub: "Crystal Clear" },
                { icon: "🌊", title: "Fresh", sub: "Every Bottle" },
                { icon: "🇵🇰", title: "Local", sub: "Pakistani Brand" },
              ].map((f) => (
                <div key={f.title} style={{ display: "flex", alignItems: "center", gap: 9 }}>
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 10,
                      background: C.white,
                      border: `1px solid ${C.aqua}38`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 18,
                      boxShadow: `0 4px 14px ${C.ocean}10`,
                    }}
                  >
                    {f.icon}
                  </div>
                  <div>
                    <div style={{ color: C.navy, fontSize: 13, fontWeight: 700 }}>{f.title}</div>
                    <div style={{ color: C.textMuted, fontSize: 11, marginTop: 1 }}>{f.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right product visual */}
          <div
            style={{
              position: "relative",
              width: mobile ? "100%" : "52%",
              minHeight: mobile ? 340 : 580,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            {/* Ripple rings */}
            {[500, 400, 300].map((s, i) => (
              <div
                key={s}
                style={{
                  position: "absolute",
                  left: "50%",
                  top: mobile ? 30 : 50,
                  transform: "translateX(-50%)",
                  width: mobile ? s * 0.55 : s,
                  height: mobile ? s * 0.55 : s,
                  borderRadius: "50%",
                  border: `1.5px solid ${i === 0 ? `${C.aqua}20` : i === 1 ? `${C.ocean}18` : `${C.aqua}12`}`,
                  animation: `float ${7 + i * 2}s ease-in-out infinite ${i % 2 === 0 ? "" : "reverse"}`,
                }}
              />
            ))}

            {/* Glow pool */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: mobile ? 40 : 60,
                transform: "translateX(-50%)",
                width: mobile ? 260 : 440,
                height: mobile ? 260 : 440,
                borderRadius: "50%",
                background: `radial-gradient(circle, ${C.aqua}20 0%, ${C.ocean}10 45%, transparent 70%)`,
                animation: "float 8s ease-in-out infinite",
              }}
            />

            <Image
              src="/images/heroProducts.png"
              alt="1 Sip Natural Water products"
              width={720}
              height={560}
              priority
              sizes="(max-width: 900px) 90vw, 50vw"
              style={{
                position: "relative",
                zIndex: 2,
                width: "100%",
                maxWidth: mobile ? 380 : 660,
                height: "auto",
                objectFit: "contain",
                filter: `drop-shadow(0 32px 56px ${C.ocean}20)`,
                animation: "float 8s ease-in-out infinite",
              }}
            />

            {/* Floating badges */}
            <div
              style={{
                position: "absolute",
                zIndex: 4,
                top: mobile ? 24 : 70,
                right: mobile ? 8 : 20,
                padding: "11px 15px",
                borderRadius: 10,
                background: C.white,
                border: `1px solid ${C.aqua}35`,
                boxShadow: `0 8px 28px ${C.ocean}14`,
                color: "#0077b6",
                fontSize: 12.5,
                fontWeight: 700,
              }}
            >
              💧 Crystal Pure
            </div>

            <div
              style={{
                position: "absolute",
                zIndex: 4,
                left: mobile ? 8 : 20,
                bottom: mobile ? 18 : 60,
                padding: "11px 15px",
                borderRadius: 10,
                background: C.white,
                border: `1px solid ${C.ocean}25`,
                boxShadow: `0 8px 28px ${C.ocean}14`,
                color: C.ocean,
                fontSize: 12.5,
                fontWeight: 700,
              }}
            >
              🌊 Fresh Every Day
            </div>
          </div>
        </div>

        {/* Wave bottom divider */}
        <div
          style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 50, overflow: "hidden" }}
        >
          <svg viewBox="0 0 1440 50" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
            <path
              d="M0,50 L0,25 C360,5 720,45 1080,20 C1260,10 1380,30 1440,25 L1440,50 Z"
              fill={C.white}
            />
          </svg>
        </div>
      </section>

      {/* ════════════ STATS ════════════ */}
      <section style={{ background: C.white, borderBottom: `1px solid ${C.aqua}18` }}>
        <div
          style={{
            width: "min(93%, 1480px)",
            margin: "0 auto",
            padding: "24px 0",
            display: "grid",
            gridTemplateColumns: mobile ? "repeat(2,1fr)" : "repeat(4,1fr)",
            gap: mobile ? 20 : 0,
          }}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              style={{
                textAlign: "center",
                padding: "10px 16px",
                borderRight: !mobile && i !== stats.length - 1 ? `1px solid ${C.aqua}20` : "none",
              }}
            >
              <div style={{ fontSize: 22, marginBottom: 4 }}>{s.icon}</div>
              <div
                style={{
                  fontSize: mobile ? 30 : 38,
                  fontWeight: 900,
                  backgroundImage: `linear-gradient(135deg, ${C.ocean}, ${C.aqua})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  lineHeight: 1,
                }}
              >
                {s.value}
              </div>
              <div style={{ marginTop: 5, color: C.textMuted, fontSize: 12, fontWeight: 600 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════ WHY 1 SIP ════════════ */}
      <section style={{ background: C.sky, overflow: "hidden", position: "relative" }}>
        <div
          style={{
            position: "absolute",
            top: "-15%",
            right: "-8%",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${C.aqua}14 0%, transparent 68%)`,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: "min(93%, 1480px)",
            margin: "0 auto",
            padding: mobile ? "70px 0 80px" : "90px 0 100px",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: mobile ? 44 : 58 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                padding: "6px 16px",
                borderRadius: 6,
                background: `${C.ocean}0F`,
                border: `1px solid ${C.ocean}22`,
                color: C.ocean,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 1.5,
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Why Choose 1 Sip
            </div>
            <h2
              style={{
                margin: 0,
                fontSize: mobile ? 32 : 48,
                fontWeight: 900,
                color: C.navy,
                letterSpacing: -0.5,
                lineHeight: 1.1,
              }}
            >
              Freshness for{" "}
              <span
                style={{
                  backgroundImage: `linear-gradient(135deg, ${C.ocean}, ${C.aqua})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Every Moment
              </span>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: mobile ? "1fr" : "repeat(4, 1fr)",
              gap: 14,
            }}
          >
            {whyItems.map((item) => (
              <div
                key={item.title}
                style={{
                  padding: "28px 22px",
                  borderRadius: 14,
                  background: C.white,
                  border: `1px solid ${item.accent}18`,
                  boxShadow: `0 6px 28px ${item.accent}0A`,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Top accent bar */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: `linear-gradient(90deg, ${item.accent}, ${C.aqua})`,
                  }}
                />
                <div
                  style={{
                    width: 54,
                    height: 54,
                    borderRadius: 12,
                    background: `${item.accent}12`,
                    border: `1px solid ${item.accent}22`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 26,
                    marginBottom: 18,
                  }}
                >
                  {item.icon}
                </div>
                <h3 style={{ margin: "0 0 8px", color: C.navy, fontSize: 16.5, fontWeight: 800 }}>
                  {item.title}
                </h3>
                <p style={{ margin: 0, color: C.textSub, fontSize: 13.5, lineHeight: 1.7 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave between sky and white */}
      <WaveDivider from={C.sky} to={C.white} />

      {/* ════════════ PRODUCTS PREVIEW ════════════ */}
      <section style={{ background: C.white }}>
        <div
          style={{
            width: "min(93%, 1480px)",
            margin: "0 auto",
            padding: mobile ? "20px 0 70px" : "20px 0 90px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: mobile ? "column" : "row",
              justifyContent: "space-between",
              alignItems: mobile ? "flex-start" : "flex-end",
              gap: 18,
              marginBottom: mobile ? 36 : 48,
            }}
          >
            <div>
              <div
                style={{
                  color: C.aqua,
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 1.5,
                  marginBottom: 10,
                }}
              >
                Our Products
              </div>
              <h2
                style={{
                  margin: 0,
                  fontSize: mobile ? 30 : 44,
                  fontWeight: 900,
                  color: C.navy,
                  lineHeight: 1.1,
                  letterSpacing: -0.5,
                }}
              >
                Pure Water for{" "}
                <span
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${C.ocean}, ${C.aqua})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Every Need
                </span>
              </h2>
            </div>
            <Link
              href="/products"
              id="home-viewall"
              style={{
                padding: "10px 22px",
                borderRadius: 8,
                border: `1.5px solid ${C.ocean}`,
                color: C.ocean,
                textDecoration: "none",
                fontSize: 13.5,
                fontWeight: 700,
                background: `${C.ocean}06`,
                whiteSpace: "nowrap",
              }}
            >
              View All →
            </Link>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: mobile ? "1fr" : "repeat(3, 1fr)",
              gap: 16,
            }}
          >
            {products.map((p) => (
              <div
                key={p.size}
                style={{
                  padding: "28px 24px",
                  borderRadius: 14,
                  background: C.sky,
                  border: `1px solid ${p.col}20`,
                  boxShadow: `0 4px 20px ${p.col}0C`,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Water wave bg */}
                <div
                  style={{
                    position: "absolute",
                    bottom: -10,
                    left: -10,
                    right: -10,
                    height: 60,
                    background: `linear-gradient(180deg, transparent, ${p.col}12)`,
                    borderRadius: "0 0 14px 14px",
                  }}
                />
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    alignSelf: "flex-start",
                    padding: "5px 14px",
                    borderRadius: 6,
                    background: `${p.col}18`,
                    border: `1px solid ${p.col}30`,
                    color: p.col,
                    fontSize: 13.5,
                    fontWeight: 800,
                    marginBottom: 14,
                  }}
                >
                  {p.size}
                </div>
                <div style={{ color: C.navy, fontSize: 17, fontWeight: 800, marginBottom: 6 }}>
                  {p.use}
                </div>
                <p style={{ margin: "0 0 18px", color: C.textSub, fontSize: 13.5, lineHeight: 1.65 }}>
                  {p.desc}
                </p>
                <Link
                  href="/products"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 5,
                    color: p.col,
                    textDecoration: "none",
                    fontSize: 13,
                    fontWeight: 700,
                  }}
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ CHOLISTAN STORY ════════════ */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          background: C.sky,
          paddingTop: 0,
        }}
      >
        {/* Wave top */}
        <div style={{ height: 50, overflow: "hidden", background: C.white }}>
          <svg viewBox="0 0 1440 50" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
            <path
              d="M0,0 L0,25 C360,45 720,5 1080,30 C1260,40 1380,20 1440,25 L1440,0 Z"
              fill={C.sky}
            />
          </svg>
        </div>

        <div
          style={{
            position: "absolute",
            right: "-5%",
            top: "20%",
            width: 550,
            height: 550,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${C.aqua}12 0%, transparent 68%)`,
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: "min(93%, 1480px)",
            margin: "0 auto",
            padding: mobile ? "50px 0 70px" : "60px 0 90px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: mobile ? "1fr" : "1fr 1fr",
              gap: mobile ? 44 : 80,
              alignItems: "center",
            }}
          >
            {/* Image */}
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: 18,
                  background: `linear-gradient(135deg, ${C.aqua}28, ${C.ocean}18)`,
                  transform: "translate(10px, 10px)",
                }}
              />
              <div
                style={{
                  position: "relative",
                  borderRadius: 18,
                  overflow: "hidden",
                  border: `1px solid ${C.aqua}25`,
                  boxShadow: `0 20px 60px ${C.ocean}14`,
                }}
              >
                <Image
                  src="/images/cholistanStory.png"
                  alt="Cholistan desert"
                  width={680}
                  height={460}
                  sizes="(max-width: 900px) 90vw, 45vw"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: `linear-gradient(180deg, transparent 50%, ${C.navy}50 100%)`,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 20,
                    left: 20,
                    padding: "12px 17px",
                    borderRadius: 10,
                    background: "rgba(255,255,255,0.93)",
                    backdropFilter: "blur(12px)",
                    border: `1px solid ${C.aqua}28`,
                    boxShadow: `0 6px 22px ${C.ocean}10`,
                  }}
                >
                  <div style={{ color: C.aqua, fontSize: 10.5, fontWeight: 700, marginBottom: 2 }}>
                    From the Heart of Cholistan
                  </div>
                  <div style={{ color: C.navy, fontSize: 12.5, fontWeight: 700 }}>
                    Desert · Water · Nature · Pakistan
                  </div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div>
              <div
                style={{
                  color: "#f59e0b",
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 1.5,
                  marginBottom: 14,
                }}
              >
                Inspired by Cholistan
              </div>
              <h2
                style={{
                  margin: 0,
                  fontSize: mobile ? 30 : 44,
                  fontWeight: 900,
                  color: C.navy,
                  lineHeight: 1.1,
                  letterSpacing: -0.5,
                }}
              >
                The Land of{" "}
                <span
                  style={{
                    backgroundImage: "linear-gradient(135deg, #f59e0b, #f97316)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Endless Beauty
                </span>
              </h2>
              <p style={{ marginTop: 18, marginBottom: 13, color: C.textSub, fontSize: mobile ? 14.5 : 16, lineHeight: 1.8 }}>
                Cholistan is one of Pakistan&apos;s most distinctive landscapes — known for its golden
                desert, wide horizons, historic forts and breathtaking natural beauty.
              </p>
              <p style={{ margin: 0, color: C.textSub, fontSize: mobile ? 14.5 : 16, lineHeight: 1.8 }}>
                The identity of 1 Sip draws from this land, combining water, nature and Pakistani
                character in one unforgettable brand experience.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: 10,
                  marginTop: 26,
                }}
              >
                {[
                  { icon: "🏜️", label: "Desert", col: "#f59e0b" },
                  { icon: "💧", label: "Water", col: C.aqua },
                  { icon: "🌿", label: "Nature", col: "#22c55e" },
                  { icon: "🕌", label: "Heritage", col: C.ocean },
                ].map((d) => (
                  <div
                    key={d.label}
                    style={{
                      padding: "14px 6px",
                      borderRadius: 10,
                      background: C.white,
                      border: `1px solid ${d.col}20`,
                      textAlign: "center",
                      boxShadow: `0 3px 12px ${d.col}0A`,
                    }}
                  >
                    <div style={{ fontSize: 22, marginBottom: 5 }}>{d.icon}</div>
                    <div style={{ color: d.col, fontSize: 10.5, fontWeight: 800 }}>{d.label}</div>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                id="home-story-cta"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  marginTop: 26,
                  padding: "12px 24px",
                  borderRadius: 8,
                  background: "rgba(245,158,11,0.10)",
                  border: "1px solid rgba(245,158,11,0.25)",
                  color: "#d97706",
                  textDecoration: "none",
                  fontSize: 14,
                  fontWeight: 700,
                }}
              >
                Read Our Full Story →
              </Link>
            </div>
          </div>
        </div>

        {/* Wave bottom */}
        <div style={{ height: 50, overflow: "hidden" }}>
          <svg viewBox="0 0 1440 50" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
            <path d="M0,50 L0,25 C360,5 720,45 1080,20 C1260,10 1380,30 1440,25 L1440,50 Z" fill={C.white} />
          </svg>
        </div>
      </section>

      {/* ════════════ QUALITY ════════════ */}
      <section style={{ background: C.white }}>
        <div
          style={{
            width: "min(93%, 1480px)",
            margin: "0 auto",
            padding: mobile ? "50px 0 70px" : "60px 0 90px",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: mobile ? 40 : 52 }}>
            <div
              style={{
                display: "inline-flex",
                gap: 7,
                padding: "6px 16px",
                borderRadius: 6,
                background: `${C.aqua}12`,
                border: `1px solid ${C.aqua}28`,
                color: "#0077b6",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 1.5,
                textTransform: "uppercase",
                marginBottom: 14,
              }}
            >
              Quality Process
            </div>
            <h2
              style={{
                margin: 0,
                fontSize: mobile ? 30 : 44,
                fontWeight: 900,
                color: C.navy,
                lineHeight: 1.1,
                letterSpacing: -0.5,
              }}
            >
              Purity You Can{" "}
              <span
                style={{
                  backgroundImage: `linear-gradient(135deg, ${C.ocean}, ${C.aqua})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Trust
              </span>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: mobile ? "1fr 1fr" : "repeat(4, 1fr)",
              gap: 14,
            }}
          >
            {qualitySteps.map((step) => (
              <div
                key={step.num}
                style={{
                  padding: "26px 20px",
                  borderRadius: 14,
                  background: C.sky,
                  border: `1px solid ${step.col}18`,
                  textAlign: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Step number watermark */}
                <div
                  style={{
                    position: "absolute",
                    top: -6,
                    right: 8,
                    fontSize: 64,
                    fontWeight: 900,
                    color: `${step.col}0C`,
                    lineHeight: 1,
                    userSelect: "none",
                  }}
                >
                  {step.num}
                </div>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{step.icon}</div>
                <div style={{ color: step.col, fontSize: 10.5, fontWeight: 700, letterSpacing: 0.5, marginBottom: 5 }}>
                  STEP {step.num}
                </div>
                <h3 style={{ margin: 0, color: C.navy, fontSize: 15, fontWeight: 800 }}>
                  {step.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ TESTIMONIALS ════════════ */}
      <section style={{ background: C.sky, overflow: "hidden", position: "relative" }}>
        {/* Wave top */}
        <div style={{ height: 50, overflow: "hidden", background: C.white }}>
          <svg viewBox="0 0 1440 50" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
            <path d="M0,0 L0,25 C360,45 720,5 1080,30 C1260,40 1380,20 1440,25 L1440,0 Z" fill={C.sky} />
          </svg>
        </div>

        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: "min(93%, 1480px)",
            margin: "0 auto",
            padding: mobile ? "40px 0 70px" : "50px 0 88px",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: mobile ? 36 : 48 }}>
            <h2 style={{ margin: 0, fontSize: mobile ? 28 : 40, fontWeight: 900, color: C.navy, letterSpacing: -0.5 }}>
              What People Say
            </h2>
            <p style={{ margin: "12px auto 0", maxWidth: 440, color: C.textSub, fontSize: 15, lineHeight: 1.65 }}>
              Real experiences from customers across Pakistan.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: mobile ? "1fr" : "repeat(3, 1fr)",
              gap: 14,
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                style={{
                  padding: "26px 24px",
                  borderRadius: 14,
                  background: C.white,
                  border: `1px solid ${C.aqua}18`,
                  boxShadow: `0 4px 22px ${C.ocean}08`,
                  position: "relative",
                }}
              >
                {/* Quote mark */}
                <div
                  style={{
                    position: "absolute",
                    top: 14,
                    right: 20,
                    fontSize: 48,
                    color: `${C.aqua}22`,
                    lineHeight: 1,
                    fontFamily: "serif",
                    fontWeight: 900,
                  }}
                >
                  "
                </div>
                {/* Top aqua bar */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    borderRadius: "14px 14px 0 0",
                    background: `linear-gradient(90deg, ${C.ocean}, ${C.aqua})`,
                  }}
                />
                <div style={{ color: "#f59e0b", fontSize: 14, marginBottom: 12, letterSpacing: 2 }}>
                  ★★★★★
                </div>
                <p style={{ margin: "0 0 16px", color: C.textSub, fontSize: 14, lineHeight: 1.75, fontStyle: "italic" }}>
                  &quot;{t.text}&quot;
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: "50%",
                      background: `${C.ocean}14`,
                      border: `1.5px solid ${C.aqua}30`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: C.ocean,
                      fontSize: 15,
                      fontWeight: 900,
                    }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <div style={{ color: C.navy, fontSize: 13.5, fontWeight: 700 }}>{t.name}</div>
                    <div style={{ color: C.textMuted, fontSize: 11.5 }}>{t.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ CTA BANNER ════════════ */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          background: C.ocean,
        }}
      >
        {/* Wave top */}
        <div style={{ height: 50, overflow: "hidden" }}>
          <svg viewBox="0 0 1440 50" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
            <path d="M0,50 L0,25 C360,5 720,45 1080,20 C1260,10 1380,30 1440,25 L1440,50 Z" fill={C.sky} />
          </svg>
        </div>

        {/* Aqua sheen */}
        <div
          style={{
            position: "absolute",
            right: "-8%",
            top: "30%",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${C.aqua}35 0%, transparent 60%)`,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "-6%",
            bottom: "20%",
            width: 450,
            height: 450,
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 65%)`,
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: "min(93%, 1480px)",
            margin: "0 auto",
            padding: mobile ? "50px 0 60px" : "70px 0 80px",
            display: "flex",
            flexDirection: mobile ? "column" : "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 32,
          }}
        >
          <div>
            <div style={{ color: `${C.aqua}`, fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 12 }}>
              1 Sip Natural Water
            </div>
            <h2
              style={{
                margin: 0,
                fontSize: mobile ? 28 : 42,
                fontWeight: 900,
                color: C.white,
                lineHeight: 1.12,
                letterSpacing: -0.5,
              }}
            >
              Ready for pure
              <br />
              <span style={{ color: C.aqua }}>natural refreshment?</span>
            </h2>
            <p style={{ margin: "12px 0 0", color: "rgba(255,255,255,0.55)", fontSize: mobile ? 14 : 16, lineHeight: 1.65 }}>
              Order 500ml, 1.5L or 19L — contact us today.
            </p>
          </div>
          <div style={{ display: "flex", gap: 12, flexShrink: 0, flexWrap: "wrap" }}>
            <Link
              href="/contact"
              id="banner-contact"
              style={{
                padding: "14px 30px",
                borderRadius: 8,
                background: C.white,
                color: C.ocean,
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 800,
                boxShadow: "0 8px 28px rgba(0,0,0,0.15)",
                whiteSpace: "nowrap",
              }}
            >
              Contact Us →
            </Link>
            <Link
              href="/products"
              id="banner-products"
              style={{
                padding: "13px 28px",
                borderRadius: 8,
                background: "rgba(255,255,255,0.12)",
                border: "1.5px solid rgba(255,255,255,0.28)",
                color: C.white,
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 600,
                whiteSpace: "nowrap",
              }}
            >
              View Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}