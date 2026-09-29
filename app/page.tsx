"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const C = {
  ocean: "#0284c7",
  oceanDark: "#0369a1",
  aqua: "#00b4d8",
  cyan: "#06b6d4",
  navy: "#0c2340",
  slate: "#475569",
  lightSky: "#f0f9ff",
  iceGlow: "#e0f2fe",
  white: "#ffffff",
  borderLight: "rgba(2, 132, 199, 0.12)",
};

const stats = [
  { value: "100%", label: "Pure Natural Water", icon: "💧" },
  { value: "7+", label: "Filtration Stages", icon: "🔬" },
  { value: "3", label: "Convenient Sizes", icon: "🫙" },
  { value: "0", label: "Chemical Additives", icon: "🌱" },
];

const whyFeatures = [
  {
    icon: "💧",
    title: "Crystal Pure & Pristine",
    desc: "Every drop undergoes multi-barrier RO, micro-filtration and UV disinfection, ensuring 100% clean drinking water.",
    badge: "Laboratory Tested",
  },
  {
    icon: "🏜️",
    title: "Cholistan Heart & Heritage",
    desc: "Drawing inspiration from the legendary desert landscapes, providing cool, rejuvenating hydration to the arid plains.",
    badge: "Local Identity",
  },
  {
    icon: "🛡️",
    title: "BPA-Free Food Grade Bottling",
    desc: "Hygienically washed, hermetically sealed, and packaged under sterile clinical conditions for your family's safety.",
    badge: "100% Safe",
  },
  {
    icon: "⚡",
    title: "Fast Office & Home Supply",
    desc: "Direct deliveries of 19L dispenser bottles and cartons for residences, commercial clinics, and corporate offices.",
    badge: "Active Delivery",
  },
];

const products = [
  {
    size: "500ml",
    title: "On-the-Go Refreshment",
    ideal: "Travel, Fitness, Commuting & Cars",
    desc: "Ergonomically designed pocket bottle that slips into bags, gym holders, and cup racks. Clean hydration on the move.",
    color: "#0284c7",
  },
  {
    size: "1.5L",
    title: "Family Dining Essential",
    ideal: "Home Dining, Guests & Kitchen",
    desc: "The classic family table companion. Ample volume for shared family meals, guest hospitality, and daily domestic hydration.",
    color: "#00b4d8",
  },
  {
    size: "19L",
    title: "Commercial & Home Dispenser",
    ideal: "Offices, Clinics, Schools & Homes",
    desc: "Sturdy food-grade gallon bottle designed for standard water coolers and electric dispensers. Economic and always ready.",
    color: "#0369a1",
  },
];

const puritySteps = [
  { step: "01", title: "Source Extraction", desc: "Sourced from protected subterranean aquifers beneath pristine natural soil strata." },
  { step: "02", title: "Multi-Sand & Carbon Filter", desc: "Removes particulate matter, organic impurities, and clarifies natural transparency." },
  { step: "03", title: "Reverse Osmosis (RO)", desc: "Reduces unwanted salts and heavy ions to optimal WHO drinking water standards." },
  { step: "04", title: "UV & Ozone Sterilization", desc: "Double safety barrier eliminates 99.9% of microbial life without adding chemicals." },
];

const reviews = [
  {
    name: "Dr. Hamza Tariq",
    role: "Fort Abbas Medical Clinic",
    comment: "We order 1 Sip 19L dispenser bottles for our patient waiting area and staff. Crisp, refreshing taste with zero unpleasant odor.",
    rating: 5,
  },
  {
    name: "Farhan Saeed",
    role: "Verified Family Customer",
    comment: "The 1.5L bottles are our home standard now. Children love the natural taste and we have peace of mind regarding purity.",
    rating: 5,
  },
  {
    name: "Ayesha Malik",
    role: "School Administrator",
    comment: "Reliable delivery schedules and the water bottles arrive spotless. Mian Rayan Traders provide commendable customer care.",
    rating: 5,
  },
];

