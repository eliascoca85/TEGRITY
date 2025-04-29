import React from 'react';
import './style.css';

export default function Contactos() {
  return (
    <section id="contacto" className="contactos-section w-full py-20">
      <div className="grid-overlay"></div>
      <div className="pixel-stars"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="contactos-header text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 glitch-heading" data-text="CONTACTO">CONTACTO</h2>
          <div className="cyber-line"></div>
          <p className="mt-6 max-w-2xl mx-auto text-gray-300 contact-desc">
            Conecta con nuestro equipo para iniciar tu próximo proyecto digital. 
            Estamos listos para convertir tus ideas en realidad.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario de contacto */}
          <div className="contact-form-wrapper">
            <div className="contact-form-container">
              <div className="form-header">
                <span className="terminal-prompt">&#62; iniciar_contacto</span>
                <div className="terminal-buttons">
                  <span className="terminal-button"></span>
                  <span className="terminal-button"></span>
                  <span className="terminal-button"></span>
                </div>
              </div>
              
              <form className="contact-form">
                <div className="form-group">
                  <label className="form-label">
                    <span className="label-text">NOMBRE</span>
                    <span className="required-star">*</span>
                  </label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Tu nombre completo"
                      required
                    />
                    <div className="input-focus-effect"></div>
                  </div>
                </div>
                
                <div className="form-group">
                  <label className="form-label">
                    <span className="label-text">EMAIL</span>
                    <span className="required-star">*</span>
                  </label>
                  <div className="input-wrapper">
                    <input
                      type="email"
                      className="form-input"
                      placeholder="tu@email.com"
                      required
                    />
                    <div className="input-focus-effect"></div>
                  </div>
                </div>
                
                <div className="form-group">
                  <label className="form-label">
                    <span className="label-text">ASUNTO</span>
                  </label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      className="form-input"
                      placeholder="¿Sobre qué quieres hablar?"
                    />
                    <div className="input-focus-effect"></div>
                  </div>
                </div>
                
                <div className="form-group">
                  <label className="form-label">
                    <span className="label-text">MENSAJE</span>
                    <span className="required-star">*</span>
                  </label>
                  <div className="input-wrapper textarea-wrapper">
                    <textarea
                      className="form-textarea"
                      placeholder="Cuéntanos sobre tu proyecto..."
                      rows="5"
                      required
                    ></textarea>
                    <div className="input-focus-effect"></div>
                  </div>
                </div>
                
                <div className="form-footer">
                  <button type="submit" className="submit-button">
                    <span className="button-text">ENVIAR MENSAJE</span>
                    <span className="button-icon">&#10148;</span>
                  </button>
                  <div className="typing-indicator">
                    <span className="typing-dot"></span>
                    <span className="typing-dot"></span>
                    <span className="typing-dot"></span>
                  </div>
                </div>
              </form>
            </div>
          </div>
          
          {/* Información de contacto */}
          <div className="contact-info">
            <div className="contact-card">
              <div className="card-header">
                <span className="header-icon">&#9733;</span>
                <h3 className="header-title">INFORMACIÓN DE CONTACTO</h3>
              </div>
              
              <div className="card-content">
                <div className="info-item">
                  <div className="info-icon">
                    <span className="pixel-icon location"></span>
                  </div>
                  <div className="info-content">
                    <h4 className="info-title">UBICACIÓN</h4>
                    <p className="info-text">Calle Principal 123, Ciudad</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">
                    <span className="pixel-icon email"></span>
                  </div>
                  <div className="info-content">
                    <h4 className="info-title">EMAIL</h4>
                    <p className="info-text">info@tudominio.com</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">
                    <span className="pixel-icon phone"></span>
                  </div>
                  <div className="info-content">
                    <h4 className="info-title">TELÉFONO</h4>
                    <p className="info-text">+34 123 456 789</p>
                  </div>
                </div>
                
                <div className="social-media">
                  <h4 className="social-title">SÍGUENOS</h4>
                  <div className="social-links">
                    <a href="#" className="social-link">
                      <span className="social-icon facebook"></span>
                    </a>
                    <a href="#" className="social-link">
                      <span className="social-icon twitter"></span>
                    </a>
                    <a href="#" className="social-link">
                      <span className="social-icon instagram"></span>
                    </a>
                    <a href="#" className="social-link">
                      <span className="social-icon linkedin"></span>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="card-footer">
                <div className="hours-container">
                  <h4 className="hours-title">HORARIO</h4>
                  <div className="hours-grid">
                    <span className="day">Lun-Vie:</span>
                    <span className="time">9:00 - 18:00</span>
                    <span className="day">Sábado:</span>
                    <span className="time">10:00 - 14:00</span>
                    <span className="day">Domingo:</span>
                    <span className="time">Cerrado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}