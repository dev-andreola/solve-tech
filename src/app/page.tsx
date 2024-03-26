import Image from "next/image";
import HeroSection from "./hero-section/page";
import Carousel from "@/components/carousel";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Carousel />
    </div>
  );
}