export default function HomePage() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth <= 900);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ background: "#ffffff", overflow: "hidden" }}>
      {/* ══════════════ 1. HERO SECTION ══════════════ */}
      <section
        style={{
          position: "relative",
          minHeight: mobile ? "auto" : "88vh",
          display: "flex",
          alignItems: "center",
          background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 45%, #ffffff 100%)",
          overflow: "hidden",
          padding: mobile ? "40px 0 50px" : "60px 0 80px",
        }}
      >
        {/* Ambient Water Rings in Background */}
        <div
          style={{
            position: "absolute",
            top: "-15%",
            right: "-5%",
            width: mobile ? 360 : 750,
            height: mobile ? 360 : 750,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0, 180, 216, 0.16) 0%, rgba(2, 132, 199, 0.04) 50%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-10%",
            left: "-10%",
            width: mobile ? 300 : 600,
            height: mobile ? 300 : 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            width: "min(93%, 1280px)",
            margin: "0 auto",
            display: "flex",
            flexDirection: mobile ? "column" : "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: mobile ? 36 : 48,
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* Left Text */}
          <div style={{ flex: "1 1 50%", maxWidth: 620, textAlign: mobile ? "center" : "left" }}>
            {/* Origin Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 16px",
                borderRadius: 30,
                background: "rgba(2, 132, 199, 0.08)",
                border: "1px solid rgba(2, 132, 199, 0.2)",
                color: C.ocean,
                fontSize: 12.5,
                fontWeight: 700,
                letterSpacing: 1,
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#00b4d8",
                  boxShadow: "0 0 8px #00b4d8",
                }}
              />
              Pure Natural Water · Cholistan Heritage
            </div>

            {/* Headline */}
            <h1
              style={{
                margin: "0 0 18px",
                fontSize: mobile ? 42 : 68,
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: -1.5,
                color: C.navy,
              }}
            >
              Nature in{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #0284c7 0%, #00b4d8 60%, #06b6d4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "inline-block",
                }}
              >
                Every Sip
              </span>
            </h1>

            <p
              style={{
                margin: "0 0 28px",
                fontSize: mobile ? 15.5 : 18,
                color: C.slate,
                lineHeight: 1.7,
                maxWidth: 540,
              }}
            >
              Experience crisp, pure, and naturally refreshing drinking water inspired by the golden sands of Cholistan — processed through multi-stage purification for everyday health.
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 14,
                justifyContent: mobile ? "center" : "flex-start",
                alignItems: "center",
                marginBottom: 36,
              }}
            >
              <Link
                href="/products"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 30px",
                  borderRadius: 12,
                  background: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
                  color: "#ffffff",
                  fontSize: 15,
                  fontWeight: 700,
                  textDecoration: "none",
                  boxShadow: "0 10px 28px rgba(2, 132, 199, 0.35)",
                  transition: "transform 0.2s ease",
                }}
              >
                <span>Explore Bottle Sizes</span>
                <span>→</span>
              </Link>

              <Link
                href="https://wa.me/923126016060?text=Hello%201%20Sip,%20I%20want%20to%20order%20water%20bottles"
                target="_blank"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "13px 26px",
                  borderRadius: 12,
                  background: "#ffffff",
                  border: "1.5px solid rgba(2, 132, 199, 0.25)",
                  color: C.navy,
                  fontSize: 15,
                  fontWeight: 700,
                  textDecoration: "none",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.05)",
                  transition: "background 0.2s ease",
                }}
              >
                <span>💬 Quick WhatsApp Order</span>
              </Link>
            </div>

            {/* Quick Micro-Features */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 12,
                borderTop: "1px solid rgba(2, 132, 199, 0.14)",
                paddingTop: 22,
              }}
            >
              {[
                { icon: "💧", title: "Pure Taste", sub: "Balanced Minerals" },
                { icon: "🔬", title: "Tested Purity", sub: "Multi-Filter RO" },
                { icon: "🚚", title: "Direct Supply", sub: "Fort Abbas Depot" },
              ].map((m) => (
                <div key={m.title} style={{ textAlign: mobile ? "center" : "left" }}>
                  <div style={{ fontSize: 18, marginBottom: 2 }}>{m.icon}</div>
                  <div style={{ fontSize: 13, fontWeight: 800, color: C.navy }}>{m.title}</div>
                  <div style={{ fontSize: 11.5, color: C.slate }}>{m.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Image */}
          <div
            style={{
              flex: "1 1 50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {/* Halo Rings */}
            <div
              style={{
                position: "absolute",
                width: mobile ? 280 : 460,
                height: mobile ? 280 : 460,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(0, 180, 216, 0.2) 0%, rgba(2, 132, 199, 0.05) 60%, transparent 70%)",
                filter: "blur(20px)",
              }}
            />

            <div
              style={{
                position: "relative",
                zIndex: 2,
                width: "100%",
                maxWidth: mobile ? 360 : 540,
              }}
            >
              <Image
                src="/images/heroProducts.png"
                alt="1 Sip Mineral Water Range"
                width={650}
                height={520}
                priority
                sizes="(max-width: 900px) 90vw, 45vw"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  filter: "drop-shadow(0 24px 44px rgba(2, 132, 199, 0.2))",
                }}
              />

              {/* Floating Quality Badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: mobile ? 10 : 30,
                  left: mobile ? 0 : -10,
                  background: "rgba(255, 255, 255, 0.92)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(0, 180, 216, 0.3)",
                  borderRadius: 14,
                  padding: "10px 16px",
                  boxShadow: "0 10px 24px rgba(2, 132, 199, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "rgba(0, 180, 216, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 18,
                  }}
                >
                  ✓
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 800, color: C.navy }}>100% Food-Grade</div>
                  <div style={{ fontSize: 11, color: C.slate }}>Sterilized Bottles</div>
                </div>
              </div>

              {/* Floating Origin Badge */}
              <div
                style={{
                  position: "absolute",
                  top: mobile ? 10 : 25,
                  right: mobile ? 0 : -10,
                  background: "rgba(255, 255, 255, 0.92)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(2, 132, 199, 0.3)",
                  borderRadius: 14,
                  padding: "10px 16px",
                  boxShadow: "0 10px 24px rgba(2, 132, 199, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "rgba(2, 132, 199, 0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 18,
                  }}
                >
                  🌊
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 800, color: C.navy }}>Crystal Fresh</div>
                  <div style={{ fontSize: 11, color: C.slate }}>Natural Sweetness</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ 2. PURITY METRICS BAR ══════════════ */}
      <section
        style={{
          background: "#ffffff",
          borderTop: "1px solid rgba(2, 132, 199, 0.1)",
          borderBottom: "1px solid rgba(2, 132, 199, 0.1)",
          padding: "30px 0",
        }}
      >
        <div
          style={{
            width: "min(93%, 1280px)",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: mobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
            gap: mobile ? 24 : 32,
          }}
        >
          {stats.map((s, idx) => (
            <div
              key={s.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                justifyContent: mobile ? "flex-start" : "center",
                borderRight: !mobile && idx < stats.length - 1 ? "1px solid rgba(2, 132, 199, 0.12)" : "none",
                paddingRight: !mobile ? 20 : 0,
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
                  fontSize: 22,
                  flexShrink: 0,
                }}
              >
                {s.icon}
              </div>
              <div>
                <div style={{ fontSize: 28, fontWeight: 900, color: C.navy, lineHeight: 1.1 }}>
                  {s.value}
                </div>
                <div style={{ fontSize: 13, fontWeight: 600, color: C.slate }}>
                  {s.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════ 3. WHY CHOOSE 1 SIP ══════════════ */}
      <section
        style={{
          background: "linear-gradient(180deg, #f8fcff 0%, #ffffff 100%)",
          padding: mobile ? "60px 0" : "90px 0",
          position: "relative",
        }}
      >
        <div style={{ width: "min(93%, 1280px)", margin: "0 auto" }}>
          {/* Section Header */}
          <div style={{ textAlign: "center", maxWidth: 650, margin: "0 auto 52px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "4px 14px",
                borderRadius: 20,
                background: "rgba(0, 180, 216, 0.1)",
                color: C.ocean,
                fontSize: 12,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: 1.2,
                marginBottom: 12,
              }}
            >
              Our Purity Commitment
            </div>
            <h2
              style={{
                margin: "0 0 14px",
                fontSize: mobile ? 30 : 42,
                fontWeight: 900,
                color: C.navy,
                letterSpacing: -0.8,
              }}
            >
              Why 1 Sip is the Standard for Pure Water
            </h2>
            <p style={{ margin: 0, fontSize: 16, color: C.slate, lineHeight: 1.6 }}>
              Carefully processed to preserve pristine minerals while removing any potential micro-contaminants.
            </p>
          </div>

          {/* Cards Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: mobile ? "1fr" : "repeat(2, 1fr)",
              gap: 24,
            }}
          >
            {whyFeatures.map((f) => (
              <div
                key={f.title}
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(2, 132, 199, 0.12)",
                  borderRadius: 18,
                  padding: "32px",
                  boxShadow: "0 10px 30px rgba(2, 132, 199, 0.04)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: 18,
                    }}
                  >
                    <div
                      style={{
                        width: 52,
                        height: 52,
                        borderRadius: 14,
                        background: "linear-gradient(135deg, rgba(2, 132, 199, 0.12) 0%, rgba(0, 180, 216, 0.08) 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 26,
                      }}
                    >
                      {f.icon}
                    </div>
                    <span
                      style={{
                        fontSize: 11.5,
                        fontWeight: 700,
                        color: C.ocean,
                        background: "rgba(2, 132, 199, 0.08)",
                        padding: "4px 10px",
                        borderRadius: 20,
                      }}
                    >
                      {f.badge}
                    </span>
                  </div>

                  <h3 style={{ margin: "0 0 10px", fontSize: 20, fontWeight: 800, color: C.navy }}>
                    {f.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: 14.5, color: C.slate, lineHeight: 1.7 }}>
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ 4. BOTTLE SIZES OVERVIEW ══════════════ */}
      <section
        style={{
          background: "#ffffff",
          padding: mobile ? "60px 0" : "90px 0",
          borderTop: "1px solid rgba(2, 132, 199, 0.1)",
        }}
      >
        <div style={{ width: "min(93%, 1280px)", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              flexDirection: mobile ? "column" : "row",
              justifyContent: "space-between",
              alignItems: mobile ? "flex-start" : "flex-end",
              gap: 20,
              marginBottom: 44,
            }}
          >
            <div>
              <div
                style={{
                  color: C.ocean,
                  fontSize: 12,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 1.2,
                  marginBottom: 8,
                }}
              >
                Available Formats
              </div>
              <h2
                style={{
                  margin: 0,
                  fontSize: mobile ? 28 : 40,
                  fontWeight: 900,
                  color: C.navy,
                  letterSpacing: -0.8,
                }}
              >
                Tailored for Every Occasion
              </h2>
            </div>
            <Link
              href="/products"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontSize: 14.5,
                fontWeight: 700,
                color: C.ocean,
                textDecoration: "none",
                background: "rgba(2, 132, 199, 0.08)",
                padding: "8px 18px",
                borderRadius: 10,
              }}
            >
              <span>View All Products</span>
              <span>→</span>
            </Link>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: mobile ? "1fr" : "repeat(3, 1fr)",
              gap: 24,
            }}
          >
            {products.map((p) => (
              <div
                key={p.size}
                style={{
                  borderRadius: 20,
                  background: "linear-gradient(180deg, #f0f9ff 0%, #ffffff 100%)",
                  border: "1.5px solid rgba(2, 132, 199, 0.14)",
                  padding: "32px 28px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "0 8px 24px rgba(2, 132, 199, 0.05)",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "inline-block",
                      fontSize: 32,
                      fontWeight: 900,
                      color: p.color,
                      lineHeight: 1,
                      marginBottom: 8,
                    }}
                  >
                    {p.size}
                  </div>
                  <h3 style={{ margin: "0 0 6px", fontSize: 19, fontWeight: 800, color: C.navy }}>
                    {p.title}
                  </h3>
                  <div
                    style={{
                      fontSize: 12.5,
                      fontWeight: 700,
                      color: C.ocean,
                      marginBottom: 14,
                      background: "rgba(2, 132, 199, 0.08)",
                      display: "inline-block",
                      padding: "3px 10px",
                      borderRadius: 6,
                    }}
                  >
                    {p.ideal}
                  </div>
                  <p style={{ margin: "0 0 24px", fontSize: 14, color: C.slate, lineHeight: 1.65 }}>
                    {p.desc}
                  </p>
                </div>

                <Link
                  href="/contact"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    padding: "12px",
                    borderRadius: 10,
                    background: "rgba(2, 132, 199, 0.08)",
                    border: "1px solid rgba(2, 132, 199, 0.2)",
                    color: C.navy,
                    fontWeight: 700,
                    fontSize: 14,
                    textDecoration: "none",
                  }}
                >
                  <span>Order {p.size}</span>
                  <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ 5. CHOLISTAN HERITAGE SPOTLIGHT ══════════════ */}
      <section
        style={{
          background: "linear-gradient(135deg, #041c32 0%, #032a48 100%)",
          color: "#ffffff",
          padding: mobile ? "60px 0" : "90px 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0, 180, 216, 0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            width: "min(93%, 1280px)",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: mobile ? "1fr" : "1.1fr 0.9fr",
            gap: mobile ? 36 : 56,
            alignItems: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "4px 14px",
                borderRadius: 20,
                background: "rgba(0, 180, 216, 0.15)",
                border: "1px solid rgba(0, 180, 216, 0.3)",
                color: C.aqua,
                fontSize: 12,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: 1.2,
                marginBottom: 16,
              }}
            >
              The Story of 1 Sip
            </div>
            <h2
              style={{
                margin: "0 0 18px",
                fontSize: mobile ? 28 : 42,
                fontWeight: 900,
                lineHeight: 1.15,
                letterSpacing: -0.8,
              }}
            >
              Born from the Golden Sands, Dedicated to Pure Life
            </h2>
            <p style={{ margin: "0 0 18px", fontSize: 15.5, color: "#cbd5e1", lineHeight: 1.75 }}>
              Cholistan is known for its majestic dunes, resilience, and rich traditions. In an environment where every single drop of water represents life and survival, 1 Sip was founded with a clear vow: to bring pure, crisp, and refreshing drinking water to every Pakistani home.
            </p>
            <p style={{ margin: "0 0 28px", fontSize: 14.5, color: "#94a3b8", lineHeight: 1.7 }}>
              From our modern facility in Fort Abbas, Mian Rayan Traders oversees strict quality control, hygiene audits, and automated bottling.
            </p>

            <Link
              href="/about"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 26px",
                borderRadius: 10,
                background: "linear-gradient(135deg, #0284c7 0%, #00b4d8 100%)",
                color: "#ffffff",
                fontSize: 14.5,
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 6px 20px rgba(0, 180, 216, 0.3)",
              }}
            >
              <span>Read Our Full Story</span>
              <span>→</span>
            </Link>
          </div>

          {/* Quality Purification Process Checklist */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              borderRadius: 20,
              padding: "32px",
              backdropFilter: "blur(16px)",
            }}
          >
            <h3 style={{ margin: "0 0 20px", fontSize: 20, fontWeight: 800, color: "#ffffff" }}>
              4-Stage Purity Guarantee
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {puritySteps.map((st) => (
                <div key={st.step} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 10,
                      background: "rgba(0, 180, 216, 0.2)",
                      border: "1px solid rgba(0, 180, 216, 0.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 13,
                      fontWeight: 800,
                      color: C.aqua,
                      flexShrink: 0,
                    }}
                  >
                    {st.step}
                  </div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "#ffffff", marginBottom: 3 }}>
                      {st.title}
                    </div>
                    <div style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.5 }}>
                      {st.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ 6. TESTIMONIALS ══════════════ */}
      <section
        style={{
          background: "#ffffff",
          padding: mobile ? "60px 0" : "90px 0",
        }}
      >
        <div style={{ width: "min(93%, 1280px)", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 48px" }}>
            <div
              style={{
                color: C.ocean,
                fontSize: 12,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: 1.2,
                marginBottom: 8,
              }}
            >
              Customer Confidence
            </div>
            <h2
              style={{
                margin: 0,
                fontSize: mobile ? 28 : 38,
                fontWeight: 900,
                color: C.navy,
                letterSpacing: -0.8,
              }}
            >
              Trusted Across Homes & Offices
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: mobile ? "1fr" : "repeat(3, 1fr)",
              gap: 24,
            }}
          >
            {reviews.map((r) => (
              <div
                key={r.name}
                style={{
                  background: "#f8fafc",
                  border: "1px solid rgba(2, 132, 199, 0.1)",
                  borderRadius: 16,
                  padding: "28px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ color: "#f59e0b", fontSize: 15, marginBottom: 12 }}>
                    {"★".repeat(r.rating)}
                  </div>
                  <p style={{ margin: "0 0 20px", fontSize: 14.5, color: C.slate, lineHeight: 1.7, fontStyle: "italic" }}>
                    &ldquo;{r.comment}&rdquo;
                  </p>
                </div>
                <div style={{ borderTop: "1px solid rgba(0, 0, 0, 0.06)", paddingTop: 14 }}>
                  <div style={{ fontSize: 15, fontWeight: 800, color: C.navy }}>{r.name}</div>
                  <div style={{ fontSize: 12.5, color: C.ocean }}>{r.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}