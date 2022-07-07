import { Router } from 'express';
import matchController from '../controllers/MatchController';

const router = new Router();

router.post('/', matchController.index);

export default router;
