// src/pages/Login.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Login() {
  return (
    <>
      <Header />
      <div style={{ padding: '2rem', maxWidth: '400px', margin: 'auto' }}>
        <h2>Iniciar Sesión</h2>
        <form>
          <label>Email</label>
          <input type="email" placeholder="usuario@ejemplo.com" required />

          <label>Contraseña</label>
          <input type="password" placeholder="••••••" required />

          <button type="submit">Ingresar</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Login;
