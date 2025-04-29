'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './styles.css';

export default function Footer() {
  const [animatedButton, setAnimatedButton] = useState(false);
  
  // Enlaces de navegación
  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Proyectos', path: '/proyectos' },
    { name: 'Tecnologías', path: '/tecnologias' },
    { name: 'Contacto', path: '/contacto' }
  ];

  // Redes sociales
  const socialLinks = [
    { name: 'Twitter', icon: 'T', path: 'https://twitter.com' },
    { name: 'LinkedIn', icon: 'in', path: 'https://linkedin.com' },
    { name: 'GitHub', icon: 'G', path: 'https://github.com' },
    { name: 'Instagram', icon: 'I', path: 'https://instagram.com' }
  ];
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    setAnimatedButton(true);
    setTimeout(() => setAnimatedButton(false), 2000);
    // Lógica para manejar la suscripción
  };

  return (
    <footer className="retro-footer">
      <div className="footer-scan-line"></div>
      
      {/* Efecto gráfico de líneas de escáner */}
      <div className="scan-effect">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="scan-line" style={{ animationDelay: `${i * 1.5}s` }}></div>
        ))}
      </div>
      
      {/* Contenido principal del footer */}
      <div className="footer-grid">
        {/* Logo y descripción */}
        <div className="footer-col footer-brand">
          <div className="footer-logo-container">
            <h2 className="footer-logo">
              <span className="logo-part">TEGRITY</span>
              <span className="logo-pixel"></span>
              <span className="logo-part">SOFT</span>
            </h2>
          </div>
          <p className="footer-tagline">
            Construyendo el futuro digital con un toque retro
          </p>
          <div className="pixel-separator"></div>
        </div>
        
        {/* Enlaces de navegación */}
        <div className="footer-col">
          <h3 className="footer-heading">Navegación</h3>
          <ul className="footer-links">
            {navLinks.map((link, index) => (
              <li key={index} className="footer-link-item">
                <Link href={link.path} className="footer-link">
                  <span className="link-arrow">►</span> {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Contacto */}
        <div className="footer-col">
          <h3 className="footer-heading">Contacto</h3>
          <div className="contact-info">
            <p><span className="contact-label">E:</span> info@tegrity.com</p>
            <p><span className="contact-label">T:</span> +34 555 123 456</p>
            <p><span className="contact-label">D:</span> Calle Tecnología, 42</p>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="footer-col footer-newsletter">
          <h3 className="footer-heading">Newsletter</h3>
          <p className="newsletter-text">Suscríbete para recibir noticias y actualizaciones</p>
          
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <div className="form-group">
              <input 
                type="email" 
                placeholder="tu@email.com" 
                className="newsletter-input"
                required
              />
              <button 
                type="submit" 
                className={`newsletter-button ${animatedButton ? 'animated' : ''}`}
              >
                <span className="btn-text">Suscribir</span>
                <span className="btn-success">¡Enviado!</span>
              </button>
            </div>
          </form>
        </div>
      </div>
      
      {/* Divisor pixelado */}
      <div className="pixel-divider">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="pixel"></div>
        ))}
      </div>
      
      {/* Footer inferior */}
      <div className="footer-bottom">
        <p className="copyright">
          © {new Date().getFullYear()} TEGRITY SOFT. Todos los derechos reservados.
        </p>
        
        <div className="social-links">
          {socialLinks.map((social, index) => (
            <a 
              key={index}
              href={social.path}
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
            >
              <span className="social-icon">{social.icon}</span>
            </a>
          ))}
        </div>
      </div>
      
      {/* Efecto de brillo inferior */}
      <div className="footer-glow"></div>
    </footer>
  );
}