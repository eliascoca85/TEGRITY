import React from 'react';
import './style.css';
import Image from 'next/image';

export default function Tecnologias() {
  // Categorías de tecnologías
  const techCategories = [
    {
      id: 'frontend',
      name: 'FRONTEND',
      technologies: [
        { name: 'React', level: 95, icon: '/vercel.svg', description: 'Biblioteca JavaScript para construir interfaces de usuario' },
        { name: 'Next.js', level: 90, icon: '/next.svg', description: 'Framework React con renderizado del lado del servidor' },
        { name: 'Vue.js', level: 85, icon: '/vercel.svg', description: 'Framework JavaScript progresivo' },
        { name: 'Flutter', level: 75, icon: '/vercel.svg', description: 'SDK de UI multiplataforma de Google' }
      ]
    },
    {
      id: 'backend',
      name: 'BACKEND',
      technologies: [
        { name: 'Node.js', level: 88, icon: '/vercel.svg', description: 'Entorno de ejecución JavaScript del lado del servidor' },
        { name: 'Laravel', level: 92, icon: '/vercel.svg', description: 'Framework PHP para desarrollo web' },
        { name: 'PHP', level: 85, icon: '/vercel.svg', description: 'Lenguaje de programación del lado del servidor' },
        { name: 'Python', level: 80, icon: '/vercel.svg', description: 'Lenguaje de programación versátil y potente' }
      ]
    },
    {
      id: 'database',
      name: 'BBDD',
      technologies: [
        { name: 'MySQL', level: 90, icon: '/vercel.svg', description: 'Sistema de gestión de bases de datos relacionales' },
        { name: 'PostgreSQL', level: 85, icon: '/vercel.svg', description: 'Sistema de base de datos relacional orientado a objetos' },
        { name: 'SQLite', level: 75, icon: '/vercel.svg', description: 'Sistema de gestión de bases de datos SQL ligero' },
        { name: 'MongoDB', level: 78, icon: '/vercel.svg', description: 'Base de datos NoSQL orientada a documentos' }
      ]
    }
  ];

  return (
    <section id="tecnologias" className="tecnologias-section w-full py-20">
      <div className="tech-scanlines"></div>
      <div className="tech-noise"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="tech-header text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 terminal-text" data-text="TECNOLOGÍAS">TECNOLOGÍAS</h2>
          <div className="cyber-line"></div>
          <p className="mt-6 max-w-2xl mx-auto text-gray-300 tech-desc">
            Nuestro arsenal digital. Dominamos estas herramientas para crear 
            experiencias únicas y soluciones a medida.
          </p>
        </div>
        
        {techCategories.map((category, index) => (
          <div key={category.id} className="tech-category mb-16">
            <div className="category-header">
              <h3 className="category-title">{category.name}</h3>
              <div className="category-line"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {category.technologies.map((tech, idx) => (
                <div key={`${category.id}-${idx}`} className="tech-card">
                  <div className="tech-card-inner">
                    <div className="tech-icon-wrapper">
                      <Image 
                        src={tech.icon} 
                        alt={tech.name}
                        width={40}
                        height={40}
                        className="tech-icon"
                      />
                    </div>
                    <h4 className="tech-name">{tech.name}</h4>
                    <div className="skill-bar-container">
                      <div className="skill-bar-wrapper">
                        <div 
                          className="skill-bar" 
                          style={{ width: `${tech.level}%` }}
                          data-level={tech.level}
                        >
                          <span className="skill-level">{tech.level}%</span>
                        </div>
                      </div>
                    </div>
                    <p className="tech-description">{tech.description}</p>
                  </div>
                  
                  <div className="corner top-left"></div>
                  <div className="corner top-right"></div>
                  <div className="corner bottom-left"></div>
                  <div className="corner bottom-right"></div>
                </div>
              ))}
            </div>
          </div>
        ))}
        
        <div className="tech-cta text-center mt-10">
          <div className="tech-cta-text mb-8">
            <div className="cta-line"></div>
            <p>¿Necesitas una solución tecnológica específica?</p>
            <div className="cta-line"></div>
          </div>
          <button className="tech-button">
            <span className="tech-button-text">CONTÁCTANOS</span>
            <span className="tech-button-glitch"></span>
          </button>
        </div>
      </div>
    </section>
  );
}