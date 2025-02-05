import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Container, Grid, Paper } from '@mui/material';
import stellarService from '../services/stellarService';

function TransactionDetails() {
    const { id } = useParams();
    const [transaction, setTransaction] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      async function fetchTransactionDetails() {
        try {
          const transactionDetails = await stellarService.getTransactionDetails(id);
          setTransaction(transactionDetails);
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
        <Paper elevation={3} sx={{ padding: 3, marginTop: 2 }}>
          <Typography variant="h5" gutterBottom>
            Detalhes da Transação: {transaction.hash}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography><strong>Hash:</strong> {transaction.hash}</Typography>
              <Typography><strong>Data e Hora:</strong> {transaction.created_at}</Typography>
              <Typography><strong>Valor:</strong> {transaction.amount}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography><strong>Fonte:</strong> {transaction.source_account}</Typography>
              <Typography><strong>Destino:</strong> {transaction.destination_account}</Typography>
              {/* Adicione outros detalhes da transação aqui */}
            </Grid>
          </Grid>
        </Paper>
      </Container>
    );
  }
  
  export default TransactionDetails;