import React from 'react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-[#110F10] text-white">
      <div className="container mx-auto px-4 py-8 mt-[100px]">
        <h1 className="text-3xl font-bold mb-4">Política de Privacidad</h1>
        <p>
          En Stellaris Code, nos comprometemos a proteger su privacidad. Esta Política de Privacidad describe cómo recopilamos, utilizamos y protegemos su información personal.
        </p>

        <h2 className="text-2xl font-semibold mt-6">1. Información que Recopilamos</h2>
        <p>
          Recopilamos información que usted nos proporciona voluntariamente a través de formularios de contacto, suscripciones y otras interacciones en el sitio web. También utilizamos tecnologías como cookies para recopilar información automáticamente.
        </p>

        <h2 className="text-2xl font-semibold mt-6">2. Uso de la Información</h2>
        <p>
          Utilizamos la información recopilada para:
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li>Mejorar la experiencia del usuario en nuestro sitio web.</li>
          <li>Personalizar contenido y publicidad.</li>
          <li>Responder a consultas y proporcionar soporte.</li>
          <li>Analizar métricas de tráfico y comportamiento en el sitio.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">3. Compartición de Datos</h2>
        <p>
          No vendemos ni compartimos su información personal con terceros, salvo cuando sea necesario para prestar un servicio solicitado o cumplir con obligaciones legales.
        </p>

        <h2 className="text-2xl font-semibold mt-6">4. Seguridad de los Datos</h2>
        <p>
          Implementamos medidas de seguridad para proteger su información contra accesos no autorizados, alteraciones o divulgaciones indebidas.
        </p>

        <h2 className="text-2xl font-semibold mt-6">5. Sus Derechos</h2>
        <p>
          Usted tiene derecho a acceder, rectificar o eliminar sus datos personales. Si desea ejercer estos derechos, puede contactarnos a través de nuestro formulario de contacto.
        </p>

        <h2 className="text-2xl font-semibold mt-6">6. Cambios en esta Política</h2>
        <p>
          Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. Cualquier cambio será notificado en esta página.
        </p>

        <p className="mt-6">Fecha de última actualización: 15/02/2025 </p>
      </div>
    </div>
  );
};

export default Privacy;
