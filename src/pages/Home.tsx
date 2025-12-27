import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import SEO from '../components/SEO';
import Team from '../components/Team';
import Clients from '../components/Clients';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <SEO />
        <Team />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
