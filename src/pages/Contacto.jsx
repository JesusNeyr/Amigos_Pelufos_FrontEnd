// src/pages/Contacto.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Contacto() {
  return (
    <>
      <Header />
      <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
        <h2>Contáctanos</h2>
        <form>
          <label>Nombre</label>
          <input type="text" placeholder="Tu nombre" required />

          <label>Email</label>
          <input type="email" placeholder="correo@ejemplo.com" required />

          <label>Mensaje</label>
          <textarea placeholder="Escribe tu mensaje aquí..." required />

          <button type="submit">Enviar</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Contacto;
