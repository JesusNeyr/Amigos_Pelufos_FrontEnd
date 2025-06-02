import React from 'react';
function NavMenu(){
   
    return(
        <nav className="main-nav" role="navigation" aria-label="navegacion_principal">
            <div className="nav-container">
            <ul className="nav-menu">
                <li>
                <a href="/products">
                    <span className="nav-icon">🛍️</span> Productos
                </a>
                </li>
                <li>
                <a href="/promociones">
                    <span className="nav-icon">🏷️</span> Promociones
                </a>
                </li>
                <li>
                <a href="/contacto">
                    <span className="nav-icon">📞</span> Contacto
                </a>
                </li>
                <li>
                <a href="#">
                    <span className="nav-icon" >🔐</span> Login
                </a>
                </li>
            </ul>
            </div>
        </nav>
    )
};

export default NavMenu;
