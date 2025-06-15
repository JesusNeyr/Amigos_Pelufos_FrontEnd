import React from 'react';
import '../style/Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section about">
          <h3>MiEmpresa</h3>
          <p>Tu tienda de confianza para el cuidado de tus mascotas. Calidad y cariño en cada producto.</p>
        </div>

        <div className="footer-section links">
          <h4>Enlaces rápidos</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/perros">Perros</a></li>
            <li><a href="/gatos">Gatos</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </div>

        <div className="footer-section social">
          <h4>Síguenos</h4>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} MiEmpresa. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;
