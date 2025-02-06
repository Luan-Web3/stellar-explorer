import React from 'react';
import { Container, Stack, Box, Typography } from '@mui/material';
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

      <Stack
        spacing={3}
        sx={{
          marginTop: 2,
          flexDirection: { xs: 'column', sm: 'row' }
        }}
      >
        <Box flex={1}>
          <Typography variant="h6" gutterBottom>
            Últimos Blocos
          </Typography>
          <BlockList />
        </Box>
        <Box flex={1}>
          <Typography variant="h6" gutterBottom>
            Últimas Transações
          </Typography>
          <TransactionList />
        </Box>
      </Stack>
    </Container>
  );
}

export default Home;