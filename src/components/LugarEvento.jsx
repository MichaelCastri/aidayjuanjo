const LugarEvento = () => {
  return (
    <section
      id="evento"
      className="relative py-16"
      style={{
        backgroundImage: "url('/fondo.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Capa oscura semitransparente */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Contenido sobre el fondo */}
      <div className="relative section-container z-10">
        <h2 className="section-title text-white">Lugar del Evento</h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Ceremonia */}
          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-serif text-center mb-4">Ceremonia</h3>
            <p className="text-center text-gray-700 mb-4">
              Te esperamos en la Parroquia de San Cristóbal y San Rafael a las 18h (Madrid).
            </p>
            <p className="text-center text-gray-700 font-medium">
              Dirección: Calle Bravo Murillo 39
            </p>
            <div className="mt-6 text-center">
              <a 
                href="https://maps.google.com/?q=Parroquia+de+San+Cristóbal+y+San+Rafael+Madrid" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-pink-600 hover:text-pink-800"
              >
                <span>Ver en mapa</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Celebración */}
          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-serif text-center mb-4">Celebración</h3>
            <p className="text-center text-gray-700 mb-4">
              Continuando la celebración en la Casa de Mónico (Aravaca - Madrid).
            </p>
            <p className="text-center text-gray-700 font-medium">
              Dirección: C. Cabeza de Manzaneda 105 (Moncloa-Aravaca)
            </p>
            <div className="mt-6 text-center">
              <a 
                href="https://maps.google.com/?q=Casa+de+Mónico+Aravaca+Madrid" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-pink-600 hover:text-pink-800"
              >
                <span>Ver en mapa</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LugarEvento;
