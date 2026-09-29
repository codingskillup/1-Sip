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
  borderLight: "rgba(2, 132, 199, 0.14)",
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
    desc: "Every drop undergoes multi-barrier Reverse Osmosis, micro-filtration, and dual UV sterilization to ensure 100% clean drinking water.",
    badge: "Laboratory Certified",
  },
  {
    icon: "🏜️",
    title: "Cholistan Heart & Heritage",
    desc: "Rooted in the resilient desert landscapes of Fort Abbas, where clean water has always been revered as life's greatest blessing.",
    badge: "Proudly Pakistani",
  },
  {
    icon: "🛡️",
    title: "BPA-Free Food Grade Bottling",
    desc: "Hygienically washed, hermetically sealed, and bottled inside medical cleanroom enclosures for your family's complete peace of mind.",
    badge: "100% Safe",
  },
  {
    icon: "⚡",
    title: "Fast Doorstep Supply",
    desc: "Scheduled doorstep delivery of 19L dispenser bottles and cartons for homes, medical clinics, and corporate offices across Punjab.",
    badge: "Direct Depot Fleet",
  },
];

const products = [
  {
    id: "500ml",
    size: "500ml",
    title: "On-the-Go Pocket Bottle",
    ideal: "Travel, Fitness, Commuting & Cars",
    pack: "24-Bottle Carton",
    desc: "Ergonomically contoured for effortless one-handed grip. Fits into vehicle cup racks, backpacks, and gym kits.",
    color: "#0284c7",
  },
  {
    id: "1.5L",
    size: "1.5L",
    title: "Family Dining Essential",
    ideal: "Dining Table, Cooking & Guests",
    pack: "6 or 12 Bottle Pack",
    desc: "The essential family table companion. Ample volume for shared meals, domestic cooking, tea, and refrigerator chilling.",
    color: "#00b4d8",
  },
  {
    id: "19L",
    size: "19L",
    title: "Commercial & Home Gallon",
    ideal: "Universal Electric Water Dispensers",
    pack: "Refillable Dispenser Gallon",
    desc: "Heavy-duty food-grade gallon engineered for universal hot and cold water coolers. Economical, sanitary, and always ready.",
    color: "#0369a1",
  },
];

const healthBenefits = [
  {
    icon: "⚡",
    title: "Cellular Energy",
    desc: "Naturally balanced minerals replenish vital electrolytes, fighting midday fatigue and boosting alertness.",
  },
  {
    icon: "🌿",
    title: "Gentle Digestion",
    desc: "With a neutral pH of 7.4 and optimal low TDS, 1 Sip promotes digestive ease and smooth absorption.",
  },
  {
    icon: "✨",
    title: "Skin Radiance",
    desc: "Pure, uncontaminated hydration flushes toxins from the body, supporting natural complexion vitality.",
  },
  {
    icon: "🍲",
    title: "Pure Cooking Taste",
    desc: "Preserves the authentic aroma and natural taste of morning tea, gourmet coffee, and family meals.",
  },
];

const reviews = [
  {
    name: "Dr. Hamza Tariq",
    role: "Fort Abbas Medical Center",
    comment: "We rely on 1 Sip 19L dispenser gallons for our clinical waiting areas and doctor staff. Spotlessly clean taste with zero mineral odor.",
    rating: 5,
    location: "Fort Abbas",
  },
  {
    name: "Farhan Saeed",
    role: "Verified Family Customer",
    comment: "The 1.5L bottles are our family standard now. Children love the natural freshness and we have complete confidence in its purity.",
    rating: 5,
    location: "Ahmed Garden",
  },
  {
    name: "Ayesha Malik",
    role: "Educational Institute Administrator",
    comment: "Prompt delivery schedules and the bottles always arrive hermetically sealed and clean. Mian Rayan Traders provide commendable service.",
    rating: 5,
    location: "Bahawalpur Road",
  },
];

