import React from 'react';



const HeroBonito = () => {
  return (
    <section
      id="inicio"
      className="hero"
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/aida1.png')",
        backgroundSize: 'cover',
        backgroundPosition: window.innerWidth >= 1024 ? 'center top' : 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
        <section className="hero-moderno">
        <div className="overlay"></div> {/* <-- este es el truco */}
        <div className="hero-content">
        <h1 className="hero-title">Aida & Juanjo</h1>
        <p className="hero-subtitle">5 de julio de 2025</p>
        <a href="#confirmacion" className="btn hero-btn">
          Confirmar Asistencia
        </a>
      </div>

      <div className="scroll-indicator">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section></section>
  );
};

export default HeroBonito;
