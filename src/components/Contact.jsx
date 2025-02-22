// src/components/Contact.jsx
import React, { useState, useRef } from 'react';
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
// Componente del Spinner
//
function LoadingSpinner() {
  return (
    <div className="loading-spinner">
      <svg className="spinner" viewBox="0 0 50 50">
        <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5" />
      </svg>
    </div>
  );
}

//
// Componente principal de Contact
//
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  // URL de tu API de Google Apps Script
  const apiURL =
    'https://script.google.com/macros/s/AKfycbw4qQOGaT0f6E7Xtw4eEXyqf1xK3MgNqMEgyx44x1-KZ0tEPGTO1OnJJ2sdcLOjMMB01Q/exec';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Enviando...');

    try {
      const response = await fetch(apiURL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain" // Apps Script espera text/plain, no application/json
        },
        body: JSON.stringify(formData),
        mode: "no-cors" // Para evitar bloqueos de CORS
      });

      setStatus('Mensaje enviado con éxito.');
      setFormData({ name: "", email: "", message: "" });
      
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setStatus('Error al enviar el mensaje.');
    }
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
              value={formData.name}
              onChange={handleChange}
              required
            />
            <motion.input
              whileHover={{ scale: 1.05 }}
              whileFocus={{ scale: 1.05 }}
              type="email"
              name="email"
              placeholder="Correo Electrónico"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <motion.textarea
              whileHover={{ scale: 1.05 }}
              whileFocus={{ scale: 1.05 }}
              name="message"
              placeholder="Mensaje"
              value={formData.message}
              onChange={handleChange}
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
          <div className="status-container">
            {status === 'Enviando...' && <LoadingSpinner />}
            {status && <p className="status">{status}</p>}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
