import { Request, Response } from 'express';
import api from '../axios';

import { LedgerDTO } from '../dtos/ledger.dto';

export const getLatestLedgers = async (req: Request, res: Response) => {
    try {
        const response = await api.get('/ledgers', {
            params: {
                limit: 10,
                order: 'desc'
            }
        });

        const ledgers: LedgerDTO[] = response.data._embedded.records.map((ledger: any) => ({
            sequence: ledger.sequence,
            transactionCount: ledger.successful_transaction_count,
            closedAt: ledger.closed_at
        }));

        res.json(ledgers);
    } catch (error: any) {
        console.error('Error fetching latest ledgers:', error.message);
        res.status(500).json({ error: 'Error fetching latest ledgers' });
    }
};

export const getLedgerDetails = async (req: Request, res: Response) => {
    try {
        const { sequence } = req.params;
        const response = await api.get(`/ledgers/${sequence}`);
        res.json(response.data);
    } catch (error: any) {
        console.error('Error fetching ledger details:', error.message);
        res.status(500).json({ error: 'Error fetching ledger details' });
    }
};