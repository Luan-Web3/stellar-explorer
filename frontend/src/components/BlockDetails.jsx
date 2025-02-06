import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Container, Grid, Paper } from '@mui/material';
import api from '../axios';

function BlockDetails() {
  const { id } = useParams();
  const [block, setBlock] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBlockDetails() {
      try {
        const response = await api.get(`/ledgers/${id}`);
        setBlock(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchBlockDetails();
  }, [id]);

  if (loading) {
    return <Typography>Carregando detalhes do bloco...</Typography>;
  }

  if (error) {
    return <Typography color="error">Erro ao carregar detalhes do bloco: {error.message}</Typography>;
  }

  if (!block) {
    return <Typography>Bloco não encontrado.</Typography>;
  }

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Detalhes do Bloco #{id}
      </Typography>
      <Paper elevation={3} sx={{ padding: 3, marginTop: 2 }}>
        <Typography
          component="pre"
          sx={{
            whiteSpace: 'pre-wrap',
            fontFamily: 'monospace',
            overflow: 'auto',
            maxWidth: '100%',
            wordBreak: 'break-word'
          }}
        >
          {JSON.stringify(block, null, 2)}
        </Typography>
      </Paper>
    </Container>
  );
}

export default BlockDetails;