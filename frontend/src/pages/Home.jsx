import React, { useState } from 'react';
import BlockList from '../components/BlockList';
import SearchForm from '../components/SearchForm';
import axios from 'axios';
import './Home.module.css';

const mockBlocks = Array.from({ length: 10 }, (_, i) => ({
  id: (i + 1).toString(),
  timestamp: new Date(Date.now() - i * 60000).toISOString(),
  transaction_count: Math.floor(Math.random() * 100),
  validator: `Validator ${i + 1}`,
}));

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [latestBlocks, setLatestBlocks] = useState(mockBlocks); // Dados mockados
  const [loading, setLoading] = useState(false); // Não precisa carregar nada
  const [error, setError] = useState(null);

  // useEffect está comentado
  /*useEffect(() => {
    const fetchLatestBlocks = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get('/api/latest_blocks');
        setLatestBlocks(response.data);
      } catch (error) {
        console.error('Erro ao buscar blocos:', error);
        setError('Erro ao carregar blocos.');
      } finally {
        setLoading(false);
      }
    };

    fetchLatestBlocks();
  }, []);*/

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`/api/search?q=${searchQuery}`);
      console.log('Resultados da busca:', response.data);
    } catch (error) {
      console.error('Erro na busca:', error);
      setError('Erro na busca.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Explorador Stellar</h1>

      <SearchForm
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />

      <h2>Últimos Blocos Minerados</h2>

      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}

      <BlockList blocks={latestBlocks} />
    </div>
  );
}

export { Home };