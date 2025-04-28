import React from 'react';
import './styles.css';

export default function Servicios() {
  const servicePlans = [
    {
      name: "BASCIC",
      price: "$150",
      description: "Para proyectos personales y startups",
      features: [
        "Hasta 4 páginas web",
        "Diseño responsive básico",
        "Soporte por email",
        "Hosting compartido",
        "Dominio gratis por 1 año"
      ],
      popular: false
    },
    {
      name: "PRO",
      price: "$200",
      description: "Para negocios en crecimiento",
      features: [
        "Diseño web completo",
        "Desarrollo front-end avanzado",
        "Soporte prioritario",
        "Hosting premium",
        "SEO básico incluido"
      ],
      popular: true
    },
    {
      name: "ENTERPRISE",
      price: "$499",
      description: "Soluciones a la medida",
      features: [
        "Desarrollo full-stack completo",
        "Aplicaciones web y móviles",
        "Soporte 24/7",
        "Infraestructura cloud escalable",
        "Consultoría tecnológica"
      ],
      popular: false
    }
  ];

  return (
    <section className="services-section w-full py-20">
      <div className="container mx-auto px-4">
        <div className="services-header text-center mb-20">
          <h2 className="text-5xl font-bold mb-4 glitch-text" data-text="SERVICIOS">SERVICIOS</h2>
          <div className="cyber-line"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {servicePlans.map((plan, index) => (
            <div key={index} className="service-card">
              {plan.popular && (
                <div className="popular-badge">
                  RECOMENDADO
                </div>
              )}
              <div className="card-content h-full flex flex-col">
                <div className="card-header p-6">
                  <h3 className="cyber-text text-2xl font-bold mb-1">{plan.name}</h3>
                  <div className="text-3xl font-bold pricing-text mb-2">{plan.price}</div>
                  <p className="text-sm opacity-80">{plan.description}</p>
                </div>
                
                <div className="card-body p-6 flex-grow">
                  <ul className="space-y-4">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center cyber-list-item">
                        <span className="cyber-marker mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="card-footer p-6">
                  <button className="cyber-button w-full">
                    SELECCIONAR
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}