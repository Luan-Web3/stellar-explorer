import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      // Verifica se o termo de pesquisa não está vazio após remover espaços em branco
      const trimmedSearchTerm = searchTerm.trim();

      // Tenta converter o termo de pesquisa para um número (para busca de blocos)
      const blockSequence = Number(trimmedSearchTerm);

      if (!isNaN(blockSequence)) {
        // Se for um número, navega para a página de detalhes do bloco
        navigate(`/block/${blockSequence}`);
      } else {
        // Se não for um número, assume que é um hash de transação e navega para a página de detalhes da transação
        navigate(`/transaction/${trimmedSearchTerm}`);
      }

      setSearchTerm(''); // Limpa o campo de pesquisa após a busca
    }
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Box sx={{ display: 'flex', gap: 1, width: '100%', maxWidth: 500, margin: '20px auto' }}> {/* Centraliza e define largura máxima */}
      <TextField
        label="Pesquisar Bloco ou Transação"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={handleInputChange}
      />
      <Button variant="contained" onClick={handleSearch} sx={{ whiteSpace: 'nowrap' }}>
        Pesquisar
      </Button>
    </Box>
  );
}

export default SearchBar;