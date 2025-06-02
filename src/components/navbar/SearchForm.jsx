import React from 'react';

function SearchForm(){
    return(    
        <div className="form-nav-container">
            <form className="search-container">
            <input
                type="search"
                className="search-bar"
                placeholder="Buscar productos, alimentos ..."
                aria-label="buscar-productos"
                />
            <button className="search-btn" type="submit" aria-label="Buscar">
                🔍
            </button>
            </form>
        </div>
    );
} 

export default SearchForm;
