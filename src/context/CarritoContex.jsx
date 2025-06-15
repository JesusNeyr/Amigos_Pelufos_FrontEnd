import React, { createContext, useState } from 'react';

// Creamos el contexto
export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  // Función para agregar al carrito
  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => {
      const existe = prev.find((item) => item.id === producto.id);
      if (existe) {
        return prev.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
        return [...prev, { ...producto, cantidad: 1 }];
      }
    });
  };

  // Función para actualizar la cantidad
  const actualizarCantidad = (id, cantidad) => {
    if (cantidad < 1) return;
    setCarrito((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, cantidad } : item
      )
    );
  };

  // Función para eliminar un producto
  const eliminarProducto = (id) => {
    setCarrito((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito, actualizarCantidad, eliminarProducto }}>
      {children}
    </CarritoContext.Provider>
  );
};