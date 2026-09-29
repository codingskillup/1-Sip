"use client";

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

const contacts = [
  {
    icon: "📍",
    title: "Plant & Depot Location",
    detail: "Commercial Market, Ahmed Garden, Fort Abbas, Punjab, Pakistan",
    sub: "Direct pickups, bottle exchanges & depot walk-ins",
  },
  {
    icon: "☎️",
    title: "Telephone Order Hotline",
    detail: "0312 6016060",
    link: "tel:+923126016060",
    sub: "Call directly for immediate local dispatch",
  },
  {
    icon: "💬",
    title: "Official WhatsApp Support",
    detail: "0312 6016060",
    link: "https://wa.me/923126016060?text=Hello%201%20Sip,%20I%20would%20like%20to%20order%20water.",
    sub: "Instant reply for orders & delivery tracking",
  },
  {
    icon: "🏢",
    title: "Operating Business Firm",
    detail: "Mian Rayan Traders",
    sub: "Registered management and regional distributor",
  },
];

const coverageAreas = [
  { zone: "Fort Abbas City & Commercial Area", time: "Same-Day Doorstep Delivery", badge: "Primary Hub" },
  { zone: "Ahmed Garden & Surrounding Residential", time: "Daily 2-Hour Express Routes", badge: "Local Depot" },
  { zone: "Haroonabad Road Corridor & Chishtian Link", time: "Scheduled Bi-Weekly Fleet", badge: "Regional" },
  { zone: "Bulk Outstation Orders across Punjab", time: "Dedicated Truck Freight", badge: "Wholesale" },
];

