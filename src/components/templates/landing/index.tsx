import ExploreModels from "@/components/organisms/landing/explore-models";
import HeroSection from "@/components/organisms/landing/hero-section";
import ProductInfo from "@/components/organisms/landing/product-info";

export default function LandingPage() {
  return (
    <div>
      <HeroSection />
      <ExploreModels />
      <ProductInfo />
    </div>
  );
}
