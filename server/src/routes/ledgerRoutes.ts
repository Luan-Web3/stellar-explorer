import { Router } from 'express';
import { getLatestLedgers, getLedgerDetails } from '../controllers/ledgerController';

const router = Router();

router.get('/ledgers', getLatestLedgers);
router.get('/ledgers/:id', getLedgerDetails);

export default router;
