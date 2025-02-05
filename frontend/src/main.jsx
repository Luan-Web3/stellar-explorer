import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Importe o App

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/* Renderize o App */}
  </React.StrictMode>
);
