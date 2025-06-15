// pages/Gatos.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Productos from '../components/Productos';
function Gatos() {
  return (
    <div>
      <Header />
      <main style={{ padding: '20px' }}>
        <h1>Productos para Gatos</h1>
        <Productos categoria="gatos"/>
      </main>
      <Footer />
    </div>
  );
}

export default Gatos;
