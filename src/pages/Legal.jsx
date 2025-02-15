import React from 'react';

const Legal = () => {
  return (
    <div className="min-h-screen bg-[#110F10] text-white">
      <div className="container mx-auto px-4 py-8 mt-[100px]">
        <h1 className="text-3xl font-bold mb-4">Aviso Legal</h1>
        <p>
          Este Aviso Legal regula el uso del sitio web de Stellaris Code y establece las condiciones de uso.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6">Propiedad Intelectual</h2>
        <p>
          Todos los contenidos, diseños, logotipos y textos del sitio web son propiedad de Stellaris Code y están protegidos por la legislación vigente en materia de propiedad intelectual.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6">Responsabilidad</h2>
        <p>
          Stellaris Code no se hace responsable de los daños o perjuicios derivados del uso de la información contenida en el sitio web.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6">Condiciones de Uso</h2>
        <p>
          El acceso y uso del sitio web implica la aceptación de las presentes condiciones de uso y de la normativa aplicable.
        </p>
        
        <p className="mt-6">Fecha de última actualización: 15/02/2025</p>
      </div>
    </div>
  );
};

export default Legal;
