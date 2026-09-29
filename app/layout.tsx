import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "1 Sip Natural Water | Nature in Every Sip",
  description:
    "1 Sip Natural Water — pure, fresh water inspired by the golden landscapes of Cholistan, made for everyday refreshment.",
  keywords: "natural water, pure water, Pakistan, Cholistan, 1 Sip",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={outfit.variable} data-scroll-behavior="smooth">
      <body style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
        <Navbar />
        <main className="page-enter">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
