import { useState } from 'react';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asistencia: '',
    transporte: '',
    alergias: '',
    mensaje: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulación de envío de formulario
    setTimeout(() => {
      setFormSubmitted(true);
      // Resetear formulario
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        asistencia: '',
        transporte: '',
        alergias: '',
        mensaje: ''
      });
    }, 1000);
  };

  return (
    <section id="confirmacion" className="py-16 bg-pink-50">
      <div className="section-container">
        <h2 className="section-title">Contacto y Confirmación</h2>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            {/* Información de contacto */}
            <div className="md:w-1/3 bg-pink-100 p-8">
              <h3 className="text-xl font-serif text-gray-800 mb-6">Contacto de los novios</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-800">Aida Fernández Caballero</h4>
                  <p className="text-gray-700 flex items-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    651594345
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-800">Juan José Ribagorda Sánchez</h4>
                  <p className="text-gray-700 flex items-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    691610768
                  </p>
                </div>
              </div>
              
              <div className="mt-10">
                <p className="text-gray-700 text-sm">
                  Por favor, confirma tu asistencia antes del 5 de junio de 2025 para poder organizarlo todo correctamente.
                </p>
              </div>
            </div>
            
            {/* Formulario de confirmación */}
            <div className="md:w-2/3 p-8">
              {formSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-2xl font-serif text-gray-800 mb-2">¡Gracias por confirmar!</h3>
                  <p className="text-gray-700">
                    Hemos recibido tu confirmación. Nos vemos en nuestra boda.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="asistencia" className="block text-sm font-medium text-gray-700 mb-1">
                      ¿Asistirás a nuestra boda? *
                    </label>
                    <select
                      id="asistencia"
                      name="asistencia"
                      value={formData.asistencia}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="si">Sí, asistiré</option>
                      <option value="no">No podré asistir</option>
                    </select>
                  </div>
                  
                  {formData.asistencia === 'si' && (
                    <div>
                      <label htmlFor="transporte" className="block text-sm font-medium text-gray-700 mb-1">
                        ¿Necesitas transporte?
                      </label>
                      <select
                        id="transporte"
                        name="transporte"
                        value={formData.transporte}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                      >
                        <option value="">Selecciona una opción</option>
                        <option value="bus1">Sí, Bus 1 (Iglesia - Finca)</option>
                        <option value="bus2">Sí, Bus 2 (El Álamo - Iglesia - Finca)</option>
                        <option value="no">No, iré por mi cuenta</option>
                      </select>
                    </div>
                  )}
                  
                  <div>
                    <label htmlFor="alergias" className="block text-sm font-medium text-gray-700 mb-1">
                      Alergias o intolerancias alimentarias
                    </label>
                    <input
                      type="text"
                      id="alergias"
                      name="alergias"
                      value={formData.alergias}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                      placeholder="Especifica si tienes alguna alergia o intolerancia"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensaje para los novios
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      rows="3"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                      placeholder="¿Quieres decirnos algo?"
                    ></textarea>
                  </div>
                  
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn-primary"
                    >
                      Confirmar asistencia
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
