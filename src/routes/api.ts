import { Router } from 'express';

import * as TodoController from '../controllers/todo.controller';

const router = Router();

// crud
router.get('/todo', TodoController.all);
router.post('/todo', TodoController.add);
router.put('/todo/:id', TodoController.update);
router.delete('/todo/:id', TodoController.remove); // delete é uma palavra que não vai funcionar

export default router;