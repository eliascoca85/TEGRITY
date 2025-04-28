'use client';

import Image from "next/image";
import Spline from '@splinetool/react-spline';
import Particles from './components/Particles';
import Servicios from "./components/servicios/servicios";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Contenido principal con Spline integrado */}
      <main className="flex flex-col gap-[32px] items-center p-0 relative">
        {/* Hero section con Spline y Particles como fondo */}
        <div className="relative w-full h-screen">
          {/* Particles como background */}
          <div className="absolute inset-0 z-0">
            <Particles
              particleColors={['#ffffff', '#ffffff']}
              particleCount={50}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover={false} 
              alphaParticles={false}
              disableRotation={false}
              className="w-full h-full"
            />
          </div>
          
          {/* Spline sobre las partículas */}
          <div className="relative z-10 w-full h-full">
            <Spline
              scene="https://prod.spline.design/Q1OdUIhPK7cN3iTG/scene.splinecode"
              className="w-full h-full"
            />
          </div>
          
          {/* Div negro modificado para ocupar todo el ancho de la pantalla */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#000000] z-20"></div>
        </div>
        
        {/* Resto del contenido principal */}
        <Servicios />
      </main>
      
      {/* Footer se mantiene en la parte inferior */}
      <footer className="flex gap-[24px] flex-wrap items-center justify-center p-8">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
