import Image from "next/image";
import HeroSection from "./hero-section/page";
import Carousel from "@/components/carousel";
import Intro from "./intro-section/page";
import Features from "./features-section/page";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Carousel />
      <Intro />
      <Features />
    </div>
  );
}
