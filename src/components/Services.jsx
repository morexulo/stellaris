// src/components/Services.jsx
import React from 'react';
import './Services.css'; // Archivo CSS con animaciones y estilos adicionales

// Definición de los servicios (3 items), usando la misma imagen para todos
const services = [
  {
    title: "Desarrollo Web",
    gif: "/web1.gif",
    description:
      "Sitios web responsivos y de alto rendimiento que elevan tu presencia online.",
    details: [
      "Diseño personalizado",
      "Optimización SEO",
      "Integraciones modernas",
    ],
  },
  {
    title: "Consultoria Privada",
    gif: "/web2.gif",
    description:
      "Estrategias innovadoras y asesoramiento para impulsar tu transformación digital.",
    details: [
      "Análisis de negocio",
      "Estrategia tecnológica",
      "Implementación efectiva",
    ],
  },
  {
    title: "Software a Medida",
    gif: "/web3.gif",
    description:
      "Aplicaciones personalizadas que se adaptan a las necesidades de tu negocio.",
    details: [
      "Escalable y seguro",
      "Desarrollo ágil",
      "Soporte técnico continuo",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-20" style={{ background: "#110F10" }}>
      {/* Fondo: Gradiente y efectos espaciales */}
      <div className="absolute inset-0 z-0">
        {/* Gradiente para dar profundidad */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80"></div>

        {/* Efectos espaciales: estrellas y nebulosas */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Estrellas existentes */}
          <div className="absolute bg-white opacity-20 rounded-full w-2 h-2 animate-pulse" style={{ top: '10%', left: '20%' }}></div>
          <div className="absolute bg-white opacity-20 rounded-full w-1.5 h-1.5 animate-pulse" style={{ top: '30%', left: '70%' }}></div>
          <div className="absolute bg-white opacity-20 rounded-full w-1 h-1 animate-pulse" style={{ top: '50%', left: '40%' }}></div>
          <div className="absolute bg-white opacity-20 rounded-full w-1.5 h-1.5 animate-pulse" style={{ top: '80%', left: '80%' }}></div>
          <div className="absolute bg-white opacity-20 rounded-full w-2 h-2 animate-pulse" style={{ top: '65%', left: '25%' }}></div>
          {/* Más estrellas */}
          <div className="absolute bg-white opacity-15 rounded-full w-1 h-1 animate-pulse" style={{ top: '20%', left: '50%' }}></div>
          <div className="absolute bg-white opacity-15 rounded-full w-2 h-2 animate-pulse" style={{ top: '75%', left: '40%' }}></div>
          <div className="absolute bg-white opacity-20 rounded-full w-1.5 h-1.5 animate-pulse" style={{ top: '40%', left: '80%' }}></div>
          {/* Nebulosas */}
          <div
            className="absolute w-[300px] h-[300px] bg-blue-500 opacity-30 rounded-full blur-3xl animate-pulse"
            style={{
              top: '50%',
              left: '25%',
              transform: 'translate(-50%, -50%)',
              animationDuration: '5s',
            }}
          ></div>
          <div
            className="absolute w-[300px] h-[300px] bg-purple-500 opacity-30 rounded-full blur-3xl animate-pulse"
            style={{
              top: '50%',
              left: '75%',
              transform: 'translate(-50%, -50%)',
              animationDuration: '5s',
            }}
          ></div>
          {/* Nebulosas adicionales */}
          <div
            className="absolute w-[200px] h-[200px] bg-pink-500 opacity-20 rounded-full blur-2xl animate-pulse"
            style={{
              top: '80%',
              left: '20%',
              transform: 'translate(-50%, -50%)',
              animationDuration: '7s',
            }}
          ></div>
          <div
            className="absolute w-[250px] h-[250px] bg-green-500 opacity-25 rounded-full blur-2xl animate-pulse"
            style={{
              top: '20%',
              left: '80%',
              transform: 'translate(-50%, -50%)',
              animationDuration: '7s',
            }}
          ></div>
        </div>
      </div>

      {/* Contenedor del contenido */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Título de la sección con degradado */}
        <h2 className="text-5xl font-bold text-center mb-12 tracking-wide text-transparent bg-clip-text bg-white">
          Servicios <span className="text-white">🚀</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card float bg-black/70 backdrop-blur-lg border border-white/30 rounded-xl p-8 transition-all duration-500 shadow-lg hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex flex-col items-center text-center h-full">
                {/* Imagen */}
                <img
                  src={service.gif}
                  alt={`${service.title} Imagen`}
                  className="w-40 h-40 mb-4"
                />
                {/* Título con degradado */}
                <h3 className="text-3xl font-semibold mb-4 whitespace-nowrap overflow-visible bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-500">
                  {service.title}
                </h3>
                {/* Descripción */}
                <p className="text-xl mb-4 break-words text-white">
                  {service.description}
                </p>
                {/* Lista de detalles */}
                <ul className="mb-6 space-y-2 text-white">
                  {service.details
                    .slice()
                    .sort((a, b) => b.length - a.length)
                    .map((item, i) => (
                      <li key={i} className="break-words">
                        {item}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
