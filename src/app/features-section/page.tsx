"use client";

import React, { useEffect } from "react";
import Image from "next/image";

import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const featuresList = [
  {
    name: "Customizável",
    description:
      "Escolha dentre várias opções de design pré prontos e mude qualquer coisa que você quiser para criar seu software profissional.",
    image: "/images/icon-cloud.png",
    alt: "Customizável",
    color: "blue",
  },
  {
    name: "Rápido",
    description:
      "Tanto na produção, quanto no desempenho nosso diferencial é a velocidade, sendo mais eficiente para o cliente.",
    image: "/images/icon-fast.png",
    alt: "Customizable",
  },
  {
    name: "Integrações",
    description:
      "Nossos softwares podem se realizar integrações com inúmeras plataformas, facilitando sua conexão.",
    image: "/images/icon-journey.png",
    alt: "Customizable",
  },
  {
    name: "Full Stack",
    description:
      "Criamos soluções tanto para o lado do servidor quanto para o lado do cliente.",
    image: "/images/icon-layer.png",
    alt: "Customizable",
  },
  {
    name: "Fidelidade",
    description:
      "Configuramos o seu sistema utilizado para fidelizar clientes, oferecendo benefícios exclusivos.",
    image: "/images/icon-location.png",
    alt: "Customizable",
  },
  {
    name: "Suporte",
    image: "/images/icon-support-1.png",
    description:
      "Temos uma equipe especializada para ajudar você em qualquer problema que você venha a ter",
    alt: "Customizable",
  },
];

const Features = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".gsap-slide-up3", {
      opacity: 1,
      duration: 2,
      y: 0,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".card-trigger",
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div className="flex-col items-center justify-center max-w-6xl mx-auto pb-10 card-trigger gsap-slide-up3 opacity-0 -translate-y-4">
      <h2
        className="
                text-4xl
                flex
                justify-center
                md:text-6xl
                font-bold
                py-10
                bg-gradient-to-r
                from-lime-600 to-lime-700
                bg-clip-text
                text-transparent"
      >
        Vantagens
      </h2>

      <div className="grid grid-cols-1 p-4 md:grid md:grid-cols-3 gap-4">
        {featuresList.map((feature, index) => (
          <div
            key={index}
            className="flex-col space-y-6 pb-10 border p-8 rounded-xl items-center justify-center w-full hover:scale-105 transform transition-all duration-500 ease-in-out"
          >
            <div>
              <Image
                src={feature.image}
                alt={feature.alt}
                width={300}
                height={300}
                className="object-contain h-20 w-20 items-center justify-center flex mb-10"
              />
              <div>
                <div className="text-2xl bg-gradient-to-t from-lime-700 to-lime-600 bg-clip-text text-transparent font-bold">
                  {feature.name}
                </div>

                <div className="bg-gradient-to-l to-gray-900 from-gray-500 bg-clip-text text-transparent text-lg">
                  {feature.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
