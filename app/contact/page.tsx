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
    sub: "Direct pickups and depot retail available",
  },
  {
    icon: "☎️",
    title: "Call Helpline",
    detail: "0312 6016060",
    link: "tel:+923126016060",
    sub: "Available 8:00 AM – 10:00 PM daily",
  },
  {
    icon: "💬",
    title: "Instant WhatsApp Order",
    detail: "0312 6016060",
    link: "https://wa.me/923126016060?text=Hello%201%20Sip,%20I%20want%20to%20order%20water.",
    sub: "Fast reply for home & office deliveries",
  },
  {
    icon: "🏢",
    title: "Business Operator",
    detail: "Mian Rayan Traders",
    sub: "Official producer and distributor of 1 Sip",
  },
];

const services = [
  {
    title: "Residential Home Supply",
    desc: "Scheduled doorstep delivery of 19L dispenser bottles and carton packs for families across Fort Abbas.",
  },
  {
    title: "Corporate & Clinic Accounts",
    desc: "Monthly billing and dedicated dispenser maintenance for corporate offices, hospitals, and academic centers.",
  },
  {
    title: "Event & Catering Cartons",
    desc: "Bulk chilled 500ml and 1.5L carton deliveries for weddings, conferences, sports events, and public functions.",
  },
];

export default function ContactPage() {
  const [mobile, setMobile] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    bottleSize: "19L Dispenser Gallon",
    quantity: "2",
    address: "",
  });

  useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth <= 900);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello 1 Sip!%0A*Name:* ${encodeURIComponent(formData.name || "Customer")}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Product:* ${encodeURIComponent(formData.bottleSize)}%0A*Quantity:* ${encodeURIComponent(formData.quantity)}%0A*Address:* ${encodeURIComponent(formData.address)}`;
    window.open(`https://wa.me/923126016060?text=${msg}`, "_blank");
  };

  return (
    <div style={{ background: "#ffffff", overflow: "hidden" }}>
      {/* ── 1. Header (Bright, Crystal Glacial Atmosphere) ── */}
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
            <span>📞</span>
            <span>Get in Touch</span>
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
            Fresh Hydration,{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #0284c7 0%, #00b4d8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Delivered Quickly
            </span>
          </h1>

          <p style={{ margin: 0, fontSize: mobile ? 15 : 17, color: C.slate, maxWidth: 600, lineHeight: 1.7 }}>
            Contact 1 Sip Natural Water for orders, home dispenser delivery schedules, wholesale agency contracts, or general inquiries.
          </p>
        </div>
      </section>

      {/* ── 2. Contact Details & Direct Order Form ── */}
      <section style={{ padding: mobile ? "50px 0" : "80px 0", background: "#ffffff" }}>
        <div
          style={{
            width: "min(93%, 1280px)",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: mobile ? "1fr" : "1.1fr 1.3fr",
            gap: mobile ? 40 : 64,
            alignItems: "start",
          }}
        >
          {/* Left Column: Direct Contacts */}
          <div>
            <div style={{ color: C.ocean, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.2, marginBottom: 8 }}>
              Direct Channels
            </div>
            <h2 style={{ margin: "0 0 20px", fontSize: mobile ? 26 : 36, fontWeight: 900, color: C.navy, letterSpacing: -0.6 }}>
              We Are Ready to Assist You
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
              {contacts.map((c) => (
                <div
                  key={c.title}
                  style={{
                    display: "flex",
                    gap: 16,
                    alignItems: "flex-start",
                    background: "rgba(2, 132, 199, 0.03)",
                    border: "1px solid rgba(2, 132, 199, 0.12)",
                    borderRadius: 16,
                    padding: "20px",
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: "rgba(2, 132, 199, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 22,
                      flexShrink: 0,
                    }}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: C.ocean, textTransform: "uppercase", marginBottom: 2 }}>
                      {c.title}
                    </div>
                    {c.link ? (
                      <Link
                        href={c.link}
                        target={c.link.startsWith("http") ? "_blank" : undefined}
                        style={{
                          fontSize: 17,
                          fontWeight: 800,
                          color: C.navy,
                          textDecoration: "none",
                          display: "inline-block",
                          marginBottom: 4,
                        }}
                      >
                        {c.detail}
                      </Link>
                    ) : (
                      <div style={{ fontSize: 15.5, fontWeight: 700, color: C.navy, marginBottom: 4 }}>
                        {c.detail}
                      </div>
                    )}
                    <div style={{ fontSize: 13, color: C.slate }}>{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Action Dial Buttons */}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link
                href="tel:+923126016060"
                style={{
                  flex: 1,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  padding: "14px 22px",
                  borderRadius: 12,
                  background: "rgba(2, 132, 199, 0.08)",
                  border: "1px solid rgba(2, 132, 199, 0.2)",
                  color: C.navy,
                  fontSize: 14.5,
                  fontWeight: 700,
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
                  padding: "14px 22px",
                  borderRadius: 12,
                  background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                  color: "#ffffff",
                  fontSize: 14.5,
                  fontWeight: 700,
                  textDecoration: "none",
                  boxShadow: "0 6px 20px rgba(16, 185, 129, 0.28)",
                }}
              >
                <span>💬 WhatsApp Direct</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Order Dispatch Generator Form */}
          <div
            style={{
              background: "linear-gradient(180deg, #f0f9ff 0%, #ffffff 100%)",
              border: "1.5px solid rgba(2, 132, 199, 0.18)",
              borderRadius: 24,
              padding: mobile ? "28px 20px" : "40px",
              boxShadow: "0 16px 40px rgba(2, 132, 199, 0.08)",
            }}
          >
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", color: C.ocean, letterSpacing: 1 }}>
                Instant Order Generator
              </div>
              <h3 style={{ margin: "6px 0 0", fontSize: 24, fontWeight: 900, color: C.navy }}>
                Request Home or Office Delivery
              </h3>
              <p style={{ margin: "6px 0 0", fontSize: 14, color: C.slate }}>
                Fill out the details below to dispatch your order directly to our Fort Abbas delivery coordinator via WhatsApp.
              </p>
            </div>

            <form onSubmit={handleWhatsAppSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 6 }}>
                  Full Name / Business Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tariq Mehmood / Ahmed Traders"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: 10,
                    border: "1px solid rgba(2, 132, 199, 0.2)",
                    background: "#ffffff",
                    fontSize: 14.5,
                    color: C.navy,
                    outline: "none",
                  }}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 1fr", gap: 14 }}>
                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 6 }}>
                    Contact Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="03xx xxxxxxx"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      borderRadius: 10,
                      border: "1px solid rgba(2, 132, 199, 0.2)",
                      background: "#ffffff",
                      fontSize: 14.5,
                      color: C.navy,
                      outline: "none",
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 6 }}>
                    Select Bottle Format *
                  </label>
                  <select
                    value={formData.bottleSize}
                    onChange={(e) => setFormData({ ...formData, bottleSize: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      borderRadius: 10,
                      border: "1px solid rgba(2, 132, 199, 0.2)",
                      background: "#ffffff",
                      fontSize: 14.5,
                      color: C.navy,
                      outline: "none",
                    }}
                  >
                    <option value="500ml Pocket Bottle (24 Cartons)">500ml (24-Bottle Carton)</option>
                    <option value="1.5L Family Bottle (12 Cartons)">1.5L (12-Bottle Carton)</option>
                    <option value="19L Dispenser Gallon">19L Dispenser Gallon</option>
                    <option value="Bulk Mix / Event Order">Bulk Mix / Event Order</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 6 }}>
                  Quantity / Monthly Requirement *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 5 Gallons / 10 Cartons"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: 10,
                    border: "1px solid rgba(2, 132, 199, 0.2)",
                    background: "#ffffff",
                    fontSize: 14.5,
                    color: C.navy,
                    outline: "none",
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 6 }}>
                  Delivery Address in Fort Abbas / Area *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="House / Shop / Office address..."
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: 10,
                    border: "1px solid rgba(2, 132, 199, 0.2)",
                    background: "#ffffff",
                    fontSize: 14.5,
                    color: C.navy,
                    outline: "none",
                    resize: "none",
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  marginTop: 6,
                  padding: "14px 28px",
                  borderRadius: 12,
                  background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                  color: "#ffffff",
                  fontSize: 15,
                  fontWeight: 800,
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 8px 24px rgba(16, 185, 129, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                }}
              >
                <span>💬 Send Order via WhatsApp</span>
                <span>→</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── 3. Services Overview ── */}
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
              Supply Capabilities
            </div>
            <h2 style={{ margin: 0, fontSize: mobile ? 28 : 38, fontWeight: 900, color: C.navy, letterSpacing: -0.6 }}>
              Tailored Delivery Programs
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: mobile ? "1fr" : "repeat(3, 1fr)",
              gap: 24,
            }}
          >
            {services.map((s) => (
              <div
                key={s.title}
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(2, 132, 199, 0.12)",
                  borderRadius: 18,
                  padding: "30px 24px",
                  boxShadow: "0 4px 18px rgba(2, 132, 199, 0.04)",
                }}
              >
                <div style={{ fontSize: 28, marginBottom: 14 }}>🚚</div>
                <h3 style={{ margin: "0 0 10px", fontSize: 18, fontWeight: 800, color: C.navy }}>
                  {s.title}
                </h3>
                <p style={{ margin: 0, fontSize: 14, color: C.slate, lineHeight: 1.65 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
