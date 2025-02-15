import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative py-6 text-white" style={{ background: '#110F10' }}>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80 pointer-events-none"></div>
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-white opacity-20 rounded-full w-1.5 h-1.5 animate-pulse" style={{ top: '25%', left: '10%' }}></div>
        <div className="absolute bg-white opacity-15 rounded-full w-1 h-1 animate-pulse" style={{ top: '60%', left: '35%' }}></div>
        <div className="absolute bg-white opacity-20 rounded-full w-2 h-2 animate-pulse" style={{ top: '40%', left: '80%' }}></div>
      </div>

      <div className="container relative mx-auto px-4 text-center">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4 mb-4">
          <Link to="/aviso-legal" className="text-sm hover:text-gray-300">Aviso Legal</Link>
          <Link to="/privacidad" className="text-sm hover:text-gray-300">Política de Privacidad</Link>
          <Link to="/cookies" className="text-sm hover:text-gray-300">Política de Cookies</Link>
        </div>
        <p className="text-sm font-light">
          © {new Date().getFullYear()} Stellaris Code. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
