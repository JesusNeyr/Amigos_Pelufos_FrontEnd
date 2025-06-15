// pages/Peces.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Productos from '../components/Productos';
function Peces() {
  return (
    <div>
      <Header />
      <main style={{ padding: '20px' }}>
        <h1>Productos para Peces</h1>
        <Productos categoria="perros"/>

      </main>
      <Footer />
    </div>
  );
}

export default Peces;
