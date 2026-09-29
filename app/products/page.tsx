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

const products = [
  {
    id: "500ml",
    size: "500ml Pocket Bottle",
    tagline: "Ultra-Light Everyday Refreshment",
    badge: "Most Popular for Travel",
    desc: "Specially contoured for one-handed grip. Fits snugly in vehicle holders, gym bags, and conference tables. Pure hydration wherever you travel.",
    features: [
      "Convenient 24-Bottle Carton Pack",
      "Ergonomic Ribbed Grip Design",
      "Leak-Proof Tamper Evident Cap",
      "100% BPA-Free Virgin PET Plastic",
    ],
    usage: "Commutes, Schools, Events, Restaurants & Outdoor Sports",
    color: "#0284c7",
  },
  {
    id: "1.5L",
    size: "1.5L Family Dining Bottle",
    tagline: "Essential Table & Family Volume",
    badge: "Household Favorite",
    desc: "Generous capacity engineered for family dining tables, refrigerator chilling, and dinner gatherings. Clean, crisp, and thirst-quenching.",
    features: [
      "Economical 6-Bottle or 12-Bottle Packs",
      "Reinforced Base for Table Stability",
      "Optimal Mineral Balance for Cooking & Tea",
      "Airtight Preservation of Freshness",
    ],
    usage: "Family Meals, Refrigerator Storage, Picnics & Long Drives",
    color: "#00b4d8",
  },
  {
    id: "19L",
    size: "19L Dispenser Gallon",
    tagline: "Commercial & Domestic Bulk Hydration",
    badge: "Best Value for Workplaces",
    desc: "Heavy-duty commercial gallon engineered for standard hot-and-cold dispensers and manual water pumps. Perfect for sustained daily volume.",
    features: [
      "Rigid Food-Grade Multi-Use Polycarbonate",
      "Non-Spill Smart Dispenser Valve Cap",
      "Scheduled Weekly Replacement Service",
      "Sanitized & Tested Prior to Every Refill",
    ],
    usage: "Offices, Medical Clinics, Schools, Banks & High-Volume Homes",
    color: "#0369a1",
  },
];

const purityStandards = [
  { icon: "🔬", title: "TDS Balanced", desc: "Maintained within ideal WHO recommended levels for sweet, smooth natural taste." },
  { icon: "💧", title: "Sterile Bottling", desc: "Automated washing, filling, and capping inside cleanroom enclosures." },
  { icon: "🛡️", title: "Tamper Proof", desc: "Every bottle is sealed with a security shrink band guaranteeing untouched freshness." },
  { icon: "♻️", title: "100% Recyclable", desc: "Committed to eco-friendly food-grade polymers that can be recycled." },
];

