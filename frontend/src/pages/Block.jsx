import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button, Container, Paper, Typography, Grid } from '@mui/material';
import BlockDetails from '../components/BlockDetails';

function Block() {
  const { id } = useParams();

  return (
    <Container>
      <Paper elevation={3} sx={{ padding: 3, marginTop: 2 }}>
        <Button component={Link} to="/" variant="contained" sx={{ marginBottom: 2 }}>
          Voltar
        </Button>
        <BlockDetails blockId={id} />
      </Paper>
    </Container>
  );
}

export default Block;