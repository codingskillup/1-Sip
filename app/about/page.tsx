"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const C = { ocean: "#005f9e", aqua: "#00b4d8", navy: "#012a4a", sky: "#e8f6fb", white: "#ffffff", textSub: "#3d6580", textMuted: "#7fa8be" };

const values = [
  { icon: "💧", title: "Fresh Identity", desc: "A brand built around water, freshness and purity.", col: C.aqua },
  { icon: "🌊", title: "Nature Inspired", desc: "Inspired by the natural beauty and greenery of Pakistan.", col: C.ocean },
  { icon: "🏜️", title: "Cholistan Roots", desc: "A visual connection with the desert's golden landscape.", col: "#f59e0b" },
  { icon: "🇵🇰", title: "Proudly Pakistani", desc: "A local identity rooted in Pakistan's rich culture.", col: "#22c55e" },
];

const storyPoints = [
  { icon: "🏜️", label: "Desert", col: "#f59e0b" },
  { icon: "💧", label: "Water", col: C.aqua },
  { icon: "🌿", label: "Nature", col: "#22c55e" },
  { icon: "🕌", label: "Heritage", col: C.ocean },
];

export default function AboutPage() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const fn = () => setMobile(window.innerWidth <= 900);
    fn();
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          position: "relative",
          minHeight: mobile ? 250 : 330,
          display: "flex",
          alignItems: "center",
          background: `linear-gradient(145deg, ${C.ocean} 0%, #003d66 100%)`,
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0 }}>
          <Image src="/images/aboutCholistan.png" alt="" fill priority sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center 55%", opacity: 0.12 }} />
        </div>
        {/* Aqua glow */}
        <div style={{ position: "absolute", right: "5%", top: "50%", transform: "translateY(-50%)", width: 450, height: 450, borderRadius: "50%", background: `radial-gradient(circle, ${C.aqua}28 0%, transparent 68%)`, pointerEvents: "none" }} />
        {/* Wave bottom */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 42, overflow: "hidden" }}>
          <svg viewBox="0 0 1440 42" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
            <path d="M0,42 L0,21 C360,5 720,38 1080,18 C1260,9 1380,28 1440,21 L1440,42 Z" fill={C.white} />
          </svg>
        </div>

        <div style={{ position: "relative", zIndex: 2, width: "min(93%, 1480px)", margin: "0 auto", padding: mobile ? "52px 0 60px" : "64px 0 72px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 14px", borderRadius: 6, background: `${C.aqua}22`, border: `1px solid ${C.aqua}40`, color: C.aqua, fontSize: 11, fontWeight: 700, letterSpacing: 1.4, textTransform: "uppercase", marginBottom: 14 }}>
            About Us
          </div>
          <h1 style={{ margin: 0, fontSize: mobile ? 36 : 60, fontWeight: 900, color: C.white, lineHeight: 1.05, letterSpacing: -1 }}>
            The Essence of{" "}
            <span style={{ backgroundImage: `linear-gradient(135deg, ${C.aqua}, #48cae4)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Nature
            </span>
          </h1>
          <p style={{ margin: "12px 0 0", color: "rgba(255,255,255,0.48)", fontSize: mobile ? 14 : 16, lineHeight: 1.65, maxWidth: 480 }}>
            A brand born from the beauty of Cholistan, crafted with care for the people of Pakistan.
          </p>
        </div>
      </section>

      {/* ── ABOUT US ── */}
      <section style={{ background: C.white }}>
        <div style={{ width: "min(93%, 1480px)", margin: "0 auto", padding: mobile ? "60px 0" : "90px 0" }}>
          <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 1fr", gap: mobile ? 44 : 80, alignItems: "center" }}>

            {/* Image */}
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", inset: 0, borderRadius: 16, background: `linear-gradient(135deg, ${C.aqua}28, ${C.ocean}18)`, transform: "translate(10px, 10px)" }} />
              <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", border: `1px solid ${C.aqua}25`, boxShadow: `0 20px 56px ${C.ocean}14` }}>
                <Image src="/images/aboutCholistan.png" alt="Cholistan" width={680} height={460} sizes="(max-width:900px) 90vw, 45vw"
                  style={{ width: "100%", height: "auto", display: "block" }} />
                <div style={{ position: "absolute", inset: 0, background: `linear-gradient(180deg, transparent 50%, ${C.navy}45 100%)` }} />
                <div style={{ position: "absolute", bottom: 18, left: 18, padding: "11px 16px", borderRadius: 10, background: "rgba(255,255,255,0.93)", backdropFilter: "blur(12px)", border: `1px solid ${C.aqua}28` }}>
                  <div style={{ color: C.aqua, fontSize: 10.5, fontWeight: 700, marginBottom: 2 }}>Inspired by Cholistan</div>
                  <div style={{ color: C.navy, fontSize: 12.5, fontWeight: 700 }}>Nature · Water · Pakistan</div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div>
              <div style={{ color: C.aqua, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 14 }}>Our Story</div>
              <h2 style={{ margin: 0, fontSize: mobile ? 30 : 44, fontWeight: 900, color: C.navy, lineHeight: 1.1, letterSpacing: -0.5 }}>
                More Than a{" "}
                <span style={{ backgroundImage: `linear-gradient(135deg, ${C.ocean}, ${C.aqua})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Water Brand
                </span>
              </h2>
              <p style={{ margin: "16px 0 0", color: C.textSub, fontSize: mobile ? 14.5 : 16, lineHeight: 1.8 }}>
                1 Sip Natural Water is more than a water brand. It represents freshness, nature and a strong connection with Pakistani identity — bottled with care for everyday life.
              </p>
              <p style={{ margin: "12px 0 0", color: C.textSub, fontSize: mobile ? 14.5 : 16, lineHeight: 1.8 }}>
                Our visual identity takes inspiration from Cholistan — combining desert landscapes, fresh water, greenery and the natural beauty of Pakistan.
              </p>

              {/* Value cards */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 26 }}>
                {values.map((v) => (
                  <div key={v.title} style={{ padding: "14px", borderRadius: 12, background: C.sky, border: `1px solid ${v.col}18`, display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ fontSize: 18, flexShrink: 0, width: 38, height: 38, borderRadius: 10, background: `${v.col}12`, border: `1px solid ${v.col}22`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {v.icon}
                    </span>
                    <div>
                      <div style={{ color: C.navy, fontSize: 12.5, fontWeight: 700, marginBottom: 3 }}>{v.title}</div>
                      <div style={{ color: C.textMuted, fontSize: 11, lineHeight: 1.5 }}>{v.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/products" id="about-cta-products" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 24, padding: "12px 24px", borderRadius: 8, background: C.ocean, color: C.white, textDecoration: "none", fontSize: 14, fontWeight: 700, boxShadow: `0 6px 20px ${C.ocean}30` }}>
                See Our Products →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CHOLISTAN STORY ── */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        {/* Wave top */}
        <div style={{ height: 50, overflow: "hidden", background: C.white }}>
          <svg viewBox="0 0 1440 50" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
            <path d="M0,0 L0,25 C360,45 720,5 1080,30 C1260,40 1380,20 1440,25 L1440,0 Z" fill={C.sky} />
          </svg>
        </div>
        <div style={{ background: C.sky }}>
          <div style={{ position: "relative", zIndex: 2, width: "min(93%, 1480px)", margin: "0 auto", padding: mobile ? "50px 0 70px" : "60px 0 90px" }}>
            <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 1fr", gap: mobile ? 44 : 80, alignItems: "center" }}>

              {/* Text */}
              <div style={{ order: mobile ? 1 : 0 }}>
                <div style={{ color: "#d97706", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 14 }}>
                  Inspired by Cholistan
                </div>
                <h2 style={{ margin: 0, fontSize: mobile ? 30 : 44, fontWeight: 900, color: C.navy, lineHeight: 1.1, letterSpacing: -0.5 }}>
                  The Land of{" "}
                  <span style={{ backgroundImage: "linear-gradient(135deg, #f59e0b, #f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    Endless Beauty
                  </span>
                </h2>
                <p style={{ margin: "16px 0 12px", color: C.textSub, fontSize: mobile ? 14.5 : 16, lineHeight: 1.8 }}>
                  Cholistan is one of Pakistan&apos;s most distinctive landscapes — known for its golden desert, wide horizons, historic forts and breathtaking natural beauty.
                </p>
                <p style={{ margin: 0, color: C.textSub, fontSize: mobile ? 14.5 : 16, lineHeight: 1.8 }}>
                  The identity of 1 Sip draws from this land, bringing together water, nature and Pakistani character in one fresh experience.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 9, marginTop: 24 }}>
                  {storyPoints.map((p) => (
                    <div key={p.label} style={{ padding: "13px 6px", borderRadius: 10, background: C.white, border: `1px solid ${p.col}20`, textAlign: "center", boxShadow: `0 3px 12px ${p.col}0A` }}>
                      <div style={{ fontSize: 20, marginBottom: 5 }}>{p.icon}</div>
                      <div style={{ color: p.col, fontSize: 10.5, fontWeight: 800 }}>{p.label}</div>
                    </div>
                  ))}
                </div>
                <Link href="/contact" id="story-cta-contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 24, padding: "12px 24px", borderRadius: 8, background: "rgba(245,158,11,0.10)", border: "1px solid rgba(245,158,11,0.26)", color: "#d97706", textDecoration: "none", fontSize: 14, fontWeight: 700 }}>
                  Get in Touch →
                </Link>
              </div>

              {/* Image */}
              <div style={{ position: "relative", order: mobile ? 0 : 1 }}>
                <div style={{ position: "absolute", inset: 0, borderRadius: 16, background: "linear-gradient(135deg, rgba(245,158,11,0.20), rgba(249,115,22,0.12))", transform: "translate(-10px, 10px)" }} />
                <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", border: "1px solid rgba(245,158,11,0.18)", boxShadow: `0 20px 56px ${C.navy}12` }}>
                  <Image src="/images/cholistanStory.png" alt="Cholistan desert" width={680} height={460} sizes="(max-width:900px) 90vw, 45vw"
                    style={{ width: "100%", height: "auto", display: "block" }} />
                  <div style={{ position: "absolute", inset: 0, background: `linear-gradient(180deg, transparent 50%, ${C.navy}45 100%)` }} />
                  <div style={{ position: "absolute", bottom: 18, left: 18, padding: "11px 16px", borderRadius: 10, background: "rgba(255,255,255,0.93)", backdropFilter: "blur(12px)", border: "1px solid rgba(245,158,11,0.22)" }}>
                    <div style={{ color: "#d97706", fontSize: 10.5, fontWeight: 700, marginBottom: 2 }}>From the Heart of Cholistan</div>
                    <div style={{ color: C.navy, fontSize: 12.5, fontWeight: 700 }}>Desert · Water · Nature · Pakistan</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Wave bottom */}
        <div style={{ height: 48, overflow: "hidden", background: C.sky }}>
          <svg viewBox="0 0 1440 48" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
            <path d="M0,48 L0,24 C360,5 720,43 1080,20 C1260,10 1380,30 1440,24 L1440,48 Z" fill={C.white} />
          </svg>
        </div>
      </section>
    </>
  );
}
