const Transporte = () => {
  return (
    <section id="transporte" className="py-16 bg-pink-50">
      <div className="section-container">
        <h2 className="section-title">Transporte y Autobuses</h2>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Bus 1 */}
            <div className="border-b md:border-b-0 md:border-r border-pink-100 pb-6 md:pb-0 md:pr-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif text-gray-800">Bus 1</h3>
              </div>
              <p className="text-gray-700 mb-2">
                Desde la Iglesia a la Finca (y regreso tras la fiesta).
              </p>
            </div>
            
            {/* Bus 2 */}
            <div className="pt-6 md:pt-0 md:pl-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif text-gray-800">Bus 2</h3>
              </div>
              <p className="text-gray-700 mb-2">
                Desde El Álamo a la Iglesia; luego, tras la ceremonia, a la Finca (y regreso a El Álamo después de la fiesta).
              </p>
            </div>
          </div>
          
          {/* Horarios */}
          <div className="mt-10 pt-6 border-t border-pink-100">
            <h3 className="text-xl font-serif text-center text-gray-800 mb-6">Horarios</h3>
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
              <div className="bg-pink-50 p-4 rounded-lg text-center">
                <p className="text-gray-700 font-medium">Ida desde El Álamo</p>
                <p className="text-xl text-pink-700">17:30h</p>
              </div>
              <div className="bg-pink-50 p-4 rounded-lg text-center">
                <p className="text-gray-700 font-medium">Vuelta</p>
                <p className="text-xl text-pink-700">02:30h y 05:00h</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 italic">
                Por favor, confirma tu plaza de autobús al confirmar tu asistencia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transporte;
