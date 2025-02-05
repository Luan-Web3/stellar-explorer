import { Router } from 'express';
import { getLedgerOrTransactionById } from '../controllers/lookupController';

const router = Router();

router.get('/lookup/:hash', getLedgerOrTransactionById);


export default router;
