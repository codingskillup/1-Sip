import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | 1 Sip Natural Water",
  description:
    "Contact 1 Sip Natural Water for product orders, enquiries and information. Call or WhatsApp us today.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
