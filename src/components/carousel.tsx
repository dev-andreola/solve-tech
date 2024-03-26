"use client";

import React, { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";

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

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto">
      <div
        className="items-center justify-center flex text-3xl text-center font-bold pt-10 px-10
        bg-gradient-to-r
        from-lime-500 to-lime-600
        bg-clip-text
        text-transparent

        
        "
      >
        Mais de 100+ empresas construiram seu negócio com SolveTech Software
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