const homeFaqs = [
  {
    q: "How can I order 1 Sip water bottles for home or office?",
    a: "Ordering takes only a minute! You can order directly by calling our depot hotline at 0312 6016060 or by sending an instant message to our official WhatsApp support.",
  },
  {
    q: "What areas in Fort Abbas and Punjab do you deliver to?",
    a: "We offer daily direct doorstep deliveries across Fort Abbas city, Ahmed Garden, Commercial Market, Haroonabad road corridor, and surrounding residential sectors, plus bulk logistics across southern Punjab.",
  },
  {
    q: "Are the 19L dispenser gallons compatible with regular water coolers?",
    a: "Yes! Our 19L bottles are manufactured to standard universal dispenser specifications with non-spill hygiene caps, compatible with electric floor coolers, tabletop chillers, and manual pumps.",
  },
  {
    q: "What makes 1 Sip taste better than regular boiled or tap water?",
    a: "1 Sip is purified using multi-barrier Reverse Osmosis (RO) down to 0.0001 microns, then re-balanced with beneficial trace minerals (pH 7.4, TDS ~ 130 ppm) and sterilized with UV-C and ozone for crisp, sweet taste.",
  },
];

export default function HomePage() {
  const [mobile, setMobile] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth <= 1040);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ background: "#ffffff", overflow: "hidden" }}>
      {/* ══════════════ 1. HERO SECTION (Luminous Glacial Atmosphere) ══════════════ */}
      <section
        style={{
          position: "relative",
          minHeight: mobile ? "auto" : "90vh",
          display: "flex",
          alignItems: "center",
          background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 45%, #ffffff 100%)",
          overflow: "hidden",
          padding: mobile ? "44px 0 54px" : "70px 0 90px",
        }}
      >
        {/* Ambient Water Circles in Background */}
        <div
          style={{
            position: "absolute",
            top: "-15%",
            right: "-5%",
            width: mobile ? 360 : 800,
            height: mobile ? 360 : 800,
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
            width: mobile ? 300 : 650,
            height: mobile ? 300 : 650,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            width: "min(90%, 1280px)",
            margin: "0 auto",
            display: "flex",
            flexDirection: mobile ? "column" : "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: mobile ? 40 : 60,
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* Left Text */}
          <div style={{ flex: "1 1 50%", maxWidth: 680, textAlign: mobile ? "center" : "left" }}>
            {/* Origin Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 18px",
                borderRadius: 30,
                background: "rgba(2, 132, 199, 0.08)",
                border: "1px solid rgba(2, 132, 199, 0.2)",
                color: C.ocean,
                fontSize: 12.5,
                fontWeight: 800,
                letterSpacing: 1.2,
                textTransform: "uppercase",
                marginBottom: 22,
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
              Pure Natural Mineral Water · Fort Abbas
            </div>

            {/* Headline */}
            <h1
              style={{
                margin: "0 0 20px",
                fontSize: mobile ? 44 : 72,
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
                margin: "0 0 32px",
                fontSize: mobile ? 16 : 19,
                color: C.slate,
                lineHeight: 1.75,
                maxWidth: 580,
              }}
            >
              Experience crisp, pure, and naturally refreshing drinking water inspired by the golden sands of Cholistan — processed through multi-stage purification for everyday health.
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 16,
                justifyContent: mobile ? "center" : "flex-start",
                alignItems: "center",
                marginBottom: 40,
              }}
            >
              <Link
                href="/products"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "16px 34px",
                  borderRadius: 14,
                  background: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
                  color: "#ffffff",
                  fontSize: 15.5,
                  fontWeight: 800,
                  textDecoration: "none",
                  boxShadow: "0 10px 28px rgba(2, 132, 199, 0.35)",
                  transition: "transform 0.2s ease",
                }}
              >
                <span>Explore Bottle Formats</span>
                <span>→</span>
              </Link>

              <Link
                href="https://wa.me/923126016060?text=Hello%201%20Sip,%20I%20would%20like%20to%20order%20drinking%20water%20bottles."
                target="_blank"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "15px 30px",
                  borderRadius: 14,
                  background: "#ffffff",
                  border: "1.5px solid rgba(2, 132, 199, 0.25)",
                  color: C.navy,
                  fontSize: 15.5,
                  fontWeight: 800,
                  textDecoration: "none",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.05)",
                  transition: "background 0.2s ease",
                }}
              >
                <span>💬 WhatsApp Quick Order</span>
              </Link>
            </div>

            {/* Quick Micro-Features */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 14,
                borderTop: "1px solid rgba(2, 132, 199, 0.14)",
                paddingTop: 24,
              }}
            >
              {[
                { icon: "💧", title: "Pure Taste", sub: "Balanced Minerals" },
                { icon: "🔬", title: "Tested Purity", sub: "Multi-Filter RO" },
                { icon: "🚚", title: "Fast Delivery", sub: "Fort Abbas Depot" },
              ].map((m) => (
                <div key={m.title} style={{ textAlign: mobile ? "center" : "left" }}>
                  <div style={{ fontSize: 20, marginBottom: 2 }}>{m.icon}</div>
                  <div style={{ fontSize: 13.5, fontWeight: 900, color: C.navy }}>{m.title}</div>
                  <div style={{ fontSize: 12, color: C.slate }}>{m.sub}</div>
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
                width: mobile ? 280 : 500,
                height: mobile ? 280 : 500,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(0, 180, 216, 0.22) 0%, rgba(2, 132, 199, 0.05) 60%, transparent 70%)",
                filter: "blur(24px)",
              }}
            />

            <div
              style={{
                position: "relative",
                zIndex: 2,
                width: "100%",
                maxWidth: mobile ? 380 : 580,
              }}
            >
              <Image
                src="/images/heroProducts.png"
                alt="1 Sip Mineral Water Range"
                width={700}
                height={560}
                priority
                sizes="(max-width: 1040px) 90vw, 50vw"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  filter: "drop-shadow(0 26px 48px rgba(2, 132, 199, 0.22))",
                }}
              />

              {/* Floating Quality Badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: mobile ? 10 : 30,
                  left: mobile ? 0 : -10,
                  background: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                  border: "1.5px solid rgba(0, 180, 216, 0.3)",
                  borderRadius: 16,
                  padding: "12px 18px",
                  boxShadow: "0 12px 28px rgba(2, 132, 199, 0.16)",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    background: "rgba(0, 180, 216, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 18,
                    color: C.ocean,
                    fontWeight: 900,
                  }}
                >
                  ✓
                </div>
                <div>
                  <div style={{ fontSize: 13.5, fontWeight: 900, color: C.navy }}>100% Food-Grade</div>
                  <div style={{ fontSize: 11.5, color: C.slate }}>Sterilized Bottles</div>
                </div>
              </div>

              {/* Floating Origin Badge */}
              <div
                style={{
                  position: "absolute",
                  top: mobile ? 10 : 25,
                  right: mobile ? 0 : -10,
                  background: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                  border: "1.5px solid rgba(2, 132, 199, 0.3)",
                  borderRadius: 16,
                  padding: "12px 18px",
                  boxShadow: "0 12px 28px rgba(2, 132, 199, 0.16)",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    width: 38,
                    height: 38,
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
                  <div style={{ fontSize: 13.5, fontWeight: 900, color: C.navy }}>Crystal Fresh</div>
                  <div style={{ fontSize: 11.5, color: C.slate }}>Natural Sweetness</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ 2. PURITY METRICS BAR (Spacious Width) ══════════════ */}
      <section
        style={{
          background: "#ffffff",
          borderTop: "1px solid rgba(2, 132, 199, 0.1)",
          borderBottom: "1px solid rgba(2, 132, 199, 0.1)",
          padding: "36px 0",
        }}
      >
        <div
          style={{
            width: "min(90%, 1280px)",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: mobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
            gap: mobile ? 26 : 36,
          }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="hover-lift"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                background: "linear-gradient(135deg, rgba(240, 249, 255, 0.8) 0%, rgba(255, 255, 255, 0.95) 100%)",
                border: "1.5px solid rgba(2, 132, 199, 0.14)",
                borderRadius: 18,
                padding: "20px 22px",
                boxShadow: "0 6px 20px -4px rgba(2, 132, 199, 0.08)",
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: "linear-gradient(135deg, rgba(2, 132, 199, 0.15) 0%, rgba(0, 180, 216, 0.08) 100%)",
                  border: "1px solid rgba(2, 132, 199, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 24,
                  flexShrink: 0,
                }}
              >
                {s.icon}
              </div>
              <div>
                <div style={{ fontSize: 28, fontWeight: 900, color: C.navy, lineHeight: 1.1 }}>
                  {s.value}
                </div>
                <div style={{ fontSize: 13, fontWeight: 700, color: C.slate, marginTop: 2 }}>
                  {s.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════ 3. WHY CHOOSE 1 SIP (Spacious Width) ══════════════ */}
      <section
        style={{
          background: "linear-gradient(180deg, #f8fcff 0%, #ffffff 100%)",
          padding: mobile ? "60px 0" : "100px 0",
          position: "relative",
        }}
      >
        <div style={{ width: "min(90%, 1280px)", margin: "0 auto" }}>
          {/* Section Header */}
          <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 56px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "5px 16px",
                borderRadius: 20,
                background: "rgba(0, 180, 216, 0.1)",
                color: C.ocean,
                fontSize: 12.5,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: 1.4,
                marginBottom: 14,
              }}
            >
              Our Purity Commitment
            </div>
            <h2
              style={{
                margin: "0 0 16px",
                fontSize: mobile ? 30 : 44,
                fontWeight: 900,
                color: C.navy,
                letterSpacing: -0.8,
              }}
            >
              Why 1 Sip is the Standard for Pure Water
            </h2>
            <p style={{ margin: 0, fontSize: 16.5, color: C.slate, lineHeight: 1.7 }}>
              Carefully processed to preserve pristine minerals while removing any potential micro-contaminants.
            </p>
          </div>

          {/* Cards Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: mobile ? "1fr" : "repeat(2, 1fr)",
              gap: 28,
            }}
          >
            {whyFeatures.map((f) => (
              <div
                key={f.title}
                className="hover-lift"
                style={{
                  background: "#ffffff",
                  border: "1.5px solid rgba(2, 132, 199, 0.14)",
                  borderRadius: 22,
                  padding: "36px",
                  boxShadow: "0 10px 30px rgba(2, 132, 199, 0.05)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: 20,
                    }}
                  >
                    <div
                      style={{
                        width: 56,
                        height: 56,
                        borderRadius: 16,
                        background: "linear-gradient(135deg, rgba(2, 132, 199, 0.12) 0%, rgba(0, 180, 216, 0.08) 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 28,
                      }}
                    >
                      {f.icon}
                    </div>
                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: 800,
                        color: C.ocean,
                        background: "rgba(2, 132, 199, 0.08)",
                        padding: "5px 12px",
                        borderRadius: 20,
                      }}
                    >
                      {f.badge}
                    </span>
                  </div>

                  <h3 style={{ margin: "0 0 12px", fontSize: 21, fontWeight: 900, color: C.navy }}>
                    {f.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: 15, color: C.slate, lineHeight: 1.75 }}>
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ 4. HIGH-TECH BOTTLING PLANT HIGHLIGHT (Spacious Width) ══════════════ */}
      <section
        style={{
          background: "#ffffff",
          padding: mobile ? "60px 0" : "100px 0",
          borderTop: "1px solid rgba(2, 132, 199, 0.1)",
        }}
      >
        <div
          style={{
            width: "min(90%, 1280px)",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: mobile ? "1fr" : "1.1fr 1fr",
            gap: mobile ? 40 : 72,
            alignItems: "center",
          }}
        >
          {/* Plant Image Card */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                borderRadius: 24,
                overflow: "hidden",
                border: "1.5px solid rgba(2, 132, 199, 0.2)",
                boxShadow: "0 24px 56px rgba(2, 132, 199, 0.14)",
                position: "relative",
              }}
            >
              <Image
                src="/images/qualityPlant.png"
                alt="1 Sip High-Tech Bottling Plant Facility"
                width={800}
                height={520}
                sizes="(max-width: 1040px) 90vw, 50vw"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, transparent 65%, rgba(4, 27, 47, 0.65) 100%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 20,
                  left: 20,
                  right: 20,
                  background: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(14px)",
                  padding: "14px 22px",
                  borderRadius: 16,
                  border: "1px solid rgba(2, 132, 199, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: 10,
                }}
              >
                <div>
                  <div style={{ fontSize: 11.5, fontWeight: 800, color: C.ocean, textTransform: "uppercase" }}>
                    Fort Abbas Plant Facility
                  </div>
                  <div style={{ fontSize: 14.5, fontWeight: 900, color: C.navy }}>
                    Automated RO, UV & Sterilization Line
                  </div>
                </div>
                <span
                  style={{
                    background: "rgba(16, 185, 129, 0.12)",
                    color: "#059669",
                    padding: "6px 14px",
                    borderRadius: 20,
                    fontSize: 12.5,
                    fontWeight: 800,
                  }}
                >
                  ✓ Clinical Cleanroom
                </span>
              </div>
            </div>
          </div>

          {/* Plant Text */}
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "5px 16px",
                borderRadius: 20,
                background: "rgba(2, 132, 199, 0.08)",
                color: C.ocean,
                fontSize: 12.5,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: 1.4,
                marginBottom: 12,
              }}
            >
              Certified Bottling Facility
            </div>
            <h2
              style={{
                margin: "0 0 18px",
                fontSize: mobile ? 30 : 42,
                fontWeight: 900,
                color: C.navy,
                letterSpacing: -0.8,
                lineHeight: 1.2,
              }}
            >
              State-of-the-Art Processing in Fort Abbas
            </h2>
            <p style={{ margin: "0 0 18px", fontSize: 16, color: C.slate, lineHeight: 1.8 }}>
              Engineered with positive-pressure cleanroom enclosures, SS316 food-grade stainless steel tanks, and automated bottling lines — guaranteeing zero human contact during filling and capping.
            </p>
            <p style={{ margin: "0 0 28px", fontSize: 15.5, color: C.slate, lineHeight: 1.8 }}>
              Our dedicated in-house water laboratory conducts continuous hourly audits for TDS, chemical balance, and microbial clarity, ensuring you receive true clinical safety in every bottle.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 32 }}>
              {[
                { title: "Filtration Fineness", val: "0.0001 Micron (RO)" },
                { title: "Sterilization Technique", val: "Dual UV-C + Ozone" },
                { title: "BPA-Free Certification", val: "100% Guaranteed" },
                { title: "TDS Sweet Range", val: "120 – 140 ppm" },
              ].map((it) => (
                <div key={it.title} style={{ background: "rgba(2, 132, 199, 0.04)", padding: "14px 18px", borderRadius: 14, border: "1px solid rgba(2, 132, 199, 0.12)" }}>
                  <div style={{ fontSize: 11.5, fontWeight: 700, color: C.slate }}>{it.title}</div>
                  <div style={{ fontSize: 15.5, fontWeight: 900, color: C.navy, marginTop: 3 }}>{it.val}</div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 30px",
                borderRadius: 14,
                background: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
                color: "#ffffff",
                fontSize: 15,
                fontWeight: 800,
                textDecoration: "none",
                boxShadow: "0 8px 26px rgba(2, 132, 199, 0.28)",
              }}
            >
              <span>Learn About Our Plant Process</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════ 5. INTERACTIVE BOTTLE FORMATS ON HOME (Spacious Width) ══════════════ */}
      <section
        style={{
          background: "linear-gradient(180deg, #f8fcff 0%, #ffffff 100%)",
          padding: mobile ? "60px 0" : "100px 0",
          borderTop: "1px solid rgba(2, 132, 199, 0.1)",
        }}
      >
        <div style={{ width: "min(90%, 1280px)", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              flexDirection: mobile ? "column" : "row",
              justifyContent: "space-between",
              alignItems: mobile ? "flex-start" : "flex-end",
              gap: 20,
              marginBottom: 48,
            }}
          >
            <div>
              <div
                style={{
                  color: C.ocean,
                  fontSize: 12.5,
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: 1.4,
                  marginBottom: 10,
                }}
              >
                Our Bottle Range
              </div>
              <h2
                style={{
                  margin: 0,
                  fontSize: mobile ? 30 : 42,
                  fontWeight: 900,
                  color: C.navy,
                  letterSpacing: -0.8,
                }}
              >
                Tailored for Every Hydration Need
              </h2>
            </div>
            <Link
              href="/products"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontSize: 15,
                fontWeight: 800,
                color: C.ocean,
                textDecoration: "none",
                background: "rgba(2, 132, 199, 0.08)",
                padding: "10px 22px",
                borderRadius: 12,
              }}
            >
              <span>View Full Specs & Catalog</span>
              <span>→</span>
            </Link>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: mobile ? "1fr" : "repeat(3, 1fr)",
              gap: 28,
            }}
          >
            {products.map((p, idx) => (
              <div
                key={p.size}
                onClick={() => setSelectedProduct(idx)}
                style={{
                  borderRadius: 22,
                  background: selectedProduct === idx ? "linear-gradient(180deg, #eaf6fc 0%, #ffffff 100%)" : "linear-gradient(180deg, #f0f9ff 0%, #ffffff 100%)",
                  border: selectedProduct === idx ? "2px solid #0284c7" : "1.5px solid rgba(2, 132, 199, 0.16)",
                  padding: "36px 30px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: selectedProduct === idx ? "0 16px 40px rgba(2, 132, 199, 0.15)" : "0 8px 24px rgba(2, 132, 199, 0.05)",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: 12,
                    }}
                  >
                    <div
                      style={{
                        fontSize: 36,
                        fontWeight: 900,
                        color: p.color,
                        lineHeight: 1,
                      }}
                    >
                      {p.size}
                    </div>
                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: 800,
                        color: C.ocean,
                        background: "rgba(2, 132, 199, 0.1)",
                        padding: "4px 12px",
                        borderRadius: 20,
                      }}
                    >
                      {p.pack}
                    </span>
                  </div>

                  <h3 style={{ margin: "0 0 8px", fontSize: 20, fontWeight: 900, color: C.navy }}>
                    {p.title}
                  </h3>
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 800,
                      color: C.ocean,
                      marginBottom: 16,
                      background: "rgba(2, 132, 199, 0.08)",
                      display: "inline-block",
                      padding: "4px 12px",
                      borderRadius: 8,
                    }}
                  >
                    {p.ideal}
                  </div>
                  <p style={{ margin: "0 0 26px", fontSize: 14.5, color: C.slate, lineHeight: 1.7 }}>
                    {p.desc}
                  </p>
                </div>

                <Link
                  href={`https://wa.me/923126016060?text=Hello%201%20Sip,%20I%20would%20like%20to%20order%20the%20${p.size}%20water%20bottles.`}
                  target="_blank"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    padding: "14px",
                    borderRadius: 14,
                    background: selectedProduct === idx ? "linear-gradient(135deg, #10b981 0%, #059669 100%)" : "rgba(2, 132, 199, 0.08)",
                    border: selectedProduct === idx ? "none" : "1px solid rgba(2, 132, 199, 0.2)",
                    color: selectedProduct === idx ? "#ffffff" : C.navy,
                    fontWeight: 800,
                    fontSize: 14.5,
                    textDecoration: "none",
                    boxShadow: selectedProduct === idx ? "0 6px 20px rgba(16, 185, 129, 0.3)" : "none",
                  }}
                >
                  <span>💬 Order {p.size} on WhatsApp</span>
                  <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ 6. CHOLISTAN DESERT OASIS HERITAGE (LIGHT RADIANT THEME, Spacious Width) ══════════════ */}
      <section
        style={{
          background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #ffffff 100%)",
          padding: mobile ? "60px 0" : "100px 0",
          borderTop: "1px solid rgba(2, 132, 199, 0.12)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "min(90%, 1280px)",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: mobile ? "1fr" : "1.1fr 1fr",
            gap: mobile ? 40 : 72,
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
                padding: "6px 18px",
                borderRadius: 30,
                background: "rgba(2, 132, 199, 0.08)",
                border: "1px solid rgba(2, 132, 199, 0.2)",
                color: C.ocean,
                fontSize: 12.5,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: 1.4,
                marginBottom: 16,
              }}
            >
              <span>🏜️</span>
              <span>The Story Behind 1 Sip</span>
            </div>
            <h2
              style={{
                margin: "0 0 18px",
                fontSize: mobile ? 30 : 42,
                fontWeight: 900,
                color: C.navy,
                lineHeight: 1.15,
                letterSpacing: -0.8,
              }}
            >
              Born from the Golden Sands of Cholistan
            </h2>
            <p style={{ margin: "0 0 18px", fontSize: 16, color: C.slate, lineHeight: 1.8 }}>
              Cholistan is renowned for its majestic desert dunes, ancient forts, and time-honored heritage. In this arid expanse, water has always been revered as the supreme gift of nature.
            </p>
            <p style={{ margin: "0 0 28px", fontSize: 15.5, color: C.slate, lineHeight: 1.8 }}>
              Founded under <strong>Mian Rayan Traders</strong> in Fort Abbas, 1 Sip was created to bring pure, refreshing, and scientifically certified drinking water to homes, clinics, and businesses throughout our region.
            </p>

            <div
              style={{
                background: "#ffffff",
                border: "1px solid rgba(2, 132, 199, 0.16)",
                borderRadius: 16,
                padding: "20px 24px",
                boxShadow: "0 4px 18px rgba(2, 132, 199, 0.04)",
                marginBottom: 32,
              }}
            >
              <div style={{ fontStyle: "italic", fontSize: 15.5, color: C.navy, fontWeight: 700, lineHeight: 1.6 }}>
                &ldquo;Pure water is not just our business — it is our sacred responsibility to the health and well-being of our community.&rdquo;
              </div>
              <div style={{ fontSize: 13, color: C.ocean, fontWeight: 800, marginTop: 8 }}>
                — Management, Mian Rayan Traders
              </div>
            </div>

            <Link
              href="/about"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 30px",
                borderRadius: 14,
                background: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
                color: "#ffffff",
                fontSize: 15,
                fontWeight: 800,
                textDecoration: "none",
                boxShadow: "0 8px 26px rgba(2, 132, 199, 0.28)",
              }}
            >
              <span>Read Our Full Story & Heritage</span>
              <span>→</span>
            </Link>
          </div>

          {/* Oasis Landscape Card */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                borderRadius: 24,
                overflow: "hidden",
                border: "1.5px solid rgba(2, 132, 199, 0.2)",
                boxShadow: "0 24px 56px rgba(2, 132, 199, 0.14)",
                position: "relative",
              }}
            >
              <Image
                src="/images/aboutCholistan.png"
                alt="Cholistan Oasis Lake"
                width={800}
                height={520}
                sizes="(max-width: 1040px) 90vw, 50vw"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, transparent 60%, rgba(4, 27, 47, 0.65) 100%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 20,
                  left: 20,
                  right: 20,
                  background: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(14px)",
                  padding: "14px 20px",
                  borderRadius: 16,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ fontSize: 11.5, fontWeight: 800, color: C.ocean, textTransform: "uppercase" }}>
                    Fort Abbas Heritage
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 900, color: C.navy, marginTop: 2 }}>
                    Preserving Natural Purity & Life
                  </div>
                </div>
                <span
                  style={{
                    background: "rgba(2, 132, 199, 0.1)",
                    color: C.ocean,
                    padding: "6px 14px",
                    borderRadius: 20,
                    fontSize: 12.5,
                    fontWeight: 800,
                  }}
                >
                  Pakistan 🇵🇰
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ 7. HEALTH & HYDRATION BENEFITS (Spacious Width) ══════════════ */}
      <section style={{ padding: mobile ? "60px 0" : "100px 0", background: "#ffffff" }}>
        <div style={{ width: "min(90%, 1280px)", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 52px" }}>
            <div style={{ color: C.ocean, fontSize: 12.5, fontWeight: 800, textTransform: "uppercase", letterSpacing: 1.4, marginBottom: 10 }}>
              Healthy Living
            </div>
            <h2 style={{ margin: "0 0 14px", fontSize: mobile ? 30 : 42, fontWeight: 900, color: C.navy, letterSpacing: -0.8 }}>
              The Daily Benefits of 1 Sip Hydration
            </h2>
            <p style={{ margin: 0, fontSize: 16, color: C.slate, lineHeight: 1.7 }}>
              Drink pure water to nourish your body, sustain mental clarity, and maintain healthy metabolism.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: mobile ? "1fr" : "repeat(4, 1fr)",
              gap: 24,
            }}
          >
            {healthBenefits.map((b) => (
              <div
                key={b.title}
                className="hover-lift"
                style={{
                  background: "#ffffff",
                  border: "1.5px solid rgba(2, 132, 199, 0.14)",
                  borderRadius: 20,
                  padding: "30px 24px",
                  boxShadow: "0 4px 18px rgba(2, 132, 199, 0.04)",
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: "rgba(2, 132, 199, 0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 24,
                    marginBottom: 18,
                  }}
                >
                  {b.icon}
                </div>
                <h3 style={{ margin: "0 0 10px", fontSize: 18, fontWeight: 900, color: C.navy }}>
                  {b.title}
                </h3>
                <p style={{ margin: 0, fontSize: 14, color: C.slate, lineHeight: 1.7 }}>
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ 8. CUSTOMER TESTIMONIALS (Spacious Width) ══════════════ */}
      <section
        style={{
          background: "linear-gradient(180deg, #f8fcff 0%, #ffffff 100%)",
          padding: mobile ? "60px 0" : "100px 0",
          borderTop: "1px solid rgba(2, 132, 199, 0.1)",
        }}
      >
        <div style={{ width: "min(90%, 1280px)", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 52px" }}>
            <div
              style={{
                color: C.ocean,
                fontSize: 12.5,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: 1.4,
                marginBottom: 10,
              }}
            >
              Customer Confidence
            </div>
            <h2
              style={{
                margin: 0,
                fontSize: mobile ? 30 : 42,
                fontWeight: 900,
                color: C.navy,
                letterSpacing: -0.8,
              }}
            >
              Trusted Across Homes & Offices in Punjab
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: mobile ? "1fr" : "repeat(3, 1fr)",
              gap: 28,
            }}
          >
            {reviews.map((r) => (
              <div
                key={r.name}
                className="hover-lift"
                style={{
                  background: "#ffffff",
                  border: "1.5px solid rgba(2, 132, 199, 0.14)",
                  borderRadius: 22,
                  padding: "32px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "0 8px 24px rgba(2, 132, 199, 0.05)",
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                    <div style={{ color: "#f59e0b", fontSize: 17 }}>
                      {"★".repeat(r.rating)}
                    </div>
                    <span style={{ fontSize: 12.5, fontWeight: 800, color: C.ocean, background: "rgba(2, 132, 199, 0.08)", padding: "3px 10px", borderRadius: 10 }}>
                      📍 {r.location}
                    </span>
                  </div>
                  <p style={{ margin: "0 0 24px", fontSize: 15, color: C.slate, lineHeight: 1.75, fontStyle: "italic" }}>
                    &ldquo;{r.comment}&rdquo;
                  </p>
                </div>
                <div style={{ borderTop: "1px solid rgba(0, 0, 0, 0.06)", paddingTop: 16 }}>
                  <div style={{ fontSize: 16, fontWeight: 900, color: C.navy }}>{r.name}</div>
                  <div style={{ fontSize: 13, color: C.ocean, fontWeight: 700 }}>{r.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ 9. HOME FAQ ACCORDION (Spacious Width) ══════════════ */}
      <section style={{ padding: mobile ? "60px 0" : "100px 0", background: "#ffffff" }}>
        <div style={{ width: "min(90%, 1280px)", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 48px" }}>
            <div style={{ color: C.ocean, fontSize: 12.5, fontWeight: 800, textTransform: "uppercase", letterSpacing: 1.4, marginBottom: 10 }}>
              Common Inquiries
            </div>
            <h2 style={{ margin: 0, fontSize: mobile ? 30 : 42, fontWeight: 900, color: C.navy, letterSpacing: -0.8 }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {homeFaqs.map((f, idx) => (
              <div
                key={f.q}
                style={{
                  border: "1.5px solid rgba(2, 132, 199, 0.16)",
                  borderRadius: 18,
                  background: openFaq === idx ? "rgba(2, 132, 199, 0.04)" : "#ffffff",
                  overflow: "hidden",
                  transition: "all 0.2s ease",
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  style={{
                    width: "100%",
                    padding: "22px 28px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span style={{ fontSize: 17, fontWeight: 900, color: C.navy }}>{f.q}</span>
                  <span style={{ fontSize: 22, fontWeight: 800, color: C.ocean, marginLeft: 18 }}>
                    {openFaq === idx ? "−" : "+"}
                  </span>
                </button>
                {openFaq === idx && (
                  <div style={{ padding: "0 28px 24px", fontSize: 15, color: C.slate, lineHeight: 1.75 }}>
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
