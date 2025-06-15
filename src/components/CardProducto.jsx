import React from 'react';

const CardProducto = ({ producto, agregarAlCarrito }) => {
  const handleAgregarCarrito = () => {
    agregarAlCarrito(producto);  // Llamamos a la función para agregar el producto al carrito
  };

  return (
    <div key={producto.id} className="producto-card">
      <img src={producto.image} alt={producto.title} />
      <h3>{producto.title}</h3>
      <p>Precio: ${producto.description}</p>
      <button onClick={handleAgregarCarrito}>Agregar al carrito</button>
    </div>
  );
};

export default CardProducto;
