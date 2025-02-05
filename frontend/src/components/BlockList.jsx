import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Divider, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import stellarService from '../services/stellarService';

function BlockList() {
    const [blocks, setBlocks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      async function fetchBlocks() {
        try {
          const latestBlocks = await stellarService.getLatestBlocks(10); // Busca os últimos 10 blocos
          setBlocks(latestBlocks);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      }
  
      fetchBlocks();
    }, []);
  
    if (loading) {
      return <Typography>Carregando blocos...</Typography>;
    }
  
    if (error) {
      return <Typography color="error">Erro ao carregar blocos: {error.message}</Typography>;
    }
  
    return (
      <List>
        {blocks.map((block) => (
          <React.Fragment key={block.sequence}>
            <ListItem button component={Link} to={`/block/${block.sequence}`}>
              <ListItemText primary={`Bloco #${block.sequence}`} />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    );
  }
  
  export default BlockList;