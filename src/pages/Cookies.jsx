import React from 'react';

const Cookies = () => {
  return (
    <div className="min-h-screen bg-[#110F10] text-white">
      <div className="container mx-auto px-4 py-8 mt-[100px]">
        <h1 className="text-3xl font-bold mb-4">Política de Cookies</h1>
        <p>
          Esta Política de Cookies describe en detalle qué son las cookies, cómo las utilizamos en nuestro sitio web y las opciones disponibles para gestionarlas.
        </p>
        <h2 className="text-2xl font-semibold mt-6">¿Qué son las cookies?</h2>
        <p>
          Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestro sitio web. Nos ayudan a recordar sus preferencias y a optimizar su experiencia de navegación, permitiendo el correcto funcionamiento y personalización del sitio.
        </p>
        <h2 className="text-2xl font-semibold mt-6">Cookies que utilizamos</h2>
        <p>
          En nuestro sitio empleamos distintos tipos de cookies:
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li>
            <strong>Cookies técnicas:</strong> Esenciales para el funcionamiento del sitio y la prestación de nuestros servicios.
          </li>
          <li>
            <strong>Cookies analíticas:</strong> Nos permiten conocer el comportamiento de los usuarios para mejorar continuamente el sitio.
          </li>
          <li>
            <strong>Cookies de terceros:</strong> Utilizadas para personalizar contenidos y anuncios, así como para ofrecer funciones de redes sociales.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6">Gestión de Cookies</h2>
        <p>
          Usted puede configurar su navegador para aceptar o rechazar las cookies. Tenga en cuenta que desactivar las cookies puede afectar la funcionalidad y el rendimiento del sitio. Para más detalles, consulte las instrucciones de su navegador.
        </p>
        <p className="mt-6">Fecha de última actualización: 15/02/2025</p>
      </div>
    </div>
  );
};

export default Cookies;
