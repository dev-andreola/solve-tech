import Image from "next/image";
import HeroSection from "./hero-section/page";
import Carousel from "@/components/carousel";
import Intro from "./intro-section/page";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Carousel />
      <Intro />
    </div>
  );
}
