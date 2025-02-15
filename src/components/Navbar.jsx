// src/components/Navbar.jsx
import React, { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función para cambiar el idioma usando Google Translate
  const changeLanguage = (lang) => {
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event("change"));
    }
  };

  const headerClasses = scrolled
    ? "bg-black-900 shadow-lg transition-all duration-300"
    : "bg-transparent transition-all duration-300";

  return (
    <header className={`${headerClasses} fixed w-full z-50`} style={{ backdropFilter: 'blur(10px)' }}>
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Grupo Izquierda: Marca + Language Switcher */}
        <div className="flex items-center space-x-4">
          <a href="/" className="text-xl font-bold text-white hover:text-gray-300">
            Stellaris Code
          </a>
          {/* Language Switcher para escritorio */}
          <div className="hidden md:flex items-center space-x-2">
            <button onClick={() => changeLanguage("es")} className="flex items-center space-x-1 p-2 rounded hover:bg-gray-700 transition text-white">
              <span>🇪🇸</span>
            </button>
            <button onClick={() => changeLanguage("en")} className="flex items-center space-x-1 p-2 rounded hover:bg-gray-700 transition text-white">
              <span>🇬🇧</span>
            </button>
          </div>
        </div>
        {/* Grupo Derecha: Enlaces de navegación (desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="/#hero" className="text-white hover:text-gray-300">Inicio</a>
          <Link to="/productos" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-gray-300">Productos</Link>
          <a href="/#services" className="text-white hover:text-gray-300">Servicios</a>
          <a href="/#contact" className="text-white hover:text-gray-300">Contacto</a>
        </div>
        {/* Botón de menú para móviles */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white focus:outline-none">
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>
      {/* Menú desplegable para móviles */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/80 min-h-screen flex flex-col items-center justify-center">
          <ul className="flex flex-col space-y-4 text-center">
            <li>
              <a href="/#hero" onClick={() => setMobileMenuOpen(false)} className="block text-white hover:text-gray-300">
                Inicio
              </a>
            </li>
            <li>
              <a href="/productos" onClick={() => setMobileMenuOpen(false)} className="block text-white hover:text-gray-300">
                Productos
              </a>
            </li>
            <li>
              <a href="/#services" onClick={() => setMobileMenuOpen(false)} className="block text-white hover:text-gray-300">
                Servicios
              </a>
            </li>
            <li>
              <a href="/#contact" onClick={() => setMobileMenuOpen(false)} className="block text-white hover:text-gray-300">
                Contacto
              </a>
            </li>
          </ul>
          {/* Language Switcher para móviles */}
          <div className="mt-6 flex space-x-4">
            <button onClick={() => { changeLanguage("es"); setMobileMenuOpen(false); }} className="p-2 rounded hover:bg-gray-700 transition text-white">
              🇪🇸 Español
            </button>
            <button onClick={() => { changeLanguage("en"); setMobileMenuOpen(false); }} className="p-2 rounded hover:bg-gray-700 transition text-white">
              🇬🇧 English
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
