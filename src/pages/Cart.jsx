import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../style/Cart.css';
import ModalResumen from '../components/ModalResumen';
import { CarritoContext } from '../context/CarritoContex';

function Cart() {
  const [mostrarModal, setMostrarModal] = useState(false);
  const { carrito, actualizarCantidad, eliminarProducto } = useContext(CarritoContext);
  console.log(carrito);
  // Calcular el total
  const total = carrito.reduce((acc, item) => acc + item.price * item.cantidad, 0);

  return (
    <>
      <Header />
      <div className="carrito-container">
        <h2>Tu Carrito de Compras</h2>

        {carrito.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          <>
            <table className="tabla-carrito">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Cantidad</th>
                  <th>Precio</th>
                  <th>Subtotal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {carrito.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img src={item.image} alt={item.nombre} />
                      <span>{item.nombre}</span>
                    </td>
                    <td>
                      <div className="cantidad-control">
                        <button onClick={() => actualizarCantidad(item.id, item.cantidad - 1)}>-</button>
                        <input
                          type="number"
                          min="1"
                          value={item.cantidad}
                          onChange={(e) =>
                            actualizarCantidad(item.id, parseInt(e.target.value))
                          }
                        />
                        <button onClick={() => actualizarCantidad(item.id, item.cantidad + 1)}>+</button>
                      </div>
                    </td>
                    <td>${item.price.toLocaleString()}</td>
                    <td>${(item.price * item.cantidad).toLocaleString()}</td>
                    <td>
                      <button onClick={() => eliminarProducto(item.id)}>❌</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="resumen-compra">
              <h3>Total: ${total.toLocaleString()}</h3>

              {total >= 50000 && (
                <span className="envio-gratis">
                  🎉 ¡Envio gratuito por superar los $50.000!
                </span>
              )}

              <button onClick={() => setMostrarModal(true)}>Finalizar compra</button>
            </div>
            {mostrarModal && (
              <ModalResumen total={total} carrito={carrito} onClose={() => setMostrarModal(false)} />
            )}
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Cart;
