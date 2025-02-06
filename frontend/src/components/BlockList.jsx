import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Divider, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import api from '../axios';

function BlockList() {
  const [blocks, setBlocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBlocks() {
      try {
        const res = await api.get('/ledgers');
        console.log(res.data);
        setBlocks(res.data);
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
      {blocks.map((block, index) => (
        <React.Fragment key={block.sequence}>
          <ListItem component={Link} to={`/block/${block.sequence}`}>
            <ListItemText primary={`Bloco #${block.sequence}`} />
          </ListItem>
          {index < blocks.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </List>
  );
}

export default BlockList;