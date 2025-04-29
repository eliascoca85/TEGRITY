import React from 'react';
import './style.css';
import Image from 'next/image';

export default function Proyectos() {
  // Lista de proyectos con información relevante
  const projects = [
    {
      id: 1,
      title: "ARCADE MARKET",
      category: "E-commerce",
      tech: "Next.js + Node.js",
      image: "/window.svg", // Placeholder - reemplazar con imágenes reales
      description: "Tienda online con diseño retro y funcionalidad moderna para una experiencia de usuario única.",
      url: "#",
      featured: true
    },
    {
      id: 2,
      title: "CYBER ADMIN",
      category: "Dashboard",
      tech: "React + Laravel",
      image: "/file.svg", // Placeholder - reemplazar con imágenes reales
      description: "Panel administrativo con estética cyberpunk para gestión de datos empresariales.",
      url: "#",
      featured: false
    },
    {
      id: 3,
      title: "PIXELTRACK",
      category: "Aplicación Móvil",
      tech: "Flutter + Firebase",
      image: "/globe.svg", // Placeholder - reemplazar con imágenes reales
      description: "App de seguimiento de métricas con interfaz pixelada y rendimiento de última generación.",
      url: "#",
      featured: false
    },
    {
      id: 4,
      title: "RETRO FINANCE",
      category: "Web App",
      tech: "Vue.js + Python",
      image: "/window.svg", // Placeholder - reemplazar con imágenes reales
      description: "Plataforma financiera con visualizaciones inspiradas en videojuegos clásicos.",
      url: "#",
      featured: true
    }
  ];

  return (
    <section id="proyectos" className="proyectos-section w-full py-20">
      <div className="container mx-auto px-4">
        <div className="proyectos-header text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 glitch-text" data-text="PROYECTOS">PROYECTOS</h2>
          <div className="cyber-line"></div>
          <p className="mt-6 max-w-2xl mx-auto text-gray-300 cyber-desc">
            Nuestra galería de casos de éxito. Soluciones digitales con estética retro-futurista
            y tecnología de vanguardia.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={`project-card ${project.featured ? 'project-featured' : ''}`}
            >
              <div className="card-inner">
                <div className="card-front">
                  <div className="image-container">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      width={64} 
                      height={64}
                      className="project-icon"
                    />
                    <div className="pixel-overlay"></div>
                  </div>
                  <div className="project-info">
                    <div className="project-category">{project.category}</div>
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-tech">{project.tech}</div>
                  </div>
                  <span className="view-details">VER DETALLES_</span>
                </div>
                <div className="card-back">
                  <div className="back-content">
                    <h4 className="back-title">{project.title}</h4>
                    <p className="back-description">{project.description}</p>
                    <div className="back-actions">
                      <a href={project.url} className="cyber-btn">EXPLORAR</a>
                      <button className="cyber-btn-alt">DETALLES</button>
                    </div>
                  </div>
                  <div className="corner-decoration top-left"></div>
                  <div className="corner-decoration top-right"></div>
                  <div className="corner-decoration bottom-left"></div>
                  <div className="corner-decoration bottom-right"></div>
                </div>
              </div>
              {project.featured && <div className="featured-badge">DESTACADO</div>}
            </div>
          ))}
        </div>
        
        <div className="proyectos-footer text-center mt-16">
          <button className="ver-mas-btn micro-interaction">
            <span className="btn-text">VER MÁS PROYECTOS</span>
            <span className="btn-icon">›</span>
          </button>
        </div>
      </div>
    </section>
  );
}