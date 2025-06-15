// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { SearchProvider } from './context/SearchContext.jsx';
import { CarritoProvider } from './context/CarritoContex.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CarritoProvider>
        <SearchProvider>
          <App />
        </SearchProvider>
      </CarritoProvider>  
    </BrowserRouter>
  </React.StrictMode>
);
