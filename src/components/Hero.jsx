// src/components/Hero.jsx
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section
      className="relative flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/futuristic-mountain.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh"
      }}
      id="hero"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Desarrollo Web Profesional
        </h1>
        <p className="text-xl md:text-2xl text-white font-medium">
          <Typewriter
            words={[
              "Creamos sitios web rápidos.",
              "Optimizamos tu presencia digital.",
              "Llevamos tu negocio al siguiente nivel."
            ]}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={2000}
          />
        </p>
        {/* Botón con Link de React Router */}
        <button className="mt-8 px-8 py-3 bg-black text-white border border-black rounded-full hover:bg-white hover:text-black transition duration-300">
          <Link to="/productos">Productos</Link>
        </button>
      </div>
    </section>
  );
};

export default Hero;
