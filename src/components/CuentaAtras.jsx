import { useEffect, useState } from 'react';

const CuentaAtras = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Fecha de la boda: 5 de julio de 2025
    const weddingDate = new Date('July 5, 2025 18:00:00').getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        clearInterval(timer);
        // La boda ya ha pasado
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FF0066" d="M47.1,-61.5C62.2,-53.8,76.5,-41.6,83.1,-25.8C89.7,-10,88.5,9.5,81.6,26.5C74.7,43.5,62,58,46.2,67.8C30.4,77.5,11.5,82.5,-5.9,80.1C-23.3,77.7,-39.2,67.9,-52.6,55.3C-66,42.7,-76.9,27.3,-80.3,10.1C-83.7,-7.1,-79.6,-26.1,-69.3,-40.6C-59,-55.1,-42.5,-65.1,-26.6,-72.1C-10.7,-79.1,4.6,-83.1,19.8,-79.7C35,-76.3,50.1,-65.5,47.1,-61.5Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-40 h-40 opacity-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FF0066" d="M47.1,-61.5C62.2,-53.8,76.5,-41.6,83.1,-25.8C89.7,-10,88.5,9.5,81.6,26.5C74.7,43.5,62,58,46.2,67.8C30.4,77.5,11.5,82.5,-5.9,80.1C-23.3,77.7,-39.2,67.9,-52.6,55.3C-66,42.7,-76.9,27.3,-80.3,10.1C-83.7,-7.1,-79.6,-26.1,-69.3,-40.6C-59,-55.1,-42.5,-65.1,-26.6,-72.1C-10.7,-79.1,4.6,-83.1,19.8,-79.7C35,-76.3,50.1,-65.5,47.1,-61.5Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="section-container">
        <h2 className="section-title">Cuenta Atrás</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-xl text-gray-700">
              Faltan
            </p>
          </div>
          
          <div className="grid grid-cols-4 gap-4 md:gap-8">
            {/* Días */}
            <div className="bg-pink-50 rounded-lg p-4 shadow-md text-center">
              <div className="text-3xl md:text-5xl font-bold text-pink-600 mb-2">
                {timeLeft.days}
              </div>
              <div className="text-gray-700 text-sm md:text-base">
                Días
              </div>
            </div>
            
            {/* Horas */}
            <div className="bg-pink-50 rounded-lg p-4 shadow-md text-center">
              <div className="text-3xl md:text-5xl font-bold text-pink-600 mb-2">
                {timeLeft.hours}
              </div>
              <div className="text-gray-700 text-sm md:text-base">
                Horas
              </div>
            </div>
            
            {/* Minutos */}
            <div className="bg-pink-50 rounded-lg p-4 shadow-md text-center">
              <div className="text-3xl md:text-5xl font-bold text-pink-600 mb-2">
                {timeLeft.minutes}
              </div>
              <div className="text-gray-700 text-sm md:text-base">
                Minutos
              </div>
            </div>
            
            {/* Segundos */}
            <div className="bg-pink-50 rounded-lg p-4 shadow-md text-center">
              <div className="text-3xl md:text-5xl font-bold text-pink-600 mb-2">
                {timeLeft.seconds}
              </div>
              <div className="text-gray-700 text-sm md:text-base">
                Segundos
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-xl font-serif text-gray-700">
              5 de julio de 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CuentaAtras;
