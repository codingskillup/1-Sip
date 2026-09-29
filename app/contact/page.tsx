"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const C = { ocean: "#005f9e", aqua: "#00b4d8", navy: "#012a4a", sky: "#e8f6fb", white: "#ffffff", textSub: "#3d6580", textMuted: "#7fa8be" };

const contactDetails = [
  { icon: "📍", title: "Location", value: "Commercial Market, Ahmed Garden, Fort Abbas", col: C.ocean },
  { icon: "☎️", title: "Phone", value: "0312 6016060", href: "tel:+923126016060", col: C.aqua },
  { icon: "💬", title: "WhatsApp", value: "0312 6016060", href: "https://wa.me/923126016060", col: "#25d366" },
  { icon: "🏢", title: "Company", value: "Mian Rayan Traders", col: "#0077b6" },
];

const quickInfo = [
  { icon: "🏪", title: "Retail", desc: "Available at multiple locations", col: C.ocean },
  { icon: "🚚", title: "Delivery", desc: "Enquire for delivery options", col: C.aqua },
  { icon: "📦", title: "Bulk", desc: "Contact us for bulk pricing", col: "#0077b6" },
  { icon: "⚡", title: "Fast Reply", desc: "Quick response via WhatsApp", col: "#0096c7" },
];

export default function ContactPage() {
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
      <section style={{ position: "relative", minHeight: mobile ? 250 : 330, display: "flex", alignItems: "center", background: `linear-gradient(145deg, ${C.ocean} 0%, #003d66 100%)`, overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image src="/images/aboutCholistan.png" alt="" fill priority sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center 60%", opacity: 0.10 }} />
        </div>
        <div style={{ position: "absolute", right: "6%", top: "50%", transform: "translateY(-50%)", width: 450, height: 450, borderRadius: "50%", background: `radial-gradient(circle, ${C.aqua}28 0%, transparent 68%)`, pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 42, overflow: "hidden" }}>
          <svg viewBox="0 0 1440 42" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
            <path d="M0,42 L0,21 C360,5 720,38 1080,18 C1260,9 1380,28 1440,21 L1440,42 Z" fill={C.white} />
          </svg>
        </div>
        <div style={{ position: "relative", zIndex: 2, width: "min(93%, 1480px)", margin: "0 auto", padding: mobile ? "52px 0 58px" : "64px 0 70px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 14px", borderRadius: 6, background: `${C.aqua}22`, border: `1px solid ${C.aqua}40`, color: C.aqua, fontSize: 11, fontWeight: 700, letterSpacing: 1.4, textTransform: "uppercase", marginBottom: 14 }}>
            Get in Touch
          </div>
          <h1 style={{ margin: 0, fontSize: mobile ? 36 : 60, fontWeight: 900, color: C.white, lineHeight: 1.05, letterSpacing: -1 }}>
            Fresh Water{" "}
            <span style={{ backgroundImage: `linear-gradient(135deg, ${C.aqua}, #48cae4)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Closer to You
            </span>
          </h1>
          <p style={{ margin: "12px 0 0", color: "rgba(255,255,255,0.48)", fontSize: mobile ? 14 : 16, lineHeight: 1.65, maxWidth: 480 }}>
            Contact 1 Sip Natural Water for product information, orders and general enquiries.
          </p>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section style={{ background: C.white, overflow: "hidden" }}>
        <div style={{ width: "min(93%, 1480px)", margin: "0 auto", padding: mobile ? "60px 0" : "90px 0" }}>
          <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 1fr", gap: mobile ? 44 : 72, alignItems: "start" }}>

            {/* Left */}
            <div>
              <h2 style={{ margin: "0 0 5px", fontSize: mobile ? 28 : 38, fontWeight: 900, color: C.navy, lineHeight: 1.1, letterSpacing: -0.5 }}>1 Sip Natural Water</h2>
              <p style={{ margin: "0 0 28px", color: C.aqua, fontSize: 14, fontWeight: 600, fontStyle: "italic" }}>Nature in Every Sip</p>

              {/* Contact cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
                {contactDetails.map((item) => (
                  <div key={item.title} style={{ display: "flex", alignItems: "center", gap: 14, padding: "15px 16px", borderRadius: 12, background: C.sky, border: `1px solid ${item.col}18`, boxShadow: `0 3px 12px ${item.col}08` }}>
                    <div style={{ width: 46, height: 46, borderRadius: 12, background: `${item.col}12`, border: `1px solid ${item.col}22`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>{item.icon}</div>
                    <div>
                      <div style={{ color: C.textMuted, fontSize: 11, fontWeight: 600, marginBottom: 3 }}>{item.title}</div>
                      {item.href ? (
                        <Link href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined}
                          style={{ color: item.col, fontSize: 14.5, fontWeight: 700, textDecoration: "none" }}>{item.value}</Link>
                      ) : (
                        <div style={{ color: C.navy, fontSize: 14.5, fontWeight: 600, lineHeight: 1.4 }}>{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action buttons */}
              <div style={{ display: "flex", gap: 11, marginTop: 22, flexWrap: "wrap" }}>
                <Link href="tel:+923126016060" id="cta-call" style={{ flex: 1, minWidth: 130, padding: "12px 18px", borderRadius: 8, background: `${C.aqua}0E`, border: `1.5px solid ${C.aqua}30`, color: "#0077b6", textDecoration: "none", textAlign: "center", fontSize: 14, fontWeight: 700 }}>
                  ☎ Call Now
                </Link>
                <Link href="https://wa.me/923126016060" id="cta-whatsapp" target="_blank"
                  style={{ flex: 1, minWidth: 130, padding: "12px 18px", borderRadius: 8, background: "linear-gradient(135deg, #128c7e, #25d366)", color: C.white, textDecoration: "none", textAlign: "center", fontSize: 14, fontWeight: 800, boxShadow: "0 5px 18px rgba(37,211,102,0.22)" }}>
                  💬 WhatsApp
                </Link>
              </div>

              {/* Social */}
              <div style={{ marginTop: 28 }}>
                <div style={{ color: `${C.aqua}80`, fontSize: 10.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.8, marginBottom: 12 }}>Follow Us</div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {[{ l: "Facebook", col: "#1877f2" }, { l: "Instagram", col: "#e1306c" }, { l: "TikTok", col: "#000000" }, { l: "YouTube", col: "#ff0000" }].map((s) => (
                    <Link key={s.l} href="#" title={s.l} style={{ padding: "8px 14px", borderRadius: 8, background: `${s.col}0D`, border: `1px solid ${s.col}20`, color: s.col, textDecoration: "none", fontSize: 12, fontWeight: 700 }}>{s.l}</Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right */}
            <div>
              {/* Image */}
              <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", border: `1px solid ${C.aqua}20`, boxShadow: `0 16px 48px ${C.ocean}12`, marginBottom: 16 }}>
                <Image src="/images/cholistanHero.png" alt="Cholistan" width={680} height={340} sizes="(max-width:900px) 90vw, 46vw"
                  style={{ width: "100%", height: mobile ? 190 : 300, objectFit: "cover", display: "block" }} />
                <div style={{ position: "absolute", inset: 0, background: `linear-gradient(180deg, transparent 38%, ${C.navy}60 100%)` }} />
                {/* Product overlay */}
                <div style={{ position: "absolute", bottom: 0, right: 0, width: "42%", height: "100%", display: "flex", alignItems: "flex-end", justifyContent: "center", paddingBottom: 8 }}>
                  <Image src="/images/heroProducts.png" alt="1 Sip" width={260} height={220}
                    style={{ width: "90%", height: "auto", objectFit: "contain", filter: `drop-shadow(0 6px 18px ${C.ocean}35)` }} />
                </div>
                <div style={{ position: "absolute", bottom: 16, left: 16, padding: "10px 14px", borderRadius: 10, background: "rgba(255,255,255,0.93)", backdropFilter: "blur(12px)", border: `1px solid ${C.aqua}28` }}>
                  <div style={{ color: C.aqua, fontSize: 10, fontWeight: 700, marginBottom: 2 }}>1 Sip Natural Water</div>
                  <div style={{ color: C.navy, fontSize: 12, fontWeight: 700 }}>Nature in Every Sip</div>
                </div>
              </div>

              {/* Quick info */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {quickInfo.map((card) => (
                  <div key={card.title} style={{ padding: "15px", borderRadius: 12, background: C.sky, border: `1px solid ${card.col}14`, boxShadow: `0 3px 12px ${card.col}08` }}>
                    <div style={{ fontSize: 20, marginBottom: 6 }}>{card.icon}</div>
                    <div style={{ color: card.col, fontSize: 10.5, fontWeight: 700, marginBottom: 3 }}>{card.title}</div>
                    <div style={{ color: C.textMuted, fontSize: 12, lineHeight: 1.5 }}>{card.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ position: "relative", overflow: "hidden", background: C.ocean }}>
        {/* Wave top */}
        <div style={{ height: 48, overflow: "hidden" }}>
          <svg viewBox="0 0 1440 48" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
            <path d="M0,48 L0,24 C360,5 720,43 1080,20 C1260,10 1380,30 1440,24 L1440,48 Z" fill={C.white} />
          </svg>
        </div>
        <div style={{ position: "absolute", right: "-6%", top: "30%", width: 550, height: 550, borderRadius: "50%", background: `radial-gradient(circle, ${C.aqua}35 0%, transparent 62%)`, pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 2, width: "min(93%, 1480px)", margin: "0 auto", padding: mobile ? "50px 0 60px" : "64px 0 80px", textAlign: "center" }}>
          <div style={{ fontSize: 44, marginBottom: 16 }}>💧</div>
          <h2 style={{ margin: "0 0 10px", fontSize: mobile ? 26 : 38, fontWeight: 900, color: C.white, lineHeight: 1.15, letterSpacing: -0.5 }}>
            Ready for pure{" "}
            <span style={{ color: C.aqua }}>natural refreshment?</span>
          </h2>
          <p style={{ margin: "0 auto 28px", maxWidth: 460, color: "rgba(255,255,255,0.48)", fontSize: mobile ? 14 : 15.5, lineHeight: 1.7 }}>
            Order 1 Sip Natural Water today. Available in 500ml, 1.5L and 19L sizes.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="https://wa.me/923126016060" id="final-whatsapp" target="_blank"
              style={{ padding: "13px 28px", borderRadius: 8, background: C.white, color: C.ocean, textDecoration: "none", fontSize: 14.5, fontWeight: 800, boxShadow: "0 6px 24px rgba(0,0,0,0.15)", whiteSpace: "nowrap" }}>
              💬 Order via WhatsApp
            </Link>
            <Link href="tel:+923126016060" id="final-call"
              style={{ padding: "12px 28px", borderRadius: 8, background: "rgba(255,255,255,0.12)", border: "1.5px solid rgba(255,255,255,0.28)", color: C.white, textDecoration: "none", fontSize: 14.5, fontWeight: 600, whiteSpace: "nowrap" }}>
              ☎ Call Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
