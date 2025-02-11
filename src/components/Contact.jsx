// src/components/Contact.jsx
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import './Contact.css';

//
// Componente que renderiza un planeta giratorio
//
function RotatingPlanet() {
  const mesh = useRef();
  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.2;
    }
  });
  return (
    <mesh ref={mesh} position={[0, 0, 0]}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial color="#3b82f6" roughness={0.5} metalness={0.1} />
    </mesh>
  );
}

//
// Componente para el fondo 3D
//
function ThreeBackground() {
  return (
    <Canvas
      className="canvas"
      style={{ background: '#110F10' }}
      gl={{ alpha: false }} 
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <RotatingPlanet />
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
      />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate />
    </Canvas>
  );
}



//
// Componente principal de Contact
//
const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se implementaría la lógica de envío (por ejemplo, una petición a un API)
    console.log("Formulario enviado");
  };

  return (
    <div className="contact-page" id="contact">
      {/* Fondo 3D */}
      <div className="background">
        <ThreeBackground />
      </div>

      {/* Contenedor flotante del formulario */}
      <div className="form-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="glass-form"
        >
          <h2>Contacto</h2>
          <form onSubmit={handleSubmit}>
            <motion.input
              whileHover={{ scale: 1.05 }}
              whileFocus={{ scale: 1.05 }}
              type="text"
              name="name"
              placeholder="Nombre"
              required
            />
            <motion.input
              whileHover={{ scale: 1.05 }}
              whileFocus={{ scale: 1.05 }}
              type="email"
              name="email"
              placeholder="Correo Electrónico"
              required
            />
            <motion.textarea
              whileHover={{ scale: 1.05 }}
              whileFocus={{ scale: 1.05 }}
              name="message"
              placeholder="Mensaje"
              required
            ></motion.textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
            >
              Enviar
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
