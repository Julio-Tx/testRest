import { Router } from 'express';
import filterController from '../controllers/FilterController';

const router = new Router();

router.post('/', filterController.index);

export default router;
