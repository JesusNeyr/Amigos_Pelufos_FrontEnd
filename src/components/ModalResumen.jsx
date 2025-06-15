function ModalResumen({ total = 0, carrito = [], onClose = () => {} }) {
  if (!Array.isArray(carrito)) return null; // Evita errores por mal tipo
  console.log('Modal cargando con:', { total, carrito });
  const IGV = 0.21;
  const totalConIGV = total + total * IGV;

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <button className="cerrar" onClick={onClose}>X</button>
        <h2>Resumen de Compra</h2>

        <ul>
          {carrito.map((item) => (
            <li key={item.id}>
              {item.nombre} x {item.cantidad} = ${item.precio * item.cantidad}
            </li>
          ))}
        </ul>

        <p>Subtotal: ${total.toLocaleString()}</p>
        <p>IGV (21%): ${Math.round(total * IGV).toLocaleString()}</p>
        <h3>Total con IGV: ${Math.round(totalConIGV).toLocaleString()}</h3>

        <form onSubmit={(e) => { e.preventDefault(); alert('Pago procesado ✅'); onClose(); }}>
          <input type="text" placeholder="Nombre en la tarjeta" required />
          <input type="text" placeholder="Número de tarjeta" required />
          <input type="text" placeholder="MM/AA" required />
          <input type="text" placeholder="CVV" required />
          <button type="submit">Pagar</button>
        </form>
      </div>
    </div>
  );
}
export default ModalResumen;