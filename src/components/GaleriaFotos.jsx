import { useState } from 'react';

const GaleriaFotos = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPreviewUrl(fileReader.result);
      };
      fileReader.readAsDataURL(file);
      setUploadSuccess(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedFile) {
      setIsUploading(true);
      // Simulación de carga
      setTimeout(() => {
        setIsUploading(false);
        setUploadSuccess(true);
        setSelectedFile(null);
        setPreviewUrl(null);
      }, 2000);
    }
  };

  return (
    <section className="py-16 bg-pink-50">
      <div className="section-container">
        <h2 className="section-title">Galería de Fotos</h2>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
          <p className="text-center text-gray-700 mb-8">
            Nos encantaría que compartieras tus fotos de nuestra boda. Sube tus mejores momentos para crear un álbum de recuerdos inolvidables.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col items-center justify-center">
              <label 
                htmlFor="photo-upload" 
                className="w-full max-w-md h-64 border-2 border-dashed border-pink-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-pink-50 transition-colors"
              >
                {previewUrl ? (
                  <img src={previewUrl} alt="Vista previa" className="h-full object-contain" />
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-pink-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-gray-700 text-center">
                      Haz clic para seleccionar una foto o arrastra y suelta aquí
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      JPG, PNG o GIF (máx. 10MB)
                    </p>
                  </>
                )}
              </label>
              <input 
                id="photo-upload" 
                type="file" 
                accept="image/*" 
                onChange={handleFileChange} 
                className="hidden" 
              />
            </div>
            
            {selectedFile && (
              <div className="text-center">
                <button 
                  type="submit" 
                  className="btn-primary"
                  disabled={isUploading}
                >
                  {isUploading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Subiendo...
                    </span>
                  ) : (
                    'Subir foto'
                  )}
                </button>
              </div>
            )}
            
            {uploadSuccess && (
              <div className="text-center text-green-600 font-medium">
                ¡Foto subida correctamente! Gracias por compartir tus recuerdos.
              </div>
            )}
          </form>
          
          <div className="mt-10 pt-6 border-t border-pink-100">
            <h3 className="text-xl font-serif text-center text-gray-800 mb-6">Fotos compartidas</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {/* Aquí se mostrarían las fotos subidas por los invitados */}
              <div className="aspect-square bg-pink-100 rounded-lg flex items-center justify-center">
                <p className="text-pink-400 text-center p-4">Las fotos aparecerán aquí después de la boda</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GaleriaFotos;
