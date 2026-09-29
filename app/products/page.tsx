"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const C = { ocean: "#005f9e", aqua: "#00b4d8", navy: "#012a4a", sky: "#e8f6fb", white: "#ffffff", textSub: "#3d6580", textMuted: "#7fa8be" };

const products = [
  { size: "500ml", title: "Everyday Refreshment", desc: "Perfect for travel, work and daily hydration. Lightweight and convenient.", badge: "Most Popular", col: C.aqua },
  { size: "1.5L", title: "Home & Family", desc: "A practical choice for family use at the dinner table or throughout the day.", badge: "Family Size", col: C.ocean },
  { size: "19L", title: "Home & Office", desc: "The smart choice for regular use at home and the office — always fresh.", badge: "Best Value", col: "#0077b6" },
];

const qualitySteps = [
  { num: "01", icon: "🌊", title: "Source Protection", desc: "Careful attention to water source management and quality at origin.", col: C.ocean },
  { num: "02", icon: "🔬", title: "Water Treatment", desc: "Appropriate filtration and treatment for pure, safe water.", col: C.aqua },
  { num: "03", icon: "🫙", title: "Safe Bottling", desc: "Clean and hygienic handling throughout the bottling process.", col: "#0077b6" },
  { num: "04", icon: "📦", title: "Hygienic Storage", desc: "Proper product handling and storage conditions maintained.", col: "#0096c7" },
];

