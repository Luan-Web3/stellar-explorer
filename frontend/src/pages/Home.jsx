import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import SearchBar from '../components/SearchBar';
import BlockList from '../components/BlockList';
import TransactionList from '../components/TransactionList';

function Home() {
  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom sx={{ marginTop: 2 }}>
        Explorador de Blocos Stellar
      </Typography>

      <SearchBar />

      <Grid container spacing={3} sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            Últimos Blocos
          </Typography>
          <BlockList />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            Últimas Transações
          </Typography>
          <TransactionList />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;