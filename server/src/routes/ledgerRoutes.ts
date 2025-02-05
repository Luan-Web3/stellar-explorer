import { Router } from 'express';
import { getLatestLedgers } from '../controllers/ledgerController';

const router = Router();

router.get('/ledgers', getLatestLedgers);

export default router;
