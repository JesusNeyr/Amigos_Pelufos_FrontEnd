import React from 'react';
import useAuth  from '../context/AuthContext';

const Login = () => {
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulación: login como admin
    login('admin');
    // si tuvieras rutas, podrías redirigir al dashboard con useNavigate
  };

  return (
    <div className="login-container">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Usuario" required />
        <input type="password" placeholder="Contraseña" required />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;
