import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Products | 1 Sip Natural Water",
  description:
    "1 Sip Natural Water products — 500ml, 1.5L and 19L pure natural water for everyday refreshment, home and office.",
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
