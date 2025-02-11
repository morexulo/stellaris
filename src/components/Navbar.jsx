// src/components/Navbar.jsx
import React, { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // Importa los íconos de menú

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Actualiza el estado según el scroll
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Limpia el listener al desmontar el componente
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determina las clases del header según el scroll
  const headerClasses = scrolled
    ? "bg-black-900 shadow-lg transition-all duration-300"
    : "bg-transparent transition-all duration-300";

  return (
    <header
      className={`${headerClasses} fixed w-full z-50`}
      style={{ backdropFilter: 'blur(10px)' }} // Efecto de desenfoque
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-white">
        <a href="/" className="text-white hover:text-gray-300">
              Stellaris Code
            </a>
        </div>
        {/* Menú para pantallas grandes (desktop) */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <a href="/#hero" className="text-white hover:text-gray-300">
              Inicio
            </a>
          </li>
          <li>
            <a href="/productos" className="text-white hover:text-gray-300">
              Productos
            </a>
          </li>
          <li>
            <a href="/#services" className="text-white hover:text-gray-300">
              Servicios
            </a>
          </li>
          <li>
            <a href="/#contact" className="text-white hover:text-gray-300">
              Contacto
            </a>
          </li>
        </ul>
        {/* Botón hamburguesa para móviles */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>
      {/* Menú desplegable para móviles */}
      {mobileMenuOpen && (
  <div className="md:hidden bg-black/80 min-h-screen flex items-center justify-center">
    <ul className="flex flex-col space-y-4 text-center">
      <li>
        <a
          href="#hero"
          onClick={() => setMobileMenuOpen(false)}
          className="block text-white hover:text-gray-300"
        >
          Inicio
        </a>
      </li>
      <li>
        <a
          href="#services"
          onClick={() => setMobileMenuOpen(false)}
          className="block text-white hover:text-gray-300"
        >
          Servicios
        </a>
      </li>
      <li>
        <a
          href="#contact"
          onClick={() => setMobileMenuOpen(false)}
          className="block text-white hover:text-gray-300"
        >
          Contacto
        </a>
      </li>
    </ul>
  </div>
)}

    </header>
  );
};

export default Navbar;
