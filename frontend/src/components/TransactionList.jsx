import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Divider, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import stellarService from '../services/stellarService';

function TransactionList() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTransactions() {
      try {
        const latestTransactions = await stellarService.getLatestTransactions(10); // Busca as últimas 10 transações
        setTransactions(latestTransactions);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchTransactions();
  }, []);

  if (loading) {
    return <Typography>Carregando transações...</Typography>;
  }

  if (error) {
    return <Typography color="error">Erro ao carregar transações: {error.message}</Typography>;
  }

  return (
    <List>
      {transactions.map((transaction) => (
        <React.Fragment key={transaction.hash}>
          <ListItem button component={Link} to={`/transaction/${transaction.hash}`}>
            <ListItemText primary={transaction.hash} />
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
}

export default TransactionList;