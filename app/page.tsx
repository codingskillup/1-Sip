import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyOneSip from "@/components/WhyOneSip";
import AboutUs from "@/components/AboutUs";
import Products from "@/components/Products";
import ProductFeatures from "@/components/ProductFeatures";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyOneSip />
      <AboutUs />
      <Products />
      <ProductFeatures />
    </>
  );
}