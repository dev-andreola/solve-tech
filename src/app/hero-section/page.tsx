"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

const HeroSection = () => {
  useEffect(() => {
    gsap.to(".gsap-slide-up", {
      opacity: 1,
      y: 0,
      duration: 2,
      ease: "power4.out",
    });

    gsap.to(".gsap-slide-up2", {
      opacity: 1,
      y: 0,
      duration: 2,
      ease: "power4.out",
      delay: 0.5,
    });

    gsap.to(".gsap-side", {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power2.out",
      delay: 0.5,
    });
  }, []);

  return (
    <section className="py-14 bg-gradient-to-r h-full to-white from-gray-200">
      <div className="container mx-auto text-center space-y-5">
        <h2 className="text-4xl sm:text-6xl flex justify-center font-bold md:px-20 text-gradient bg-gradient-to-r from-lime-600 to-lime-700 bg-clip-text text-transparent overflow-visible opacity-0 translate-y-3 gsap-slide-up">
          A simplicidade que você precisa, onde a tecnologia encontra a
          praticidade
        </h2>
        <p className="text-md md:text-xl md-10 bg-gradient-to-r to-gray-900 from-gray-400 bg-clip-text text-transparent font-bold opacity-0 translate-y-3 gsap-slide-up">
          Transformando suas necessidades em soluções tecnológicas eficientes.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-gradient-to-r from-lime-600 to-lime-700 hover:from-lime-700 hover:to-lime-800 transition-colors duration-300 text-white px-10 py-4 rounded-md md:text-lg font-bold gsap-side translate-x-3 opacity-0">
            Começar
          </button>
          <button className="px-10 py-4 text-nowrap rounded-md md:text-lg font-bold border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground gsap-side -translate-x-3 opacity-0">
            Saiba Mais
          </button>
        </div>
        <video
          className="rounded-xl md:w-2/3 mx-auto gsap-slide-up2 opacity-0 translate-y-3"
          autoPlay
          muted
          loop
        >
          <source src="/content/hero.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default HeroSection;
