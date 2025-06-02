import React from 'react';
import fondo from '../../assets/imagenes/fondo.jpg'; 

function Banner (){
    return(
        <div className="banner-photo" title="photo">
            <img src={fondo} alt="photo" className="photo-banner-img" />
        </div>
    );
}
export default Banner;
