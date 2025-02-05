import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importe os componentes do React Router
import Header from './components/header/Header'; // Importe o componente Header
import { Home } from './pages/home/Home'; // Importação nomeada // Importe o componente Home
import Accounts from './pages/Accounts'; // Importe o componente Accounts
import Blocks from './pages/Blocks'; // Importe o componente Blocks
import Transactions from './pages/Transactions'; // Importe o componente Transactions
import './styles/global.css'; // Importa o CSS global

function App() {
  return (
    <Router> {/* Envolva seu aplicativo com o Router */}
      <Header /> {/* Renderize o componente Header em todas as páginas */}
      <Routes> {/* Defina suas rotas dentro do Routes */}
        <Route path="/" element={<Home />} /> {/* Rota para a página inicial */}
        <Route path="/accounts" element={<Accounts />} /> {/* Rota para a página de contas */}
        <Route path="/blocks/:hash" element={<Blocks />} /> {/* Adicionando o parâmetro hash */}
        <Route path="/transactions/:txId" element={<Transactions />} /> {/* Rota para a página de transações */}
      </Routes>
    </Router>
  );
}

export default App;