export default function ProductsPage() {
  const [mobile, setMobile] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth <= 900);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cur = products[activeIdx];

  return (
    <div style={{ background: "#ffffff", overflow: "hidden" }}>
      {/* ── 1. Page Header (Bright, Radiant Glacial Atmosphere) ── */}
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
            <span>💧</span>
            <span>Product Catalog</span>
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
            Pure Water for{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #0284c7 0%, #00b4d8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Every Hydration Need
            </span>
          </h1>

          <p style={{ margin: 0, fontSize: mobile ? 15 : 17, color: C.slate, maxWidth: 580, lineHeight: 1.7 }}>
            Discover our tailored lineup of 1 Sip Natural Water bottles — created for individual refreshment, joyful family dining, and busy work environments.
          </p>
        </div>
      </section>

      {/* ── 2. Interactive Product Showcase ── */}
      <section style={{ padding: mobile ? "50px 0" : "80px 0", background: "#ffffff" }}>
        <div style={{ width: "min(93%, 1280px)", margin: "0 auto" }}>
          {/* Format Tabs Switcher */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 12,
              marginBottom: mobile ? 36 : 52,
              flexWrap: "wrap",
            }}
          >
            {products.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setActiveIdx(idx)}
                type="button"
                style={{
                  padding: "12px 28px",
                  borderRadius: 30,
                  border: activeIdx === idx ? "2px solid #0284c7" : "1.5px solid rgba(2, 132, 199, 0.16)",
                  background: activeIdx === idx ? "linear-gradient(135deg, #0284c7 0%, #00b4d8 100%)" : "rgba(2, 132, 199, 0.04)",
                  color: activeIdx === idx ? "#ffffff" : C.navy,
                  fontSize: 15,
                  fontWeight: 700,
                  cursor: "pointer",
                  boxShadow: activeIdx === idx ? "0 8px 20px rgba(2, 132, 199, 0.25)" : "none",
                  transition: "all 0.2s ease",
                }}
              >
                {p.size}
              </button>
            ))}
          </div>

          {/* Active Product Feature Box */}
          <div
            style={{
              background: "linear-gradient(180deg, #f0f9ff 0%, #ffffff 100%)",
              border: "1.5px solid rgba(2, 132, 199, 0.18)",
              borderRadius: 24,
              padding: mobile ? "30px 20px" : "50px 60px",
              boxShadow: "0 16px 40px rgba(2, 132, 199, 0.07)",
              display: "grid",
              gridTemplateColumns: mobile ? "1fr" : "1fr 1.2fr",
              gap: mobile ? 36 : 60,
              alignItems: "center",
            }}
          >
            {/* Visual Center */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: mobile ? 220 : 340,
                  height: mobile ? 220 : 340,
                  borderRadius: "50%",
                  background: `radial-gradient(circle, rgba(0, 180, 216, 0.2) 0%, transparent 70%)`,
                  filter: "blur(20px)",
                }}
              />

              <Image
                src="/images/heroProducts.png"
                alt={cur.size}
                width={500}
                height={400}
                priority
                sizes="(max-width: 900px) 80vw, 40vw"
                style={{
                  position: "relative",
                  zIndex: 2,
                  width: "100%",
                  maxWidth: 380,
                  height: "auto",
                  objectFit: "contain",
                  filter: "drop-shadow(0 20px 36px rgba(2, 132, 199, 0.22))",
                }}
              />

              <div
                style={{
                  marginTop: 16,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  background: "rgba(2, 132, 199, 0.1)",
                  padding: "6px 16px",
                  borderRadius: 20,
                  fontSize: 12.5,
                  fontWeight: 700,
                  color: C.ocean,
                }}
              >
                ★ {cur.badge}
              </div>
            </div>

            {/* Details Column */}
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", color: cur.color, letterSpacing: 1, marginBottom: 6 }}>
                Selected Size
              </div>
              <h2 style={{ margin: "0 0 8px", fontSize: mobile ? 28 : 40, fontWeight: 900, color: C.navy, letterSpacing: -0.5 }}>
                {cur.size}
              </h2>
              <div style={{ fontSize: 16, fontWeight: 600, color: C.ocean, marginBottom: 16 }}>
                {cur.tagline}
              </div>

              <p style={{ margin: "0 0 24px", fontSize: 15.5, color: C.slate, lineHeight: 1.7 }}>
                {cur.desc}
              </p>

              {/* Key Features Bullet List */}
              <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 1fr", gap: 12, marginBottom: 28 }}>
                {cur.features.map((feat) => (
                  <div key={feat} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div
                      style={{
                        width: 24,
                        height: 24,
                        borderRadius: "50%",
                        background: "rgba(2, 132, 199, 0.12)",
                        color: C.ocean,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 12,
                        fontWeight: 800,
                        flexShrink: 0,
                      }}
                    >
                      ✓
                    </div>
                    <span style={{ fontSize: 13.5, fontWeight: 600, color: C.navy }}>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Usage Highlight */}
              <div
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(2, 132, 199, 0.14)",
                  borderRadius: 12,
                  padding: "14px 18px",
                  marginBottom: 28,
                }}
              >
                <div style={{ fontSize: 11.5, fontWeight: 700, textTransform: "uppercase", color: C.slate, marginBottom: 3 }}>
                  Recommended Application
                </div>
                <div style={{ fontSize: 14, fontWeight: 700, color: C.navy }}>
                  {cur.usage}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
                <Link
                  href={`https://wa.me/923126016060?text=Hello%201%20Sip,%20I%20would%20like%20to%20order%20the%20${encodeURIComponent(cur.size)}.`}
                  target="_blank"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "13px 26px",
                    borderRadius: 12,
                    background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                    color: "#ffffff",
                    fontSize: 14.5,
                    fontWeight: 700,
                    textDecoration: "none",
                    boxShadow: "0 6px 20px rgba(16, 185, 129, 0.3)",
                  }}
                >
                  <span>💬 Order {cur.id} on WhatsApp</span>
                </Link>

                <Link
                  href="/contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "12px 22px",
                    borderRadius: 12,
                    background: "rgba(2, 132, 199, 0.08)",
                    border: "1px solid rgba(2, 132, 199, 0.2)",
                    color: C.navy,
                    fontSize: 14.5,
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  <span>Inquire for Bulk Delivery</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Purity & Quality Verification ── */}
      <section
        style={{
          background: "linear-gradient(180deg, #f8fcff 0%, #ffffff 100%)",
          padding: mobile ? "50px 0" : "80px 0",
          borderTop: "1px solid rgba(2, 132, 199, 0.1)",
        }}
      >
        <div style={{ width: "min(93%, 1280px)", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 48px" }}>
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
              Certified Purity
            </div>
            <h2
              style={{
                margin: 0,
                fontSize: mobile ? 28 : 38,
                fontWeight: 900,
                color: C.navy,
                letterSpacing: -0.6,
              }}
            >
              Bottled Under Clinical Quality Protocols
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: mobile ? "1fr" : "repeat(4, 1fr)",
              gap: 20,
            }}
          >
            {purityStandards.map((std) => (
              <div
                key={std.title}
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(2, 132, 199, 0.12)",
                  borderRadius: 16,
                  padding: "26px 22px",
                  boxShadow: "0 4px 16px rgba(2, 132, 199, 0.04)",
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
                    marginBottom: 16,
                  }}
                >
                  {std.icon}
                </div>
                <h3 style={{ margin: "0 0 8px", fontSize: 17, fontWeight: 800, color: C.navy }}>
                  {std.title}
                </h3>
                <p style={{ margin: 0, fontSize: 13.5, color: C.slate, lineHeight: 1.65 }}>
                  {std.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
