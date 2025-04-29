'use client';

import Image from "next/image";
import HeroSection from "./components/herosection/herosection";
import Servicios from "./components/servicios/servicios";
import Proyectos from "./components/proyectos/proyectos";
import Tecnologias from "./components/tecnologias/tecnologias";
import Contactos from "./components/contactos/contactos";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Contenido principal */}
      <main className="flex flex-col gap-[32px] items-center p-0 relative">
        {/* Hero section */}
        <HeroSection />
        
        {/* Servicios section */}
        <Servicios />

        {/* Proyectos section */}
        <Proyectos />
        
        {/* Tecnologias section */}
        <Tecnologias />
        
        {/* Contactos section */}
        <Contactos />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
