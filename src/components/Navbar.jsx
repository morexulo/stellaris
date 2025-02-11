// src/components/Navbar.jsx
import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Función para actualizar el estado según el scroll
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Limpiar el listener cuando se desmonte el componente
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determina las clases del header según el estado de scroll
  const headerClasses = scrolled
    ? "bg-black-900 shadow-lg transition-all duration-300"
    : "bg-transparent transition-all duration-300";

  return (
    <header
      className={`${headerClasses} fixed w-full z-50`}
      style={{ backdropFilter: 'blur(10px)' }} // Efecto de desenfoque para modernizar (opcional)
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-white">
        Stellaris Code
        </div>
        <ul className="flex space-x-4">
          <li>
            <a href="#hero" className="text-white hover:text-gray-300">
              Inicio
            </a>
          </li>
          <li>
            <a href="#services" className="text-white hover:text-gray-300">
              Servicios
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-gray-300">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
