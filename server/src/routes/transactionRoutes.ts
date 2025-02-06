import { Router } from 'express';
import { getLatestTransactions, getTransactionDetails } from '../controllers/transactionController';

const router = Router();

router.get('/transactions', getLatestTransactions);
router.get('/transactions/:id', getTransactionDetails);

export default router;
