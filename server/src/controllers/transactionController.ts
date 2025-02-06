import { Request, Response } from 'express';
import api from '../axios';

import { TransactionDTO } from '../dtos/transaction.dto';

export const getLatestTransactions = async (req: Request, res: Response) => {
    try {
        const response = await api.get('/transactions', {
            params: {
                limit: 10,
                order: 'desc'
            }
        });

        const transactions: TransactionDTO[] = response.data._embedded.records.map((transaction: any) => ({
            hash: transaction.hash,
            ledger: transaction.ledger,
            createdAt: transaction.created_at
        }));

        res.json(transactions);
    } catch (error: any) {
        console.error('Error fetching latest transactions:', error.message);
        res.status(500).json({ error: 'Error fetching latest transactions' });
    }
};

export const getTransactionDetails = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const response = await api.get(`/transactions/${id}`);
        res.json(response.data);
    } catch (error: any) {
        console.error('Error fetching transaction details:', error.message);
        res.status(500).json({ error: 'Error fetching transaction details' });
    }
};