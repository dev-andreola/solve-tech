"use client";

import React from "react";
import Image from "next/image";

const Intro = () => {
  return (
    <section className="py-14 bg-gradient-to-l h-full to-white from-gray-200">
      <div className="lg:flex-row flex-col items-center flex justify-center max-w-6xl mx-auto p-5">
        <video className="w-full lg:w-2/4 m-5 rounded-xl" autoPlay muted loop>
          <source src="/content/intro.mp4" type="video/mp4" />
        </video>
        <div className="justify-center lg:p-5">
          <h2
            className="
                bg-gradient-to-l
                from-lime-600 to-lime-700
                bg-clip-text
                text-transparent
                text-4xl
                md:text-6xl
                font-bold
                pb-4"
          >
            SolveTech é para Qualquer Tipo de Negócio!
          </h2>
          <p className="text-md md:text-xl md-10 bg-gradient-to-l to-gray-900 from-gray-500 bg-clip-text text-transparent font-bold mb-4">
            Autônomos, startups ou empresas. SolveTech é a única plataforma que
            você precisa para crescer o seu negócio.
          </p>
          <button className="p-4 justify-center flex md:w-1/3 rounded-md md:text-lg font-bold bg-gradient-to-l from-lime-600 to-lime-700 hover:from-lime-700 hover:to-lime-800 transition-colors duration-300 text-white">
            Começar
          </button>
        </div>
      </div>
    </section>
  );
};

export default Intro;
