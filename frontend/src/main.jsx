import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles.jsx'; // Importa os estilos globais

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);