import { Router } from 'express';
import tagsController from '../controllers/TagsController';

const router = new Router();

router.get('/', tagsController.index);

export default router;
