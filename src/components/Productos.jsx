// src/components/Productos.jsx
import React, { useContext, useEffect, useState } from 'react';
import '../style/Productos.css';
import { SearchContext } from '../context/SearchContext';
import { CarritoContext } from '../context/CarritoContex';
import CardProducto from './CardProducto';
function Productos({ categoria }) {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const {busqueda} = useContext(SearchContext);
  const {agregarAlCarrito}= useContext(CarritoContext)

  useEffect(() => {
    setCargando(true);
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
        setCargando(false);
      })
      .catch((error) => {
        console.error('Error al cargar los productos:', error);
        setCargando(false);
      });
  }, []);
  const productosFiltrados = productos.filter(p =>
    p.title.toLowerCase().includes(busqueda)
  );

  if (cargando) return <p>Cargando productos...</p>;

  return (
    <div className="productos-container">
      {productosFiltrados.length === 0 ? (
      <p>No hay productos para mostrar.</p>
      ) : (productosFiltrados.map((producto) => (
        <CardProducto
            key={producto.id}
            producto={producto}
            agregarAlCarrito={agregarAlCarrito}
          />
      )))}
    </div>
  );
}

export default Productos;
