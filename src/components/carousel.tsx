"use client";

import React, { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Image from "next/image";

const logos = [
  {
    url: "/images/logo/logo-2.svg",
    alt: "logo",
  },
  {
    url: "/images/logo/logo-3.svg",
    alt: "logo",
  },
  {
    url: "/images/logo/logo-4.svg",
    alt: "logo",
  },
  {
    url: "/images/logo/logo-5.svg",
    alt: "logo",
  },
  {
    url: "/images/logo/logo-6.svg",
    alt: "logo",
  },
  {
    url: "/images/logo/logo-7.svg",
    alt: "logo",
  },
  {
    url: "/images/logo/logo-8.svg",
    alt: "logo",
  },
  {
    url: "/images/logo/logo-9.svg",
    alt: "logo",
  },
];

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === logos.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".gsap-opacity", {
      opacity: 1,
      duration: 2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".gsap-opacity",
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto gsap-opacity opacity-0">
      <div
        className="items-center justify-center flex text-3xl text-center font-bold pt-10 px-10
        bg-gradient-to-r
        from-lime-600 to-lime-700
        bg-clip-text
        text-transparent
        max-w-3xl
        mx-auto
        "
      >
        Mais de 100+ empresas construiram seu negócio com os softwares da
        SolveTech
      </div>

      <div className="grid grid-cols-2 p-4 place-content-center-center md:flex">
        <AnimatePresence custom={currentImageIndex}>
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{
                opacity: index === currentImageIndex ? 1 : 0.8,
                scale: index === currentImageIndex ? 1.2 : 1,
                transition: { duration: 0.5 },
              }}
              className="flex items-center justify-center h-40 w-40 mx-auto"
              exit={{ opacity: 0 }}
              custom={index}
              transition={{
                opacity: { duration: 0.5 },
              }}
            >
              <Image
                src={logo.url}
                alt={logo.alt}
                width={200}
                height={200}
                className="object-contain h-20 w-20 items-center justify-center flex"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
export default Carousel;
