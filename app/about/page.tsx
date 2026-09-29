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

const filtrationJourney = [
  {
    step: "01",
    title: "Subterranean Aquifer Extraction",
    desc: "Sourced deep beneath preserved natural subterranean geological layers, untouched by modern surface pollution or industrial runoff.",
    icon: "🌊",
  },
  {
    step: "02",
    title: "Dual Sand & Carbon Clarification",
    desc: "Dual-media silica sand and activated coconut carbon filters extract suspended solids, odors, and natural organic discoloration.",
    icon: "🔬",
  },
  {
    step: "03",
    title: "High-Pressure Reverse Osmosis (RO)",
    desc: "State-of-the-art semi-permeable membranes filter at the molecular level (0.0001 micron), balancing total dissolved salts to perfection.",
    icon: "💧",
  },
  {
    step: "04",
    title: "Mineral Re-Balancing & Polishing",
    desc: "Essential minerals including calcium and magnesium are carefully calibrated to ensure an alkaline, naturally sweet and smooth mouthfeel.",
    icon: "⚖️",
  },
  {
    step: "05",
    title: "Dual UV-C & Ozone Sterilization",
    desc: "Double microbial barrier destroys 99.99% of bacteria, viruses, and pathogens without creating any synthetic chemical residue.",
    icon: "🛡️",
  },
  {
    step: "06",
    title: "Sterile Cleanroom Bottling & Sealing",
    desc: "Bottles are blown, washed with ozonated water, filled, and hermetically sealed in positive-pressure sterile cleanrooms.",
    icon: "🫙",
  },
];

const pillars = [
  {
    icon: "💧",
    title: "Purity Without Compromise",
    desc: "Every single production batch is audited hourly for TDS stability, pH balance, and microbiological sterility in our plant lab.",
  },
  {
    icon: "🏜️",
    title: "Deep Cholistan Heritage",
    desc: "Born in Fort Abbas, our brand honors the resilient spirit of the Cholistan Desert where pure water is life's greatest gift.",
  },
  {
    icon: "🔬",
    title: "Medical-Grade Technology",
    desc: "Invested in food-grade SS316 stainless steel conduits, automated blow molding, and multi-stage RO purification equipment.",
  },
  {
    icon: "🤝",
    title: "Reliable Community Service",
    desc: "Operated with integrity by Mian Rayan Traders, offering prompt supply to homes, businesses, hospitals, and educational hubs.",
  },
];

const faqs = [
  {
    q: "Where is 1 Sip Natural Water sourced and bottled?",
    a: "1 Sip is extracted from deep natural subterranean aquifers and bottled in our dedicated modern facility located in Commercial Market, Ahmed Garden, Fort Abbas, Punjab under strict hygienic supervision.",
  },
  {
    q: "What makes 1 Sip taste so light and naturally refreshing?",
    a: "Our multi-barrier Reverse Osmosis and mineral balancing process maintains Total Dissolved Solids (TDS) between 120 – 140 mg/L, creating a crisp, naturally sweet, and neutral pH 7.4 profile that never tastes heavy or chalky.",
  },
  {
    q: "Are the bottles safe and BPA-free?",
    a: "Yes, 100%. All our 500ml and 1.5L bottles are produced from virgin, food-grade, BPA-free PET polymer, and our 19L dispensers are made from high-strength, sanitized, recyclable polycarbonate.",
  },
  {
    q: "How can offices and families order scheduled water refills?",
    a: "You can place a direct delivery order by calling 0312 6016060 or messaging our WhatsApp hotline. We offer regular weekly or bi-weekly delivery routes across Fort Abbas.",
  },
];

