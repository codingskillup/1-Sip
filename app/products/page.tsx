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
    tagline: "Ultra-Light Personal & Travel Refreshment",
    badge: "Most Popular for Travel",
    volume: "500 ml / 16.9 fl oz",
    packaging: "100% Virgin BPA-Free PET",
    pack: "24 Bottles per Box Carton",
    desc: "Engineered for active lifestyles. Fits easily into car cup holders, backpacks, gym kits, and conference settings. Sealed for crystal crisp taste on the go.",
    features: [
      "Rigid ribbed grip contours for easy holding",
      "Tamper-evident airtight hermetic seal",
      "Optimal electrolyte hydration for sports and commute",
      "Recyclable food-grade polymer",
    ],
    usage: "Daily commutes, fitness workouts, schools, conferences, restaurants, and outdoor travels.",
    color: "#0284c7",
  },
  {
    id: "1.5L",
    size: "1.5L Family Dining Bottle",
    tagline: "The Household Standard for Table & Cooking",
    badge: "Family Dining Choice",
    volume: "1.5 Liters / 50.7 fl oz",
    packaging: "Heavy-Gauge BPA-Free PET",
    pack: "6 or 12 Bottles per Shrink Pack",
    desc: "The premier table bottle for shared family meals, refrigerator chilling, and healthy domestic cooking. Pure hydration that brings families together.",
    features: [
      "Sturdy base prevents accidental table tipping",
      "Balanced natural mineral profile enhances meal flavors",
      "Great for making pure tea, coffee, and infants' meals",
      "Economical multi-pack distribution",
    ],
    usage: "Family dining tables, refrigerator water pitchers, home cooking, picnics, and long road trips.",
    color: "#00b4d8",
  },
  {
    id: "19L",
    size: "19L Dispenser Gallon",
    tagline: "Commercial & High-Capacity Household Hydration",
    badge: "Best Value for Workplaces",
    volume: "19 Liters / 5 Gallons",
    packaging: "Multi-Use Food-Grade Polycarbonate",
    pack: "Single Refillable Dispenser Gallon",
    desc: "Built to fit standard hot & cold water dispensers and manual pressure pumps. The benchmark solution for corporate offices, hospitals, and busy households.",
    features: [
      "Compatible with universal electric dispensers & floor chillers",
      "Spill-free hygiene valve cap system",
      "Weekly scheduled doorstep pickup & refill service",
      "Clinically sanitized and ozone-treated before every cycle",
    ],
    usage: "Corporate offices, clinics, schools, banks, commercial shops, and high-consumption residences.",
    color: "#0369a1",
  },
];

const mineralProfile = [
  { mineral: "pH Level (Natural Balance)", value: "7.2 – 7.6", benefit: "Neutral & gentle on digestion" },
  { mineral: "Total Dissolved Solids (TDS)", value: "< 140 mg/L", benefit: "Crisp, light, clean sweetness" },
  { mineral: "Calcium (Ca²⁺)", value: "18 – 24 mg/L", benefit: "Supports healthy bone density" },
  { mineral: "Magnesium (Mg²⁺)", value: "8 – 14 mg/L", benefit: "Cellular hydration & muscle relaxation" },
  { mineral: "Potassium (K⁺)", value: "2 – 4 mg/L", benefit: "Natural electrolyte balance" },
  { mineral: "Bicarbonate (HCO₃⁻)", value: "65 – 85 mg/L", benefit: "Promotes natural metabolic comfort" },
];

const comparisonMatrix = [
  { feature: "Target Volume", p500: "500 ml", p15: "1.5 Liters", p19: "19 Liters (5 Gal)" },
  { feature: "Best Used For", p500: "Travel & Commuting", p15: "Family Dining & Cooking", p19: "Offices & Home Dispensers" },
  { feature: "Standard Packaging", p500: "24-Bottle Carton", p15: "6 / 12 Pack Shrink", p19: "Rigid Refillable Gallon" },
  { feature: "Cap Mechanism", p500: "Twist Safety Ring", p15: "Twist Safety Ring", p19: "Non-Spill Dispenser Plug" },
  { feature: "BPA-Free Certified", p500: "✓ Yes (100%)", p15: "✓ Yes (100%)", p19: "✓ Yes (Food-Grade)" },
  { feature: "Doorstep Delivery", p500: "Carton Delivery", p15: "Pack Delivery", p19: "Scheduled Weekly Refill" },
];

