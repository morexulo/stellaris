// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="relative py-6 text-white" style={{ background: '#110F10' }}>
      {/* Gradiente para dar profundidad */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80 pointer-events-none"></div>
      
      {/* Algunas estrellas sutiles */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bg-white opacity-20 rounded-full w-1.5 h-1.5 animate-pulse"
          style={{ top: '25%', left: '10%' }}
        ></div>
        <div
          className="absolute bg-white opacity-15 rounded-full w-1 h-1 animate-pulse"
          style={{ top: '60%', left: '35%' }}
        ></div>
        <div
          className="absolute bg-white opacity-20 rounded-full w-2 h-2 animate-pulse"
          style={{ top: '40%', left: '80%' }}
        ></div>
      </div>

      <div className="container relative mx-auto px-4 text-center">
        <p className="text-sm font-light">
          © {new Date().getFullYear()} Stellaris Code. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
