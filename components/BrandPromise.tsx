"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function BrandPromise() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setMobile(window.innerWidth <= 850);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => {
      window.removeEventListener("resize", checkScreen);
    };
  }, []);

  return (
    <section
      id="promise"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#073f78",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: mobile ? 210 : 380,
          height: mobile ? 210 : 380,
          borderRadius: "50%",
          background: "rgba(29, 184, 239, 0.12)",
          right: mobile ? 20 : 80,
          top: mobile ? 40 : 30,
        }}
      />

      <div
        style={{
          position: "absolute",
          width: mobile ? 170 : 300,
          height: mobile ? 170 : 300,
          borderRadius: "50%",
          background: "rgba(22, 160, 77, 0.10)",
          left: mobile ? 10 : 60,
          bottom: mobile ? 10 : 0,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "min(92%, 1180px)",
          margin: "0 auto",
          paddingTop: mobile ? 65 : 95,
          paddingBottom: mobile ? 65 : 95,
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: mobile ? 82 : 100,
            height: mobile ? 82 : 100,
            margin: "0 auto 22px",
            borderRadius: "50%",
            background: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 18px 40px rgba(0, 0, 0, 0.12)",
          }}
        >
          <Image
            src="/images/oneSipLogo.png"
            alt="1 Sip Natural Water"
            width={82}
            height={82}
            style={{
              width: mobile ? 68 : 82,
              height: mobile ? 68 : 82,
              objectFit: "contain",
            }}
          />
        </div>

        <div
          style={{
            color: "#79e6a6",
            fontSize: 13,
            fontWeight: 850,
            letterSpacing: 1.5,
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          Our Brand Promise
        </div>

        <h2
          style={{
            margin: 0,
            color: "#ffffff",
            fontSize: mobile ? 37 : 54,
            lineHeight: 1.08,
            fontWeight: 850,
          }}
        >
          A Fresh Choice
          <span
            style={{
              display: "block",
              color: "#79e6a6",
            }}
          >
            for Every Day
          </span>
        </h2>

        <p
          style={{
            maxWidth: 680,
            margin: "20px auto 0",
            color: "rgba(255,255,255,0.76)",
            fontSize: mobile ? 15 : 17,
            lineHeight: 1.8,
          }}
        >
          1 Sip Natural Water brings together freshness, nature and a strong
          Pakistani identity in every bottle.
        </p>

        <div
          style={{
            marginTop: 28,
            color: "#ffffff",
            fontSize: mobile ? 19 : 24,
            fontWeight: 800,
          }}
        >
          Nature in Every Sip
        </div>

        <p
          style={{
            margin: "8px auto 0",
            color: "rgba(255,255,255,0.66)",
            fontSize: mobile ? 13 : 15,
          }}
        >
          Freshness in every bottle, inspired by the beauty of nature.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: mobile ? "1fr 1fr" : "repeat(4, 1fr)",
            gap: 12,
            maxWidth: 760,
            margin: "36px auto 0",
          }}
        >
          <PromiseItem
            title="Fresh"
            text="Everyday refreshment"
          />

          <PromiseItem
            title="Natural"
            text="Nature inspired identity"
          />

          <PromiseItem
            title="Local"
            text="Proud Pakistani brand"
          />

          <PromiseItem
            title="Trusted"
            text="Quality focused approach"
          />
        </div>
      </div>
    </section>
  );
}

function PromiseItem({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div
      style={{
        padding: "17px 13px",
        borderRadius: 17,
        background: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.12)",
      }}
    >
      <div
        style={{
          color: "#ffffff",
          fontSize: 14,
          fontWeight: 850,
        }}
      >
        {title}
      </div>

      <div
        style={{
          color: "rgba(255,255,255,0.62)",
          fontSize: 11,
          lineHeight: 1.5,
          marginTop: 4,
        }}
      >
        {text}
      </div>
    </div>
  );
}