export default function ProductsPage() {
  const [mobile, setMobile] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth <= 1040);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cur = products[activeIdx];

  return (
    <div style={{ background: "#ffffff", overflow: "hidden" }}>
      {/* ── 1. Page Header (Spacious Glacial Purity) ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #ffffff 100%)",
          padding: mobile ? "50px 0 56px" : "74px 0 88px",
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
            width: 550,
            height: 550,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0, 180, 216, 0.15) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ width: "min(90%, 1280px)", margin: "0 auto", position: "relative", zIndex: 2 }}>
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
              marginBottom: 18,
            }}
          >
            <span>💧</span>
            <span>Official Product Lineup</span>
          </div>

          <h1
            style={{
              margin: "0 0 18px",
              fontSize: mobile ? 38 : 64,
              fontWeight: 900,
              color: C.navy,
              lineHeight: 1.1,
              letterSpacing: -1.4,
            }}
          >
            Pure Natural Water for{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #0284c7 0%, #00b4d8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Every Daily Need
            </span>
          </h1>

          <p style={{ margin: "0 0 28px", fontSize: mobile ? 16 : 19, color: C.slate, maxWidth: 740, lineHeight: 1.75 }}>
            From single-serve pocket bottles for workouts and commutes to high-capacity 19L dispenser gallons for offices and homes — 1 Sip brings natural purity to every table.
          </p>

          {/* Quick Purity Trust Pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {["pH 7.4 Balanced", "BPA-Free Food Grade", "Multi-Barrier RO + UV", "Cholistan Sourced", "WHO Standard Purity"].map((tag) => (
              <span
                key={tag}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 18px",
                  borderRadius: 24,
                  background: "#ffffff",
                  border: "1px solid rgba(2, 132, 199, 0.22)",
                  fontSize: 13.5,
                  fontWeight: 800,
                  color: C.navy,
                  boxShadow: "0 2px 10px rgba(2, 132, 199, 0.06)",
                }}
              >
                <span style={{ color: C.ocean }}>✓</span>
                <span>{tag}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. Interactive Product Feature Showcase (Spacious Width) ── */}
      <section style={{ padding: mobile ? "60px 0" : "100px 0", background: "#ffffff" }}>
        <div style={{ width: "min(90%, 1280px)", margin: "0 auto" }}>
          {/* Format Tabs Switcher */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 14,
              marginBottom: mobile ? 40 : 60,
              flexWrap: "wrap",
            }}
          >
            {products.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setActiveIdx(idx)}
                type="button"
                style={{
                  padding: "15px 36px",
                  borderRadius: 36,
                  border: activeIdx === idx ? "2px solid #0284c7" : "1.5px solid rgba(2, 132, 199, 0.16)",
                  background: activeIdx === idx ? "linear-gradient(135deg, #0284c7 0%, #00b4d8 100%)" : "rgba(2, 132, 199, 0.04)",
                  color: activeIdx === idx ? "#ffffff" : C.navy,
                  fontSize: 16,
                  fontWeight: 800,
                  cursor: "pointer",
                  boxShadow: activeIdx === idx ? "0 10px 28px rgba(2, 132, 199, 0.3)" : "none",
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
              border: "1.5px solid rgba(2, 132, 199, 0.2)",
              borderRadius: 28,
              padding: mobile ? "36px 24px" : "60px 72px",
              boxShadow: "0 24px 56px rgba(2, 132, 199, 0.08)",
              display: "grid",
              gridTemplateColumns: mobile ? "1fr" : "1fr 1.3fr",
              gap: mobile ? 40 : 72,
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
                  width: mobile ? 260 : 420,
                  height: mobile ? 260 : 420,
                  borderRadius: "50%",
                  background: `radial-gradient(circle, rgba(0, 180, 216, 0.22) 0%, transparent 70%)`,
                  filter: "blur(30px)",
                }}
              />

              <Image
                src="/images/heroProducts.png"
                alt={cur.size}
                width={560}
                height={460}
                priority
                sizes="(max-width: 1040px) 80vw, 45vw"
                style={{
                  position: "relative",
                  zIndex: 2,
                  width: "100%",
                  maxWidth: 440,
                  height: "auto",
                  objectFit: "contain",
                  filter: "drop-shadow(0 24px 44px rgba(2, 132, 199, 0.25))",
                }}
              />

              <div
                style={{
                  marginTop: 20,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(2, 132, 199, 0.1)",
                  border: "1px solid rgba(2, 132, 199, 0.25)",
                  padding: "8px 20px",
                  borderRadius: 24,
                  fontSize: 13.5,
                  fontWeight: 800,
                  color: C.ocean,
                }}
              >
                ★ {cur.badge}
              </div>
            </div>

            {/* Details Column */}
            <div>
              <div style={{ fontSize: 13.5, fontWeight: 800, textTransform: "uppercase", color: cur.color, letterSpacing: 1.4, marginBottom: 8 }}>
                Active Selection: {cur.volume}
              </div>
              <h2 style={{ margin: "0 0 10px", fontSize: mobile ? 30 : 46, fontWeight: 900, color: C.navy, letterSpacing: -0.8 }}>
                {cur.size}
              </h2>
              <div style={{ fontSize: 18, fontWeight: 700, color: C.ocean, marginBottom: 18 }}>
                {cur.tagline}
              </div>

              <p style={{ margin: "0 0 28px", fontSize: 16, color: C.slate, lineHeight: 1.8 }}>
                {cur.desc}
              </p>

              {/* Specs Pills */}
              <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 1fr", gap: 14, marginBottom: 28 }}>
                <div style={{ background: "#ffffff", padding: "14px 18px", borderRadius: 14, border: "1.5px solid rgba(2, 132, 199, 0.15)" }}>
                  <div style={{ fontSize: 11.5, fontWeight: 700, color: C.slate, textTransform: "uppercase" }}>Material Standard</div>
                  <div style={{ fontSize: 14.5, fontWeight: 900, color: C.navy, marginTop: 2 }}>{cur.packaging}</div>
                </div>
                <div style={{ background: "#ffffff", padding: "14px 18px", borderRadius: 14, border: "1.5px solid rgba(2, 132, 199, 0.15)" }}>
                  <div style={{ fontSize: 11.5, fontWeight: 700, color: C.slate, textTransform: "uppercase" }}>Standard Packaging</div>
                  <div style={{ fontSize: 14.5, fontWeight: 900, color: C.navy, marginTop: 2 }}>{cur.pack}</div>
                </div>
              </div>

              {/* Key Features Bullet List */}
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 30 }}>
                {cur.features.map((feat) => (
                  <div key={feat} style={{ display: "flex", alignItems: "center", gap: 12 }}>
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
                        fontSize: 13,
                        fontWeight: 900,
                        flexShrink: 0,
                      }}
                    >
                      ✓
                    </div>
                    <span style={{ fontSize: 15, fontWeight: 600, color: C.navy }}>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center" }}>
                <Link
                  href={`https://wa.me/923126016060?text=Hello%201%20Sip,%20I%20would%20like%20to%20order%20the%20${encodeURIComponent(cur.size)}.`}
                  target="_blank"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 9,
                    padding: "15px 32px",
                    borderRadius: 14,
                    background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                    color: "#ffffff",
                    fontSize: 15.5,
                    fontWeight: 800,
                    textDecoration: "none",
                    boxShadow: "0 8px 26px rgba(16, 185, 129, 0.35)",
                  }}
                >
                  <span>💬 Order {cur.id} via WhatsApp</span>
                </Link>

                <Link
                  href="tel:+923126016060"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "14px 26px",
                    borderRadius: 14,
                    background: "rgba(2, 132, 199, 0.08)",
                    border: "1px solid rgba(2, 132, 199, 0.2)",
                    color: C.navy,
                    fontSize: 15,
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  <span>📞 Call 0312 6016060</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. High-Tech Bottling Plant Presentation (Spacious Width) ── */}
      <section
        style={{
          background: "linear-gradient(180deg, #f8fcff 0%, #ffffff 100%)",
          padding: mobile ? "60px 0" : "100px 0",
          borderTop: "1px solid rgba(2, 132, 199, 0.1)",
        }}
      >
        <div
          style={{
            width: "min(90%, 1280px)",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: mobile ? "1fr" : "1.1fr 0.9fr",
            gap: mobile ? 40 : 72,
            alignItems: "center",
          }}
        >
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
                alt="1 Sip High-Tech Bottling & Filtration Plant"
                width={800}
                height={520}
                sizes="(max-width: 1040px) 90vw, 50vw"
                style={{ width: "100%", height: "auto", display: "block" }}
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
                  ✓ Active Cleanroom
                </span>
              </div>
            </div>
          </div>

          <div>
            <div style={{ color: C.ocean, fontSize: 12.5, fontWeight: 800, textTransform: "uppercase", letterSpacing: 1.4, marginBottom: 10 }}>
              Hygiene & Quality Standards
            </div>
            <h2 style={{ margin: "0 0 18px", fontSize: mobile ? 30 : 42, fontWeight: 900, color: C.navy, letterSpacing: -0.8, lineHeight: 1.2 }}>
              Bottled with Medical Precision
            </h2>
            <p style={{ margin: "0 0 18px", fontSize: 16, color: C.slate, lineHeight: 1.8 }}>
              At 1 Sip, safety is never left to chance. Every bottle is filled in a positive-pressure sterile enclosure using stainless steel multi-chamber piping and food-grade machinery to ensure zero human contact during the filling cycle.
            </p>
            <p style={{ margin: "0 0 28px", fontSize: 15.5, color: C.slate, lineHeight: 1.8 }}>
              From initial raw water testing to final batch packaging, our quality specialists conduct hourly verification checks for mineral balance, clarity, and seal integrity.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {[
                { label: "Daily Production Capacity", val: "50,000+ Liters" },
                { label: "Sterilization Technique", val: "Dual UV + O₃" },
                { label: "BPA-Free Certification", val: "100% Guaranteed" },
                { label: "TDS Precision Range", val: "120 – 140 ppm" },
              ].map((spec) => (
                <div key={spec.label} style={{ background: "rgba(2, 132, 199, 0.05)", padding: "14px 18px", borderRadius: 12, border: "1px solid rgba(2, 132, 199, 0.12)" }}>
                  <div style={{ fontSize: 11.5, fontWeight: 700, color: C.slate }}>{spec.label}</div>
                  <div style={{ fontSize: 16, fontWeight: 900, color: C.navy, marginTop: 3 }}>{spec.val}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Mineral & Electrolyte Analysis Table (Spacious Width) ── */}
      <section style={{ padding: mobile ? "60px 0" : "100px 0", background: "#ffffff" }}>
        <div style={{ width: "min(90%, 1280px)", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 52px" }}>
            <div style={{ color: C.ocean, fontSize: 12.5, fontWeight: 800, textTransform: "uppercase", letterSpacing: 1.4, marginBottom: 10 }}>
              Laboratory Composition
            </div>
            <h2 style={{ margin: "0 0 14px", fontSize: mobile ? 30 : 42, fontWeight: 900, color: C.navy, letterSpacing: -0.8 }}>
              Natural Mineral & Electrolyte Profile
            </h2>
            <p style={{ margin: 0, fontSize: 16, color: C.slate, lineHeight: 1.7 }}>
              Scientifically balanced for optimal human hydration, sweet smooth palate feel, and everyday metabolic vitality.
            </p>
          </div>

          <div
            style={{
              overflowX: "auto",
              border: "1.5px solid rgba(2, 132, 199, 0.18)",
              borderRadius: 22,
              boxShadow: "0 10px 32px rgba(2, 132, 199, 0.05)",
            }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 640 }}>
              <thead>
                <tr style={{ background: "linear-gradient(135deg, #0284c7 0%, #00b4d8 100%)", color: "#ffffff" }}>
                  <th style={{ padding: "18px 24px", textAlign: "left", fontSize: 15, fontWeight: 900 }}>Component / Mineral</th>
                  <th style={{ padding: "18px 24px", textAlign: "left", fontSize: 15, fontWeight: 900 }}>Typical Analysis</th>
                  <th style={{ padding: "18px 24px", textAlign: "left", fontSize: 15, fontWeight: 900 }}>Health & Hydration Role</th>
                </tr>
              </thead>
              <tbody>
                {mineralProfile.map((m, idx) => (
                  <tr
                    key={m.mineral}
                    style={{
                      background: idx % 2 === 0 ? "#ffffff" : "rgba(2, 132, 199, 0.03)",
                      borderBottom: "1px solid rgba(2, 132, 199, 0.1)",
                    }}
                  >
                    <td style={{ padding: "18px 24px", fontSize: 15, fontWeight: 900, color: C.navy }}>{m.mineral}</td>
                    <td style={{ padding: "18px 24px", fontSize: 15, fontWeight: 800, color: C.ocean }}>{m.value}</td>
                    <td style={{ padding: "18px 24px", fontSize: 14.5, color: C.slate }}>{m.benefit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 5. Bottle Comparison Matrix (Spacious Width) ── */}
      <section
        style={{
          background: "linear-gradient(180deg, #f8fcff 0%, #ffffff 100%)",
          padding: mobile ? "60px 0" : "100px 0",
          borderTop: "1px solid rgba(2, 132, 199, 0.1)",
        }}
      >
        <div style={{ width: "min(90%, 1280px)", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 52px" }}>
            <div style={{ color: C.ocean, fontSize: 12.5, fontWeight: 800, textTransform: "uppercase", letterSpacing: 1.4, marginBottom: 10 }}>
              Side-by-Side Comparison
            </div>
            <h2 style={{ margin: "0 0 14px", fontSize: mobile ? 30 : 42, fontWeight: 900, color: C.navy, letterSpacing: -0.8 }}>
              Compare Bottle Specifications
            </h2>
          </div>

          <div
            style={{
              overflowX: "auto",
              border: "1.5px solid rgba(2, 132, 199, 0.18)",
              borderRadius: 22,
              boxShadow: "0 10px 32px rgba(2, 132, 199, 0.05)",
            }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 680 }}>
              <thead>
                <tr style={{ background: "rgba(2, 132, 199, 0.08)", color: C.navy }}>
                  <th style={{ padding: "18px 24px", textAlign: "left", fontSize: 15, fontWeight: 900 }}>Feature</th>
                  <th style={{ padding: "18px 24px", textAlign: "left", fontSize: 15, fontWeight: 900 }}>500ml Pocket</th>
                  <th style={{ padding: "18px 24px", textAlign: "left", fontSize: 15, fontWeight: 900 }}>1.5L Family</th>
                  <th style={{ padding: "18px 24px", textAlign: "left", fontSize: 15, fontWeight: 900 }}>19L Dispenser Gallon</th>
                </tr>
              </thead>
              <tbody>
                {comparisonMatrix.map((c, idx) => (
                  <tr
                    key={c.feature}
                    style={{
                      background: idx % 2 === 0 ? "#ffffff" : "rgba(2, 132, 199, 0.02)",
                      borderBottom: "1px solid rgba(2, 132, 199, 0.1)",
                    }}
                  >
                    <td style={{ padding: "18px 24px", fontSize: 14.5, fontWeight: 800, color: C.navy }}>{c.feature}</td>
                    <td style={{ padding: "18px 24px", fontSize: 14.5, color: C.slate }}>{c.p500}</td>
                    <td style={{ padding: "18px 24px", fontSize: 14.5, color: C.slate }}>{c.p15}</td>
                    <td style={{ padding: "18px 24px", fontSize: 14.5, fontWeight: 800, color: C.ocean }}>{c.p19}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 6. Bulk & Corporate Orders Callout (Spacious Width) ── */}
      <section style={{ padding: mobile ? "60px 0" : "100px 0", background: "#ffffff" }}>
        <div
          style={{
            width: "min(90%, 1280px)",
            margin: "0 auto",
            background: "linear-gradient(135deg, #041c32 0%, #032a48 100%)",
            color: "#ffffff",
            borderRadius: 28,
            padding: mobile ? "40px 24px" : "64px 72px",
            display: "flex",
            flexDirection: mobile ? "column" : "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 36,
            boxShadow: "0 24px 56px rgba(4, 28, 50, 0.28)",
          }}
        >
          <div style={{ maxWidth: 720 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "5px 16px",
                borderRadius: 20,
                background: "rgba(0, 180, 216, 0.15)",
                color: C.aqua,
                fontSize: 12.5,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: 1.4,
                marginBottom: 16,
              }}
            >
              Wholesale & Corporate Accounts
            </div>
            <h3 style={{ margin: "0 0 14px", fontSize: mobile ? 26 : 38, fontWeight: 900, letterSpacing: -0.6 }}>
              Require Bulk Supply for Weddings, Schools, or Offices?
            </h3>
            <p style={{ margin: 0, fontSize: 16, color: "#cbd5e1", lineHeight: 1.75 }}>
              Mian Rayan Traders offers flexible contract pricing, recurring weekly dispenser gallon replenishment, and bulk carton delivery across Fort Abbas and southern Punjab.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14, flexShrink: 0 }}>
            <Link
              href="https://wa.me/923126016060?text=Hello%201%20Sip,%20I%20am%20interested%20in%20Bulk%20Supply%20and%20Wholesale%20pricing."
              target="_blank"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                padding: "15px 32px",
                borderRadius: 14,
                background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                color: "#ffffff",
                fontSize: 15.5,
                fontWeight: 800,
                textDecoration: "none",
                boxShadow: "0 8px 24px rgba(16, 185, 129, 0.35)",
              }}
            >
              <span>💬 Wholesale WhatsApp Inquiry</span>
            </Link>

            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
                padding: "14px 28px",
                borderRadius: 14,
                background: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "#ffffff",
                fontSize: 15,
                fontWeight: 800,
                textDecoration: "none",
              }}
            >
              <span>View Depot Contact Details →</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
