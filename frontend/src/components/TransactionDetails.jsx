import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Container, Grid, Paper } from '@mui/material';
import stellarService from '../services/stellarService';
import api from '../axios';

function TransactionDetails() {
  const { id } = useParams();
  const [transaction, setTransaction] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTransactionDetails() {
      try {
        const response = await api.get(`/transactions/${id}`);
        setTransaction(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchTransactionDetails();
  }, [id]);

  if (loading) {
    return <Typography>Carregando detalhes da transação...</Typography>;
  }

  if (error) {
    return <Typography color="error">Erro ao carregar detalhes da transação: {error.message}</Typography>;
  }

  if (!transaction) {
    return <Typography>Transação não encontrada.</Typography>;
  }

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Detalhes da Transação: {transaction.hash}
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
          {JSON.stringify(transaction, null, 2)}
        </Typography>
      </Paper>
    </Container>
  );
}

export default TransactionDetails;