export default function AboutPage() {
  const [mobile, setMobile] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth <= 1040);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ background: "#ffffff", overflow: "hidden" }}>
      {/* ── 1. Page Header (Spacious, Elegant Glacial Purity) ── */}
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
            <span>📖</span>
            <span>The 1 Sip Story</span>
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
            The Soul of Cholistan,{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #0284c7 0%, #00b4d8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Bottled with Perfection
            </span>
          </h1>

          <p style={{ margin: "0 0 28px", fontSize: mobile ? 16 : 19, color: C.slate, maxWidth: 740, lineHeight: 1.75 }}>
            Discover how Mian Rayan Traders transformed a deep respect for Cholistan’s ancient oasis traditions into Pakistan’s modern benchmark for pure, hygienic, and life-giving drinking water.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {["Plant Based in Fort Abbas", "WHO Purity Standard", "Zero Human Touch Packaging", "Daily Laboratory Audits"].map((pill) => (
              <span
                key={pill}
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
                <span>{pill}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. The Desert Oasis Story Section ── */}
      <section style={{ padding: mobile ? "60px 0" : "100px 0", background: "#ffffff" }}>
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
          {/* Visual Showcase */}
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
                alt="Cholistan Desert Oasis Lake"
                width={800}
                height={520}
                priority
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
                  bottom: 22,
                  left: 22,
                  right: 22,
                  background: "rgba(255, 255, 255, 0.94)",
                  backdropFilter: "blur(14px)",
                  padding: "16px 22px",
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
                  <div style={{ fontSize: 11.5, fontWeight: 800, color: C.ocean, textTransform: "uppercase", letterSpacing: 1 }}>
                    Cholistan Oasis & Heritage
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 900, color: C.navy, marginTop: 2 }}>
                    Where Pure Water Has Always Represented Life
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
                  Fort Abbas, PK 🇵🇰
                </span>
              </div>
            </div>
          </div>

          {/* Story Text */}
          <div>
            <div style={{ color: C.ocean, fontSize: 12.5, fontWeight: 800, textTransform: "uppercase", letterSpacing: 1.4, marginBottom: 10 }}>
              Our Founding Story
            </div>
            <h2 style={{ margin: "0 0 18px", fontSize: mobile ? 30 : 42, fontWeight: 900, color: C.navy, letterSpacing: -0.8, lineHeight: 1.2 }}>
              Where Thirst Meets Nature’s Highest Standard
            </h2>

            <p style={{ margin: "0 0 18px", fontSize: 16, color: C.slate, lineHeight: 1.8 }}>
              The Cholistan Desert is an emblem of enduring dignity, sun-drenched golden dunes, and historical forts. In such an arid landscape, water has never been taken for granted. Every drop is celebrated as a source of health, revitalization, and connection.
            </p>

            <p style={{ margin: "0 0 18px", fontSize: 16, color: C.slate, lineHeight: 1.8 }}>
              Recognizing that modern families and workplaces deserve drinking water that is completely free from impurities yet full of vital refreshment, <strong>Mian Rayan Traders</strong> established 1 Sip Natural Water in Fort Abbas.
            </p>

            <p style={{ margin: "0 0 28px", fontSize: 15.5, color: C.slate, lineHeight: 1.8 }}>
              Today, 1 Sip unites local tradition with cutting-edge global filtration protocols — ensuring that every bottle opened delivers the crisp taste of an untouched spring oasis.
            </p>

            <div
              style={{
                background: "linear-gradient(135deg, rgba(2, 132, 199, 0.08) 0%, rgba(0, 180, 216, 0.04) 100%)",
                borderLeft: `4px solid ${C.ocean}`,
                padding: "20px 24px",
                borderRadius: "0 14px 14px 0",
                marginBottom: 32,
              }}
            >
              <div style={{ fontStyle: "italic", fontSize: 16, color: C.navy, fontWeight: 700, lineHeight: 1.6 }}>
                &ldquo;Pure water is not just our business — it is our sacred responsibility to the health and well-being of our community.&rdquo;
              </div>
              <div style={{ fontSize: 13, color: C.ocean, fontWeight: 800, marginTop: 8 }}>
                — Management, Mian Rayan Traders
              </div>
            </div>

            <Link
              href="/products"
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
              <span>Explore Our Bottle Formats</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 3. High-Tech Plant Facility ── */}
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
            gridTemplateColumns: mobile ? "1fr" : "1fr 1.15fr",
            gap: mobile ? 40 : 72,
            alignItems: "center",
          }}
        >
          <div>
            <div style={{ color: C.ocean, fontSize: 12.5, fontWeight: 800, textTransform: "uppercase", letterSpacing: 1.4, marginBottom: 10 }}>
              Modern Manufacturing
            </div>
            <h2 style={{ margin: "0 0 18px", fontSize: mobile ? 30 : 42, fontWeight: 900, color: C.navy, letterSpacing: -0.8, lineHeight: 1.2 }}>
              The Fort Abbas Processing Hub
            </h2>
            <p style={{ margin: "0 0 18px", fontSize: 16, color: C.slate, lineHeight: 1.8 }}>
              Located strategically in Ahmed Garden, Commercial Market, Fort Abbas, our facility is engineered with precision sanitary zoning. Raw water intake, multi-stage membrane purification, and final filling occur in separated, pressurized environments.
            </p>
            <p style={{ margin: "0 0 28px", fontSize: 15.5, color: C.slate, lineHeight: 1.8 }}>
              Using state-of-the-art SS316 food-grade stainless steel tanks, closed-loop ozone disinfection systems, and cleanroom air handling, we prevent any atmospheric contamination before the cap is securely sealed.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {[
                { title: "Cleanroom Standard", val: "Positive Air Pressure" },
                { title: "Filtration Fineness", val: "0.0001 Micron (RO)" },
                { title: "Microbial Control", val: "UV-C + Active O₃" },
                { title: "Daily Plant Capacity", val: "50,000+ Liters Daily" },
              ].map((it) => (
                <div key={it.title} style={{ background: "#ffffff", padding: "16px 20px", borderRadius: 14, border: "1.5px solid rgba(2, 132, 199, 0.15)", boxShadow: "0 4px 16px rgba(2, 132, 199, 0.04)" }}>
                  <div style={{ fontSize: 11.5, fontWeight: 700, color: C.slate }}>{it.title}</div>
                  <div style={{ fontSize: 15.5, fontWeight: 900, color: C.navy, marginTop: 3 }}>{it.val}</div>
                </div>
              ))}
            </div>
          </div>

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
                alt="1 Sip Stainless Steel Bottling Line"
                width={800}
                height={520}
                sizes="(max-width: 1040px) 90vw, 50vw"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, transparent 65%, rgba(4, 27, 47, 0.6) 100%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 18,
                  left: 18,
                  right: 18,
                  background: "rgba(255, 255, 255, 0.94)",
                  backdropFilter: "blur(12px)",
                  padding: "12px 18px",
                  borderRadius: 14,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ fontSize: 14, fontWeight: 900, color: C.navy }}>Automated Bottling Line</span>
                <span style={{ fontSize: 12.5, fontWeight: 800, color: "#059669" }}>✓ Zero Touch Packaging</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Interactive 6-Stage Filtration Journey ── */}
      <section style={{ padding: mobile ? "60px 0" : "100px 0", background: "#ffffff" }}>
        <div style={{ width: "min(90%, 1280px)", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 56px" }}>
            <div style={{ color: C.ocean, fontSize: 12.5, fontWeight: 800, textTransform: "uppercase", letterSpacing: 1.4, marginBottom: 10 }}>
              Laboratory Methodology
            </div>
            <h2 style={{ margin: "0 0 16px", fontSize: mobile ? 30 : 44, fontWeight: 900, color: C.navy, letterSpacing: -0.8 }}>
              The 6-Stage Journey from Aquifer to Bottle
            </h2>
            <p style={{ margin: 0, fontSize: 16.5, color: C.slate, lineHeight: 1.7 }}>
              A scientifically disciplined sequence ensuring physical clarity, molecular purification, and biological sterilization.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: mobile ? "1fr" : "repeat(3, 1fr)",
              gap: 28,
            }}
          >
            {filtrationJourney.map((st) => (
              <div
                key={st.step}
                className="hover-lift"
                style={{
                  background: "linear-gradient(180deg, #f0f9ff 0%, #ffffff 100%)",
                  border: "1.5px solid rgba(2, 132, 199, 0.16)",
                  borderRadius: 22,
                  padding: "34px 28px",
                  boxShadow: "0 10px 28px rgba(2, 132, 199, 0.05)",
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
                      marginBottom: 18,
                    }}
                  >
                    <span style={{ fontSize: 30 }}>{st.icon}</span>
                    <span
                      style={{
                        fontSize: 16,
                        fontWeight: 900,
                        color: C.ocean,
                        background: "rgba(2, 132, 199, 0.1)",
                        padding: "4px 14px",
                        borderRadius: 20,
                      }}
                    >
                      Step {st.step}
                    </span>
                  </div>
                  <h3 style={{ margin: "0 0 12px", fontSize: 19, fontWeight: 900, color: C.navy }}>
                    {st.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: 14.5, color: C.slate, lineHeight: 1.7 }}>
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Core Values & Commitments ── */}
      <section
        style={{
          background: "linear-gradient(180deg, #f8fcff 0%, #ffffff 100%)",
          padding: mobile ? "60px 0" : "100px 0",
          borderTop: "1px solid rgba(2, 132, 199, 0.1)",
        }}
      >
        <div style={{ width: "min(90%, 1280px)", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 52px" }}>
            <div style={{ color: C.ocean, fontSize: 12.5, fontWeight: 800, textTransform: "uppercase", letterSpacing: 1.4, marginBottom: 10 }}>
              Our Core Vow
            </div>
            <h2 style={{ margin: "0 0 14px", fontSize: mobile ? 30 : 42, fontWeight: 900, color: C.navy, letterSpacing: -0.8 }}>
              Pillars That Guide 1 Sip
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: mobile ? "1fr" : "repeat(4, 1fr)",
              gap: 24,
            }}
          >
            {pillars.map((p) => (
              <div
                key={p.title}
                className="hover-lift"
                style={{
                  background: "#ffffff",
                  border: "1.5px solid rgba(2, 132, 199, 0.14)",
                  borderRadius: 20,
                  padding: "32px 26px",
                  boxShadow: "0 6px 20px rgba(2, 132, 199, 0.04)",
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 16,
                    background: "rgba(2, 132, 199, 0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 26,
                    marginBottom: 18,
                  }}
                >
                  {p.icon}
                </div>
                <h3 style={{ margin: "0 0 10px", fontSize: 18, fontWeight: 900, color: C.navy }}>
                  {p.title}
                </h3>
                <p style={{ margin: 0, fontSize: 14, color: C.slate, lineHeight: 1.7 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. FAQ Accordion Section ── */}
      <section style={{ padding: mobile ? "60px 0" : "100px 0", background: "#ffffff" }}>
        <div style={{ width: "min(90%, 1280px)", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 48px" }}>
            <div style={{ color: C.ocean, fontSize: 12.5, fontWeight: 800, textTransform: "uppercase", letterSpacing: 1.4, marginBottom: 10 }}>
              Frequently Asked Questions
            </div>
            <h2 style={{ margin: 0, fontSize: mobile ? 30 : 42, fontWeight: 900, color: C.navy, letterSpacing: -0.8 }}>
              Everything You Need to Know
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {faqs.map((f, idx) => (
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