export default function ProductsPage() {
  const [mobile, setMobile] = useState(false);
  const [selected, setSelected] = useState(0);
  useEffect(() => {
    const fn = () => setMobile(window.innerWidth <= 900);
    fn();
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);
  const cur = products[selected];

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: mobile ? 250 : 330, display: "flex", alignItems: "center", background: `linear-gradient(145deg, ${C.ocean} 0%, #003d66 100%)`, overflow: "hidden" }}>
        <div style={{ position: "absolute", right: "5%", top: "20%", width: 500, height: 500, borderRadius: "50%", background: `radial-gradient(circle, ${C.aqua}30 0%, transparent 65%)`, pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 42, overflow: "hidden" }}>
          <svg viewBox="0 0 1440 42" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
            <path d="M0,42 L0,21 C360,5 720,38 1080,18 C1260,9 1380,28 1440,21 L1440,42 Z" fill={C.white} />
          </svg>
        </div>
        <div style={{ position: "relative", zIndex: 2, width: "min(93%, 1480px)", margin: "0 auto", padding: mobile ? "52px 0 58px" : "64px 0 70px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 14px", borderRadius: 6, background: `${C.aqua}22`, border: `1px solid ${C.aqua}40`, color: C.aqua, fontSize: 11, fontWeight: 700, letterSpacing: 1.4, textTransform: "uppercase", marginBottom: 14 }}>
            Our Products
          </div>
          <h1 style={{ margin: 0, fontSize: mobile ? 36 : 60, fontWeight: 900, color: C.white, lineHeight: 1.05, letterSpacing: -1 }}>
            Pure Water for{" "}
            <span style={{ backgroundImage: `linear-gradient(135deg, ${C.aqua}, #48cae4)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Every Moment
            </span>
          </h1>
          <p style={{ margin: "12px 0 0", color: "rgba(255,255,255,0.48)", fontSize: mobile ? 14 : 16, lineHeight: 1.65, maxWidth: 480 }}>
            Available in 3 sizes designed for every need — travel, home and office.
          </p>
        </div>
      </section>

      {/* ── PRODUCT SHOWCASE ── */}
      <section style={{ background: C.white, overflow: "hidden" }}>
        <div style={{ width: "min(93%, 1480px)", margin: "0 auto", padding: mobile ? "60px 0" : "90px 0" }}>
          {/* Tabs */}
          <div style={{ display: "flex", gap: 10, justifyContent: "center", marginBottom: mobile ? 44 : 56, flexWrap: "wrap" }}>
            {products.map((p, i) => (
              <button key={p.size} id={`tab-${p.size}`} onClick={() => setSelected(i)} type="button"
                style={{ padding: "10px 26px", borderRadius: 8, border: selected === i ? `2px solid ${p.col}` : `2px solid ${C.sky}`, background: selected === i ? `${p.col}0E` : C.sky, color: selected === i ? p.col : C.textSub, fontSize: 14.5, fontWeight: 700, cursor: "pointer", transition: "all 0.2s ease" }}>
                {p.size}
              </button>
            ))}
          </div>

          {/* Display */}
          <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 1fr", gap: mobile ? 44 : 80, alignItems: "center" }}>
            {/* Image */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
              {[440, 360, 280].map((s, i) => (
                <div key={s} style={{ position: "absolute", width: mobile ? s * 0.55 : s, height: mobile ? s * 0.55 : s, borderRadius: "50%", border: `1.5px solid ${i === 0 ? `${C.aqua}18` : `${C.ocean}14`}`, animation: `float ${7 + i * 2}s ease-in-out infinite ${i % 2 === 0 ? "" : "reverse"}` }} />
              ))}
              <div style={{ position: "absolute", width: mobile ? 260 : 420, height: mobile ? 260 : 420, borderRadius: "50%", background: `radial-gradient(circle, ${cur.col}16 0%, transparent 65%)`, animation: "float 8s ease-in-out infinite" }} />
              <Image src="/images/heroProducts.png" alt={`1 Sip ${cur.size}`} width={600} height={480} sizes="(max-width:900px) 80vw, 44vw"
                style={{ position: "relative", zIndex: 2, width: mobile ? "78%" : "88%", maxWidth: 480, height: "auto", objectFit: "contain", filter: `drop-shadow(0 22px 44px ${cur.col}20)`, animation: "float 8s ease-in-out infinite" }} />
              <div style={{ position: "absolute", top: mobile ? 12 : 40, right: mobile ? 8 : 10, padding: "8px 15px", borderRadius: 8, background: `${cur.col}12`, border: `1px solid ${cur.col}28`, color: cur.col, fontSize: 12, fontWeight: 700, zIndex: 3 }}>
                {cur.badge}
              </div>
            </div>

            {/* Info */}
            <div>
              <div style={{ fontSize: 64, fontWeight: 900, color: cur.col, lineHeight: 1, marginBottom: 6, letterSpacing: -2 }}>{cur.size}</div>
              <h2 style={{ margin: 0, fontSize: mobile ? 26 : 36, fontWeight: 900, color: C.navy, lineHeight: 1.15, letterSpacing: -0.3 }}>{cur.title}</h2>
              <p style={{ margin: "13px 0 0", color: C.textSub, fontSize: mobile ? 14.5 : 16, lineHeight: 1.75 }}>{cur.desc}</p>

              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 24 }}>
                {["100% Pure Natural Water", "No additives or preservatives", "Carefully sourced and treated", "Available across Pakistan"].map((feat) => (
                  <div key={feat} style={{ display: "flex", alignItems: "center", gap: 11 }}>
                    <div style={{ width: 24, height: 24, borderRadius: "50%", background: `${cur.col}12`, border: `1.5px solid ${cur.col}28`, display: "flex", alignItems: "center", justifyContent: "center", color: cur.col, fontSize: 12, fontWeight: 800, flexShrink: 0 }}>✓</div>
                    <span style={{ color: C.textSub, fontSize: 14, fontWeight: 500 }}>{feat}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: 7, marginTop: 22 }}>
                {products.map((_, i) => (
                  <button key={i} onClick={() => setSelected(i)} type="button"
                    style={{ width: selected === i ? 24 : 8, height: 8, borderRadius: 4, border: "none", background: selected === i ? cur.col : `${C.aqua}28`, cursor: "pointer", transition: "all 0.22s ease", padding: 0 }} />
                ))}
              </div>

              <Link href="/contact" id="product-order" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 26, padding: "13px 28px", borderRadius: 8, background: cur.col, color: C.white, textDecoration: "none", fontSize: 14.5, fontWeight: 800, boxShadow: `0 6px 22px ${cur.col}28` }}>
                Order Now →
              </Link>
            </div>
          </div>

          {/* Cards row */}
          <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "repeat(3, 1fr)", gap: 14, marginTop: mobile ? 52 : 68 }}>
            {products.map((p, i) => (
              <div key={p.size} onClick={() => setSelected(i)} id={`card-${p.size}`}
                style={{ padding: "22px", borderRadius: 14, background: selected === i ? `${p.col}07` : C.sky, border: `2px solid ${selected === i ? `${p.col}25` : `${C.aqua}14`}`, cursor: "pointer", transition: "all 0.2s ease", boxShadow: selected === i ? `0 6px 24px ${p.col}14` : "none", position: "relative", overflow: "hidden" }}>
                {/* Top accent */}
                {selected === i && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${p.col}, ${C.aqua})`, borderRadius: "14px 14px 0 0" }} />}
                <div style={{ fontSize: 24, fontWeight: 900, color: p.col, marginBottom: 4 }}>{p.size}</div>
                <div style={{ color: C.navy, fontSize: 14.5, fontWeight: 800, marginBottom: 5 }}>{p.title}</div>
                <p style={{ margin: 0, color: C.textMuted, fontSize: 12.5, lineHeight: 1.6 }}>{p.desc}</p>
                {selected === i && <div style={{ display: "inline-block", marginTop: 10, padding: "4px 11px", borderRadius: 6, background: `${p.col}12`, color: p.col, fontSize: 10.5, fontWeight: 700 }}>{p.badge}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUALITY ── */}
      <section style={{ overflow: "hidden" }}>
        {/* Wave top */}
        <div style={{ height: 48, overflow: "hidden", background: C.white }}>
          <svg viewBox="0 0 1440 48" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
            <path d="M0,0 L0,24 C360,44 720,4 1080,28 C1260,38 1380,18 1440,24 L1440,0 Z" fill={C.sky} />
          </svg>
        </div>
        <div style={{ background: C.sky }}>
          <div style={{ width: "min(93%, 1480px)", margin: "0 auto", padding: mobile ? "50px 0 70px" : "60px 0 90px" }}>
            <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 1fr", gap: mobile ? 32 : 80, alignItems: "center", marginBottom: mobile ? 44 : 58 }}>
              <div>
                <div style={{ color: C.aqua, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 12 }}>Our Quality</div>
                <h2 style={{ margin: 0, fontSize: mobile ? 30 : 44, fontWeight: 900, color: C.navy, lineHeight: 1.1, letterSpacing: -0.5 }}>
                  Purity You Can{" "}
                  <span style={{ backgroundImage: `linear-gradient(135deg, ${C.ocean}, ${C.aqua})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Trust</span>
                </h2>
              </div>
              <div>
                <p style={{ margin: 0, color: C.textSub, fontSize: mobile ? 14.5 : 16, lineHeight: 1.8 }}>Our focus is on cleanliness and quality throughout every stage — from source protection to treatment, bottling and storage.</p>
                <div style={{ marginTop: 16, padding: "13px 16px", borderRadius: 10, background: C.white, border: `1px solid ${C.aqua}18`, color: C.textMuted, fontSize: 12, lineHeight: 1.65, fontStyle: "italic" }}>
                  Note: Specific filtration, mineral content, lab testing and certifications will be confirmed from official company records.
                </div>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "repeat(4, 1fr)", gap: 13 }}>
              {qualitySteps.map((step) => (
                <div key={step.num} style={{ padding: "26px 20px", borderRadius: 14, background: C.white, border: `1px solid ${step.col}18`, boxShadow: `0 4px 18px ${step.col}0A`, position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${step.col}, ${C.aqua})`, borderRadius: "14px 14px 0 0" }} />
                  <div style={{ position: "absolute", top: -6, right: 8, fontSize: 60, fontWeight: 900, color: `${step.col}0C`, lineHeight: 1, userSelect: "none" }}>{step.num}</div>
                  <div style={{ width: 50, height: 50, borderRadius: 12, background: `${step.col}12`, border: `1px solid ${step.col}22`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, marginBottom: 16 }}>{step.icon}</div>
                  <div style={{ color: step.col, fontSize: 10.5, fontWeight: 700, marginBottom: 5, letterSpacing: 0.5 }}>STEP {step.num}</div>
                  <h3 style={{ margin: "0 0 8px", color: C.navy, fontSize: 15, fontWeight: 800 }}>{step.title}</h3>
                  <p style={{ margin: 0, color: C.textMuted, fontSize: 12.5, lineHeight: 1.6 }}>{step.desc}</p>
                </div>
              ))}
            </div>

            {/* Quality image */}
            <div style={{ marginTop: mobile ? 40 : 56, borderRadius: 16, overflow: "hidden", position: "relative", border: `1px solid ${C.aqua}18`, boxShadow: `0 16px 48px ${C.ocean}12` }}>
              <Image src="/images/qualityPlant.png" alt="Water facility" width={1400} height={440} sizes="92vw"
                style={{ width: "100%", height: mobile ? 200 : 340, objectFit: "cover", display: "block" }} />
              <div style={{ position: "absolute", inset: 0, background: `linear-gradient(90deg, ${C.navy}75 0%, ${C.navy}25 55%, ${C.navy}50 100%)` }} />
              <div style={{ position: "absolute", left: mobile ? 20 : 44, top: "50%", transform: "translateY(-50%)" }}>
                <div style={{ color: C.aqua, fontSize: 11, fontWeight: 700, marginBottom: 8, letterSpacing: 1 }}>Quality Focus</div>
                <div style={{ color: C.white, fontSize: mobile ? 20 : 32, fontWeight: 900, lineHeight: 1.1, letterSpacing: -0.5 }}>Care at Every Stage</div>
              </div>
              <div style={{ position: "absolute", right: mobile ? 16 : 40, top: "50%", transform: "translateY(-50%)", padding: "12px 18px", borderRadius: 10, background: "rgba(255,255,255,0.12)", backdropFilter: "blur(14px)", border: "1px solid rgba(255,255,255,0.20)" }}>
                <div style={{ color: C.white, fontSize: 13, fontWeight: 700 }}>✓ Quality Assured</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
