import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { PlatformSection } from "@/components/home/PlatformSection";
import { NewsSection } from "@/components/home/NewsSection";

export default function Home() {
  return (
    <div className="flex w-full flex-col">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <PlatformSection />
      <NewsSection />
    </div>
  );
}
