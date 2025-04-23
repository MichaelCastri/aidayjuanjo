import { useEffect, useState } from 'react';

const Itinerario = () => {
  const [activeItem, setActiveItem] = useState(null);

  // Simular animación secuencial al cargar el componente
  useEffect(() => {
    const items = ['ceremonia', 'coctel', 'banquete', 'fiesta'];
    let index = 0;
    
    const interval = setInterval(() => {
      if (index < items.length) {
        setActiveItem(items[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 500);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="section-container">
        <h2 className="section-title">Itinerario del Evento</h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Línea de tiempo */}
          <div className="relative">
            {/* Línea horizontal */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-pink-200 transform -translate-y-1/2"></div>
            
            {/* Elementos del itinerario */}
            <div className="relative flex justify-between">
              {/* Ceremonia */}
              <div className={`flex flex-col items-center transition-opacity duration-500 ${activeItem === 'ceremonia' ? 'opacity-100' : 'opacity-70'}`}>
                <div className="w-16 h-16 bg-white rounded-full border-2 border-pink-300 flex items-center justify-center mb-4 z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-lg font-serif text-gray-800 mb-1">Ceremonia</h3>
                <p className="text-xl font-bold text-pink-600">18:30h</p>
              </div>
              
              {/* Cóctel */}
              <div className={`flex flex-col items-center transition-opacity duration-500 ${activeItem === 'coctel' ? 'opacity-100' : 'opacity-70'}`}>
                <div className="w-16 h-16 bg-white rounded-full border-2 border-pink-300 flex items-center justify-center mb-4 z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-serif text-gray-800 mb-1">Cóctel</h3>
                <p className="text-xl font-bold text-pink-600">20:30h</p>
              </div>
              
              {/* Banquete */}
              <div className={`flex flex-col items-center transition-opacity duration-500 ${activeItem === 'banquete' ? 'opacity-100' : 'opacity-70'}`}>
                <div className="w-16 h-16 bg-white rounded-full border-2 border-pink-300 flex items-center justify-center mb-4 z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h3 className="text-lg font-serif text-gray-800 mb-1">Banquete</h3>
                <p className="text-xl font-bold text-pink-600">22:00h</p>
              </div>
              
              {/* Fiesta */}
              <div className={`flex flex-col items-center transition-opacity duration-500 ${activeItem === 'fiesta' ? 'opacity-100' : 'opacity-70'}`}>
                <div className="w-16 h-16 bg-white rounded-full border-2 border-pink-300 flex items-center justify-center mb-4 z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-serif text-gray-800 mb-1">Fiesta y Barra Libre</h3>
                <p className="text-xl font-bold text-pink-600">00:00h</p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-gray-700 italic">
              Los horarios son orientativos y pueden sufrir ligeras variaciones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Itinerario;
