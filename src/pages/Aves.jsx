// pages/Aves.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Productos from '../components/Productos'
function Aves() {
  return (
    <div>
      <Header />
      <main style={{ padding: '20px' }}>
        <h1>Productos para Aves</h1>
        <Productos categoria="aves"/>
      </main>
      <Footer />
    </div>
  );
}

export default Aves;
