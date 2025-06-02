import React from "react";
import logo from '../../assets/imagenes/logo.jpg';

function Logo(){
    return(
        <div className="logo-section">
            <a href="/" title="home">
            <div className="logo-wrapper">
                <img src={logo} alt="logoPetShop" className="logo-img" />
            </div>
            </a>
        </div>
    )
}

export default Logo;