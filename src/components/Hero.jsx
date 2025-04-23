const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/aida1.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30 z-0"></div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-4 drop-shadow-lg">
          Aida & Juanjo
        </h1>
        <p className="text-xl md:text-2xl text-white font-light mb-8 drop-shadow-md">
          5 de julio de 2025
        </p>
        <a 
          href="#confirmacion" 
          className="inline-block bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 font-medium py-3 px-8 rounded-md transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Confirmar Asistencia
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