export default function ContactPage() {
  const [mobile, setMobile] = useState(false);
  const [orderType, setOrderType] = useState("Home Delivery");
  const [bottleSize, setBottleSize] = useState("19L Dispenser Gallon");
  const [quantity, setQuantity] = useState(3);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    notes: "",
  });

  useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth <= 1040);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleWhatsAppDispatch = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Water Order from 1 Sip Website*%0A%0A*Customer Name:* ${encodeURIComponent(formData.name || "Customer")}%0A*Contact Phone:* ${encodeURIComponent(formData.phone || "Not specified")}%0A*Order Purpose:* ${encodeURIComponent(orderType)}%0A*Selected Bottle:* ${encodeURIComponent(bottleSize)}%0A*Quantity:* ${quantity} units%0A*Delivery Address:* ${encodeURIComponent(formData.address || "Fort Abbas")}%0A${formData.notes ? `*Special Notes:* ${encodeURIComponent(formData.notes)}%0A` : ""}%0APlease confirm delivery time and dispatch. Thank you!`;
    window.open(`https://wa.me/923126016060?text=${text}`, "_blank");
  };

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
            <span>📞</span>
            <span>Customer Service & Ordering</span>
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
            Fresh Hydration,{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #0284c7 0%, #00b4d8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Direct to Your Door
            </span>
          </h1>

          <p style={{ margin: 0, fontSize: mobile ? 16 : 19, color: C.slate, maxWidth: 740, lineHeight: 1.75 }}>
            Place your order in seconds for household 19L dispensers, 500ml and 1.5L carton deliveries, or inquire for retail distribution across Punjab.
          </p>
        </div>
      </section>

      {/* ── 2. Interactive Order Calculator & Depot Contacts (Spacious Width) ── */}
      <section style={{ padding: mobile ? "60px 0" : "100px 0", background: "#ffffff" }}>
        <div
          style={{
            width: "min(90%, 1280px)",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: mobile ? "1fr" : "1.1fr 1.35fr",
            gap: mobile ? 40 : 72,
            alignItems: "start",
          }}
        >
          {/* Left: Contact Details & Service Hours */}
          <div>
            <div style={{ color: C.ocean, fontSize: 12.5, fontWeight: 800, textTransform: "uppercase", letterSpacing: 1.4, marginBottom: 10 }}>
              Direct Inquiries
            </div>
            <h2 style={{ margin: "0 0 24px", fontSize: mobile ? 30 : 40, fontWeight: 900, color: C.navy, letterSpacing: -0.8 }}>
              Contact Our Depot Team
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 18, marginBottom: 36 }}>
              {contacts.map((c) => (
                <div
                  key={c.title}
                  className="hover-lift"
                  style={{
                    display: "flex",
                    gap: 18,
                    alignItems: "flex-start",
                    background: "linear-gradient(180deg, #f8fcff 0%, #ffffff 100%)",
                    border: "1.5px solid rgba(2, 132, 199, 0.14)",
                    borderRadius: 20,
                    padding: "24px",
                    boxShadow: "0 4px 16px rgba(2, 132, 199, 0.04)",
                  }}
                >
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 16,
                      background: "rgba(2, 132, 199, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 24,
                      flexShrink: 0,
                    }}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 12.5, fontWeight: 800, color: C.ocean, textTransform: "uppercase", marginBottom: 3 }}>
                      {c.title}
                    </div>
                    {c.link ? (
                      <Link
                        href={c.link}
                        target={c.link.startsWith("http") ? "_blank" : undefined}
                        style={{
                          fontSize: 19,
                          fontWeight: 900,
                          color: C.navy,
                          textDecoration: "none",
                          display: "inline-block",
                          marginBottom: 4,
                        }}
                      >
                        {c.detail}
                      </Link>
                    ) : (
                      <div style={{ fontSize: 17, fontWeight: 900, color: C.navy, marginBottom: 4 }}>
                        {c.detail}
                      </div>
                    )}
                    <div style={{ fontSize: 14, color: C.slate }}>{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Quick Actions */}
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 36 }}>
              <Link
                href="tel:+923126016060"
                style={{
                  flex: 1,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  padding: "16px 26px",
                  borderRadius: 14,
                  background: "rgba(2, 132, 199, 0.08)",
                  border: "1.5px solid rgba(2, 132, 199, 0.25)",
                  color: C.navy,
                  fontSize: 15.5,
                  fontWeight: 800,
                  textDecoration: "none",
                }}
              >
                <span>📞 Call 0312 6016060</span>
              </Link>
              <Link
                href="https://wa.me/923126016060"
                target="_blank"
                style={{
                  flex: 1,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  padding: "16px 26px",
                  borderRadius: 14,
                  background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                  color: "#ffffff",
                  fontSize: 15.5,
                  fontWeight: 800,
                  textDecoration: "none",
                  boxShadow: "0 8px 24px rgba(16, 185, 129, 0.3)",
                }}
              >
                <span>💬 WhatsApp Us</span>
              </Link>
            </div>

            {/* Depot Hours Info Box */}
            <div
              style={{
                background: "rgba(2, 132, 199, 0.04)",
                border: "1px solid rgba(2, 132, 199, 0.14)",
                borderRadius: 18,
                padding: "24px 28px",
              }}
            >
              <div style={{ fontSize: 14, fontWeight: 900, color: C.navy, marginBottom: 8 }}>
                🕒 Standard Delivery & Depot Timings
              </div>
              <div style={{ fontSize: 14.5, color: C.slate, lineHeight: 1.7 }}>
                <strong>Monday to Sunday:</strong> 8:00 AM – 10:00 PM <br />
                Emergency office, hospital and event replenishments are accommodated 7 days a week.
              </div>
            </div>
          </div>

          {/* Right: Interactive Order Dispatch Generator Form */}
          <div
            style={{
              background: "linear-gradient(180deg, #f0f9ff 0%, #ffffff 100%)",
              border: "1.5px solid rgba(2, 132, 199, 0.2)",
              borderRadius: 28,
              padding: mobile ? "32px 24px" : "48px",
              boxShadow: "0 24px 56px rgba(2, 132, 199, 0.08)",
            }}
          >
            <div style={{ marginBottom: 28 }}>
              <div style={{ fontSize: 12.5, fontWeight: 800, textTransform: "uppercase", color: C.ocean, letterSpacing: 1.4 }}>
                Smart Order Dispatch Generator
              </div>
              <h3 style={{ margin: "8px 0 0", fontSize: 28, fontWeight: 900, color: C.navy }}>
                Request Home / Office Delivery
              </h3>
              <p style={{ margin: "8px 0 0", fontSize: 15, color: C.slate }}>
                Select your hydration requirement below to generate an instant, formatted delivery request directly to our Fort Abbas delivery coordinator.
              </p>
            </div>

            <form onSubmit={handleWhatsAppDispatch} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {/* Purpose Selector */}
              <div>
                <label style={{ display: "block", fontSize: 13.5, fontWeight: 800, color: C.navy, marginBottom: 10 }}>
                  1. Order Category / Purpose
                </label>
                <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr 1fr" : "repeat(4, 1fr)", gap: 10 }}>
                  {["Home Delivery", "Office Supply", "Wedding / Event", "Retail Store"].map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setOrderType(cat)}
                      style={{
                        padding: "12px 10px",
                        borderRadius: 12,
                        border: orderType === cat ? `2px solid ${C.ocean}` : "1.5px solid rgba(2, 132, 199, 0.16)",
                        background: orderType === cat ? "rgba(2, 132, 199, 0.12)" : "#ffffff",
                        color: orderType === cat ? C.ocean : C.navy,
                        fontSize: 13,
                        fontWeight: orderType === cat ? 800 : 600,
                        cursor: "pointer",
                      }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bottle Size Selector */}
              <div>
                <label style={{ display: "block", fontSize: 13.5, fontWeight: 800, color: C.navy, marginBottom: 10 }}>
                  2. Select Bottle Format
                </label>
                <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "repeat(3, 1fr)", gap: 12 }}>
                  {[
                    { label: "19L Dispenser Gallon", sub: "Standard for Cooler" },
                    { label: "500ml (Carton of 24)", sub: "Travel & Gym" },
                    { label: "1.5L (Pack of 12)", sub: "Family Table" },
                  ].map((b) => (
                    <button
                      key={b.label}
                      type="button"
                      onClick={() => setBottleSize(b.label)}
                      style={{
                        padding: "14px",
                        borderRadius: 14,
                        border: bottleSize === b.label ? `2px solid ${C.ocean}` : "1.5px solid rgba(2, 132, 199, 0.16)",
                        background: bottleSize === b.label ? "rgba(2, 132, 199, 0.12)" : "#ffffff",
                        textAlign: "left",
                        cursor: "pointer",
                      }}
                    >
                      <div style={{ fontSize: 14, fontWeight: 900, color: C.navy }}>{b.label}</div>
                      <div style={{ fontSize: 12, color: C.slate, marginTop: 3 }}>{b.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Counter */}
              <div>
                <label style={{ display: "block", fontSize: 13.5, fontWeight: 800, color: C.navy, marginBottom: 10 }}>
                  3. Quantity Required ({bottleSize.includes("Gallon") ? "Gallons" : "Cartons / Packs"})
                </label>
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      border: "1.5px solid rgba(2, 132, 199, 0.2)",
                      background: "#ffffff",
                      fontSize: 22,
                      fontWeight: 900,
                      color: C.ocean,
                      cursor: "pointer",
                    }}
                  >
                    −
                  </button>
                  <div
                    style={{
                      minWidth: 70,
                      textAlign: "center",
                      fontSize: 24,
                      fontWeight: 900,
                      color: C.navy,
                    }}
                  >
                    {quantity}
                  </div>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      border: "1.5px solid rgba(2, 132, 199, 0.2)",
                      background: "#ffffff",
                      fontSize: 22,
                      fontWeight: 900,
                      color: C.ocean,
                      cursor: "pointer",
                    }}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Customer Info */}
              <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 1fr", gap: 16 }}>
                <div>
                  <label style={{ display: "block", fontSize: 13.5, fontWeight: 800, color: C.navy, marginBottom: 6 }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tariq Mehmood"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "14px 18px",
                      borderRadius: 12,
                      border: "1.5px solid rgba(2, 132, 199, 0.2)",
                      background: "#ffffff",
                      fontSize: 15,
                      color: C.navy,
                      outline: "none",
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: 13.5, fontWeight: 800, color: C.navy, marginBottom: 6 }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="03xx xxxxxxx"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "14px 18px",
                      borderRadius: 12,
                      border: "1.5px solid rgba(2, 132, 199, 0.2)",
                      background: "#ffffff",
                      fontSize: 15,
                      color: C.navy,
                      outline: "none",
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: 13.5, fontWeight: 800, color: C.navy, marginBottom: 6 }}>
                  Delivery Address in Fort Abbas or Nearby *
                </label>
                <textarea
                  rows={2}
                  required
                  placeholder="Street / House # / Shop name in Fort Abbas..."
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "14px 18px",
                    borderRadius: 12,
                    border: "1.5px solid rgba(2, 132, 199, 0.2)",
                    background: "#ffffff",
                    fontSize: 15,
                    color: C.navy,
                    outline: "none",
                    resize: "none",
                  }}
                />
              </div>

              {/* Order Preview Summary Box */}
              <div
                style={{
                  background: "rgba(16, 185, 129, 0.08)",
                  border: "1px solid rgba(16, 185, 129, 0.2)",
                  borderRadius: 14,
                  padding: "14px 18px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: 8,
                }}
              >
                <div>
                  <div style={{ fontSize: 11.5, fontWeight: 700, color: "#059669", textTransform: "uppercase" }}>Order Preview</div>
                  <div style={{ fontSize: 15, fontWeight: 900, color: C.navy }}>
                    {quantity} × {bottleSize} ({orderType})
                  </div>
                </div>
                <span style={{ fontSize: 12.5, fontWeight: 800, color: "#059669" }}>
                  ✓ Instant Dispatch via WhatsApp
                </span>
              </div>

              <button
                type="submit"
                style={{
                  padding: "16px 32px",
                  borderRadius: 14,
                  background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                  color: "#ffffff",
                  fontSize: 16,
                  fontWeight: 900,
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 8px 24px rgba(16, 185, 129, 0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                }}
              >
                <span>💬 Send Order to WhatsApp Dispatch</span>
                <span>→</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── 3. Delivery Coverage Zones (Spacious Width) ── */}
      <section
        style={{
          background: "linear-gradient(180deg, #f8fcff 0%, #ffffff 100%)",
          padding: mobile ? "60px 0" : "100px 0",
          borderTop: "1px solid rgba(2, 132, 199, 0.1)",
        }}
      >
        <div style={{ width: "min(90%, 1280px)", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 48px" }}>
            <div style={{ color: C.ocean, fontSize: 12.5, fontWeight: 800, textTransform: "uppercase", letterSpacing: 1.4, marginBottom: 10 }}>
              Distribution Network
            </div>
            <h2 style={{ margin: "0 0 14px", fontSize: mobile ? 30 : 42, fontWeight: 900, color: C.navy, letterSpacing: -0.8 }}>
              Where We Deliver in Punjab
            </h2>
            <p style={{ margin: 0, fontSize: 16, color: C.slate, lineHeight: 1.7 }}>
              Operating direct daily delivery vans and partnering with regional freight carriers to ensure unhindered water access.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: mobile ? "1fr" : "repeat(2, 1fr)",
              gap: 24,
            }}
          >
            {coverageAreas.map((area) => (
              <div
                key={area.zone}
                className="hover-lift"
                style={{
                  background: "#ffffff",
                  border: "1.5px solid rgba(2, 132, 199, 0.14)",
                  borderRadius: 18,
                  padding: "26px 24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  boxShadow: "0 4px 18px rgba(2, 132, 199, 0.04)",
                  flexWrap: "wrap",
                  gap: 14,
                }}
              >
                <div>
                  <div style={{ fontSize: 16.5, fontWeight: 900, color: C.navy, marginBottom: 4 }}>
                    📍 {area.zone}
                  </div>
                  <div style={{ fontSize: 14, color: C.slate }}>
                    ⏱️ {area.time}
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
                  {area.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
