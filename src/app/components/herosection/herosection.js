'use client';

import Spline from '@splinetool/react-spline';
import Particles from '../Particles';
import './styles.css';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Efecto de aparición al cargar
    setIsVisible(true);
    
    // Detectar si es un dispositivo móvil
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Comprobar al cargar
    checkIfMobile();
    
    // Escuchar cambios de tamaño de ventana
    window.addEventListener('resize', checkIfMobile);
    
    // Limpiar event listener
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      
      {/* Particles como background */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={['#ffffff', '#00eeff']}
          particleCount={60}
          particleSpread={10}
          speed={0.2}
          particleBaseSize={80}
          moveParticlesOnHover={true} 
          alphaParticles={false}
          disableRotation={false}
          className="w-full h-full"
        />
      </div>
      
      {/* Div de presentación con estilo retro arcade */}
      <div className={`absolute top-[calc(20%_-_15px)]  left-10 md:left-40 z-30 max-w-2xl arcade-panel ${isVisible ? 'animate-in' : ''}`}>
        <div className="arcade-scanline"></div>
        <div className="arcade-glow"></div>
        
        <div className="arcade-header">
          <span className="blink-text">READY</span> 
        </div>
        
        <div className="glitch-container">
          <h1 className="arcade-title">
            <span data-text="TEGRITY">TEGRITY</span>
            <span data-text="SOFT" className="arcade-highlight">SOFT</span>
          </h1>
        </div>
        
        <div className="vhs-effect">
          <p className="arcade-desc">Para aquellos que no se conforman con ser buenos, sino con ser referentes. Elevamos tu marca con desarrollo web de una sofisticación sin precedentes.</p>
        </div>
        
        <div className="flex flex-wrap gap-4 mt-8">
          <button className="arcade-btn primary">
            <span className="btn-shadow"></span>
            <span className="btn-edge"></span>
            <span className="btn-front">CONSULTA</span>
          </button>
          
        </div>
        
        <div className="arcade-stats">
            
          <div className="stats-display">
            <div className="counter-container">
              <div className="counter-icon">
                {/* Colorful circle icons */}
                <div className="counter-circle "></div>
                <div className="counter-circle "></div>
                <div className="counter-circle "></div>
                <div className="counter-circle "></div>
              </div>
              <div className="counter-text">
                <div className="stats-digits">10K+</div>
                <div className="stats-label">HAPPY CLIENTS</div>
              </div>
            </div>
          </div>

          <div className="power-bars">
            <div className="power-bar"></div>
            <div className="power-bar"></div>
            <div className="power-bar"></div>
          </div>
        </div>
      </div>
      
      {/* Spline - Solo mostrar en dispositivos no móviles */}
      {!isMobile && (
        <div className="absolute inset-0 z-10 flex items-center justify-center w-full h-full">
          <div className="w-full h-full spline-container">
            <Spline
              scene="https://prod.spline.design/Q1OdUIhPK7cN3iTG/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      )}
      
      {/* Scanner effect overlay */}
      <div className="scanner-effect"></div>
      <div className="absolute bottom-0 right-0 w-full h-14.5 bg-[#000000] z-900"></div>
    </div>
  );
}