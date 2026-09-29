import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | 1 Sip Natural Water",
  description:
    "Learn about 1 Sip Natural Water — inspired by the golden landscapes of Cholistan, Pakistan. Our story, values and identity.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
