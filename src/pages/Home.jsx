import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      {/* Hero se renderiza full screen */}
      <Hero />
      <Services />
      <Contact />
      
    </>
  );
};

export default Home;
