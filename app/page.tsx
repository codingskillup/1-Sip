import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyOneSip from "@/components/WhyOneSip";
import AboutUs from "@/components/AboutUs";
import Products from "@/components/Products";
import ProductFeatures from "@/components/ProductFeatures";
import CholistanStory from "@/components/CholistanStory";
import QualityPurity from "@/components/QualityPurity";
import BrandPromise from "@/components/BrandPromise";
import FreshSipCTA from "@/components/FreshSipCTA";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyOneSip />
      <AboutUs />
      <Products />
      <ProductFeatures />
      <CholistanStory />
      <QualityPurity/>
      <BrandPromise/>
      <FreshSipCTA/>
    </>
  );
}