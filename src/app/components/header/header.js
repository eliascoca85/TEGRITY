'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import './styles.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const scrollProgressRef = useRef(null);
  
  // Control del scroll y progreso
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
      
      // Actualizar barra de progreso
      if (scrollProgressRef.current) {
        const height = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (scrollPosition / height) * 100;
        scrollProgressRef.current.style.width = `${scrolled}%`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Detección de sección activa para la navegación
  useEffect(() => {
    const sections = ['home', 'servicios', 'proyectos', 'tecnologias', 'contacto'];
    
    const handleSectionChange = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;
        
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;
        
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleSectionChange);
    return () => window.removeEventListener('scroll', handleSectionChange);
  }, []);

  // Estructura de navegación
  const menuItems = [
    { 
      name: 'Servicios', 
      path: '/servicios', 
      id: 'servicios',
      tooltip: 'Soluciones digitales para tu negocio'
    },
    { 
      name: 'Proyectos', 
      path: '/proyectos', 
      id: 'proyectos',
      tooltip: 'Casos de éxito y trabajos recientes'
    },
    { 
      name: 'Tecnologías', 
      path: '/tecnologias', 
      id: 'tecnologias',
      tooltip: 'Herramientas y frameworks que utilizamos'
    },
    { 
      name: 'Contacto', 
      path: '/contacto', 
      id: 'contacto',
      tooltip: 'Conecta con nuestro equipo'
    }
  ];
  
  // Cerrar el menú al hacer clic fuera de él
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && !e.target.closest('.mobile-menu') && !e.target.closest('.mobile-toggle')) {
        setMenuOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen]);

  return (
    <header className={`modern-header ${scrolled ? 'header-scrolled' : ''}`}>
      {/* Barra de progreso de scroll */}
      <div ref={scrollProgressRef} className="scroll-progress " />
      
      <div className="header-container">
        {/* Logo */}
        <div className="logo-wrapper micro-interaction">
          <Link href="/" className="flex items-center">
            <span className="logo-text">TEGRITY</span>
            <span className="logo-separator"></span>
            <span className="logo-text">SOFT</span>
          </Link>
        </div>

        {/* Navegación Desktop */}
        <div className="nav-wrapper">
          
          
          <ul className="nav-list">
            {menuItems.map((item) => (
              <li key={item.id} className="nav-item">
                <Link
                  href={item.path}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.name}
                </Link>
                {/* Tooltip informativo */}
                <div className="nav-tooltip">
                  {item.tooltip}
                </div>
              </li>
            ))}
          </ul>
          
          <button className="cta-button micro-interaction">
            Consulta
          </button>
        </div>

        {/* Menú Móvil Toggle */}
        <button 
          className={`mobile-toggle ${menuOpen ? 'menu-open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
          aria-expanded={menuOpen}
        >
          <span className="toggle-line"></span>
          <span className="toggle-line"></span>
          <span className="toggle-line"></span>
        </button>
      </div>

      {/* Menú Móvil */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          {menuItems.map((item) => (
            <li key={item.id} className="mobile-nav-item">
              <Link
                href={item.path}
                className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
          
          <li className="mobile-nav-item">
            <button className="cta-button mobile-cta-button micro-interaction">
              Consulta
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}