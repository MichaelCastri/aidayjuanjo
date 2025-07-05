import React, { useState, useEffect } from 'react';
import './css/styles.css';

import HeroBonito from './components/HeroFondo';


const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Para la cuenta atrás
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Para el formulario de contacto
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asistencia: '',
    transporte: '',
    alergias: '',
    mensaje: '',
    usoBus: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  // Para la galería de fotos
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  useEffect(() => {
    // Simular tiempo de carga para mostrar animación inicial
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Función para manejar el cambio de tamaño de la ventana
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Agregar event listener para el cambio de tamaño
    window.addEventListener('resize', handleResize);

    // Calcular cuenta atrás
    const weddingDate = new Date('July 5, 2025 18:00:00').getTime();

    const countdownTimer = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(countdownTimer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsUploading(true);

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbyU4rgYNPNyTw5CqYSVahDRxeBDQgZq-0eE9OZ8MAAmlZBRIyBQeSvTU5MGlQdBglqD/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormSubmitted(true);
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          asistencia: '',
          transporte: '',
          alergias: '',
          usoBus: '',
          mensaje: ''
        });
      } else {
        console.error("Error al enviar: respuesta no válida.");
      }
    } catch (error) {
      console.error("Error al enviar formulario:", error);
    } finally {
      setIsUploading(false);
    }
  };



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

  const handleFileUpload = async (e) => {
    e.preventDefault();
    if (selectedFile) {
      setIsUploading(true);

      const formData = new FormData();
      formData.append('file', selectedFile);

      try {
        // Aquí va tu webhook de Make
        const response = await fetch('https://hook.eu2.make.com/qiql5pb8q5oojer2dr1k2hzak135x9cz', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          setUploadSuccess(true);
          setSelectedFile(null);
          setPreviewUrl(null);
        } else {
          alert('Error al subir la foto');
        }
      } catch (error) {
        alert('Error al subir la foto');
      } finally {
        setIsUploading(false);
      }
    }
  };

  if (isLoading) {
    return (
      <div style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
      }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{
            fontFamily: 'var(--fuente-titulo)',
            fontSize: '3rem',
            color: 'var(--color-rosa-pastel)',
            marginBottom: '1rem',
            animation: 'pulse 1.5s infinite'
          }}>
            Aida & Juanjo
          </h1>
          <p style={{ color: 'var(--color-texto-claro)' }}>Cargando...</p>
        </div>
      </div>
    );
  }

  return (
    <div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="container navbar-container">
          <a href="#inicio" className="navbar-logo">Aida & Juanjo</a>

          <button className="navbar-toggle" onClick={toggleMenu}>
            <span>☰</span>
          </button>

          <div className="navbar-menu">
            <a href="#inicio">Inicio</a>
            <a href="#confirmacion">Confirmación de Asistencia</a>
            <a href="#evento">Evento</a>
            <a href="#transporte">Transporte</a>
          </div>
        </div>

        {isMenuOpen && (
          <div className="mobile-menu active">
            <a href="#inicio" onClick={toggleMenu}>Inicio</a>
            <a href="#confirmacion" onClick={toggleMenu}>Confirmación de Asistencia</a>
            <a href="#evento" onClick={toggleMenu}>Evento</a>
            <a href="#transporte" onClick={toggleMenu}>Transporte</a>
          </div>
        )}
      </nav>

      {/* Elementos decorativos florales */}
      {windowWidth >= 768 && (
        <>
          <div className="floral-element floral-top-left"></div>
          <div className="floral-element floral-bottom-right"></div>
        </>
      )}

      {/* Hero Section */}



      <div><HeroBonito /></div>


      {/* Bienvenida Section */}
      <section className="section bienvenida">
        <div className="container">
          <h2 className="section-title">Os damos la bienvenida</h2>
          <div className="bienvenida-content">
            <p>
              Queridos familiares y amigos, estamos emocionados de invitaros a compartir con nosotros uno de los días más especiales de nuestras vidas. Después de tantos años juntos, hemos decidido dar el siguiente paso y nos encantaría que nos acompañarais en esta celebración.
            </p>
            <p>
              En esta página encontraréis toda la información necesaria sobre nuestra boda. Os pedimos que confirméis vuestra asistencia lo antes posible para poder organizarlo todo perfectamente.
            </p>
          </div>
        </div>
      </section>

      {/* Lugar Evento Section */}
      <section id="evento" className="section">
        <div className="container">
          <h2 className="section-title">Lugar del Evento</h2>

          <div className="lugar-evento-cards">
            {/* Ceremonia */}
            <div className="lugar-card">
              <div className="lugar-icon">
              
                  <img src="/11.png" alt="Icono de confirmación" width="24" height="24" />
                
              </div>
              <h3 className="lugar-title">Ceremonia</h3>
              <p>
                Te esperamos en la Parroquia de San Cristóbal y San Rafael a las 18:15h (Madrid).
              </p>
              <p className="lugar-address">
                Dirección: Calle Bravo Murillo 39
              </p>
              <a
                href="https://maps.google.com/?q=Parroquia+de+San+Cristóbal+y+San+Rafael+Madrid"
                target="_blank"
                rel="noopener noreferrer"
                className="lugar-map-link"
              >
                <span>Ver en mapa</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '5px' }}>
                  <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            {/* Celebración */}
            <div className="lugar-card">
              <div className="lugar-icon">
              <img src="/44.png" alt="Icono de confirmación" width="24" height="24" />
              </div>
              <h3 className="lugar-title">Celebración</h3>
              <p>
                Continuando la celebración en la Casa de Mónico (Aravaca - Madrid).
              </p>
              <p className="lugar-address">
                Dirección: C. Cabeza de Manzaneda 105 (Moncloa-Aravaca)
              </p>
              <a
                href="https://maps.google.com/?q=Casa+de+Mónico+Aravaca+Madrid"
                target="_blank"
                rel="noopener noreferrer"
                className="lugar-map-link"
              >
                <span>Ver en mapa</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '5px' }}>
                  <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerario Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Itinerario del Evento</h2>

          <div className="itinerario-timeline">
            <div className="itinerario-line"></div>

            <div className="itinerario-items">
              {/* Ceremonia */}
              <div className="itinerario-item">
                <div className="itinerario-icon">
                  <img src="/11.png" alt="Icono de confirmación" width="24" height="24" />
                </div>
                <h3 className="itinerario-title">Ceremonia</h3>
                <p className="itinerario-time">18:30h</p>
              </div>

              {/* Cóctel */}
              <div className="itinerario-item">
                <div className="itinerario-icon">
                  <img src="/22.png" alt="Icono de confirmación" width="24" height="24" />
                </div>
                <h3 className="itinerario-title">Cóctel</h3>
                <p className="itinerario-time">20:30h</p>
              </div>

              {/* Banquete */}
              <div className="itinerario-item">
                <div className="itinerario-icon">
                  <img src="/33.png" alt="Icono de confirmación" width="24" height="24" />
                </div>
                <h3 className="itinerario-title">Banquete</h3>
                <p className="itinerario-time">22:00h</p>
              </div>

              {/* Fiesta */}
              <div className="itinerario-item">
                <div className="itinerario-icon">
                  <img src="/44.png" alt="Icono de confirmación" width="24" height="24" />
                </div>
                <h3 className="itinerario-title">Fiesta y Barra Libre</h3>
                <p className="itinerario-time">00:00h</p>
              </div>
            </div>
          </div>

          <p style={{ textAlign: 'center', marginTop: '40px', fontStyle: 'italic' }}>
            Los horarios son orientativos y pueden sufrir ligeras variaciones.
          </p>
        </div>
      </section>

      {/* Transporte Section */}
      <section id="transporte" className="section transporte">
        <div className="container">
          <h2 className="section-title">Transporte y Autobuses</h2>

          <div className="transporte-container">
            <div className="transporte-buses">
              {/* Bus 1 */}
              <div className="transporte-bus">
                <div className="transporte-bus-title">
                  <div className="transporte-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3>Bus 1</h3>
                </div>
                <p>
                  Desde la Iglesia a la Finca (y regreso tras la fiesta).
                </p>
              </div>

              {/* Bus 2 */}
              <div className="transporte-bus">
                <div className="transporte-bus-title">
                  <div className="transporte-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3>Bus 2</h3>
                </div>
                <p>
                  Desde El Álamo a la Iglesia; luego, tras la ceremonia, a la Finca (y regreso a El Álamo después de la fiesta).
                </p>
              </div>
            </div>

            {/* Horarios */}
            <div className="transporte-horarios">
              <h3 className="transporte-horarios-title">Horarios</h3>
              <div className="transporte-horarios-grid">
                <div className="transporte-horario">
                  <p className="transporte-horario-label">Ida desde El Álamo</p>
                  <p className="transporte-horario-time">17:15h</p>
                </div>
                <div className="transporte-horario">
                  <p className="transporte-horario-label">Vuelta</p>
                  <p className="transporte-horario-time">02:30h y 05:00h</p>
                </div>
              </div>
              <p style={{ marginTop: '20px', fontSize: '0.9rem', fontStyle: 'italic' }}>
                Por favor, confirma tu plaza de autobús al confirmar tu asistencia.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Galería Fotos Section */}
      <section className="section galeria"
        style={{
          backgroundImage: 'url("/fondo trasp.png")',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}>
        <div className="container">
          <h2 className="section-title" style={{ textShadow: '0 2 5px white' }}>Galería de Fotos</h2>

          <div className="galeria-container">
            <p style={{ textAlign: 'center', marginBottom: '30px', textShadow: '0 0 5px white' }}>
              Nos encantaría que compartieras tus fotos de nuestra boda. Sube tus mejores momentos para crear un álbum de recuerdos inolvidables.
            </p>

            <form onSubmit={handleFileUpload} className="galeria-upload">
              <label htmlFor="photo-upload" className="galeria-dropzone">
                {previewUrl ? (
                  <img src={previewUrl} alt="Vista previa" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
                ) : (
                  <>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: '15px', color: 'var(--color-rosa-pastel)' }}>
                      <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p>
                      Haz clic para seleccionar una foto o arrastra y suelta aquí
                    </p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--color-texto-claro)', marginTop: '10px' }}>
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
                style={{ display: 'none' }}
              />

              {selectedFile && (
                <button
                  type="submit"
                  className="btn"
                  disabled={isUploading}
                  style={{ marginTop: '20px' }}
                >
                  {isUploading ? 'Subiendo...' : 'Subir foto'}
                </button>
              )}
            </form>

            {uploadSuccess && (
              <div style={{ textAlign: 'center', color: 'green', fontWeight: '500', marginTop: '20px' }}>
                ¡Foto subida correctamente! Gracias por compartir tus recuerdos.
              </div>
            )}

            <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid rgba(248, 200, 220, 0.5)' }}>
              <h3 style={{ textAlign: 'center', marginBottom: '20px', fontFamily: 'var(--fuente-titulo)' }}>Fotos compartidas</h3>
              <div className="galeria-grid">
                <div className="galeria-item">
                  <p style={{ padding: '20px', textAlign: 'center', color: 'var(--color-rosa-pastel)' }}>Las fotos aparecerán aquí después de la boda</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cuenta Atrás Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Cuenta Atrás</h2>

          <div className="cuenta-atras-container">
            <p style={{ marginBottom: '30px', fontSize: '1.2rem' }}>
              Faltan
            </p>

            <div className="cuenta-atras-grid">
              <div className="cuenta-atras-item">
                <div className="cuenta-atras-number">{timeLeft.days}</div>
                <div className="cuenta-atras-label">Días</div>
              </div>

              <div className="cuenta-atras-item">
                <div className="cuenta-atras-number">{timeLeft.hours}</div>
                <div className="cuenta-atras-label">Horas</div>
              </div>

              <div className="cuenta-atras-item">
                <div className="cuenta-atras-number">{timeLeft.minutes}</div>
                <div className="cuenta-atras-label">Minutos</div>
              </div>

              <div className="cuenta-atras-item">
                <div className="cuenta-atras-number">{timeLeft.seconds}</div>
                <div className="cuenta-atras-label">Segundos</div>
              </div>
            </div>

            <p className="cuenta-atras-date">
              5 de julio de 2025
            </p>
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="confirmacion" className="section contacto">
        <div className="container">
          <h2 className="section-title">Contacto y Confirmación</h2>

          <div className="contacto-container">
            <div className="contacto-flex">
              {/* Información de contacto */}
              <div className="contacto-form">
  {formSubmitted ? (
    <div className="success-message">
      <div className="success-icon">✓</div>
      <h3 className="success-title">¡Gracias por confirmar!</h3>
      <p>Hemos recibido tu confirmación. Nos vemos en nuestra boda.</p>
    </div>
  ) : (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setIsUploading(true);
        try {
          const response = await fetch("/api/confirmacion", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          });

          if (response.ok) {
            setFormSubmitted(true);
            setFormData({
              nombre: '',
              email: '',
              telefono: '',
              asistencia: '',
              transporte: '',
              alergias: '',
              usoBus: '',
              mensaje: ''
            });
          } else {
            console.error("Error al enviar: respuesta no válida");
          }
        } catch (error) {
          console.error("Error al enviar formulario:", error);
        } finally {
          setIsUploading(false);
        }
      }}
    >
      <div className="form-group">
        <label htmlFor="nombre" className="form-label">Nombre completo *</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleFormChange}
          required
          className="form-input"
        />
      </div>

      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleFormChange}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="telefono" className="form-label">Teléfono *</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleFormChange}
            required
            className="form-input"
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="asistencia" className="form-label">¿Asistirás a nuestra boda? *</label>
        <select
          id="asistencia"
          name="asistencia"
          value={formData.asistencia}
          onChange={handleFormChange}
          required
          className="form-select"
        >
          <option value="">Selecciona una opción</option>
          <option value="si">Sí, asistiré</option>
          <option value="no">No podré asistir</option>
        </select>
      </div>

      {formData.asistencia === 'si' && (
        <div className="form-group">
          <label htmlFor="transporte" className="form-label">¿Harás uso del servicio de autobús?</label>
          <select
            id="transporte"
            name="transporte"
            value={formData.transporte}
            onChange={handleFormChange}
            className="form-select"
          >
            <option value="">Selecciona una opción</option>
            <option value="bus1">Bus 1 (Iglesia - Finca)</option>
            <option value="bus2">Bus 2 (El Álamo - Iglesia - Finca)</option>
            <option value="no">No, iré por mi cuenta</option>
          </select>
        </div>
      )}

      <div className="form-group">
        <label htmlFor="alergias" className="form-label">Alergias o intolerancias alimentarias</label>
        <input
          type="text"
          id="alergias"
          name="alergias"
          value={formData.alergias}
          onChange={handleFormChange}
          className="form-input"
          placeholder="Especifica si tienes alguna alergia o intolerancia"
        />
      </div>

      <div className="form-group">
        <label htmlFor="mensaje" className="form-label">Mensaje para los novios</label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleFormChange}
          className="form-textarea"
          placeholder="¿Quieres decirnos algo?"
        ></textarea>
      </div>

      <div className="form-submit">
        <button type="submit" className="btn" disabled={isUploading}>
          {isUploading ? 'Enviando...' : 'Confirmar asistencia'}
        </button>
      </div>
    </form>
  )}

  {/* Popup de confirmación */}
  {formSubmitted && (
    <div className="popup-confirmacion">
      <div className="popup-contenido">
        <h2>🎉 ¡Confirmación enviada!</h2>
        <p>Gracias por confirmar tu asistencia. ¡Nos vemos en la boda!</p>
        <button onClick={() => setFormSubmitted(false)}>Cerrar</button>
      </div>
    </div>
  )}
