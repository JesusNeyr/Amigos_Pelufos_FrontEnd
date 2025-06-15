// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Perros from './pages/Perros';
import Gatos from './pages/Gatos';
import Aves from './pages/Aves';
import Peces from './pages/Peces';
import Contacto from './pages/Contacto';
import Login from './pages/Login';
import Cart from './pages/Cart';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/perros" element={<Perros />} />
      <Route path="/gatos" element={<Gatos />} />
      <Route path="/aves" element={<Aves />} />
      <Route path="/peces" element={<Peces />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path='/login' element={<Login />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
  );
}

export default App;
