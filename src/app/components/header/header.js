'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import './styles.css'; // Importación de los estilos

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Efecto para controlar el estado del scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Efecto para animación de carga inicial
  useEffect(() => {
    const header = document.getElementById('main-header');
    setTimeout(() => {
      header.classList.add('loaded');
    }, 300);
  }, []);

  return (
    <header 
      id="main-header" 
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out 
        ${scrolled ? 'bg-black/80 backdrop-blur-md py-2' : 'bg-transparent py-4'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="group flex items-center">
              <span className="text-white font-bold text-2xl tracking-wider relative overflow-hidden group-hover:text-white/90 transition-colors text-glow">
                <span className="inline-block transform transition-transform duration-500 group-hover:translate-y-full">TEGRITY</span>
                <span className="absolute top-0 left-0 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500">TEGRITY</span>
              </span>
              <span className="ml-1 text-white font-bold text-2xl tracking-wider relative overflow-hidden group-hover:text-white/90 transition-colors text-glow">
                <span className="inline-block transform transition-transform duration-500 group-hover:translate-y-full">- SOFT</span>
                <span className="absolute top-0 left-0 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500">- SOFT</span>
              </span>
              <div className="ml-2 w-2 h-2 bg-white rounded-full animate-pulse soft-glow"></div>
            </Link>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Servicios', 'Proyectos', 'Tecnologías', 'Contacto'].map((item, index) => (
              <Link
                key={index}
                href={`/${item.toLowerCase()}`}
                className="header-link relative text-white/80 hover:text-white group py-1"
              >
                <span>{item}</span>
              </Link>
            ))}
            
            <button className="bg-transparent border border-white/20 text-white px-4 py-1 rounded-full hover:bg-white/10 transition-colors duration-300 flex items-center group">
              <span>Consulta</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </nav>

          {/* Hamburger Menu - Mobile */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8"
          >
            <span className={`bg-white h-[2px] w-6 mb-1 transform transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`bg-white h-[2px] w-6 mb-1 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`bg-white h-[2px] w-6 transform transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 ease-in-out ${menuOpen ? 'mobile-menu-open' : 'mobile-menu-closed'}`}>
          <nav className="flex flex-col space-y-4 pb-4">
            {['Servicios', 'Proyectos', 'Tecnologías', 'Contacto'].map((item, index) => (
              <Link
                key={index}
                href={`/${item.toLowerCase()}`}
                className="text-white/80 hover:text-white px-2 py-1"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            
            <button className="bg-transparent border border-white/20 text-white px-4 py-2 rounded-full hover:bg-white/10 transition-colors duration-300 flex items-center justify-center mt-2">
              <span>Consulta Gratuita</span>
              <span className="ml-2">→</span>
            </button>
          </nav>
        </div>
      </div>

      {/* Animated Line */}
      <div className={`h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent w-full opacity-50 ${scrolled ? 'opacity-30' : 'opacity-0'} transition-opacity duration-500`}></div>
      
      {/* Glowing dots for futuristic effect */}
      <div className="absolute left-1/4 -bottom-1 w-1 h-1 bg-blue-400 rounded-full glow-dot hidden md:block"></div>
      <div className="absolute left-2/4 -bottom-1 w-1 h-1 bg-purple-400 rounded-full glow-dot hidden md:block"></div>
      <div className="absolute left-3/4 -bottom-1 w-1 h-1 bg-blue-400 rounded-full glow-dot hidden md:block"></div>
    </header>
  );
}