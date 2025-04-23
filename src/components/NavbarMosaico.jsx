import { useState } from 'react';

const NavbarMosaico = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className="fixed w-full z-50 shadow-sm bg-white bg-opacity-80 backdrop-blur-sm"
      style={{
        backgroundImage: "url('/navbar.png')",
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#inicio" className="text-xl font-serif text-gray-800 hover:text-pink-400 transition-colors">
              Aida & Juanjo
            </a>
          </div>

          {/* Menú para móvil */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-pink-400 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú principal</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Menú para escritorio */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-pink-400 px-3 py-2 text-sm font-medium transition-colors">
              Inicio
            </a>
            <a href="#confirmacion" className="text-gray-700 hover:text-pink-400 px-3 py-2 text-sm font-medium transition-colors">
              Confirmación de Asistencia
            </a>
            <a href="#evento" className="text-gray-700 hover:text-pink-400 px-3 py-2 text-sm font-medium transition-colors">
              Evento
            </a>
            <a href="#transporte" className="text-gray-700 hover:text-pink-400 px-3 py-2 text-sm font-medium transition-colors">
              Transporte
            </a>
          </div>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#inicio" className="block px-3 py-2 text-gray-700 hover:text-pink-400 text-base font-medium transition-colors">
              Inicio
            </a>
            <a href="#confirmacion" className="block px-3 py-2 text-gray-700 hover:text-pink-400 text-base font-medium transition-colors">
              Confirmación de Asistencia
            </a>
            <a href="#evento" className="block px-3 py-2 text-gray-700 hover:text-pink-400 text-base font-medium transition-colors">
              Evento
            </a>
            <a href="#transporte" className="block px-3 py-2 text-gray-700 hover:text-pink-400 text-base font-medium transition-colors">
              Transporte
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarMosaico;
