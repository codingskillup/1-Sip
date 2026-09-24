"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const products = [
  {
    size: "500ml",
    title: "Everyday Refreshment",
    text: "Perfect for travel, work and daily use.",
  },
  {
    size: "1.5L",
    title: "Home & Family",
    text: "A practical choice for everyday family use.",
  },
  {
    size: "19L",
    title: "Home & Office",
    text: "Made for regular use at home and office.",
  },
];

export default function Products() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setMobile(window.innerWidth <= 900);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => {
      window.removeEventListener("resize", checkScreen);
    };
  }, []);

  return (
    <section
      id="products"
      style={{
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #f5fbff 0%, #e9f8ff 55%, #f7fcff 100%)",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 520,
          height: 520,
          borderRadius: "50%",
          right: mobile ? "50%" : 30,
          top: mobile ? "55%" : 40,
          transform: mobile ? "translateX(50%)" : "none",
          background:
            "radial-gradient(circle, rgba(51,185,242,0.17) 0%, rgba(51,185,242,0.06) 45%, rgba(51,185,242,0) 72%)",
        }}
      />

      <div
        style={{
          width: "min(92%, 1420px)",
          margin: "0 auto",
          paddingTop: mobile ? 60 : 90,
          paddingBottom: mobile ? 55 : 90,
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: mobile ? "1fr" : "0.9fr 1.1fr",
            alignItems: "center",
            gap: mobile ? 45 : 65,
          }}
        >
          <div>
            <div
              style={{
                color: "#0a9346",
                fontSize: 13,
                fontWeight: 850,
                letterSpacing: 1.5,
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              Our Products
            </div>

            <h2
              style={{
                margin: 0,
                maxWidth: 550,
                color: "#073f78",
                fontSize: mobile ? 37 : 50,
                lineHeight: 1.08,
                fontWeight: 850,
              }}
            >
              Pure Water for
              <span
                style={{
                  display: "block",
                  color: "#0c9847",
                }}
              >
                Every Moment
              </span>
            </h2>

            <p
              style={{
                maxWidth: 570,
                marginTop: 20,
                marginBottom: 0,
                color: "#58758d",
                fontSize: mobile ? 15 : 16,
                lineHeight: 1.8,
              }}
            >
              1 Sip Natural Water is available in practical bottle sizes for
              different everyday needs, from personal refreshment to regular
              home and office use.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: mobile
                  ? "1fr"
                  : "repeat(3, minmax(0, 1fr))",
                gap: 12,
                marginTop: 28,
              }}
            >
              {products.map((product) => (
                <div
                  key={product.size}
                  style={{
                    padding: "18px 16px",
                    borderRadius: 18,
                    background: "rgba(255,255,255,0.86)",
                    border: "1px solid rgba(6,65,120,0.08)",
                    boxShadow: "0 12px 30px rgba(4,65,105,0.06)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div
                    style={{
                      color: "#0b9346",
                      fontSize: 21,
                      fontWeight: 900,
                    }}
                  >
                    {product.size}
                  </div>

                  <div
                    style={{
                      marginTop: 5,
                      color: "#073f78",
                      fontSize: 13,
                      fontWeight: 850,
                    }}
                  >
                    {product.title}
                  </div>

                  <p
                    style={{
                      margin: "6px 0 0",
                      color: "#7890a2",
                      fontSize: 11.5,
                      lineHeight: 1.55,
                    }}
                  >
                    {product.text}
                  </p>
                </div>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: mobile ? "column" : "row",
                alignItems: mobile ? "stretch" : "center",
                gap: 12,
                marginTop: 28,
              }}
            >
              <Link
                href="#contact"
                style={{
                  padding: "14px 24px",
                  borderRadius: 40,
                  background: "#0b9146",
                  color: "#ffffff",
                  textDecoration: "none",
                  textAlign: "center",
                  fontSize: 14,
                  fontWeight: 800,
                  boxShadow: "0 12px 30px rgba(11,145,70,0.2)",
                }}
              >
                View All Products
                <span
                  style={{
                    marginLeft: 9,
                    fontSize: 17,
                  }}
                >
                  →
                </span>
              </Link>

              <div
                style={{
                  color: "#7890a2",
                  fontSize: 12,
                  lineHeight: 1.5,
                }}
              >
                Product range can be updated as new sizes become available.
              </div>
            </div>
          </div>

          <div
            style={{
              position: "relative",
              minHeight: mobile ? 440 : 560,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: mobile ? 45 : 25,
                transform: "translateX(-50%)",
                width: mobile ? 340 : 520,
                height: mobile ? 340 : 520,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(215,245,255,0.74) 46%, rgba(215,245,255,0) 72%)",
              }}
            />

            <div
              style={{
                position: "absolute",
                left: "50%",
                bottom: mobile ? 20 : 25,
                transform: "translateX(-50%)",
                width: mobile ? "92%" : "86%",
                height: mobile ? 70 : 95,
                borderRadius: "50%",
                background:
                  "radial-gradient(ellipse, rgba(4,119,190,0.25) 0%, rgba(4,119,190,0.08) 45%, rgba(4,119,190,0) 75%)",
                filter: "blur(5px)",
              }}
            />

            <Image
              src="/images/heroProducts.png"
              alt="1 Sip Natural Water products"
              width={760}
              height={620}
              sizes="(max-width: 900px) 95vw, 55vw"
              style={{
                position: "relative",
                zIndex: 3,
                width: "100%",
                maxWidth: mobile ? 540 : 710,
                height: "auto",
                objectFit: "contain",
                filter:
                  "drop-shadow(0 28px 34px rgba(3,68,115,0.18))",
              }}
            />

            <div
              style={{
                position: "absolute",
                zIndex: 4,
                top: mobile ? 45 : 75,
                right: mobile ? 0 : 25,
                padding: "11px 16px",
                borderRadius: 18,
                background: "rgba(255,255,255,0.9)",
                color: "#0a9346",
                fontSize: 13,
                fontWeight: 850,
                boxShadow: "0 12px 30px rgba(4,65,105,0.09)",
                backdropFilter: "blur(10px)",
              }}
            >
              Multiple Sizes
            </div>

            <div
              style={{
                position: "absolute",
                zIndex: 4,
                left: mobile ? 0 : 30,
                bottom: mobile ? 35 : 65,
                padding: "11px 16px",
                borderRadius: 18,
                background: "rgba(255,255,255,0.9)",
                color: "#073f78",
                fontSize: 13,
                fontWeight: 850,
                boxShadow: "0 12px 30px rgba(4,65,105,0.09)",
                backdropFilter: "blur(10px)",
              }}
            >
              Everyday Refreshment
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}