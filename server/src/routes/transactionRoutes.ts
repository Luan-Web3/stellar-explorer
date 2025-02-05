import { Router } from 'express';
import { getLatestTransactions } from '../controllers/transactionController';

const router = Router();

router.get('/transactions', getLatestTransactions);

export default router;
