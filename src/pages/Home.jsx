import React from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carrousel';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Header />

      <main>
        <Carousel />
        {/* Aquí puedes agregar más contenido como cards, promociones, etc. */}
      </main>

      <Footer />
    </div>
  );
}

export default Home;
