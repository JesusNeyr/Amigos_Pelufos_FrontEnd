import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Header.css';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';
function Header() {
  const {setBusqueda} = useContext(SearchContext);
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">MiEmpresa</div>
       
        <div className="search-bar">
          <input type="text" placeholder="Buscar productos..."
          onChange={(e)=>setBusqueda(e.target.value.toLowerCase())} />
        </div>
        
        <div className="icons">
          <Link to='/login' className='icon login-icon' aria-label='login'>
            <FaUser className="icon" title="Iniciar sesión" />
          </Link>
        </div>
        <div>
            <Link to='/cart' className='icon carrito-icon' aria-label='carrito'>
            <FaShoppingCart className="icon" title="Carrito" />
          </Link>
        </div>
      </nav>

      <div className="submenu">
        <Link to="/">Home</Link>
        <Link to="/perros">Perros</Link>
        <Link to="/gatos">Gatos</Link>
        <Link to="/aves">Aves</Link>
        <Link to="/peces">Peces</Link>
        <Link to="/contacto">Contacto</Link>
      </div>
    </header>
  );
}

export default Header;
