// src/pages/Products.jsx
import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    title: "Mantenimiento Premium",
    price: "€250.00 EUR",
    frequency: "Per month",
    description: "Servicio de mantenimiento integral que incluye actualizaciones constantes, soporte prioritario y optimización del rendimiento. 🚀 Mantén tu sitio al día con la última tecnología, garantía de seguridad y un soporte dedicado 24/7. ⭐ Ideal para empresas que buscan estar siempre a la vanguardia y sin contratiempos.",
    link: "https://buy.stripe.com/28og0z7Aj5lt6XK5kq"
  },
  {
    id: 2,
    title: "Mantenimiento Básico",
    price: "€50.00 EUR",
    frequency: "Per month",
    description: "Plan básico de mantenimiento para sitios web, con actualizaciones regulares y soporte esencial. 🔧 Asegura la estabilidad de tu sitio web con revisiones periódicas y optimizaciones simples. 👍 Perfecto para proyectos pequeños y medianos que requieren un cuidado continuo sin complicaciones.",
    link: "https://buy.stripe.com/3cs01Bg6P9BJ95SbIM",
  },
  {
    id: 3,
    title: "Servicios Web",
    price: "€1,500.00 EUR",
    description: "Desarrollo web a medida, 🌐 adaptado a las necesidades de tu negocio, con diseño único y funcionalidades específicas.🌟 Disfruta de una experiencia digital única y escalable para crecer con tu empresa.",
    link: "https://buy.stripe.com/fZeaGf5sb4hp1DqaEE",
  },
  {
    id: 4,
    title: "E-commerce",
    price: "€1,200.00 EUR",
    description: "Tienda en línea con pasarela de pago integrada, diseño responsivo y una experiencia de usuario optimizada para maximizar las conversiones. 🛒 Incrementa tus ventas con una plataforma de comercio electrónico segura y fácil de usar. 💳 Incluye integraciones modernas y soporte técnico para asegurar el éxito de tu negocio digital.",
    link: "https://buy.stripe.com/bIY7u32fZ6pxeqc4gh",
  },
  {
    id: 5,
    title: "Web Corporativa",
    price: "€800.00 EUR",
    description: "Sitio web profesional para empresas, con múltiples secciones, SEO optimizado y un diseño elegante que refleja la identidad de tu marca. 🌐 Transmite confianza y profesionalismo, ofreciendo a tus clientes la información necesaria de manera clara y atractiva. 📈 Mejora tu imagen corporativa y posiciona tu negocio en el mercado.",
    link: "https://buy.stripe.com/3csg0zcUD7tBfugdQS"
  },
  {
    id: 6,
    title: "Landing Page Básica",
    price: "€300.00 EUR",
    description: "Página de destino enfocada en la conversión, con un diseño minimalista, contenido impactante y optimización para captar leads. 🎯 Atrae a tus visitantes con una propuesta clara y directa, diseñada para maximizar la captación de clientes. 💼 Ideal para campañas de marketing digital y promociones específicas.",
    link: "https://buy.stripe.com/8wM5lV9Irg07a9WcMP",
  },
];

const Products = () => {
  // Ordenar los productos de mayor a menor precio
  const sortedProducts = [...products].sort((a, b) => {
    const priceA = parseFloat(a.price.replace(/[^\d.]/g, ''));
    const priceB = parseFloat(b.price.replace(/[^\d.]/g, ''));
    return priceB - priceA;
  });

  return (
    <div className="min-h-screen flex space-x-8" style={{ backgroundColor: '#110F10' }}>
      {/* Columna Izquierda: Datos del producto (scrollable) */}
      <div className="w-full md:w-1/2 overflow-y-scroll snap-y snap-mandatory h-screen pl-16 pr-8">
        {sortedProducts.map((product) => (
          <section key={product.id} className="snap-start flex flex-col justify-center items-start p-8 h-screen">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2x1"
            >
              <h2
                className="whitespace-nowrap text-4xl md:text-5xl font-bold mb-4 text-white"
                style={{ textShadow: '0 0 10px rgba(0,0,0,0.5)' }}
              >
                {product.title}
              </h2>
              <p className="text-2xl mb-2 text-white">{product.price}</p>
              {product.frequency && (
                <p className="text-xl mb-4 text-gray-300">{product.frequency}</p>
              )}
              <p className="text-lg mb-6 text-gray-300 ">{product.description}</p>
              <motion.a
                href={product.link}
                whileHover={{ scale: 1.05 }}
                className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold transition duration-300"
                target="_blank"
              >
                Comprar
              </motion.a>
            </motion.div>
          </section>
        ))}
      </div>

      {/* Columna Derecha: Imagen fija (GIF) */}
      <div className="w-2/6 hidden md:flex">
        <div className="sticky top-0 h-screen flex items-center justify-start ml-auto">
          <img
            src="/product.gif"
            alt="Imagen fija"
            className="max-h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
