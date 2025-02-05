import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Container, Grid, Paper } from '@mui/material';
import stellarService from '../services/stellarService';

function BlockDetails() {
    const { id } = useParams();
    const [block, setBlock] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      async function fetchBlockDetails() {
        try {
          const blockDetails = await stellarService.getBlockDetails(id);
          setBlock(blockDetails);
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
        <Paper elevation={3} sx={{ padding: 3, marginTop: 2 }}>
          <Typography variant="h5" gutterBottom>
            Detalhes do Bloco #{block.sequence}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography><strong>Hash:</strong> {block.hash}</Typography>
              <Typography><strong>Data e Hora:</strong> {block.close_time}</Typography>
              <Typography><strong>Número de Transações:</strong> {block.successful_transaction_count}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography><strong>Fee Pool:</strong> {block.fee_pool}</Typography>
              <Typography><strong>Ledger:</strong> {block.ledger}</Typography>
              {/* Adicione outros detalhes do bloco aqui */}
            </Grid>
          </Grid>
        </Paper>
      </Container>
    );
  }
  
  export default BlockDetails;