// pages/Perros.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Productos from '../components/Productos';


function Perros() {
  return (
    <>
      <Header />
      <main style={{ padding: '20px' }}>
        <h1>Productos para Perros</h1>
        <Productos categoria="perros"/>
      </main>
      <Footer />
    </>
  );
}

export default Perros;