</div>


              {/* Contacto aida y juanjo */}
              <div className="contacto-info">
                <h3 className="contacto-info-title">Contacto de los novios</h3>

                <div className="contacto-person">
                  <p className="contacto-person-name">Aida Fernández Caballero</p>
                  <p className="contacto-person-phone">
                    <span className="contacto-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    651594345
                  </p>
                </div>

                <div className="contacto-person">
                  <p className="contacto-person-name">Juan José Ribagorda Sánchez</p>
                  <p className="contacto-person-phone">
                    <span className="contacto-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    691610768
                  </p>
                </div>

                <p className="contacto-note">
                  Por favor, confirma tu asistencia antes del 5 de junio de 2025 para poder organizarlo todo correctamente.
                </p>
              </div>
            </div>
          </div>
          </div>
      </section>


      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-logo">Aida & Juanjo</div>
          <div className="footer-date">5 de julio de 2025</div>

          <div className="footer-links">
            <a href="#inicio" className="footer-link">Inicio</a>
            <a href="#evento" className="footer-link">Evento</a>
            <a href="#transporte" className="footer-link">Transporte</a>
            <a href="#confirmacion" className="footer-link">Confirmación</a>
          </div>

          <div className="footer-copyright">© 2025 - Con amor para nuestr@s invitad@s</div>
          <div className="footer-version">
            {windowWidth < 768 ? 'Versión móvil' : 'Versión escritorio'} - Optimizado para todos los dispositivos
          </div>
        </div>
      </footer>
    </div>
    
  );
};

export default App;
