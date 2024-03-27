const HeroSection = () => {
  return (
    <section className="py-14 bg-gradient-to-r h-full to-white from-gray-200">
      <div className="container mx-auto text-center space-y-5">
        <h2 className="text-4xl sm:text-6xl flex justify-center md:pb-3  font-bold md:px-20 text-gradient bg-gradient-to-r from-lime-600 to-lime-700 bg-clip-text text-transparent overflow-visible">
          A simplicidade que você precisa, onde a tecnologia encontra a
          praticidade
        </h2>
        <p className="text-md md:text-xl md-10 bg-gradient-to-r to-gray-900 from-gray-400 bg-clip-text text-transparent font-bold">
          Transformando suas necessidades em soluções tecnológicas eficientes.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-gradient-to-r from-lime-600 to-lime-700 hover:from-lime-700 hover:to-lime-800 transition-colors duration-300 text-white px-10 py-4 rounded-md md:text-lg font-bold">
            Começar
          </button>
          <button className="px-10 py-4 text-nowrap rounded-md md:text-lg font-bold border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground">
            Saiba Mais
          </button>
        </div>
        <video className="rounded-xl md:w-2/3 mx-auto" autoPlay muted loop>
          <source src="/content/hero.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default HeroSection;
