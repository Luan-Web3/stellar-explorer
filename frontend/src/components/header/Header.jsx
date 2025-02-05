import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'; // Importe o arquivo de estilos

function Header() {
  return (
    <header className={styles.header}> {/* Adicione a classe CSS ao elemento header */}
      <nav className={styles.nav}> {/* Adicione a classe CSS ao elemento nav */}
        <ul>
          <li>
            <Link to="/" className={styles.link}>Home</Link> {/* Adicione a classe CSS ao elemento Link */}
          </li>
          <li>
            <Link to="/accounts" className={styles.link}>Accounts</Link> {/* Adicione a classe CSS ao elemento Link */}
          </li>
          <li>
            <Link to="/blocks" className={styles.link}>Blocks</Link> {/* Adicione a classe CSS ao elemento Link */}
          </li>
          <li>
            <Link to="/transactions" className={styles.link}>Transactions</Link> {/* Adicione a classe CSS ao elemento Link */}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;