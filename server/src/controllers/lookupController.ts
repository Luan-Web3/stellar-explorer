import { Request, Response } from 'express';
import api from '../axios';

export const getLedgerOrTransactionById = async (req: Request, res: Response) => {
    try {
        const { hash } = req.params;

        try {
            const response = await api.get(`/ledgers/${hash}`);
            return res.status(200).json({ type: 'ledger', data: response.data });
        } catch (ledgerError) {
            const response = await api.get(`/transactions/${hash}`);
            return res.status(200).json({ type: 'transaction', data: response.data });
        }
    } catch (error: any) {
        console.error('Unexpected error during lookup:', error.message);
        res.status(500).json({ error: 'Unexpected error during lookup:' });
    }
};